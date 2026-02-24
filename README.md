# YNM Safety - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![Security](https://img.shields.io/badge/Security-Gitleaks-green)](https://github.com/gitleaks/gitleaks)

Modern, responsive corporate website for **YNM Safety Pan Global Trade Pvt Ltd** -- India's leading manufacturer and exporter of road safety products, road marking paints, metal beam crash barriers, highway signages, bitumen, road safety furniture, and precision metal fabrication.

**Live Website:** [www.ynmsafety.com](https://www.ynmsafety.com)

---

## Features

- **AI-Powered Chatbot** -- Google Gemini 2.0 Flash with comprehensive company knowledge base, FAQ matching, rate limiting, and conversation caching
- **5 Integrated Forms** -- Contact, Careers, Director Appointment, Investor Relations, Foreign Collaborations (all saved to Google Sheets + email notifications)
- **Google Sheets Integration** -- Automatic form data storage with structured sheet tabs
- **Career Portal** -- PDF resume upload with email notifications to HR
- **6 Product Categories, 80+ Products** -- Road marking paints (8), crash barriers (5), signages (10), bitumen (2), fabrication (34+), road safety furnitures (19)
- **SEO Optimized** -- Schema.org structured data, sitemap, robots.txt, Google Search Console verification
- **Fully Responsive** -- Mobile-first design optimized for all screen sizes
- **Security First** -- Gitleaks integration, GitHub Actions secret scanning, pre-push security checks, reCAPTCHA v2 bot protection

---

## Project Structure

```
YNM-website/
├── .github/workflows/       # GitHub Actions (security scanning)
├── .gitignore               # Comprehensive ignore rules
├── .gitleaks.toml           # Gitleaks secret scanning config
├── Makefile                 # Project shortcuts (make dev, make build, etc.)
├── deploy-gcp.sh            # GCP Cloud Run deployment script
├── pre-push-check.sh        # Pre-push security check
├── LICENSE
├── README.md
└── site/                    # Next.js application (deploy root)
    ├── components/          # 16 React components
    ├── contexts/            # React context providers (Language)
    ├── lib/                 # Data files & utilities
    │   ├── chatbotData.js         # AI chatbot knowledge base & FAQ
    │   ├── productsData.js        # Product catalog data
    │   ├── productsCategoriesData.js  # Category product data
    │   ├── directorData.js        # Director profile & ventures
    │   ├── employeesData.js       # Team member profiles
    │   ├── googleSheets.js        # Google Sheets API client
    │   ├── recaptchaUtils.js      # reCAPTCHA verification
    │   ├── translations.js        # Multi-language support
    │   ├── imageLoader.js         # Image optimization
    │   ├── indiaContacts.js       # Contact data by region
    │   └── indiaMapPaths.js       # India map SVG paths
    ├── pages/               # Next.js routes (12 pages)
    │   ├── api/             # 7 API routes
    │   ├── about/           # Company information
    │   ├── careers/         # Job applications
    │   ├── clients/         # Client showcase (18 clients)
    │   ├── contact/         # Contact form
    │   ├── products/        # Product catalog, fabrication & road safety furnitures
    │   ├── our-director/    # Director profile
    │   ├── investor-relations/
    │   └── foreign-collaborations/
    ├── public/              # Static assets
    │   ├── assets/          # 415+ optimized images (all < 100KB)
    │   ├── certificates/    # Company certificates (PDF)
    │   └── fonts/           # Custom fonts (Montserrat)
    ├── styles/              # Global CSS (Tailwind)
    ├── .env.example         # Environment template (safe to commit)
    ├── .env.gcp.example     # GCP deployment template (safe to commit)
    ├── Dockerfile           # Multi-stage Docker build
    ├── cloudbuild.yaml      # GCP Cloud Build config
    └── package.json
```

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5 | React Framework (Pages Router) |
| React | 19.0 | UI Library |
| Tailwind CSS | 3.4 | Utility-first Styling |
| Google Gemini | 2.0 Flash Lite | AI Chatbot (with fallback chain) |
| Google Sheets API | v4 | Form Data Storage |
| Nodemailer | 7.x | Email Services (Gmail SMTP) |
| Google Analytics | GA4 | Analytics |
| reCAPTCHA | v2 | Bot Protection |
| pdf-parse | 2.x | Resume PDF parsing |

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
# Edit .env with your credentials (see Environment Variables section)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Using the Makefile

From the project root (not `site/`):

```bash
make install    # Install dependencies
make dev        # Start dev server
make build      # Production build
make start      # Start production server
make lint       # Run ESLint
make clean      # Remove .next and node_modules
make deploy     # Deploy to GCP Cloud Run
```

### Production Build

```bash
cd site
npm run build    # Build for production
npm start        # Start production server
```

---

## Environment Variables

Copy `site/.env.example` to `site/.env` and fill in your credentials.

> **Important:** Never commit `.env` files with real values. Only `.env.example` and `.env.gcp.example` (templates with placeholders) are safe to commit.

### Required

| Variable | Description |
|----------|-------------|
| `GOOGLE_SHEET_ID` | Google Sheets ID for form data storage |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google Cloud service account email |
| `GOOGLE_PRIVATE_KEY` | Service account private key (PEM format, keep quotes) |
| `GOOGLE_GEMINI_API_KEY` | Gemini API key for chatbot ([get one](https://aistudio.google.com/app/apikey)) |
| `GMAIL_USER` | Gmail address for sending emails |
| `GMAIL_APP_PASSWORD` | Gmail App Password ([create one](https://myaccount.google.com/apppasswords)) |
| `HR_EMAIL` | HR email for career applications |

### Optional

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v2 site key |
| `RECAPTCHA_SECRET_KEY` | reCAPTCHA v2 secret key |
| `CAREERS_NOREPLY_FROM` | No-reply sender for career confirmation emails |
| `VERIFY_BASE_URL` | Base URL for integration tests (default: `http://localhost:3000`) |

---

## Security

This project follows strict security practices to prevent credential leaks.

### Protected Files (Never Committed)

| Pattern | Status |
|---------|--------|
| `.env`, `.env.*` (except `.example`) | Gitignored at root + site level |
| `*.pem`, `*.key`, `*.p12`, `*.pfx` | Gitignored |
| `credentials.json`, `*-key.json` | Gitignored |
| `service-account*.json` | Gitignored |

### Security Tools

- **Gitleaks** -- Automated secret scanning (`.gitleaks.toml`)
- **Pre-push Script** -- Comprehensive security checks before every push (`./pre-push-check.sh`)
- **GitHub Actions** -- CI/CD secret scanning on push and PRs (`.github/workflows/security-scan.yml`)
- **Docker** -- Non-root user in production container, multi-stage build
- **reCAPTCHA v2** -- Bot protection on all public forms

### Before Pushing to GitHub

```bash
# Run the comprehensive security check
./pre-push-check.sh

# Or verify manually:
git check-ignore site/.env          # Should print "site/.env"
git ls-files | grep '\.env'         # Should only show .env.example and .env.gcp.example
```

### Deployment Security (Vercel / GCP / GitHub)

Never commit secrets to git. Instead:

1. **Vercel** -- Add environment variables in Project Settings > Environment Variables
2. **GCP Cloud Run** -- Use Secret Manager (configured in `cloudbuild.yaml`)
3. **GitHub Actions** -- Use repository secrets for CI/CD

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `site`
4. Add all required environment variables in the Vercel dashboard
5. Deploy

### Google Cloud Platform (Cloud Run)

```bash
# Set your GCP project ID
export GCP_PROJECT_ID=your-gcp-project-id

# Deploy using the script
./deploy-gcp.sh
```

Or use the Makefile:

```bash
make deploy
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/submit` | POST | Contact form submission (saves to Google Sheets + sends email) |
| `/api/careers/submit` | POST | Career application with PDF resume upload |
| `/api/director-appointment/submit` | POST | Director appointment requests |
| `/api/investor-relations/submit` | POST | Investor inquiries |
| `/api/foreign-collaborations/submit` | POST | Foreign partnership forms |
| `/api/chat/gemini` | POST | AI chatbot (Gemini 2.0 Flash with model fallback chain) |
| `/api/health` | GET | Health check (verifies env vars are configured) |

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, products overview, client logos, director section, testimonials |
| `/products` | Products | All product categories with filterable grid |
| `/products/[productId]` | Product Detail | Individual product pages (dynamic) |
| `/products/fabrication` | Fabrication | 34+ fabrication products with image galleries |
| `/products/road-safety-furnitures` | Road Safety Furnitures | 19 road safety products |
| `/about` | About Us | Company story, timeline, values, gallery, mission/vision |
| `/our-director` | Our Director | Director profile, ventures, achievements |
| `/clients` | Clients | 18 client/partner profiles |
| `/careers` | Careers | Job openings and application form |
| `/contact` | Contact | Contact form, company info, India presence map |
| `/investor-relations` | Investor Relations | Investment thesis, milestones, fund allocation |
| `/foreign-collaborations` | Foreign Collaborations | Collaboration areas, global regions, partnership process |

---

## Product Categories

| # | Category | Count | Highlights |
|---|----------|-------|------------|
| 1 | **Road Marking Paints** | 8 types | Hot Thermoplastic, Cold Plastic (MMA), Waterborne Airfield, Oil/Water Kerb, Enamel, Red Oxide, Profile Marking |
| 2 | **Bitumen** | 2 grades | VG 40 & VG 30 (IS 73, ASTM compliant) |
| 3 | **Metal Beam Crash Barriers** | 5 types | W Beam, Double W, Thrie Beam, Roller Beam, Attenuators |
| 4 | **Highway Signages** | 10 types | Gantry, Cantilever, Mandatory (Octagonal/Circular), Cautionary, Canopy, Informatory, Place ID, Direction, Toll Boards |
| 5 | **Fabrication** | 34+ | Solar structures, bridge bearings, high mast poles, railway structures, scaffolding, and more |
| 6 | **Road Safety Furnitures** | 20 | Road studs, solar studs, IRC delineators, spring posts, traffic cones, solar blinkers, antiglare screens, water barricades, speed breakers, reflective tapes, median markers, noise barriers |

---

## License

**Proprietary** -- All rights reserved by YNM Safety Pan Global Trade Pvt Ltd. See [LICENSE](LICENSE).

---

## Contact

**YNM Safety Pan Global Trade Pvt Ltd**

| | |
|---|---|
| Website | [ynmsafety.com](https://www.ynmsafety.com) |
| Email | sales@ynmsafety.com |
| Phone | +91 96765 75770 / +91 90002 62013 |
| Location | Hyderabad, Telangana, India |
| LinkedIn | [linkedin.com/company/ynmsafety](https://www.linkedin.com/company/ynmsafety/) |

---

<p align="center">
  <strong>Road Safety & Infrastructure Excellence Since 2013</strong><br>
  &copy; 2013-2026 YNM Safety Pan Global Trade Pvt Ltd. All rights reserved.
</p>
