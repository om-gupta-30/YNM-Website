# 🚀 Quick Deploy Guide

**Status:** ✅ Ready to Deploy  
**Last Updated:** February 14, 2026

---

## 🔒 Security Check - PASSED ✅

- ✅ `.env` is gitignored (real secrets NOT in repo)
- ✅ Only `.env.example` tracked (placeholders only)
- ✅ Build successful (all 14 pages generated)
- ✅ Zero linter errors
- ✅ Gitleaks scan passed (false positives only)

---

## 📤 Push to GitHub

```bash
# Step 1: Review changes
git status

# Step 2: Add all changes
git add .

# Step 3: Commit with message
git commit -m "SEO updates and typo fixes - manufacturers spelling corrected"

# Step 4: Push to GitHub
git push origin main
```

**✅ Safe to push - no secrets will be leaked!**

---

## ☁️ Deploy to Vercel (Recommended)

### One-Time Setup:

1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project** → Import from GitHub
3. Select your `YNM-website` repository
4. **Important:** Set **Root Directory** to `site`

### Environment Variables:

Click **Environment Variables** and add these from your `site/.env`:

```bash
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_GEMINI_API_KEY=AIzaSy...
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
HR_EMAIL=ynm.hr@ynmsafety.com
CAREERS_NOREPLY_FROM=your-email@gmail.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LeYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```

5. Click **Deploy**

**✅ Your site will be live in 2-3 minutes!**

---

## 🌐 Deploy to Google Cloud Platform

### Prerequisites:
```bash
# Install gcloud CLI if not installed
# https://cloud.google.com/sdk/docs/install

# Login to GCP
gcloud auth login

# Set project
gcloud config set project your-project-id
```

### Add Secrets to Secret Manager:

```bash
# Navigate to site directory
cd site

# Create secrets (do this once)
echo -n "your_value" | gcloud secrets create GOOGLE_SHEET_ID --data-file=-
echo -n "your_value" | gcloud secrets create GOOGLE_GEMINI_API_KEY --data-file=-
echo -n "your_value" | gcloud secrets create GMAIL_APP_PASSWORD --data-file=-
# ... repeat for all environment variables
```

### Deploy to Cloud Run:

```bash
cd site

gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --port 3000
```

### Link Secrets to Cloud Run:

1. Go to [Cloud Run Console](https://console.cloud.google.com/run)
2. Click **ynm-website** service
3. Click **Edit & Deploy New Revision**
4. Go to **Variables & Secrets** tab
5. Click **Reference a Secret** for each variable
6. Select secret from Secret Manager

**✅ Your site will be live with custom domain support!**

---

## ✅ Post-Deployment Checklist

After deploying, test these:

- [ ] ✅ Homepage loads (https://your-domain.com)
- [ ] ✅ Contact form submits to Google Sheets
- [ ] ✅ Career form sends emails (test with your email)
- [ ] ✅ AI Chatbot responds (ask: "What products do you offer?")
- [ ] ✅ reCAPTCHA appears on forms
- [ ] ✅ Google Analytics tracks visits (check GA dashboard)
- [ ] ✅ All product pages load
- [ ] ✅ Mobile responsive design works
- [ ] ✅ HTTPS is enabled (automatic on Vercel/GCP)

---

## 🔐 Security Reminders

### ✅ DO:
- ✅ Keep `site/.env` local only (never commit)
- ✅ Set environment variables in Vercel/GCP dashboard
- ✅ Use `.env.example` as template
- ✅ Run `./pre-push-check.sh` before pushing
- ✅ Rotate API keys if accidentally exposed

### ❌ DON'T:
- ❌ Commit `site/.env` to git
- ❌ Share API keys in chat/email
- ❌ Hardcode secrets in code
- ❌ Push without running pre-push check
- ❌ Commit files with real credentials

---

## 📞 Need Help?

**Common Issues:**

1. **Forms not saving to Google Sheets**
   - Check service account email is added as Editor to sheet
   - Verify `GOOGLE_SHEET_ID` is correct
   - Check sheet tab names match exactly

2. **Emails not sending**
   - For Gmail: Enable 2-Step Verification & create App Password
   - Test SMTP credentials
   - Check `GMAIL_APP_PASSWORD` format (16 chars with spaces)

3. **Chatbot not responding**
   - Verify `GOOGLE_GEMINI_API_KEY` is valid
   - Check billing is enabled in GCP
   - Try regenerating the API key

4. **Build fails**
   - Run `npm install` in `site/` directory
   - Check Node.js version (need 20.x)
   - Clear `.next/` and rebuild

---

## 📊 What Was Updated Today

### SEO Improvements:
- ✅ Home page meta title: "Hot Thermoplastic Paint Manufacturers | YNM Safety"
- ✅ Meta description updated with keywords
- ✅ Added meta keywords tag
- ✅ Open Graph & Twitter Cards updated

### Spelling Fixes:
- ✅ Fixed 150+ instances of "manufactures" → "manufacturers"
- ✅ Updated product URLs and sitemap

### Documentation:
- ✅ README.md enhanced with build status
- ✅ Security audit completed
- ✅ This quick deploy guide created

---

## 🎉 You're Ready to Deploy!

```bash
# Quick Deploy (3 steps):
git add .
git commit -m "SEO updates and fixes"
git push origin main

# Then deploy to Vercel or GCP
# Follow instructions above ⬆️
```

**Need the detailed summary?** See `PROJECT_CLEANUP_SUMMARY.md`

---

**Generated:** February 14, 2026  
**Developer:** Om Gupta  
**Company:** YNM Safety Pan Global Trade Pvt Ltd
