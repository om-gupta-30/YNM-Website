# 🚀 YNM Safety Website - Complete Setup Guide

**Complete beginner-friendly guide to set up all website integrations.**

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Google Sheets Setup (Forms)](#google-sheets-setup)
3. [Google Gemini API (Chatbot)](#google-gemini-api)
4. [Gmail Setup (Career Emails)](#gmail-setup)
5. [Google Analytics (Optional)](#google-analytics)
6. [reCAPTCHA (Optional)](#recaptcha-setup)
7. [Testing](#testing)
8. [Production Deployment](#production-deployment)

---

## Quick Start

### Prerequisites
- Node.js 20.x or higher
- Google Cloud account (free tier works)
- Gmail account (for sending career emails)

### Installation

```bash
# 1. Clone and install
cd site
npm install

# 2. Copy environment template
cp .env.example .env

# 3. Fill in credentials (see sections below)
# Edit site/.env with your API keys

# 4. Run development server
npm run dev

# 5. Open http://localhost:3000
```

---

## Google Sheets Setup

**Purpose:** Store form submissions from all 4 contact forms

### Step 1: Create Google Sheet

1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it: **"Website Forms"**
4. Create exactly **4 tabs** with these names (lowercase, with spaces):
   ```
   contact us
   our director appointment
   investor relations
   foreign collaborations
   ```

5. (Optional) Add column headers in Row 1 of each tab:

**Tab: "contact us"**
```
Timestamp | Name | Email | Phone | Company | Subject | Message
```

**Tab: "our director appointment"**
```
Timestamp | Name | Email | Phone | Company | Purpose | Preferred Date | Preferred Time | Message
```

**Tab: "investor relations"**
```
Timestamp | Name | Organization | Email | Investor Type | Message
```

**Tab: "foreign collaborations"**
```
Timestamp | Contact Name | Company Name | Email | Country | Collaboration Type | Message
```

### Step 2: Get Sheet ID

From your Google Sheet URL:
```
https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9/edit
                                       ^^^^^^^^^^^^^^^^^^
                                       This is your Sheet ID
```

Copy the ID and save it for later.

### Step 3: Create Service Account

1. Go to https://console.cloud.google.com
2. Create a new project: **"YNM Website"**
3. Enable **Google Sheets API**:
   - APIs & Services → Library
   - Search "Google Sheets API"
   - Click Enable
4. Create Service Account:
   - IAM & Admin → Service Accounts
   - Create Service Account
   - Name: `ynm-forms`
   - Role: Editor
   - Click Done
5. Create JSON Key:
   - Click the service account email
   - Keys tab → Add Key → Create New Key → JSON
   - Download the JSON file

### Step 4: Extract Credentials

Open the downloaded JSON file and find:

**`client_email`** → This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`
```
Example: ynm-forms@project-123456.iam.gserviceaccount.com
```

**`private_key`** → This is your `GOOGLE_PRIVATE_KEY`
```
Example: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADA...\n-----END PRIVATE KEY-----\n"
```
⚠️ Keep the `\n` characters and the quotes!

### Step 5: Share Sheet with Service Account

1. Open your Google Sheet
2. Click **Share** (top right)
3. Paste the service account email
4. Set role to **Editor**
5. Uncheck "Notify people"
6. Click Share

### Step 6: Add to .env

```env
GOOGLE_SHEET_ID=your_actual_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=ynm-forms@project-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n"
```

---

## Google Gemini API

**Purpose:** Power the AI chatbot on your website

### Step 1: Get API Key

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Select your GCP project (or create new)
5. Copy the API key (starts with `AIzaSy...`)

### Step 2: Add to .env

```env
GOOGLE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## Gmail Setup

**Purpose:** Send career application emails (confirmation to applicant + notification to HR)

### Step 1: Enable 2-Step Verification

1. Go to https://myaccount.google.com/security
2. Sign in with `guptaom31619@gmail.com`
3. Find "2-Step Verification"
4. If "Off" → Click and enable it
5. If "On" → Continue to next step

### Step 2: Create App Password

1. Go to https://myaccount.google.com/apppasswords
2. Sign in if prompted
3. App name: `YNM Website Careers`
4. Click **Generate**
5. Copy the 16-character password
   ```
   Example: abcd efgh ijkl mnop
   ```

### Step 3: Add to .env

```env
GMAIL_USER=guptaom31619@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
HR_EMAIL=ynm.hr@ynmsafety.com
CAREERS_NOREPLY_FROM=guptaom31619@gmail.com
```

**What happens:**
- Applicant receives confirmation email with resume PDF attached
- HR (`ynm.hr@ynmsafety.com`) receives notification with resume PDF attached

---

## Google Analytics

**Purpose:** Track website visitors (optional)

### Step 1: Get Measurement ID

1. Go to https://analytics.google.com/
2. Create a new GA4 property or select existing
3. Admin → Data Streams → Select your stream
4. Copy **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Add to .env

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note:** Analytics only loads if this is set. Leave blank during development to avoid tracking test data.

---

## reCAPTCHA Setup

**Purpose:** Protect all 5 forms from spam bots (optional but recommended)

### Step 1: Register Site

1. Go to https://www.google.com/recaptcha/admin/create
2. Sign in with your Google account
3. Fill out:
   - **Label:** `YNM Safety Website Forms`
   - **reCAPTCHA type:** v2 → "I'm not a robot" Checkbox
   - **Domains:**
     ```
     localhost
     ynmsafety.com
     www.ynmsafety.com
     ```
4. Accept terms → Click Submit

### Step 2: Copy Keys

Google will show you 2 keys:
- **Site Key** (public) - Example: `6LcXXXXXX...`
- **Secret Key** (private) - Example: `6LcYYYYYY...`

### Step 3: Add to .env

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```

**What you get:**
- "I'm not a robot" checkbox on all 5 forms
- Backend verification for all submissions
- Protection from spam and bots

---

## Testing

### Test All Integrations

1. **Start dev server:**
   ```bash
   cd site
   npm run dev
   ```

2. **Check health endpoint:**
   ```bash
   curl http://localhost:3000/api/health
   ```
   
   Should show: `"status": "healthy"` and all env vars present.

3. **Test each form:**
   - Contact: http://localhost:3000/contact
   - Director: http://localhost:3000/our-team (scroll down)
   - Investor: http://localhost:3000/investor-relations (scroll down)
   - Foreign: http://localhost:3000/foreign-collaborations (scroll down)
   - Careers: http://localhost:3000/careers

4. **Test chatbot:**
   - Click the chatbot icon (bottom right)
   - Ask: "What products does YNM offer?"
   - Should receive AI response

5. **Check Google Sheet:**
   - Verify form submissions appear in correct tabs

6. **Check emails (careers form):**
   - Submit a career application
   - Check applicant email for confirmation
   - Check `ynm.hr@ynmsafety.com` for HR notification
   - Both should have resume PDF attached

---

## Production Deployment

### Environment Variables for Production

Set these in your hosting platform (Vercel/Cloud Run):

**Required:**
```env
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GMAIL_USER=guptaom31619@gmail.com
GMAIL_APP_PASSWORD=your_16_char_password
HR_EMAIL=ynm.hr@ynmsafety.com
```

**Optional:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
CAREERS_NOREPLY_FROM=guptaom31619@gmail.com
```

### Vercel Deployment

```bash
# Push to GitHub
git push origin main

# Deploy on Vercel
1. Import repository on vercel.com
2. Set Root Directory: "site"
3. Add all environment variables
4. Deploy
```

### GCP Cloud Run Deployment

```bash
cd site

# Deploy
gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --port 3000

# Set environment variables via Console:
# Cloud Run → Service → Edit → Variables & Secrets
```

---

## Security Checklist

Before pushing to GitHub:

```bash
# 1. Verify .env is gitignored
git check-ignore site/.env

# 2. Check only .env.example is tracked
git ls-files | grep '\.env'

# 3. Verify no sensitive files staged
git status | grep -E '\.env|\.key|credential'

# 4. Run security scan (if gitleaks installed)
gitleaks detect --source . --verbose
```

✅ **Your repository is secure:**
- `site/.env` is gitignored
- Only `.env.example` files tracked (placeholders only)
- GitHub Actions runs Gitleaks on every push
- No secrets hardcoded in code

---

## Troubleshooting

### "Google Sheets is not configured"
→ Check all 3 env vars are set  
→ Verify service account has Editor permission on sheet

### "The caller does not have permission"
→ Share the sheet with service account email

### "Gemini API key not configured"
→ Check `GOOGLE_GEMINI_API_KEY` is set  
→ Verify API key is valid

### "Emails not sending"
→ Check Gmail App Password is correct  
→ Verify 2-Step Verification is enabled  
→ Check `GMAIL_USER` matches the account

### "reCAPTCHA not showing"
→ Check `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set  
→ Restart dev server after adding env vars

---

## Feature Summary

Your website includes:

✅ **5 Contact Forms** → Google Sheets (4 tabs)  
✅ **AI Chatbot** → Gemini 2.5 Flash  
✅ **Career Applications** → Email with PDF  
✅ **Google Analytics** → Visitor tracking  
✅ **reCAPTCHA** → Spam protection  
✅ **Responsive Design** → All devices  
✅ **SEO Optimized** → Meta tags, sitemap  
✅ **Performance Optimized** → Lazy loading, caching  

---

## Support

**Documentation:**
- Main README: `README.md`
- This setup guide: `SETUP.md`

**API Health Check:**
```
http://localhost:3000/api/health
```

**Contact:**
- Website: https://ynmsafety.com
- Email: sales@ynmsafety.com
- HR: ynm.hr@ynmsafety.com

---

**Last Updated:** February 10, 2026  
**All integrations tested and working:** ✅
