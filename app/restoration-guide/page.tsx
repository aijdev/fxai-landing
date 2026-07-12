import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SITE_URL } from "../lib/site";
import { softwareAppSchema, faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "How to Restore Old Photos on iPhone — A Simple Guide",
  description:
    "Learn how to restore old photos on your iPhone: capture the print properly, repair damage and blur with AI, colorize black-and-white pictures, and save a clean digital copy — all in minutes with FxAI, no editing skills needed.",
  path: "/restoration-guide",
  keywords: [
    "how to restore old photos",
    "restore old photos iPhone",
    "fix old photos app",
    "colorize black and white photos",
    "repair damaged photo",
  ],
});

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "Digitize the print",
    body: "Lay the photo flat in bright, even light — near a window works well — and photograph it straight-on with your iPhone camera. Avoid glare, shadows, and angles; fill the frame with the print.",
  },
  {
    n: "2",
    title: "Open FxAI's Restore tool",
    body: "Pick the captured image in the Restore tab. FxAI scales it to Full HD so the AI has clean detail to work from — no cropping or preparation needed on your side.",
  },
  {
    n: "3",
    title: "Tap Restore",
    body: "One tap repairs scratches and creases, sharpens blur, recovers faded detail, and colorizes black-and-white pictures. The whole pass takes seconds, not hours of manual retouching.",
  },
  {
    n: "4",
    title: "Compare and save",
    body: "Drag the before/after slider to see exactly what changed, then save the restored photo to your library or share it with the family group chat.",
  },
];

const TIPS = [
  "Photograph prints instead of screenshotting them — resolution matters",
  "Clean dust off the print (and your lens) before capturing",
  "Capture the original, not a photo of a photo in a frame with glass",
  "Restore first, then crop — the AI uses surrounding context",
  "For badly damaged prints, run Restore, save, and run again on the result",
];

const faqs = [
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
];

export default function RestorationGuidePage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "FxAI Photo Restore",
          description:
            "Repair, unblur, and colorize old photos in one tap on iPhone and iPad.",
          url: `${SITE_URL}/restoration-guide`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <PageHeader
        eyebrow="Restoration Guide"
        title="How to restore old photos on your iPhone"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Restoration Guide", path: "/restoration-guide" },
        ]}
        intro="That shoebox of faded prints doesn't need a professional restorer. With a phone camera and one tap of AI, a damaged, blurry, or black-and-white photo becomes a clean, vivid digital picture. Here's the whole process."
        actions={<AppStoreButton size="md" />}
      />

      {/* Steps */}
      <Section>
        <SectionHeading
          eyebrow="Four steps"
          title="From faded print to vivid memory"
          description="The full workflow, start to finish — it takes minutes for your first photo."
        />
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

      {/* Tips */}
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Best results"
              title="Tips that make a big difference"
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">
              The AI does the restoration — your only job is giving it a good
              starting image. These habits produce noticeably better results.
            </p>
            <Button
              href="/features/restore"
              variant="secondary"
              className="mt-6 w-fit"
            >
              How Photo Restore works
            </Button>
          </div>
          <CheckList items={TIPS} className="lg:mt-4" />
        </div>
      </Section>

      {/* Next step: animate */}
      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-4">
            <span className="eyebrow">The magic next step</span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Restored it? Now watch it move.
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted">
              A restored portrait is wonderful — a restored portrait that
              smiles is unforgettable.{" "}
              <a
                href="https://picalive.app/features/animate-old-photos"
                target="_blank"
                rel="noopener"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                PicAlive, FxAI&apos;s sibling app
              </a>
              , animates old photos with gentle, realistic motion. Restore in
              FxAI, animate in PicAlive.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="Photo restoration questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={faqs} />
        </div>
      </Section>

      <CTA
        title="Rescue your first photo today"
        description="Download FxAI free, add an old picture, and watch a lost moment come back."
        secondary={{ label: "See all tools", href: "/features" }}
      />
    </>
  );
}
