import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { SUPPORT_EMAIL } from "../lib/site";

import { AppShell } from "../components/AppShell";
import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";
import {
  ShieldIcon,
  FaceIcon,
  MailIcon,
  CheckIcon,
} from "../components/Icons";

// Legal pages are English-only: single English canonical, no hreflang alternates.
export const metadata: Metadata = buildMetadata({
  title: "Privacy — How FxAI Handles Your Data",
  description:
    "An overview of privacy in FxAI: no accounts or logins, explicit App Tracking Transparency consent, a content-safety filter, and privacy-forward analytics. Learn how your photos and data are handled.",
  path: "/privacy",
  locale: "en",
  alternates: false,
  keywords: ["FxAI privacy", "AI app privacy", "app tracking transparency"],
});

const PRINCIPLES = [
  {
    icon: <FaceIcon className="h-6 w-6" />,
    title: "No accounts, no logins",
    body: "FxAI has no user accounts, profiles, or passwords. You can start enhancing photos immediately, and there's no personal profile to manage or leak. Your FxAI Pro status is stored on your device.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Consent before tracking",
    body: "Before any ad or analytics tracking, FxAI presents Apple's App Tracking Transparency prompt, so you decide what you're comfortable with up front.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "A content-safety filter",
    body: "In the Edit tool, prompts are screened and unsafe requests are blocked with a guidelines message before they're sent, helping keep the experience appropriate for everyone.",
  },
  {
    icon: <MailIcon className="h-6 w-6" />,
    title: "Privacy-forward analytics",
    body: "Usage analytics are handled with privacy in mind. They help improve the app; they aren't a profile of you sold on to anyone.",
  },
];

export default function PrivacyPage() {
  return (
    <AppShell locale="en">
      <PageHeader
        eyebrow="Privacy"
        title="Privacy at FxAI"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
        intro="FxAI is designed to be genuinely useful without asking for more than it needs. Here's a plain-language overview of how the app approaches your privacy."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 card p-7">
              <span className="icon-badge h-11 w-11">{p.icon}</span>
              <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Your photos and results</h2>
            <p className="leading-relaxed text-muted">
              FxAI enhances images by calling hosted AI services, so the photo you
              choose is processed to produce your result. Results aren&apos;t stored
              in a personal cloud gallery — once you save an image to your
              device&apos;s photo library, it&apos;s yours to keep and share.
              Free-tier exports carry a small FxAI watermark; FxAI Pro removes it
              from every image you save or share.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Subscriptions</h2>
            <p className="leading-relaxed text-muted">
              FxAI Pro is purchased and managed through your Apple ID. Your
              subscription entitlement is stored per device rather than in a
              cross-device account, and Restore Purchases re-applies an active
              subscription on the same device. Payment is handled entirely by
              Apple — FxAI never sees your card details.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold tracking-tight">Questions about your data</h2>
            <p className="leading-relaxed text-muted">
              This page is a plain-language summary, not the full legal policy. For
              the complete privacy policy, data-handling details, or any specific
              request, email{" "}
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
        title="Enhance with confidence"
        description="Download FxAI and start improving your photos — no account, no profile, no fuss."
        secondary={{ label: "Read the FAQ", href: "/faq" }}
      />
    </AppShell>
  );
}
