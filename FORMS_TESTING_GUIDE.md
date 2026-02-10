# 📝 Forms & Google Sheets Testing Guide

**Status:** ✅ Deployed - Ready for Testing  
**Revision:** ynm-website-00022-476

---

## 🎯 What Needs Testing

You mentioned the 4 forms aren't saving to Google Sheets. Let's verify and fix this.

### Forms to Test

| # | Form Name | Page URL | Sheet Tab | API Endpoint |
|---|-----------|----------|-----------|--------------|
| 1 | Contact Us | `/contact` | `contact us` | `/api/contact/submit` |
| 2 | Director Appointment | `/our-team` | `our director appointment` | `/api/director-appointment/submit` |
| 3 | Investor Relations | `/investor-relations` | `investor relations` | `/api/investor-relations/submit` |
| 4 | Foreign Collaborations | `/foreign-collaborations` | `foreign collaborations` | `/api/foreign-collaborations/submit` |

---

## 🔍 Checklist - What to Verify

### Step 1: Check Google Sheet Setup

1. **Open your Google Sheet:**
   https://docs.google.com/spreadsheets/d/1WSYQxSNA9bWIqjEVssl9L9V1HP2Iw3Mug-U9n9dFfhg

2. **Verify ALL 4 tabs exist** (exact names, case-sensitive):
   - [ ] `contact us`
   - [ ] `our director appointment`
   - [ ] `investor relations`
   - [ ] `foreign collaborations`

3. **Check service account has access:**
   - Click "Share" button on Google Sheet
   - Look for: `ynm-forms@gen-lang-client-0473608308.iam.gserviceaccount.com`
   - Permission should be: **Editor**
   
   **If missing:**
   ```
   - Click "Share" button
   - Add: ynm-forms@gen-lang-client-0473608308.iam.gserviceaccount.com
   - Set role: Editor
   - Uncheck "Notify people"
   - Click "Share"
   ```

---

### Step 2: Test Form Submission

**On Service URL (No reCAPTCHA required):**

1. **Go to:** https://ynm-website-822693677008.asia-south1.run.app/contact

2. **Fill form:**
   - Name: Test User
   - Email: test@example.com
   - Phone: +91 1234567890
   - Company: Test Company
   - Subject: Test Submission
   - Message: Testing Google Sheets integration

3. **Submit:**
   - Click "Send Message"
   - You should see success message
   - Check Google Sheet "contact us" tab for new row

4. **Repeat for other 3 forms:**
   - `/foreign-collaborations`
   - `/investor-relations`
   - `/our-team` (director appointment)

---

### Step 3: Check Cloud Run Logs

If form submission fails, check the logs:

```bash
# View recent logs
gcloud run services logs read ynm-website \
  --region=asia-south1 \
  --project=gen-lang-client-0473608308 \
  --limit=50

# Filter for errors
gcloud run services logs read ynm-website \
  --region=asia-south1 \
  --project=gen-lang-client-0473608308 \
  --limit=100 | grep -i "error\|fail\|sheet"
```

**Look for:**
- ✅ `[Google Sheets] Saved to "contact us"` - Success
- ❌ `Error: Permission denied` - Service account not shared
- ❌ `Unable to parse range: contact us!A:Z` - Tab name doesn't exist
- ❌ `The caller does not have permission` - Service account lacks Editor access

---

## 🔧 Common Issues & Fixes

### Issue 1: "Permission denied" Error

**Cause:** Service account not shared with the Google Sheet

**Fix:**
1. Open Google Sheet
2. Click "Share"
3. Add: `ynm-forms@gen-lang-client-0473608308.iam.gserviceaccount.com`
4. Set role: **Editor**
5. Click "Share"

---

### Issue 2: "Unable to parse range" Error

**Cause:** Sheet tab name doesn't match exactly

**Fix:**
1. Check tab names in Google Sheet (must be exact, case-sensitive)
2. Required names:
   - `contact us` (all lowercase)
   - `our director appointment` (all lowercase)
   - `investor relations` (all lowercase)
   - `foreign collaborations` (all lowercase)
3. Rename tabs if needed

---

### Issue 3: "Invalid credentials" Error

**Cause:** Environment variables not set correctly

**Fix:**
```bash
# Check if variables are set in Secret Manager
gcloud secrets versions access latest \
  --secret=GOOGLE_SHEET_ID \
  --project=gen-lang-client-0473608308

# Should output: 1WSYQxSNA9bWIqjEVssl9L9V1HP2Iw3Mug-U9n9dFfhg
```

---

### Issue 4: Forms submit but no data in sheet

**Cause:** Wrong sheet tab selected or API not saving

**Check:**
1. Look at Cloud Run logs for success/error
2. Verify form is calling correct API endpoint
3. Check if service account key is valid

---

## 🧪 Quick Test Script

**Test a form submission via API directly:**

```bash
# Test contact form
curl -X POST https://ynm-website-822693677008.asia-south1.run.app/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "API Test User",
    "email": "apitest@example.com",
    "phone": "+91 9876543210",
    "company": "Test Company",
    "subject": "API Test",
    "message": "Testing direct API submission"
  }'

# Expected response:
# {"success":true,"message":"Thanks! Your message has been submitted successfully."}

# Check Google Sheet "contact us" tab for new row
```

**Test other forms:**

```bash
# Director appointment
curl -X POST https://ynm-website-822693677008.asia-south1.run.app/api/director-appointment/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Director",
    "organization": "Test Org",
    "email": "director@example.com",
    "phone": "+91 9876543210",
    "purposeOfMeeting": "Test meeting",
    "message": "Test message"
  }'

# Foreign collaborations
curl -X POST https://ynm-website-822693677008.asia-south1.run.app/api/foreign-collaborations/submit \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "Test Company",
    "country": "India",
    "contactName": "Test Contact",
    "email": "collab@example.com",
    "collaborationType": "Manufacturing Partnership",
    "message": "Test collaboration"
  }'

# Investor relations
curl -X POST https://ynm-website-822693677008.asia-south1.run.app/api/investor-relations/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Investor",
    "organization": "Test Investment Firm",
    "email": "investor@example.com",
    "investorType": "Institutional",
    "message": "Test inquiry"
  }'
```

---

## 📊 What to Check After Testing

1. **Google Sheet Tabs:**
   - [ ] Each tab has a new row
   - [ ] Timestamp in Column A (IST format)
   - [ ] All form fields populated correctly

2. **Cloud Run Logs:**
   - [ ] No errors in logs
   - [ ] "[Google Sheets] Saved to..." messages appear

3. **Form Response:**
   - [ ] Success message displayed
   - [ ] No error messages
   - [ ] Form cleared after submission

---

## 🚨 If Forms Still Not Working

**Run these diagnostics:**

```bash
# 1. Check environment variables are set
gcloud run services describe ynm-website \
  --region=asia-south1 \
  --project=gen-lang-client-0473608308 \
  --format="value(spec.template.spec.containers[0].env)" | grep -i "GOOGLE"

# 2. View real-time logs while testing
gcloud run services logs tail ynm-website \
  --region=asia-south1 \
  --project=gen-lang-client-0473608308

# 3. Check service account permissions
gcloud projects get-iam-policy gen-lang-client-0473608308 \
  --flatten="bindings[].members" \
  --filter="bindings.members:ynm-forms@*"
```

---

## 💡 Most Common Fix

**If forms don't save to sheets:**

1. Open Google Sheet: https://docs.google.com/spreadsheets/d/1WSYQxSNA9bWIqjEVssl9L9V1HP2Iw3Mug-U9n9dFfhg
2. Click "Share" button (top right)
3. Add this email: `ynm-forms@gen-lang-client-0473608308.iam.gserviceaccount.com`
4. Set permission: **Editor**
5. Click "Share"
6. Test form again

**This fixes 90% of Google Sheets integration issues.**

---

**Need help?** Check Cloud Run logs for specific error messages.
