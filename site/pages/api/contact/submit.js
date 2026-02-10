import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';
import { verifyRecaptchaToken } from '@/lib/recaptchaUtils';

// ==============================================
// API HANDLER
// ==============================================
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, subject, message, recaptchaToken } = req.body;

    // Verify reCAPTCHA only if token is provided
    // Token is only sent from allowed production domains
    if (recaptchaToken && process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
      if (!recaptchaResult.success) {
        return res.status(400).json({ 
          error: 'reCAPTCHA verification failed. Please try again.',
          details: recaptchaResult.error 
        });
      }
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'subject', 'message']
      });
    }

    // Email validation
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Save to "contact us" sheet tab
    const rowData = [
      name,
      email,
      phone || '',
      company || '',
      subject,
      message,
    ];

    const sheetsResult = await saveToGoogleSheet('contact us', rowData);

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Thanks! Your message has been submitted successfully.',
      sheets: sheetsResult,
    });

  } catch (error) {
    console.error('[Contact Form] Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process your request',
      message: error.message 
    });
  }
}
