import { RATING, USERS } from "../lib/site";
import { getContent } from "../lib/content";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { CompanionApps } from "../components/CompanionApps";
import { CTA } from "../components/CTA";

export function AboutView({ locale }: { locale: Locale }) {
  const p = getDictionary(locale).aboutPage;
  const common = getDictionary(locale).common;
  const companionCount = getContent(locale).companionApps.length + 1;

  return (
    <>
      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/about" },
        ]}
        intro={p.header.intro}
        locale={locale}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-lg leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-foreground">{p.missionLead}</span>
            {p.missionRest}
          </p>
          <p>{p.missionBody2}</p>
          <p className="card p-6 text-xl font-medium text-foreground">{p.pullQuote}</p>
          <p>
            {p.ratingLine.replace("{rating}", RATING).replace("{users}", USERS)}
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={p.audienceSection.eyebrow}
          title={p.audienceSection.title}
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl border border-border">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  {p.audienceSection.colAudience}
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  {p.audienceSection.colWant}
                </th>
                <th scope="col" className="px-5 py-4 text-sm font-semibold">
                  {p.audienceSection.colHow}
                </th>
              </tr>
            </thead>
            <tbody>
              {p.audience.map((row) => (
                <tr key={row.who}>
                  <th
                    scope="row"
                    className="border-t border-border bg-card px-5 py-4 text-left text-sm font-medium"
                  >
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
        <SectionHeading
          eyebrow={p.strengthsSection.eyebrow}
          title={p.strengthsSection.title}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.strengths.map((s) => (
            <div key={s.title} className="flex flex-col gap-2 card p-6">
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow={p.familySection.eyebrow}
          title={p.familySection.title}
          description={p.familySection.description.replace(
            "{count}",
            String(companionCount),
          )}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>

      <CTA locale={locale} />
    </>
  );
}
