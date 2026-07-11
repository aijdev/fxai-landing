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
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const tool = getTool("restore")!;

export const metadata: Metadata = buildMetadata({
  title: "Photo Restore — Unblur, Repair & Colorize Old Photos",
  description:
    "FxAI's Photo Restore brings old, blurry, and black-and-white pictures back to life. Unblur soft shots into HD, repair degraded prints, and colorize black-and-white images — one tap, no skills.",
  path: tool.href,
  keywords: tool.keywords,
});

const STEPS = [
  { n: "1", title: "Add an old photo", body: "Pick a scanned print or an old shot from your library — blurry, faded, damaged, or black-and-white all work." },
  { n: "2", title: "Choose a mode", body: "Unblur to sharpen, Restore to repair old or degraded photos, or Colorize to add realistic color to black-and-white." },
  { n: "3", title: "Tap Restore", body: "FxAI reconstructs detail, repairs damage, or adds color while you watch a friendly countdown." },
  { n: "4", title: "Compare & keep", body: "Drag the before/after slider to see the memory revived, then save it to Photos or share it with family." },
];

const relatedFaqs = [
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
];

export default function RestorePage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "FxAI Photo Restore",
          description:
            "Unblur, repair, and colorize old photos on iPhone and iPad.",
          url: `${SITE_URL}${tool.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Restore"
        title="Photo Restore — bring old memories back to life"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "Photo Restore", path: tool.href },
        ]}
        intro="Repair and revive old, damaged, or low-quality pictures. Sharpen a blurry shot into HD, restore a degraded print, or add realistic color to a black-and-white photo — pick a mode and tap once."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              The most emotional tap in the app
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              A blurry childhood photo, a faded print of a grandparent, a
              black-and-white wedding shot — the memories are priceless but the
              images have aged. Restore reconstructs detail, repairs damage, and
              adds color, so a moment you thought was lost looks vivid again.
            </p>
            <CheckList
              items={[
                "Unblur soft photos into crisp HD",
                "Restore old, damaged, or faded prints",
                "Colorize black-and-white images realistically",
                "Perfect for reviving a whole family archive",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <AppShot scene="restore" priority />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={tool.optionsLabel}
          title="Three modes for three kinds of repair"
          description="Choose the fix your photo needs — each mode is a single tap."
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
        <SectionHeading eyebrow="How it works" title="From faded print to vivid memory" />
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
        <SectionHeading eyebrow="FAQ" title="Photo Restore questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <CTA
        title="Restore a memory free"
        description="Download FxAI, add an old photo, and watch a lost moment come back to life."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
