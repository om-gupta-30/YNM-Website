# YNM Mega Industries - Corporate Website

A modern, responsive corporate website for **YNM Mega Industries Pvt Ltd**, a leading manufacturer and exporter of road safety products, industrial paints, metal fabrication, and school furniture based in Hyderabad, India.

## Live Website

🌐 [ynmsafety.com](https://ynmsafety.com)

## Tech Stack

- **Framework:** Next.js 15
- **Frontend:** React 19
- **Styling:** Tailwind CSS + Custom CSS
- **Language:** JavaScript (JSX)
- **Email:** Nodemailer (Gmail SMTP / Custom SMTP / SendGrid)
- **AI Chatbot:** Google Gemini API
- **Data Storage:** Google Sheets API

## Features

### Core Pages

- **Home** - Hero section, USPs, products overview, testimonials, brand partners
- **Products** - Category-based product catalog with detailed product pages
- **About Us** - Company history, vision, mission
- **Our Team** - Leadership and employee directory
- **Clients** - Partner companies and success stories
- **Contact** - Contact form with Google Sheets integration
- **Get Quote** - Multi-step quote request form with PDF upload
- **Careers** - Job listings and application form with resume upload
- **Foreign Collaborations** - International partnerships
- **Investor Relations** - Investor information

### Key Features

- 🌐 **Multi-language Support** - English, Hindi, Telugu, Tamil, Kannada
- 🤖 **AI Chatbot** - Powered by Google Gemini for customer queries
- 📱 **Fully Responsive** - Optimized for all devices
- 📧 **Email Integration** - Contact and career forms send automated emails
- 🎨 **Modern UI** - Professional design with smooth animations
- 📄 **PDF Upload** - Career and quote forms support document uploads
- 🗺️ **Interactive Map** - India presence with regional contacts
- 🔒 **Spam Protection** - reCAPTCHA and rate limiting

## Project Structure

```
YNM website/
├── site/                       # Next.js application
│   ├── components/             # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Chatbot.jsx
│   │   └── ...
│   ├── pages/                  # Next.js pages (routes)
│   │   ├── index.js            # Home page
│   │   ├── about/
│   │   ├── products/
│   │   ├── contact/
│   │   ├── get-quote/
│   │   ├── careers/
│   │   └── api/                # API routes
│   │       ├── contact/submit.js
│   │       ├── careers/submit.js
│   │       └── chat/gemini.js
│   ├── lib/                    # Data and utilities
│   │   ├── productsData.js
│   │   ├── productsCategoriesData.js
│   │   ├── translations.js
│   │   ├── employeesData.js
│   │   └── ...
│   ├── contexts/               # React contexts
│   │   └── LanguageContext.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── public/                 # Static assets
│   │   ├── assets/
│   │   │   ├── brand-logos/
│   │   │   └── employeephotos/
│   │   ├── certificates/
│   │   └── fonts/
│   ├── .env.example            # Environment variables template
│   └── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ynm-website.git
   cd ynm-website
   ```

2. **Navigate to the site folder**

   ```bash
   cd site
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   Copy the example file and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your actual credentials.

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Copy `site/.env.example` to `site/.env.local` and configure:

### Required Variables

| Variable | Description |
|----------|-------------|
| `GOOGLE_SHEET_ID` | Google Sheet ID for contact form submissions |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email for Google Sheets API |
| `GOOGLE_PRIVATE_KEY` | Service account private key (keep the quotes and \n) |
| `GOOGLE_GEMINI_API_KEY` | Google Gemini API key for AI chatbot |

### Email Configuration (Choose ONE)

**Option 1: Gmail (simplest)**

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address for sending emails |
| `GMAIL_APP_PASSWORD` | Gmail App Password ([How to create](https://support.google.com/accounts/answer/185833)) |

**Option 2: Custom SMTP**

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP port (usually 587 or 465) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password |
| `SMTP_SECURE` | `true` for port 465, `false` for others |

**Option 3: SendGrid**

| Variable | Description |
|----------|-------------|
| `SENDGRID_API_KEY` | SendGrid API key |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `HR_EMAIL` | Email for career applications | `hr@ynmsafety.com` |
| `CAREERS_NOREPLY_FROM` | From address for career emails | `noreply@ynmsafety.com` |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA secret key | _(skipped if not set)_ |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set the root directory to `site`
4. Add environment variables in Vercel dashboard
5. Deploy

### Google Cloud Platform

1. Build the project: `npm run build`
2. Deploy to Cloud Run or App Engine
3. Set environment variables in GCP Console

### Important Security Notes

- **NEVER** commit `.env.local` or any file containing real API keys
- The `.gitignore` is configured to exclude sensitive files
- Use environment variables in your hosting platform (Vercel/GCP/etc.)
- Rotate API keys if you suspect they've been exposed

## Product Categories

1. **Road Safety Products**
   - W Beam Crash Barriers
   - Thrie Beam Crash Barriers
   - Guard Rails
   - Road Studs & Delineators
   - Signages

2. **Industrial Paints**
   - Hot Thermoplastic Paint
   - Cold Plastic Paint
   - Water Base Paint

3. **Metal Fabrication**
   - Structural Steel
   - Industrial Racking
   - Custom Enclosures

4. **School & Office Furniture**
   - Student Desks & Chairs
   - Laboratory Tables
   - Office Workstations

## Contributing

This is a private corporate website. For any issues or suggestions, please contact the development team.

## License

Proprietary - All rights reserved by YNM Mega Industries Pvt Ltd.

## Contact

**YNM Mega Industries Pvt Ltd**

- 📧 Email: sales@ynmsafety.com
- 📞 Phone: +91 96765 75770
- 🌐 Website: [ynmsafety.com](https://ynmsafety.com)
- 📍 Location: Hyderabad, Telangana, India

---

Developed with ❤️ by Om Gupta
