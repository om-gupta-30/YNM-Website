# YNM Mega Industries - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

A modern, responsive corporate website for **YNM Mega Industries Pvt Ltd**, a leading manufacturer and exporter of road safety products, industrial paints, metal fabrication, and school furniture based in Hyderabad, India.

## Live Website

[ynmsafety.com](https://ynmsafety.com)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React Framework with Pages Router |
| React 19 | UI Library |
| Tailwind CSS 3.4 | Utility-first Styling |
| Nodemailer | Email Services |
| Google Gemini API | AI-powered Chatbot |
| Google Sheets API | Contact Form Data Storage |

## Features

- **Multi-language Support** - English, Hindi, Telugu, Tamil, Kannada
- **AI Chatbot** - Powered by Google Gemini for instant customer queries
- **Responsive Design** - Mobile-first, optimized for all devices
- **Contact & Quote Forms** - Integrated with Google Sheets
- **Career Portal** - Job applications with PDF resume upload & validation
- **Interactive India Map** - Regional contact information
- **Product Catalog** - Detailed product pages with specifications

## Project Structure

```
ynm-website/
├── site/                          # Next.js application
│   ├── components/                # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Hero.jsx
│   │   └── ...
│   ├── pages/                     # Routes & API endpoints
│   │   ├── api/
│   │   │   ├── contact/submit.js  # Contact form → Google Sheets
│   │   │   ├── careers/submit.js  # Career form with email & PDF
│   │   │   └── chat/gemini.js     # AI chatbot API
│   │   ├── products/
│   │   │   ├── index.jsx          # Product catalog
│   │   │   └── [productId].jsx    # Dynamic product pages
│   │   └── ...
│   ├── lib/                       # Data & utilities
│   ├── contexts/                  # React context providers
│   ├── styles/                    # Global CSS
│   ├── public/                    # Static assets
│   ├── .env.example               # Environment template
│   ├── Dockerfile                 # Docker build config
│   └── package.json
├── .gitignore                     # Git ignore rules
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ynm-website.git
cd ynm-website/site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

### Docker

```bash
cd site
docker build -t ynm-website .
docker run -p 3000:3000 --env-file .env.local ynm-website
```

## Environment Variables

Create `site/.env.local` from the template:

```bash
cp site/.env.example site/.env.local
```

### Required Variables

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `GOOGLE_SHEET_ID` | Google Sheet ID for contact form | Google Sheets URL |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email | GCP Console → IAM |
| `GOOGLE_PRIVATE_KEY` | Service account private key | GCP Console → Service Account Keys |
| `GOOGLE_GEMINI_API_KEY` | Gemini API key for chatbot | [Google AI Studio](https://aistudio.google.com/) |

### Email Configuration (Choose ONE)

**Option 1: Gmail (Simplest)**
| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address |
| `GMAIL_APP_PASSWORD` | [App Password](https://support.google.com/accounts/answer/185833) |

**Option 2: Custom SMTP**
| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | Port (587 or 465) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `SMTP_SECURE` | `true` for port 465 |

**Option 3: SendGrid**
| Variable | Description |
|----------|-------------|
| `SENDGRID_API_KEY` | SendGrid API key |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HR_EMAIL` | Career form recipient | `hr@ynmsafety.com` |
| `CAREERS_NOREPLY_FROM` | No-reply sender address | `noreply@ynmsafety.com` |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v2 secret | _(skipped if not set)_ |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key | _(skipped if not set)_ |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set **Root Directory** to `site`
4. Add environment variables in Vercel dashboard
5. Deploy

### Google Cloud Platform

```bash
# Build the application
cd site
npm run build

# Deploy to Cloud Run
gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated

# Set environment variables in GCP Console
```

## Security

### Pre-configured Protections

- `.env.local` and all `.env.*` files are gitignored
- No hardcoded API keys in source code
- Service account files (`.json`, `.pem`, `.key`) are gitignored
- All secrets accessed via `process.env`
- API keys are only used server-side (never exposed to browser)

### Files That Are NEVER Committed

```
.env.local              # Local environment variables
.env.production         # Production secrets
*.pem, *.key            # Private keys
credentials.json        # Service account files
service-account*.json   # GCP service accounts
```

### Before Deploying Checklist

- [ ] All environment variables set in hosting platform
- [ ] HTTPS enabled on production domain
- [ ] Google Cloud IAM permissions reviewed
- [ ] reCAPTCHA configured for production (optional but recommended)

### Verifying Nothing Will Leak

Run this command before pushing:

```bash
# Check what files will be committed
git status

# Verify .env files are NOT listed
# Verify no .json credential files are listed
# Verify no .pem or .key files are listed
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/submit` | POST | Contact form → Google Sheets |
| `/api/careers/submit` | POST | Career application with PDF resume |
| `/api/chat/gemini` | POST | AI chatbot responses |

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Product Categories

1. **Industrial Paints** - Hot Thermoplastic, Cold Plastic, Water Base
2. **Metal Beam Crash Barriers** - W Beam, Thrie Beam, Roller Barrier
3. **Signages** - Gantry, Cantilever, Canopy, Informatory
4. **Fabrication & Furniture** - Metal Fabrication, School Furniture

## License

**Proprietary** - All rights reserved by YNM Mega Industries Pvt Ltd.

This codebase is proprietary software. Unauthorized copying, modification, distribution, or use is strictly prohibited.

## Contact

**YNM Mega Industries Pvt Ltd**

| | |
|---|---|
| Website | [ynmsafety.com](https://ynmsafety.com) |
| Sales | sales@ynmsafety.com |
| HR | hr@ynmsafety.com |
| Phone | +91 96765 75770 |
| Location | Hyderabad, Telangana, India |

---

<p align="center">
  Developed by <strong>Om Gupta</strong><br>
  © 2024-2026 YNM Mega Industries Pvt Ltd
</p>
