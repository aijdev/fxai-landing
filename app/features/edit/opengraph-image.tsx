import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "FxAI — AI Edit, Change Photos by Describing It";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Say the edit,",
    line2: "see the edit",
    tags: ["Plain language", "No layers", "iPhone & iPad"],
  });
}
