import type { Metadata } from "next";
import { metaFrom } from "../lib/seo";
import { getDictionary } from "../i18n/getDictionary";
import { AppShell } from "../components/AppShell";
import { UseCasesView } from "../views/UseCasesView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.useCases,
  "/use-cases",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <UseCasesView locale="en" />
    </AppShell>
  );
}
