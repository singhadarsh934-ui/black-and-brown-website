# BLACK & BROWN — Premium Family Fashion Showroom Website

A production-ready, premium, mobile-first website for **BLACK & BROWN**, Kerakat (Jaunpur, UP) — built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.

No footwear is included anywhere in the code, content, navigation, or images, per brand requirements.

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 + custom design tokens |
| Animation | Framer Motion |
| Icons | lucide-react |
| SEO | Native Next.js Metadata API, JSON-LD, sitemap.ts, robots.ts |

---

## 2. Folder Structure

```
black-and-brown/
├── public/
│   ├── robots.txt
│   └── images/                 ← put your real photos here
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, fonts, JSON-LD, header/footer
│   │   ├── page.tsx             # Home page (assembles all home sections)
│   │   ├── globals.css          # Design system (colors, buttons, cards)
│   │   ├── sitemap.ts           # Auto-generated sitemap.xml
│   │   ├── robots.ts            # Auto-generated robots.txt (Next-native)
│   │   ├── about/page.tsx
│   │   ├── categories/
│   │   │   ├── page.tsx         # Category listing
│   │   │   └── [slug]/page.tsx  # Category detail (search/filter/quick view)
│   │   ├── new-arrivals/page.tsx
│   │   ├── brands/page.tsx
│   │   ├── offers/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── layout/    → Header, Footer, MobileNav, WhatsAppButton
│   │   ├── home/      → Hero, ShopByCategory, ProductRail, WhyChooseUs,
│   │   │                TestimonialsSection, InstagramFeed, GoogleReviews,
│   │   │                StoreGallery, GoogleMapSection, NewsletterForm
│   │   ├── shared/    → ProductCard, QuickViewModal, ProductGridClient,
│   │   │                CategoryPageClient, ContactForm, FAQSection, SectionHeading
│   │   └── ui/        → JsonLd
│   ├── lib/
│   │   ├── data.ts    # ALL editable content lives here (see section 3)
│   │   ├── seo.ts     # Metadata + schema.org helpers
│   │   └── utils.ts   # formatINR, WhatsApp link builder, etc.
│   └── types/index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── .env.example
```

---

## 3. Editing Content (no code changes needed)

Almost everything a shop owner needs to update lives in **`src/lib/data.ts`**:

- `storeInfo` — address, phone, WhatsApp number, email, map link, timings, social links
- `categories` — the 7 product categories (name, tagline, description, images, sub-categories)
- `products` — your catalog (name, price, MRP, image, sizes, colors, fabric, flags for `isNew` / `isFeatured`)
- `testimonials` — customer reviews shown on Home + Testimonials page
- `blogPosts` — blog articles
- `faqItems` — FAQ shown on Home/Contact

**To add a real product:** copy an existing object in the `products` array, change the `id`/`slug` to something unique, update fields, and it will automatically appear in its category page, the homepage rail, and (if `isNew`/`isFeatured`) the relevant sections.

**Images:** the starter uses Unsplash stock photos so the site looks complete out of the box. Replace `image` / `bannerImage` URLs with your own product photography — either:
1. Host them yourself in `public/images/` and reference as `/images/filename.jpg`, or
2. Use a media CDN (Cloudinary is already whitelisted in `next.config.js`).

---

## 4. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918299723368
NEXT_PUBLIC_STORE_PHONE=+918299723368
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC=
NEXT_PUBLIC_INSTAGRAM_HANDLE=blackandbrown_kerakat
NEXT_PUBLIC_GA_ID=
```

The WhatsApp number and store phone are also hardcoded in `storeInfo` in `data.ts` for simplicity — update both places, or refactor `data.ts` to read from `process.env` if you prefer a single source.

---

## 5. Local Development

Requires Node.js 18.17+ and npm.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build      # production build
npm run start      # run the production build locally
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

---

## 6. Deployment Guide (Vercel — recommended, free tier works)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: Vercel auto-detects **Next.js** — no changes needed.
4. Add the environment variables from `.env.example` under **Project Settings → Environment Variables**.
5. Click **Deploy**. Vercel builds and gives you a live `.vercel.app` URL in ~2 minutes.
6. **Connect your domain:** Project Settings → Domains → add `blackandbrown.in` (or your domain) → update your domain registrar's DNS records as instructed by Vercel (usually an `A` record to `76.76.21.21` and a `CNAME` for `www`).
7. Every future `git push` to the main branch auto-redeploys.

### Alternative: Netlify
1. `npm install -g netlify-cli` (optional) or connect the GitHub repo directly on netlify.com.
2. Build command: `npm run build`, Publish directory: `.next` (Netlify's Next.js runtime plugin handles the rest — it's added automatically when it detects Next.js).
3. Add the same environment variables in **Site Settings → Environment Variables**.

### Alternative: Self-hosted / VPS
```bash
npm install
npm run build
npm run start   # runs on port 3000 by default — put behind Nginx/Caddy with a reverse proxy + SSL
```
Use `pm2` or a systemd service to keep the Node process alive:
```bash
npm install -g pm2
pm2 start npm --name "black-and-brown" -- start
pm2 save
```

---

## 7. Before You Go Live — Checklist

- [ ] Replace all Unsplash placeholder images with real showroom/product photography
- [ ] Update `storeInfo.whatsapp` and `storeInfo.phone` with the correct final numbers (already set to 82997 23368 — verify)
- [ ] Confirm `storeInfo.mapEmbedSrc` — for a pin-accurate embed, get the real "Embed a map" iframe `src` from Google Maps (search the store on Google Maps → Share → Embed a map) and paste just the `src` URL in
- [ ] Update `NEXT_PUBLIC_SITE_URL` and the `SITE_URL` fallback in `src/lib/seo.ts` to your live domain (required for correct sitemap/canonical URLs)
- [ ] Add a real Open Graph cover image at `public/images/og-cover.jpg` (1200×630px)
- [ ] Set up Google Search Console and submit `https://yourdomain.com/sitemap.xml`
- [ ] Set up Google Business Profile with matching NAP (Name, Address, Phone) for local SEO
- [ ] Connect the newsletter form (`NewsletterForm.tsx`) to a real provider (Mailchimp, Brevo, or a simple API route + Google Sheet)
- [ ] Add Google Analytics / Meta Pixel if needed (drop the script in `layout.tsx`)
- [ ] Replace the Instagram feed placeholder grid with a live embed (e.g. SnapWidget, Elfsight, or the Instagram Graph API) once the handle is active

---

## 8. Performance Notes

- Images use `next/image` with responsive `sizes` for automatic lazy-loading and AVIF/WebP conversion.
- Fonts are loaded via `next/font/google` (self-hosted, no render-blocking Google Fonts request).
- All animations are GPU-accelerated (`transform`/`opacity`) via Framer Motion — no layout-thrashing effects.
- Run `npm run build` and then `npx serve out` or deploy to Vercel and test with Lighthouse/PageSpeed Insights — this structure is built to comfortably clear 90+ on Performance, SEO, and Accessibility with real (compressed) images.

---

## 9. Support

This codebase is intentionally simple to hand off to any Next.js developer or agency for future work — all business content is isolated in `src/lib/data.ts`, and all pages follow the same pattern (metadata → JSON-LD → page content).
