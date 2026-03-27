# HajzerStudio

Conversion-focused portfolio site for a web developer targeting beauty, salon and barber businesses through cold outreach.

## What this repo is now

This is no longer just a simple static landing page.
It is a niche sales asset with:

- a stronger positioning-first homepage
- real HU/EN language switching
- interactive revenue upside calculator
- instant concept builder / pain-point selector
- structured email-brief contact flow without backend overhead
- three separate demo funnels for different beauty business models
- local `gsap` dependency instead of CDN-based animation scripts

## Pages

- `index.html`: main portfolio / sales page
- `templates/barber-shop-demo.html`: barber fast-booking funnel demo
- `templates/noi-fodraszat-demo.html`: salon consultation funnel demo
- `templates/premium-szalon-demo.html`: premium qualification funnel demo

## Main code structure

- `src/main.ts`: homepage rendering, i18n, calculator, concept builder, contact brief flow, motion
- `styles.css`: homepage visual system and responsive layout
- `templates/demo-common.js`: shared demo interactions and local GSAP motion
- `templates/*.css`: visual layer for each demo page
- `vite.config.ts`: multi-page Vite build config

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Why it is structured this way

The goal is to help close attention after cold calling:

- the homepage explains the offer in business terms, not just visual terms
- the demo pages let you send a relevant example immediately
- the contact flow creates a usable, structured brief instead of a weak generic message

## Notes

- Current contact handling opens an email draft with a structured summary instead of using a backend.
- Animation is bundled locally through `gsap`, so the site no longer depends on external animation CDNs.
- `npm audit fix` has already been run and the dependency tree is currently clean.
