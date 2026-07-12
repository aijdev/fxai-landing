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

const tool = getTool("edit")!;

export const metadata: Metadata = buildMetadata({
  title: "AI Edit — Edit Photos by Describing the Change",
  description:
    "FxAI's AI Edit lets you edit any photo in plain language. Add objects, change outfits, swap backgrounds, and restyle step by step — with reference photos, variations, and prompt enhancement. No layers or masks.",
  path: tool.href,
  keywords: tool.keywords,
});

const EXAMPLES = [
  { prompt: "Add sunglasses and change the background to a beach", result: "A new accessory and setting applied in one edit." },
  { prompt: "Make it look like autumn", result: "Warm tones and seasonal light layered on the previous result." },
  { prompt: "Give me a red jacket", result: "A natural wardrobe change that keeps the person intact." },
  { prompt: "Nighttime with neon lighting", result: "A whole new mood and lighting for the same photo." },
];

const STEPS = [
  { n: "1", title: "Set a photo", body: "Pick the image you want to change. Attach one or more reference photos to guide or blend the edit." },
  { n: "2", title: "Describe the change", body: "Type what you want in plain language — an outfit, a background, the lighting, a new object. Turn on prompt enhancement for extra detail." },
  { n: "3", title: "Tap Modify", body: "FxAI applies your instruction and shows the result. Regenerate for alternate variants and swipe between them." },
  { n: "4", title: "Stack & save", body: "Modify again to build on the last result, refining step by step, then save the version you love." },
];

const relatedFaqs = [
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
];

export default function EditPage() {
  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "FxAI AI Edit",
          description:
            "Edit any photo by describing the change in plain language on iPhone and iPad.",
          url: `${SITE_URL}${tool.href}`,
        })}
      />
      <JsonLd data={faqSchema(relatedFaqs)} />

      <PageHeader
        eyebrow="Edit"
        title="AI Edit — change a photo just by describing it"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: "AI Edit", path: tool.href },
        ]}
        intro="Forget layers, masks, and menus. Set a photo, type what you want changed, and FxAI does it. Then keep going — each edit builds on the last, so you can sculpt an image one sentence at a time."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">
              Editing that feels like a conversation
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Most photo editors make you find the right tool before you can make
              a change. FxAI removes that step entirely. You describe the result
              you want and it figures out how to get there — then remembers what
              you asked for, so your next instruction builds on the last one.
            </p>
            <CheckList
              items={[
                "Change outfits, backgrounds, objects, and lighting",
                "Iterative edits that accumulate step by step",
                "Attach reference photos to guide the result",
                "Regenerate variations and keep the best",
              ]}
            />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <AppShot scene="edit" priority />
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How it works" title="Describe, modify, repeat" />
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
        <SectionHeading
          eyebrow="Examples"
          title="Real edits, in plain language"
          description="Here's the kind of instruction FxAI understands — and how the edits stack together."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {EXAMPLES.map((ex) => (
            <div key={ex.prompt} className="flex flex-col gap-2 card p-6">
              <p className="font-semibold">
                <span className="text-brand">“</span>
                {ex.prompt}
                <span className="text-brand">”</span>
              </p>
              <p className="text-sm text-muted">{ex.result}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="AI Edit questions" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={relatedFaqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug="edit" />

      <CTA
        title="Edit your first photo free"
        description="Download FxAI and change any picture just by describing what you want."
        secondary={{ label: "See all features", href: "/features" }}
      />
    </>
  );
}
