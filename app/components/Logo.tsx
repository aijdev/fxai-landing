import Link from "next/link";
import { SITE_NAME } from "../lib/site";

/**
 * FxAI brand mark — a gradient rounded tile with a spark motif, drawn in SVG so
 * it stays crisp at any size and needs no raster asset. `id` must be unique per
 * render to avoid gradient collisions when several marks share a page.
 */
export function LogoMark({
  className = "",
  id = "fxai-logo",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${SITE_NAME} logo`}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#14e0c4" />
          <stop offset="0.45" stopColor="#4c7bff" />
          <stop offset="0.8" stopColor="#9a54ff" />
          <stop offset="1" stopColor="#ff3d8b" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill={`url(#${id}-bg)`} />
      {/* Spark: a four-point star, the "enhance" motif. */}
      <path
        d="M20 9c.9 4.7 2.4 6.2 7.1 7.1-4.7.9-6.2 2.4-7.1 7.1-.9-4.7-2.4-6.2-7.1-7.1C17.6 15.2 19.1 13.7 20 9Z"
        fill="#fff"
        opacity="0.96"
      />
      <path
        d="M31.5 22c.6 3.1 1.6 4.1 4.7 4.7-3.1.6-4.1 1.6-4.7 4.7-.6-3.1-1.6-4.1-4.7-4.7 3.1-.6 4.1-1.6 4.7-4.7Z"
        fill="#fff"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${SITE_NAME} home`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9 rounded-[10px] shadow-soft" />
      {withWordmark ? (
        <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
      ) : null}
    </Link>
  );
}
