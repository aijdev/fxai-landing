import type { Metadata } from "next";
import { metaFrom } from "./lib/seo";
import { getDictionary } from "./i18n/getDictionary";
import { AppShell } from "./components/AppShell";
import { HomeView } from "./views/HomeView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.home,
  "/",
  "en",
  { absoluteTitle: true },
);

export default function Page() {
  return (
    <AppShell locale="en">
      <HomeView locale="en" />
    </AppShell>
  );
}
