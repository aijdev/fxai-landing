import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { PROBLEMS_SOLVED, USE_CASES } from "../lib/content";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { UseCaseCard } from "../components/UseCaseCard";
import { AppStoreButton } from "../components/AppStoreButton";
import { CTA } from "../components/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Use Cases — What You Can Do With FxAI",
  description:
    "Real-world ways people use FxAI: perfecting selfies, restoring old family photos, polishing social media content, erasing distractions, and making creative edits — all without Photoshop.",
  path: "/use-cases",
  keywords: [
    "AI photo enhancer use cases",
    "restore old photos app",
    "AI photo editing ideas",
    "remove object from photo",
  ],
});

export default function UseCasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Use cases"
        title="What you can do with FxAI"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Use Cases", path: "/use-cases" },
        ]}
        intro="FxAI is built for everyday people with a camera roll and a moment they want to look its best. Here are the real scenarios where it shines — and the exact problem it solves in each."
        actions={<AppStoreButton size="md" />}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Problems solved"
            title="If you've ever thought one of these, FxAI is for you"
            align="center"
          />
          <ul className="mt-10 flex flex-col gap-3">
            {PROBLEMS_SOLVED.map((problem) => (
              <li
                key={problem}
                className="rounded-2xl border border-border bg-card px-6 py-4 text-lg text-muted-strong shadow-soft"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTA
        title="Make your photo better"
        description="Whatever you're trying to fix or improve, FxAI turns it into a polished, share-ready image in seconds. Download free."
        secondary={{ label: "Explore features", href: "/features" }}
      />
    </>
  );
}
