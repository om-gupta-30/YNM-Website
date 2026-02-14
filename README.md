# YNM Safety - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

Modern, responsive corporate website for **YNM Safety Pan Global Trade Pvt Ltd** - India's leading manufacturer and exporter of road safety products, hot thermoplastic paints, metal beam crash barriers, highway signages, and precision metal fabrication.

🌐 **Live Website:** [www.ynmsafety.com](https://www.ynmsafety.com)

---

## Features

- **AI-Powered Chatbot** - Google Gemini with company knowledge base
- **5 Integrated Forms** - Contact, Careers, Director Appointment, Investor Relations, Foreign Collaborations
- **Google Sheets Integration** - Automatic data storage
- **Career Portal** - PDF resume upload with email notifications
- **50+ Product Catalog** - Road marking paints, crash barriers, signages, 34 fabrication products
- **SEO Optimized** - Schema.org structured data, sitemap, robots.txt
- **Fully Responsive** - Mobile, tablet, and desktop optimized

---

## Project Structure

```
YNM-website/
├── .github/workflows/      # GitHub Actions (security scanning)
├── .gitignore              # Comprehensive ignore rules
├── .gitleaks.toml          # Security scanning config
├── deploy-gcp.sh           # GCP Cloud Run deployment script
├── pre-push-check.sh       # Pre-commit security check
├── LICENSE
├── README.md
└── site/                   # Next.js application (deploy root)
    ├── components/         # React components
    ├── lib/                # Data & utilities
    ├── pages/              # Routes & API endpoints
    │   └── api/            # Backend API routes
    ├── public/             # Static assets & images
    ├── styles/             # CSS styles
    ├── .env.example        # Environment template (safe to commit)
    ├── Dockerfile          # Docker configuration
    └── package.json
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React Framework |
| React 19 | UI Library |
| Tailwind CSS | Styling |
| Google Gemini API | AI Chatbot |
| Google Sheets API | Form Data Storage |
| Nodemailer | Email Services |
| Google Analytics | Analytics |
| reCAPTCHA v2 | Bot Protection |

---

## Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/ynm-website.git
cd ynm-website/site

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build    # Build for production
npm start        # Start production server
```

---

## Environment Variables

Copy `site/.env.example` to `site/.env` and fill in your credentials.

### Required

| Variable | Description |
|----------|-------------|
| `GOOGLE_SHEET_ID` | Google Sheets ID for form data |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email |
| `GOOGLE_PRIVATE_KEY` | Service account private key |
| `GOOGLE_GEMINI_API_KEY` | Gemini API key for chatbot |
| `GMAIL_USER` | Gmail address for sending emails |
| `GMAIL_APP_PASSWORD` | Gmail App Password |
| `HR_EMAIL` | HR email for career applications |

### Optional

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA site key |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA secret key |

---

## Security

### Protected Files (Never Committed)

| Pattern | Status |
|---------|--------|
| `.env`, `.env.*` (except .example) | ✓ Gitignored |
| `*.pem`, `*.key`, `*.p12` | ✓ Gitignored |
| `credentials.json`, `*-key.json` | ✓ Gitignored |
| `service-account*.json` | ✓ Gitignored |

### Before Pushing to GitHub

```bash
# Run security check
./pre-push-check.sh

# Verify .env is ignored
git check-ignore site/.env

# Check tracked env files (should only show .example files)
git ls-files | grep '\.env'
```

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `site`
4. Add environment variables in Vercel dashboard
5. Deploy

### Google Cloud Platform

```bash
./deploy-gcp.sh
```

Or manually:
```bash
gcloud run deploy ynm-website \
  --source site \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/submit` | POST | Contact form |
| `/api/careers/submit` | POST | Career applications |
| `/api/director-appointment/submit` | POST | Director appointments |
| `/api/investor-relations/submit` | POST | Investor inquiries |
| `/api/foreign-collaborations/submit` | POST | Partnership forms |
| `/api/chat/gemini` | POST | AI chatbot |
| `/api/health` | GET | Health check |

---

## Product Categories

1. **Paints** - Hot Thermoplastic, Cold Plastic, Waterborne Airfield, Kerb Paints
2. **Bitumen** - VG 40 for highway construction
3. **Crash Barriers** - W Beam, Double W Beam, Roller Beam
4. **Signages** - Gantry, Cantilever, Canopy, Informatory
5. **Fabrication** - 34 products including solar structures, bridge components, scaffolding

---

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code quality check
```

---

## License

**Proprietary** - All rights reserved by YNM Safety Pan Global Trade Pvt Ltd.

---

## Contact

**YNM Safety Pan Global Trade Pvt Ltd**

| | |
|---|---|
| Website | [ynmsafety.com](https://ynmsafety.com) |
| Email | sales@ynmsafety.com |
| Phone | +91 96765 75770 |
| Location | Hyderabad, Telangana, India |

---

<p align="center">
  <strong>Road Safety & Infrastructure Excellence Since 2013</strong><br>
  © 2013-2026 YNM Safety Pan Global Trade Pvt Ltd. All rights reserved.
</p>
