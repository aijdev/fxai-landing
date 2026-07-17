import { APP_STORE_URL, SUPPORT_EMAIL } from "../lib/site";
import { type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { CTA } from "../components/CTA";
import { MailIcon, StarIcon, WandIcon } from "../components/Icons";

export function ContactView({ locale }: { locale: Locale }) {
  const p = getDictionary(locale).contactPage;
  const common = getDictionary(locale).common;

  return (
    <>
      <PageHeader
        eyebrow={p.header.eyebrow}
        title={p.header.title}
        crumbs={[
          { name: common.breadcrumbHome, path: "/" },
          { name: p.header.eyebrow, path: "/contact" },
        ]}
        intro={p.header.intro}
        locale={locale}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <MailIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{p.emailCard.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{p.emailCard.body}</p>
            <Button
              href={`mailto:${SUPPORT_EMAIL}`}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
            >
              {SUPPORT_EMAIL}
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <WandIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">
              {p.feedbackCard.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted">{p.feedbackCard.body}</p>
            <Button
              href="/faq"
              variant="secondary"
              className="mt-auto w-full justify-center"
              locale={locale}
            >
              {p.feedbackCard.cta}
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <StarIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{p.rateCard.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{p.rateCard.body}</p>
            <Button
              href={APP_STORE_URL}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
            >
              {p.rateCard.cta}
            </Button>
          </div>
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
