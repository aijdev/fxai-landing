import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { AboutView } from "../views/AboutView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.about,
  "/about",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <AboutView locale="en" />
    </AppShell>
  );
}
