import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedUrl } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CheckList } from "../components/CheckList";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

const PICALIVE_HREF = "https://picalive.app/features/animate-old-photos";

export function RestorationGuideView({ locale }: { locale: Locale }) {
  const p = getDictionary(locale).restorationGuidePage;
  const common = getDictionary(locale).common;

  return (
    <>
      <JsonLd
        data={softwareAppSchema({
          name: "FxAI Photo Restore",
          description:
            "Repair, unblur, and colorize old photos in one tap on iPhone and iPad.",
          url: localizedUrl("/restoration-guide", locale),
          locale,
        })}
      />
      <JsonLd data={faqSchema(p.faqs)} />

      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/restoration-guide" },
        ]}
        intro={p.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* Steps */}
      <Section>
        <SectionHeading
          eyebrow={p.stepsSection.eyebrow}
          title={p.stepsSection.title}
          description={p.stepsSection.description}
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 card p-6">
              <span className="text-4xl font-bold text-gradient">{i + 1}</span>
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
              eyebrow={p.tipsSection.eyebrow}
              title={p.tipsSection.title}
              align="left"
            />
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {p.tipsSection.body}
            </p>
            <Button
              href="/features/restore"
              variant="secondary"
              className="mt-6 w-fit"
              locale={locale}
            >
              {p.tipsSection.cta}
            </Button>
          </div>
          <CheckList items={p.tips} className="lg:mt-4" />
        </div>
      </Section>

      {/* Next step: animate */}
      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-4">
            <span className="eyebrow">{p.animateCard.eyebrow}</span>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {p.animateCard.title}
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted">
              {p.animateCard.bodyPre}
              <a
                href={PICALIVE_HREF}
                target="_blank"
                rel="noopener"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {p.animateCard.linkText}
              </a>
              {p.animateCard.bodyPost}
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeading eyebrow={getDictionary(locale).home.faqSection.eyebrow} title={p.faqTitle} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={p.faqs} />
        </div>
      </Section>

      <CTA
        title={p.ctaTitle}
        description={p.ctaDescription}
        secondary={{ label: p.ctaSecondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
