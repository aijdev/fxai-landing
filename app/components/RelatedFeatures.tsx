import Link from "next/link";
import { TOOLS } from "../lib/content";
import { Section, SectionHeading } from "./Section";
import { ArrowRightIcon } from "./Icons";

/**
 * Sideways links between tool pages so every feature deep-links to its
 * siblings (not just back up to the /features hub) — strengthens the internal
 * link mesh for SEO and gives readers an obvious next page.
 */
export function RelatedFeatures({ currentSlug }: { currentSlug: string }) {
  const related = TOOLS.filter((t) => t.slug !== currentSlug);
  if (related.length === 0) return null;

  return (
    <Section>
      <SectionHeading
        eyebrow="Keep exploring"
        title="More FxAI tools"
        description="Four professional-grade tools, one simple app. See what else your photos can become."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.href}
            className="card card-hover group flex flex-col gap-3 p-7"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl font-semibold tracking-tight">
                {tool.name}
              </h3>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
            </div>
            <p className="text-sm leading-relaxed text-muted">{tool.tagline}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
