# YNM Safety - Corporate Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)
[![CI](https://github.com/om-gupta-30/YNM-website/actions/workflows/ci.yml/badge.svg)](https://github.com/om-gupta-30/YNM-website/actions/workflows/ci.yml)
[![Security](https://img.shields.io/badge/Security-Gitleaks-green)](https://github.com/gitleaks/gitleaks)

Modern, responsive corporate website for **YNM Safety Pan Global Trade Pvt Ltd** — India's leading manufacturer and exporter of road safety products, road marking paints, metal beam crash barriers, highway signages, bitumen, road safety furniture, and precision metal fabrication.

**Live:** [www.ynmsafety.com](https://www.ynmsafety.com)

---

## Features

- **AI-Powered Chatbot** — Google Gemini 2.0 Flash with company knowledge base, FAQ matching, response caching, and sliding-window rate limiting
- **6 Integrated Forms** — Contact, Get a Quote, Careers, Director Appointment, Investor Relations, Foreign Collaborations (all saved to Google Sheets + email notifications)
- **Get a Quote** — Dedicated quote request page with product category selection, quantity/unit/timeline, PDF attachment, and delivery location
- **Career Portal** — PDF resume upload with email notifications to HR
- **6 Product Categories, 80+ Products** — Road marking paints (8), crash barriers (5), signages (10), bitumen (2), fabrication (34+), road safety furnitures (19)
- **12 Indian Languages** — English, Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, Urdu
- **India Presence Map** — Interactive SVG map with state-level contact details
- **SEO Optimized** — Schema.org structured data, sitemap, robots.txt, 301 redirects, Google Search Console
- **Fully Responsive** — Mobile-first design optimized for all screen sizes
- **Security First** — Gitleaks, GitHub Actions CI/CD, pre-push checks

---

## Project Structure

```
YNM-website/
├── .github/workflows/       # GitHub Actions (CI + security scanning)
│   ├── ci.yml               # Lint, build, security checks, Docker build
│   └── security-scan.yml    # Gitleaks secret scanning
├── .gitignore               # Comprehensive ignore rules (env, keys, creds)
├── .gitleaks.toml           # Gitleaks secret scanning config
├── Makefile                 # Project automation (make dev, make build, etc.)
├── deploy-gcp.sh            # GCP Cloud Run deployment script
├── pre-push-check.sh        # Pre-push security checks
├── LICENSE                  # Proprietary license
├── README.md
└── site/                    # Next.js application (deploy root)
    ├── components/          # 19 React components
    │   ├── Navbar.jsx             # Navigation bar with language selector
    │   ├── Hero.jsx               # Home page hero section
    │   ├── Footer.jsx             # Site-wide footer
    │   ├── Chatbot.jsx            # AI chatbot (Gemini-powered)
    │   ├── FloatingGetQuote.jsx   # Floating quote CTA button
    │   ├── FloatingSocialMedia.jsx # Floating social media links
    │   ├── Mascot.jsx             # Animated mascot with company facts
    │   ├── PhoneInput.jsx         # International phone input with country codes
    │   ├── PlacesAutocomplete.jsx # Google Places autocomplete
    │   ├── ProductsSection.jsx    # Product category grid
    │   ├── BrandsSection.jsx      # Client logo carousel
    │   ├── DirectorSection.jsx    # Director profile section
    │   ├── EmployeesSection.jsx   # Team member profiles
    │   ├── TestimonialsSection.jsx # Client testimonials
    │   ├── USPSection.jsx         # Unique selling points
    │   ├── IndiaPresenceMap.jsx   # Interactive India SVG map
    │   ├── LanguageSelector.jsx   # 12-language dropdown
    │   ├── FirstTimeLanguageModal.jsx # First-visit language picker
    │   └── Flag.jsx               # Country flag component
    ├── contexts/
    │   └── LanguageContext.jsx     # i18n context provider
    ├── lib/                       # Data files & utilities
    │   ├── chatbotData.js         # AI chatbot knowledge base & FAQ
    │   ├── productsData.js        # Full product catalog (80+ products)
    │   ├── productsCategoriesData.js # Category-level product data
    │   ├── countryCodes.js        # International dialing codes
    │   ├── directorData.js        # Director profile & ventures
    │   ├── employeesData.js       # Team member profiles
    │   ├── googleSheets.js        # Google Sheets API client
    │   ├── translations.js        # Multi-language translations
    │   ├── imageLoader.js         # Custom image loader
    │   ├── indiaContacts.js       # State-wise contact data
    │   └── indiaMapPaths.js       # India map SVG paths
    ├── pages/                     # Next.js routes
    │   ├── index.js               # Home page
    │   ├── about/                 # Company story & values
    │   ├── products/              # Product catalog (4 pages)
    │   ├── get-quote/             # Quote request form
    │   ├── careers/               # Job listings & application
    │   ├── clients/               # Client & partner showcase
    │   ├── contact/               # Contact form & India map
    │   ├── our-director/          # Director profile & appointment
    │   ├── investor-relations/    # Investor information
    │   ├── foreign-collaborations/ # Partnership opportunities
    │   ├── 404.js                 # Custom 404 page
    │   └── api/                   # 9 API routes (see below)
    ├── public/                    # Static assets
    │   ├── assets/                # 410+ optimized images (all < 100 KB)
    │   ├── certificates/          # Company certificates (PDF)
    │   └── fonts/                 # Custom fonts (Montserrat)
    ├── styles/
    │   └── globals.css            # Global CSS + Tailwind
    ├── .env.example               # Environment variable template
    ├── .env.gcp.example           # GCP deployment reference
    ├── Dockerfile                 # Multi-stage Docker build
    ├── cloudbuild.yaml            # GCP Cloud Build config
    └── package.json
```

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5 | React framework (Pages Router, standalone output) |
| React | 19.0 | UI library |
| Tailwind CSS | 3.4 | Utility-first styling |
| Google Gemini | 2.0 Flash | AI chatbot with model fallback chain |
| Google Sheets API | v4 | Form data storage (5 sheet tabs) |
| Google Places API | — | Country/city autocomplete |
| Nodemailer | 7.x | Email services (Gmail SMTP) |
| Google Analytics | GA4 + GTM | Analytics & conversion tracking |
| pdf-parse | 2.x | Resume PDF parsing |
| Docker | Multi-stage | Containerized deployment |

---

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/om-gupta-30/YNM-website.git
cd YNM-website

# Install dependencies
make install

# Set up environment variables
make setup
# Edit site/.env with your credentials (see Environment Variables below)

# Run development server
make dev
```

Open [http://localhost:3000](http://localhost:3000)

### Makefile Commands

Run from the project root (not `site/`):

```bash
make help          # Show all available commands
make install       # Install npm dependencies
make dev           # Start dev server (localhost:3000)
make build         # Production build
make start         # Start production server
make lint          # Run ESLint
make clean         # Remove .next and node_modules
make setup         # Copy .env.example → .env
make env-check     # Verify required env vars are set
make images        # Audit images (size > 100 KB, bad filenames)
make check         # Run pre-push security checks
make health        # Hit /api/health endpoint
make docker-build  # Build Docker image
make docker-run    # Build & run Docker container
make deploy        # Deploy to GCP Cloud Run
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

> **Never commit `.env` files with real values.** Only `.env.example` and `.env.gcp.example` (templates with placeholders) are safe to commit.

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
| `CAREERS_NOREPLY_FROM` | No-reply sender for career confirmation emails |

### Optional

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps/Places API key (for autocomplete) |

### Google Sheets Setup

One Google Sheet with **5 tabs** (exact names, case-sensitive):

| Tab Name | API Route |
|----------|-----------|
| `contact us` | `/api/contact/submit` |
| `our director appointment` | `/api/director-appointment/submit` |
| `investor relations` | `/api/investor-relations/submit` |
| `foreign collaborations` | `/api/foreign-collaborations/submit` |
| `quote requests` | `/api/quote/submit` |

Share the sheet with your `GOOGLE_SERVICE_ACCOUNT_EMAIL` (Editor role).

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/submit` | POST | Contact form → Google Sheets |
| `/api/quote/submit` | POST | Quote request → Google Sheets (with PDF attachment) |
| `/api/careers/submit` | POST | Career application with PDF resume → email to HR |
| `/api/director-appointment/submit` | POST | Director appointment booking → Google Sheets |
| `/api/investor-relations/submit` | POST | Investor inquiries → Google Sheets |
| `/api/foreign-collaborations/submit` | POST | Foreign partnership forms → Google Sheets |
| `/api/chat/gemini` | POST | AI chatbot (Gemini 2.0 Flash with fallback chain) |
| `/api/places/autocomplete` | GET | Google Places country/city autocomplete |
| `/api/health` | GET | Health check (verifies env vars configured) |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, products overview, client logos, director, testimonials, USPs |
| `/products` | All product categories with filterable grid |
| `/products/[productId]` | Individual product detail pages (dynamic routes) |
| `/products/fabrication` | 34+ fabrication products with image galleries |
| `/products/road-safety-furnitures` | 19 road safety furniture products |
| `/get-quote` | Dedicated quote request form (product selection, quantity, timeline, PDF upload) |
| `/about` | Company story, timeline, values, gallery, mission/vision |
| `/our-director` | Director profile, ventures, achievements, appointment booking |
| `/clients` | 18 client/partner profiles |
| `/careers` | 6 open positions and application form with resume upload |
| `/contact` | Contact form, company info, interactive India presence map |
| `/investor-relations` | Investment thesis, milestones, fund allocation |
| `/foreign-collaborations` | Collaboration areas, global regions, partnership process |

---

## CI/CD

Two GitHub Actions workflows run on every push and PR to `main`/`master`/`develop`:

### CI Pipeline (`.github/workflows/ci.yml`)

| Job | What it checks |
|-----|---------------|
| **Install** | `npm ci` with cached `node_modules` |
| **ESLint** | Code quality via `next lint` |
| **Production Build** | `next build` with standalone output verification |
| **Security Checks** | `.env` gitignored, no secrets tracked, no credential files |
| **Docker Build** | Full multi-stage Docker image build |

### Security Scan (`.github/workflows/security-scan.yml`)

Runs [Gitleaks](https://github.com/gitleaks/gitleaks) to detect accidentally committed secrets.

---

## Security

### Protected Files (Never Committed)

| Pattern | Status |
|---------|--------|
| `.env`, `.env.*` (except `.example`) | Gitignored at root + site level |
| `*.pem`, `*.key`, `*.p12`, `*.pfx` | Gitignored |
| `credentials.json`, `*-key.json` | Gitignored |
| `service-account*.json` | Gitignored |
| Root-level images (`/*.png`, `/*.jpg`) | Gitignored |

### Security Tools

- **Gitleaks** — Automated secret scanning (`.gitleaks.toml`)
- **Pre-push Script** — Comprehensive security checks (`./pre-push-check.sh`)
- **GitHub Actions** — Lint, build, security checks, Docker build on every push/PR
- **Docker** — Non-root user in production container, multi-stage build
- **Rate Limiting** — Client-side sliding window + server-side per-IP rate limits on chatbot

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

| Platform | How to set secrets |
|----------|--------------------|
| **Vercel** | Project Settings → Environment Variables |
| **GCP Cloud Run** | Secret Manager (configured in `cloudbuild.yaml`) |
| **GitHub Actions** | Repository Settings → Secrets and Variables |

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
# Visit http://localhost:3000
```

---

## License

**Proprietary** — All rights reserved by YNM Safety Pan Global Trade Pvt Ltd. See [LICENSE](LICENSE).

---

## Contact

**YNM Safety Pan Global Trade Pvt Ltd**

| | |
|---|---|
| Website | [ynmsafety.com](https://www.ynmsafety.com) |
| Email | sales@ynmsafety.com |
| Phone | +91 96765 75770 / +91 88850 02183 |
| WhatsApp | [wa.me/918885002183](https://wa.me/918885002183) |
| Location | Hyderabad, Telangana, India |
| LinkedIn | [linkedin.com/company/ynmsafety](https://www.linkedin.com/company/ynmsafety/) |

---

<p align="center">
  <strong>Road Safety & Infrastructure Excellence Since 2013</strong><br>
  &copy; 2013-2026 YNM Safety Pan Global Trade Pvt Ltd. All rights reserved.
</p>
