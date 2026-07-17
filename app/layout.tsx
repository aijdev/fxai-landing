import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./components/JsonLd";
import { organizationSchema, websiteSchema } from "./lib/schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL, TWITTER_HANDLE } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — All-In-One AI Photo Enhancer for iPhone & iPad`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "AI photo enhancer",
    "AI photo editor",
    "photo restoration app",
    "unblur photo",
    "colorize black and white photo",
    "object remover app",
    "AI retouch",
    "FxAI",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  itunes: { appId: "6752206851" },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070810",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * Root layout: `<html>` / `<body>` and the site-wide Organization + WebSite
 * structured data. Page chrome (header/footer) is rendered per-locale by
 * `AppShell` so navigation and footer copy are translated. `<html lang>` is
 * "en" here; the `/[lang]` subtree corrects it on the client for a11y.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
