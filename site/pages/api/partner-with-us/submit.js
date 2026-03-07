import { saveToGoogleSheet, isValidEmail } from '@/lib/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, partnerType, region, message } = req.body;

    if (!name || !email || !phone || !partnerType) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'partnerType'],
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const rowData = [
      name,
      company || '',
      email,
      phone,
      partnerType,
      region || '',
      message || '',
    ];

    const sheetsResult = await saveToGoogleSheet('agents', rowData);

    return res.status(200).json({
      success: true,
      message: 'Thank you for your interest in partnering with us. We will review your application and get back to you shortly.',
      sheets: sheetsResult,
    });
  } catch (error) {
    console.error('[Partner With Us] Error:', error);
    return res.status(500).json({
      error: 'Failed to process your request',
      message: error.message,
    });
  }
}
