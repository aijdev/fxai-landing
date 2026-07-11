import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "../lib/site";

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
      <LogoMark className="h-9 w-9 rounded-[10px] object-cover shadow-soft" />
      {withWordmark ? (
        <span className="text-lg font-bold tracking-tight">{SITE_NAME}</span>
      ) : null}
    </Link>
  );
}
