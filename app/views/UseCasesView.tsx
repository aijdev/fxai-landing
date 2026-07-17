import { getContent } from "../lib/content";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { UseCaseCard } from "../components/UseCaseCard";
import { AppStoreButton } from "../components/AppStoreButton";
import { CTA } from "../components/CTA";

export function UseCasesView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const p = getDictionary(locale).useCasesPage;
  const common = getDictionary(locale).common;

  return (
    <>
      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/use-cases" },
        ]}
        intro={p.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.useCases.map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} locale={locale} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={p.problemsSection.eyebrow}
            title={p.problemsSection.title}
            align="center"
          />
          <ul className="mt-10 flex flex-col gap-3">
            {content.problemsSolved.map((problem) => (
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
        title={p.cta.title}
        description={p.cta.description}
        secondary={{ label: p.cta.secondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
