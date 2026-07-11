import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "./lib/seo";
import { RATING, SITE_NAME, USERS } from "./lib/site";
import {
  BENEFITS,
  FAQS,
  PRO_BENEFITS,
  PROBLEMS_SOLVED,
  TOOLS,
  USE_CASES,
} from "./lib/content";
import { softwareAppSchema, faqSchema } from "./lib/schema";

import { Container } from "./components/Container";
import { Section, SectionHeading } from "./components/Section";
import { Button } from "./components/Button";
import { AppStoreButton } from "./components/AppStoreButton";
import { BeforeAfter } from "./components/BeforeAfter";
import { ToolTabBar } from "./components/ToolTabBar";
import { StatStrip } from "./components/StatStrip";
import { FeatureCard } from "./components/FeatureCard";
import { AlternatingFeature } from "./components/AlternatingFeature";
import { HowItWorks } from "./components/HowItWorks";
import { UseCaseCard } from "./components/UseCaseCard";
import { Testimonials } from "./components/Testimonials";
import { CompanionApps } from "./components/CompanionApps";
import { CheckList } from "./components/CheckList";
import { FaqList } from "./components/Faq";
import { CTA } from "./components/CTA";
import { JsonLd } from "./components/JsonLd";
import { StarIcon } from "./components/Icons";

export const metadata: Metadata = buildMetadata({
  title: "FxAI — All-In-One AI Photo Enhancer for iPhone & iPad",
  description:
    "Retouch portraits, restore old photos, edit pictures by describing the change, and erase unwanted objects — all in one iOS app. Download FxAI free and see the before/after in seconds.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "AI photo enhancer app",
    "AI photo editor iPhone",
    "photo restoration app",
    "unblur photo app",
    "object remover app",
  ],
});

const homeFaqs = FAQS[0].items;

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />
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
                {USERS} happy users
              </span>

              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Every photo, <br className="hidden sm:block" />
                instantly <span className="text-gradient">enhanced</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                FxAI is the all-in-one AI photo enhancer for iPhone and iPad.
                Retouch portraits, restore old memories, edit by describing the
                change, and erase anything you don&apos;t want — one tap, no
                editing skills, results in seconds.
              </p>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <AppStoreButton />
                <Button href="/features" variant="secondary" size="lg">
                  Explore the tools
                </Button>
              </div>

              <p className="text-sm text-muted">
                Free to download · No account required · iPhone &amp; iPad
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-[6%] top-[6%] bottom-[6%] rounded-full bg-brand-gradient opacity-20 blur-3xl"
              />
              <div className="relative animate-float">
                <BeforeAfter scene="retouch" id="hero" />
                <span className="absolute right-3 top-3 z-20 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                  ~10s
                </span>
                <div className="absolute inset-x-6 -bottom-5 z-20">
                  <ToolTabBar active="retouch" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social proof stats */}
      <Container className="pt-6">
        <StatStrip />
      </Container>

      {/* Tools overview */}
      <Section id="tools">
        <SectionHeading
          eyebrow="One app, four AI tools"
          title="Everything you need to make a photo better"
          description="FxAI bundles what usually takes several professional tools — a retoucher, a restorer, a generative editor, and an object remover — behind one simple, tap-and-go interface."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool) => (
            <FeatureCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Section>

      {/* Deep tool highlights */}
      <Section className="bg-surface">
        <div className="flex flex-col gap-20 lg:gap-28">
          <AlternatingFeature
            eyebrow="Retouch"
            title="Studio-quality portraits in one tap"
            description="Add a selfie or portrait, choose Natural, Enhanced, or Studio strength, and FxAI smooths skin, balances lighting, and adds polish automatically — then shows you the difference on a before/after slider."
            bullets={[
              "Three strengths: Natural, Enhanced, and Studio",
              "Smoother skin and balanced, flattering lighting",
              "Keeps every feature unmistakably yours",
              "See the improvement instantly, side by side",
            ]}
            scene="retouch"
            id="home-retouch"
            cta={{ label: "About AI Retouch", href: "/features/retouch" }}
          />
          <AlternatingFeature
            reversed
            eyebrow="Restore"
            title="Bring old memories back to life"
            description="Unblur a soft photo into HD, repair an old or degraded print, or add realistic color to a black-and-white image. Restore is the emotional heart of FxAI — the fastest way to revive a family archive."
            bullets={[
              "Unblur turns soft shots into crisp HD",
              "Restore repairs old, damaged, or faded photos",
              "Colorize adds lifelike color to black-and-white",
              "Perfect for reviving family memories",
            ]}
            scene="restore"
            id="home-restore"
            beforeLabel="Old"
            afterLabel="Restored"
            cta={{ label: "About Photo Restore", href: "/features/restore" }}
          />
          <AlternatingFeature
            eyebrow="Edit"
            title="Change a photo just by describing it"
            description="Type what you want — “add sunglasses”, “change the background to a beach” — and FxAI applies it. Every edit builds on the last, so you can refine step by step and generate variations until it's right."
            bullets={[
              "Plain-language edits, no tools to learn",
              "Iterative, multi-step refinement that remembers context",
              "Attach reference photos to guide the result",
              "Regenerate variations and pick your favorite",
            ]}
            scene="edit"
            id="home-edit"
            beforeLabel="Before"
            afterLabel="Edited"
            cta={{ label: "About AI Edit", href: "/features/edit" }}
          />
          <AlternatingFeature
            reversed
            eyebrow="Erase"
            title="Remove anything with a brush"
            description="Brush over a photobomber, a stray object, or a blemish and FxAI fills the gap seamlessly. Pan and zoom to work precisely, undo any stroke, and export a clean, distraction-free shot."
            bullets={[
              "Brush to remove objects, people, or blemishes",
              "Seamless AI fill where the object used to be",
              "Pan and zoom for precise, careful edits",
              "Undo any stroke before you save",
            ]}
            scene="erase"
            id="home-erase"
            beforeLabel="Before"
            afterLabel="Erased"
            cta={{ label: "About AI Erase", href: "/features/erase" }}
          />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="From photo to result in four taps"
          description="The same simple rhythm powers every tool in FxAI — once you learn one, you know them all."
        />
        <div className="mt-12">
          <HowItWorks />
        </div>
      </Section>

      {/* Use cases */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Use cases"
          title="What people do with FxAI"
          description="Whether you're polishing a selfie, reviving a family photo, or cleaning up a shot before you post it, FxAI meets you where your camera roll is."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.slice(0, 3).map((useCase) => (
            <UseCaseCard key={useCase.slug} useCase={useCase} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/use-cases" variant="secondary">
            See all use cases
          </Button>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionHeading
          eyebrow="Why FxAI"
          title="Built to remove every barrier to a better photo"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="card card-hover flex flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.body}</p>
            </div>
          ))}
        </div>

        <div className="card mx-auto mt-12 max-w-3xl p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold">FxAI is for you if you&apos;ve ever thought…</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {PROBLEMS_SOLVED.map((problem) => (
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
          eyebrow="Loved by everyday creators"
          title={`Join ${USERS} people already enhancing`}
          description={`FxAI holds a ${RATING}-star rating in the App Store. Here's what a few of them say.`}
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      {/* Pro teaser */}
      <Section>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="brand-glow pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">FxAI Pro</span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Free to start. Unlimited with Pro.
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                Every tool is free to use. Upgrade to Pro for unlimited
                generations, no ads, no watermarks, and priority processing —
                with a free trial and cancel-anytime billing.
              </p>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button href="/pricing" size="lg">
                  See pricing &amp; plans
                </Button>
                <AppStoreButton size="md" />
              </div>
            </div>
            <CheckList items={PRO_BENEFITS.map((b) => b.title)} className="lg:justify-self-end" />
          </div>
        </div>
      </Section>

      {/* Companion apps */}
      <Section className="bg-surface">
        <SectionHeading
          eyebrow="The AI Journey family"
          title="More AI creativity beyond FxAI"
          description="FxAI is part of a broader suite of AI creativity apps by the same team. Discover the companions right from the app's AI Tools tab."
        />
        <div className="mt-12">
          <CompanionApps />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description={
            <>
              Everything you need to know to get started.{" "}
              <Link href="/faq" className="font-medium text-brand">
                See the full FAQ
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
        title="Enhance your first photo today"
        description={`Download ${SITE_NAME} free and turn any photo into a polished, share-ready image in seconds.`}
        secondary={{ label: "Browse features", href: "/features" }}
      />
    </>
  );
}
