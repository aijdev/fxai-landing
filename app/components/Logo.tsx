import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "../lib/site";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";

/**
 * FxAI brand mark — the app icon (public/logo.jpg), shown as a rounded tile.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpg"
      alt={`${SITE_NAME} logo`}
      width={72}
      height={72}
      priority
      className={className}
    />
  );
}

export function Logo({
  className = "",
  withWordmark = true,
  locale = defaultLocale,
  homeAria,
}: {
  className?: string;
  withWordmark?: boolean;
  locale?: Locale;
  /** Resolved "{name} home" label. Passed in so this stays dictionary-free
   *  (it is rendered inside the client Header). */
  homeAria?: string;
}) {
  return (
    <Link
      href={localizedPath("/", locale)}
      aria-label={homeAria ?? `${SITE_NAME}`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="h-9 w-9 rounded-[10px] object-cover shadow-soft" />
      {withWordmark ? (
        <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
      ) : null}
    </Link>
  );
}
