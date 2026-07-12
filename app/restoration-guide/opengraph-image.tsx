import { renderOgCard, OG_SIZE } from "../lib/ogCard";

export const alt = "FxAI — How to Restore Old Photos on iPhone";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Restore old photos",
    line2: "in four steps",
    tags: ["Capture", "Restore", "Colorize", "iPhone & iPad"],
  });
}
