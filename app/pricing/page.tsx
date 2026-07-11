import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { FAQS, PLANS, PLAN_COMPARISON, PRO_BENEFITS } from "../lib/content";
import { faqSchema } from "../lib/schema";

import { PageHeader } from "../components/PageHeader";
import { Section, SectionHeading } from "../components/Section";
import { AppStoreButton } from "../components/AppStoreButton";
import { Button } from "../components/Button";
import { FaqList } from "../components/Faq";
import { CTA } from "../components/CTA";
import { JsonLd } from "../components/JsonLd";
import { CheckIcon } from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Pricing — Free to Use, Unlimited With FxAI Pro",
  description:
    "FxAI is free to download and use. FxAI Pro unlocks unlimited generations, no ads, no watermarks, and priority processing, with a free trial and cancel-anytime billing. See plans and what's included.",
  path: "/pricing",
  keywords: [
    "FxAI Pro price",
    "AI photo enhancer subscription",
    "FxAI pricing",
    "photo app free trial",
  ],
});

// The FxAI Pro & billing FAQ group.
const billingFaqs = FAQS[2].items;

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqSchema(billingFaqs)} />

      <PageHeader
        eyebrow="Pricing"
        title="Free to use. Unlimited with Pro."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ]}
        intro="Download FxAI free and use every tool right away. When you want unlimited, ad-free, watermark-free enhancement, FxAI Pro is one tap away — with a free trial and cancel-anytime billing."
        actions={<AppStoreButton size="md" />}
      />

      {/* Plans */}
      <Section>
        <SectionHeading
          eyebrow="Plans"
          title="Choose the plan that fits"
          description="Pro is billed through the App Store and includes a free-trial option. Prices below are illustrative — the App Store shows the exact price for your region before you subscribe."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {/* Free */}
          <div className="card flex flex-col gap-5 p-8">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold tracking-tight">Free</h3>
              <p className="text-sm text-muted">Everything to get started</p>
            </div>
            <p className="flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight">$0</span>
              <span className="text-muted">/ forever</span>
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              <li>All four AI tools</li>
              <li>Before / after slider on every result</li>
              <li>Save &amp; share to any app</li>
              <li>Ad-supported, with a small watermark</li>
            </ul>
            <AppStoreButton size="md" className="mt-auto w-full justify-center" />
          </div>

          {/* Pro */}
          <div className="card relative flex flex-col gap-5 overflow-hidden p-8 ring-1 ring-brand/40">
            <div className="brand-glow pointer-events-none absolute inset-0 opacity-70" />
            <div className="relative flex flex-col gap-5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold tracking-tight">FxAI Pro</h3>
                  <p className="text-sm text-muted">Unlimited, ad-free, watermark-free</p>
                </div>
                <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Best value
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 ${
                      plan.highlight
                        ? "border-brand/40 bg-surface"
                        : "border-border bg-card"
                    }`}
                  >
                    <div>
                      <p className="font-semibold">{plan.name}</p>
                      <p className="text-xs text-muted">{plan.intro}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold tracking-tight">{plan.price}</p>
                      <p className="text-xs text-muted">{plan.billing.replace("Billed ", "")}</p>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="flex flex-col gap-2.5">
                {PRO_BENEFITS.map((b) => (
                  <li key={b.title} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-muted-strong">{b.title}</span>
                  </li>
                ))}
              </ul>
              <AppStoreButton size="md" className="mt-auto w-full justify-center" />
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">
          All plans are auto-renewing and can be cancelled anytime in your Apple
          ID settings. Prices are localized and shown in the App Store; the
          figures above are illustrative.
        </p>
      </Section>

      {/* Comparison */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Free vs Pro"
          title="What you get on each tier"
          align="center"
        />
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card text-left">
                <th scope="col" className="px-5 py-4 font-semibold">Feature</th>
                <th scope="col" className="px-4 py-4 text-center font-semibold">Free</th>
                <th scope="col" className="px-4 py-4 text-center font-semibold text-brand">Pro</th>
              </tr>
            </thead>
            <tbody>
              {PLAN_COMPARISON.map((row) => (
                <tr key={row.feature}>
                  <th scope="row" className="border-t border-border bg-card px-5 py-3.5 text-left font-medium">
                    {row.feature}
                  </th>
                  <td className="border-t border-border bg-card px-4 py-3.5 text-center">
                    <Cell on={row.free} />
                  </td>
                  <td className="border-t border-border bg-card px-4 py-3.5 text-center">
                    <Cell on={row.pro} accent />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/faq" variant="secondary">
            Read billing FAQ
          </Button>
        </div>
      </Section>

      {/* Billing FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="FxAI Pro &amp; billing" />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqList items={billingFaqs} />
        </div>
      </Section>

      <CTA
        title="Start free, upgrade anytime"
        description="Download FxAI free, enhance your first photo, and go Pro whenever you're ready."
        secondary={{ label: "Explore features", href: "/features" }}
      />
    </>
  );
}

function Cell({ on, accent = false }: { on: boolean; accent?: boolean }) {
  if (!on) {
    return (
      <span aria-label="Not included" className="text-border-strong">
        —
      </span>
    );
  }
  return (
    <span
      aria-label="Included"
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-white ${
        accent ? "bg-brand-gradient" : "bg-border-strong"
      }`}
    >
      <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
    </span>
  );
}
