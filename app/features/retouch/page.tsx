import type { Metadata } from "next";
import { metaFrom } from "../../lib/seo";
import { getDictionary } from "../../i18n/getDictionary";
import { AppShell } from "../../components/AppShell";
import { ToolDetailView } from "../../views/ToolDetailView";

export const metadata: Metadata = metaFrom(
  getDictionary("en").meta.retouch,
  "/features/retouch",
  "en",
);

export default function Page() {
  return (
    <AppShell locale="en">
      <ToolDetailView slug="retouch" locale="en" />
    </AppShell>
  );
}
