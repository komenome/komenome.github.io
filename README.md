<div align="center">

<!-- PROJECT SHIELDS -->
[![Next.js][next-shield]][next-url]
[![TypeScript][ts-shield]][ts-url]
[![Tailwind CSS][tailwind-shield]][tailwind-url]
[![Framer Motion][framer-shield]][framer-url]
[![License][license-shield]][license-url]

<br />

<!-- LOGO -->
<img src="https://raw.githubusercontent.com/komenome/komenome.github.io/main/public/favicon.gif" alt="Logo" width="100" height="100" style="border-radius: 50%; margin-bottom: 16px;">

<!-- TITLE -->
<h1 align="center" style="font-weight: 700; letter-spacing: -0.5px;">KomeNome</h1>

<!-- TAGLINE -->
<p align="center" style="font-size: 18px; color: #666;">
  <strong>Premium Digital Game Top-Up Services</strong>
  <br />
  Fast · Reliable · Secure
</p>

<p align="center">
  <a href="https://komenome.github.io" target="_blank"><strong>🌐 Visit Live Site »</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#-features"><strong>Explore Features</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#-getting-started"><strong>Getting Started</strong></a>
</p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
  - [Colors](#colors)
  - [Fonts](#fonts)
  - [Translations](#translations)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Overview

**KomeNome** is a premium portfolio and service platform for digital game top-ups. Built with a focus on elegance, performance, and user experience, the site features a cinematic dark theme with gold accents, fluid animations, and bilingual support for English and Myanmar audiences.

The design philosophy centers on **luxury minimalism** — using generous whitespace, refined typography, and purposeful motion to create an immersive experience that reflects the premium nature of the services offered.

> 🎯 **Target Audience:** Gamers in Myanmar and Southeast Asia looking for fast, trustworthy digital top-up services for Mobile Legends, Honor of Kings, and PUBG Mobile.

---

## 🎨 Features

<details open>
<summary><b>Visual Design</b></summary>

- **Dual Theme System** — Seamless dark/light mode toggle with `next-themes`
  - 🌑 **Dark:** Gold (`#D4AF37`) on pure black (`#000000`)
  - ☀️ **Light:** Deep purple (`#301934`) on white (`#FFFFFF`)
- **Premium Typography** — Playfair Display serif headings paired with DM Sans body text
- **Animated SVG Hero** — Custom concentric ring graphic with pulsing particles and glow effects
- **Gradient Shimmer Text** — Animated gold/purple gradient on the hero title
- **Custom Scrollbar** — Themed scrollbar with smooth styling

</details>

<details open>
<summary><b>Interactions & Animations</b></summary>

- **Magnetic Cursor** — Custom cursor that snaps to interactive elements (desktop)
- **Framer Motion Animations** — Page transitions, scroll reveals, hover micro-interactions
- **Typewriter Effect** — Character-by-character text reveal in hero section
- **Scroll-Triggered Reveals** — Four animation variants (fade-up, fade-left, fade-right, scale-up)
- **Card Lift Effects** — Subtle elevation on hover for service and contact cards
- **Spring Physics** — Natural-feeling motion on toggles, buttons, and UI elements

</details>

<details open>
<summary><b>Functionality</b></summary>

- **Bilingual Support** — Full English (EN) / Myanmar (MM) language toggle with localStorage persistence
- **Fully Responsive** — Optimized from mobile (320px) to ultra-wide (4K) displays
- **Static Export** — Zero-runtime dependency, served as pure HTML/CSS/JS
- **GitHub Pages Deploy** — Automated CI/CD via GitHub Actions

</details>

---

## 🛠 Tech Stack

<div align="center">

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | [Next.js](https://nextjs.org/) | `15.2.0` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.5.0` |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `3.4.17` |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | `11.18.0` |
| **Icons** | [Lucide React](https://lucide.dev/) | `0.460.0` |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) | `0.4.4` |

</div>

### Typography

| Font | Role | Source |
|------|------|--------|
| **Playfair Display** | Headings & Display | Google Fonts |
| **DM Sans** | Body & UI Text | Google Fonts |
| **Noto Sans Myanmar** | Burmese Script | Google Fonts |

---

## 📸 Screenshots

<div align="center">

| Dark Mode Hero | Light Mode Services |
|:---:|:---:|
| *Screenshot placeholder* | *Screenshot placeholder* |

| Mobile View | Contact Section |
|:---:|:---:|
| *Screenshot placeholder* | *Screenshot placeholder* |

</div>

> 💡 **Tip:** Add your own screenshots by replacing the placeholders above. Place images in `/public/screenshots/` and reference them with relative paths.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0` (or **yarn** / **pnpm**)

### Installation

```bash
# Clone the repository
git clone https://github.com/KomeNome/komenome.github.io.git

# Navigate into the project directory
cd komenome.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at **[http://localhost:3000](http://localhost:3000)**.

### Build

```bash
# Create an optimized production build
npm run build
```

The static export will be generated in the `/out` directory, ready for deployment to any static hosting service.

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD pipeline
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, custom keyframes, scrollbar
│   │   ├── layout.tsx          # Root layout with font loading & providers
│   │   └── page.tsx            # Home page composition
│   ├── components/
│   │   ├── About.tsx           # About section with social links
│   │   ├── Contact.tsx         # Contact methods grid
│   │   ├── Cursor.tsx          # Custom magnetic cursor (desktop only)
│   │   ├── Footer.tsx          # Footer with animated heart icon
│   │   ├── Hero.tsx            # Hero section with typewriter effect
│   │   ├── HeroGraphic.tsx     # Custom animated SVG concentric rings
│   │   ├── LanguageSwitcher.tsx # EN/MM toggle with spring animation
│   │   ├── Navbar.tsx          # Fixed glassmorphism navbar
│   │   ├── RevealOnScroll.tsx  # Scroll-triggered animation wrapper
│   │   ├── Services.tsx        # Service cards with hover lift
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── context/
│   │   └── LanguageContext.tsx  # React Context for i18n state
│   ├── hooks/
│   │   └── useMousePosition.ts  # Custom hook for cursor tracking
│   └── lib/
│       └── translations.ts      # EN & MM translation strings
├── next.config.js              # Next.js configuration (static export)
├── tailwind.config.ts          # Tailwind theme customization
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
└── README.md                   # This file
```

---

## 🎨 Customization

### Colors

The color system is centralized in `src/app/globals.css` and `tailwind.config.ts`:

```css
/* src/app/globals.css */
:root {
  --color-gold: #D4AF37;           /* Primary accent (dark mode) */
  --color-deep-purple: #301934;    /* Primary accent (light mode) */
  --color-background-dark: #000000;
  --color-background-light: #FFFFFF;
  --color-secondary-dark: #1A1A1A;
  --color-secondary-light: #F3F4F6;
}
```

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `gold` | `#D4AF37` | `#301934` |
| `background` | `#000000` | `#FFFFFF` |
| `secondary` | `#1A1A1A` | `#F3F4F6` |

### Fonts

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`:

```tsx
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
})
```

To change fonts, replace these imports and update the CSS variable references in `tailwind.config.ts`.

### Translations

All text content is managed in `src/lib/translations.ts`. Add new keys to both the `en` and `mm` objects:

```ts
export const translations = {
  en: {
    your_new_key: 'Your English Text',
  },
  mm: {
    your_new_key: 'သင့်ရဲ့ မြန်မာစာ',
  },
}
```

---

## 🚢 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

**Setup:**

1. Go to **Settings → Pages** in your GitHub repository
2. Set **Source** to "GitHub Actions"
3. Push to the `main` branch — the workflow (`.github/workflows/deploy.yml`) will automatically:
   - Build the Next.js static export
   - Deploy the `out/` directory to GitHub Pages

**Manual Deploy:**

```bash
npm run build
# Upload the contents of /out to your hosting provider
```

### Configuration

`next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig
```

---

## 📄 License

```
Copyright © 2026 KomeNome. All rights reserved.
```

This project and its contents are proprietary. Unauthorized copying, distribution, or modification is strictly prohibited.

---

<div align="center">

**Crafted with precision and passion**

[🌐 komenome.github.io](https://komenome.github.io)

</div>

<!-- MARKDOWN LINKS & IMAGES -->
[next-shield]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white
[next-url]: https://nextjs.org/
[ts-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[ts-url]: https://www.typescriptlang.org/
[tailwind-shield]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[framer-shield]: https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white
[framer-url]: https://www.framer.com/motion/
[license-shield]: https://img.shields.io/badge/License-Proprietary-1A1A1A?style=for-the-badge
[license-url]: #license