/**
 * Marketing content for FxAI, extracted and expanded from PRODUCT_STORY.md.
 * Kept in one typed module so pages, schema, and internal links stay in sync.
 */

/* -------------------------------------------------------------------------- */
/*  Tool screenshots                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Keys identifying each tool's App Store screenshot. Every scene maps to one
 * marketing shot in components/AppShot.tsx.
 */
export type SceneKey = "retouch" | "restore" | "edit" | "erase";

/* -------------------------------------------------------------------------- */
/*  Core AI tools / feature pages                                             */
/* -------------------------------------------------------------------------- */

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

export const TOOLS: Tool[] = [
  {
    slug: "retouch",
    href: "/features/retouch",
    eyebrow: "Retouch",
    name: "AI Retouch",
    tab: "Retouch",
    tagline: "Beautify portraits and selfies in one tap",
    summary:
      "Smoother skin, balanced lighting, and studio-grade polish — automatically. Add a portrait, choose how strong you want the enhancement, and FxAI does the retouching for you in seconds.",
    scene: "retouch",
    action: "Retouch",
    optionsLabel: "Three enhancement levels",
    options: [
      { label: "Natural", blurb: "A subtle, true-to-life clean-up that keeps every feature yours." },
      { label: "Enhanced", blurb: "Noticeably brighter, smoother, and more polished.", badge: "Default" },
      { label: "Studio", blurb: "The strongest, most dramatic studio-shot finish." },
    ],
    keywords: [
      "AI photo enhancer",
      "AI portrait enhancer",
      "beautify photo app",
      "AI retouch iPhone",
    ],
  },
  {
    slug: "restore",
    href: "/features/restore",
    eyebrow: "Restore",
    name: "Photo Restore",
    tab: "Restore",
    tagline: "Bring old, blurry memories back to life",
    summary:
      "Repair and revive old, damaged, or low-quality pictures. Sharpen a blurry shot into HD, restore a degraded print, or add realistic color to a black-and-white photo — pick a mode and tap once.",
    scene: "restore",
    action: "Restore",
    optionsLabel: "Three restore modes",
    options: [
      { label: "Unblur", blurb: "Sharpen blurry photos into crisp HD clarity.", badge: "Default" },
      { label: "Restore", blurb: "Repair and improve old or degraded photos." },
      { label: "Colorize", blurb: "Add realistic color to black-and-white images." },
    ],
    keywords: [
      "photo restoration app",
      "unblur photo AI",
      "colorize black and white photo",
      "old photo repair app",
    ],
  },
  {
    slug: "edit",
    href: "/features/edit",
    eyebrow: "Edit",
    name: "AI Edit",
    tab: "Edit",
    tagline: "Change any photo just by describing it",
    summary:
      "Describe the change you want in plain language — “add a red hat”, “change the background to a beach” — and FxAI applies it. Keep refining step by step, attach reference photos, and generate variations until it's perfect.",
    scene: "edit",
    action: "Modify",
    keywords: [
      "AI photo editor",
      "edit photo with text",
      "change background AI",
      "generative AI photo editing",
    ],
  },
  {
    slug: "erase",
    href: "/features/erase",
    eyebrow: "Erase",
    name: "AI Erase",
    tab: "Erase",
    tagline: "Remove anything with a brush",
    summary:
      "Brush over an unwanted object, person, or blemish and FxAI fills the gap seamlessly. Pan and zoom to work precisely, undo any stroke, and export a clean, distraction-free photo.",
    scene: "erase",
    action: "Erase",
    keywords: [
      "object remover app",
      "remove object from photo",
      "AI eraser iPhone",
      "remove person from photo",
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Result & output features                                                  */
/* -------------------------------------------------------------------------- */

export type ResultFeature = {
  title: string;
  body: string;
  icon: "slider" | "layers" | "bolt" | "share" | "zoom" | "shield";
};

export const RESULT_FEATURES: ResultFeature[] = [
  {
    icon: "slider",
    title: "Before / after slider",
    body: "Every result opens on a draggable slider so the improvement is instantly, undeniably visible — compare the original and the enhanced side by side.",
  },
  {
    icon: "share",
    title: "Save & share instantly",
    body: "Send any result to your Photos library or straight to Messages, Instagram, or anywhere else through the native iOS share sheet.",
  },
  {
    icon: "zoom",
    title: "Zoom, pan & fit",
    body: "Pinch to zoom into fine detail, pan around the image, and switch between fit and fill to inspect the result exactly how you want.",
  },
  {
    icon: "bolt",
    title: "Fast, reassuring results",
    body: "A friendly “~10 seconds remaining” countdown keeps you comfortable while the AI works, and Pro adds priority processing for faster results.",
  },
];

/* -------------------------------------------------------------------------- */
/*  How it works                                                              */
/* -------------------------------------------------------------------------- */

export const HOW_IT_WORKS: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Add a photo",
    body: "Tap to open your photo library and pick an image. FxAI scales it to Full-HD automatically for fast, consistent processing.",
  },
  {
    step: "02",
    title: "Pick a tool & options",
    body: "Choose Retouch, Restore, Edit, or Erase — then set a strength level, a restore mode, type a prompt, or brush over what to remove.",
  },
  {
    step: "03",
    title: "Tap the button",
    body: "Hit Retouch, Restore, Modify, or lift your finger to erase. A quick “~10 seconds remaining” overlay reassures you while the AI runs.",
  },
  {
    step: "04",
    title: "Compare, save & share",
    body: "Review the result on the before/after slider, then save it to Photos or share it anywhere in a single tap.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Benefits & problems solved                                                */
/* -------------------------------------------------------------------------- */

export const BENEFITS: { title: string; body: string }[] = [
  {
    title: "No skills required",
    body: "Every tool is a single button. There are no layers, masks, or sliders to learn — you add a photo and tap once.",
  },
  {
    title: "Four tools in one app",
    body: "Retouch, restore, generative edit, and erase live under one simple interface, so you stop juggling separate apps.",
  },
  {
    title: "Visible improvement",
    body: "Results open on a before/after slider, so the value of every enhancement is obvious at a glance.",
  },
  {
    title: "Results in seconds",
    body: "AI processing returns an enhanced image in roughly ten seconds, with an on-screen countdown so you're never left guessing.",
  },
  {
    title: "Bring memories back",
    body: "Unblur, repair, and colorize old family photos — the emotional payoff FxAI is built around.",
  },
  {
    title: "Made for iPhone & iPad",
    body: "A polished, dark-themed interface that adapts cleanly from a phone in your hand to a larger iPad canvas.",
  },
];

export const PROBLEMS_SOLVED: string[] = [
  "“My selfie is fine but it could look so much better.”",
  "“This old family photo is blurry and I'd love to fix it.”",
  "“There's a photobomber ruining an otherwise perfect shot.”",
  "“I want to change something in a photo but Photoshop is overwhelming.”",
  "“I just want a great result fast, on my phone, ready to share.”",
];

/* -------------------------------------------------------------------------- */
/*  Use cases                                                                  */
/* -------------------------------------------------------------------------- */

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

export const USE_CASES: UseCase[] = [
  {
    slug: "perfect-selfies",
    title: "Selfies and portraits that look their best",
    audience: "Selfie & portrait takers",
    problem:
      "Your photo is good, but the lighting is flat and you'd love a more polished, studio-quality version without hiring a retoucher.",
    solution:
      "Open Retouch, pick Natural, Enhanced, or Studio strength, and FxAI smooths skin and balances lighting in one tap.",
    example:
      "Turn a quick phone selfie into a flattering, studio-lit portrait for your profile picture in about ten seconds.",
    feature: "AI Retouch",
    featureHref: "/features/retouch",
  },
  {
    slug: "restore-old-photos",
    title: "Restoring old and damaged family photos",
    audience: "Families & nostalgia seekers",
    problem:
      "You have precious old prints that are blurry, faded, or black-and-white, and no idea how to bring them back to life.",
    solution:
      "Use Restore to unblur, repair, or colorize the image — sharpening detail and adding realistic color automatically.",
    example:
      "Scan a grandparent's black-and-white photo, tap Colorize, and see it in lifelike color for the first time.",
    feature: "Photo Restore",
    featureHref: "/features/restore",
  },
  {
    slug: "social-content",
    title: "Scroll-stopping social media content",
    audience: "Creators & social media users",
    problem:
      "You need every post to look polished, but editing each photo in a pro app before it goes up takes far too long.",
    solution:
      "Retouch, edit, or clean up any shot in seconds, then share it straight to any app from the native share sheet.",
    example:
      "Retouch a photo, erase a distraction in the background, and post to your Story in under a minute.",
    feature: "AI Retouch",
    featureHref: "/features/retouch",
  },
  {
    slug: "remove-distractions",
    title: "Removing objects, people, and blemishes",
    audience: "Everyday photo editors",
    problem:
      "A photobomber, a stray sign, or a blemish is spoiling an otherwise great photo, and cutting it out by hand is fiddly.",
    solution:
      "Brush over whatever you want gone in Erase and FxAI fills the gap seamlessly, so the distraction simply disappears.",
    example:
      "Erase a stranger walking through your vacation shot and keep the scenery perfectly intact.",
    feature: "AI Erase",
    featureHref: "/features/erase",
  },
  {
    slug: "creative-edits",
    title: "Creative changes without Photoshop",
    audience: "Casual editors & the AI-curious",
    problem:
      "You want to change one thing — an outfit, the background, the season — but professional editors are intimidating.",
    solution:
      "Describe the change in plain English with AI Edit and FxAI applies it, then keep refining step by step until it's right.",
    example:
      "Upload a portrait and type “add sunglasses and change the background to a beach at sunset.”",
    feature: "AI Edit",
    featureHref: "/features/edit",
  },
  {
    slug: "pre-post-cleanup",
    title: "A quick clean-up before every post",
    audience: "Anyone with a camera roll",
    problem:
      "You take a lot of photos and wish each one looked a little more finished before it lands on a profile or in a chat.",
    solution:
      "Make FxAI the last stop before you post — a fast retouch, a quick erase, or a small edit turns a snapshot into a keeper.",
    example:
      "Give a group photo a light retouch and erase a background distraction before sending it to the family chat.",
    feature: "Photo Restore",
    featureHref: "/features/restore",
  },
];

/* -------------------------------------------------------------------------- */
/*  FxAI Pro                                                                   */
/* -------------------------------------------------------------------------- */

export const PRO_BENEFITS: { title: string; body: string }[] = [
  {
    title: "Unlimited generations",
    body: "Retouch, restore, edit, and erase as much as you like — no daily caps or usage meters.",
  },
  {
    title: "No ads, no watermarks",
    body: "Skip every ad break and export clean, watermark-free images to save or share.",
  },
  {
    title: "Priority processing",
    body: "Your generations jump to the front of the queue for faster, high-quality results.",
  },
  {
    title: "Every tool, fully unlocked",
    body: "All four AI tools at full strength, whenever inspiration strikes.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Companion apps (AI Journey ecosystem)                                     */
/* -------------------------------------------------------------------------- */

export const COMPANION_APPS: {
  name: string;
  what: string;
  emoji: string;
  href: string;
}[] = [
  { name: "Photix", what: "AI Image Generator", emoji: "🎨", href: "https://photix.app" },
  { name: "Videx", what: "AI Video Generator", emoji: "🎬", href: "https://videx.app" },
  { name: "SwapTo", what: "AI Face Swap", emoji: "🔄", href: "https://swapto.app" },
  { name: "PicAlive", what: "Photo to Video", emoji: "🫧", href: "https://picalive.app" },
];

/** The AI Photo Journey company hub that links to every app in the family. */
export const PORTFOLIO = {
  name: "AI Photo Journey",
  url: "https://ai-photo-journey.com",
  pageUrl: "https://ai-photo-journey.com/apps/fxai",
};

/* -------------------------------------------------------------------------- */
/*  Testimonials (illustrative, reflecting the app's stated 4.8 rating)       */
/* -------------------------------------------------------------------------- */

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "I colorized my grandmother's black-and-white wedding photo and the whole family teared up. It looks like it was taken yesterday.",
    name: "Elena M.",
    role: "Restoring family memories",
  },
  {
    quote:
      "One tap on Retouch and my selfies look like a studio shot. The before/after slider sells it every single time.",
    name: "Jordan P.",
    role: "Content creator",
  },
  {
    quote:
      "Erased a total stranger out of my favorite vacation photo in about five seconds. I can't believe it's this easy.",
    name: "Sam K.",
    role: "Everyday photographer",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export type Faq = { q: string; a: string };

export const FAQS: { category: string; items: Faq[] }[] = [
  {
    category: "Getting started",
    items: [
      {
        q: "What is FxAI?",
        a: "FxAI is an all-in-one AI photo enhancer for iPhone and iPad. It bundles four tools — Retouch, Restore, Edit, and Erase — into one simple app. You add a photo, tap a button, and get a professionally improved result in seconds, shown on a before/after slider.",
      },
      {
        q: "Do I need any photo-editing experience?",
        a: "No. FxAI is built for people with zero editing skill. There are no layers, masks, or sliders to learn — each tool is a single button. Pick a tool, add a photo, and tap once.",
      },
      {
        q: "Is FxAI free?",
        a: "Yes — FxAI is free to download and use. The free tier is ad-supported and adds a small watermark to saved images. FxAI Pro removes ads and watermarks, lifts usage limits, and adds priority processing.",
      },
      {
        q: "Which devices does FxAI support?",
        a: "FxAI runs on iPhone and iPad. The dark-themed interface adapts to larger screens, so you get a comfortable canvas on iPad as well as your phone.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. FxAI has no logins or accounts. You can start enhancing photos immediately, and your Pro status is stored on your device.",
      },
    ],
  },
  {
    category: "The tools",
    items: [
      {
        q: "How does AI Retouch work?",
        a: "Open the Retouch tab, add a portrait, and choose an enhancement level — Natural for a subtle clean-up, Enhanced for a noticeable improvement, or Studio for the strongest, most dramatic finish. Tap Retouch and FxAI smooths skin and balances lighting automatically.",
      },
      {
        q: "What can Restore do to an old photo?",
        a: "Restore offers three modes: Unblur sharpens blurry photos into HD clarity, Restore repairs old or degraded pictures, and Colorize adds realistic color to black-and-white images. Pick a mode, tap Restore, and compare the result on the slider.",
      },
      {
        q: "How does AI Edit work?",
        a: "In the Edit tab you add a photo and describe the change you want in plain English — for example “add a red hat” or “change the background to a beach”. FxAI applies it, and each edit builds on the last so you can refine step by step. You can attach reference photos and regenerate variations, too.",
      },
      {
        q: "How do I remove an object with Erase?",
        a: "Open Erase, add a photo, switch to Erase mode, and brush over the object, person, or blemish you want gone. FxAI fills the gap seamlessly. You can pan and zoom to work precisely and undo any stroke before saving.",
      },
    ],
  },
  {
    category: "FxAI Pro & billing",
    items: [
      {
        q: "What does FxAI Pro include?",
        a: "Pro unlocks unlimited generations across all four tools, removes ads and watermarks, and adds priority processing for faster results. It turns FxAI into unlimited, uninterrupted, watermark-free enhancement.",
      },
      {
        q: "How much does FxAI Pro cost?",
        a: "FxAI is free to download. Pro is an optional upgrade offered as a weekly plan and a quarterly “Best value” plan, both with a free-trial option. Prices are localized by the App Store and shown in the app before you subscribe.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. All plans are auto-renewing and can be cancelled anytime from your Apple ID subscription settings. FxAI also supports Restore Purchases to re-apply an active subscription on your device.",
      },
      {
        q: "Does my subscription sync across devices?",
        a: "Pro status is stored per device, so there's no cross-device account. You can use Restore Purchases to reactivate an existing subscription on the same device.",
      },
    ],
  },
  {
    category: "Privacy & safety",
    items: [
      {
        q: "Is FxAI private?",
        a: "FxAI asks for Apple's App Tracking Transparency permission before any ad or analytics tracking, and there are no user accounts to manage. Your Pro status stays on your device. See the Privacy page for a plain-language overview.",
      },
      {
        q: "Are there content-safety measures?",
        a: "Yes. In the Edit tool, prompts are screened and unsafe requests are blocked with a guidelines message before they're sent, helping keep the app appropriate for everyone.",
      },
      {
        q: "Will my saved images have a watermark?",
        a: "Images saved or shared on the free tier carry a small FxAI watermark. Upgrading to FxAI Pro removes the watermark from every image you export.",
      },
    ],
  },
];

/** Flattened FAQ list for FAQPage structured data. */
export const ALL_FAQS: Faq[] = FAQS.flatMap((group) => group.items);
