import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { getTool } from "../../lib/content";
import { softwareAppSchema, faqSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { AppShot } from "../../components/AppShot";
import { CheckList } from "../../components/CheckList";
import { AppStoreButton } from "../../components/AppStoreButton";
import { FaqList } from "../../components/Faq";
import { RelatedFeatures } from "../../components/RelatedFeatures";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const tool = getTool("retouch")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Retouch — One-Tap Portrait Enhancer for iPhone",
  description:
    "FxAI's AI Retouch beautifies portraits and selfies in one tap — smoother skin, balanced lighting, and studio-grade polish at Natural, Enhanced, or Studio strength. No editing skills required.",
  path: tool.href,
  keywords: tool.keywords,
});

const STEPS = [
  { n: "1", title: "Add a portrait", body: "Tap to pick a selfie or portrait from your library. FxAI scales it to Full-HD for fast, consistent results." },
  { n: "2", title: "Choose a strength", body: "Pick Natural for a subtle clean-up, Enhanced for a noticeable lift, or Studio for the strongest, most dramatic finish." },
  { n: "3", title: "Tap Retouch", body: "A quick “~10 seconds remaining” overlay reassures you while the AI smooths skin and balances the lighting." },
  { n: "4", title: "Compare & save", body: "Drag the before/after slider to see the difference, then save to Photos or share it anywhere in a tap." },
];

const relatedFaqs = [
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
];

export default function RetouchPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "FxAI AI Retouch",
          description:
            "Beautify portraits and selfies in one tap on iPhone and iPad.",
          url: `${SITE_URL}${tool.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Retouch"
        title="AI Retouch — one-tap portrait enhancement"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "AI Retouch", path: tool.href },
        ]}
        intro="Smoother skin, balanced lighting, and studio-grade polish — automatically. Add a portrait, pick how strong you want it, and FxAI does the retouching in seconds."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              Your best photo, without the retoucher
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Professional retouching usually means expensive software and real
              skill. FxAI collapses it into a single button. You bring the photo;
              it evens skin tone, softens distractions, and lifts the lighting —
              then proves the improvement with a before/after slider.
            </p>
            <CheckList
              items={[
                "Three strengths: Natural, Enhanced, Studio",
                "Smoother skin and balanced, flattering light",
                "Perfect for selfies, profile pictures, and posts",
                "Your features stay unmistakably yours",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <AppShot scene="retouch" priority />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={tool.optionsLabel}
          title="Pick exactly how polished you want to look"
          description="One control, three looks — dial the enhancement up or down to match the moment."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {tool.options?.map((opt) => (
            <div key={opt.label} className="card flex flex-col gap-3 p-7">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold tracking-tight">{opt.label}</h3>
                {opt.badge ? (
                  <span className="chip text-xs">{opt.badge}</span>
                ) : null}
              </div>
              <p className="text-sm leading-relaxed text-muted">{opt.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="From selfie to studio shot in four taps" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="flex flex-col gap-3 card p-6">
              <span className="text-4xl font-bold text-gradient">{step.n}</span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="AI Retouch questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug="retouch" />

      <CTA
        title="Retouch your first photo free"
        description="Download FxAI and turn any selfie into a studio-quality portrait in seconds."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
