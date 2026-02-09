#!/usr/bin/env node
/**
 * Verification script for YNM website integrations
 * Tests: Health/Env, Google Sheets (Contact form), Gemini API
 * Run with: node scripts/verify-integrations.js
 * Ensure dev server is running: npm run dev
 */

const BASE = process.env.VERIFY_BASE_URL || 'http://localhost:3000';

async function fetchJSON(url, options = {}) {
  const res = await fetch(url, { ...options });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { _raw: text };
  }
  return { ok: res.ok, status: res.status, data };
}

async function main() {
  console.log('\n=== YNM Website Integration Verification ===\n');
  console.log(`Base URL: ${BASE}\n`);

  const results = { health: null, contact: null, gemini: null };

  // 1. Health check (env vars)
  console.log('1. Health Check (Environment Variables)');
  try {
    const { ok, status, data } = await fetchJSON(`${BASE}/api/health`);
    results.health = { ok, status, data };
    if (ok) {
      console.log('   ✅ Health API: OK');
      if (data.envVars) {
        console.log(`   Env: ${data.envVars.present}/${data.envVars.total} vars present`);
        if (data.envVars.missing?.length) {
          console.log('   Missing:', data.envVars.missing.join(', '));
        }
      }
      if (data.status === 'healthy') {
        console.log('   All required env vars are configured.\n');
      } else {
        console.log('   ⚠️  Some env vars missing. Copy .env.example to .env.local and fill values.\n');
      }
    } else {
      console.log(`   ❌ Health API failed: ${status}`, data);
    }
  } catch (err) {
    console.log('   ❌ Health check failed:', err.message);
    console.log('   Is the dev server running? Try: cd site && npm run dev\n');
  }

  // 2. Contact form (Google Sheets)
  console.log('2. Contact Form (Google Sheets)');
  try {
    const { ok, status, data } = await fetchJSON(`${BASE}/api/contact/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Integration Test',
        email: 'test@example.com',
        phone: '9999999999',
        company: 'YNM Verify',
        subject: 'general',
        message: 'This is an automated verification test. Safe to delete from sheet.',
      }),
    });
    results.contact = { ok, status, data };
    if (ok && data?.success) {
      console.log('   ✅ Contact form: Data saved to Google Sheet successfully');
      if (data.sheets?.updates) {
        console.log('   Sheets update:', JSON.stringify(data.sheets.updates));
      }
      console.log('');
    } else {
      console.log(`   ❌ Contact form failed: ${status}`, data?.error || data?.message || data);
      if (data?.message) console.log('   ', data.message);
      console.log('');
    }
  } catch (err) {
    console.log('   ❌ Contact form request failed:', err.message);
    console.log('');
  }

  // 3. Gemini API (Chatbot)
  console.log('3. Gemini API (Chatbot)');
  try {
    const { ok, status, data } = await fetchJSON(`${BASE}/api/chat/gemini`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'What is YNM Safety? Reply in one short sentence.',
        conversationHistory: [],
        language: 'en',
      }),
    });
    results.gemini = { ok, status, data };
    if (ok && data?.response) {
      console.log('   ✅ Gemini API: Responding correctly');
      const preview = (data.response.text || data.response).substring(0, 80);
      console.log('   Sample response:', preview + (preview.length >= 80 ? '...' : ''));
      console.log('');
    } else {
      console.log(`   ❌ Gemini API failed: ${status}`, data?.error || data?.message || data);
      if (data?.error) console.log('   ', data.error);
      console.log('');
    }
  } catch (err) {
    console.log('   ❌ Gemini API request failed:', err.message);
    console.log('');
  }

  // 4. Careers (info only - requires reCAPTCHA + file upload)
  console.log('4. Careers Form (Manual check required)');
  console.log('   Careers requires: reCAPTCHA token, PDF resume, math CAPTCHA.');
  console.log('   To verify: Visit /careers, submit an application, check:');
  console.log('   - Applicant receives confirmation email');
  console.log('   - HR receives notification with resume attachment');
  console.log('   Env needed: GMAIL_USER, GMAIL_APP_PASSWORD, HR_EMAIL');
  console.log('   (or SMTP_* or SENDGRID_API_KEY)\n');

  // Summary
  const contactOk = results.contact?.ok && results.contact?.data?.success;
  const geminiOk = results.gemini?.ok && results.gemini?.data?.response;
  console.log('--- Summary ---');
  console.log('Health (env):     ', results.health?.ok ? '✅' : '❌');
  console.log('Google Sheet:     ', contactOk ? '✅' : '❌');
  console.log('Gemini API:       ', geminiOk ? '✅' : '❌');
  console.log('Careers (email):  ', 'Manual verification required');
  console.log('');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
