import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollReset from "@/components/providers/ScrollReset";
import Preloader from "@/components/ui/Preloader";
import Cursor from "@/components/ui/Cursor";
import JsonLd from "@/components/seo/JsonLd";
import { graph, organizationNode, websiteNode } from "@/lib/schema";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-HNCS82NBHQ";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Allow full-size image previews and untruncated text snippets. Without
      // these, Google may clip the snippet it shows — and AI Overviews draw on
      // the same snippet budget.
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // No `alternates` here on purpose. A canonical defined in the root layout is
  // inherited by any page that does not set its own — which previously meant the
  // 404 page advertised the homepage as its canonical, a textbook soft-404
  // signal. Every real page now declares its own canonical via buildMetadata().
  // hreflang is likewise omitted: the site is single-locale, so language
  // alternates pointing at one URL would be noise.
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  icons: {
    // /favicon.ico is emitted automatically from src/app/favicon.ico, so it is
    // intentionally not repeated here — declaring it twice produced duplicate
    // <link rel="icon"> tags.
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  // Search Console ownership is proven by the HTML file at
  // public/google083a6a840930b128.html. A `verification.google` meta tag is
  // intentionally omitted: the meta-tag method issues a different token than the
  // file method, so reusing the filename here would emit an invalid tag.
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * Site-wide entity graph. Emitted once from the layout so the Organization and
 * WebSite nodes exist on every URL; individual pages then add their own WebPage,
 * breadcrumb and content nodes that reference these by @id.
 */
const siteGraph = graph(organizationNode(), websiteNode());

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${syne.variable} ${jetbrains.variable} font-sans antialiased bg-black`}
      >
        <JsonLd id="schema-site" data={siteGraph} />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] noise" />
        <Preloader />
        <Cursor />
        <ScrollReset />
        <SmoothScroll>{children}</SmoothScroll>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
