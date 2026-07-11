# FxAI — Marketing Website

Production-ready, SEO-optimized marketing site for **FxAI**, an all-in-one AI
photo enhancer for iPhone and iPad (Retouch, Restore, Edit, Erase). Built with
Next.js 16 (App Router), React 19, and Tailwind CSS v4.

The site is engineered around two goals: **rank in Google organic search** and
**convert visitors into App Store installs**.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static export to out/
pnpm start    # serve the production build
```

## Before you deploy

Update the placeholders in [`app/lib/site.ts`](app/lib/site.ts):

| Constant | Replace with |
| --- | --- |
| `SITE_URL` | Your real production origin (also settable via `NEXT_PUBLIC_SITE_URL`) |
| `SUPPORT_EMAIL` | Your real support inbox |
| `TWITTER_HANDLE` | Your real handle |

`APP_STORE_URL` already points at the live listing (App Store ID `6752206851`).
`SITE_URL` drives canonical URLs, the sitemap, robots, and absolute OpenGraph
image URLs, so it must be correct in production. The custom domain also lives in
[`public/CNAME`](public/CNAME).

## Pages

- `/` — home (hero before/after, tools, deep highlights, how-it-works, use
  cases, social proof, Pro teaser, companion apps, FAQ)
- `/features` + four tool pages: `retouch`, `restore`, `edit`, `erase`
- `/use-cases`, `/pricing`, `/faq`, `/about`, `/privacy`, `/contact`

## SEO

- Per-page `title`, `description`, canonical, OpenGraph, and Twitter metadata
  via the `buildMetadata` helper ([`app/lib/seo.ts`](app/lib/seo.ts))
- Dynamic OpenGraph/Twitter image ([`app/opengraph-image.tsx`](app/opengraph-image.tsx))
- JSON-LD structured data ([`app/lib/schema.ts`](app/lib/schema.ts)):
  Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList
- `robots.ts`, `sitemap.ts`, `manifest.ts`, and code-generated icons
  (`app/icon.svg`, `app/apple-icon.tsx`)
- One `<h1>` per page, semantic headings, descriptive alt text / aria labels

## Content

All marketing copy lives in [`app/lib/content.ts`](app/lib/content.ts), extracted
and expanded from `PRODUCT_STORY.md`. Edit it there and every page, sitemap
entry, and schema block stays in sync.

## Visuals

The site ships **no raster screenshots**. The signature before/after comparison
is a self-contained, interactive component
([`app/components/BeforeAfter.tsx`](app/components/BeforeAfter.tsx)) that layers
two illustrative SVG scenes ([`app/components/Scene.tsx`](app/components/Scene.tsx))
behind a draggable divider — demonstrating each tool's transformation with no
app-specific image assets. The brand mark is drawn in SVG
([`app/components/Logo.tsx`](app/components/Logo.tsx)), and favicon / touch icon
/ OpenGraph card are all generated from code.

Because the `sharp` optimizer isn't installed, `next.config.ts` sets
`images.unoptimized` (also required by static export).

## Design

Apple-quality dark theme with an aqua → blue → violet brand gradient, generous
whitespace, subtle motion, full responsiveness, and accessible focus states.
The site is dark-only by design — no light theme or toggle.
