<div align="center">

<img src="https://raw.githubusercontent.com/komenome/komenome.github.io/main/public/favicon.webp" alt="KomeNome Logo" width="104" height="104">

# KomeNome Portfolio

**မြန်ဆန် · လုံခြုံ · ယုံကြည်စိတ်ချရသော Game Top-Up ဝန်ဆောင်မှု**

[![Next.js](https://img.shields.io/badge/Next.js-16-080c17?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-6551D8?style=flat-square&logo=github)](https://komenome.github.io)

[Live Website သို့ သွားရန်](https://komenome.github.io)

</div>

## ဒီ Project အကြောင်း

KomeNome သည် Mobile Legends၊ Honor of Kings နှင့် PUBG Mobile ဂိမ်းများအတွက် Top-Up ဝန်ဆောင်မှုများကို မိတ်ဆက်ပြသထားသော bilingual portfolio website ဖြစ်ပါတယ်။ မြန်မာနှင့် အင်္ဂလိပ်ဘာသာ နှစ်မျိုးလုံးအသုံးပြုနိုင်ပြီး ဖုန်း၊ Tablet နှင့် Desktop များတွင် အဆင်ပြေစွာကြည့်ရှုနိုင်အောင် တည်ဆောက်ထားပါတယ်။

Website ကို static export ပြုလုပ်ထားသောကြောင့် server မလိုဘဲ GitHub Pages ပေါ်တွင် မြန်ဆန်စွာ အသုံးပြုနိုင်ပါတယ်။

## အဓိကလုပ်ဆောင်ချက်များ

- မြန်မာ/အင်္ဂလိပ် ဘာသာစကားပြောင်းလဲအသုံးပြုနိုင်ခြင်း
- Dark mode နှင့် Light mode ပါဝင်ခြင်း
- Mobile-first responsive layout
- Facebook၊ Telegram နှင့် Viber တို့သို့ တိုက်ရိုက်ဆက်သွယ်နိုင်ခြင်း
- Framer Motion ဖြင့် နူးညံ့သော animation များ
- မြန်မာစာအတွက် Noto Sans Myanmar font နှင့် သင့်တော်သော line spacing
- Next.js static export နှင့် GitHub Actions auto deployment
- Keyboard navigation နှင့် reduced-motion preference ကို ထောက်ပံ့ခြင်း

## အသုံးပြုထားသော နည်းပညာများ

| အမျိုးအစား | နည်းပညာ |
|---|---|
| Framework | Next.js 16 / React 19 |
| Programming Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion / Lottie |
| Icons | Lucide React နှင့် custom brand SVG |
| Theme | next-themes |
| Deployment | GitHub Pages / GitHub Actions |

## Local တွင် စတင်အသုံးပြုရန်

လိုအပ်ချက်များ — Node.js 20 သို့မဟုတ် အထက်နှင့် npm 9 သို့မဟုတ် အထက်။

```bash
git clone https://github.com/komenome/komenome.github.io.git
cd komenome.github.io
npm install
npm run dev
```

Browser တွင် [http://localhost:3000](http://localhost:3000) ကို ဖွင့်ပြီးကြည့်ရှုနိုင်ပါတယ်။

## စစ်ဆေးခြင်းနှင့် Production Build

```bash
# Code quality စစ်ရန်
npm run lint

# Production static export ထုတ်ရန်
npm run build
```

Build အောင်မြင်ပါက static website files များကို `out/` folder ထဲတွင် ရရှိပါမယ်။

## Project ဖွဲ့စည်းပုံ

```text
src/
├── app/                 # Layout၊ metadata နှင့် global styles
├── components/          # Hero၊ Services၊ Contact စသည့် UI အစိတ်အပိုင်းများ
├── context/             # ဘာသာစကား state နှင့် provider
├── hooks/               # Mouse interaction hooks
└── lib/                 # မြန်မာ/အင်္ဂလိပ် ဘာသာပြန်စာသားများ

public/                  # Logo နှင့် animation assets
.github/workflows/       # GitHub Pages deployment workflow
```

## စိတ်ကြိုက်ပြင်ဆင်ရန်

- စာသားများ — `src/lib/translations.ts`
- အရောင်နှင့် global design tokens — `src/app/globals.css`
- Social link များ — `src/components/Contact.tsx`
- Font နှင့် metadata — `src/app/layout.tsx`

ဘာသာပြန် key အသစ်ထည့်သည့်အခါ `en` နှင့် `mm` နှစ်နေရာစလုံးတွင် key တူတူထည့်ပေးရပါမယ်။

## Deployment

`main` branch သို့ push လုပ်လိုက်တိုင်း `.github/workflows/deploy.yml` က အောက်ပါအဆင့်များကို အလိုအလျောက်လုပ်ဆောင်ပေးပါတယ်။

1. Dependency များ install ပြုလုပ်ခြင်း
2. Next.js production build ပြုလုပ်ခြင်း
3. `out/` folder ကို GitHub Pages သို့ deploy ပြုလုပ်ခြင်း

Repository ၏ **Settings → Pages → Source** ကို **GitHub Actions** အဖြစ်ရွေးထားရန် လိုအပ်ပါတယ်။

## မူပိုင်ခွင့်

Copyright © 2026 KomeNome. မူပိုင်ခွင့်အားလုံး ရရှိပြီးဖြစ်သည်။ ခွင့်ပြုချက်မရှိဘဲ ကူးယူခြင်း၊ ဖြန့်ဝေခြင်း သို့မဟုတ် ပြန်လည်ပြင်ဆင်ခြင်း မပြုရပါ။
