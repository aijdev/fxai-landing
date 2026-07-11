import type { Metadata } from "next";
import { buildMetadata } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";
import { getTool } from "../../lib/content";
import { softwareAppSchema, faqSchema } from "../../lib/schema";

import { PageHeader } from "../../components/PageHeader";
import { Section, SectionHeading } from "../../components/Section";
import { BeforeAfter } from "../../components/BeforeAfter";
import { CheckList } from "../../components/CheckList";
import { AppStoreButton } from "../../components/AppStoreButton";
import { FaqList } from "../../components/Faq";
import { CTA } from "../../components/CTA";
import { JsonLd } from "../../components/JsonLd";

const tool = getTool("erase")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Erase — Remove Objects & People From Photos",
  description:
    "FxAI's AI Erase removes unwanted objects, people, and blemishes from your photos. Brush over what you want gone and AI fills the gap seamlessly — pan, zoom, and undo for precise, clean results.",
  path: tool.href,
  keywords: tool.keywords,
});

const STEPS = [
  { n: "1", title: "Add a photo", body: "Pick the image you want to clean up from your library." },
  { n: "2", title: "Switch to Erase", body: "Use the Move / Erase toggle to pan and zoom, then switch to Erase to start painting your mask." },
  { n: "3", title: "Brush over it", body: "Paint over the object, person, or blemish you want gone. Lift your finger and FxAI fills the gap seamlessly." },
  { n: "4", title: "Undo or save", body: "Step back through your erase history if needed, then export a clean, distraction-free photo." },
];

const relatedFaqs = [
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
];

export default function ErasePage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "FxAI AI Erase",
          description:
            "Remove unwanted objects, people, and blemishes from photos on iPhone and iPad.",
          url: `${SITE_URL}${tool.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Erase"
        title="AI Erase — remove anything with a brush"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "AI Erase", path: tool.href },
        ]}
        intro="Brush over an unwanted object, person, or blemish and FxAI fills the gap seamlessly. Pan and zoom to work precisely, undo any stroke, and export a clean, distraction-free photo."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              Make distractions disappear
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              One stranger, one stray sign, one blemish can spoil an otherwise
              perfect photo — and cutting it out by hand is fiddly and slow. With
              Erase you simply paint over what you want gone, and FxAI rebuilds
              the background behind it so nothing looks touched.
            </p>
            <CheckList
              items={[
                "Brush to remove objects, people, or blemishes",
                "Seamless AI fill with no smudge left behind",
                "Move / Erase toggle for panning and zooming",
                "Undo and revert through your erase history",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <BeforeAfter
              scene="erase"
              id="erase-hero"
              beforeLabel="Before"
              afterLabel="Erased"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How it works" title="Paint it out in four taps" />
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

      <Section>
        <SectionHeading eyebrow="FAQ" title="AI Erase questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <CTA
        title="Clean up a photo free"
        description="Download FxAI and brush away anything you don't want in your shot."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
