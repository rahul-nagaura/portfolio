# Rahul Nagaura — Portfolio Website | Developer Guide

> Last Updated: August 30, 2026  
> Status: v1.0 — Initial Build Complete (Dark Premium + Glassmorphism)

---

## 📋 Project Overview
- **What this project is**: A personal portfolio website designed to showcase the product thinking, analytical depth, and business impact of Rahul Nagaura (Product Manager / Business Analyst).
- **Who it's for**: Rahul Nagaura
- **Live URL**: TBD (Vercel deployment ready)
- **Primary Design Reference**: Inspired by Tapish Kothari's portfolio layout, elevated with a **Dark Premium** design system, glassmorphism cards, glowing accent gradients, and smooth Framer Motion interactions.

---

## 🏗 Architecture

The project follows a clean monorepo-style structure separating client and server concerns:

```
portfolio/
├── docs/                        # Project & developer documentation
│   ├── RESEARCH.md              # PM Portfolio Research, benchmarks & strategy
│   └── DEVELOPER.md             # Developer onboarding & reference guide (this file)
├── frontend/                    # Vite + React 18 + TailwindCSS client app
├── backend/                     # Node.js + Express + Nodemailer API server
└── Rahul_Nagaura_P0122.pdf       # Master resume file
```

### Request Flow
```ascii
[Client Browser] 
       │
       ├── (Port 3000 in dev / Vercel in prod) ──> React SPA (Vite + Tailwind + Framer Motion)
       │
       └── POST /api/v1/portfolio/contact ───────> Express Server (Port 8000) ──> Nodemailer (Gmail SMTP)
```

---

## 🛠 Tech Stack

| Layer | Technology | Version | Rationale |
|---|---|---|---|
| **Build Tool** | Vite | 6.x | Instant HMR, fast builds, native ES modules. |
| **Frontend Framework** | React | 18.x | Modular component hierarchy, robust hook ecosystem. |
| **Styling** | TailwindCSS | 3.x | Utility-first tokens, rapid prototyping, built-in dark palette. |
| **Motion** | Framer Motion | 11.x | Declarative scroll-triggered animations and spring physics. |
| **Icons** | Lucide React | Latest | Clean vector SVG icons with zero raster degradation. |
| **Backend API** | Express.js | 4.21.x | Lightweight, reliable REST server for contact form. |
| **Email Delivery** | Nodemailer | 6.9.x | Direct SMTP transport with HTML templating and rate limiting. |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
Install dependencies in both directories:

```bash
# 1. Install frontend dependencies
cd frontend
npm install

# 2. Install backend dependencies (in another terminal or cd ../backend)
cd ../backend
npm install
```

### 3. Environment Variables
In the `backend` directory, configure your `.env` file:
```bash
cd backend
cp .env.example .env
```
Edit `backend/.env`:
```env
PORT=8000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
EMAIL_TO=rahulnagora88905@gmail.com
```

### 4. Running Locally
Run both servers concurrently during development:

- **Terminal 1 (Backend API)**:
  ```bash
  cd backend
  npm run dev
  # Server runs on http://localhost:8000
  ```

- **Terminal 2 (Frontend Client)**:
  ```bash
  cd frontend
  npm run dev
  # Vite dev server runs on http://localhost:3000
  ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Detailed File Structure

```
portfolio/
├── docs/
│   ├── RESEARCH.md                 # Strategic PM portfolio research
│   └── DEVELOPER.md                # This developer guide
├── backend/
│   ├── controllers/
│   │   └── mail.js                 # Mail dispatch logic + rate limiting
│   ├── routes/
│   │   └── contact.js              # Express POST /contact route
│   ├── index.js                    # Server bootstrap & CORS configuration
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   │   ├── favicon.svg             # Custom gradient "RN" favicon
│   │   └── Rahul_Nagaura_P0122.pdf # Downloadable resume PDF
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx      # Sticky blur header with active section tracking
│   │   │   │   └── Footer.jsx      # Socials, copyright, and smooth scroll-to-top
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx        # Large Syne typographic heading & CTAs
│   │   │   │   ├── About.jsx       # Narrative & 2x2 bento stats grid
│   │   │   │   ├── Experience.jsx  # Interactive career timeline
│   │   │   │   ├── Projects.jsx    # Bento grid case studies & featured cards
│   │   │   │   ├── Skills.jsx      # Technical and Product/Strategy tag clouds
│   │   │   │   ├── Certifications.jsx # Certifications & Leadership cards
│   │   │   │   └── Contact.jsx     # Form with submission states & info
│   │   │   └── ui/
│   │   │       ├── BentoGrid.jsx   # Responsive CSS grid container
│   │   │       ├── GlassCard.jsx   # Frosted glass card with hover glow
│   │   │       ├── ScrollReveal.jsx# Motion wrapper with reduced-motion support
│   │   │       ├── SectionHeading.jsx # Consistent heading + gradient accents
│   │   │       ├── SkillTag.jsx    # Pill badges for skills
│   │   │       └── TimelineItem.jsx# Vertical timeline nodes
│   │   ├── data/
│   │   │   └── portfolio.js        # SINGLE SOURCE OF TRUTH for all content
│   │   ├── App.jsx                 # Main layout & cursor follower
│   │   ├── index.css               # Design tokens, scrollbars, glass utilities
│   │   └── main.jsx                # React DOM root
│   ├── index.html                  # HTML5 head, Syne/Inter/Space Grotesk fonts
│   ├── tailwind.config.js          # Custom colors, fonts, and animations
│   ├── vite.config.js              # Vite config with API proxy
│   └── package.json
└── Rahul_Nagaura_P0122.pdf          # Root resume asset
```

---

## 🎨 Design System & UI/UX Standards

### Color Palette (Dark Premium)

| Token | Hex | Usage |
|---|---|---|
| `background` | `#0A0A0F` | Deep dark page canvas |
| `surface` | `#12121A` | Elevated cards and containers |
| `surface-hover` | `#1A1A2E` | Interactive hover states |
| `primary` | `#6C63FF` | Main purple accent (buttons, highlights) |
| `primary-light` | `#8B83FF` | Secondary purple for badges and links |
| `secondary` | `#00D4AA` | Teal accent for metrics, success states, and live badges |
| `text-primary` | `#F0F0F5` | Headings & high-emphasis body text |
| `text-secondary` | `#8888A0` | Secondary descriptions and metadata |
| `text-muted` | `#555570` | Timestamps, borders, subtle tags |

### Typography

| Family | Role | Weights |
|---|---|---|
| **Syne** (`font-heading`) | H1–H3 Headings, prominent titles | 700 (Bold), 800 (Extra Bold) |
| **Inter** (`font-body`) | Paragraphs, descriptions, forms | 400 (Regular), 500 (Medium), 600 (Semi-Bold) |
| **Space Grotesk** (`font-mono`) | Tags, badges, code snippets, dates | 500 (Medium) |

### UI/UX Rules Applied
1. **No emojis as structural icons**: All icons use Lucide SVG components (`Rocket`, `Mail`, `Linkedin`, `Phone`, `ArrowUp`, etc.).
2. **Glassmorphism specs**: Cards use `backdrop-filter: blur(15px)`, `bg-white/[0.04]`, and `border-white/[0.12]` for authentic frosted-glass depth.
3. **Accessibility**: `ScrollReveal` checks `prefers-reduced-motion` and renders content immediately without slide/fade if reduced motion is requested.
4. **Touch targets**: All interactive links and buttons maintain minimum 44px hit areas on mobile devices.

---

## ✏️ How to Update Portfolio Content

All copy, roles, projects, skills, and links are located in one single file:  
`frontend/src/data/portfolio.js`

### 1. Update Personal Info
```javascript
export const portfolioData = {
  personal: {
    name: "Rahul Nagaura",
    tagline: "Building products that drive growth & operational efficiency",
    subtitle: "Business Analyst @ Creditq | IIT (ISM) Dhanbad '26",
    email: "rahulnagora88905@gmail.com",
    phone: "+918890903110",
    linkedin: "https://linkedin.com/in/rahulnagaura",
    resumeUrl: "/Rahul_Nagaura_P0122.pdf"
  },
  // ...
};
```

### 2. Add a New Case Study / Project
In `portfolioData.projects`:
```javascript
{
  title: "New Product Case Study",
  subtitle: "Fintech Growth Strategy",
  description: "Detailed description of the user pain point, solution, and quantifiable results.",
  tags: ["SQL", "Figma", "User Research", "A/B Testing"],
  link: "https://github.com/...", // or internal case study link
  featured: true // sets span to 2 columns on desktop
}
```

### 3. Add Work Experience
In `portfolioData.experience`:
```javascript
{
  role: "Senior Product Manager",
  company: "Company Name",
  period: "Aug 2026 – Present",
  location: "City, Country",
  description: "High level summary of the role.",
  highlights: [
    "Key impact achievement with quantified metric",
    "Product discovery and roadmap leadership"
  ],
  current: true // Triggers glowing teal status indicator
}
```

---

## 🔌 API Reference

### Contact Form Dispatch
- **Endpoint**: `POST /api/v1/portfolio/contact`
- **Rate Limit**: 5 requests per hour per IP

#### Request Payload:
```json
{
  "name": "Alex Smith",
  "email": "alex@company.com",
  "message": "Hi Rahul, let's discuss an opportunity at our team."
}
```

#### Success Response (`200 OK`):
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

## 🚢 Deployment Guide

### Deploying Frontend to Vercel
1. Push repository to GitHub.
2. Import project into Vercel.
3. Configure settings:
   - **Root Directory**: `frontend`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

### Deploying Backend
Deploy the `backend` folder to Render, Railway, or VPS:
- Build command: `npm install`
- Start command: `npm start`
- Add Environment variables in the platform dashboard: `PORT`, `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`.

---

## 🗺 Roadmap & Next Steps
- [ ] Add standalone deep-dive modal or sub-pages for in-depth PRD case studies.
- [ ] Add optional light mode toggle if required.
- [ ] Integrate privacy-friendly analytics (e.g. Plausible or Google Analytics 4).
- [ ] Connect custom domain (e.g. `rahulnagaura.com`).
