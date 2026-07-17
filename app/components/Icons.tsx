import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.05 12.53c-.02-2.02 1.65-2.99 1.72-3.04-0.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.79-3.29 2-1.4 2.43-.36 6.02 1.01 7.99.67.96 1.47 2.04 2.51 2 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.78-.98 2.44-1.95.77-1.12 1.09-2.2 1.11-2.26-.02-.01-2.13-.82-2.15-3.24zM15.04 6.9c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.22-.52.6-.98 1.56-.86 2.48.9.07 1.83-.46 2.4-1.14z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.72 5.52 6.09.89-4.41 4.29 1.04 6.06L12 16.9l-5.44 2.86 1.04-6.06L3.2 9.41l6.09-.89L12 2.5z" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3l1.6 4.2L18 8.8l-4.4 1.6L12 15l-1.6-4.6L6 8.8l4.4-1.6L12 3z" />
      <path d="M18 14l.8 2.1 2.2.8-2.2.8-.8 2.1-.8-2.1-2.2-.8 2.2-.8L18 14z" />
      <path d="M5 13l.7 1.8 1.8.7-1.8.7L5 18l-.7-1.8L2.5 15.5l1.8-.7L5 13z" />
    </svg>
  );
}

export function WandIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M15 6l3 3" />
      <path d="M4 20L15.5 8.5" />
      <path d="M17.5 4.5l.9 1.9 1.9.9-1.9.9-.9 1.9-.9-1.9-1.9-.9 1.9-.9.9-1.9z" />
      <path d="M6 5l.6 1.3L7.9 7l-1.3.6L6 8.9l-.6-1.3L4.1 7l1.3-.7L6 5z" />
    </svg>
  );
}

export function FaceIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 10.5h.01M15.5 10.5h.01" />
      <path d="M8.5 15c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" />
    </svg>
  );
}

export function SmileIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 10h.01M15.5 10h.01" />
      <path d="M8.5 14.5c.9 1.1 2.1 1.7 3.5 1.7s2.6-.6 3.5-1.7" />
      <path d="M18.5 5.2l.4 1 1 .4-1 .4-.4 1-.4-1-1-.4 1-.4.4-1z" />
    </svg>
  );
}

export function RestoreIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 15l4-4 3.5 3.5" />
      <path d="M14 13l2.5-2.5L21 15" />
      <circle cx="9" cy="9" r="1.4" />
    </svg>
  );
}

export function EraserIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M8 20H5.5a1.5 1.5 0 01-1.06-2.56l9-9a2 2 0 012.83 0l3.29 3.29a2 2 0 010 2.83L14 20H8z" />
      <path d="M8.5 12.5l5 5" />
      <path d="M8 20h12" />
    </svg>
  );
}

export function CompareIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M12 3.5v17" />
      <path d="M8.5 9.5L6 12l2.5 2.5" />
      <path d="M15.5 9.5L18 12l-2.5 2.5" />
    </svg>
  );
}

export function ZoomIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8.5v5M8.5 11h5" />
    </svg>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3a9 9 0 000 18c1 0 1.7-.8 1.7-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 005-5c0-3.9-4-7-9-7z" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.9-7 9-4-1.1-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M12 3v12" />
      <path d="M8 7l4-4 4 4" />
      <path d="M5 12v6a2 2 0 002 2h10a2 2 0 002-2v-6" />
    </svg>
  );
}

export function InfinityIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M7 8a4 4 0 100 8c2.5 0 3.5-2 5-4s2.5-4 5-4a4 4 0 110 8c-2.5 0-3.5-2-5-4s-2.5-4-5-4z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
