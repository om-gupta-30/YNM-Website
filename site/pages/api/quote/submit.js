import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';
import { verifyRecaptchaToken } from '@/lib/recaptchaUtils';

let pdfParseModule = null;

export const config = {
  api: { bodyParser: false },
};

// ── PDF helpers (same pattern as careers) ──

function validatePDFFile(file) {
  if (!file.mimetype || file.mimetype !== 'application/pdf') {
    return { valid: false, error: 'Only PDF files are allowed.' };
  }
  const ext = path.extname(file.originalFilename || file.name || '').toLowerCase();
  if (ext !== '.pdf') {
    return { valid: false, error: 'Only .pdf files are allowed.' };
  }
  if (file.size > 5 * 1024 * 1024) {
    return { valid: false, error: 'File must be under 5 MB.' };
  }
  try {
    const buf = fs.readFileSync(file.filepath);
    if (buf.toString('ascii', 0, 4) !== '%PDF') {
      return { valid: false, error: 'The uploaded file is not a valid PDF.' };
    }
  } catch {
    return { valid: false, error: 'Error reading the file. Please try again.' };
  }
  return { valid: true };
}

async function checkPDFPassword(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    if (!pdfParseModule) {
      try {
        pdfParseModule = require('pdf-parse');
        if (typeof pdfParseModule !== 'function') pdfParseModule = pdfParseModule.default || pdfParseModule;
      } catch { return false; }
    }
    if (typeof pdfParseModule !== 'function') return false;
    try {
      await pdfParseModule(buf, { max: 1 });
      return false;
    } catch (e) {
      const msg = (e.message || '').toLowerCase();
      return msg.includes('password') || msg.includes('encrypted') || msg.includes('decrypt');
    }
  } catch { return false; }
}

function cleanupFile(filepath) {
  try { if (filepath && fs.existsSync(filepath)) fs.unlinkSync(filepath); } catch {}
}

// ── Email transporter ──

function getEmailTransporter() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      ...(process.env.SMTP_REJECT_UNAUTHORIZED === 'false' && { tls: { rejectUnauthorized: false } }),
    });
  }
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD } });
  }
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({ host: 'smtp.sendgrid.net', port: 587, auth: { user: 'apikey', pass: process.env.SENDGRID_API_KEY } });
  }
  return null;
}

// ── Email template ──

function buildEmailHTML(d, hasAttachment, attachmentName) {
  const ts = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const row = (label, value) => value ? `<tr><td style="padding:8px 0;font-size:13px;color:#888;width:150px;vertical-align:top;">${label}</td><td style="padding:8px 0;font-size:14px;color:#333;">${value}</td></tr>` : '';
  const linkRow = (label, value, href) => value ? `<tr><td style="padding:8px 0;font-size:13px;color:#888;width:150px;vertical-align:top;">${label}</td><td style="padding:8px 0;font-size:14px;color:#333;"><a href="${href}" style="color:#74060D;text-decoration:none;">${value}</a></td></tr>` : '';

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f1eb;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1eb;padding:32px 0;"><tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#74060D 0%,#5a0509 100%);padding:28px 32px;text-align:center;">
    <h1 style="margin:0;color:#C9A24D;font-size:22px;font-weight:700;letter-spacing:1px;">NEW QUOTE REQUEST</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">via ynmsafety.com/get-quote</p>
  </td></tr>
  <!-- Product Badge -->
  <tr><td style="padding:24px 32px 0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#C9A24D 0%,#E6D3A3 100%);border-radius:8px;padding:16px 20px;"><tr><td>
      <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#74060D;font-weight:600;">Product of Interest</p>
      <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#74060D;">${d.product}</p>
      ${d.quantity ? `<p style="margin:4px 0 0;font-size:13px;color:#5a0509;">Quantity: ${d.quantity} ${d.unit || ''}</p>` : ''}
      ${d.urgency ? `<p style="margin:4px 0 0;font-size:13px;color:#5a0509;">Timeline: ${d.urgency}</p>` : ''}
    </td></tr></table>
  </td></tr>
  <!-- Customer Details -->
  <tr><td style="padding:24px 32px;">
    <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#74060D;border-bottom:2px solid #C9A24D;padding-bottom:8px;">Customer Details</h2>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', `<strong>${d.name}</strong>`)}
      ${linkRow('Email', d.email, `mailto:${d.email}`)}
      ${linkRow('Phone', d.phone, `tel:${d.phone}`)}
      ${row('Designation', d.designation)}
      ${row('Company', d.company)}
      ${row('Country', d.country)}
      ${row('City', d.city)}
    </table>
  </td></tr>
  <!-- Project Details -->
  ${(d.projectName || d.deliveryLocation) ? `<tr><td style="padding:0 32px 24px;">
    <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#74060D;border-bottom:2px solid #C9A24D;padding-bottom:8px;">Project Details</h2>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${row('Project Name', d.projectName)}
      ${row('Delivery Location', d.deliveryLocation)}
    </table>
  </td></tr>` : ''}
  <!-- Specifications -->
  ${d.specifications ? `<tr><td style="padding:0 32px 24px;">
    <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#74060D;border-bottom:2px solid #C9A24D;padding-bottom:8px;">Technical Specifications</h2>
    <p style="margin:0;font-size:14px;color:#444;line-height:1.6;background:#f9f7f2;padding:14px 16px;border-radius:8px;border-left:3px solid #C9A24D;">${d.specifications.replace(/\n/g, '<br>')}</p>
  </td></tr>` : ''}
  <!-- Additional Message -->
  ${d.message ? `<tr><td style="padding:0 32px 24px;">
    <h2 style="margin:0 0 12px;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#74060D;border-bottom:2px solid #C9A24D;padding-bottom:8px;">Additional Notes</h2>
    <p style="margin:0;font-size:14px;color:#444;line-height:1.6;background:#f9f7f2;padding:14px 16px;border-radius:8px;border-left:3px solid #C9A24D;">${d.message.replace(/\n/g, '<br>')}</p>
  </td></tr>` : ''}
  <!-- Attachment -->
  ${hasAttachment ? `<tr><td style="padding:0 32px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#e8f5e9;border:1px solid #a5d6a7;border-radius:8px;"><tr>
      <td style="padding:12px 16px;font-size:13px;color:#2e7d32;font-weight:600;">📎 Specification PDF Attached: ${attachmentName}</td>
    </tr></table>
  </td></tr>` : ''}
  <!-- Footer -->
  <tr><td style="background:#f9f7f2;padding:16px 32px;text-align:center;border-top:1px solid #e8e2d4;">
    <p style="margin:0;font-size:11px;color:#999;">Submitted on ${ts} IST</p>
    <p style="margin:4px 0 0;font-size:11px;color:#bbb;">YNM Mega Industries &mdash; ynmsafety.com</p>
  </td></tr>
</table>
</td></tr></table></body></html>`;
}

// ── Handler ──

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let specFile = null;

  try {
    const form = new IncomingForm({ maxFileSize: 5 * 1024 * 1024, keepExtensions: true });
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, f, fl) => err ? reject(err) : resolve([f, fl]));
    });

    const g = (key) => fields[key]?.[0] || '';
    const d = {
      name: g('name'), email: g('email'), phone: g('phone'),
      company: g('company'), designation: g('designation'),
      country: g('country'), city: g('city'),
      product: g('product'), quantity: g('quantity'), unit: g('unit'),
      deliveryLocation: g('deliveryLocation'), urgency: g('urgency'),
      projectName: g('projectName'), specifications: g('specifications'),
      message: g('message'),
    };
    const recaptchaToken = g('recaptchaToken');
    specFile = files.specification?.[0] || null;

    console.log('[Quote API] Request received:', { name: d.name, email: d.email, product: d.product, hasFile: !!specFile });

    // reCAPTCHA — only verify when a token is actually provided
    // (client only loads reCAPTCHA on production domains)
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      try {
        const r = await verifyRecaptchaToken(recaptchaToken);
        if (!r.success) { cleanupFile(specFile?.filepath); return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' }); }
      } catch (e) {
        cleanupFile(specFile?.filepath);
        return res.status(400).json({ error: 'reCAPTCHA error. Please refresh and try again.' });
      }
    }

    // Validate required fields
    if (!d.name || !d.email || !d.phone || !d.product) {
      cleanupFile(specFile?.filepath);
      return res.status(400).json({ error: 'Please fill in all required fields (Name, Email, Phone, Product).' });
    }
    if (!isValidEmail(d.email)) {
      cleanupFile(specFile?.filepath);
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    // Validate PDF if uploaded
    if (specFile) {
      const v = validatePDFFile(specFile);
      if (!v.valid) { cleanupFile(specFile.filepath); return res.status(400).json({ error: v.error }); }

      try {
        if (await checkPDFPassword(specFile.filepath)) {
          cleanupFile(specFile.filepath);
          return res.status(400).json({ error: 'Password-protected PDF files are not allowed. Please upload an unlocked PDF.' });
        }
      } catch (e) {
        cleanupFile(specFile.filepath);
        return res.status(400).json({ error: e.message || 'Invalid PDF file.' });
      }
    }

    // 1. Save to Google Sheets
    const hasSheets = process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY;
    if (hasSheets) {
      try {
        await saveToGoogleSheet('quote requests', [
          d.name, d.email, d.phone, d.designation, d.company, d.country, d.city,
          d.product, d.quantity, d.unit, d.urgency, d.projectName, d.deliveryLocation,
          d.specifications, d.message, specFile ? specFile.originalFilename : '',
        ]);
      } catch (e) { console.error('[Quote API] Sheets error:', e.message); }
    }

    // 2. Send email to sales@ynmsafety.com
    const transporter = getEmailTransporter();
    if (transporter) {
      const sender = process.env.SMTP_USER || process.env.GMAIL_USER || 'noreply@ynmsafety.com';
      const attachments = [];
      if (specFile?.filepath && fs.existsSync(specFile.filepath)) {
        attachments.push({
          filename: specFile.originalFilename || 'specification.pdf',
          content: fs.readFileSync(specFile.filepath),
          contentType: 'application/pdf',
        });
      }

      try {
        await transporter.sendMail({
          from: `"YNM Safety - Quote Request" <${sender}>`,
          to: 'sales@ynmsafety.com',
          replyTo: d.email,
          subject: `Quote Request: ${d.product} — ${d.name}${d.company ? ` (${d.company})` : ''}`,
          html: buildEmailHTML(d, attachments.length > 0, specFile?.originalFilename || ''),
          attachments,
        });
        console.log('[Quote API] Email sent to sales@ynmsafety.com');
      } catch (e) { console.error('[Quote API] Email error:', e.message); }
    }

    cleanupFile(specFile?.filepath);

    return res.status(200).json({ success: true, message: 'Your quote request has been submitted successfully!' });
  } catch (error) {
    cleanupFile(specFile?.filepath);
    console.error('[Quote API] Error:', error.message);
    return res.status(500).json({ error: 'Failed to process your request. Please try again.' });
  }
}
