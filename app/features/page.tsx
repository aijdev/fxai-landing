import type { ReactNode } from "react";
import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { RESULT_FEATURES, TOOLS } from "../lib/content";
import { softwareAppSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { FeatureCard } from "../components/FeatureCard";
import { AlternatingFeature } from "../components/AlternatingFeature";
import { HowItWorks } from "../components/HowItWorks";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { CompanionApps } from "../components/CompanionApps";
import { JsonLd } from "../components/JsonLd";
import {
  BoltIcon,
  CompareIcon,
  LayersIcon,
  ShareIcon,
  ShieldIcon,
  ZoomIcon,
} from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Features — Retouch, Restore, Edit & Erase Photos with AI",
  description:
    "Explore every FxAI tool: one-tap portrait retouching, old-photo restoration (unblur, restore, colorize), describe-to-edit generative editing, and brush-to-remove object erasing — with a before/after slider on every result.",
  path: "/features",
  keywords: [
    "AI photo enhancer features",
    "AI photo editor features",
    "photo restoration app",
    "object remover app",
  ],
});

const RESULT_ICONS: Record<string, ReactNode> = {
  slider: <CompareIcon className="h-6 w-6" />,
  share: <ShareIcon className="h-6 w-6" />,
  zoom: <ZoomIcon className="h-6 w-6" />,
  bolt: <BoltIcon className="h-6 w-6" />,
  layers: <LayersIcon className="h-6 w-6" />,
  shield: <ShieldIcon className="h-6 w-6" />,
};

const HIGHLIGHTS = [
  {
    tool: TOOLS[0],
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
    tool: TOOLS[1],
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
    tool: TOOLS[2],
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
    tool: TOOLS[3],
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
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />

      <PageHeader
        eyebrow="Features"
        title="Everything FxAI can do to a photo"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ]}
        intro="FxAI is a pocket-sized photo studio. Four AI tools, a consistent tap-and-go flow, and a before/after slider on every result — all wrapped in a friendly interface that needs no editing skill."
        actions={<AppStoreButton size="md" />}
      />

      {/* Tool cards */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <FeatureCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Section>

      {/* Detailed tools */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          {HIGHLIGHTS.map((h, i) => (
            <AlternatingFeature
              key={h.tool.slug}
              reversed={i % 2 === 1}
              eyebrow={h.tool.eyebrow}
              title={h.title}
              description={h.description}
              bullets={h.bullets}
              scene={h.tool.scene}
              cta={{ label: `Explore ${h.tool.name}`, href: h.tool.href }}
            />
          ))}
        </div>
      </Section>

      {/* Result experience */}
      <Section>
        <SectionHeading
          eyebrow="Every result"
          title="Polished output, exactly where you want it"
          description="No matter which tool you use, every creation flows into the same delightful result experience."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESULT_FEATURES.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 card p-6">
              <span className="icon-badge h-11 w-11">{RESULT_ICONS[item.icon]}</span>
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="How it works"
          title="The universal FxAI loop"
          description="Add a photo, pick a tool and options, tap the button, then compare and save — the rhythm is the same everywhere."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>

      {/* Free / Pro callout */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 card p-8">
            <h2 className="text-2xl font-bold tracking-tight">Free to use</h2>
            <p className="text-muted leading-relaxed">
              Every tool is free — no account, no credit card, no editing skills.
              The free tier is ad-supported and adds a small watermark to saved
              images.
            </p>
            <Button href="/use-cases" variant="secondary" className="w-fit">
              See what you can make
            </Button>
          </div>
          <div className="flex flex-col gap-5 card p-8">
            <h2 className="text-2xl font-bold tracking-tight">Unlimited with Pro</h2>
            <p className="text-muted leading-relaxed">
              FxAI Pro unlocks unlimited generations, removes ads and watermarks,
              and adds priority processing — with a free trial and cancel-anytime
              billing.
            </p>
            <Button href="/faq" variant="secondary" className="w-fit">
              Read the FAQ
            </Button>
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="AI Journey family"
          title="Discover companion apps"
          description="FxAI also introduces you to sibling apps for image generation, video, live portraits, and face swap."
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>
    </>
  );
}
