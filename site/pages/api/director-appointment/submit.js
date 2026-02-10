import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';
import { verifyRecaptchaToken } from '@/lib/recaptchaUtils';

/**
 * API endpoint for Director Appointment Request form
 * Saves to "our director appointment" sheet tab
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, purpose, preferredDate, preferredTime, message, recaptchaToken } = req.body;

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
    if (!name || !email || !phone || !purpose) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'purpose']
      });
    }

    // Email validation
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Save to "our director appointment" sheet tab
    const rowData = [
      name,
      email,
      phone,
      company || '',
      purpose,
      preferredDate || '',
      preferredTime || '',
      message || '',
    ];

    const sheetsResult = await saveToGoogleSheet('our director appointment', rowData);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your appointment request has been submitted successfully. Our team will contact you soon.',
      sheets: sheetsResult,
    });

  } catch (error) {
    console.error('[Director Appointment] Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process your request',
      message: error.message 
    });
  }
}
