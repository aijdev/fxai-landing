import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "FxAI — Photo Restore for Old Pictures";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Old photos,",
    line2: "good as new",
    tags: ["Repair", "Unblur", "Colorize", "iPhone & iPad"],
  });
}
