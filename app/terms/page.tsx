import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SITE_NAME, SUPPORT_EMAIL } from "../lib/site";

import { AppShell } from "../components/AppShell";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";

// Legal pages are English-only: single English canonical, no hreflang alternates.
export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "A plain-language summary of the FxAI Terms of Use — using the app, subscriptions and billing through Apple, acceptable use and content safety, and ownership of the photos you enhance.",
  path: "/terms",
  locale: "en",
  alternates: false,
  keywords: ["FxAI terms of use", "FxAI terms", "photo enhancer app terms"],
});

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "Using FxAI",
    body: "FxAI lets you enhance photos with AI on iPhone and iPad — retouch portraits, restore old pictures, edit by description, and erase unwanted objects. You may use the app for personal, non-commercial enjoyment. You are responsible for the photos you upload and should only use images you have the right to use.",
  },
  {
    title: "No account needed",
    body: "FxAI has no logins or accounts. Your usage and any FxAI Pro entitlement are tied to an anonymous identifier on your device rather than to a personal account, so there is no username or password to manage.",
  },
  {
    title: "Subscriptions & billing",
    body: "FxAI is free to download and try. FxAI Pro is an optional auto-renewing subscription purchased through your Apple ID. Payment is charged to your Apple account, renews automatically unless cancelled at least 24 hours before the period ends, and can be managed or cancelled anytime in your Apple ID settings. Current plans are shown inside the app.",
  },
  {
    title: "Acceptable use & content safety",
    body: "Don't use FxAI to create, upload, or share content that is unlawful, harmful, deceptive, or that impersonates or harasses others. A content-safety filter may reject images it detects as unsafe or inappropriate, and we may limit or suspend access that violates these terms or abuses the service.",
  },
  {
    title: "Your content & ownership",
    body: "The enhanced photos you create from your own pictures are yours to save and share. The FxAI app, its design, branding, and underlying technology remain the property of FxAI and the AI Journey team. Free-tier exports include a small FxAI watermark; FxAI Pro removes it.",
  },
  {
    title: "Disclaimers",
    body: "FxAI is provided “as is.” AI-generated results can vary, and we don't guarantee that every enhancement will meet your expectations or that the service will be uninterrupted. To the extent permitted by law, FxAI is not liable for indirect or incidental damages arising from use of the app.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms as the app evolves. Continued use of FxAI after an update means you accept the revised terms. Significant changes will be reflected here.",
  },
];

export default function TermsPage() {
  return (
    <AppShell locale="en">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Use", path: "/terms" },
        ]}
        intro={`A plain-language summary of the terms for using ${SITE_NAME}. This overview is not a substitute for the full legal agreement — contact us anytime for the complete text.`}
      />

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
              <p className="leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="leading-relaxed text-muted">
              Questions about these terms? Email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              and the team will help.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Ready to enhance your first photo?"
        description="Download FxAI free and see the before/after for yourself."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </AppShell>
  );
}
