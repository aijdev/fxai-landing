import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { FeaturesView } from "../views/FeaturesView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.features,
  "/features",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <FeaturesView locale="en" />
    </AppShell>
  );
}
