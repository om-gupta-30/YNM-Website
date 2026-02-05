# 🚀 Quick Deployment Commands - YNM Website

**Status:** ✅ Ready to Deploy  
**Last Updated:** February 5, 2026

---

## 📤 Push to GitHub

```bash
# Navigate to project
cd "/Users/omg/Desktop/YNM website"

# Review changes
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Clean up project and prepare for production deployment

- Update .gitignore with enhanced security patterns
- Update README with secure credential placeholders
- Fix Google Analytics implementation (use Next.js Script component)
- Remove temporary test and report files
- Verify all environment variables working
- Add comprehensive security documentation
- Confirm no secrets are committed to repository

All security checks passed ✅
Build successful ✅
Ready for deployment ✅"

# Push to GitHub
git push origin main
```

**✅ This is 100% safe - No secrets will be leaked!**

---

## 🌐 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub (see above)

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. **Configure:**
   - Framework Preset: **Next.js**
   - Root Directory: **`site`** ⚠️ IMPORTANT
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

### Step 3: Add Environment Variables

Go to **Project Settings** → **Environment Variables** and add these:

```bash
# Copy EXACTLY from: /Users/omg/Desktop/YNM website/site/.env.local

# Required - Google Sheets (Contact Form)
GOOGLE_SHEET_ID=your_actual_value_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_actual_value_here
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Required - Gemini AI (Chatbot)
GOOGLE_GEMINI_API_KEY=your_actual_value_here

# Required - Gmail (Career Emails)
GMAIL_USER=your_actual_value_here
GMAIL_APP_PASSWORD=your_actual_value_here

# Required - HR Email
HR_EMAIL=ynm.hr@ynmsafety.com

# Optional - Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

### Step 4: Deploy

Click **"Deploy"** and wait ~2 minutes. Vercel will:
- ✅ Install dependencies
- ✅ Build your Next.js app
- ✅ Deploy to global CDN
- ✅ Enable HTTPS automatically
- ✅ Provide a live URL

---

## ☁️ Deploy to Google Cloud Run

### Prerequisites

```bash
# Install gcloud CLI (if not installed)
# Visit: https://cloud.google.com/sdk/docs/install

# Authenticate
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID
```

### Deploy

```bash
# Navigate to site directory
cd "/Users/omg/Desktop/YNM website/site"

# Deploy to Cloud Run
gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --port 3000 \
  --memory 1Gi \
  --cpu 1 \
  --timeout 300 \
  --max-instances 10

# Wait for deployment (~4-5 minutes)
```

### Add Environment Variables

**Option 1: Via Console (Recommended)**
1. Go to [Cloud Run Console](https://console.cloud.google.com/run)
2. Click on **ynm-website** service
3. Click **"Edit & Deploy New Revision"**
4. Scroll to **"Variables & Secrets"**
5. Click **"Add Variable"** for each env var
6. Copy values from `site/.env.local`

**Option 2: Via CLI**
```bash
gcloud run services update ynm-website \
  --update-env-vars "GOOGLE_SHEET_ID=your_value,GOOGLE_GEMINI_API_KEY=your_value" \
  --region asia-south1
```

---

## 🐳 Deploy with Docker (Local/Cloud)

### Build and Test Locally

```bash
cd "/Users/omg/Desktop/YNM website/site"

# Build Docker image
docker build -t ynm-website .

# Test locally
docker run -p 3000:3000 --env-file .env.local ynm-website

# Visit: http://localhost:3000
```

### Push to Docker Registry

```bash
# Tag for Docker Hub
docker tag ynm-website your-username/ynm-website:latest

# Push to registry
docker push your-username/ynm-website:latest

# Or push to GCP Container Registry
docker tag ynm-website gcr.io/YOUR_PROJECT_ID/ynm-website:latest
docker push gcr.io/YOUR_PROJECT_ID/ynm-website:latest
```

---

## ✅ Post-Deployment Checklist

After deploying to any platform, test these:

### 1. Basic Functionality
```bash
# Replace with your deployment URL
SITE_URL="https://your-deployment-url.vercel.app"

# Test homepage
curl -I $SITE_URL

# Test API health
curl $SITE_URL/api/health
```

### 2. Test Forms & APIs
- [ ] Visit contact page → Submit form → Check Google Sheets
- [ ] Visit careers page → Submit application → Check email
- [ ] Open chatbot → Send message → Verify AI response

### 3. Verify Environment Variables
- [ ] Contact form saves to Google Sheets ✅
- [ ] Career form sends emails ✅
- [ ] Chatbot responds with Gemini AI ✅
- [ ] Google Analytics tracking (if enabled) ✅

### 4. Check Performance
- [ ] All pages load quickly (<2 seconds)
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] No console errors in browser

---

## 🔄 Update Deployment

### Vercel (Automatic)
```bash
# Just push to GitHub - Vercel auto-deploys
git add .
git commit -m "Update features"
git push origin main

# Vercel will automatically:
# 1. Detect the push
# 2. Build the new version
# 3. Deploy to production
```

### Google Cloud Run (Manual)
```bash
cd "/Users/omg/Desktop/YNM website/site"

# Re-deploy (same command as initial deploy)
gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Test build locally first
cd "/Users/omg/Desktop/YNM website/site"
npm run build

# Check for errors
npm run lint
```

### Environment Variables Not Working
```bash
# Verify in deployment platform console
# For Vercel: Project Settings → Environment Variables
# For GCP: Cloud Run → Service → Edit → Variables & Secrets

# Redeploy after adding variables
```

### Forms Not Working
```bash
# Check API endpoints
curl https://your-site.com/api/health
curl -X POST https://your-site.com/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
```

---

## 📞 Support

If you encounter issues:

1. **Check logs:**
   - Vercel: Project → Deployments → Click deployment → View logs
   - GCP: Cloud Run → Service → Logs tab

2. **Verify environment variables:**
   - All required variables are set
   - No typos in variable names
   - Values are correct (copy from `.env.local`)

3. **Test locally:**
   - Run `npm run dev` locally
   - Test all features
   - Check browser console for errors

---

## 🎉 You're Ready!

Your YNM website is fully prepared for deployment. Choose your platform and follow the commands above.

**Everything is secure, tested, and ready to go! 🚀**

---

**Quick Links:**
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google Cloud Console](https://console.cloud.google.com)
- [GitHub Repository](https://github.com)

**Documentation:**
- [README.md](README.md) - Full documentation
- [DEPLOYMENT_READY.md](DEPLOYMENT_READY.md) - Cleanup report
