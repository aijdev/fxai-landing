import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { APP_STORE_URL, SUPPORT_EMAIL } from "../lib/site";

import { PageHeader } from "../components/PageHeader";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { CTA } from "../components/CTA";
import { MailIcon, StarIcon, WandIcon } from "../components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "Contact FxAI — Support & Feedback",
  description:
    "Get in touch with the FxAI team. Email support, share feedback, or rate FxAI on the App Store. We route happy reviews to the App Store and questions straight to our inbox.",
  path: "/contact",
  keywords: ["FxAI support", "FxAI contact", "FxAI feedback"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        intro="Whether you have a question, hit a snag, or just restored a photo you're proud of, the FxAI team is one message away."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <MailIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">Email support</h2>
            <p className="text-sm leading-relaxed text-muted">
              Questions, bug reports, subscription help, or privacy requests — send
              them our way and we&apos;ll get back to you.
            </p>
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
            <h2 className="text-lg font-semibold tracking-tight">In-app feedback</h2>
            <p className="text-sm leading-relaxed text-muted">
              After a result, tap “Happy with the result?” If something isn&apos;t
              right, choose “Not really” to send feedback that emails the team
              directly.
            </p>
            <Button href="/faq" variant="secondary" className="mt-auto w-full justify-center">
              Read the FAQ first
            </Button>
          </div>

          <div className="flex flex-col gap-4 card p-7">
            <span className="icon-badge h-11 w-11">
              <StarIcon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-semibold tracking-tight">Rate FxAI</h2>
            <p className="text-sm leading-relaxed text-muted">
              Enjoying the app? A rating on the App Store genuinely helps other
              people discover FxAI.
            </p>
            <Button
              href={APP_STORE_URL}
              external
              variant="secondary"
              className="mt-auto w-full justify-center"
            >
              Rate on the App Store
            </Button>
          </div>
        </div>
      </Section>

      <CTA
        title="Haven't tried FxAI yet?"
        description="Download it free and see what you can do to a photo in your first minute."
        secondary={{ label: "Explore features", href: "/features" }}
      />
    </>
  );
}
