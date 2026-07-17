/**
 * Marketing content for FxAI.
 *
 * This module now holds only the NON-translatable skeleton — slugs, hrefs,
 * scene keys, icons, emojis, and outbound URLs — plus `getContent(locale)`,
 * which zips that skeleton together with the translated strings from the i18n
 * dictionaries into the typed structures the pages and components consume.
 *
 * Internal `href`s stay root-relative here; components locale-prefix them at
 * render time via `localizedPath`.
 */

import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export type SceneKey = "retouch" | "restore" | "edit" | "erase";

export type ToolOption = {
  label: string;
  blurb: string;
  badge?: string;
};

export type Tool = {
  slug: string;
  href: string;
  eyebrow: string;
  name: string;
  tab: string;
  tagline: string;
  summary: string;
  scene: SceneKey;
  action: string;
  keywords: string[];
  optionsLabel?: string;
  options?: ToolOption[];
};

export type ResultFeature = {
  title: string;
  body: string;
  icon: "slider" | "layers" | "bolt" | "share" | "zoom" | "shield";
};

export type UseCase = {
  slug: string;
  title: string;
  audience: string;
  problem: string;
  solution: string;
  example: string;
  feature: string;
  featureHref: string;
};

export type Faq = { q: string; a: string };

export type CompanionApp = {
  name: string;
  what: string;
  emoji: string;
  href: string;
};

/* -------------------------------------------------------------------------- */
/*  Non-translatable skeleton                                                 */
/* -------------------------------------------------------------------------- */

export const TOOL_SLUGS = ["retouch", "restore", "edit", "erase"] as const;

const TOOL_SKELETON: { slug: string; href: string; scene: SceneKey }[] = [
  { slug: "retouch", href: "/features/retouch", scene: "retouch" },
  { slug: "restore", href: "/features/restore", scene: "restore" },
  { slug: "edit", href: "/features/edit", scene: "edit" },
  { slug: "erase", href: "/features/erase", scene: "erase" },
];

const RESULT_ICONS: ResultFeature["icon"][] = ["slider", "share", "zoom", "bolt"];

const HOW_STEPS = ["01", "02", "03", "04"];

const USE_CASE_SKELETON: { slug: string; featureHref: string }[] = [
  { slug: "perfect-selfies", featureHref: "/features/retouch" },
  { slug: "restore-old-photos", featureHref: "/features/restore" },
  { slug: "social-content", featureHref: "/features/retouch" },
  { slug: "remove-distractions", featureHref: "/features/erase" },
  { slug: "creative-edits", featureHref: "/features/edit" },
  { slug: "pre-post-cleanup", featureHref: "/features/restore" },
];

const COMPANION_SKELETON: { name: string; emoji: string; href: string }[] = [
  { name: "Photix", emoji: "🎨", href: "https://photix.app" },
  { name: "Videx", emoji: "🎬", href: "https://videx.app" },
  { name: "SwapTo", emoji: "🔄", href: "https://swapto.app" },
  { name: "PicAlive", emoji: "🫧", href: "https://picalive.app" },
];

/** The AI Photo Journey company hub that links to every app in the family. */
export const PORTFOLIO = {
  name: "AI Photo Journey",
  url: "https://ai-photo-journey.com",
  pageUrl: "https://ai-photo-journey.com/apps/fxai",
};

/* -------------------------------------------------------------------------- */
/*  Localized content assembly                                                */
/* -------------------------------------------------------------------------- */

export type SiteContent = {
  tools: Tool[];
  resultFeatures: ResultFeature[];
  howItWorks: { step: string; title: string; body: string }[];
  benefits: { title: string; body: string }[];
  problemsSolved: string[];
  useCases: UseCase[];
  proBenefits: { title: string; body: string }[];
  companionApps: CompanionApp[];
  testimonials: { quote: string; name: string; role: string }[];
  faqs: { category: string; items: Faq[] }[];
  allFaqs: Faq[];
};

export function getContent(locale: Locale): SiteContent {
  const c = getDictionary(locale).content;

  const tools: Tool[] = TOOL_SKELETON.map((s, i) => ({
    ...s,
    ...c.tools[i],
  }));

  const faqs = c.faqs.map((g) => ({ category: g.category, items: [...g.items] }));

  return {
    tools,
    resultFeatures: c.resultFeatures.map((f, i) => ({
      icon: RESULT_ICONS[i],
      ...f,
    })),
    howItWorks: c.howItWorks.map((h, i) => ({ step: HOW_STEPS[i], ...h })),
    benefits: [...c.benefits],
    problemsSolved: [...c.problemsSolved],
    useCases: USE_CASE_SKELETON.map((s, i) => ({ ...s, ...c.useCases[i] })),
    proBenefits: [...c.proBenefits],
    companionApps: COMPANION_SKELETON.map((s, i) => ({
      ...s,
      what: c.companionApps[i].what,
    })),
    testimonials: [...c.testimonials],
    faqs,
    allFaqs: faqs.flatMap((g) => g.items),
  };
}

export function getTool(slug: string, locale: Locale): Tool | undefined {
  return getContent(locale).tools.find((t) => t.slug === slug);
}
