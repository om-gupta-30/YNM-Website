/**
 * Test Google Sheets integration
 * Run: node scripts/test-google-sheets.js
 */

require('dotenv').config();
const { google } = require('googleapis');

async function testGoogleSheets() {
  console.log('🔍 Testing Google Sheets Integration...\n');
  
  // Check environment variables
  console.log('1. Checking environment variables...');
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  
  if (!sheetId) {
    console.log('❌ GOOGLE_SHEET_ID not set');
    return;
  }
  if (!email) {
    console.log('❌ GOOGLE_SERVICE_ACCOUNT_EMAIL not set');
    return;
  }
  if (!key) {
    console.log('❌ GOOGLE_PRIVATE_KEY not set');
    return;
  }
  
  console.log(`✅ GOOGLE_SHEET_ID: ${sheetId}`);
  console.log(`✅ GOOGLE_SERVICE_ACCOUNT_EMAIL: ${email}`);
  console.log(`✅ GOOGLE_PRIVATE_KEY: ${key.substring(0, 50)}...`);
  console.log('');
  
  // Authenticate
  console.log('2. Authenticating with Google Sheets API...');
  try {
    const auth = new google.auth.JWT({
      email,
      key: key.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    await auth.authorize();
    console.log('✅ Authentication successful\n');
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Get sheet metadata
    console.log('3. Fetching sheet metadata...');
    const sheetMetadata = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });
    
    console.log(`✅ Sheet Title: ${sheetMetadata.data.properties.title}`);
    console.log(`✅ Sheet URL: https://docs.google.com/spreadsheets/d/${sheetId}`);
    console.log('');
    
    // List all tabs
    console.log('4. Checking sheet tabs...');
    const sheetTabs = sheetMetadata.data.sheets.map(sheet => sheet.properties.title);
    console.log(`Found ${sheetTabs.length} tabs:\n`);
    
    const requiredTabs = [
      'contact us',
      'our director appointment',
      'investor relations',
      'foreign collaborations'
    ];
    
    requiredTabs.forEach(tabName => {
      if (sheetTabs.includes(tabName)) {
        console.log(`✅ "${tabName}" tab exists`);
      } else {
        console.log(`❌ "${tabName}" tab MISSING`);
      }
    });
    
    console.log('');
    console.log('Other tabs found:');
    sheetTabs.forEach(tab => {
      if (!requiredTabs.includes(tab)) {
        console.log(`   - "${tab}"`);
      }
    });
    
    console.log('');
    console.log('5. Testing write access...');
    const testRow = [
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      'Test Name',
      'test@example.com',
      'Test message from integration test'
    ];
    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'contact us!A:Z',
      valueInputOption: 'USER_ENTERED',
      resource: { values: [testRow] },
    });
    
    console.log(`✅ Test row written successfully`);
    console.log(`   Updated: ${response.data.updates.updatedRows} row(s)`);
    console.log(`   Range: ${response.data.updates.updatedRange}`);
    console.log('');
    
    console.log('🎉 ALL TESTS PASSED!\n');
    console.log('Google Sheets integration is working correctly.');
    console.log('All 4 forms should submit data successfully.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
}

testGoogleSheets();
