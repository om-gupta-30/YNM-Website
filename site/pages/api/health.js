/**
 * Health Check API Endpoint
 * Returns service health status and environment variable availability
 */
export default function handler(req, res) {
  // Core env vars required for the site integrations:
  // - Contact form → Google Sheets
  // - Chatbot → Gemini API
  const requiredEnvVars = [
    'GOOGLE_SHEET_ID',
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_GEMINI_API_KEY',
  ];

  // Email is optional for "site is up" (only required for /careers emails).
  const smtpConfigured = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  const gmailConfigured = !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
  const sendgridConfigured = !!process.env.SENDGRID_API_KEY;
  const emailConfigured = smtpConfigured || gmailConfigured || sendgridConfigured;

  // Check which required env vars are present (without revealing values)
  const envStatus = {};
  const missingVars = [];

  requiredEnvVars.forEach((varName) => {
    const isPresent = !!process.env[varName];
    envStatus[varName] = isPresent ? 'present' : 'missing';
    if (!isPresent) missingVars.push(varName);
  });

  const allRequiredPresent = missingVars.length === 0;

  // Avoid leaking operational details in production. In local/dev this is useful for setup.
  const isProd = process.env.NODE_ENV === 'production';

  const base = {
    status: allRequiredPresent ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
  };

  if (isProd) {
    return res.status(allRequiredPresent ? 200 : 503).json(base);
  }

  return res.status(allRequiredPresent ? 200 : 503).json({
    ...base,
    envVars: {
      total: requiredEnvVars.length,
      present: requiredEnvVars.length - missingVars.length,
      missing: missingVars,
      details: envStatus,
    },
    email: {
      configured: emailConfigured,
      methods: {
        smtp: smtpConfigured,
        gmail: gmailConfigured,
        sendgrid: sendgridConfigured,
      },
      // HR_EMAIL is optional; defaults are applied server-side.
      hrEmailConfigured: !!process.env.HR_EMAIL,
    },
  });
}
