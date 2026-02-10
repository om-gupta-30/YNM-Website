# 🚀 Quick Deploy Guide

**Status:** ✅ Production Ready | No Secrets in Repo | Safe to Push

---

## Before You Deploy

```bash
# Run security check (REQUIRED before every push)
./pre-push-check.sh
```

**Expected output:**
```
✅ site/.env is properly gitignored
✅ Only .env.example files are tracked
✅ No sensitive files staged
✅ No secrets detected
✅ Production build successful
✅ All checks passed! Safe to push.
```

---

## Deploy to GitHub

```bash
# 1. Add all changes
git add .

# 2. Commit with message
git commit -m "feat: Clean project structure and security updates"

# 3. Push to GitHub
git push origin main
```

**What's safe in GitHub:**
- ✅ All source code (no secrets)
- ✅ `.env.example` and `.env.gcp.example` (placeholders only)
- ✅ Documentation and deployment scripts
- ✅ GitHub Actions security scan

**What's NOT in GitHub (secure):**
- 🔒 `site/.env` (gitignored - contains real API keys)
- 🔒 `.next/` and `node_modules/` (build outputs)

---

## Deploy to Vercel (Recommended)

### 1. Push to GitHub (see above)

### 2. Import to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Set **Root Directory** to `site`

### 3. Add Environment Variables

Copy-paste from your local `site/.env` file into Vercel dashboard:

```
GOOGLE_SHEET_ID=your_actual_value
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_actual_value
GOOGLE_PRIVATE_KEY=your_actual_value (keep the \n characters)
GOOGLE_GEMINI_API_KEY=your_actual_value
GMAIL_USER=your_actual_value
GMAIL_APP_PASSWORD=your_actual_value
HR_EMAIL=ynm.hr@ynmsafety.com
CAREERS_NOREPLY_FROM=guptaom31619@gmail.com

# Optional (recommended for production)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LcYYYYYYYYYYYYYYYY
```

### 4. Deploy
- Click "Deploy"
- Wait 2-3 minutes
- Visit your live URL

### 5. Post-Deployment Checklist
- [ ] Test contact form (should save to Google Sheets)
- [ ] Test career form (should send emails)
- [ ] Test AI chatbot (should respond)
- [ ] Test reCAPTCHA (should show "I'm not a robot")
- [ ] Verify favicon appears in browser tab
- [ ] Check mobile responsiveness

---

## Deploy to GCP Cloud Run

### 1. Push to GitHub (see above)

### 2. Deploy with Script

```bash
cd site

# Automated deployment (recommended)
../deploy-gcp.sh

# OR manual deployment
gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --port 3000
```

### 3. Set Environment Variables

**Option A: Via Console (Recommended)**
1. Go to [Cloud Run Console](https://console.cloud.google.com/run)
2. Select your service
3. Click "Edit & Deploy New Revision"
4. Go to "Variables & Secrets" tab
5. Add all variables from your local `site/.env`

**Option B: Via CLI**
```bash
gcloud run services update ynm-website \
  --update-env-vars GOOGLE_SHEET_ID=your_value \
  --update-env-vars GOOGLE_GEMINI_API_KEY=your_value \
  --update-env-vars GMAIL_USER=your_value \
  --region asia-south1
```

**Option C: Use Secret Manager (Most Secure)**
```bash
# Create secrets
echo -n "your_api_key" | gcloud secrets create gemini-api-key --data-file=-

# Mount to Cloud Run
gcloud run services update ynm-website \
  --update-secrets GOOGLE_GEMINI_API_KEY=gemini-api-key:latest \
  --region asia-south1
```

### 4. Post-Deployment
- Visit your Cloud Run URL
- Test all forms and features (see Vercel checklist above)

---

## Troubleshooting

### "Build failed on Vercel"
```bash
# Test build locally first
cd site
npm run build

# If successful locally, check Vercel logs for specific error
```

### "Forms not working"
- Verify all environment variables are set correctly
- Check Google Sheet is shared with service account email (Editor role)
- Verify service account key is valid
- Check API keys are correct

### "Chatbot not responding"
- Verify `GOOGLE_GEMINI_API_KEY` is set
- Check Gemini API is enabled in GCP project
- Verify billing is enabled

### "Emails not sending"
- For Gmail: Verify App Password is correct (16 characters)
- For SMTP: Check hostname, port, and credentials
- Test SMTP settings with [SMTP Test Tool](https://www.smtper.net/)

### "reCAPTCHA not showing"
- Add production domain to reCAPTCHA admin console
- Verify `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set
- Check browser console for errors

---

## Environment Variables Quick Reference

**Required for all forms:**
- `GOOGLE_SHEET_ID` - Your Google Sheet ID
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Service account email
- `GOOGLE_PRIVATE_KEY` - Service account private key

**Required for chatbot:**
- `GOOGLE_GEMINI_API_KEY` - Gemini API key

**Required for career emails:**
- `GMAIL_USER` or `SMTP_HOST` - Email server
- `GMAIL_APP_PASSWORD` or `SMTP_PASS` - Email password
- `HR_EMAIL` - HR email address
- `CAREERS_NOREPLY_FROM` - Sender email

**Optional but recommended:**
- `NEXT_PUBLIC_GA_ID` - Google Analytics
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA public key
- `RECAPTCHA_SECRET_KEY` - reCAPTCHA secret key

**Detailed setup instructions:** See `SETUP.md`

---

## Security Reminders

✅ **DO:**
- Run `./pre-push-check.sh` before every push
- Set real values in Vercel/GCP dashboard only
- Keep `site/.env` local only (never commit)
- Use `.env.example` as template
- Use Secret Manager for sensitive data (production)

❌ **DON'T:**
- Commit `site/.env` (it's gitignored)
- Hardcode API keys in code
- Share private keys publicly
- Use development credentials in production
- Push without running security check

---

## Support

**Documentation:**
- `README.md` - Full documentation
- `SETUP.md` - Environment setup guide
- `PROJECT_CLEANUP_COMPLETE.md` - Security audit report

**Contact:**
- Developer: Om Gupta
- Company: YNM Safety Pan Global Trade Pvt Ltd
- Website: [ynmsafety.com](https://ynmsafety.com)

---

**Last Updated:** February 10, 2026  
**Status:** ✅ Production Ready  
**Security:** ✅ Verified Secure
