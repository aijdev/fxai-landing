/**
 * Central site configuration. Change these constants to point the marketing
 * site at the real production domain, App Store listing, and support inbox.
 */

// Production canonical origin (no trailing slash). Used for canonical URLs,
// sitemap, robots, and absolute OpenGraph image resolution.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://fxai.app";

export const SITE_NAME = "FxAI";
export const SITE_TAGLINE = "Your All-In-One AI Photo Enhancer";
export const SITE_DESCRIPTION =
  "FxAI is an all-in-one AI photo enhancer for iPhone and iPad. Retouch portraits, restore old photos, edit pictures by describing the change, and erase unwanted objects — one tap, no editing skills, results in seconds.";

// Live App Store listing for FxAI (App Store ID 6752206851).
export const APP_STORE_URL = "https://apps.apple.com/app/id6752206851";

export const SUPPORT_EMAIL = "support@fxai.app";

// Social-proof figures surfaced inside the app (kept in sync with PRODUCT_STORY).
export const RATING = "4.8";
export const USERS = "2M+";

export const TWITTER_HANDLE = "@fxaiapp";

export const ORG = {
  name: "FxAI",
  legalName: "FxAI — part of the AI Journey app family",
  logo: `${SITE_URL}/icon.svg`,
};

/** Primary navigation shown in the header and footer. */
export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAV: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/" },
      { label: "All Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "AI Retouch", href: "/features/retouch" },
      { label: "Photo Restore", href: "/features/restore" },
      { label: "AI Edit", href: "/features/edit" },
      { label: "AI Erase", href: "/features/erase" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
