# YNM Safety - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5.12-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

A modern, responsive corporate website for **YNM Safety Pan Global Trade Pvt Ltd**, a leading manufacturer and exporter of road safety products, road marking paints, metal beam crash barriers, highway signages, bitumen products, and precision metal fabrication based in Hyderabad, India.

## Live Website

[ynmsafety.com](https://ynmsafety.com)

---

## 🔒 Repository Status

- ✅ **GitHub Ready** – No secrets in repo; `.env.example` and `.env.gcp.example` contain placeholders only
- ✅ **Security Scanned** – Gitleaks runs on push/PR via GitHub Actions (`.github/workflows/security-scan.yml`)
- ✅ **Clean Structure** – No unnecessary files; all assets used by the app
- ✅ **Production Ready** – Build verified, all tests passing
- ✅ **Safe to Deploy** – Vercel, GCP Cloud Run, or any Node.js host

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5.12 | React Framework (Pages Router) |
| React | 19.0.0 | UI Library |
| Tailwind CSS | 3.4.1 | Utility-first Styling |
| Nodemailer | 7.0.12 | Email Services (Career Applications) |
| Google Gemini API | 2.5 Flash | AI-powered Chatbot |
| Google Sheets API | v4 | Form Data Storage (4 forms, 4 tabs) |
| Google Analytics | GA4 | Visitor Tracking & Analytics |
| Google reCAPTCHA | v2 | Spam Protection (5 forms) |
| Formidable | 3.5.4 | PDF Resume Upload Handling |
| PDF Parse | 2.4.5 | Resume Validation & Security |

## Features

- **AI Chatbot** - Powered by Google Gemini 2.5 Flash with comprehensive company knowledge
- **5 Contact Forms** - All integrated with Google Sheets (4 tabs: contact, director appointment, investor relations, foreign collaborations)
- **Career Portal** - Job applications with PDF resume upload & automated email notifications to applicants and HR
- **Google Analytics** - GA4 visitor tracking and analytics
- **reCAPTCHA Protection** - "I'm not a robot" verification on all forms to prevent spam
- **Responsive Design** - Optimized for all devices (mobile, tablet, laptop, desktop)
- **Cross-Platform Support** - Windows and Mac specific optimizations
- **Interactive India Map** - Regional contact information with click-to-view details
- **Product Catalog** - Detailed product pages with specs, application areas, projects, and market data
- **Fabrication Showcase** - Bento grid design showcasing 34+ fabrication products
- **Multi-language Support** - 12 Indian languages supported (English, Hindi, Telugu, Tamil, etc.)
- **Performance Optimized** - Lazy loading, caching, image optimization, and smooth animations
- **SEO Optimized** - Custom meta tags, sitemap, robots.txt, and structured data

---

## Project Structure

```
YNM-website/
├── .github/workflows/
│   └── security-scan.yml           # GitHub Actions: secret scanning on push/PR
├── .gitignore                      # Root: env, keys, build outputs (no leaks)
├── .gitleaks.toml                  # Gitleaks rules for CI/local scans
├── docs/                           # Internal documentation
│   └── SEARCH-CONSOLE.md           # Google Search Console setup & reindex
├── LICENSE
├── README.md
└── site/                           # Next.js app (set as root in Vercel/GCP)
    ├── components/                 # React components
    │   ├── Chatbot.jsx             # AI chatbot (Gemini)
    │   ├── Hero.jsx, Navbar.jsx, Footer.jsx
    │   ├── ProductsSection.jsx, BrandsSection.jsx
    │   ├── TestimonialsSection.jsx, DirectorSection.jsx
    │   ├── EmployeesSection.jsx, IndiaPresenceMap.jsx
    │   ├── FloatingSocialMedia.jsx, Mascot.jsx
    │   └── Flag.jsx
    ├── contexts/
    │   └── LanguageContext.jsx     # Multi-language support (12 languages)
    ├── lib/                        # Data & utilities
    │   ├── googleSheets.js         # Shared Google Sheets integration
    │   ├── recaptchaUtils.js       # Shared reCAPTCHA utilities
    │   ├── chatbotData.js          # AI chatbot FAQ & product catalog
    │   ├── productsCategoriesData.js
    │   ├── productsData.js
    │   ├── directorData.js
    │   ├── employeesData.js
    │   ├── indiaContacts.js
    │   ├── indiaMapPaths.js
    │   └── translations.js
    ├── pages/                      # Routes & API endpoints
    │   ├── api/
    │   │   ├── contact/submit.js   # Contact form → Google Sheets
    │   │   ├── director-appointment/submit.js  # Director appointment → Sheets
    │   │   ├── investor-relations/submit.js    # Investor inquiries → Sheets
    │   │   ├── foreign-collaborations/submit.js # Partnership → Sheets
    │   │   ├── careers/submit.js   # Career form (PDF upload + email)
    │   │   ├── chat/gemini.js      # AI chatbot API (Gemini 2.5)
    │   │   └── health.js           # Health check endpoint
    │   ├── products/
    │   │   ├── index.jsx
    │   │   ├── [productId].jsx
    │   │   └── fabrication.jsx
    │   ├── about/, careers/, clients/, contact/
    │   ├── get-quote/, foreign-collaborations/, investor-relations/
    │   ├── our-team/
    │   └── index.js
    ├── scripts/
    │   └── verify-integrations.js  # Test Google Sheets, Gemini, Contact form
    ├── styles/
    │   └── globals.css
    ├── public/                     # Static assets
    │   ├── assets/                 # Images, logos, team photos
    │   ├── certificates/           # ISO certificate PDF
    │   ├── fonts/                  # Montserrat font
    │   ├── favicon.svg, favicon.ico
    │   ├── robots.txt, sitemap.xml
    │   └── google*.html            # Google Search Console verification
    ├── .env.example                # Environment template (safe to commit)
    ├── .env.gcp.example            # GCP Cloud Run env reference
    ├── .gitignore
    ├── .dockerignore, Dockerfile
    └── package.json
```

---

## Quick Start

### Prerequisites

- **Node.js 20.x** or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- Google Cloud account (for Sheets API and Gemini API)
- Gmail account or SMTP server (for email notifications)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/YNM-website.git
cd YNM-website/site

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Edit .env with your credentials (see SETUP.md for detailed guide)
# - Google Sheets credentials (all 4 forms)
# - Google Gemini API key (chatbot)
# - Gmail credentials (career emails)
# - (Optional) Google Analytics, reCAPTCHA

# 5. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Test at http://localhost:3000
```

### Docker

```bash
cd site

# Build Docker image
docker build -t ynm-website .

# Run container with environment variables
docker run -p 3000:3000 --env-file .env ynm-website

# Access at http://localhost:3000
```

---

## Environment Variables

The app **builds and runs** without any env vars (e.g. `npm run build`). For **forms**, **chatbot**, and **careers** to work, set credentials in `site/.env` (local) or in Vercel/GCP (deployment).

### Setup (local)

1. **Copy the template:** `cp site/.env.example site/.env`
2. **Replace placeholders** in `site/.env` with your values (see [SETUP.md](SETUP.md)).
3. **Never commit `site/.env`** — it is gitignored.

---

### Required Variables

#### 1. Google Sheets API (All 4 Forms - One Sheet, 4 Tabs)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `GOOGLE_SHEET_ID` | Google Sheet ID from URL | [See SETUP.md](SETUP.md#google-sheets-setup) |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email | [GCP Console](https://console.cloud.google.com/) → IAM → Service Accounts |
| `GOOGLE_PRIVATE_KEY` | Service account private key (JSON) | Download from GCP Console when creating service account key |

**Form Mapping:**
- Contact Us → "contact us" tab
- Director Appointment → "our director appointment" tab
- Investor Relations → "investor relations" tab
- Foreign Collaborations → "foreign collaborations" tab

<details>
<summary><b>Google Sheets Setup Guide (Click to Expand)</b></summary>

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet named "Website Forms"
   - Create 4 tabs: `contact us`, `our director appointment`, `investor relations`, `foreign collaborations`
   - Copy the **Sheet ID** from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

2. **Create GCP Service Account**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing one
   - Enable **Google Sheets API**
   - Go to **IAM & Admin** → **Service Accounts** → **Create Service Account**
   - Name it "ynm-website-sheets" → Click **Create**
   - Skip role assignment → Click **Done**

3. **Generate Service Account Key**
   - Click on the service account you just created
   - Go to **Keys** tab → **Add Key** → **Create New Key** → Select **JSON**
   - Download the JSON file
   - Open it and copy:
     - `client_email` → Use as `GOOGLE_SERVICE_ACCOUNT_EMAIL`
     - `private_key` → Use as `GOOGLE_PRIVATE_KEY` (keep the `\n` characters)

4. **Share Google Sheet with Service Account**
   - Open your Google Sheet
   - Click **Share** button
   - Paste the service account email (from `client_email`)
   - Set permission to **Editor**
   - Click **Send**

</details>

---

#### 2. Google Gemini API (AI Chatbot)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `GOOGLE_GEMINI_API_KEY` | API key for Gemini 2.5 Flash | [Get API Key](https://aistudio.google.com/app/apikey) |

**Steps:**
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click **Create API Key**
3. Select your GCP project or create a new one
4. Copy the API key starting with `AIzaSy...`

---

#### 3. Email Configuration (Career Applications)

**Choose ONE option below:**

##### Option 1: Gmail (Simplest - Recommended for Getting Started)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `GMAIL_USER` | Your Gmail address | Use your existing Gmail |
| `GMAIL_APP_PASSWORD` | 16-character app password | [Create App Password](https://myaccount.google.com/apppasswords) |

**Steps:**
1. Go to [Google Account App Passwords](https://myaccount.google.com/apppasswords)
2. Sign in with your Gmail account
3. Enable **2-Step Verification** if not already enabled
4. Create app password:
   - Select app: **Mail**
   - Select device: **Other** (enter "YNM Website")
5. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

##### Option 2: Custom SMTP (Recommended for Production)

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server hostname | `smtp.yourdomain.com` |
| `SMTP_PORT` | SMTP port (587 or 465) | `587` (TLS) or `465` (SSL) |
| `SMTP_USER` | SMTP username | `noreply@ynmsafety.com` |
| `SMTP_PASS` | SMTP password | Your SMTP password |
| `SMTP_SECURE` | Use SSL (true for 465) | `false` for 587, `true` for 465 |

##### Option 3: SendGrid (For High-Volume Sending)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `SENDGRID_API_KEY` | SendGrid API key | [SendGrid Console](https://app.sendgrid.com/settings/api_keys) |

---

#### 4. Career Form Email Settings

| Variable | Description | Default |
|----------|-------------|---------|
| `HR_EMAIL` | Email to receive career applications | `ynm.hr@ynmsafety.com` |
| `CAREERS_NOREPLY_FROM` | Sender email for career notifications | `guptaom31619@gmail.com` |

---

#### 5. Google Analytics (Optional)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | [Google Analytics](https://analytics.google.com/) → Admin → Data Streams |

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or select existing one
3. Go to **Admin** → **Data Streams** → Select your stream
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
5. Add to `.env.local` as `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

**Note:** Google Analytics will only load if this variable is set. Leave it unset during development to avoid tracking test data.

---

### Optional Variables (Recommended)

#### 6. reCAPTCHA v2 (Spam Protection - All 5 Forms)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Public site key | [reCAPTCHA Admin](https://www.google.com/recaptcha/admin) |
| `RECAPTCHA_SECRET_KEY` | Secret key | Same as above |

**Steps:**
1. Go to [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click **+** to register a new site
3. Choose **reCAPTCHA v2** → "I'm not a robot" checkbox
4. Add your domains (e.g., `ynmsafety.com`, `localhost`)
5. Copy both **Site Key** and **Secret Key**

---

### Example `.env.local` File

```bash
# Under Construction Mode (set to 'true' in production, 'false' for local dev)
NEXT_PUBLIC_UNDER_CONSTRUCTION=false

# Google Sheets (Contact Form)
GOOGLE_SHEET_ID=your_google_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="your_private_key_from_service_account_json"

# Google Gemini API (Chatbot)
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# Gmail (Email Notifications)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# HR Email
HR_EMAIL=hr@ynmsafety.com

# Optional: Google Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: reCAPTCHA
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
# RECAPTCHA_SECRET_KEY=6LeXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

### Troubleshooting

<details>
<summary><b>Google Sheets not saving data</b></summary>

- Verify `GOOGLE_SHEET_ID` is correct (from sheet URL)
- Ensure service account email is added as **Editor** to the sheet
- Check service account key is valid (download a new one if needed)
- Verify `GOOGLE_PRIVATE_KEY` includes the `\n` newline characters

</details>

<details>
<summary><b>Chatbot not responding</b></summary>

- Verify `GOOGLE_GEMINI_API_KEY` is correct
- Check API key has **Generative Language API** enabled in GCP
- Ensure billing is enabled on your GCP project
- Try regenerating the API key

</details>

<details>
<summary><b>Emails not sending</b></summary>

- **For Gmail:** Verify 2-Step Verification is enabled and App Password is correct
- **For SMTP:** Check hostname, port, and credentials are correct
- Test your SMTP credentials using a tool like [SMTP Test](https://www.smtper.net/)
- Check server logs for specific error messages

</details>

---

## Security (GitHub / Vercel / GCP – no leaks)

The repo includes a **GitHub Actions** workflow (`.github/workflows/security-scan.yml`) that runs Gitleaks on push/PR to detect secrets. For local scans: `gitleaks detect --source . --verbose`.

### What's protected (never committed)

Sensitive paths are in `.gitignore` (root and `site/`). Never committed:

| File/Pattern | Contains | Status |
|--------------|----------|--------|
| `.env` | All environment variables | ✓ Gitignored |
| `.env.*` (except .example) | Any environment file | ✓ Gitignored |
| `*.pem`, `*.key` | Private keys | ✓ Gitignored |
| `credentials.json` | Service account files | ✓ Gitignored |
| `service-account*.json` | GCP credentials | ✓ Gitignored |
| `node_modules/` | Dependencies | ✓ Gitignored |
| `.next/` | Build outputs | ✓ Gitignored |

**Safe to commit:** `site/.env.example` and `site/.env.gcp.example` contain **placeholders only**—no real keys or IDs. Real credentials go in `site/.env` (local) or in Vercel/GCP dashboard (deployment).

### Security Features

✅ **Environment Variables**: All secrets accessed via `process.env` only  
✅ **Server-Side Only**: API keys never exposed to browser/client  
✅ **Rate Limiting**: Career form limited to 3 submissions per 15 minutes per IP  
✅ **reCAPTCHA v2**: "I'm not a robot" protection on all 5 forms  
✅ **PDF Security**: Validates PDF files, rejects password-protected resumes  
✅ **Email Validation**: Strict email format validation on all forms  
✅ **CAPTCHA Protection**: Math CAPTCHA + reCAPTCHA on career form  
✅ **No Hardcoded Secrets**: All sensitive data in environment variables  
✅ **GitHub Actions**: Automated security scanning with Gitleaks  

### Before you push (GitHub / Vercel / GCP)

Run the automated security check script from the **project root**:

```bash
# Automated pre-push security check (recommended)
./pre-push-check.sh

# What it checks:
# ✅ .env is gitignored
# ✅ Only .env.example files are tracked
# ✅ No sensitive files staged
# ✅ No hardcoded secrets (Gitleaks scan if installed)
# ✅ Production build passes
# ✅ No large files (>10MB)
```

**Manual checks (if needed):**
```bash
# 1. Verify .env is gitignored
git check-ignore site/.env  # Should output: site/.env

# 2. Check only .env.example is tracked
git ls-files | grep '\.env'  # Should show: site/.env.example, site/.env.gcp.example

# 3. Full secret scan (optional, requires: brew install gitleaks)
gitleaks detect --source . --verbose
```

- **Never commit** `site/.env`, `.env.gcp.yaml`, or any file with real API keys or passwords.
- **Vercel / GCP:** Set all environment variables in the platform dashboard; the repo is never used for secrets.
- **Local only:** Copy `site/.env.example` to `site/.env` and fill in values; `site/.env` is gitignored.

---

### Security Best Practices

**Do:** Use `.env.local` locally (gitignored); set env vars in Vercel/GCP dashboard for deployment; use `process.env` in code only.  
**Don’t:** Commit any `.env` (except `.env.example`), hardcode secrets, or commit keys/certificates. `.gitignore` and the Security Scan workflow help prevent leaks.

---

## Deployment

### Vercel (Recommended - Zero Config)

**Easiest deployment option with automatic SSL and CDN:**

1. **Prepare Repository**
   ```bash
   # Ensure site/.env is NOT tracked
   git check-ignore site/.env  # Should output: site/.env
   
   # Push to GitHub
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and import your GitHub repository
   - Set **Root Directory** to `site`
   - Add all environment variables from `site/.env` in Vercel dashboard
   - Click **Deploy**

3. **Environment Variables to Add**
   ```
   GOOGLE_SHEET_ID=your_sheet_id
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   GMAIL_USER=guptaom31619@gmail.com
   GMAIL_APP_PASSWORD=your_16_char_password
   HR_EMAIL=ynm.hr@ynmsafety.com
   CAREERS_NOREPLY_FROM=guptaom31619@gmail.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   RECAPTCHA_SECRET_KEY=6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
   ```

### Google Cloud Platform (Cloud Run)

**For Docker deployment with full control:**

1. **Build and Deploy**
   ```bash
   cd site
   npm run build  # Test build locally first
   
   # Deploy to Cloud Run (auto-builds from Dockerfile)
   gcloud run deploy ynm-website \
     --source . \
     --platform managed \
     --region asia-south1 \
     --allow-unauthenticated \
     --port 3000
   ```

2. **Set Environment Variables**
   
   Use GCP Secret Manager (recommended) or environment variables:
   ```bash
   # Option 1: Via Console (recommended)
   # Go to Cloud Run → Select Service → Edit & Deploy New Revision → Variables & Secrets
   
   # Option 2: Via CLI
   gcloud run services update ynm-website \
     --update-env-vars GOOGLE_SHEET_ID=your_sheet_id \
     --update-env-vars GOOGLE_GEMINI_API_KEY=your_api_key \
     --region asia-south1
   ```

### Docker (Local Testing)

```bash
cd site

# Build image
docker build -t ynm-website .

# Run with environment variables
docker run -p 3000:3000 --env-file .env.local ynm-website

# Test at http://localhost:3000
```

### Post-Deployment Checklist

After deploying to any platform:

- [ ] ✅ HTTPS is enabled (automatic on Vercel/Cloud Run)
- [ ] ✅ All environment variables are set in the hosting platform
- [ ] ✅ Test all 4 forms (should save to correct Google Sheet tabs)
- [ ] ✅ Test career form (should send emails with PDF attachments to applicant + HR)
- [ ] ✅ Test AI chatbot (should respond with Gemini API)
- [ ] ✅ Test reCAPTCHA (verify bot protection works)
- [ ] ✅ Verify `site/.env` is NOT in git repository
- [ ] ✅ Google Sheets is shared with service account email (Editor permission)
- [ ] ✅ Production domain added to reCAPTCHA admin
- [ ] ✅ Custom domain configured (if applicable)
- [ ] ✅ Analytics/monitoring enabled (optional)

---

## API Endpoints

All API routes are located in `site/pages/api/` and are server-side only.

### Contact Form API

**Endpoint:** `POST /api/contact/submit`

**Purpose:** Save contact form submissions to Google Sheets

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "ABC Corp",
  "subject": "Product Inquiry",
  "message": "I would like to know more about your products."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thanks! Your message has been submitted successfully.",
  "sheets": {
    "success": true,
    "updates": { "updatedRows": 1 }
  }
}
```

**Environment Variables Used:**
- `GOOGLE_SHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`

---

### Career Application API

**Endpoint:** `POST /api/careers/submit`

**Purpose:** Process job applications with PDF resume upload and email notifications

**Request:** `multipart/form-data`
- `name` (string, required)
- `email` (string, required)
- `phone` (string, required)
- `position` (string, required)
- `experience` (string, optional)
- `coverLetter` (string, optional)
- `resume` (file, required, PDF only, max 5MB)
- `captchaAnswer` (string, required)
- `captchaQuestion` (string, required)
- `recaptchaToken` (string, required)

**Features:**
- ✅ PDF validation (MIME type, file header, size limit)
- ✅ Rejects password-protected PDFs
- ✅ Rate limiting (3 submissions per 15 minutes per IP)
- ✅ Math CAPTCHA validation
- ✅ reCAPTCHA v2 validation
- ✅ Sends confirmation email to applicant
- ✅ Sends notification email to HR with PDF attached

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully! A confirmation email has been sent to your email address."
}
```

**Environment Variables Used:**
- `GMAIL_USER` / `SMTP_HOST` (email sending)
- `GMAIL_APP_PASSWORD` / `SMTP_PASS` (email auth)
- `HR_EMAIL` (recipient)
- `RECAPTCHA_SECRET_KEY` (optional)

---

### AI Chatbot API

**Endpoint:** `POST /api/chat/gemini`

**Purpose:** Process chatbot queries using Google Gemini 2.5 Flash API

**Request Body:**
```json
{
  "message": "What products does YNM offer?",
  "conversationHistory": [
    { "sender": "user", "text": "Hello" },
    { "sender": "bot", "text": "Welcome to YNM Industries!" }
  ],
  "language": "en"
}
```

**Features:**
- ✅ Supports English and Hindi responses
- ✅ Company-specific context and knowledge base
- ✅ Conversation history for context
- ✅ Automatic model fallback (tries multiple Gemini versions)
- ✅ Complete, helpful responses (4000 token limit)

**Response:**
```json
{
  "response": "YNM Safety offers premium paints, metal fabrication...",
  "usage": {
    "promptTokens": 150,
    "totalTokens": 300
  }
}
```

**Environment Variables Used:**
- `GOOGLE_GEMINI_API_KEY`

---

### Health Check API

**Endpoint:** `GET /api/health`

**Purpose:** Basic health check for monitoring and uptime checks

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-02-09T12:00:00.000Z",
  "environment": "production"
}
```
*(Returns `degraded` if required env vars are missing; `healthy` when all are present.)*

---

## Scripts

```bash
# Development
npm run dev          # Start Next.js dev server at http://localhost:3000
                     # Hot-reload enabled, shows detailed errors

# Production
npm run build        # Create optimized production build in .next/
npm run start        # Start production server (requires npm run build first)

# Code Quality
npm run lint         # Run ESLint to check code quality

# Integration Verification (optional)
node scripts/verify-integrations.js
# Or against production: VERIFY_BASE_URL=https://ynmsafety.com node scripts/verify-integrations.js
```

**Notes:**
- Always run `npm run build` before deploying to production
- Use `npm run dev` for local development only
- Run `npm run lint` before committing

---

## Product Categories

1. **Road Marking Paints** - Hot Thermoplastic, Cold Plastic, Water Base Road Marking Paints, Waterborne Airfield Marking Paints
2. **Bitumen** - Bitumen VG 40 for highway construction
3. **Metal Beam Crash Barriers** - W Beam, Thrie Beam, Double W Beam, Roller Beam Barriers, End Terminals, Crash Attenuators
4. **Signages** - Retro Reflective Gantry, Cantilever, Canopy, Informatory Signage
5. **Fabrication** - 34+ products including Solar Panel Structures, Railway Structures, GI Dustbins, High Mast Poles, Bridge Bearings, Toll Plaza Equipment

---

## License

**Proprietary** - All rights reserved by YNM Safety Pan Global Trade Pvt Ltd.

This codebase is proprietary software. Unauthorized copying, modification, distribution, or use is strictly prohibited.

---

## Contact

**YNM Safety Pan Global Trade Pvt Ltd**

| | |
|---|---|
| Website | [ynmsafety.com](https://ynmsafety.com) |
| Sales | sales@ynmsafety.com |
| HR | ynm.hr@ynmsafety.com |
| Phone | +91 96765 75770 / +91 90002 62013 |
| Location | Hyderabad, Telangana, India |

---

<p align="center">
  <strong>Developed by Om Gupta</strong><br>
  &copy; 2024-2026 YNM Safety Pan Global Trade Pvt Ltd. All rights reserved.
</p>
