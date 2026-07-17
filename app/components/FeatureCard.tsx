import Link from "next/link";
import type { ReactNode } from "react";
import type { Tool } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import {
  ArrowRightIcon,
  EraserIcon,
  RestoreIcon,
  SmileIcon,
  WandIcon,
} from "./Icons";

const ICONS: Record<string, ReactNode> = {
  retouch: <SmileIcon className="h-6 w-6" />,
  restore: <RestoreIcon className="h-6 w-6" />,
  edit: <WandIcon className="h-6 w-6" />,
  erase: <EraserIcon className="h-6 w-6" />,
};

export function toolIcon(slug: string): ReactNode {
  return ICONS[slug] ?? <SmileIcon className="h-6 w-6" />;
}

/** Linked card summarising one AI tool. Used on the home + features hub. */
export function FeatureCard({
  tool,
  locale = defaultLocale,
}: {
  tool: Tool;
  locale?: Locale;
}) {
  const t = getDictionary(locale).common;
  return (
    <Link
      href={localizedPath(tool.href, locale)}
      className="card card-hover group flex flex-col gap-4 p-6"
    >
      <span className="icon-badge h-12 w-12">{toolIcon(tool.slug)}</span>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{tool.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{tool.tagline}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        {t.learnMore}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
