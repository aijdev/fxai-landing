import Image from "next/image";
import type { SceneKey } from "../lib/content";

/**
 * App Store screenshots, keyed by the tool each one demonstrates. These are the
 * real, App-Store-ready marketing shots (title banner + phone frame baked in),
 * so they're shown whole — no site-side frame, labels, or before/after slider.
 */
const SHOTS: Record<SceneKey, { src: string; alt: string }> = {
  retouch: {
    src: "/screenshot_0.jpg",
    alt: "FxAI AI Photo Enhancer retouching a portrait — clear, even skin in one tap.",
  },
  restore: {
    src: "/screenshot_2.jpg",
    alt: "FxAI Photo Restore reviving a damaged black-and-white portrait in lifelike color.",
  },
  edit: {
    src: "/screenshot_4.jpg",
    alt: "FxAI AI Face Editor restyling a portrait from a description.",
  },
  erase: {
    src: "/screenshot_3.jpg",
    alt: "FxAI AI Eraser removing unwanted people from a street photo.",
  },
};

/**
 * A single App Store screenshot, used as the marketing visual for a tool.
 * Pass a `scene` for that tool's default screenshot, or an explicit `src`/`alt`
 * to show a specific one. Shots are 1242×2688 and render responsively.
 */
export function AppShot({
  scene,
  src,
  alt,
  className = "",
  priority = false,
}: {
  scene?: SceneKey;
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  const shot = src ? { src, alt: alt ?? "" } : SHOTS[scene ?? "retouch"];
  return (
    <Image
      src={shot.src}
      alt={alt ?? shot.alt}
      width={1242}
      height={2688}
      priority={priority}
      sizes="(min-width: 1024px) 360px, 90vw"
      className={`h-auto w-full rounded-[1.75rem] shadow-lift ring-1 ring-border ${className}`}
    />
  );
}
