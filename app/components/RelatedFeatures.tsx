import Link from "next/link";
import { getContent } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { Section, SectionHeading } from "./Section";
import { ArrowRightIcon } from "./Icons";

/**
 * Sideways links between tool pages so every feature deep-links to its
 * siblings (not just back up to the /features hub) — strengthens the internal
 * link mesh for SEO and gives readers an obvious next page.
 */
export function RelatedFeatures({
  currentSlug,
  locale = defaultLocale,
}: {
  currentSlug: string;
  locale?: Locale;
}) {
  const related = getContent(locale).tools.filter((t) => t.slug !== currentSlug);
  if (related.length === 0) return null;

  const t = getDictionary(locale).common.relatedFeatures;

  return (
    <Section>
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {related.map((tool) => (
          <Link
            key={tool.slug}
            href={localizedPath(tool.href, locale)}
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
