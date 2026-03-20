# HajzerStudio

Modern weboldalak fodrászoknak és barber shopoknak. Gyors, mobilbarát és ügyfélszerzésre optimalizálva.

> **HajzerStudio – Building modern websites for barbers & salons. Fast, mobile-first, client-focused.**

## Tech Stack

- [Next.js 16](https://nextjs.org/) – React framework
- [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) – Type safety

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout & metadata
│   ├── page.tsx        # Home page (composes all sections)
│   └── globals.css     # Global styles & CSS variables
└── components/
    ├── Navbar.tsx      # Sticky navigation with mobile menu
    ├── Hero.tsx        # Hero section with CTA
    ├── Services.tsx    # Services grid (6 service cards)
    ├── Features.tsx    # Why choose us + feature cards
    ├── Portfolio.tsx   # Portfolio with browser mockups
    ├── Process.tsx     # 4-step process section
    ├── Testimonials.tsx # Client testimonials + stats
    ├── Contact.tsx     # Contact form
    └── Footer.tsx      # Footer with links
```

## Build

```bash
npm run build
npm start
```
