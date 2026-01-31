# YNM Mega Industries - Corporate Website

A modern, responsive corporate website for **YNM Mega Industries Pvt Ltd**, a leading manufacturer and exporter of road safety products, industrial paints, metal fabrication, and school furniture based in Hyderabad, India.

## Live Website

[ynmsafety.com](https://ynmsafety.com)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React Framework |
| React 19 | UI Library |
| Tailwind CSS | Styling |
| Nodemailer | Email Services |
| Google Gemini API | AI Chatbot |
| Google Sheets API | Data Storage |

## Features

- **Multi-language Support** - English, Hindi, Telugu, Tamil, Kannada
- **AI Chatbot** - Powered by Google Gemini for customer queries
- **Responsive Design** - Optimized for all devices
- **Contact & Quote Forms** - With Google Sheets integration
- **Career Portal** - Job listings with resume upload (PDF)
- **Interactive India Map** - Regional contact information

## Project Structure

```
YNM website/
├── site/                          # Next.js application
│   ├── components/                # React components
│   ├── pages/                     # Routes & API endpoints
│   │   ├── api/
│   │   │   ├── contact/submit.js  # Contact form handler
│   │   │   ├── careers/submit.js  # Career form handler
│   │   │   └── chat/gemini.js     # AI chatbot API
│   │   └── ...
│   ├── lib/                       # Data & utilities
│   ├── contexts/                  # React contexts
│   ├── styles/                    # Global CSS
│   ├── public/                    # Static assets
│   │   ├── assets/                # Images & logos
│   │   ├── certificates/          # PDF certificates
│   │   └── fonts/                 # Custom fonts
│   ├── .env.example               # Environment template
│   └── package.json
├── .gitignore
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

## Security Checklist

- [ ] `.env.local` is in `.gitignore` (pre-configured)
- [ ] No API keys in code (uses `process.env`)
- [ ] Environment variables set in hosting platform
- [ ] HTTPS enabled on production domain

### Never Commit

- `.env.local` or any `.env` file with real values
- API keys, passwords, or private keys
- Service account JSON files

## Product Categories

1. **Industrial Paints**
   - Hot Thermoplastic Road Marking Paint
   - Cold Plastic Paint
   - Water Base Paint

2. **Crash Barriers**
   - W Beam Crash Barrier
   - Thrie Beam
   - Double W Beam
   - Roller Crash Barrier

3. **Signages**
   - Gantry Signages
   - Cantilever Signages
   - Informatory Signages

4. **Fabrication & Furniture**
   - Metal Fabrication
   - School Furniture

## License

Proprietary - All rights reserved by YNM Mega Industries Pvt Ltd.

## Contact

**YNM Mega Industries Pvt Ltd**

- Website: [ynmsafety.com](https://ynmsafety.com)
- Email: sales@ynmsafety.com
- Phone: +91 96765 75770
- Location: Hyderabad, Telangana, India

---

Developed by Om Gupta
