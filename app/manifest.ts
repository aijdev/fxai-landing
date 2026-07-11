import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "./lib/site";

// Emitted as a static manifest.webmanifest file for the export (`output: "export"`).
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — All-In-One AI Photo Enhancer`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#070810",
    theme_color: "#070810",
    categories: ["photo", "graphics", "productivity"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
