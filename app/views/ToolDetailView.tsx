import { getTool } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedUrl } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { AppShot } from "../components/AppShot";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { FaqList } from "../components/Faq";
import { RelatedFeatures } from "../components/RelatedFeatures";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export type ToolSlug = "retouch" | "restore" | "edit" | "erase";

const PICALIVE_HREF = "https://picalive.app/features/animate-old-photos";

export function ToolDetailView({
  slug,
  locale,
}: {
  slug: ToolSlug;
  locale: Locale;
}) {
  const tool = getTool(slug, locale)!;
  const d = getDictionary(locale);
  const tp = d.toolPages[slug];
  const common = d.common;

  const hasOptions = "optionsTitle" in tp && tool.options;
  const hasExamples = "examples" in tp;
  const hasCrossPromo = "crossPromo" in tp;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: `${tool.name} — FxAI`,
          description: tool.summary,
          url: localizedUrl(tool.href, locale),
          locale,
        })}
      />
      <JsonLd data={faqSchema(tp.faqs)} />

      <PageHeader
        eyebrow={tool.eyebrow}
        title={tp.headerTitle}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: d.featuresPage.header.eyebrow, path: "/features" },
          { name: tool.name, path: tool.href },
        ]}
        intro={tp.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold tracking-tight">{tp.leadTitle}</h2>
            <p className="text-lg leading-relaxed text-muted">{tp.leadBody}</p>
            <CheckList items={tp.checklist} />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <AppShot scene={tool.scene} priority />
          </div>
        </div>
      </Section>

      {hasOptions ? (
        <Section className="bg-surface">
          <SectionHeading
            eyebrow={tool.optionsLabel}
            title={"optionsTitle" in tp ? tp.optionsTitle : ""}
            description={"optionsDescription" in tp ? tp.optionsDescription : ""}
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
      ) : null}

      <Section className={hasOptions ? "" : "bg-surface"}>
        <SectionHeading eyebrow={d.home.howSection.eyebrow} title={tp.howTitle} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tp.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 card p-6">
              <span className="text-4xl font-bold text-gradient">{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {hasExamples && "examples" in tp ? (
        <Section>
          <SectionHeading
            eyebrow={"examplesTitle" in tp ? "" : ""}
            title={tp.examplesTitle}
            description={tp.examplesDescription}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {tp.examples.map((ex) => (
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
      ) : null}

      {hasCrossPromo && "crossPromo" in tp ? (
        <Section className="bg-surface">
          <div className="card relative overflow-hidden p-8 sm:p-10">
            <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative flex flex-col gap-4">
              <span className="eyebrow">{tp.crossPromo.eyebrow}</span>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {tp.crossPromo.title}
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted">
                {tp.crossPromo.bodyPre}
                <a
                  href={PICALIVE_HREF}
                  target="_blank"
                  rel="noopener"
                  className="font-medium text-brand underline-offset-4 hover:underline"
                >
                  {tp.crossPromo.linkText}
                </a>
                {tp.crossPromo.bodyPost}
              </p>
            </div>
          </div>
        </Section>
      ) : null}

      <Section className={hasExamples || hasCrossPromo ? "bg-surface" : ""}>
        <SectionHeading eyebrow={d.home.faqSection.eyebrow} title={tp.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={tp.faqs} />
        </div>
      </Section>

      <RelatedFeatures currentSlug={slug} locale={locale} />

      <CTA
        title={tp.ctaTitle}
        description={tp.ctaDescription}
        secondary={{ label: tp.ctaSecondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
