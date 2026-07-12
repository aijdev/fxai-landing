import { renderOgCard, OG_SIZE } from "../lib/ogCard";

export const alt = "FxAI Features — Retouch, Restore, Edit & Erase";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Four pro tools,",
    line2: "one simple app",
    tags: ["Retouch", "Restore", "Edit", "Erase", "iPhone & iPad"],
  });
}
