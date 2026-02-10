import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
// Dynamic import for pdf-parse to handle CommonJS module
let pdfParseModule = null;

// Disable default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Rate limiting - simple in-memory store (use Redis in production)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 3; // Max 3 submissions per 15 minutes per IP

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitStore.get(ip) || [];
  
  // Remove old requests outside the window
  const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return true;
}

// Validate reCAPTCHA
async function validateRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // When no secret key is set (e.g. local dev), skip verification entirely.
  // Use .env.local with Google's reCAPTCHA test keys for local testing.
  if (!secretKey) {
    console.log('RECAPTCHA_SECRET_KEY not set; skipping verification');
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Validate CAPTCHA
function validateCaptcha(captchaAnswer, captchaQuestion) {
  // Simple math CAPTCHA validation
  const [num1, num2] = captchaQuestion.split('+').map(n => parseInt(n.trim()));
  const expectedAnswer = num1 + num2;
  return parseInt(captchaAnswer) === expectedAnswer;
}

// Check if PDF is password protected using pdf-parse
async function checkPDFPassword(filePath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    
    // First, verify it's actually a PDF by checking header
    const pdfHeader = fileBuffer.toString('ascii', 0, 4);
    if (pdfHeader !== '%PDF') {
      throw new Error('Invalid PDF file. The file does not appear to be a valid PDF.');
    }
    
    // Dynamically load pdf-parse if not already loaded
    if (!pdfParseModule) {
      try {
        pdfParseModule = require('pdf-parse');
        // Handle both default export and named export
        if (typeof pdfParseModule !== 'function') {
          pdfParseModule = pdfParseModule.default || pdfParseModule.pdfParse || pdfParseModule;
        }
      } catch (importError) {
        console.error('Failed to load pdf-parse:', importError.message);
        // If pdf-parse can't be loaded, skip password check (not critical)
        console.warn('Skipping PDF password check - pdf-parse not available');
        return false;
      }
    }
    
    // Ensure pdfParseModule is a function
    if (typeof pdfParseModule !== 'function') {
      console.warn('pdf-parse is not a function, skipping password check');
      return false;
    }
    
    // Try to parse the PDF - pdf-parse will throw an error if password-protected
    try {
      // Parse with minimal options to reduce potential errors
      await pdfParseModule(fileBuffer, { 
        max: 1 // Only parse first page for performance
      });
      // If we get here, PDF is not password-protected
      return false;
    } catch (parseError) {
      // Check if error is specifically due to password protection/encryption
      const errorMessage = (parseError.message || '').toLowerCase();
      const errorCode = parseError.code || '';
      const errorString = JSON.stringify(parseError).toLowerCase();
      
      // Common password/encryption related error patterns from pdf-parse
      const isPasswordProtected = 
        errorMessage.includes('password') ||
        errorMessage.includes('encrypted') ||
        errorMessage.includes('encrypt') ||
        errorMessage.includes('invalid password') ||
        errorMessage.includes('encrypted document') ||
        errorMessage.includes('decryption') ||
        errorString.includes('password') ||
        errorString.includes('encrypted') ||
        errorString.includes('encrypt') ||
        errorCode === 'ENCRYPTED' ||
        errorCode === 'PASSWORD_REQUIRED';
      
      if (isPasswordProtected) {
        console.log('Password-protected PDF detected:', errorMessage);
        return true; // Password-protected PDF
      }
      
      // For other parsing errors, log but allow through
      // Many valid PDFs have minor parsing issues (metadata, fonts, etc.) but are still readable
      console.warn('PDF parse warning (allowing through):', errorMessage || parseError.code || 'Unknown error');
      
      // Only reject if it's a clear file corruption/format error
      if (errorMessage.includes('corrupted') || 
          (errorMessage.includes('invalid') && errorMessage.includes('format')) ||
          errorMessage.includes('malformed') ||
          errorCode === 'INVALID_PDF') {
        throw new Error('Invalid PDF file. The file appears to be corrupted or malformed. Please try re-saving your PDF.');
      }
      
      // For all other errors (metadata issues, font parsing, etc.), allow through
      // These are often non-critical and don't prevent PDF viewing
      return false;
    }
  } catch (error) {
    // Handle file system errors or validation errors
    if (error.message && (
      error.message.includes('Invalid PDF file') ||
      error.message.includes('corrupted') ||
      error.message.includes('malformed')
    )) {
      throw error; // Re-throw validation errors
    }
    
    console.error('Error checking PDF:', error);
    // Only throw error if we're certain it's a real problem
    // Otherwise, log and allow through to avoid false positives
    if (error.message && error.message.includes('ENOENT')) {
      throw new Error('PDF file not found. Please try uploading again.');
    }
    
    // For unknown errors, log but allow through to avoid blocking valid PDFs
    console.warn('Unknown PDF check error, allowing through:', error.message);
    return false;
  }
}

// Validate PDF file
function validatePDFFile(file) {
  // Check MIME type first - strict enforcement of application/pdf
  if (!file.mimetype || file.mimetype !== 'application/pdf') {
    return { 
      valid: false, 
      error: 'Invalid file type. Only PDF files (application/pdf) are allowed. Please upload a PDF file.' 
    };
  }
  
  // Check file extension as secondary check
  const ext = path.extname(file.originalFilename || file.name || '').toLowerCase();
  if (ext !== '.pdf') {
    return { 
      valid: false, 
      error: 'Invalid file extension. Only PDF files are allowed. Please upload a file with .pdf extension.' 
    };
  }
  
  // Check file size (5MB max)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return { 
      valid: false, 
      error: 'File size exceeds 5MB limit. Please upload a smaller PDF file.' 
    };
  }
  
  // Check if file is actually a PDF by reading first bytes
  try {
    const fileBuffer = fs.readFileSync(file.filepath);
    const pdfHeader = fileBuffer.toString('ascii', 0, 4);
    if (pdfHeader !== '%PDF') {
      return { 
        valid: false, 
        error: 'Invalid PDF file. The file does not appear to be a valid PDF. Please ensure the file is a proper PDF document.' 
      };
    }
  } catch (error) {
    return { 
      valid: false, 
      error: 'Error reading file. Please try uploading the file again.' 
    };
  }
  
  return { valid: true };
}

// Email configuration
function getEmailTransporter() {
  // Option 1: Generic SMTP configuration (recommended for custom domains)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Optional TLS configuration
      ...(process.env.SMTP_REJECT_UNAUTHORIZED === 'false' && {
        tls: {
          rejectUnauthorized: false,
        },
      }),
    });
  }

  // Option 2: Gmail configuration
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  // Option 3: SendGrid configuration
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  return null;
}

// No-reply address for automated career emails (set CAREERS_NOREPLY_FROM if your SMTP requires a different sender)
const getNoReplyFrom = () =>
  `"YNM Careers (Do Not Reply)" <${process.env.CAREERS_NOREPLY_FROM || 'noreply@ynmsafety.com'}>`;

const hrEmail = () => process.env.HR_EMAIL || 'ynm.hr@ynmsafety.com';

// Send confirmation email to applicant (no-reply) with resume PDF attached
async function sendConfirmationEmail(formData, resumeFile) {
  const transporter = getEmailTransporter();
  if (!transporter) {
    console.warn('Email not configured. Skipping confirmation email.');
    return;
  }

  const expLabel = formData.experience ? (formData.experience.includes('-') || formData.experience.includes('+') ? formData.experience : formData.experience) : '—';
  const expSuffix = /^\d+$/.test(formData.experience) ? ' years' : '';

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Application Received - YNM Safety</title></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#74060D 0%,#9A1B2E 100%);padding:32px;text-align:center;">
            <h1 style="color:#F7F3EA;margin:0;font-size:26px;font-weight:800;">YNM Safety</h1>
            <p style="color:#E6D3A3;margin:10px 0 0;font-size:13px;">Application Received</p>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 32px;">
            <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 20px;">Dear <strong>${formData.name}</strong>,</p>
            <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 24px;">Thank you for applying to <strong>YNM Safety Pan Global Trade Pvt Ltd</strong>. We have received your application for <strong>${formData.position}</strong>.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F3EA;border:1px solid #E6D3A3;border-radius:8px;">
              <tr><td style="padding:16px 20px;border-bottom:1px solid #E6D3A3;color:#74060D;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Application Summary</td></tr>
              <tr><td style="padding:16px 20px;">
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr><td style="color:#666;font-size:14px;width:120px;">Name</td><td style="color:#333;font-size:14px;">${formData.name}</td></tr>
                  <tr><td style="color:#666;font-size:14px;">Position</td><td style="color:#333;font-size:14px;">${formData.position}</td></tr>
                  <tr><td style="color:#666;font-size:14px;">Experience</td><td style="color:#333;font-size:14px;">${expLabel}${expSuffix}</td></tr>
                  <tr><td style="color:#666;font-size:14px;">Email</td><td style="color:#333;font-size:14px;">${formData.email}</td></tr>
                  <tr><td style="color:#666;font-size:14px;">Phone</td><td style="color:#333;font-size:14px;">${formData.phone}</td></tr>
                </table>
              </td></tr>
            </table>
            <p style="color:#333;font-size:15px;line-height:1.6;margin:24px 0 16px;">Our HR team will review your application and resume and contact you within <strong style="color:#74060D;">10 working days</strong>.</p>
            <p style="color:#333;font-size:15px;line-height:1.6;margin:0 0 24px;">For queries, please contact <a href="mailto:hr@ynmsafety.com" style="color:#74060D;">hr@ynmsafety.com</a> or <strong>+91 96765 75770</strong>. Do not reply to this email.</p>
            <p style="color:#333;font-size:15px;line-height:1.6;margin:0;">Best regards,<br><strong style="color:#74060D;">HR Team</strong><br>YNM Safety Pan Global Trade Pvt Ltd</p>
          </td>
        </tr>
        <tr>
          <td style="background:#F7F3EA;padding:20px 32px;text-align:center;border-top:2px solid #E6D3A3;">
            <p style="color:#666;font-size:12px;margin:0 0 8px;"><strong>YNM Safety Pan Global Trade Pvt Ltd</strong><br>Survey, 84P, Gowra Fountain Head, 4th Floor, Suite 401 A, Patrika Nagar, Madhapur, Hyderabad, Telangana 500081</p>
            <p style="color:#999;font-size:11px;margin:12px 0 0;"><strong style="color:#74060D;">No-reply.</strong> This is an automated message. Do not reply to this email.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const emailText = `Dear ${formData.name},\n\nThank you for applying to YNM Safety Pan Global Trade Pvt Ltd. We have received your application for ${formData.position}.\n\nApplication: ${formData.name} | ${formData.position} | ${expLabel}${expSuffix} | ${formData.email} | ${formData.phone}\n\nOur HR team will review and contact you within 10 working days. For queries: hr@ynmsafety.com or +91 96765 75770. Do not reply to this email.\n\nBest regards,\nHR Team\nYNM Safety Pan Global Trade Pvt Ltd\n\n---\nNo-reply. This is an automated message.`;

  const mailOptions = {
    from: getNoReplyFrom(),
    to: formData.email,
    subject: 'Application Received - YNM Safety',
    text: emailText,
    html: emailHtml,
    headers: { 'Auto-Submitted': 'auto-generated' },
    attachments: resumeFile ? [{
      filename: resumeFile.originalFilename || 'resume.pdf',
      path: resumeFile.filepath,
      contentType: 'application/pdf'
    }] : []
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error: error.message };
  }
}

// Send HR notification with PDF attached (no-reply, do not reply)
async function sendHRNotificationEmail(formData, resumeFile) {
  const transporter = getEmailTransporter();
  if (!transporter) {
    console.warn('Email not configured. Skipping HR notification.');
    return;
  }

  const expLabel = formData.experience ? (formData.experience.includes('-') || formData.experience.includes('+') ? formData.experience : formData.experience) : '—';
  const expSuffix = /^\d+$/.test(formData.experience) ? ' years' : '';
  const resumeName = resumeFile?.originalFilename || resumeFile?.newFilename || 'resume.pdf';
  const hasCover = formData.coverLetter && String(formData.coverLetter).trim().length > 0;

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Job Application - ${formData.position}</title></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
    <tr><td align="center">
      <table width="640" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#74060D 0%,#9A1B2E 100%);padding:28px 32px;text-align:left;">
            <h1 style="color:#F7F3EA;margin:0;font-size:22px;font-weight:800;">New Job Application</h1>
            <p style="color:#E6D3A3;margin:8px 0 0;font-size:13px;">Careers – YNM Safety</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="padding:12px 16px;background:#F7F3EA;border:1px solid #E6D3A3;border-radius:8px;color:#74060D;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Applicant</td>
              </tr>
              <tr><td style="padding:16px;border:1px solid #E6D3A3;border-top:none;border-radius:0 0 8px 8px;">
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr><td style="color:#666;font-size:13px;width:140px;">Full name</td><td style="color:#333;font-size:14px;font-weight:600;">${formData.name}</td></tr>
                  <tr><td style="color:#666;font-size:13px;">Position</td><td style="color:#333;font-size:14px;">${formData.position}</td></tr>
                  <tr><td style="color:#666;font-size:13px;">Experience</td><td style="color:#333;font-size:14px;">${expLabel}${expSuffix}</td></tr>
                  <tr><td style="color:#666;font-size:13px;">Email</td><td style="color:#333;font-size:14px;"><a href="mailto:${formData.email}" style="color:#74060D;">${formData.email}</a></td></tr>
                  <tr><td style="color:#666;font-size:13px;">Phone</td><td style="color:#333;font-size:14px;">${formData.phone}</td></tr>
                </table>
              </td></tr>
            </table>
            ${hasCover ? `
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr><td style="padding:12px 16px;background:#F7F3EA;border:1px solid #E6D3A3;border-radius:8px;color:#74060D;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Cover letter</td></tr>
              <tr><td style="padding:16px;border:1px solid #E6D3A3;border-top:none;border-radius:0 0 8px 8px;color:#444;font-size:14px;line-height:1.6;white-space:pre-wrap;">${String(formData.coverLetter).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}</td></tr>
            </table>
            ` : ''}
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:12px 16px;background:#e8f5e9;border:1px solid #a5d6a7;border-radius:8px;color:#2e7d32;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Resume (PDF)</td></tr>
              <tr><td style="padding:16px;border:1px solid #E6D3A3;border-top:none;border-radius:0 0 8px 8px;color:#333;font-size:14px;">Attached: <strong>${resumeName}</strong></td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#F7F3EA;padding:16px 32px;text-align:center;border-top:2px solid #E6D3A3;">
            <p style="color:#666;font-size:11px;margin:0;"><strong>No-reply.</strong> This is an automated notification. Do not reply to this email. Contact the candidate at the email above.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const emailText = `New Job Application – YNM Safety\n\nApplicant: ${formData.name}\nPosition: ${formData.position}\nExperience: ${expLabel}${expSuffix}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${hasCover ? `Cover letter:\n${formData.coverLetter}\n\n` : ''}Resume: Attached (${resumeName})\n\n---\nNo-reply. Do not reply to this email.`;

  let attachment = null;
  if (resumeFile?.filepath && fs.existsSync(resumeFile.filepath)) {
    attachment = {
      filename: resumeFile.originalFilename || resumeFile.newFilename || 'resume.pdf',
      content: fs.readFileSync(resumeFile.filepath),
    };
  }

  const mailOptions = {
    from: getNoReplyFrom(),
    to: hrEmail(),
    subject: `New Job Application: ${formData.position} – ${formData.name}`,
    text: emailText,
    html: emailHtml,
    headers: { 'Auto-Submitted': 'auto-generated' },
    ...(attachment ? { attachments: [attachment] } : {}),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('HR notification sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending HR notification:', error);
    return { success: false, error: error.message };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                     req.headers['x-real-ip'] || 
                     req.connection.remoteAddress || 
                     'unknown';

    // Rate limiting check
    if (!checkRateLimit(clientIP)) {
      return res.status(429).json({ 
        error: 'Too many requests. Please try again after 15 minutes.' 
      });
    }

    // Parse form data with formidable
    const form = new IncomingForm({
      maxFileSize: 5 * 1024 * 1024, // 5MB
      keepExtensions: true,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Extract form fields
    const formData = {
      name: fields.name?.[0] || '',
      email: fields.email?.[0] || '',
      phone: fields.phone?.[0] || '',
      position: fields.position?.[0] || '',
      experience: fields.experience?.[0] || '',
      coverLetter: fields.coverLetter?.[0] || '',
      captchaAnswer: fields.captchaAnswer?.[0] || '',
      captchaQuestion: fields.captchaQuestion?.[0] || '',
      recaptchaToken: fields.recaptchaToken?.[0] || '',
      ip: clientIP,
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.position) {
      return res.status(400).json({ error: 'All required fields must be filled.' });
    }

    // Validate reCAPTCHA (only if configured)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!formData.recaptchaToken) {
        return res.status(400).json({ error: 'Please complete the "I\'m not a robot" verification.' });
      }

      const recaptchaValid = await validateRecaptcha(formData.recaptchaToken);
      if (!recaptchaValid) {
        return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
      }
    } else {
      console.log('RECAPTCHA_SECRET_KEY not set; skipping reCAPTCHA check for careers form');
    }

    // Validate CAPTCHA
    if (!formData.captchaAnswer || !formData.captchaQuestion) {
      return res.status(400).json({ error: 'CAPTCHA verification is required.' });
    }

    if (!validateCaptcha(formData.captchaAnswer, formData.captchaQuestion)) {
      return res.status(400).json({ error: 'CAPTCHA verification failed. Please try again.' });
    }

    // Validate resume file
    const resumeFile = files.resume?.[0];
    if (!resumeFile) {
      return res.status(400).json({ error: 'Resume file is required.' });
    }

    // Validate PDF - strict enforcement of application/pdf MIME type
    const pdfValidation = validatePDFFile(resumeFile);
    if (!pdfValidation.valid) {
      // Clean up file
      if (fs.existsSync(resumeFile.filepath)) {
        fs.unlinkSync(resumeFile.filepath);
      }
      return res.status(400).json({ error: pdfValidation.error });
    }

    // Check for password protection using pdf-parse
    try {
      const isPasswordProtected = await checkPDFPassword(resumeFile.filepath);
      if (isPasswordProtected) {
        // Clean up file
        if (fs.existsSync(resumeFile.filepath)) {
          fs.unlinkSync(resumeFile.filepath);
        }
        return res.status(400).json({ 
          error: 'Password-protected PDF files are not allowed. Please upload an unlocked PDF file.' 
        });
      }
    } catch (error) {
      // Handle errors from pdf-parse (corrupted PDFs, etc.)
      // Clean up file
      if (fs.existsSync(resumeFile.filepath)) {
        fs.unlinkSync(resumeFile.filepath);
      }
      return res.status(400).json({ 
        error: error.message || 'Invalid PDF file. Please ensure the file is a valid, unlocked PDF document.' 
      });
    }

    // Send confirmation email to applicant (no-reply) with resume PDF attached
    await sendConfirmationEmail(formData, resumeFile);

    // Send HR notification with PDF attached (no-reply)
    await sendHRNotificationEmail(formData, resumeFile);

    // Clean up uploaded file (in production, this would be handled by cloud storage)
    if (fs.existsSync(resumeFile.filepath)) {
      fs.unlinkSync(resumeFile.filepath);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully! A confirmation email has been sent to your email address.' 
    });

  } catch (error) {
    console.error('Career application error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to submit application. Please try again.' 
    });
  }
}
