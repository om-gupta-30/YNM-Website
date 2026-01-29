# YNM Mega Industries - Corporate Website

A modern, responsive corporate website for **YNM Mega Industries Pvt Ltd**, a leading manufacturer and exporter of road safety products, industrial paints, metal fabrication, and school furniture based in Hyderabad, India.

## Live Website

🌐 [ynmsafety.com](https://ynmsafety.com)

## Tech Stack

- **Framework:** Next.js 15
- **Frontend:** React 19
- **Styling:** Tailwind CSS + Custom CSS
- **Language:** JavaScript (JSX)
- **Email:** Nodemailer (Gmail SMTP)
- **AI Chatbot:** Google Gemini API

## Features

### Core Pages
- **Home** - Hero section, USPs, products overview, testimonials, brand partners
- **Products** - Category-based product catalog with detailed product pages
- **About Us** - Company history, vision, mission
- **Our Team** - Leadership and employee directory
- **Clients** - Partner companies and success stories
- **Contact** - Contact form with email integration
- **Get Quote** - Multi-step quote request form with PDF upload
- **Careers** - Job listings and application form
- **Foreign Collaborations** - International partnerships
- **Investor Relations** - Investor information

### Key Features
- 🌐 **Multi-language Support** - English, Hindi, Telugu, Tamil, Kannada
- 🤖 **AI Chatbot** - Powered by Google Gemini for customer queries
- 📱 **Fully Responsive** - Optimized for all devices
- 📧 **Email Integration** - Contact and quote forms send emails via Gmail
- 🎨 **Modern UI** - Professional design with smooth animations
- 📄 **PDF Upload** - Quote form supports specification document uploads
- 🗺️ **Interactive Map** - India presence with regional contacts

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
│   │   ├── translations.js
│   │   ├── employeesData.js
│   │   └── ...
│   ├── contexts/               # React contexts
│   │   └── LanguageContext.jsx
│   ├── styles/
│   │   └── globals.css
│   └── public/                 # Static assets
│       ├── assets/
│       │   ├── brand-logos/
│       │   └── employeephotos/
│       └── fonts/
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 20.x
- npm or yarn

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
   
   Create a `.env.local` file in the `site` folder:
   ```env
   # Gmail SMTP for contact forms
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   
   # Google Gemini API for chatbot
   GEMINI_API_KEY=your-gemini-api-key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address for sending emails |
| `GMAIL_APP_PASSWORD` | Gmail App Password (not regular password) |
| `GEMINI_API_KEY` | Google Gemini API key for chatbot |

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
