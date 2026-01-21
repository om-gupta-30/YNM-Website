# YNM Mega Industries — Corporate Website

Corporate website for **YNM Mega Industries Pvt Ltd**, a manufacturer and exporter of paints, metal fabrications, and school furniture. The site showcases products, clients, team, and provides contact, careers, and an AI chatbot.

---

## What This Application Is

- **Company:** YNM Mega Industries Pvt Ltd (est. 2013)
- **Products:** Industrial & decorative paints, metal fabrications, school & educational furniture
- **Purpose:** Public site for brand, products, clients, team, careers, contact, and support

**Main capabilities:**
- Browse products by category with detail pages
- View client/partner logos and testimonials
- Read employee testimonials and team info
- Submit contact and career applications
- Use an AI chatbot (Google Gemini) for company/product questions
- Multilingual UI (English and Hindi) with a first-time language modal
- Interactive India presence map with state-wise contacts on the Contact page
- Foreign collaborations, investor relations, and legal pages (privacy, terms)

---

## How It Is Made

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 15** (React 19) |
| Styling | **Tailwind CSS**, global CSS in `styles/globals.css` |
| Fonts | Montserrat (variable, self-hosted in `public/fonts/`) |
| Email (Careers) | **Nodemailer**; optional Gmail or SendGrid |
| Contact storage | **Google Sheets** (Sheets API via `googleapis`) |
| Chat | **Google Gemini** (`GOOGLE_GEMINI_API_KEY`) |
| Forms (Careers) | **Formidable** (multipart), **pdf-parse** (resume) |

### Project Layout

The app lives in the **`site/`** directory. All commands below assume you are in `site/`.

```
YNM website/
├── site/                      # Application root (run npm here)
│   ├── components/            # React components
│   ├── contexts/              # React context (e.g. LanguageContext)
│   ├── lib/                   # Data and helpers
│   ├── pages/                 # Next.js pages and API routes
│   ├── public/                # Static assets (images, fonts, favicon, etc.)
│   ├── styles/                # globals.css
│   ├── next.config.mjs
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.mjs
├── .gitignore
└── README.md
```

### Routing and Pages

| Route | Description |
|-------|-------------|
| `/` | Home: Hero, USPs, products, brands, employees, testimonials |
| `/about` | About, gallery (facility, production, products) |
| `/products` | Product catalog by category (paints, fabrication, furniture) |
| `/products/[productId]` | Product detail |
| `/clients` | Client/partner cards with logos, testimonials, and products supplied |
| `/our-team` | Employee testimonials and team section |
| `/careers` | Job listings and application form (resume upload) |
| `/contact` | Contact form and India presence map (state-wise contacts) |
| `/foreign-collaborations` | International partnerships by region |
| `/investor-relations` | Investor information |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |
| `/404` | Custom 404 page |

### API Routes

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/contact/submit` | POST | Contact form → Google Sheets (Sheets API) |
| `/api/careers/submit` | POST | Career form + resume → email (Nodemailer/Gmail/SendGrid), optional reCAPTCHA |
| `/api/chat/gemini` | POST | Chatbot → Google Gemini; supports `message`, `conversationHistory`, `language` |

### Components

- **Layout / global:** `Navbar`, `Footer`, `Hero`, `FirstTimeLanguageModal`, `LanguageSelector`, `FloatingSocialMedia`, `Mascot`, `Chatbot`
- **Sections:** `USPSection`, `ProductsSection`, `BrandsSection`, `EmployeesSection`, `TestimonialsSection`
- **Other:** `IndiaPresenceMap` (contact page)

### Data and Config

- **`lib/translations.js`** — EN/HI copy for nav, sections, footer, etc.
- **`lib/employeesData.js`** — Employee testimonials (name, role, department, quote, photo path).
- **`lib/chatbotData.js`** — Chatbot product catalog, FAQs, and contact-related links.
- **`lib/indiaContacts.js`** — State-wise contact entries for the India map.
- **`lib/indiaMapPaths.js`** — SVG path data for the India map.

### Assets (in `site/public/`)

- **`assets/brand-logos/`** — Client/partner logos (used on Home and Clients).
- **`assets/employeephotos/`** — Employee photos for the “What our employees say” section.
- **`assets/`** — Product images (`product-*.png`), gallery (`gallery-*.jpg`), `hero-image.png`, `mascot.png`, `logo-navbar.jpg`, `logo-footer.jpg`, `team-member-01.png`–`team-member-10.png` (fallbacks).
- **`fonts/Montserrat[wght].ttf`** — Primary font.
- **`favicon.ico`**, **`robots.txt`**, **`sitemap.xml`**.

---

## What You Need to Run It

### Prerequisites

- **Node.js** 20.x (see `package.json` `engines`)
- **npm** (or yarn)

### 1. Install dependencies

```bash
cd site
npm install
```

### 2. Environment variables

Create `site/.env.local` and set at least the variables used by the features you enable.

**Contact form (Google Sheets):**

- `GOOGLE_SHEET_ID` — ID of the Google Sheet
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` — Service account email
- `GOOGLE_PRIVATE_KEY` — Service account private key (multiline: use `\n` for newlines when stored in env)

**Chatbot (Gemini):**

- `GOOGLE_GEMINI_API_KEY` — Gemini API key

**Careers form (email):**

Choose one of:

- **SMTP:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`; optionally `SMTP_SECURE`, `SMTP_REJECT_UNAUTHORIZED`
- **Gmail:** `GMAIL_USER`, `GMAIL_APP_PASSWORD`
- **SendGrid:** `SENDGRID_API_KEY`

Optional for careers:

- `HR_EMAIL` — Where to send applications (default in code: `hr@ynmsafety.com`)
- `CAREERS_NOREPLY_FROM` — “From” address
- `RECAPTCHA_SECRET_KEY` — reCAPTCHA v2/v3 secret (if you use it; a test key is used when unset)

### 3. Run

**Development:**

```bash
npm run dev
```

- App: [http://localhost:3000](http://localhost:3000)

**Production build and run:**

```bash
npm run build
npm start
```

**Lint:**

```bash
npm run lint
```

---

## Build and Deployment

- **`npm run build`** — Must be run from the `site/` directory. Produces a production build.
- **Deployment:** Needs a **Node.js server** (e.g. Vercel, a VPS, or a PaaS). API routes (`/api/contact/submit`, `/api/careers/submit`, `/api/chat/gemini`) do not work with a purely static export.
- **Vercel:** Set the project **Root Directory** to `site` so `package.json` and `next.config.mjs` are found.
- **Images:** `next.config.mjs` uses `images.unoptimized: true`; no Image Optimization API is required.

---

## Feature Summary

| Feature | Where | Notes |
|---------|-------|-------|
| Multilingual (EN/Hi) | Global | `LanguageContext`, `translations.js`, `FirstTimeLanguageModal` |
| AI chatbot | Global (floating) | Gemini; `chatbotData.js` for products/FAQs |
| Mascot | Global (floating) | Rotating facts, minimizable |
| Contact form | `/contact` | Saves to Google Sheets |
| India map | `/contact` | `IndiaPresenceMap`, `indiaContacts`, `indiaMapPaths` |
| Careers form | `/careers` | Resume upload, email to HR, optional reCAPTCHA |
| Employee section | `/`, `/our-team` | `EmployeesSection` + `employeesData.js`; Managing Director card has distinct styling on the home page |
| Client logos & testimonials | `/`, `/clients` | `BrandsSection`, `BrandsSection`-style data on Clients page |
| Product catalog | `/`, `/products`, `/products/[id]` | Categories and detail pages |
| Foreign collaborations | `/foreign-collaborations` | Region-based partnership blocks |

---

## Troubleshooting

- **Build fails:** Run `npm run build` from **`site/`**, not the repo root. Ensure Node 20.x.
- **APIs 404 or 500:** Confirm `.env.local` (or your deployment env) has the keys used by each API. Contact needs Sheets; Chat needs `GOOGLE_GEMINI_API_KEY`; Careers needs one of SMTP/Gmail/SendGrid (and optionally reCAPTCHA).
- **Contact form “Google Sheets not configured”:** Set `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_PRIVATE_KEY` correctly.
- **Chatbot “Gemini API key not configured”:** Set `GOOGLE_GEMINI_API_KEY`.

---

## Repo Structure (after cleanup)

- **Root:** `README.md`, `.gitignore`. No `brand logos/` or `employeephotos/` at root; those live under `site/public/assets/`.
- **Removed as unused:** `MissionSection`, `ServicesSection`, `CTAButton`, `lib/sound.js`, `lib/indiaCityContacts.js`, `styles/theme.js`, `public/assets/client-logo-*.png` (8 files). All assets required to run the app are under `site/public/`.

---

## License and Ownership

Proprietary to **YNM Mega Industries Pvt Ltd**. All rights reserved.
