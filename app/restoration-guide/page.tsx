import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { RestorationGuideView } from "../views/RestorationGuideView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.restorationGuide,
  "/restoration-guide",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <RestorationGuideView locale="en" />
    </AppShell>
  );
}
