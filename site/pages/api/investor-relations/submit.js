import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';
import { verifyRecaptchaToken } from '@/lib/recaptchaUtils';

/**
 * API endpoint for Investor Relations form
 * Saves to "investor relations" sheet tab
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, organization, email, investorType, message, recaptchaToken } = req.body;

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
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      });
    }

    // Email validation
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Save to "investor relations" sheet tab
    const rowData = [
      name,
      organization || '',
      email,
      investorType || '',
      message,
    ];

    const sheetsResult = await saveToGoogleSheet('investor relations', rowData);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your interest! We will review your inquiry and get back to you soon.',
      sheets: sheetsResult,
    });

  } catch (error) {
    console.error('[Investor Relations] Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process your request',
      message: error.message 
    });
  }
}
