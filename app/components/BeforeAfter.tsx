"use client";

import { useState } from "react";
import type { SceneKey } from "../lib/content";
import { Scene } from "./Scene";

/**
 * Interactive before/after comparison. The "after" scene sits underneath; the
 * "before" scene is clipped to the divider position on top. A full-cover range
 * input drives the position so drag, click-to-jump, and keyboard all work.
 *
 * `id` must be unique on the page — it namespaces the two scenes' gradient ids.
 */
export function BeforeAfter({
  scene,
  id,
  treatment,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: {
  scene: SceneKey;
  id: string;
  treatment?: "enhance" | "swap";
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const mode = treatment ?? (scene === "edit" || scene === "erase" ? "swap" : "enhance");

  return (
    <div
      className={`ba aspect-[4/5] w-full rounded-[1.75rem] ring-1 ring-border shadow-lift ${className}`}
    >
      {/* After (revealed on the right / underneath) */}
      <Scene scene={scene} state="after" uid={`${id}-a`} className="ba-layer" />

      {/* Before (clipped from the right to the divider position) */}
      <div
        className="ba-layer"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Scene
          scene={scene}
          state="before"
          uid={`${id}-b`}
          className={`ba-layer ${mode === "enhance" ? "ba-before" : ""}`}
        />
      </div>

      <span className="ba-tag left-3">{beforeLabel}</span>
      <span className="ba-tag right-3">{afterLabel}</span>

      {/* Range input drives the divider (drag + click + keyboard). */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()} — drag to reveal`}
        className="ba-range"
      />

      {/* Visible divider + knob (focus ring driven from .ba-range in CSS) */}
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <span className="ba-knob">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </div>
    </div>
  );
}
