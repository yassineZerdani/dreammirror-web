# DreamMirror — Marketing Website

Production-ready marketing site for **DreamMirror**, an AI dream journal.
Currently available as a direct **Android** download; **iOS** is coming later.
Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

The site introduces the product, showcases the app, builds trust, and lets
visitors install DreamMirror on Android (APK). When an `.ipa` URL is configured,
iOS sideload download UI appears automatically. It mirrors the brand identity of
the mobile app (`../dreammirror-mobile`): calm, intimate, dark-mode-first, serif
headings, deep-navy / moonlight palette.

---

## Pages

| Path | Purpose |
|------|---------|
| `/` | Hero, features, screenshot showcase, how-it-works, why-DreamMirror, FAQ, CTA |
| `/download` | Android APK download (+ iOS when `NEXT_PUBLIC_IPA_URL` is set), install instructions, download FAQ |
| `/privacy` | Plain-language privacy policy |
| `/delete-account` | Two clear paths to delete an account and all data |
| `/terms` | Plain-language terms of use |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO + social preview |

Every route is statically prerendered (`○ Static`) so the site is happy on
either a Node VPS (`next start`) or a static-friendly host.

---

## Quick start

```bash
cd dreammirror-web
cp .env.example .env.local   # then edit values
npm install
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm start   # production server (port 3000)
```

```bash
npm run lint                 # ESLint
npm run type-check           # tsc --noEmit
```

---

## Centralized config

All values that change between environments live in **one place** — env
variables, surfaced via `src/lib/site.ts`. There is no hardcoded download URL
or version anywhere else in the codebase.

| Env var | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (no trailing slash) | `https://dreammirror.app` |
| `NEXT_PUBLIC_APK_URL` | Where the Android APK lives | `/downloads/dreammirror.apk` |
| `NEXT_PUBLIC_APP_VERSION` | Version shown on `/download` (default for both platforms) | `1.0.0` |
| `NEXT_PUBLIC_APK_SIZE` | Optional APK file size label (e.g. `42 MB`) | _empty_ |
| `NEXT_PUBLIC_IPA_URL` | Where the iOS `.ipa` lives. **Leave empty to hide iOS download UI.** | _empty_ |
| `NEXT_PUBLIC_IPA_VERSION` | Override iOS version (falls back to `NEXT_PUBLIC_APP_VERSION`) | _empty_ |
| `NEXT_PUBLIC_IPA_SIZE` | Optional `.ipa` size label (e.g. `48 MB`) | _empty_ |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Used in footer + trust copy | `support@dreammirror.app` |

The download page automatically flips between the **two-platform** layout and
the Android-only + "iOS coming later" layout based on whether
`NEXT_PUBLIC_IPA_URL` is set.

---

## Where to put the APK and IPA

The Android `.apk` and the iOS `.ipa` use the **same three options**. Pick
whichever matches your distribution. Both files use a `download` attribute on
the button so the saved filename is always friendly.

### 1) Self-hosted (simplest)

Drop the files into `public/downloads/` and keep the default URLs:

```
public/downloads/dreammirror.apk
public/downloads/dreammirror.ipa
```

```bash
NEXT_PUBLIC_APK_URL=/downloads/dreammirror.apk
NEXT_PUBLIC_IPA_URL=/downloads/dreammirror.ipa
```

Next.js serves them directly. The folder is created with a `.gitkeep`; both
binary types are git-ignored so large files don’t bloat the repo.

### 2) GitHub Releases

```bash
NEXT_PUBLIC_APK_URL=https://github.com/<org>/<repo>/releases/latest/download/dreammirror.apk
NEXT_PUBLIC_IPA_URL=https://github.com/<org>/<repo>/releases/latest/download/dreammirror.ipa
```

### 3) Object storage / CDN

```bash
NEXT_PUBLIC_APK_URL=https://cdn.example.com/dreammirror-1.0.0.apk
NEXT_PUBLIC_IPA_URL=https://cdn.example.com/dreammirror-1.0.0.ipa
```

### About iOS distribution (be honest with users)

iOS doesn’t allow installing apps directly from a website — only the App
Store and TestFlight can. The site is honest about this:

- The iOS download CTA hands users a `.ipa` file.
- The install instructions tell them they need a sideloading tool
  (**AltStore**, **Sideloadly**, etc.) on a Mac or PC for the first install.
- The page also says that with a free Apple ID the install signature lasts
  about **7 days** and needs re-signing; a paid Apple Developer account
  extends that to roughly a year.

If iOS distribution isn’t ready yet, leave `NEXT_PUBLIC_IPA_URL` empty and
the page will quietly fall back to the "iOS — coming later" card.

---

## Brand assets

The site uses a single brand mark designed against the site's color tokens
(see `tailwind.config.ts`). Everything else is derived from it.

- `public/brand/mark.svg`            — **source of truth.** Used in NavBar, Footer, Hero accent, and Download hero. Pure SVG, brand tokens only (deep-navy bg, moonlight crescent, soft glow halo).
- `public/brand/icon.png` (512×512)  — rasterized from `mark.svg`. Used as the PNG favicon fallback and Organization logo.
- `public/brand/apple-touch-icon.png` (180×180) — rasterized from `mark.svg`. Used when users add the site to an iOS home screen.
- `public/favicon.svg`               — small-size SVG favicon.

To regenerate the PNG variants from the SVG (after editing `mark.svg`):

```bash
node -e "const sharp = require('sharp');const fs = require('fs');const svg = fs.readFileSync('public/brand/mark.svg');Promise.all([sharp(svg, { density: 600 }).resize(512, 512).png().toFile('public/brand/icon.png'),sharp(svg, { density: 600 }).resize(180, 180).png().toFile('public/brand/apple-touch-icon.png')]).then(() => console.log('OK'));"
```

The phone-mockup component (`src/components/phone-mockup.tsx`) renders
**honest** previews of the actual Home / Entry / Insights screens using the
real fonts, palette, and copy. We deliberately do not ship fake screenshots.

---

## Deploying

### A) Normal VPS (Node)

```bash
npm install
npm run build
npm start                 # binds to PORT (default 3000)
```

Reverse proxy (nginx / Caddy) → `http://127.0.0.1:3000`. Set environment
variables on the host before `npm run build` (they’re inlined into the
client bundle at build time).

A typical `pm2` line:
```bash
pm2 start "npm start" --name dreammirror-web
```

### B) Docker (recommended on a VPS)

```bash
cp .env.example .env
# set NEXT_PUBLIC_SITE_URL=https://your-domain.example.com
docker compose up -d --build
```

The app listens on `127.0.0.1:3000` (`WEB_PORT` to change). Put Caddy/nginx/Traefik
in front for HTTPS. `NEXT_PUBLIC_*` values are baked in at **image build** time —
rebuild after changing them.

The included `Dockerfile` uses Next.js `output: "standalone"`.

### C) Static host (Vercel / Netlify / Cloudflare Pages)

Every page is prerendered. Just point your provider at this directory and
let it run `npm run build`. No special config needed.

---

## Brand and content rules

- **No fake testimonials, reviews, awards, press logos, or download counts.**
- AI is described as **reflective insights** — never as medical advice,
  diagnoses, or predictions.
- No mystical / pseudo-scientific claims.
- Privacy and Delete-Account are linked from the navbar, footer, and home.

If you change copy, keep the tone calm, intimate, and honest.

---

## Project structure

```
dreammirror-web/
├── public/
│   ├── brand/                      # icon, logo, splash from mobile app
│   ├── downloads/                  # drop dreammirror.apk and dreammirror.ipa here
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx              # global layout, fonts, metadata
│   │   ├── page.tsx                # Home
│   │   ├── download/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── delete-account/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── opengraph-image.tsx     # /opengraph-image -> dynamic OG
│   │   ├── sitemap.ts              # /sitemap.xml
│   │   ├── robots.ts               # /robots.txt
│   │   ├── not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── nav-bar.tsx             # responsive navbar w/ mobile menu
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   ├── showcase.tsx
│   │   ├── how-it-works.tsx
│   │   ├── why-dreammirror.tsx
│   │   ├── faq.tsx
│   │   ├── cta-banner.tsx
│   │   ├── phone-mockup.tsx        # honest CSS phone previews
│   │   ├── legal-page.tsx
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   └── icons.tsx
│   └── lib/
│       ├── site.ts                 # central config (env-driven)
│       └── cn.ts                   # className helper
├── tailwind.config.ts              # brand tokens mirrored from mobile
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── .env.example
└── package.json
```

---

## License

© Aeropyx Tech. All rights reserved.
