# Premium SaaS-Style Portfolio

A world-class, highly animated, and SEO-optimized developer portfolio built from scratch using **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**. Designed specifically to impress recruiters from top tech companies (ASML, Stripe, Adyen, Booking.com, Meta, Amazon, Microsoft, Uber, Spotify).

## 🚀 Live Demo & Repository
- **Production URL**: [ashique.space](https://www.ashique.space/)
- **Source Code**: [GitHub Repository](https://github.com/AshiqueGhazali)

---

## 🛠 Technology Stack

- **Framework**: Next.js 15 (App Router with Streaming SSR)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (native CSS-variable theme engine)
- **Animations**: Framer Motion (scroll timelines, spring drags, fading grids)
- **UI Components**: Radix UI + Shadcn UI primitives
- **Icons**: Lucide React

---

## 📂 Complete Folder Structure

```
portfolio_v2/
├── public/                 # Static assets (favicons, icons, global media)
├── src/
│   ├── app/                # Next.js App Router structure
│   │   ├── layout.tsx      # Global wrapper with Font, SEO, providers, and footer
│   │   ├── page.tsx        # Homepage combining hero, experience, and projects sections
│   │   ├── about/          # Standalone detailed about page
│   │   ├── experience/     # Standalone experience page
│   │   ├── projects/       # Dynamic search/filter catalog
│   │   │   └── [slug]/     # Standalone dynamic case studies
│   │   ├── skills/         # Standalone bento skills page
│   │   ├── blog/           # Technical blog engine
│   │   │   └── [slug]/     # Dynamic article reader (custom markdown parser)
│   │   ├── resume/         # Print-optimized resume page (Print PDF trigger)
│   │   ├── contact/        # Contact dashboard page
│   │   ├── api/            # Route handlers
│   │   │   └── contact/    # Contact form API backend
│   │   ├── globals.css     # Tailwind imports and core variable configuration
│   │   ├── manifest.ts     # PWA layout manifest
│   │   ├── robots.ts       # SEO robots setup
│   │   └── sitemap.ts      # Automated sitemap compilations
│   ├── components/
│   │   ├── ui/             # Shadcn primitives (buttons, inputs, cards, tabs)
│   │   ├── shared/         # Global widgets (Navbar, MouseFollower, CustomBackground)
│   │   └── sections/       # Homepage layouts (Hero, About, TechStack, projects)
│   ├── context/
│   │   └── ThemeContext.tsx# Light/Dark mode state sync provider
│   ├── data/               # Local JSON database arrays (projects, skills, experiences)
│   │   ├── projects.ts     
│   │   ├── experience.ts   
│   │   ├── skills.ts       
│   │   └── posts.ts        
│   └── lib/
│       └── utils.ts        # Tailwind merge helper
├── components.json         # Shadcn configurations
├── postcss.config.mjs      # PostCSS specifications
├── next.config.ts          # Next.js optimization overrides
└── tsconfig.json           # Type configurations
```

---

## ✨ Features & Polish

### 1. Minimalist Black/White Aesthetic
- High-contrast Linear/Stripe style monochrome themes.
- Electric Indigo Accent color (`#6366f1` / `#818cf8`) highlighting code sections and buttons.
- Sleek glassmorphism panels with micro-borders.

### 2. Premium Animations
- **Mouse Follower**: A smooth, spring-damped tracking bubble that scales and lights up when hovering over links.
- **Scroll-Linked Timeline**: The experience line draws itself dynamically as the user scrolls.
- **Physics 404 Sandbox**: Graggable and throwable bubble objects that bounce around the view.
- **Scroll Reveals**: Fine-grained cubic-bezier slide-ups on viewport entering.

### 3. SEO & Structured Data
- Open Graph tags and Twitter Cards pre-configured in `layout.tsx`.
- Dynamic sitemaps (`sitemap.ts`) mapping dynamic slugs automatically.
- Semantic HTML5 layout tags (`main`, `nav`, `section`, `header`, `footer`) throughout.

### 4. Accessibility (A11y)
- Supports keyboard navigation out of the box (focus outlines, tabs).
- Full `aria-label` tags on interactive controls and buttons.
- Dynamic detection of `prefers-reduced-motion` media queries: disables mouse followers and high-velocity transitions for motion-sensitive users.

### 5. Print Layout Support
- Standalone Resume page has custom `@media print` directives in Tailwind CSS. Clicking **Print / Save PDF** hides side widgets and renders a clean, professional dual-column resume.

---

## ⚙️ Development & Validation

To spin up the local development server:

```bash
# 1. Install dependencies
npm install

# 2. Run developer environment
npm run dev

# 3. Build verification
npm run build
```

---

## 📦 Vercel Deployment Guide

Deploying Next.js 15 projects on Vercel is seamless:

1. **Install Vercel CLI (optional)**:
   ```bash
   npm install -g vercel
   ```
2. **Launch Deployment**:
   Run the following in the project root:
   ```bash
   vercel
   ```
   Follow the prompts to link your GitHub repository.
3. **Configure Environment Variables**:
   If you integrate a mail dispatcher (like Resend) in `src/app/api/contact/route.ts` later, add your API key in the Vercel Dashboard under **Environment Variables**.
4. **Production Push**:
   ```bash
   vercel --prod
   ```
   *Vercel automatically triggers compilation, optimizes images, and deploys to global Edge Networks.*
