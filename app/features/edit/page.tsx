import type { Metadata } from "next";
import { metaFrom } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { AppShell } from "../../components/AppShell";
import { ToolDetailView } from "../../views/ToolDetailView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.edit,
  "/features/edit",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <ToolDetailView slug="edit" locale="en" />
    </AppShell>
  );
}
