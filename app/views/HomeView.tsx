import Link from "next/link";
import { RATING, USERS } from "../lib/site";
import { getContent } from "../lib/content";
import { softwareAppSchema, faqSchema } from "../lib/schema";
import { type Locale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { Container } from "../components/Container";
import { Section, SectionHeading } from "../components/Section";
import { Button } from "../components/Button";
import { AppStoreButton } from "../components/AppStoreButton";
import { AppShot } from "../components/AppShot";
import { StatStrip } from "../components/StatStrip";
import { FeatureCard } from "../components/FeatureCard";
import { AlternatingFeature } from "../components/AlternatingFeature";
import { HowItWorks } from "../components/HowItWorks";
import { UseCaseCard } from "../components/UseCaseCard";
import { Testimonials } from "../components/Testimonials";
import { CompanionApps } from "../components/CompanionApps";
import { CheckList } from "../components/CheckList";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { StarIcon } from "../components/Icons";

export function HomeView({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const d = getDictionary(locale);
  const h = d.home;
  const homeFaqs = content.faqs[0].items;
  const scenes = ["retouch", "restore", "edit", "erase"] as const;

  return (
    <>
      <JsonLd data={softwareAppSchema({ locale })} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="brand-glow pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
            <div className="flex flex-col items-start gap-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-strong shadow-soft">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5 text-brand-pink" />
                  ))}
                </span>
                <span className="font-semibold text-foreground">{RATING}</span>
                <span className="text-border-strong">·</span>
                {USERS} {h.hero.ratingSuffix}
              </span>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {h.hero.titlePre}{" "}
                <span className="text-gradient">{h.hero.titleAccent}</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                {h.hero.description}
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton locale={locale} />
                <Button href="/features" variant="secondary" size="lg" locale={locale}>
                  {h.hero.exploreCta}
                </Button>
              </div>

              <p className="text-sm text-muted">{h.hero.freeNote}</p>
            </div>

            <div className="relative mx-auto w-full max-w-[340px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-[6%] top-[6%] bottom-[6%] rounded-full bg-brand-gradient opacity-20 blur-3xl"
              />
              <div className="relative animate-float">
                <AppShot scene="retouch" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social proof stats */}
      <Container className="pt-6">
        <StatStrip locale={locale} />
      </Container>

      {/* Tools overview */}
      <Section id="tools">
        <SectionHeading
          eyebrow={h.toolsSection.eyebrow}
          title={h.toolsSection.title}
          description={h.toolsSection.description}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.tools.map((tool) => (
            <FeatureCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Deep tool highlights */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          {h.highlights.map((hl, i) => (
            <AlternatingFeature
              key={content.tools[i].slug}
              reversed={i % 2 === 1}
              eyebrow={hl.eyebrow}
              title={hl.title}
              description={hl.description}
              bullets={hl.bullets}
              scene={scenes[i]}
              shotSrc={i === 1 ? "/screenshot_1.jpg" : undefined}
              shotAlt={i === 1 ? hl.title : undefined}
              cta={{ label: hl.cta, href: content.tools[i].href }}
              locale={locale}
            />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow={h.howSection.eyebrow}
          title={h.howSection.title}
          description={h.howSection.description}
        />
        <div className="mt-12">
          <HowItWorks steps={content.howItWorks} />
        </div>
      </Section>

      {/* Use cases */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.useCasesSection.eyebrow}
          title={h.useCasesSection.title}
          description={h.useCasesSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.useCases.slice(0, 3).map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} locale={locale} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/use-cases" variant="secondary" locale={locale}>
            {h.useCasesSection.seeAll}
          </Button>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeading
          eyebrow={h.benefitsSection.eyebrow}
          title={h.benefitsSection.title}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map((benefit) => (
            <div key={benefit.title} className="card card-hover flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.body}</p>
            </div>
          ))}
        </div>

        <div className="card mx-auto mt-12 max-w-3xl p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold">{h.problemsCard.heading}</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {content.problemsSolved.map((problem) => (
              <li key={problem} className="text-lg text-muted-strong">
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.testimonialsSection.eyebrow}
          title={h.testimonialsSection.title.replace("{users}", USERS)}
          description={h.testimonialsSection.description.replace("{rating}", RATING)}
        />
        <div className="mt-12">
          <Testimonials items={content.testimonials} />
        </div>
      </Section>

      {/* Pro teaser */}
      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">{h.pro.eyebrow}</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {h.pro.title}
              </h2>
              <p className="text-lg leading-relaxed text-muted">{h.pro.description}</p>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton locale={locale} />
                <Button href="/features" variant="secondary" size="lg" locale={locale}>
                  {h.pro.exploreCta}
                </Button>
              </div>
            </div>
            <CheckList
              items={content.proBenefits.map((b) => b.title)}
              className="lg:justify-self-end"
            />
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow={h.companionSection.eyebrow}
          title={h.companionSection.title}
          description={h.companionSection.description}
        />
        <div className="mt-12">
          <CompanionApps locale={locale} />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow={h.faqSection.eyebrow}
          title={h.faqSection.title}
          description={
            <>
              {h.faqSection.descriptionPre}
              <Link
                href={localizedPath("/faq", locale)}
                className="font-medium text-brand"
              >
                {h.faqSection.seeFullFaq}
              </Link>
              .
            </>
          }
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={homeFaqs} />
        </div>
      </Section>

      <CTA
        title={h.cta.title}
        description={h.cta.description}
        secondary={{ label: h.cta.secondary, href: "/features" }}
        locale={locale}
      />
    </>
  );
}
