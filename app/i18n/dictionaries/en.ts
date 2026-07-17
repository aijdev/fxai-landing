/**
 * English dictionary — the authoritative source of all translatable copy for
 * FxAI, and the TYPE source of truth: `type Dictionary = typeof en`. Every other
 * locale must satisfy `Dictionary`, so a missing or misspelled key fails the
 * build.
 *
 * Structural, non-translatable data (slugs, hrefs, scenes, icons, emojis,
 * accent colors) lives in `lib/content.ts`; `getContent(locale)` zips the two
 * together into the typed structures the components already consume. Internal
 * links stay root-relative here and are locale-prefixed at render time.
 */

export const en = {
  /* ---- Per-page SEO metadata --------------------------------------------- */
  meta: {
    home: {
      title: "FxAI — All-In-One AI Photo Enhancer for iPhone & iPad",
      description:
        "Retouch portraits, restore old photos, edit pictures by describing the change, and erase unwanted objects — all in one iOS app. Download FxAI free and see the before/after in seconds.",
      keywords: [
        "AI photo enhancer app",
        "AI photo editor iPhone",
        "photo restoration app",
        "unblur photo app",
        "object remover app",
      ],
    },
    features: {
      title: "Features — Retouch, Restore, Edit & Erase Photos with AI",
      description:
        "Explore every FxAI tool: one-tap portrait retouching, old-photo restoration (unblur, restore, colorize), describe-to-edit generative editing, and brush-to-remove object erasing — with a before/after slider on every result.",
      keywords: [
        "AI photo enhancer features",
        "AI photo editor features",
        "photo restoration app",
        "object remover app",
      ],
    },
    retouch: {
      title: "AI Retouch — One-Tap Portrait Enhancer for iPhone",
      description:
        "FxAI's AI Retouch beautifies portraits and selfies in one tap — smoother skin, balanced lighting, and studio-grade polish at Natural, Enhanced, or Studio strength. No editing skills required.",
    },
    restore: {
      title: "Photo Restore — Unblur, Repair & Colorize Old Photos",
      description:
        "FxAI's Photo Restore brings old, blurry, and black-and-white pictures back to life. Unblur soft shots into HD, repair degraded prints, and colorize black-and-white images — one tap, no skills.",
    },
    edit: {
      title: "AI Edit — Edit Photos by Describing the Change",
      description:
        "FxAI's AI Edit lets you edit any photo in plain language. Add objects, change outfits, swap backgrounds, and restyle step by step — with reference photos, variations, and prompt enhancement. No layers or masks.",
    },
    erase: {
      title: "AI Erase — Remove Objects & People From Photos",
      description:
        "FxAI's AI Erase removes unwanted objects, people, and blemishes from your photos. Brush over what you want gone and AI fills the gap seamlessly — pan, zoom, and undo for precise, clean results.",
    },
    faq: {
      title: "Frequently Asked Questions",
      description:
        "Answers to common questions about FxAI — how Retouch, Restore, Edit, and Erase work, FxAI Pro, privacy and safety, and getting started on iPhone and iPad.",
      keywords: ["FxAI FAQ", "AI photo enhancer help", "FxAI Pro questions"],
    },
    useCases: {
      title: "Use Cases — What You Can Do With FxAI",
      description:
        "Real-world ways people use FxAI: perfecting selfies, restoring old family photos, polishing social media content, erasing distractions, and making creative edits — all without Photoshop.",
      keywords: [
        "AI photo enhancer use cases",
        "restore old photos app",
        "AI photo editing ideas",
        "remove object from photo",
      ],
    },
    about: {
      title: "About FxAI — Effortless AI Photo Enhancement",
      description:
        "FxAI makes professional-quality photo enhancement effortless for everyone. Learn about our mission, who FxAI is for, and the AI Journey family of creativity apps behind it.",
      keywords: ["about FxAI", "AI Journey apps", "AI photo enhancer maker"],
    },
    contact: {
      title: "Contact FxAI — Support & Feedback",
      description:
        "Get in touch with the FxAI team. Email support, share feedback, or rate FxAI on the App Store. We route happy reviews to the App Store and questions straight to our inbox.",
      keywords: ["FxAI support", "FxAI contact", "FxAI feedback"],
    },
    restorationGuide: {
      title: "How to Restore Old Photos on iPhone — A Simple Guide",
      description:
        "Learn how to restore old photos on your iPhone: capture the print properly, repair damage and blur with AI, colorize black-and-white pictures, and save a clean digital copy — all in minutes with FxAI, no editing skills needed.",
      keywords: [
        "how to restore old photos",
        "restore old photos iPhone",
        "fix old photos app",
        "colorize black and white photos",
        "repair damaged photo",
      ],
    },
  },

  /* ---- Shared UI chrome --------------------------------------------------- */
  common: {
    skipToContent: "Skip to content",
    appStoreDownloadOn: "Download on the",
    appStoreName: "App Store",
    appStoreAria: "Download {name} on the App Store",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    homeAria: "{name} home",
    nav: {
      features: "Features",
      useCases: "Use Cases",
      faq: "FAQ",
      about: "About",
    },
    footer: {
      tagline:
        "FxAI — your all-in-one ai photo enhancer. Retouch, restore, edit, and erase photos with AI on iPhone and iPad.",
      productTitle: "Product",
      toolsTitle: "Tools",
      companyTitle: "Company",
      moreFrom: "More from AI Photo Journey",
      portfolioLabel: "Portfolio",
      rights: "All rights reserved.",
      links: {
        overview: "Overview",
        allFeatures: "All Features",
        useCases: "Use Cases",
        restorationGuide: "Restoration Guide",
        aiRetouch: "AI Retouch",
        photoRestore: "Photo Restore",
        aiEdit: "AI Edit",
        aiErase: "AI Erase",
        about: "About",
        faq: "FAQ",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
      },
    },
    ctaDefault: {
      title: "Enhance your first photo in seconds",
      description:
        "Download FxAI free and turn any photo into a polished, share-ready image today. No account, no editing skills — just tap.",
    },
    ctaRatedBy: "Rated {rating} by {users} happy users",
    relatedFeatures: {
      eyebrow: "Keep exploring",
      title: "More FxAI tools",
      description:
        "Four professional-grade tools, one simple app. See what else your photos can become.",
    },
    companion: {
      partOfPre: "Part of",
      partOfPost: "— a family of AI creativity apps for iPhone and iPad.",
    },
    breadcrumbHome: "Home",
    learnMore: "Learn more",
    explore: "Explore",
    useCaseProblemLabel: "The problem — ",
    useCaseSolutionLabel: "With FxAI — ",
  },

  /* ---- Structured content (zipped with skeleton in content.ts) ----------- */
  content: {
    tools: [
      {
        eyebrow: "Retouch",
        name: "AI Retouch",
        tab: "Retouch",
        tagline: "Beautify portraits and selfies in one tap",
        summary:
          "Smoother skin, balanced lighting, and studio-grade polish — automatically. Add a portrait, choose how strong you want the enhancement, and FxAI does the retouching for you in seconds.",
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
        eyebrow: "Restore",
        name: "Photo Restore",
        tab: "Restore",
        tagline: "Bring old, blurry memories back to life",
        summary:
          "Repair and revive old, damaged, or low-quality pictures. Sharpen a blurry shot into HD, restore a degraded print, or add realistic color to a black-and-white photo — pick a mode and tap once.",
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
        eyebrow: "Edit",
        name: "AI Edit",
        tab: "Edit",
        tagline: "Change any photo just by describing it",
        summary:
          "Describe the change you want in plain language — “add a red hat”, “change the background to a beach” — and FxAI applies it. Keep refining step by step, attach reference photos, and generate variations until it's perfect.",
        action: "Modify",
        keywords: [
          "AI photo editor",
          "edit photo with text",
          "change background AI",
          "generative AI photo editing",
        ],
      },
      {
        eyebrow: "Erase",
        name: "AI Erase",
        tab: "Erase",
        tagline: "Remove anything with a brush",
        summary:
          "Brush over an unwanted object, person, or blemish and FxAI fills the gap seamlessly. Pan and zoom to work precisely, undo any stroke, and export a clean, distraction-free photo.",
        action: "Erase",
        keywords: [
          "object remover app",
          "remove object from photo",
          "AI eraser iPhone",
          "remove person from photo",
        ],
      },
    ],
    resultFeatures: [
      {
        title: "Before / after slider",
        body: "Every result opens on a draggable slider so the improvement is instantly, undeniably visible — compare the original and the enhanced side by side.",
      },
      {
        title: "Save & share instantly",
        body: "Send any result to your Photos library or straight to Messages, Instagram, or anywhere else through the native iOS share sheet.",
      },
      {
        title: "Zoom, pan & fit",
        body: "Pinch to zoom into fine detail, pan around the image, and switch between fit and fill to inspect the result exactly how you want.",
      },
      {
        title: "Fast, reassuring results",
        body: "A friendly “~10 seconds remaining” countdown keeps you comfortable while the AI works, and Pro adds priority processing for faster results.",
      },
    ],
    howItWorks: [
      {
        title: "Add a photo",
        body: "Tap to open your photo library and pick an image. FxAI scales it to Full-HD automatically for fast, consistent processing.",
      },
      {
        title: "Pick a tool & options",
        body: "Choose Retouch, Restore, Edit, or Erase — then set a strength level, a restore mode, type a prompt, or brush over what to remove.",
      },
      {
        title: "Tap the button",
        body: "Hit Retouch, Restore, Modify, or lift your finger to erase. A quick “~10 seconds remaining” overlay reassures you while the AI runs.",
      },
      {
        title: "Compare, save & share",
        body: "Review the result on the before/after slider, then save it to Photos or share it anywhere in a single tap.",
      },
    ],
    benefits: [
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
    ],
    problemsSolved: [
      "“My selfie is fine but it could look so much better.”",
      "“This old family photo is blurry and I'd love to fix it.”",
      "“There's a photobomber ruining an otherwise perfect shot.”",
      "“I want to change something in a photo but Photoshop is overwhelming.”",
      "“I just want a great result fast, on my phone, ready to share.”",
    ],
    useCases: [
      {
        title: "Selfies and portraits that look their best",
        audience: "Selfie & portrait takers",
        problem:
          "Your photo is good, but the lighting is flat and you'd love a more polished, studio-quality version without hiring a retoucher.",
        solution:
          "Open Retouch, pick Natural, Enhanced, or Studio strength, and FxAI smooths skin and balances lighting in one tap.",
        example:
          "Turn a quick phone selfie into a flattering, studio-lit portrait for your profile picture in about ten seconds.",
        feature: "AI Retouch",
      },
      {
        title: "Restoring old and damaged family photos",
        audience: "Families & nostalgia seekers",
        problem:
          "You have precious old prints that are blurry, faded, or black-and-white, and no idea how to bring them back to life.",
        solution:
          "Use Restore to unblur, repair, or colorize the image — sharpening detail and adding realistic color automatically.",
        example:
          "Scan a grandparent's black-and-white photo, tap Colorize, and see it in lifelike color for the first time.",
        feature: "Photo Restore",
      },
      {
        title: "Scroll-stopping social media content",
        audience: "Creators & social media users",
        problem:
          "You need every post to look polished, but editing each photo in a pro app before it goes up takes far too long.",
        solution:
          "Retouch, edit, or clean up any shot in seconds, then share it straight to any app from the native share sheet.",
        example:
          "Retouch a photo, erase a distraction in the background, and post to your Story in under a minute.",
        feature: "AI Retouch",
      },
      {
        title: "Removing objects, people, and blemishes",
        audience: "Everyday photo editors",
        problem:
          "A photobomber, a stray sign, or a blemish is spoiling an otherwise great photo, and cutting it out by hand is fiddly.",
        solution:
          "Brush over whatever you want gone in Erase and FxAI fills the gap seamlessly, so the distraction simply disappears.",
        example:
          "Erase a stranger walking through your vacation shot and keep the scenery perfectly intact.",
        feature: "AI Erase",
      },
      {
        title: "Creative changes without Photoshop",
        audience: "Casual editors & the AI-curious",
        problem:
          "You want to change one thing — an outfit, the background, the season — but professional editors are intimidating.",
        solution:
          "Describe the change in plain English with AI Edit and FxAI applies it, then keep refining step by step until it's right.",
        example:
          "Upload a portrait and type “add sunglasses and change the background to a beach at sunset.”",
        feature: "AI Edit",
      },
      {
        title: "A quick clean-up before every post",
        audience: "Anyone with a camera roll",
        problem:
          "You take a lot of photos and wish each one looked a little more finished before it lands on a profile or in a chat.",
        solution:
          "Make FxAI the last stop before you post — a fast retouch, a quick erase, or a small edit turns a snapshot into a keeper.",
        example:
          "Give a group photo a light retouch and erase a background distraction before sending it to the family chat.",
        feature: "Photo Restore",
      },
    ],
    proBenefits: [
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
    ],
    companionApps: [
      { what: "AI Image Generator" },
      { what: "AI Video Generator" },
      { what: "AI Face Swap" },
      { what: "Photo to Video" },
    ],
    testimonials: [
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
    ],
    faqs: [
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
    ],
  },

  /* ---- Home page ---------------------------------------------------------- */
  home: {
    hero: {
      ratingSuffix: "happy users",
      titlePre: "Every photo,",
      titleAccent: "instantly enhanced",
      description:
        "FxAI is the all-in-one AI photo enhancer for iPhone and iPad. Retouch portraits, restore old memories, edit by describing the change, and erase anything you don't want — one tap, no editing skills, results in seconds.",
      exploreCta: "Explore the tools",
      freeNote: "Free to download · No account required · iPhone & iPad",
    },
    stats: {
      rating: "App Store rating",
      users: "Happy users",
      tools: "AI tools in one app",
      speed: "From photo to result",
    },
    toolsSection: {
      eyebrow: "One app, four AI tools",
      title: "Everything you need to make a photo better",
      description:
        "FxAI bundles what usually takes several professional tools — a retoucher, a restorer, a generative editor, and an object remover — behind one simple, tap-and-go interface.",
    },
    highlights: [
      {
        eyebrow: "Retouch",
        title: "Studio-quality portraits in one tap",
        description:
          "Add a selfie or portrait, choose Natural, Enhanced, or Studio strength, and FxAI smooths skin, balances lighting, and adds polish automatically — then shows you the difference on a before/after slider.",
        bullets: [
          "Three strengths: Natural, Enhanced, and Studio",
          "Smoother skin and balanced, flattering lighting",
          "Keeps every feature unmistakably yours",
          "See the improvement instantly, side by side",
        ],
        cta: "About AI Retouch",
      },
      {
        eyebrow: "Restore",
        title: "Bring old memories back to life",
        description:
          "Unblur a soft photo into HD, repair an old or degraded print, or add realistic color to a black-and-white image. Restore is the emotional heart of FxAI — the fastest way to revive a family archive.",
        bullets: [
          "Unblur turns soft shots into crisp HD",
          "Restore repairs old, damaged, or faded photos",
          "Colorize adds lifelike color to black-and-white",
          "Perfect for reviving family memories",
        ],
        cta: "About Photo Restore",
      },
      {
        eyebrow: "Edit",
        title: "Change a photo just by describing it",
        description:
          "Type what you want — “add sunglasses”, “change the background to a beach” — and FxAI applies it. Every edit builds on the last, so you can refine step by step and generate variations until it's right.",
        bullets: [
          "Plain-language edits, no tools to learn",
          "Iterative, multi-step refinement that remembers context",
          "Attach reference photos to guide the result",
          "Regenerate variations and pick your favorite",
        ],
        cta: "About AI Edit",
      },
      {
        eyebrow: "Erase",
        title: "Remove anything with a brush",
        description:
          "Brush over a photobomber, a stray object, or a blemish and FxAI fills the gap seamlessly. Pan and zoom to work precisely, undo any stroke, and export a clean, distraction-free shot.",
        bullets: [
          "Brush to remove objects, people, or blemishes",
          "Seamless AI fill where the object used to be",
          "Pan and zoom for precise, careful edits",
          "Undo any stroke before you save",
        ],
        cta: "About AI Erase",
      },
    ],
    howSection: {
      eyebrow: "How it works",
      title: "From photo to result in four taps",
      description:
        "The same simple rhythm powers every tool in FxAI — once you learn one, you know them all.",
    },
    useCasesSection: {
      eyebrow: "Use cases",
      title: "What people do with FxAI",
      description:
        "Whether you're polishing a selfie, reviving a family photo, or cleaning up a shot before you post it, FxAI meets you where your camera roll is.",
      seeAll: "See all use cases",
    },
    benefitsSection: {
      eyebrow: "Why FxAI",
      title: "Built to remove every barrier to a better photo",
    },
    problemsCard: {
      heading: "FxAI is for you if you've ever thought…",
    },
    testimonialsSection: {
      eyebrow: "Loved by everyday creators",
      title: "Join {users} people already enhancing",
      description:
        "FxAI holds a {rating}-star rating in the App Store. Here's what a few of them say.",
    },
    pro: {
      eyebrow: "FxAI Pro",
      title: "Free to start. Unlimited with Pro.",
      description:
        "Every tool is free to use. Upgrade to Pro for unlimited generations, no ads, no watermarks, and priority processing — with a free trial and cancel-anytime billing.",
      exploreCta: "Explore the tools",
    },
    companionSection: {
      eyebrow: "The AI Journey family",
      title: "More AI creativity beyond FxAI",
      description:
        "FxAI is part of a broader suite of AI creativity apps by the same team. Discover the companions right from the app's AI Tools tab.",
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      descriptionPre: "Everything you need to know to get started. ",
      seeFullFaq: "See the full FAQ",
    },
    cta: {
      title: "Enhance your first photo today",
      description:
        "Download FxAI free and turn any photo into a polished, share-ready image in seconds.",
      secondary: "Browse features",
    },
  },

  /* ---- Features index page ----------------------------------------------- */
  featuresPage: {
    header: {
      eyebrow: "Features",
      title: "Everything FxAI can do to a photo",
      intro:
        "FxAI is a pocket-sized photo studio. Four AI tools, a consistent tap-and-go flow, and a before/after slider on every result — all wrapped in a friendly interface that needs no editing skill.",
    },
    highlights: [
      {
        title: "Retouch — studio-grade portraits, one tap",
        description:
          "Add a portrait, choose Natural, Enhanced, or Studio strength, and FxAI smooths skin and balances lighting automatically. The before/after slider makes the improvement obvious.",
        bullets: [
          "Three enhancement levels for total control",
          "Flattering, natural-looking skin and light",
          "Great for selfies, profile pictures, and posts",
          "Keeps your likeness intact",
        ],
      },
      {
        title: "Restore — revive old and damaged photos",
        description:
          "Three modes cover the most common repairs: Unblur sharpens soft shots into HD, Restore fixes old or degraded prints, and Colorize adds realistic color to black-and-white images.",
        bullets: [
          "Unblur, Restore, and Colorize modes",
          "Sharpen, repair, and recolor in one place",
          "Ideal for scanned prints and old family photos",
          "Emotional payoff, zero effort",
        ],
      },
      {
        title: "Edit — describe the change, FxAI does it",
        description:
          "Set a photo and type what you want changed in plain English. Each edit builds on the last, so you can layer changes step by step, attach reference photos, and regenerate variations.",
        bullets: [
          "Natural-language edits — no controls to learn",
          "Iterative editing that remembers your instructions",
          "Reference photos to guide the result",
          "Prompt enhancement and content safety built in",
        ],
      },
      {
        title: "Erase — brush away anything unwanted",
        description:
          "Switch to Erase mode, brush over the object, person, or blemish you want gone, and FxAI fills the gap seamlessly. Move and zoom to work precisely, and undo any stroke.",
        bullets: [
          "Paint-style mask to mark what to remove",
          "Seamless AI fill with no smudge left behind",
          "Move / Erase toggle for panning and zooming",
          "Undo and revert through your erase history",
        ],
      },
    ],
    exploreCtaPrefix: "Explore",
    resultSection: {
      eyebrow: "Every result",
      title: "Polished output, exactly where you want it",
      description:
        "No matter which tool you use, every creation flows into the same delightful result experience.",
    },
    howSection: {
      eyebrow: "How it works",
      title: "The universal FxAI loop",
      description:
        "Add a photo, pick a tool and options, tap the button, then compare and save — the rhythm is the same everywhere.",
    },
    freeCard: {
      title: "Free to use",
      body: "Every tool is free — no account, no credit card, no editing skills. The free tier is ad-supported and adds a small watermark to saved images.",
      cta: "See what you can make",
    },
    proCard: {
      title: "Unlimited with Pro",
      body: "FxAI Pro unlocks unlimited generations, removes ads and watermarks, and adds priority processing — with a free trial and cancel-anytime billing.",
      cta: "Read the FAQ",
    },
    companionSection: {
      eyebrow: "AI Journey family",
      title: "Discover companion apps",
      description:
        "FxAI also introduces you to sibling apps for image generation, video, live portraits, and face swap.",
    },
  },

  /* ---- Feature detail pages (keyed by slug) ------------------------------ */
  toolPages: {
    retouch: {
      headerTitle: "AI Retouch — one-tap portrait enhancement",
      intro:
        "Smoother skin, balanced lighting, and studio-grade polish — automatically. Add a portrait, pick how strong you want it, and FxAI does the retouching in seconds.",
      leadTitle: "Your best photo, without the retoucher",
      leadBody:
        "Professional retouching usually means expensive software and real skill. FxAI collapses it into a single button. You bring the photo; it evens skin tone, softens distractions, and lifts the lighting — then proves the improvement with a before/after slider.",
      checklist: [
        "Three strengths: Natural, Enhanced, Studio",
        "Smoother skin and balanced, flattering light",
        "Perfect for selfies, profile pictures, and posts",
        "Your features stay unmistakably yours",
      ],
      optionsTitle: "Pick exactly how polished you want to look",
      optionsDescription:
        "One control, three looks — dial the enhancement up or down to match the moment.",
      howTitle: "From selfie to studio shot in four taps",
      steps: [
        { title: "Add a portrait", body: "Tap to pick a selfie or portrait from your library. FxAI scales it to Full-HD for fast, consistent results." },
        { title: "Choose a strength", body: "Pick Natural for a subtle clean-up, Enhanced for a noticeable lift, or Studio for the strongest, most dramatic finish." },
        { title: "Tap Retouch", body: "A quick “~10 seconds remaining” overlay reassures you while the AI smooths skin and balances the lighting." },
        { title: "Compare & save", body: "Drag the before/after slider to see the difference, then save to Photos or share it anywhere in a tap." },
      ],
      faqTitle: "AI Retouch questions",
      faqs: [
        {
          q: "How does AI Retouch work?",
          a: "Open the Retouch tab, add a portrait, and choose an enhancement level — Natural, Enhanced, or Studio. Tap Retouch and FxAI smooths skin, evens tone, and balances lighting automatically, then shows the result on a before/after slider.",
        },
        {
          q: "What's the difference between Natural, Enhanced, and Studio?",
          a: "Natural is a subtle, true-to-life clean-up. Enhanced (the default) is a noticeably brighter, smoother, more polished look. Studio is the strongest, most dramatic studio-shot finish.",
        },
        {
          q: "Will I still look like myself?",
          a: "Yes. Retouch is designed to enhance, not replace — it refines skin and lighting while keeping your features unmistakably yours. If you want a lighter touch, use the Natural level.",
        },
        {
          q: "Can I remove a watermark from retouched photos?",
          a: "Free-tier exports carry a small FxAI watermark. Upgrading to FxAI Pro removes the watermark from every image you save or share, and lifts usage limits.",
        },
      ],
      ctaTitle: "Retouch your first photo free",
      ctaDescription:
        "Download FxAI and turn any selfie into a studio-quality portrait in seconds.",
      ctaSecondary: "See all features",
    },
    restore: {
      headerTitle: "Photo Restore — bring old memories back to life",
      intro:
        "Repair and revive old, damaged, or low-quality pictures. Sharpen a blurry shot into HD, restore a degraded print, or add realistic color to a black-and-white photo — pick a mode and tap once.",
      leadTitle: "The most emotional tap in the app",
      leadBody:
        "A blurry childhood photo, a faded print of a grandparent, a black-and-white wedding shot — the memories are priceless but the images have aged. Restore reconstructs detail, repairs damage, and adds color, so a moment you thought was lost looks vivid again.",
      checklist: [
        "Unblur soft photos into crisp HD",
        "Restore old, damaged, or faded prints",
        "Colorize black-and-white images realistically",
        "Perfect for reviving a whole family archive",
      ],
      optionsTitle: "Three modes for three kinds of repair",
      optionsDescription:
        "Choose the fix your photo needs — each mode is a single tap.",
      howTitle: "From faded print to vivid memory",
      steps: [
        { title: "Add an old photo", body: "Pick a scanned print or an old shot from your library — blurry, faded, damaged, or black-and-white all work." },
        { title: "Choose a mode", body: "Unblur to sharpen, Restore to repair old or degraded photos, or Colorize to add realistic color to black-and-white." },
        { title: "Tap Restore", body: "FxAI reconstructs detail, repairs damage, or adds color while you watch a friendly countdown." },
        { title: "Compare & keep", body: "Drag the before/after slider to see the memory revived, then save it to Photos or share it with family." },
      ],
      crossPromo: {
        eyebrow: "After the restore",
        title: "Bring the restored photo to life with PicAlive",
        bodyPre: "Once FxAI has repaired and colorized an old photo, take it one step further: ",
        linkText: "PicAlive animates old photos",
        bodyPost: " — a smile, a blink, a wave — so the restored memory actually moves. Built by the same AI Journey team.",
      },
      faqTitle: "Photo Restore questions",
      faqs: [
        {
          q: "What can Photo Restore fix?",
          a: "Restore offers three modes. Unblur sharpens blurry photos into crisp HD, Restore repairs old or degraded prints, and Colorize adds realistic color to black-and-white images. Pick a mode, tap Restore, and compare the result on the slider.",
        },
        {
          q: "Can FxAI colorize a black-and-white photo?",
          a: "Yes. Choose the Colorize mode, add your black-and-white image, and FxAI adds lifelike, natural-looking color automatically — ideal for old family portraits.",
        },
        {
          q: "Can it unblur a photo?",
          a: "Yes. The Unblur mode (the default) sharpens soft or out-of-focus photos into HD clarity, reconstructing detail that looked lost.",
        },
        {
          q: "Do I need to scan my photos a special way?",
          a: "No. A clear phone photo or a standard scan of a printed picture is enough. Higher-resolution captures give the AI more detail to work with, but there's no special process required.",
        },
      ],
      ctaTitle: "Restore a memory free",
      ctaDescription:
        "Download FxAI, add an old photo, and watch a lost moment come back to life.",
      ctaSecondary: "See all features",
    },
    edit: {
      headerTitle: "AI Edit — change a photo just by describing it",
      intro:
        "Forget layers, masks, and menus. Set a photo, type what you want changed, and FxAI does it. Then keep going — each edit builds on the last, so you can sculpt an image one sentence at a time.",
      leadTitle: "Editing that feels like a conversation",
      leadBody:
        "Most photo editors make you find the right tool before you can make a change. FxAI removes that step entirely. You describe the result you want and it figures out how to get there — then remembers what you asked for, so your next instruction builds on the last one.",
      checklist: [
        "Change outfits, backgrounds, objects, and lighting",
        "Iterative edits that accumulate step by step",
        "Attach reference photos to guide the result",
        "Regenerate variations and keep the best",
      ],
      howTitle: "Describe, modify, repeat",
      steps: [
        { title: "Set a photo", body: "Pick the image you want to change. Attach one or more reference photos to guide or blend the edit." },
        { title: "Describe the change", body: "Type what you want in plain language — an outfit, a background, the lighting, a new object. Turn on prompt enhancement for extra detail." },
        { title: "Tap Modify", body: "FxAI applies your instruction and shows the result. Regenerate for alternate variants and swipe between them." },
        { title: "Stack & save", body: "Modify again to build on the last result, refining step by step, then save the version you love." },
      ],
      examplesTitle: "Real edits, in plain language",
      examplesDescription:
        "Here's the kind of instruction FxAI understands — and how the edits stack together.",
      examples: [
        { prompt: "Add sunglasses and change the background to a beach", result: "A new accessory and setting applied in one edit." },
        { prompt: "Make it look like autumn", result: "Warm tones and seasonal light layered on the previous result." },
        { prompt: "Give me a red jacket", result: "A natural wardrobe change that keeps the person intact." },
        { prompt: "Nighttime with neon lighting", result: "A whole new mood and lighting for the same photo." },
      ],
      faqTitle: "AI Edit questions",
      faqs: [
        {
          q: "How do I edit a photo with FxAI?",
          a: "Open the Edit tab, set a photo, and describe the change you want — for example “add a red hat” or “change the background to a beach”. Tap Modify and FxAI returns the edited photo. Each edit builds on the previous result, so you can refine step by step.",
        },
        {
          q: "Can I stack multiple edits?",
          a: "Yes. AI Edit is iterative — every Modify accumulates on the last result, so you can layer changes such as a hairstyle, then an outfit, then a background, in a natural, conversational flow. FxAI remembers the cumulative history of your instructions.",
        },
        {
          q: "Can I use reference photos or combine images?",
          a: "Yes. You can attach one or more reference photos so FxAI blends or transforms them together from your description — for instance, placing a person into a completely new scene.",
        },
        {
          q: "Are there limits on what I can ask for?",
          a: "Prompts are screened for content safety. Unsafe requests are blocked with a guidelines message before they're sent, so the app stays appropriate to use.",
        },
      ],
      ctaTitle: "Edit your first photo free",
      ctaDescription:
        "Download FxAI and change any picture just by describing what you want.",
      ctaSecondary: "See all features",
    },
    erase: {
      headerTitle: "AI Erase — remove anything with a brush",
      intro:
        "Brush over an unwanted object, person, or blemish and FxAI fills the gap seamlessly. Pan and zoom to work precisely, undo any stroke, and export a clean, distraction-free photo.",
      leadTitle: "Make distractions disappear",
      leadBody:
        "One stranger, one stray sign, one blemish can spoil an otherwise perfect photo — and cutting it out by hand is fiddly and slow. With Erase you simply paint over what you want gone, and FxAI rebuilds the background behind it so nothing looks touched.",
      checklist: [
        "Brush to remove objects, people, or blemishes",
        "Seamless AI fill with no smudge left behind",
        "Move / Erase toggle for panning and zooming",
        "Undo and revert through your erase history",
      ],
      howTitle: "Paint it out in four taps",
      steps: [
        { title: "Add a photo", body: "Pick the image you want to clean up from your library." },
        { title: "Switch to Erase", body: "Use the Move / Erase toggle to pan and zoom, then switch to Erase to start painting your mask." },
        { title: "Brush over it", body: "Paint over the object, person, or blemish you want gone. Lift your finger and FxAI fills the gap seamlessly." },
        { title: "Undo or save", body: "Step back through your erase history if needed, then export a clean, distraction-free photo." },
      ],
      faqTitle: "AI Erase questions",
      faqs: [
        {
          q: "How do I remove an object with AI Erase?",
          a: "Open Erase, add a photo, switch to Erase mode, and brush over the object, person, or blemish you want gone. FxAI fills the gap seamlessly. You can pan and zoom to work precisely and undo any stroke before saving.",
        },
        {
          q: "Can it remove a person from a photo?",
          a: "Yes. Brush over a photobomber or anyone you'd rather not have in the shot, and FxAI reconstructs the background behind them so they simply disappear.",
        },
        {
          q: "What if I brush over too much?",
          a: "Just undo. Erase keeps a history, so you can step back through your strokes and revert until the mask is exactly right before you save.",
        },
        {
          q: "Does it work on blemishes and small distractions too?",
          a: "Absolutely. Erase is just as good at small clean-ups — a blemish, a stray wire, a sign in the background — as it is at removing whole objects or people.",
        },
      ],
      ctaTitle: "Clean up a photo free",
      ctaDescription:
        "Download FxAI and brush away anything you don't want in your shot.",
      ctaSecondary: "See all features",
    },
  },

  /* ---- FAQ page ----------------------------------------------------------- */
  faqPage: {
    header: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      intro:
        "Everything you might want to know about FxAI — from how each tool works to FxAI Pro, privacy, and billing.",
    },
    cta: {
      title: "Still have a question?",
      description:
        "Reach the team directly and we'll help you get the most out of FxAI.",
      secondary: "Contact us",
    },
  },

  /* ---- Use cases page ----------------------------------------------------- */
  useCasesPage: {
    header: {
      eyebrow: "Use cases",
      title: "What you can do with FxAI",
      intro:
        "FxAI is built for everyday people with a camera roll and a moment they want to look its best. Here are the real scenarios where it shines — and the exact problem it solves in each.",
    },
    problemsSection: {
      eyebrow: "Problems solved",
      title: "If you've ever thought one of these, FxAI is for you",
    },
    cta: {
      title: "Make your photo better",
      description:
        "Whatever you're trying to fix or improve, FxAI turns it into a polished, share-ready image in seconds. Download free.",
      secondary: "Explore features",
    },
  },

  /* ---- About page --------------------------------------------------------- */
  aboutPage: {
    header: {
      eyebrow: "About",
      title: "Make photo enhancement effortless for everyone",
      intro:
        "High-quality photo editing has always demanded expensive software, real skill, and time. FxAI removes all three barriers, delivering studio-grade results through one-tap AI on your phone.",
    },
    missionLead: "Our mission is simple:",
    missionRest:
      " make professional-quality photo enhancement effortless and instant for everyday people. You should never need to understand layers, masks, sliders, or prompts to get a stunning result — you add a photo and tap once.",
    missionBody2:
      "FxAI bundles what would normally require several separate professional tools — a retoucher, a photo restorer, a generative editor, and an object-removal tool — into one simple, tab-based app. Pick a tool, add a photo, tap a button, and get a professionally improved result in seconds, shown on a before/after slider so the value is obvious.",
    pullQuote:
      "“FxAI turns an ordinary photo into a polished, high-quality image with a single tap — a full photo studio that needs no skill, no accounts, and no learning curve.”",
    ratingLine:
      "That approach resonates: FxAI holds a {rating}-star rating and has welcomed {users} happy users who retouch portraits, revive old memories, and clean up photos every day.",
    audienceSection: {
      eyebrow: "Who it's for",
      title: "Built for everyday people",
      colAudience: "Audience",
      colWant: "What they want",
      colHow: "How FxAI helps",
    },
    audience: [
      { who: "Everyday smartphone users", want: "Better-looking photos without learning software", how: "One-tap tools with a before/after slider" },
      { who: "Selfie & portrait takers", want: "Flattering, studio-quality portraits", how: "Retouch at Natural, Enhanced, or Studio strength" },
      { who: "Families & nostalgia seekers", want: "To revive old and damaged memories", how: "Unblur, restore, and colorize with Photo Restore" },
      { who: "Creators & social media users", want: "A fast, repeatable way to polish every post", how: "Retouch, edit, and erase, then share instantly" },
      { who: "Casual editors", want: "Quick creative changes without Photoshop", how: "Describe-the-change editing and brush-to-erase" },
    ],
    strengthsSection: {
      eyebrow: "Why it works",
      title: "What makes FxAI different",
    },
    strengths: [
      { title: "Breadth in one app", body: "Retouch, restore, generative edit, and erase under a single interface — most competitors do just one." },
      { title: "Radically simple UX", body: "A consistent add-photo → tap → result pattern across every tool means effectively zero learning curve." },
      { title: "Proof of value", body: "Every result opens on a before/after slider, so the improvement is instant and undeniable." },
      { title: "Emotionally resonant", body: "Restoring and colorizing old memories creates a personal connection you don't get from a filter." },
      { title: "Fast and reassuring", body: "Results in about ten seconds, with a friendly countdown so you're never left guessing." },
      { title: "Privacy-conscious", body: "No accounts to manage, explicit tracking-consent prompts, and a content-safety filter in the Edit tool." },
    ],
    familySection: {
      eyebrow: "AI Journey",
      title: "Part of a family of AI creativity apps",
      description:
        "FxAI is one of {count} apps in the AI Journey suite. Each explores a different corner of AI creativity, and FxAI helps you discover them all from its AI Tools tab.",
    },
  },

  /* ---- Contact page ------------------------------------------------------- */
  contactPage: {
    header: {
      eyebrow: "Contact",
      title: "We'd love to hear from you",
      intro:
        "Whether you have a question, hit a snag, or just restored a photo you're proud of, the FxAI team is one message away.",
    },
    emailCard: {
      title: "Email support",
      body: "Questions, bug reports, subscription help, or privacy requests — send them our way and we'll get back to you.",
    },
    feedbackCard: {
      title: "In-app feedback",
      body: "After a result, tap “Happy with the result?” If something isn't right, choose “Not really” to send feedback that emails the team directly.",
      cta: "Read the FAQ first",
    },
    rateCard: {
      title: "Rate FxAI",
      body: "Enjoying the app? A rating on the App Store genuinely helps other people discover FxAI.",
      cta: "Rate on the App Store",
    },
    cta: {
      title: "Haven't tried FxAI yet?",
      description:
        "Download it free and see what you can do to a photo in your first minute.",
      secondary: "Explore features",
    },
  },

  /* ---- Restoration guide -------------------------------------------------- */
  restorationGuidePage: {
    header: {
      eyebrow: "Restoration Guide",
      title: "How to restore old photos on your iPhone",
      intro:
        "That shoebox of faded prints doesn't need a professional restorer. With a phone camera and one tap of AI, a damaged, blurry, or black-and-white photo becomes a clean, vivid digital picture. Here's the whole process.",
    },
    stepsSection: {
      eyebrow: "Four steps",
      title: "From faded print to vivid memory",
      description:
        "The full workflow, start to finish — it takes minutes for your first photo.",
    },
    steps: [
      {
        title: "Digitize the print",
        body: "Lay the photo flat in bright, even light — near a window works well — and photograph it straight-on with your iPhone camera. Avoid glare, shadows, and angles; fill the frame with the print.",
      },
      {
        title: "Open FxAI's Restore tool",
        body: "Pick the captured image in the Restore tab. FxAI scales it to Full HD so the AI has clean detail to work from — no cropping or preparation needed on your side.",
      },
      {
        title: "Tap Restore",
        body: "One tap repairs scratches and creases, sharpens blur, recovers faded detail, and colorizes black-and-white pictures. The whole pass takes seconds, not hours of manual retouching.",
      },
      {
        title: "Compare and save",
        body: "Drag the before/after slider to see exactly what changed, then save the restored photo to your library or share it with the family group chat.",
      },
    ],
    tipsSection: {
      eyebrow: "Best results",
      title: "Tips that make a big difference",
      body: "The AI does the restoration — your only job is giving it a good starting image. These habits produce noticeably better results.",
      cta: "How Photo Restore works",
    },
    tips: [
      "Photograph prints instead of screenshotting them — resolution matters",
      "Clean dust off the print (and your lens) before capturing",
      "Capture the original, not a photo of a photo in a frame with glass",
      "Restore first, then crop — the AI uses surrounding context",
      "For badly damaged prints, run Restore, save, and run again on the result",
    ],
    animateCard: {
      eyebrow: "The magic next step",
      title: "Restored it? Now watch it move.",
      bodyPre: "A restored portrait is wonderful — a restored portrait that smiles is unforgettable. ",
      linkText: "PicAlive, FxAI's sibling app",
      bodyPost: ", animates old photos with gentle, realistic motion. Restore in FxAI, animate in PicAlive.",
    },
    faqTitle: "Photo restoration questions",
    faqs: [
      {
        q: "Can FxAI restore very damaged photos?",
        a: "Yes — Restore repairs scratches, creases, water spots, and fading, sharpens blur, and rebuilds lost detail. Severely damaged areas are reconstructed plausibly by the AI, and you can always compare against the original with the slider.",
      },
      {
        q: "Does FxAI colorize black-and-white photos?",
        a: "Yes. The Restore tool colorizes black-and-white and sepia pictures automatically as part of the same one-tap pass, with natural skin tones and period-appropriate colors.",
      },
      {
        q: "Will restoring change how people look?",
        a: "Restore aims to recover the photo, not reinvent it — faces stay recognizably themselves, just clearer. The before/after slider makes it easy to confirm the result stays faithful.",
      },
      {
        q: "Do I need a scanner to restore old photos?",
        a: "No. A careful iPhone photo of the print is enough. A flatbed scan gives the AI slightly more detail if you have one, but most people restore straight from a camera capture.",
      },
      {
        q: "Can I make the restored photo move?",
        a: "Yes — pair FxAI with its sibling app PicAlive, which animates old photos with natural motion. Restore the image in FxAI first, then bring it to life in PicAlive.",
      },
    ],
    ctaTitle: "Rescue your first photo today",
    ctaDescription:
      "Download FxAI free, add an old picture, and watch a lost moment come back.",
    ctaSecondary: "See all tools",
  },
};

/**
 * The shape every locale must satisfy. Derived from the English object with
 * literal types widened (so translated strings are assignable) while the full
 * key structure is still enforced at build time.
 */
export type Dictionary = typeof en;
