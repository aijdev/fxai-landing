import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { ContactView } from "../views/ContactView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.contact,
  "/contact",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <ContactView locale="en" />
    </AppShell>
  );
}
