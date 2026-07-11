import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { COMPANION_APPS } from "../lib/content";
import { RATING, USERS } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "About FxAI — Effortless AI Photo Enhancement",
  description:
    "FxAI makes professional-quality photo enhancement effortless for everyone. Learn about our mission, who FxAI is for, and the AI Journey family of creativity apps behind it.",
  path: "/about",
  keywords: ["about FxAI", "AI Journey apps", "AI photo enhancer maker"],
});

const AUDIENCE = [
  { who: "Everyday smartphone users", want: "Better-looking photos without learning software", how: "One-tap tools with a before/after slider" },
  { who: "Selfie & portrait takers", want: "Flattering, studio-quality portraits", how: "Retouch at Natural, Enhanced, or Studio strength" },
  { who: "Families & nostalgia seekers", want: "To revive old and damaged memories", how: "Unblur, restore, and colorize with Photo Restore" },
  { who: "Creators & social media users", want: "A fast, repeatable way to polish every post", how: "Retouch, edit, and erase, then share instantly" },
  { who: "Casual editors", want: "Quick creative changes without Photoshop", how: "Describe-the-change editing and brush-to-erase" },
];

const STRENGTHS = [
  { title: "Breadth in one app", body: "Retouch, restore, generative edit, and erase under a single interface — most competitors do just one." },
  { title: "Radically simple UX", body: "A consistent add-photo → tap → result pattern across every tool means effectively zero learning curve." },
  { title: "Proof of value", body: "Every result opens on a before/after slider, so the improvement is instant and undeniable." },
  { title: "Emotionally resonant", body: "Restoring and colorizing old memories creates a personal connection you don't get from a filter." },
  { title: "Fast and reassuring", body: "Results in about ten seconds, with a friendly countdown so you're never left guessing." },
  { title: "Privacy-conscious", body: "No accounts to manage, explicit tracking-consent prompts, and a content-safety filter in the Edit tool." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Make photo enhancement effortless for everyone"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        intro="High-quality photo editing has always demanded expensive software, real skill, and time. FxAI removes all three barriers, delivering studio-grade results through one-tap AI on your phone."
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-foreground">Our mission is simple:</span>{" "}
            make professional-quality photo enhancement effortless and instant for
            everyday people. You should never need to understand layers, masks,
            sliders, or prompts to get a stunning result — you add a photo and tap
            once.
          </p>
          <p>
            FxAI bundles what would normally require several separate professional
            tools — a retoucher, a photo restorer, a generative editor, and an
            object-removal tool — into one simple, tab-based app. Pick a tool, add a
            photo, tap a button, and get a professionally improved result in
            seconds, shown on a before/after slider so the value is obvious.
          </p>
          <p className="card p-6 text-xl font-medium text-foreground">
            “FxAI turns an ordinary photo into a polished, high-quality image with a
            single tap — a full photo studio that needs no skill, no accounts, and
            no learning curve.”
          </p>
          <p>
            That approach resonates: FxAI holds a {RATING}-star rating and has
            welcomed {USERS} happy users who retouch portraits, revive old memories,
            and clean up photos every day.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Who it's for" title="Built for everyday people" />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl border border-border">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">Audience</th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">What they want</th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">How FxAI helps</th>
              </tr>
            </thead>
            <tbody>
              {AUDIENCE.map((row) => (
                <tr key={row.who}>
                  <th scope="row" className="border-t border-border bg-card px-5 py-4 text-left text-sm font-medium">
                    {row.who}
                  </th>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.want}
                  </td>
                  <td className="border-t border-border bg-card px-5 py-4 text-sm text-muted">
                    {row.how}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why it works" title="What makes FxAI different" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STRENGTHS.map((s) => (
            <div key={s.title} className="flex flex-col gap-2 card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="AI Journey"
          title="Part of a family of AI creativity apps"
          description={`FxAI is one of ${COMPANION_APPS.length + 1} apps in the AI Journey suite. Each explores a different corner of AI creativity, and FxAI helps you discover them all from its AI Tools tab.`}
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      <CTA />
    </>
  );
}
