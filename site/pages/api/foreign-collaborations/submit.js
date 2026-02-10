import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';
import { verifyRecaptchaToken } from '@/lib/recaptchaUtils';

/**
 * API endpoint for Foreign Collaborations form
 * Saves to "foreign collaborations" sheet tab
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { companyName, contactName, email, country, collaborationType, message, recaptchaToken } = req.body;

    // Verify reCAPTCHA if configured
    if (process.env.RECAPTCHA_SECRET_KEY) {
      const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
      if (!recaptchaResult.success) {
        return res.status(400).json({ 
          error: 'reCAPTCHA verification failed. Please try again.',
          details: recaptchaResult.error 
        });
      }
    }

    // Validation
    if (!contactName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['contactName', 'email', 'message']
      });
    }

    // Email validation
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Save to "foreign collaborations" sheet tab
    const rowData = [
      contactName,
      companyName || '',
      email,
      country || '',
      collaborationType || '',
      message,
    ];

    const sheetsResult = await saveToGoogleSheet('foreign collaborations', rowData);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! We are excited about potential collaboration opportunities and will contact you soon.',
      sheets: sheetsResult,
    });

  } catch (error) {
    console.error('[Foreign Collaborations] Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process your request',
      message: error.message 
    });
  }
}
