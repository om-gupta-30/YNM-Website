let _google = null;
function getGoogle() {
  if (!_google) {
    _google = require('googleapis').google;
  }
  return _google;
}

/**
 * Shared Google Sheets utility for all form submissions
 * Uses ONE Google Sheet file with multiple tabs (sheets)
 */

// ==============================================
// GOOGLE SHEETS CONFIGURATION
// ==============================================
const getConfig = () => {
  let privateKey = process.env.GOOGLE_PRIVATE_KEY || '';
  
  // Handle various formats of private key
  // Cloud Run might pass it with literal \n or actual newlines
  if (privateKey.includes('\\n')) {
    privateKey = privateKey.replace(/\\n/g, '\n');
  }
  // Also handle double-escaped newlines
  if (privateKey.includes('\\\\n')) {
    privateKey = privateKey.replace(/\\\\n/g, '\n');
  }
  
  return {
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
  };
};

/**
 * Save form data to a specific sheet tab in the Google Sheet
 * @param {string} sheetName - Name of the sheet tab (e.g., "contact us", "our director appointment")
 * @param {Array<string>} rowData - Array of values to append as a new row
 * @returns {Promise<Object>} - Response with success status and updates
 */
export async function saveToGoogleSheet(sheetName, rowData) {
  const config = getConfig();
  
  if (!config.credentials.client_email || !config.credentials.private_key || !config.spreadsheetId) {
    throw new Error('Google Sheets is not configured. Check GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY.');
  }

  const google = getGoogle();

  const auth = new google.auth.JWT({
    email: config.credentials.client_email,
    key: config.credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Append timestamp as first column
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const values = [[timestamp, ...rowData]];

  // Range format: "SheetTabName!A:Z" to append to the sheet tab
  const range = `${sheetName}!A:Z`;

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: config.spreadsheetId,
    range,
    valueInputOption: 'RAW',
    resource: { values },
  });

  console.log(`[Google Sheets] Saved to "${sheetName}":`, response.data.updates);
  return { success: true, updates: response.data.updates };
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
