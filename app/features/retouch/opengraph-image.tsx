import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "FxAI — AI Retouch, One-Tap Portrait Enhancer";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Your best photo,",
    line2: "without the retoucher",
    tags: ["Natural", "Enhanced", "Studio", "iPhone & iPad"],
  });
}
