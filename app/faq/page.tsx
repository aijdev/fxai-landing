import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { FaqView } from "../views/FaqView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.faq,
  "/faq",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <FaqView locale="en" />
    </AppShell>
  );
}
