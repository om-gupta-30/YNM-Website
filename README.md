# YNM Mega Industries - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.0.7-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

A modern, responsive corporate website for **YNM Mega Industries Pvt Ltd**, a leading manufacturer and exporter of road safety products, industrial paints, metal fabrication, and school furniture based in Hyderabad, India.

## Live Website

🌐 [ynmsafety.com](https://ynmsafety.com)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.0.7 | React Framework (Pages Router) |
| React | 19.0.0 | UI Library |
| Tailwind CSS | 3.4.x | Utility-first Styling |
| Nodemailer | 7.x | Email Services |
| Google Gemini API | - | AI-powered Chatbot |
| Google Sheets API | - | Contact Form Data Storage |

## Features

- **AI Chatbot** - Powered by Google Gemini for instant customer queries
- **Responsive Design** - Optimized for all devices (mobile, tablet, laptop, desktop)
- **Cross-Platform Support** - Windows and Mac specific optimizations
- **Contact & Quote Forms** - Integrated with Google Sheets
- **Career Portal** - Job applications with PDF resume upload & email notifications
- **Interactive India Map** - Regional contact information with click-to-view details
- **Product Catalog** - Detailed product pages with specifications, pricing, and galleries
- **Performance Optimized** - Lazy loading, caching, and smooth animations

---

## Project Structure

```
ynm-website/
├── site/                          # Next.js application
│   ├── components/                # React components
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Chatbot.jsx           # AI chatbot widget
│   │   ├── Hero.jsx              # Hero section
│   │   ├── IndiaPresenceMap.jsx  # Interactive map
│   │   ├── Mascot.jsx            # Animated mascot
│   │   └── ...
│   ├── pages/                     # Routes & API endpoints
│   │   ├── api/
│   │   │   ├── contact/submit.js # Contact form → Google Sheets
│   │   │   ├── careers/submit.js # Career form with email & PDF
│   │   │   ├── chat/gemini.js    # AI chatbot API
│   │   │   └── health.js         # Health check endpoint
│   │   ├── products/
│   │   │   ├── index.jsx         # Product catalog
│   │   │   ├── [productId].jsx   # Dynamic product pages
│   │   │   └── fabrication.jsx   # Fabrication products
│   │   ├── about/
│   │   ├── careers/
│   │   ├── clients/
│   │   ├── contact/
│   │   └── ...
│   ├── lib/                       # Data & utilities
│   │   ├── productsCategoriesData.js
│   │   ├── chatbotData.js
│   │   ├── indiaContacts.js
│   │   └── ...
│   ├── styles/
│   │   └── globals.css           # Global styles & responsive breakpoints
│   ├── public/                    # Static assets
│   │   ├── assets/               # Images & media
│   │   ├── certificates/         # PDF certificates
│   │   └── fonts/                # Custom fonts
│   ├── .env.example              # Environment template (safe to commit)
│   ├── .gitignore                # Git ignore rules
│   ├── Dockerfile                # Docker configuration
│   └── package.json
├── .gitignore                     # Root git ignore rules
└── README.md
```

---

## Quick Start

### Prerequisites

- **Node.js 20.x** or higher
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/om-gupta-30/website-name-.git
cd website-name-/site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials (see Environment Variables section)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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

---

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

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HR_EMAIL` | Career form recipient | `hr@ynmsafety.com` |

---

## 🔒 Security

### What's Protected (NEVER committed to git)

| File/Pattern | Contains |
|--------------|----------|
| `.env.local` | All environment variables |
| `.env.*` | Any environment file |
| `*.pem`, `*.key` | Private keys |
| `credentials.json` | Service account files |
| `service-account*.json` | GCP credentials |

### Pre-configured Protections

✅ `.env.local` and all `.env.*` files are gitignored  
✅ No hardcoded API keys in source code  
✅ Service account files are gitignored  
✅ All secrets accessed via `process.env`  
✅ API keys are only used server-side (never exposed to browser)  

### Before Pushing to GitHub/Vercel/GCP

Run this command to verify no secrets will be leaked:

```bash
# Check what files will be committed
git status

# Verify these are NOT listed:
# - .env.local (or any .env file except .env.example)
# - Any .json credential files
# - Any .pem or .key files

# Double-check with:
git diff --cached --name-only
```

### Deployment Checklist

- [ ] All environment variables set in hosting platform (Vercel/GCP)
- [ ] HTTPS enabled on production domain
- [ ] Google Cloud IAM permissions reviewed
- [ ] No secrets in git history

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set **Root Directory** to `site`
4. Add environment variables in Vercel dashboard
5. Deploy

### Google Cloud Platform

```bash
cd site
npm run build

# Deploy to Cloud Run
gcloud run deploy ynm-website \
  --source . \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated

# Set environment variables via GCP Console or Secret Manager
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/submit` | POST | Contact form → Google Sheets |
| `/api/careers/submit` | POST | Career application with PDF resume |
| `/api/chat/gemini` | POST | AI chatbot responses |
| `/api/health` | GET | Health check |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Product Categories

1. **Industrial Paints** - Hot Thermoplastic, Cold Plastic, Water Base Road Marking Paints
2. **Metal Beam Crash Barriers** - W Beam, Thrie Beam, Roller Barrier, Attenuator
3. **Signages** - Gantry, Cantilever, Canopy, Informatory, Retro-Reflective
4. **Fabrication** - 34+ products including Sign Board Structures, High Mast, Bridge Bearings
5. **School Furniture** - Desks, Chairs, Laboratory Tables

---

## License

**Proprietary** - All rights reserved by YNM Mega Industries Pvt Ltd.

This codebase is proprietary software. Unauthorized copying, modification, distribution, or use is strictly prohibited.

---

## Contact

**YNM Mega Industries Pvt Ltd**

| | |
|---|---|
| 🌐 Website | [ynmsafety.com](https://ynmsafety.com) |
| 📧 Sales | sales@ynmsafety.com |
| 📧 HR | hr@ynmsafety.com |
| 📞 Phone | +91 96765 75770 |
| 📍 Location | Hyderabad, Telangana, India |

---

<p align="center">
  <strong>Developed by Om Gupta</strong><br>
  © 2024-2026 YNM Mega Industries Pvt Ltd
</p>
