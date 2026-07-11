# FxAI — Product Story

> **"Your All-In-One AI Photo Enhancer."**
> A single source of truth describing what FxAI is, what it does, and why it exists — written from the end user's perspective.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Vision & Main Idea](#2-vision--main-idea)
3. [Core Functionality](#3-core-functionality)
4. [Features](#4-features)
5. [User Journey](#5-user-journey)
6. [Target Audience](#6-target-audience)
7. [User Roles & Permissions](#7-user-roles--permissions)
8. [Key Workflows](#8-key-workflows)
9. [Product Strengths](#9-product-strengths)
10. [Missing or Incomplete Features](#10-missing-or-incomplete-features)
11. [Executive Summary](#11-executive-summary)

---

## 1. Project Overview

**FxAI** is a consumer **AI photo-enhancement app for iPhone and iPad**. It lets anyone take an ordinary photo — a selfie, a portrait, an old family picture, a snapshot with an unwanted object — and transform it into a polished, high-quality image using artificial intelligence, without any technical skill or manual editing.

The product bundles what would normally require several separate professional tools (a retoucher, a photo restorer, a generative editor, and an object-removal tool) into **one simple, tab-based app**. Users pick a tool, add a photo, tap a button, and receive a professionally improved result in seconds. Every result is presented with a **before/after comparison slider** so the improvement is immediately visible.

| Attribute | Detail |
|---|---|
| **Product name** | FxAI |
| **Positioning** | All-in-one AI photo enhancer |
| **Platform** | iOS (iPhone and iPad); dark-mode interface |
| **App Store ID** | `id6752206851` |
| **Internal codename** | `hdai` (URL scheme `hdai://`) |
| **Version analyzed** | 2.37 |
| **Publisher** | AI Journey ("AIJ") — part of a family of AI creativity apps |
| **Business model** | Freemium — free with ads + auto-renewing Pro subscription |

FxAI is one app in a larger portfolio of AI creativity apps by the same publisher. The others — **PicAlive** (photos → videos), **Photix** (AI image generator), **Videx** (AI video generator), and **SwapTo** (AI face swap) — are promoted inside FxAI through a dedicated "AI Tools" tab and cross-promotion banners.

**The problem it solves:** high-quality photo editing has traditionally required expensive desktop software (Photoshop, Lightroom), real skill, and time. FxAI removes all three barriers, delivering studio-grade results through one-tap AI on a phone.

---

## 2. Vision & Main Idea

### Mission
Make professional-quality photo enhancement **effortless and instant** for everyday people. The user should never need to understand layers, masks, sliders, or prompts to get a stunning result — they add a photo and tap once.

### The Main Idea
FxAI is built on a simple promise repeated throughout the onboarding and paywall: **Unlimited • Fast • Ad-free** results powered by AI. The app consolidates multiple AI photo capabilities behind a friendly, unified interface so users have a single destination for "make my photo better."

### Value delivered to users

| Value | How FxAI delivers it |
|---|---|
| **Instant results** | AI processing returns an enhanced image in roughly ten seconds, with an on-screen countdown. |
| **No skill required** | Each tool is a single button; no manual editing controls to learn. |
| **Visible improvement** | Every result opens in a before/after slider so the value is undeniable. |
| **Breadth in one place** | Retouch, restore, generative edit, and erase — all in one app. |
| **Emotional payoff** | Restoring old/blurry memories and perfecting portraits are emotionally resonant use cases the app leans into. |

### Business goals (inferred from the implementation)
The product is clearly engineered around **conversion and monetization**. Onboarding funnels into a paywall, free usage is metered and interrupted by ad offers, outputs are watermarked until the user subscribes, and a rich set of analytics, attribution, and A/B-testing tools track every step. The stated internal benchmark in the project notes is a **trial-to-paid conversion target of 20%**.

---

## 3. Core Functionality

FxAI's home experience is a **five-tab layout**. Four tabs are working AI tools; the fifth promotes the publisher's other apps.

| Tab | Icon | What the user does |
|---|---|---|
| **Retouch** | Smiling face | Enhance and beautify a portrait with AI, choosing an intensity level. |
| **Restore** | Person in frame | Repair old, blurry, or black-and-white photos (unblur, restore, colorize). |
| **Edit** | Paintbrush | Describe a change in plain language and let AI apply it; refine iteratively. |
| **Erase** | Eraser | Brush over an unwanted object or person to remove it seamlessly. |
| **AI Tools** | Sparkles | Discover the publisher's other AI apps. |

### The universal interaction pattern
Every tool follows the same predictable flow, which is the heart of the product experience:

1. **Add a photo** — tap the placeholder to open the iOS photo picker. The selected image is automatically scaled to Full-HD for fast, consistent processing.
2. **Choose options** — pick a strength level, a restoration mode, or type a prompt, depending on the tool.
3. **Tap the action button** — "Retouch," "Restore," "Modify," or erase-on-release.
4. **Wait briefly** — a "Generation in progress • ~10 sec remaining" overlay reassures the user.
5. **Review the result** — the app opens a **Result screen** with a draggable before/after slider.
6. **Save or share** — download to the Photos library or share to any app.

This consistency means that once a user learns one tool, they instantly know how to use all of them.

---

## 4. Features

### 4.1 AI Photo Tools (Primary Value)

#### Retouch — AI Portrait Enhancement
Improves portraits and selfies: smoother skin, better lighting, and overall polish. The user selects one of three intensity levels:

| Level | Intended effect |
|---|---|
| **Natural** | Subtle, realistic enhancement. |
| **Enhanced** | Noticeable improvement (default). |
| **Studio** | Strongest, most dramatic "studio-shot" look. |

#### Restore — Old & Damaged Photo Repair
Brings old or low-quality photos back to life. The user chooses one of three mutually exclusive modes:

| Mode | What it does |
|---|---|
| **Unblur** | Sharpens blurry photos into HD clarity (default). |
| **Restore** | Repairs and improves old or degraded photos. |
| **Colorize** | Adds realistic color to black-and-white images. |

This tool is positioned emotionally around *"Bring Old Memories Back to Life."*

#### Edit — Generative AI Editing (Text-Prompted)
The most powerful and flexible tool. The user adds a photo (or several reference photos) and **describes the change they want in plain English** — e.g. *"Add a red hat," "change the background to a beach."* AI applies the edit. Notable capabilities:

- **Natural-language editing** — no controls, just a description.
- **Reference images** — attach one or more photos to guide the edit.
- **Prompt enhancement toggle** — optionally let the app auto-optimize the wording of the prompt for better results.
- **Iterative, multi-step editing** — each result can be edited again, building a chain of refinements. The app remembers the cumulative history of instructions.
- **Regenerate & variants** — request alternative versions of a result and swipe back and forth between them to pick the best.
- **Content safety** — prompts are screened; unsafe requests are blocked with a guideline message.

#### Erase — Object & Blemish Removal
Removes unwanted objects, people, or blemishes. The user **brushes over the area** to remove directly on the image (a paint-style mask), and AI fills in the gap seamlessly. Supporting controls:

- **Move / Erase toggle** — switch between panning/zooming the photo and painting the erase mask.
- **Undo / Revert** — step back through the erase history.
- **Save** — export the cleaned-up result.

#### Filter Recipes — One-Tap Style Presets *(built but not currently reachable — see §10)*
A gallery of curated, one-tap AI transformations for portraits, organized into themed collections. Each "recipe" is a preset prompt applied to the user's photo. The catalog shipped in the app contains:

| Collection | Example presets | Count |
|---|---|---|
| **Makeup** | Pro Makeup, Nymph Makeup, Dragon Glam, Neon Pop, Celestial Glow, Hollywood Sparkle | 10 |
| **Hairstyles** | Boho Layers, Barbie Glam, Glam Waves, Victory Rolls, Fantasy Braids, Hyper Bob | 19 |
| **Decades Portrait** | 1950s Pin-Up, 1960s Mod, 1980s Glam, 2000s Aesthetic, 1930s Glamour | 9 |

The underlying screen ("Avatar Generate") lets a user pick a photo, applies the preset prompt, and returns a styled portrait — but this gallery is not wired into the current tab navigation (see [Missing or Incomplete Features](#10-missing-or-incomplete-features)).

### 4.2 Result & Output Features

| Feature | Description |
|---|---|
| **Before/After slider** | Drag a divider left/right to compare original and enhanced images side by side. |
| **Fit / Fill toggle** | Switch how the compared images are framed. |
| **Zoom & pan** | Pinch-to-zoom on results and inputs to inspect detail. |
| **Save to Photos** | One-tap download into the device photo library. |
| **Share** | Share the result to any app via the native share sheet. |
| **Watermark gating** | Free users' saved/shared images carry a watermark; Pro users get clean images. |

### 4.3 Onboarding & Social Proof

- **Guided welcome flow** — five animated feature pages (with before/after previews) introduce the core tools: All-in-one enhancer, AI Face Editor, Unblur Photo, Restore Photo, Remove Objects.
- **Social proof** — a "4.8★ / Join 2M+ happy users" badge, five-star review cards, and testimonial content are shown during onboarding and on paywalls to build trust. *(These testimonials and stats are built-in marketing content, not live user data.)*
- **Onboarding paywall** — the flow concludes on a subscription screen (see §4.4).

### 4.4 Monetization Features

FxAI is **freemium**. Core capabilities are usable for free but are metered, ad-supported, and watermarked; a **Pro subscription** removes all limits.

**Pro subscription benefits (as advertised in-app):**
- Unlimited AI generations
- Fast, high-quality results
- Priority processing
- **No ads and no watermarks**

**Subscription products offered** (loaded by the app):

| Product | Billing | Configured price* | Intro offer* |
|---|---|---|---|
| Weekly Access | Weekly | $2.99/week | First week $1.99 (pay-as-you-go) |
| Weekly (Trial Special) | Weekly | $2.99/week | 3-day free trial |
| Quarterly Access | Every 3 months | $19.99/quarter | 3-day free trial — labeled **"BEST VALUE"** |

<sub>*Prices and intro offers come from the bundled StoreKit test configuration and are illustrative; live App Store pricing may differ. The store config also defines semi-annual and higher-priced weekly variants that the app does not currently load.*</sub>

**Monetization surfaces & mechanics:**

| Surface | When it appears |
|---|---|
| **PRO button** | Persistent crown button in the top bar for non-subscribers. |
| **Onboarding paywall** | End of the welcome flow, quarterly plan pre-selected. |
| **Launch paywall** | Shortly after app launch for returning free users who have generated before. |
| **"We hate ads too" offer** | Before running a generation, free users are offered to go ad-free (subscribe) or watch a rewarded ad to continue. |
| **Special Offer dialog** | A "Try PRO for Free / Special Offer" popup with a gift animation. |
| **Hard lock** | Free users who exhaust free uses (or whose subscription has expired) are routed straight to the paywall. |
| **Watermark** | Applied to every free output on save/share, nudging toward Pro. |
| **Ads** | Google AdMob interstitial and rewarded video ads for free users. |
| **Restore Purchases** | Available from paywall menus for users reinstalling or switching devices. |

### 4.5 Feedback, Ratings & Retention

- **Post-result feedback dialog** — after producing results, users are asked *"Happy with the result?"*
  - **👍 Love it** → triggers a native **App Store rating** request; repeat happy users may instead see a special subscription offer.
  - **👎 Not really** → opens a text box to send written feedback via email to the support address.
- **Rate Us flow** — a dedicated screen encourages an App Store review, with a "Thank you!" confirmation.

### 4.6 Discovery / Cross-Promotion

- **AI Tools tab** — an animated gallery promoting the publisher's sibling apps (PicAlive, Photix, Videx, SwapTo). Tapping an app deep-links to it if installed, or opens its App Store page.
- **Cross-promo banner** — appears on the Result screen to drive installs of a randomly selected sibling app.

### 4.7 Trust, Safety & Compliance

| Feature | Purpose |
|---|---|
| **Content moderation** | Unsafe prompts/content are rejected with a "violates our guidelines" message. |
| **App Tracking Transparency** | The iOS tracking-permission prompt is requested before ad/analytics tracking. |
| **Privacy Policy & Terms** | Linked from paywalls and offer dialogs. |
| **"Update required" handling** | If the backend requires a newer version, users are prompted to update from the App Store. |
| **Cancel-anytime messaging** | Paywalls clearly state "Cancel anytime, auto-renews." |

---

## 5. User Journey

### Stage 1 — First Launch & Onboarding
A new user opens FxAI and is greeted by an animated welcome sequence. Five swipeable pages showcase the tools with dramatic before/after imagery and confident copy ("Turn Blurry Shots into HD Clarity," "Erase Anything in One Tap"). Social proof — a 4.8-star rating and "2M+ happy users" — builds confidence. The flow ends on a **paywall** offering a free trial, with the quarterly "Best Value" plan pre-selected. The user can subscribe/start a trial, or dismiss to continue for free.

### Stage 2 — First Enhancement
Landing on the home screen, the user sees five tabs. They pick **Retouch**, tap to add a selfie from their library, choose "Enhanced," and tap **Retouch**. A ten-second progress overlay appears, then the **Result screen** reveals the improvement via a before/after slider. The "aha moment" lands: their photo genuinely looks better.

### Stage 3 — Saving & the First Nudge
The user taps **Save**. As a free user, the downloaded image includes a watermark. Around this point the app asks *"Happy with the result?"* — a 👍 prompts an App Store review. Continuing to use tools, the user hits the **"We hate ads too"** offer: subscribe to go ad-free, or watch a short rewarded ad to keep going for free.

### Stage 4 — Exploring the Toolset
The user tries the other tools — restoring a blurry childhood photo (emotional payoff), erasing a photobomber from a vacation shot, and using **Edit** to type *"add sunglasses."* With Edit they discover they can keep refining the same image step by step and generate alternative variants. Breadth and depth become apparent.

### Stage 5 — Conversion
Free usage is deliberately metered. As the user runs more generations, watermarks, ad offers, and periodic paywalls accumulate friction. Eventually a **hard lock** or a compelling **special offer** ("Try PRO for Free") converts them. Now Pro: **unlimited, fast, ad-free, watermark-free** editing.

### Stage 6 — Everyday Use & Retention
The subscribed user integrates FxAI into their routine — cleaning up every photo before posting, restoring family archives, experimenting with generative edits. Rating prompts and feedback dialogs keep engagement high, while the AI Tools tab and cross-promo banners invite them deeper into the publisher's ecosystem.

---

## 6. Target Audience

FxAI targets a **broad, mainstream consumer audience** rather than professional photographers or designers. The one-tap, no-skill design and emotionally framed marketing point to several core groups:

| Audience | Problem FxAI solves for them |
|---|---|
| **Everyday smartphone users** | Want better-looking photos without learning editing software. |
| **Selfie & portrait takers** | Want flattering, "studio-quality" portraits instantly. |
| **Social media users & content creators** | Need a fast, repeatable way to polish every post. |
| **Families & nostalgia seekers** | Want to restore, unblur, and colorize old or damaged memories. |
| **Casual editors** | Want to remove objects/people or make quick creative changes without Photoshop. |

**Common thread:** people who value **speed and simplicity over control**, and who are willing to pay a subscription for consistent, effortless, high-quality results. The recurring "Better Than Photoshop / no learning curve" messaging directly targets those intimidated by traditional editing tools.

---

## 7. User Roles & Permissions

FxAI has **no accounts, logins, or multi-user roles**. There is no admin, manager, or collaborator concept — it is a single-user, on-device app. The only meaningful distinction is **entitlement tier**, determined entirely by App Store subscription status:

| Tier | How you get here | What you can do |
|---|---|---|
| **Free user** | Default state. | Use all core tools, but metered: sees ads, watermarked outputs, ad-offer interruptions, and periodic paywalls. Access can be "hard-locked" to the paywall after enough free use. |
| **Pro subscriber** | Active auto-renewing subscription. | **Unlimited** generations, **no ads**, **no watermarks**, priority processing, clean save/share. |
| **Lapsed subscriber** | Previously subscribed, now expired. | Treated more strictly than a fresh free user — generations route straight to the paywall (hard lock) to encourage resubscription. |

Entitlement is synced with the App Store on launch and after each transaction, and can be recovered via **Restore Purchases**.

---

## 8. Key Workflows

### 8.1 Onboarding → First Value
`Launch → Welcome pages (×5) → Paywall (trial offer) → Home → pick tool → add photo → generate → Result`

### 8.2 Retouch a Portrait
`Retouch tab → add photo → choose Natural / Enhanced / Studio → tap Retouch → (ad offer if free) → Result → Save/Share`

### 8.3 Restore an Old Photo
`Restore tab → add photo → choose Unblur / Restore / Colorize → tap Restore → Result (before/after) → Save/Share`

### 8.4 Generative Edit (Iterative)
`Edit tab → add reference photo(s) → type prompt (optionally enable prompt-enhance) → Modify → Result → (Regenerate variants / edit again) → Save`

### 8.5 Erase an Object
`Erase tab → add photo → switch to Erase mode → brush over object → AI removes it → (repeat / Revert) → Save`

### 8.6 Free-User Generation Gate
`Tap generate → not subscribed? → [expired sub → paywall] OR [free quota → "We hate ads too" offer → subscribe OR watch rewarded ad] → generate`

### 8.7 Subscribe to Pro
`Any paywall/offer → select plan → App Store purchase sheet → confirm → entitlement synced → ads & watermarks removed`

### 8.8 Feedback & Rating
`Finish result → "Happy with the result?" → 👍 App Store review request  /  👎 written feedback via email`

### 8.9 Save / Share Output
`Result screen → Save (to Photos, watermarked if free) or Share (native share sheet)`

---

## 9. Product Strengths

- **True all-in-one breadth** — retouch, restore, generative edit, and erase in one app, so users don't juggle multiple tools.
- **Radically simple UX** — a single consistent "add photo → tap → result" pattern across every tool; effectively zero learning curve.
- **Persuasive proof of value** — the before/after slider makes every result's improvement instantly, viscerally obvious.
- **Powerful generative editing** — plain-language edits, reference images, iterative multi-step refinement, and variant regeneration rival far more complex desktop tools.
- **Emotionally resonant use cases** — restoring and colorizing old memories creates strong personal attachment and word-of-mouth potential.
- **Polished, cohesive design** — a consistent dark theme, smooth animations, and reassuring progress feedback make the app feel premium.
- **Highly optimized monetization funnel** — layered paywalls, trials, ad-or-subscribe offers, watermark gating, and A/B-tested messaging form a mature, conversion-focused revenue engine.
- **Ecosystem leverage** — cross-promotion turns each app in the publisher's family into a growth channel for the others.
- **iPad support** — layouts adapt for larger screens, widening the addressable audience.

### Differentiators / Unique Value Proposition
FxAI's edge is **consolidation plus simplicity**: it packages several distinct AI photo capabilities behind one dead-simple interface, targeting users who are intimidated by professional editors but still want professional-looking results — delivered in seconds, on their phone.

---

## 10. Missing or Incomplete Features

The following were identified from the implementation. Items are flagged as **confirmed** (clear from the code/assets) or **inferred**.

| Area | Observation | Status |
|---|---|---|
| **Filter Recipes gallery** | A full catalog of one-tap style presets (Makeup ×10, Hairstyles ×19, Decades Portrait ×9) plus its browsing screen and image assets are fully built, but the gallery is **not attached to the home tab bar** — so users currently have **no way to reach it**. The destination it feeds ("Avatar Generate") is wired up, yet nothing in the live navigation opens the gallery. This looks like a substantial, ready-but-unreleased feature. | **Confirmed — dormant** |
| **Face detection on portrait styling** | The style/avatar screen contains disabled face-detection logic (and a "Face not detected" error) that is commented out. Intended face validation appears planned but is currently inactive. | **Confirmed — disabled** |
| **Unused error/state paths** | A "Face not detected" error case and separate stand-alone unblur/colorize backend calls exist but aren't exercised by the current UI (restore uses a combined mode instead). | **Confirmed — unused** |
| **Branding inconsistency** | The "update required" message tells users to update **"Pixary"**, and one support email domain differs from the app's other domains — leftover strings from a shared template rather than FxAI-specific copy. | **Confirmed — cosmetic bug** |
| **Testimonials are static** | On-screen reviews, the "4.8★," and "2M+ happy users" figures are hard-coded marketing content, not live data. Not a defect, but worth noting they don't reflect real-time metrics. | **Confirmed** |
| **No account / cloud sync / history** | There is no user account, no saved edit history or project gallery inside the app, and no cross-device sync. Past results are not retained beyond the current session (aside from what the user manually saves to Photos). | **Confirmed — by design, but a gap vs. competitors** |
| **Limited in-tool guidance** | Beyond onboarding, there is little in-app help, examples, or prompt suggestions for the generative Edit tool, which may leave some users unsure what to type. | **Inferred** |
| **Ad experience depends on fill** | Rewarded-ad flows fall back to interstitials on failure; a poor ad-fill environment could degrade the free experience. | **Inferred** |

---

## 11. Executive Summary

**FxAI** is an all-in-one AI photo-enhancement app for iPhone and iPad that lets anyone turn an ordinary photo into a polished, professional-looking image with a single tap. It brings together four AI tools under one simple, consistent interface: **Retouch** (beautify portraits at Natural/Enhanced/Studio strength), **Restore** (unblur, repair, and colorize old photos), **Edit** (change a photo just by describing what you want, with iterative refinement and variants), and **Erase** (brush away unwanted objects). Every result is shown through a before/after slider that makes the improvement instantly obvious, and can be saved to the photo library or shared anywhere. The entire product is designed so that users need no editing skill whatsoever — they add a photo, tap a button, and get a great result in about ten seconds.

FxAI runs on a **freemium model**. Anyone can use the tools for free, but the free tier is deliberately metered — outputs are watermarked, ads and "go ad-free" offers appear between generations, and periodic paywalls nudge users toward **Pro**, an auto-renewing subscription (weekly or quarterly, with free-trial and discounted intro offers) that unlocks unlimited, fast, ad-free, watermark-free editing. The app is wrapped in a mature growth-and-conversion engine: an onboarding funnel that ends on a paywall, social-proof messaging, post-result rating and feedback prompts, cross-promotion of the publisher's sibling apps (PicAlive, Photix, Videx, SwapTo), and extensive analytics, attribution, and A/B testing — all oriented around a stated trial-to-paid conversion goal.

Its core strength is **consolidation plus simplicity**: it replaces several intimidating professional tools with one friendly app aimed at mainstream users who want great-looking photos without the learning curve of Photoshop. The most notable gap is a **fully built but currently unreachable "Filter Recipes" gallery** (dozens of one-tap makeup, hairstyle, and decade-themed portrait styles) that could meaningfully expand the app's creative appeal once connected to the interface, alongside some minor leftover branding inconsistencies and the absence of accounts, saved history, or cross-device sync. In short, FxAI is a polished, monetization-savvy AI photo enhancer that delivers real, visible value to everyday users — with clear headroom to grow through features that are already partly built.
