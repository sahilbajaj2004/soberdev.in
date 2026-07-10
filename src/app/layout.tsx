import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollReset from "@/components/providers/ScrollReset";
import Preloader from "@/components/ui/Preloader";
import Cursor from "@/components/ui/Cursor";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

// Prefer using a canonical site URL if provided; fallback to production URL
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://soberdev.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "SoberDev",
  title: {
    default: "SoberDev - Software Development Studio in Delhi, India",
    template: "%s | SoberDev",
  },
  description:
    "SoberDev is a development studio in Delhi, India. We build fast landing pages, full-stack web apps, and cross-platform products for startups and small businesses.",
  keywords:
    "SoberDev, sober dev, sober, SoberDev agency, web development agency, software development agency, digital product studio, web developer in Delhi, website development in Delhi, full stack developer Delhi, web development India, landing page development, full stack web apps, SaaS development, MVP development, startup product development, React developer, Next.js developer, TypeScript, Tailwind CSS, MERN stack, Node.js development, API development, database design, backend developer Delhi, frontend developer Delhi, web application development, custom website development, ecommerce development, Shopify development, CMS development, headless CMS, UI/UX design, product design studio, web design Delhi, responsive web design, performance optimization, SEO services, DevOps services, cloud deployment, Vercel deployment, AWS deployment, cross-platform apps, Android app development, iOS app development, mobile app development, progressive web app, PWA development, SoberDev Delhi, Sahil Bajaj, Adarsh Shrivastava",
  authors: [{ name: "SoberDev" }],
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SoberDev - Software Development Studio in Delhi, India",
    description:
      "Development studio in Delhi building landing pages, full-stack web apps, and cross-platform products.",
    type: "website",
    url: SITE_URL,
    siteName: "SoberDev",
    images: [new URL("/soberdev.jpg", SITE_URL).toString()],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoberDev - Software Development Studio in Delhi, India",
    description:
      "Development studio in Delhi building landing pages, full-stack web apps, and cross-platform products.",
    images: [new URL("/soberdev.jpg", SITE_URL).toString()],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bricolage.variable} ${syne.variable} ${jetbrains.variable} font-sans antialiased bg-black`}>
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] noise" />
        <Preloader />
        <Cursor />
        <ScrollReset />
        <SmoothScroll>{children}</SmoothScroll>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HNCS82NBHQ"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HNCS82NBHQ');`}
        </Script>
        {/* Basic JSON-LD for Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SoberDev",
              url: SITE_URL,
              logo: new URL("/soberdev.jpg", SITE_URL).toString(),
              image: new URL("/soberdev.jpg", SITE_URL).toString(),
              email: "contact@soberdev.in",
              telephone: "+91 8595105597",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
              areaServed: ["Delhi", "India"],
              sameAs: ["https://github.com/sahilbajaj2004", "https://github.com/AdarshKumarSr", "https://linkedin.com/company/soberdev"],
            }),
          }}
        />
      </body>
    </html>
  );
}
