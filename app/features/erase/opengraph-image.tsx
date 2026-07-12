import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "FxAI — AI Erase, Remove Objects from Photos";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Brush it away,",
    line2: "like it was never there",
    tags: ["Object removal", "One brush", "iPhone & iPad"],
  });
}
