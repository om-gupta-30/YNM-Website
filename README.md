# YNM Mega Industries - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

A modern, responsive corporate website for **YNM Mega Industries Pvt Ltd**, a leading manufacturer and exporter of road safety products, industrial paints, metal fabrication, and school furniture based in Hyderabad, India.

## Live Website

🌐 [ynmsafety.com](https://ynmsafety.com)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React Framework with App Router |
| React 19 | UI Library |
| Tailwind CSS 3.4 | Utility-first Styling |
| Nodemailer | Email Services |
| Google Gemini API | AI-powered Chatbot |
| Google Sheets API | Form Data Storage |

## Features

- **Multi-language Support** - English, Hindi, Telugu, Tamil, Kannada
- **AI Chatbot** - Powered by Google Gemini for instant customer queries
- **Responsive Design** - Mobile-first, optimized for all devices
- **Contact & Quote Forms** - Integrated with Google Sheets
- **Career Portal** - Job listings with PDF resume upload & validation
- **Interactive India Map** - Regional contact information
- **Product Catalog** - Detailed product pages with specifications, pricing & manufacturing processes

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
│   │   │   ├── contact/submit.js  # Contact form handler
│   │   │   ├── careers/submit.js  # Career form with PDF validation
│   │   │   └── chat/gemini.js     # AI chatbot API
│   │   ├── products/
│   │   │   ├── index.jsx          # Product catalog
│   │   │   └── [productId].jsx    # Dynamic product pages
│   │   └── ...
│   ├── lib/                       # Data & utilities
│   │   ├── productsCategoriesData.js
│   │   ├── translations.js
│   │   └── ...
│   ├── contexts/                  # React context providers
│   ├── styles/                    # Global CSS
│   ├── public/                    # Static assets
│   │   ├── assets/                # Images & logos
│   │   ├── certificates/          # PDF certificates
│   │   └── fonts/                 # Custom fonts
│   ├── .env.example               # Environment template
│   └── package.json
├── .gitignore                     # Git ignore rules
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 20.x
- npm or yarn

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

## Environment Variables

Create `site/.env.local` from the template:

```bash
cp site/.env.example site/.env.local
```

### Required

| Variable | Description |
|----------|-------------|
| `GOOGLE_SHEET_ID` | Google Sheet ID for form submissions |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | Service account private key |
| `GOOGLE_GEMINI_API_KEY` | Gemini API key for chatbot |

### Email (Choose ONE)

**Gmail:**
| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address |
| `GMAIL_APP_PASSWORD` | [App Password](https://support.google.com/accounts/answer/185833) |

**Custom SMTP:**
| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server |
| `SMTP_PORT` | Port (587/465) |
| `SMTP_USER` | Username |
| `SMTP_PASS` | Password |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `HR_EMAIL` | Career form recipient | `hr@ynmsafety.com` |
| `RECAPTCHA_SECRET_KEY` | Spam protection | _(skipped if not set)_ |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set **Root Directory** to `site`
4. Add environment variables
5. Deploy

### Google Cloud Platform

1. Build: `npm run build`
2. Deploy to Cloud Run or App Engine
3. Configure environment variables in GCP Console

## Security

### Pre-configured Protections

- [x] `.env.local` and all `.env.*` files are gitignored
- [x] No hardcoded API keys in source code
- [x] Service account files (`.json`, `.pem`, `.key`) are gitignored
- [x] All secrets accessed via `process.env`

### Before Deploying

- [ ] Set environment variables in your hosting platform (Vercel/GCP)
- [ ] Enable HTTPS on production domain
- [ ] Review Google Cloud IAM permissions

### Never Commit These Files

```
.env.local              # Local environment variables
.env.production         # Production secrets
*.pem, *.key            # Private keys
credentials.json        # Service account files
service-account*.json   # GCP service accounts
```

### Secrets Required for Deployment

When deploying to Vercel, GCP, or any hosting platform, add these as environment variables (not in code):

| Secret | Where to Get |
|--------|--------------|
| `GOOGLE_SHEET_ID` | Google Sheets URL |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | GCP Console > IAM |
| `GOOGLE_PRIVATE_KEY` | GCP Console > Service Account Keys |
| `GOOGLE_GEMINI_API_KEY` | [Google AI Studio](https://aistudio.google.com/) |
| `GMAIL_APP_PASSWORD` | [Google App Passwords](https://myaccount.google.com/apppasswords) |

## Product Categories

### 1. Industrial Paints
- Hot Thermoplastic Road Marking Paint *(detailed page)*
- Cold Plastic Paint
- Water Base Paint

### 2. Metal Beam Crash Barriers
- W Beam Crash Barrier *(detailed page)*
- Thrie Beam
- Double W Beam
- Roller Crash Barrier
- Attenuator

### 3. Signages
- **Retro Reflective Gantry Signage** *(detailed page)* - NEW
- Gantry Signages
- Cantilever Signages
- Canopy Signages
- Informatory Signages

### 4. Fabrication & Furniture
- Metal Fabrication
- School Furniture

## Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Create production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## License

**Proprietary** - All rights reserved by YNM Mega Industries Pvt Ltd.

This codebase is proprietary software. Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

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
  Developed by <strong>Om Gupta</strong><br>
  © 2024-2026 YNM Mega Industries Pvt Ltd
</p>
