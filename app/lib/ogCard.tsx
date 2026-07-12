import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };

// The FxAI app icon, inlined as a data URI so it can render inside the card.
const logoSrc = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), "public", "logo.jpg"),
).toString("base64")}`;

/**
 * Shared branded social-share card. Route-level `opengraph-image.tsx` files
 * call this with a page-specific headline so each key page gets its own OG
 * image (same brand frame as the root card, different title).
 */
export function renderOgCard({
  line1,
  line2,
  tags,
}: {
  line1: string;
  /** Second headline line, rendered in the brand gradient. */
  line2: string;
  tags: string[];
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070810",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle, #14e0c4 0%, rgba(20,224,196,0) 70%)",
            opacity: 0.5,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -140,
            width: 660,
            height: 660,
            borderRadius: "50%",
            background: "radial-gradient(circle, #9a54ff 0%, rgba(154,84,255,0) 70%)",
            opacity: 0.55,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={74}
            height={74}
            style={{ borderRadius: 20 }}
          />
          <div style={{ fontSize: 38, fontWeight: 700, color: "white" }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            {line1}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
              backgroundImage:
                "linear-gradient(100deg, #2fe6cd, #5f8bff 45%, #b06bff 78%, #ff5ea0)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {line2}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            color: "#b9b9c8",
          }}
        >
          {tags.map((tag, i) => (
            <div key={tag} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              {i > 0 ? <span style={{ display: "flex", color: "#4a4a58" }}>•</span> : null}
              <span style={{ display: "flex", color: i === tags.length - 1 ? "white" : "#b9b9c8" }}>
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
