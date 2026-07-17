import { getContent } from "../lib/content";
import { faqSchema } from "../lib/schema";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";

export function FaqView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const p = getDictionary(locale).faqPage;
  const common = getDictionary(locale).common;

  return (
    <>
      <JsonLd data={faqSchema(content.allFaqs)} />

      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/faq" },
        ]}
        intro={p.header.intro}
        locale={locale}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {content.faqs.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold tracking-tight">{group.category}</h2>
              <FaqList items={group.items} />
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title={p.cta.title}
        description={p.cta.description}
        secondary={{ label: p.cta.secondary, href: "/contact" }}
        locale={locale}
      />
    </>
  );
}
