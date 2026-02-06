/**
 * Health Check API Endpoint
 * Returns service health status and environment variable availability
 */
export default function handler(req, res) {
  // List of required environment variables
  const requiredEnvVars = [
    'GOOGLE_SHEET_ID',
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_GEMINI_API_KEY',
    'GMAIL_USER',
    'GMAIL_APP_PASSWORD',
    'HR_EMAIL',
  ];

  // Check which env vars are present (without revealing values)
  const envStatus = {};
  const missingVars = [];

  requiredEnvVars.forEach((varName) => {
    const isPresent = !!process.env[varName];
    envStatus[varName] = isPresent ? 'present' : 'missing';
    if (!isPresent) {
      missingVars.push(varName);
    }
  });

  const allPresent = missingVars.length === 0;

  // Avoid leaking operational details in production. In local/dev this is useful for setup.
  const isProd = process.env.NODE_ENV === 'production';

  const base = {
    status: allPresent ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
  };

  if (isProd) {
    return res.status(allPresent ? 200 : 503).json(base);
  }

  return res.status(allPresent ? 200 : 503).json({
    ...base,
    envVars: {
      total: requiredEnvVars.length,
      present: requiredEnvVars.length - missingVars.length,
      missing: missingVars,
      details: envStatus,
    },
  });
}
