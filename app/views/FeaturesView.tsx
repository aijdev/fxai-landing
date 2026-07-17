import type { ReactNode } from "react";
import { getContent } from "../lib/content";
import { softwareAppSchema } from "../lib/schema";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { FeatureCard } from "../components/FeatureCard";
import { AlternatingFeature } from "../components/AlternatingFeature";
import { HowItWorks } from "../components/HowItWorks";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { CompanionApps } from "../components/CompanionApps";
import { JsonLd } from "../components/JsonLd";
import {
  BoltIcon,
  CompareIcon,
  LayersIcon,
  ShareIcon,
  ShieldIcon,
  ZoomIcon,
} from "../components/Icons";

const RESULT_ICONS: Record<string, ReactNode> = {
  slider: <CompareIcon className="h-6 w-6" />,
  share: <ShareIcon className="h-6 w-6" />,
  zoom: <ZoomIcon className="h-6 w-6" />,
  bolt: <BoltIcon className="h-6 w-6" />,
  layers: <LayersIcon className="h-6 w-6" />,
  shield: <ShieldIcon className="h-6 w-6" />,
};

export function FeaturesView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const p = getDictionary(locale).featuresPage;
  const common = getDictionary(locale).common;

  return (
    <>
      <JsonLd data={softwareAppSchema({ locale })} />

      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/features" },
        ]}
        intro={p.header.intro}
        actions={<AppStoreButton size="md" locale={locale} />}
        locale={locale}
      />

      {/* Tool cards */}
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.tools.map((tool) => (
            <FeatureCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Detailed tools */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          {p.highlights.map((h, i) => (
            <AlternatingFeature
              key={content.tools[i].slug}
              reversed={i % 2 === 1}
              eyebrow={content.tools[i].eyebrow}
              title={h.title}
              description={h.description}
              bullets={h.bullets}
              scene={content.tools[i].scene}
              cta={{
                label: `${p.exploreCtaPrefix} ${content.tools[i].name}`,
                href: content.tools[i].href,
              }}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      {/* Result experience */}
      <Section>
        <SectionHeading
          eyebrow={p.resultSection.eyebrow}
          title={p.resultSection.title}
          description={p.resultSection.description}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.resultFeatures.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 card p-6">
              <span className="icon-badge h-11 w-11">{RESULT_ICONS[item.icon]}</span>
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={p.howSection.eyebrow}
          title={p.howSection.title}
          description={p.howSection.description}
        />
        <div className="mt-12">
          <HowItWorks steps={content.howItWorks} />
        </div>
      </Section>

      {/* Free / Pro callout */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5 card p-8">
            <h2 className="text-2xl font-bold tracking-tight">{p.freeCard.title}</h2>
            <p className="text-muted leading-relaxed">{p.freeCard.body}</p>
            <Button href="/use-cases" variant="secondary" className="w-fit" locale={locale}>
              {p.freeCard.cta}
            </Button>
          </div>
          <div className="flex flex-col gap-5 card p-8">
            <h2 className="text-2xl font-bold tracking-tight">{p.proCard.title}</h2>
            <p className="text-muted leading-relaxed">{p.proCard.body}</p>
            <Button href="/faq" variant="secondary" className="w-fit" locale={locale}>
              {p.proCard.cta}
            </Button>
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={p.companionSection.eyebrow}
          title={p.companionSection.title}
          description={p.companionSection.description}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>
    </>
  );
}
