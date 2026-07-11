import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "./lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated once at build time for the static export (`output: "export"`).
export const dynamic = "force-static";

// Dynamic, branded social-share card shared by OpenGraph and Twitter across
// the whole site (Next merges this file into every route's metadata).
export default function OpengraphImage() {
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
            top: -160,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, #14e0c4 0%, rgba(20,224,196,0) 70%)",
            opacity: 0.5,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle, #9a54ff 0%, rgba(154,84,255,0) 70%)",
            opacity: 0.55,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 74,
              height: 74,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.03em",
              background:
                "linear-gradient(135deg, #14e0c4 0%, #4c7bff 45%, #9a54ff 80%, #ff3d8b 100%)",
            }}
          >
            Fx
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, color: "white" }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Your All-In-One
          </div>
          <div
            style={{
              fontSize: 76,
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
            AI Photo Enhancer
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
          <span style={{ display: "flex" }}>Retouch</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex" }}>Restore</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex" }}>Edit</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex" }}>Erase</span>
          <span style={{ display: "flex", color: "#4a4a58" }}>•</span>
          <span style={{ display: "flex", color: "white" }}>iPhone &amp; iPad</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
