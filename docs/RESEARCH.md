# 📋 Product Manager Portfolio Website — Research & Reference Document

> **Last Updated:** August 29, 2026
> **Purpose:** This file is the single source of truth for all research, design decisions, and strategic context behind this portfolio website. Any developer — current or future — should read this document before making changes.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Market Research & Competitive Analysis](#2-market-research--competitive-analysis)
3. [Target Audience](#3-target-audience)
4. [Information Architecture — Must-Have Sections](#4-information-architecture--must-have-sections)
5. [Case Study Framework](#5-case-study-framework)
6. [Design System & Visual Direction](#6-design-system--visual-direction)
7. [Design Trends (2025–2026)](#7-design-trends-20252026)
8. [Interaction & Animation Guidelines](#8-interaction--animation-guidelines)
9. [Content Strategy](#9-content-strategy)
10. [SEO & Performance Requirements](#10-seo--performance-requirements)
11. [Tech Stack & Architecture](#11-tech-stack--architecture)
12. [Responsive & Accessibility Requirements](#12-responsive--accessibility-requirements)
13. [Reference Links & Inspiration](#13-reference-links--inspiration)
14. [Pre-Launch Checklist](#14-pre-launch-checklist)
15. [Glossary](#15-glossary)
16. [Change Log](#16-change-log)

---

## 1. Project Overview

### 1.1 What Is This?
A **personal portfolio website** designed specifically for a **Product Manager (PM)**. Unlike a developer or designer portfolio that showcases code or visuals, a PM portfolio must demonstrate **strategic thinking, decision-making, and measurable impact**.

### 1.2 Goals
- Showcase 2–4 high-quality case studies with a structured problem-to-impact narrative
- Demonstrate product thinking, not just polished outputs
- Create a premium, modern, state-of-the-art web experience
- Be scannable in 60–90 seconds (average time hiring managers spend)
- Serve as a living document that can be easily updated with new projects

### 1.3 Success Metrics
| Metric | Target |
|--------|--------|
| Page Load Time | < 3 seconds |
| Mobile Lighthouse Score | > 90 |
| Case Studies Displayed | 2–4 deep-dive projects |
| Bounce Rate | < 40% |
| CTA Conversion (contact clicks) | > 5% |

---

## 2. Market Research & Competitive Analysis

### 2.1 Top PM Portfolio Examples

| Name / Site | Style | Key Takeaway |
|-------------|-------|--------------|
| **Sachin Rekhi** ([sachinrekhi.com](https://sachinrekhi.com)) | Thought-leadership blog + case studies | Curated essays & frameworks prove strategic depth |
| **Lewis Lin** ([lewis-lin.com](https://lewis-lin.com)) | Authoritative content hub | Problem-solving resources build massive professional brand |
| **Awwwards Gallery** ([awwwards.com](https://awwwards.com)) | Award-winning personal sites | Cutting-edge design patterns and motion |
| **Site Builder Report** ([sitebuilderreport.com](https://sitebuilderreport.com)) | Template showcases | Great structural ideas for layout and flow |
| **Dribbble / Wall of Portfolios** | Community galleries | Filter by "dark mode", "bento grid", "motion design" |

### 2.2 What Top Portfolios Do Right
1. **Show the "How", not just the "What"** — trade-offs, debates, and iterations over final screenshots
2. **Quantified Impact** — every project ties back to business metrics (DAU, retention, revenue)
3. **Artifacts of Reasoning** — embed PRD snippets, prioritization matrices, experiment plans
4. **Strong Personal Voice** — product philosophy section that reveals personality
5. **Scannable Layout** — clear hierarchy, short paragraphs, visual breaks

### 2.3 Common Mistakes to Avoid
- ❌ Listing every project ever worked on (quality > quantity)
- ❌ Resume-on-a-page without depth or narrative
- ❌ Only showing final outputs without explaining the process
- ❌ Outdated or generic visual design (plain colors, default fonts)
- ❌ No clear CTA or contact information
- ❌ Walls of text without visual breaks
- ❌ Ignoring mobile responsiveness

---

## 3. Target Audience

### 3.1 Primary Audiences
| Audience | What They Look For | Time Spent |
|----------|-------------------|------------|
| **Hiring Managers** | Strategic thinking, decision-making process, impact metrics | 60–90 seconds |
| **Recruiters** | Quick overview, skills match, contact info | 30–60 seconds |
| **Peers / Network** | Thought leadership, shared learnings | 2–5 minutes |

### 3.2 Audience-Specific Messaging

| Target Company Type | Emphasis |
|---------------------|----------|
| **Startups** | Agility, experimentation, rapid discovery, scrappiness |
| **Enterprise / FAANG** | Complex systems, scalability, long-term strategy, cross-org collaboration |
| **AI/ML Companies** | Eval harnesses, prompt engineering, LLM product thinking, data literacy |

---

## 4. Information Architecture — Must-Have Sections

Below is the recommended page/section structure. Each section has a **priority** level:
- 🔴 **Critical** — Must be on the site at launch
- 🟡 **Important** — Strongly recommended
- 🟢 **Nice-to-Have** — Adds value but can be added later

### Section Map

```
┌─────────────────────────────────────────────────┐
│                   NAVIGATION                     │
│  Logo / Name   |  About  Case Studies  Contact   │
├─────────────────────────────────────────────────┤
│                                                  │
│  🔴 SECTION 1: HERO / LANDING                   │
│  ├── Personal tagline (not just "Product Mgr")   │
│  ├── Professional photo or avatar                │
│  ├── Primary CTA ("View My Work")                │
│  └── Subtle scroll indicator / animation         │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🔴 SECTION 2: ABOUT ME                         │
│  ├── Product journey & philosophy                │
│  ├── Career aspirations & passions               │
│  ├── Personal voice (not a resume paragraph)     │
│  └── Quick stats (years exp, products launched)  │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🔴 SECTION 3: CASE STUDIES (⭐ THE CORE)       │
│  ├── 2–4 deep-dive project cards                 │
│  ├── Each card → opens full case study page      │
│  ├── Visual thumbnails or mockups                │
│  └── Tags: industry, role, year                  │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🟡 SECTION 4: ARTIFACT SHOWCASE                │
│  ├── PRD-lite snippets                           │
│  ├── Prioritization matrices (RICE / ICE)        │
│  ├── Wireframes / user flows                     │
│  ├── Experiment plans                            │
│  └── Metric trees / data visualizations          │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🟡 SECTION 5: SKILLS & TOOLS                   │
│  ├── Product skills (discovery, strategy, etc.)  │
│  ├── Tools (Figma, Jira, Amplitude, SQL, etc.)   │
│  └── Visual tag-based or progress bar layout     │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🟡 SECTION 6: TESTIMONIALS / SOCIAL PROOF      │
│  ├── Endorsements from colleagues / managers     │
│  ├── LinkedIn recommendation excerpts            │
│  └── Adds credibility beyond self-reporting      │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🟢 SECTION 7: BLOG / THOUGHT LEADERSHIP        │
│  ├── Product teardowns                           │
│  ├── Industry analyses                           │
│  ├── Feature critiques                           │
│  └── Shows curiosity & "product judgment"        │
│                                                  │
├─────────────────────────────────────────────────┤
│                                                  │
│  🔴 SECTION 8: CONTACT / CTA                    │
│  ├── Email, LinkedIn, Twitter/X links            │
│  ├── Clear CTA ("Let's Chat", "Hire Me")         │
│  └── Optional: contact form                      │
│                                                  │
├─────────────────────────────────────────────────┤
│                   FOOTER                         │
│  © 2026  |  Social Links  |  Back to Top         │
└─────────────────────────────────────────────────┘
```

---

## 5. Case Study Framework

Each case study is the **most important content** on the site. Use this consistent framework:

### Structure

```
┌──────────────────────────────────────────┐
│         CASE STUDY TEMPLATE              │
├──────────────────────────────────────────┤
│                                          │
│  1. OVERVIEW                             │
│     • Project name, company, timeline    │
│     • Your role & team composition       │
│     • One-line impact summary            │
│                                          │
│  2. THE PROBLEM                          │
│     • What was the challenge?            │
│     • Why did it matter to the business? │
│     • Who was affected?                  │
│                                          │
│  3. EVIDENCE & RESEARCH                  │
│     • User interviews / surveys          │
│     • Market data / competitive analysis │
│     • Data insights that shaped thinking │
│                                          │
│  4. DECISION-MAKING                      │
│     • Options considered                 │
│     • Trade-offs evaluated               │
│     • Why this approach won              │
│     • Stakeholder alignment process      │
│                                          │
│  5. EXECUTION                            │
│     • How you worked with eng / design   │
│     • Roadmap & phasing decisions        │
│     • Challenges during implementation   │
│                                          │
│  6. METRICS & IMPACT                     │
│     • Quantified results (DAU, revenue,  │
│       retention, efficiency)             │
│     • Before vs. After comparisons       │
│     • Data visualizations                │
│                                          │
│  7. REFLECTION                           │
│     • What you learned                   │
│     • What you'd do differently          │
│     • How it shaped your PM approach     │
│                                          │
└──────────────────────────────────────────┘
```

### Case Study Content Tips
- Keep each case study **500–800 words** max (scannable!)
- Use **visuals** for every section where possible (charts, wireframes, flow diagrams)
- Include **before/after** data comparisons
- Mention **specific tools** used (SQL queries, A/B testing platforms, etc.)
- Be honest about **failures and pivots** — hiring managers value self-awareness

---

## 6. Design System & Visual Direction

### 6.1 Color Palette Recommendations

> **Note for Developers:** These are recommended palettes. Final colors should be confirmed with the project owner before implementation.

#### Option A: Dark Premium (Recommended)
```
Background (Dark):     #0A0A0F  (near-black with blue undertone)
Surface:               #12121A  (elevated cards)
Surface Hover:         #1A1A2E  (interactive states)
Primary Accent:        #6C63FF  (vibrant purple)
Primary Accent Light:  #8B83FF  (hover state)
Secondary Accent:      #00D4AA  (teal-green for metrics/success)
Text Primary:          #F0F0F5  (off-white)
Text Secondary:        #8888A0  (muted gray)
Text Muted:            #555570  (subtle labels)
Border:                #1E1E30  (subtle dividers)
Gradient Start:        #6C63FF
Gradient End:          #00D4AA
```

#### Option B: Light Minimalist
```
Background:            #FAFAFA
Surface:               #FFFFFF
Primary Accent:        #2563EB  (professional blue)
Secondary Accent:      #10B981  (green for success metrics)
Text Primary:          #111827
Text Secondary:        #6B7280
Border:                #E5E7EB
```

### 6.2 Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings (H1) | **Inter** or **Outfit** | 700 (Bold) | 48–64px |
| Headings (H2) | Inter or Outfit | 600 (Semi-Bold) | 32–40px |
| Headings (H3) | Inter or Outfit | 600 | 24–28px |
| Body Text | Inter | 400 (Regular) | 16–18px |
| Captions / Labels | Inter | 500 (Medium) | 12–14px |
| Code / Technical | **JetBrains Mono** | 400 | 14px |

**Line Height:** 1.6 for body text, 1.2 for headings
**Letter Spacing:** -0.02em for headings, normal for body

### 6.3 Spacing System (8px Base Grid)
```
--space-xs:    4px
--space-sm:    8px
--space-md:    16px
--space-lg:    24px
--space-xl:    32px
--space-2xl:   48px
--space-3xl:   64px
--space-4xl:   96px
--space-5xl:   128px
```

### 6.4 Border Radius
```
--radius-sm:   8px    (buttons, tags)
--radius-md:   12px   (cards, inputs)
--radius-lg:   16px   (large cards, modals)
--radius-xl:   24px   (hero sections, feature blocks)
--radius-full: 9999px (avatars, pill badges)
```

### 6.5 Shadows (Dark Mode)
```
--shadow-sm:   0 2px 8px rgba(0, 0, 0, 0.3)
--shadow-md:   0 4px 16px rgba(0, 0, 0, 0.4)
--shadow-lg:   0 8px 32px rgba(0, 0, 0, 0.5)
--shadow-glow: 0 0 20px rgba(108, 99, 255, 0.15)   /* accent glow */
```

---

## 7. Design Trends (2025–2026)

### Adopted Trends

| Trend | What It Means | Implementation Notes |
|-------|---------------|---------------------|
| **Bento Grid Layout** | Modular, card-based layout (like Apple's product pages) | Use CSS Grid with varying span sizes. Cards should have consistent padding and radius. |
| **Sophisticated Dark Mode** | Not just black — use deep navy/charcoal with subtle warm undertones | Use `#0A0A0F` base, `#12121A` surface. Avoid pure `#000000`. |
| **Glassmorphism** | Frosted-glass effect on cards/overlays | `backdrop-filter: blur(12px)` + semi-transparent backgrounds. Check browser support. |
| **Expressive Typography** | Large, bold headings with tight letter-spacing | Use 48–64px H1, -0.02em tracking. Hero text can go up to 72px on desktop. |
| **Smooth Gradients** | Multi-stop gradients for buttons, borders, backgrounds | Use the accent gradient (`#6C63FF → #00D4AA`) sparingly for emphasis. |
| **Negative Space** | Generous whitespace between sections | Minimum 96px vertical padding between major sections. |

### Trends to Avoid
- ❌ **Overly complex animations** that slow page load
- ❌ **Auto-playing video backgrounds** (distract from content)
- ❌ **Parallax overuse** (can cause motion sickness)
- ❌ **3D elements** purely for decoration (adds complexity, little value for a PM site)

---

## 8. Interaction & Animation Guidelines

### 8.1 Micro-Animations

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| **Buttons** | Scale up slightly + glow on hover | 200ms | `ease-out` |
| **Cards** | Lift (translateY -4px) + shadow increase | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Navigation Links** | Underline slide-in from left | 250ms | `ease-in-out` |
| **Section Headers** | Fade-in + slide-up on scroll | 500ms | `ease-out` |
| **Stats / Metrics** | Count-up number animation | 1000ms | `ease-out` |
| **Page Load** | Staggered fade-in of elements | 300-600ms | `ease-out` |
| **Skill Tags** | Subtle scale on hover | 150ms | `ease` |

### 8.2 Scroll Animations
- Use **Intersection Observer API** for scroll-triggered animations
- Elements should animate **once** (not re-trigger on scroll back up)
- Stagger child elements with **100ms delay** between each
- Keep animations **subtle** — the content is the star, not the motion

### 8.3 Page Transitions
- Smooth scroll between sections (CSS `scroll-behavior: smooth`)
- Optional: fade transition between case study pages
- Navigation should have a **sticky header** with blur backdrop

### 8.4 Performance Rules for Animations
- Animate only `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `margin`, `padding` (triggers layout reflow)
- Use `will-change` sparingly and only on elements that will animate
- Disable complex animations on `prefers-reduced-motion: reduce`

---

## 9. Content Strategy

### 9.1 Tone of Voice
| Attribute | Description |
|-----------|-------------|
| **Professional** | Competent and credible, but not stiff or corporate |
| **Conversational** | Write like you're explaining to a smart colleague |
| **Confident** | Own your impact, but stay humble about learnings |
| **Specific** | Use numbers, names, and concrete examples |

### 9.2 Writing Guidelines
- **Headlines:** Action-oriented, specific (e.g., "Increased user retention by 34% through personalized onboarding" not "Onboarding Project")
- **Body text:** Short paragraphs (2–3 sentences max), scannable with subheadings
- **Metrics:** Always bold and highlighted — they catch the eye instantly
- **Jargon:** Use PM terminology naturally but explain niche terms
- **Length:** Hero tagline (8–12 words), About (150–200 words), Case studies (500–800 words each)

### 9.3 Content Placeholders for Developer

> **Developer Note:** Use these placeholder structures when building. The project owner will replace them with real content.

```
HERO TAGLINE:     "[Name] — Building products that [value proposition]"
ABOUT ME:         150–200 word personal product philosophy
CASE STUDY x4:    Each following the 7-part framework in Section 5
SKILLS:           8–12 skills with proficiency indicators
TESTIMONIALS:     2–3 quotes with name, title, company
CONTACT:          Email, LinkedIn, Twitter/X, optional form
```

---

## 10. SEO & Performance Requirements

### 10.1 SEO Checklist
- [ ] Unique, descriptive `<title>` tag per page (50–60 characters)
- [ ] Meta description per page (150–160 characters)
- [ ] Single `<h1>` per page with proper heading hierarchy
- [ ] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] All images have descriptive `alt` text
- [ ] Open Graph tags for social sharing (og:title, og:description, og:image)
- [ ] Twitter Card meta tags
- [ ] Canonical URL set
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] Structured data (JSON-LD) for Person schema

### 10.2 Performance Targets
| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total Blocking Time (TBT) | < 200ms |
| Lighthouse Performance Score | > 90 |

### 10.3 Performance Best Practices
- Lazy-load images below the fold
- Use WebP/AVIF image formats with fallbacks
- Minimize and bundle CSS/JS
- Use font-display: swap for web fonts
- Preload critical fonts and above-fold images
- Compress all assets with gzip/brotli

---

## 11. Tech Stack & Architecture

### 11.1 Current Stack (Existing Project)
```
Frontend:    React (Create React App) + TailwindCSS
Backend:     Node.js + Express
Styling:     TailwindCSS (via postcss)
Build:       react-scripts (CRA)
```

### 11.2 Project Structure
```
portfolio/
├── docs/
│   └── RESEARCH.md              ← You are here
├── my-app/                      ← Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/          ← Reusable UI components
│   │   ├── pages/               ← Page-level components
│   │   ├── assets/              ← Images, icons, fonts
│   │   ├── styles/              ← Global styles, design tokens
│   │   ├── data/                ← Case study content (JSON/MD)
│   │   ├── hooks/               ← Custom React hooks
│   │   └── utils/               ← Helper functions
│   ├── tailwind.config.js
│   └── package.json
├── controllers/                 ← Backend controllers
├── routes/                      ← API routes
├── index.js                     ← Express server entry
├── mialSender.js                ← Email sending utility
└── package.json                 ← Backend dependencies
```

### 11.3 Recommended Libraries
| Purpose | Library | Why |
|---------|---------|-----|
| Animations | `framer-motion` | Best-in-class React animation library |
| Icons | `react-icons` or `lucide-react` | Comprehensive, tree-shakeable icon sets |
| Scroll Animations | `react-intersection-observer` | Clean Intersection Observer hook |
| Smooth Scroll | Native CSS `scroll-behavior` | No library needed |
| Syntax Highlighting | `prismjs` or `shiki` | For displaying code/PRD artifacts |
| Markdown Rendering | `react-markdown` | Render case studies written in Markdown |
| Image Optimization | `sharp` (build-time) | Automated WebP/AVIF conversion |

---

## 12. Responsive & Accessibility Requirements

### 12.1 Breakpoints
```css
/* Mobile First Approach */
--mobile:    0px       /* Default styles */
--tablet:    768px     /* @media (min-width: 768px) */
--laptop:    1024px    /* @media (min-width: 1024px) */
--desktop:   1280px    /* @media (min-width: 1280px) */
--wide:      1536px    /* @media (min-width: 1536px) */
```

### 12.2 Responsive Rules
- **Mobile:** Single column, stacked layout. Hero text 32px. Hamburger menu.
- **Tablet:** 2-column grid for cards. Hero text 40px. Collapsible menu.
- **Desktop:** Full bento grid (3–4 columns). Hero text 56–64px. Sticky nav.
- **Touch targets:** Minimum 44×44px for all interactive elements on mobile.

### 12.3 Accessibility (WCAG 2.1 AA)
- [ ] Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- [ ] All interactive elements keyboard-navigable
- [ ] Focus indicators visible on all focusable elements
- [ ] Skip-to-content link for screen readers
- [ ] ARIA labels on icon-only buttons and links
- [ ] `prefers-reduced-motion` media query respected (disable complex animations)
- [ ] `prefers-color-scheme` supported for automatic dark/light mode
- [ ] Semantic HTML used throughout (no div soup)
- [ ] Form inputs have associated `<label>` elements

---

## 13. Reference Links & Inspiration

### Design Inspiration
- [Awwwards — Portfolio Category](https://awwwards.com/websites/portfolio/)
- [Dribbble — Portfolio Shots](https://dribbble.com/search/portfolio-website)
- [Site Builder Report](https://sitebuilderreport.com)
- [Wall of Portfolios](https://wallofportfolios.com)

### PM Portfolio Best Practices
- [Sachin Rekhi — Blog](https://sachinrekhi.com)
- [Lewis Lin — PM Resources](https://lewis-lin.com)
- [Techademy — PM Portfolio Guide](https://techademy.com)
- [NextLeap — PM Portfolio Guide](https://nextleap.app)
- [Guvi — How to Build a PM Portfolio](https://guvi.in)

### Design System References
- [Google Material Design 3](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Radix UI Design System](https://www.radix-ui.com/)

### Animation & Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [CSS Animation Best Practices — web.dev](https://web.dev/animations/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [a11y Checklist](https://www.a11yproject.com/checklist/)

---

## 14. Pre-Launch Checklist

### Content
- [ ] Hero tagline finalized and compelling
- [ ] About section written with personal voice
- [ ] 2–4 case studies completed following the framework
- [ ] All metrics are accurate and quantified
- [ ] Testimonials collected with permission
- [ ] Contact information is correct

### Design & UX
- [ ] Dark mode is polished (no pure black, proper contrast)
- [ ] Light mode toggle works correctly (if implemented)
- [ ] All micro-animations feel smooth and purposeful
- [ ] Bento grid layout renders correctly on all breakpoints
- [ ] Images are optimized (WebP, lazy-loaded)
- [ ] Fonts load correctly with `font-display: swap`

### Technical
- [ ] Lighthouse score > 90 on all categories
- [ ] No console errors or warnings
- [ ] All links work (no 404s)
- [ ] Contact form sends emails correctly
- [ ] Analytics tracking installed (GA4 or Plausible)
- [ ] SSL certificate active
- [ ] Custom domain configured

### SEO
- [ ] Title tags and meta descriptions on all pages
- [ ] Open Graph and Twitter Cards configured
- [ ] Sitemap.xml submitted to Google Search Console
- [ ] robots.txt allows crawling

### Accessibility
- [ ] Keyboard navigation works end-to-end
- [ ] Screen reader tested (VoiceOver / NVDA)
- [ ] Color contrast passes WCAG AA
- [ ] `prefers-reduced-motion` disables complex animations

---

## 15. Glossary

| Term | Definition |
|------|-----------|
| **PM** | Product Manager |
| **PRD** | Product Requirements Document — a document outlining what to build and why |
| **RICE** | Reach, Impact, Confidence, Effort — a prioritization framework |
| **ICE** | Impact, Confidence, Ease — a simpler prioritization framework |
| **DAU** | Daily Active Users |
| **CTA** | Call to Action — a button/link prompting user interaction |
| **Bento Grid** | A modular grid layout with cards of varying sizes (inspired by Apple) |
| **Glassmorphism** | A UI trend using frosted-glass effects with blur and transparency |
| **LCP** | Largest Contentful Paint — Core Web Vital measuring load performance |
| **CLS** | Cumulative Layout Shift — Core Web Vital measuring visual stability |
| **FCP** | First Contentful Paint — measures time to first rendered content |
| **WCAG** | Web Content Accessibility Guidelines |
| **JSON-LD** | JavaScript Object Notation for Linked Data — structured data format for SEO |

---

## 16. Change Log

| Date | Author | Changes |
|------|--------|---------|
| 2026-08-29 | Research Phase | Initial research document created — covers market analysis, design system, architecture, content strategy, and developer guidelines |

---

> **📌 Note to Future Developers:**
> This document should be treated as a living reference. If you make significant design or architectural decisions, please update the relevant section and add an entry to the Change Log. This ensures continuity and reduces onboarding time for anyone joining the project.
