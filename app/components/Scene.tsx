import type { SceneKey } from "../lib/content";

/**
 * Illustrative before/after scenes, drawn entirely in SVG so the site ships no
 * misleading or app-specific raster screenshots. Each scene renders a "before"
 * and "after" state; BeforeAfter layers the two behind a draggable divider.
 *
 * For "enhance" scenes (retouch, restore) the before/after content is nearly
 * identical — BeforeAfter dims/desaturates the before layer with CSS to convey
 * the improvement. For "swap" scenes (edit, erase) the states differ in what's
 * actually present in the image.
 *
 * `uid` must be unique per rendered scene to avoid gradient id collisions.
 */
export type SceneState = "before" | "after";

const VB = "0 0 400 500";

export function Scene({
  scene,
  state,
  uid,
  className = "",
}: {
  scene: SceneKey;
  state: SceneState;
  uid: string;
  className?: string;
}) {
  return (
    <svg
      viewBox={VB}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      {scene === "retouch" && <Portrait uid={uid} state={state} />}
      {scene === "restore" && <Memory uid={uid} state={state} />}
      {scene === "edit" && <EditScene uid={uid} state={state} />}
      {scene === "erase" && <EraseScene uid={uid} state={state} />}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared face group                                                         */
/* -------------------------------------------------------------------------- */

function Face({
  uid,
  sunglasses = false,
}: {
  uid: string;
  sunglasses?: boolean;
}) {
  return (
    <g>
      {/* Shoulders / shirt */}
      <path
        d="M96 500c0-58 46-104 104-104s104 46 104 104Z"
        fill={`url(#${uid}-shirt)`}
      />
      {/* Neck */}
      <path d="M176 372h48v54h-48z" fill={`url(#${uid}-skin)`} />
      <path d="M176 396c14 14 34 14 48 0v-24h-48z" fill="#000" opacity="0.08" />
      {/* Head */}
      <ellipse cx="200" cy="250" rx="74" ry="86" fill={`url(#${uid}-skin)`} />
      {/* Hair */}
      <path
        d="M126 250c0-52 32-92 74-92s74 40 74 92c0-30-10-52-24-52-8 0-10 6-22 6s-16-8-28-8-20 8-30 20-16 22-16 34Z"
        fill={`url(#${uid}-hair)`}
      />
      {/* Cheeks blush */}
      <ellipse cx="164" cy="272" rx="15" ry="10" fill="#ff7a9c" opacity="0.28" />
      <ellipse cx="236" cy="272" rx="15" ry="10" fill="#ff7a9c" opacity="0.28" />
      {/* Eyebrows */}
      <path d="M158 232c8-5 18-5 26-1" stroke="#5b4636" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M216 231c8-4 18-4 26 1" stroke="#5b4636" strokeWidth="4" fill="none" strokeLinecap="round" />
      {sunglasses ? (
        <g>
          <rect x="150" y="240" width="42" height="26" rx="12" fill="#12141f" />
          <rect x="208" y="240" width="42" height="26" rx="12" fill="#12141f" />
          <path d="M192 250h16" stroke="#12141f" strokeWidth="5" strokeLinecap="round" />
          <path d="M150 250l-16-6M250 250l16-6" stroke="#12141f" strokeWidth="5" strokeLinecap="round" />
          <path d="M156 245l10 4M214 245l10 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
      ) : (
        <g>
          {/* Eyes */}
          <ellipse cx="171" cy="250" rx="6.5" ry="7.5" fill="#3a2f2a" />
          <ellipse cx="229" cy="250" rx="6.5" ry="7.5" fill="#3a2f2a" />
          <circle cx="173" cy="248" r="2" fill="#fff" opacity="0.85" />
          <circle cx="231" cy="248" r="2" fill="#fff" opacity="0.85" />
        </g>
      )}
      {/* Nose */}
      <path d="M200 258v18c-4 3-9 3-13 1" stroke="#c98d6e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <path d="M180 300c8 9 32 9 40 0" stroke="#b8556a" strokeWidth="5" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/*  Retouch — studio portrait                                                 */
/* -------------------------------------------------------------------------- */

function Portrait({ uid, state }: { uid: string; state: SceneState }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2a3350" />
          <stop offset="1" stopColor="#141a2c" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="200" cy="220" r="200" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5f7bff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5f7bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-skin`} x1="0" y1="160" x2="0" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffd9bd" />
          <stop offset="1" stopColor="#eaa980" />
        </linearGradient>
        <linearGradient id={`${uid}-hair`} x1="0" y1="150" x2="0" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6b4a34" />
          <stop offset="1" stopColor="#432c1e" />
        </linearGradient>
        <linearGradient id={`${uid}-shirt`} x1="96" y1="396" x2="304" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b4b8f" />
          <stop offset="1" stopColor="#5a3d8f" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={`url(#${uid}-bg)`} />
      <rect width="400" height="500" fill={`url(#${uid}-glow)`} />
      <Face uid={uid} />
      {state === "before" ? (
        <g>
          {/* Blemishes / uneven tone */}
          <circle cx="176" cy="288" r="4" fill="#b5765b" opacity="0.6" />
          <circle cx="224" cy="234" r="3" fill="#b5765b" opacity="0.55" />
          <circle cx="210" cy="300" r="2.6" fill="#b5765b" opacity="0.5" />
          <ellipse cx="150" cy="250" rx="24" ry="40" fill="#000" opacity="0.12" />
        </g>
      ) : (
        <g>
          {/* Polished highlight sparkles */}
          <path d="M262 176c1.6 6 3.2 7.6 9.2 9.2-6 1.6-7.6 3.2-9.2 9.2-1.6-6-3.2-7.6-9.2-9.2 6-1.6 7.6-3.2 9.2-9.2Z" fill="#fff" opacity="0.9" />
          <path d="M140 210c1 4 2 5 6 6-4 1-5 2-6 6-1-4-2-5-6-6 4-1 5-2 6-6Z" fill="#fff" opacity="0.7" />
          <ellipse cx="200" cy="230" rx="90" ry="70" fill="#fff" opacity="0.05" />
        </g>
      )}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/*  Restore — old printed photo                                               */
/* -------------------------------------------------------------------------- */

function Memory({ uid, state }: { uid: string; state: SceneState }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#c9a06a" />
          <stop offset="1" stopColor="#9c7648" />
        </linearGradient>
        <linearGradient id={`${uid}-skin`} x1="0" y1="160" x2="0" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f6cba8" />
          <stop offset="1" stopColor="#dfa579" />
        </linearGradient>
        <linearGradient id={`${uid}-hair`} x1="0" y1="150" x2="0" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5a3f2c" />
          <stop offset="1" stopColor="#3a271a" />
        </linearGradient>
        <linearGradient id={`${uid}-shirt`} x1="96" y1="396" x2="304" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7a8a6f" />
          <stop offset="1" stopColor="#5f6f57" />
        </linearGradient>
        <clipPath id={`${uid}-clip`}>
          <rect x="20" y="20" width="360" height="460" />
        </clipPath>
      </defs>
      {/* Photo paper border */}
      <rect width="400" height="500" fill="#efe6d4" />
      <rect x="20" y="20" width="360" height="460" fill={`url(#${uid}-bg)`} />
      <g clipPath={`url(#${uid}-clip)`}>
        <Face uid={uid} />
      </g>
      {state === "before" ? (
        <g stroke="#efe6d4" strokeLinecap="round" fill="none" opacity="0.85">
          {/* Cracks and scratches */}
          <path d="M40 60l70 120 40 40 90 210" strokeWidth="2.5" />
          <path d="M360 90l-60 130-30 20" strokeWidth="2" />
          <path d="M60 300l40 30 30 -10" strokeWidth="1.6" opacity="0.6" />
          {/* Torn corner */}
          <path d="M20 20l52 0-52 52z" fill="#efe6d4" stroke="none" />
          <path d="M380 480l-46 0 46-46z" fill="#efe6d4" stroke="none" opacity="0.9" />
          {/* Spots */}
          <circle cx="120" cy="120" r="6" fill="#7a6034" stroke="none" opacity="0.35" />
          <circle cx="300" cy="360" r="8" fill="#7a6034" stroke="none" opacity="0.3" />
        </g>
      ) : (
        <g>
          <ellipse cx="200" cy="230" rx="120" ry="120" fill="#fff" opacity="0.04" />
          <path d="M300 70c1.4 5 2.8 6.4 7.8 7.8-5 1.4-6.4 2.8-7.8 7.8-1.4-5-2.8-6.4-7.8-7.8 5-1.4 6.4-2.8 7.8-7.8Z" fill="#fff" opacity="0.85" />
        </g>
      )}
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/*  Edit — add sunglasses + change background (generative)                    */
/* -------------------------------------------------------------------------- */

function EditScene({ uid, state }: { uid: string; state: SceneState }) {
  const after = state === "after";
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-plain`} x1="0" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3a3f4d" />
          <stop offset="1" stopColor="#23262f" />
        </linearGradient>
        <linearGradient id={`${uid}-beach`} x1="0" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffd06b" />
          <stop offset="0.45" stopColor="#ff9a6b" />
          <stop offset="0.62" stopColor="#5ec8d8" />
          <stop offset="1" stopColor="#3a9fc4" />
        </linearGradient>
        <linearGradient id={`${uid}-skin`} x1="0" y1="160" x2="0" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffd9bd" />
          <stop offset="1" stopColor="#eaa980" />
        </linearGradient>
        <linearGradient id={`${uid}-hair`} x1="0" y1="150" x2="0" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6b4a34" />
          <stop offset="1" stopColor="#432c1e" />
        </linearGradient>
        <linearGradient id={`${uid}-shirt`} x1="96" y1="396" x2="304" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3b4b8f" />
          <stop offset="1" stopColor="#5a3d8f" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill={after ? `url(#${uid}-beach)` : `url(#${uid}-plain)`} />
      {after && (
        <g>
          <circle cx="300" cy="120" r="46" fill="#fff4cf" opacity="0.85" />
          <path d="M0 300c60-18 120-18 200 0s140 18 200 0v200H0Z" fill="#e9c98a" opacity="0.55" />
          <path d="M0 300h400" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
        </g>
      )}
      <Face uid={uid} sunglasses={after} />
    </g>
  );
}

/* -------------------------------------------------------------------------- */
/*  Erase — remove an unwanted object from a scene                            */
/* -------------------------------------------------------------------------- */

function EraseScene({ uid, state }: { uid: string; state: SceneState }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8fd4ee" />
          <stop offset="1" stopColor="#d9f0f4" />
        </linearGradient>
        <linearGradient id={`${uid}-sea`} x1="0" y1="300" x2="0" y2="380" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2f9ec4" />
          <stop offset="1" stopColor="#1f7ba0" />
        </linearGradient>
        <linearGradient id={`${uid}-sand`} x1="0" y1="360" x2="0" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f2dca6" />
          <stop offset="1" stopColor="#e3c689" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill={`url(#${uid}-sky)`} />
      <circle cx="312" cy="92" r="40" fill="#fff2c4" />
      {/* Mountains */}
      <path d="M0 300l90-140 70 90 60-70 90 120 90-80v80Z" fill="#8aa0b8" opacity="0.55" />
      {/* Sea */}
      <rect y="300" width="400" height="70" fill={`url(#${uid}-sea)`} />
      <path d="M0 336c40 8 80 8 120 0s80-8 120 0 80 8 120 0v14H0Z" fill="#ffffff" opacity="0.18" />
      {/* Sand */}
      <path d="M0 366c80 16 320 16 400 0v134H0Z" fill={`url(#${uid}-sand)`} />
      {/* Palm */}
      <path d="M64 366c-4-40-2-70 2-96" stroke="#6b4a2c" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M66 270c-22-14-44-14-60-4 20-2 34 2 46 12M66 270c22-14 46-12 62 0-20-4-36 0-48 10M66 272c-6-22-2-40 8-52-2 18-2 34 0 46" fill="none" stroke="#3f8f52" strokeWidth="7" strokeLinecap="round" />
      {state === "before" && (
        <g>
          {/* Unwanted photobomber silhouette */}
          <ellipse cx="250" cy="300" rx="18" ry="20" fill="#2b3038" />
          <path d="M228 420c0-30 10-58 22-58s22 28 22 58Z" fill="#2b3038" />
          <path d="M234 372l-14 34M266 372l14 34" stroke="#2b3038" strokeWidth="9" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}
