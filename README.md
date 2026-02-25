# YNM Safety - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/om-gupta-30/website-name-/ci.yml?label=CI&logo=github)](https://github.com/om-gupta-30/website-name-/actions/workflows/ci.yml)
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
- **Security First** -- Gitleaks integration, GitHub Actions CI/CD, pre-push security checks, reCAPTCHA v2 bot protection

---

## Project Structure

```
YNM-website/
├── .github/workflows/       # GitHub Actions (CI + security scanning)
│   ├── ci.yml               # Lint, build, security checks, Docker build
│   └── security-scan.yml    # Gitleaks secret scanning
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
    │   ├── about/
    │   ├── careers/
    │   ├── clients/
    │   ├── contact/
    │   ├── products/
    │   ├── our-director/
    │   ├── investor-relations/
    │   └── foreign-collaborations/
    ├── public/              # Static assets
    │   ├── assets/          # 410+ optimized images
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
| Google Gemini | 2.0 Flash | AI Chatbot (with fallback chain) |
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
git clone https://github.com/om-gupta-30/website-name-.git
cd website-name-

# Install dependencies
make install

# Set up environment variables
make setup
# Edit site/.env with your credentials (see Environment Variables section)

# Run development server
make dev
```

Open [http://localhost:3000](http://localhost:3000)

### Using the Makefile

From the project root (not `site/`):

```bash
make help         # Show all available commands
make install      # Install dependencies
make dev          # Start dev server (http://localhost:3000)
make build        # Production build
make start        # Start production server
make lint         # Run ESLint
make clean        # Remove .next and node_modules
make setup        # Copy .env.example to .env
make check        # Run pre-push security checks
make deploy       # Deploy to GCP Cloud Run
make docker-build # Build Docker image locally
make docker-run   # Build and run Docker container locally
```

### Production Build

```bash
cd site
npm run build
npm start
```

---

## Environment Variables

Copy `site/.env.example` to `site/.env` and fill in your credentials:

```bash
make setup
```

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

---

## CI/CD

Two GitHub Actions workflows run automatically on every push and PR to `main`/`master`/`develop`:

### CI Pipeline (`.github/workflows/ci.yml`)

| Job | What it checks |
|-----|---------------|
| **Install** | Installs dependencies with `npm ci`, caches `node_modules` |
| **ESLint** | Runs `next lint` for code quality |
| **Production Build** | Runs `next build` and verifies standalone output |
| **Security Checks** | Verifies `.env` is gitignored, no secrets tracked, no credential files |
| **Docker Build** | Builds the full multi-stage Docker image |

### Security Scan (`.github/workflows/security-scan.yml`)

Runs [Gitleaks](https://github.com/gitleaks/gitleaks) to detect any accidentally committed secrets.

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
- **GitHub Actions CI** -- Lint, build, security checks, Docker build on every push/PR
- **GitHub Actions Security Scan** -- Gitleaks secret scanning on push/PR
- **Docker** -- Non-root user in production container, multi-stage build
- **reCAPTCHA v2** -- Bot protection on all public forms

### Before Pushing

```bash
# Run the comprehensive security check
make check

# Or verify manually:
git check-ignore site/.env          # Should print "site/.env"
git ls-files | grep '\.env'         # Should only show .env.example and .env.gcp.example
```

### Deployment Security

Never commit secrets to git. Instead:

1. **Vercel** -- Add environment variables in Project Settings > Environment Variables
2. **GCP Cloud Run** -- Use Secret Manager (configured in `cloudbuild.yaml`)
3. **GitHub Actions** -- Use repository secrets for CI/CD

---

## Deployment

### Vercel

1. Push to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Set **Root Directory** to `site`
4. Add all required environment variables in the Vercel dashboard
5. Deploy

### Google Cloud Platform (Cloud Run)

```bash
export GCP_PROJECT_ID=your-gcp-project-id
make deploy
```

### Docker (Local)

```bash
make docker-run
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/submit` | POST | Contact form submission (Google Sheets + email) |
| `/api/careers/submit` | POST | Career application with PDF resume upload |
| `/api/director-appointment/submit` | POST | Director appointment requests |
| `/api/investor-relations/submit` | POST | Investor inquiries |
| `/api/foreign-collaborations/submit` | POST | Foreign partnership forms |
| `/api/chat/gemini` | POST | AI chatbot (Gemini 2.0 Flash with model fallback) |
| `/api/health` | GET | Health check (verifies env vars are configured) |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home -- hero, products overview, client logos, director section, testimonials |
| `/products` | All product categories with filterable grid |
| `/products/[productId]` | Individual product pages (dynamic routes) |
| `/products/fabrication` | 34+ fabrication products with image galleries |
| `/products/road-safety-furnitures` | 19 road safety furniture products |
| `/about` | Company story, timeline, values, gallery, mission/vision |
| `/our-director` | Director profile, ventures, achievements |
| `/clients` | 18 client/partner profiles |
| `/careers` | Job openings and application form |
| `/contact` | Contact form, company info, India presence map |
| `/investor-relations` | Investment thesis, milestones, fund allocation |
| `/foreign-collaborations` | Collaboration areas, global regions, partnership process |

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
