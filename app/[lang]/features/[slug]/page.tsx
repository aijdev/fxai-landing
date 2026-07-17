import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { type Locale, prefixedLocales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/getDictionary";
import { metaFrom } from "../../../lib/seo";
import { TOOL_SLUGS } from "../../../lib/content";
import { ToolDetailView, type ToolSlug } from "../../../views/ToolDetailView";

export function generateStaticParams() {
  return prefixedLocales.flatMap((lang) =>
    TOOL_SLUGS.map((slug) => ({ lang, slug })),
  );
}

export const dynamicParams = false;

function isToolSlug(slug: string): slug is ToolSlug {
  return (TOOL_SLUGS as readonly string[]).includes(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  if (!isToolSlug(slug)) return {};
  return metaFrom(
    getDictionary(locale).meta[slug],
    `/features/${slug}`,
    locale,
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isToolSlug(slug)) notFound();
  return <ToolDetailView slug={slug} locale={lang as Locale} />;
}
