<div align="center">

# ⚡ KomeNome

**Premium Digital Game Top-Up Services**

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

</div>

---

## 📖 Overview

A premium portfolio website for **KomeNome** — offering fast, reliable digital game top-up services. Built with Next.js, featuring smooth animations, bilingual support (English/Myanmar), and a responsive dark/light theme.

> 🌐 **Live Site:** [komenome.github.io](https://komenome.github.io)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark/Light Theme** | Seamless theme switching with gold (dark) and deep-purple (light) accent colors |
| 🌍 **Bilingual Support** | English and Myanmar (မြန်မာ) language toggle with persistent storage |
| 🎭 **Custom Cursor** | Animated magnetic cursor that snaps to interactive elements (desktop) |
| 🎬 **Smooth Animations** | Framer Motion powered entrance, scroll-reveal, and micro-interaction animations |
| 🖼️ **Custom SVG Hero** | Animated concentric ring graphic with pulsing particles |
| 📱 **Fully Responsive** | Optimized for all screen sizes from mobile to desktop |
| ⚡ **Static Export** | Pre-rendered static HTML for lightning-fast GitHub Pages deployment |
| 🔄 **Typewriter Effect** | Character-by-character text reveal in the hero section |
| 🔤 **Premium Typography** | Playfair Display headings + DM Sans body text |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework with static export |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |
| **next-themes** | Dark/light theme management |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/KomeNome/komenome.github.io.git
cd komenome.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Production build (outputs to /out)
npm run build
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, keyframes, scrollbar
│   ├── layout.tsx           # Root layout with fonts & providers
│   └── page.tsx             # Home page composition
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact links section
│   ├── Cursor.tsx           # Custom magnetic cursor
│   ├── Footer.tsx           # Footer with animated heart
│   ├── Hero.tsx             # Hero section with typewriter
│   ├── HeroGraphic.tsx      # Animated SVG hero graphic
│   ├── LanguageSwitcher.tsx  # EN/MM toggle with spring animation
│   ├── Navbar.tsx            # Fixed navbar with mobile menu
│   ├── RevealOnScroll.tsx   # Scroll-triggered reveal wrapper
│   ├── Services.tsx          # Services cards section
│   └── ThemeToggle.tsx      # Dark/light theme toggle
├── context/
│   └── LanguageContext.tsx   # i18n context provider
├── hooks/
│   └── useMousePosition.ts  # Mouse position tracking hook
└── lib/
    └── translations.ts      # EN/MM translation strings
```

---

## 🎨 Customization

### Colors

Edit `src/app/globals.css` CSS variables and `tailwind.config.ts`:

| Variable | Dark Mode | Light Mode |
|----------|-----------|------------|
| Primary | `#D4AF37` (Gold) | `#301934` (Deep Purple) |
| Background | `#000000` | `#FFFFFF` |
| Secondary | `#1A1A1A` | `#F3F4F6` |

### Fonts

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`:

| Font | Usage | Variable |
|------|-------|----------|
| **Playfair Display** | Headings | `--font-playfair` |
| **DM Sans** | Body text | `--font-dm-sans` |
| **Noto Sans Myanmar** | Myanmar text | `--font-noto` |

### Translations

Add or edit translation strings in `src/lib/translations.ts`.

---

## 🚢 Deployment

This project uses **GitHub Pages** with GitHub Actions for automatic deployment.

The workflow (`.github/workflows/deploy.yml`) automatically:

1. Builds the Next.js static export on every push to `main`
2. Deploys the `out/` directory to GitHub Pages

Configuration in `next.config.js`:

```js
module.exports = {
  output: 'export',  // Static HTML export
  images: { unoptimized: true },
}
```

---

## 📄 License

This project is private. All rights reserved.

---

<div align="center">

** Built with ❤️ by KomeNome**

</div>