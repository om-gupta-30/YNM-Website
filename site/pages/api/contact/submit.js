import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';

// ==============================================
// API HANDLER
// ==============================================
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, subject, message } = req.body;
    
    console.log('[Contact API] Request received:', { name, email });

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

    // Check Google Sheets config before trying to save
    const hasGoogleSheetsConfig = process.env.GOOGLE_SHEET_ID && 
                                   process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && 
                                   process.env.GOOGLE_PRIVATE_KEY;
    
    if (!hasGoogleSheetsConfig) {
      console.error('[Contact API] Google Sheets not configured!');
      return res.status(500).json({ 
        error: 'Server configuration error. Please contact support.',
        debug: 'Google Sheets credentials missing'
      });
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

    console.log('[Contact API] Saving to Google Sheets...');
    const sheetsResult = await saveToGoogleSheet('contact us', rowData);
    console.log('[Contact API] Saved successfully');

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Thanks! Your message has been submitted successfully.',
      sheets: sheetsResult,
    });

  } catch (error) {
    console.error('[Contact Form] Error:', error.message, error.stack);
    return res.status(500).json({ 
      error: 'Failed to process your request',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
}
