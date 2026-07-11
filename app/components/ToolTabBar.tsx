import { TOOLS } from "../lib/content";
import { toolIcon } from "./FeatureCard";

/**
 * Presentational mimic of FxAI's in-app tab bar — the four tools, one active.
 * Purely decorative; used to give hero/feature visuals an unmistakable "iOS
 * app" feel without shipping a real screenshot.
 */
export function ToolTabBar({ active = "retouch" }: { active?: string }) {
  return (
    <div className="flex items-center gap-1 rounded-2xl border border-border bg-card/90 p-1.5 shadow-lift backdrop-blur">
      {TOOLS.map((tool) => {
        const isActive = tool.slug === active;
        return (
          <span
            key={tool.slug}
            aria-hidden="true"
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl px-2.5 py-2 text-[0.65rem] font-semibold tracking-tight transition-colors ${
              isActive
                ? "bg-brand-gradient text-white shadow-soft"
                : "text-muted"
            }`}
          >
            <span className="[&_svg]:h-5 [&_svg]:w-5">{toolIcon(tool.slug)}</span>
            {tool.tab}
          </span>
        );
      })}
    </div>
  );
}
