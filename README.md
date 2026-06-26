# Trapotato — Landing Page

Marketing site for **Trapotato**, the invisible AI copilot for meetings & interviews.
Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

Live domain: **https://trap.fortiqo.xyz**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx        # fonts + SEO metadata
    page.tsx          # landing page composition + JSON-LD
    globals.css       # cinematic dark theme utilities
    robots.ts / sitemap.ts / manifest.ts   # SEO
    icon.png          # favicon (the Trapotato logo)
  components/
    Nav, Hero, Sections (Product, Demo, Features, HowItWorks, Pricing, Download, Footer), Reveal
  lib/
    site.ts           # site content (plans, support, copy)
    design/colors.ts  # theme tokens
    utils.ts
public/
  logo.png, og-image.png
```

## Editing content

- Copy, plans, support contacts, and the download link live in `src/lib/site.ts`.
  Set `downloadUrl` there once the installer is hosted to flip the CTA from
  "coming soon" to a live download.
- Theme tokens (ink / porcelain / gold) live in `src/lib/design/colors.ts`.

## Deploy (Vercel)

Static Next.js app — no environment variables required. Import the repo in Vercel,
framework auto-detects as Next.js, and deploy. Add the custom domain
`trap.fortiqo.xyz` in Project → Settings → Domains.
