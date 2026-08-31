import type { Metadata } from "next";

/**
 * Single source of truth for site identity, canonical URL, NAP (name / address /
 * phone) and route inventory. Everything SEO-facing (metadata, robots, sitemap,
 * JSON-LD, llms.txt, OG images) reads from here so the signals can never drift
 * apart. Inconsistent NAP data across a site actively suppresses local ranking
 * and confuses answer engines, so it is deliberately defined exactly once.
 */

function normalize(url: string) {
  return url.replace(/\/+$/, "");
}

export const SITE_URL = normalize(
  process.env.NEXT_PUBLIC_SITE_URL || "https://soberdev.in",
);

/** Absolute URL builder. Schema.org and OG tags require absolute URLs. */
export const abs = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = "SoberDev";
export const SITE_LEGAL_NAME = "SoberDev";

/** Canonical contact details. Must match Google Business Profile exactly. */
export const NAP = {
  email: "contact@soberdev.in",
  phone: "+91 8595105597",
  phoneE164: "+918595105597",
  street: "Delhi",
  locality: "Delhi",
  region: "Delhi",
  postalCode: "110001",
  country: "IN",
  countryName: "India",
  /** Approximate studio coordinates (central Delhi) for LocalBusiness geo. */
  latitude: 28.6139,
  longitude: 77.209,
  maps: "https://maps.app.goo.gl/D67JebTSFPXe7iPN7",
} as const;

/** Profiles that establish entity identity for knowledge-graph resolution. */
export const SAME_AS = [
  "https://github.com/soberdev",
  "https://www.linkedin.com/company/soberdev",
] as const;

export const FOUNDED_YEAR = "2024";

/** Currency + indicative price band, surfaced in LocalBusiness/Offer schema. */
export const CURRENCY = "INR";
export const PRICE_RANGE = "₹₹";

export const DEFAULT_TITLE =
  "SoberDev | Software Development Studio in Delhi, India";

/**
 * Kept under ~160 characters so Google renders it whole rather than truncating
 * mid-sentence. Leads with the category and location, closes with a concrete
 * price: the two things a searcher is scanning the snippet for.
 */
export const DEFAULT_DESCRIPTION =
  "Software development studio in Delhi, India. We design, build, and deploy landing pages, full-stack web apps, and cross-platform products. From ₹12,000.";

/**
 * Focused keyword set. Search engines ignore the keywords meta entirely, but a
 * short honest list is still parsed by some AI crawlers and social tools, where
 * a 60-term keyword-stuffed string reads as spam. Kept to real ranking targets.
 */
export const KEYWORDS = [
  "software development studio",
  "web development agency in Delhi",
  "full stack developer Delhi",
  "Next.js development company India",
  "landing page development",
  "MVP development for startups",
  "React Native app development India",
  "custom web application development",
  "SoberDev",
] as const;

export type RouteMeta = {
  path: string;
  /** Short label used for breadcrumbs and nav. */
  name: string;
  /** One-line purpose, consumed by llms.txt. */
  summary: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  /**
   * Explicit ISO date of the last meaningful content change. Pages that report a
   * fresh `lastModified` on every deploy teach crawlers to ignore the field, so
   * stable pages carry a real date and only genuinely rolling pages fall back to
   * the build timestamp.
   */
  lastModified?: string;
};

/**
 * Route inventory. The sitemap, breadcrumbs and llms.txt all derive from this,
 * so adding a page in one place propagates everywhere instead of silently
 * missing from the sitemap.
 */
export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    name: "Home",
    summary:
      "Studio overview: what SoberDev builds, selected work, services, pricing and FAQs.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/work",
    name: "Work",
    summary: "Full index of shipped products with live links, stack and year.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/services",
    name: "Services",
    summary:
      "The four service lines (web platforms, experience design, cross-platform apps, deploy & DevOps) and the stack behind each.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/about",
    name: "About",
    summary: "Who the studio is, how it operates, and the team behind it.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    name: "Contact",
    summary: "Enquiry form plus email, phone, location and indicative pricing.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    summary: "How SoberDev handles personal data.",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-06-20",
  },
  {
    path: "/terms-of-service",
    name: "Terms of Service",
    summary: "Terms governing engagements with SoberDev.",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-06-20",
  },
  {
    path: "/refund-policy",
    name: "Refund Policy",
    summary: "Refund and cancellation terms.",
    changeFrequency: "yearly",
    priority: 0.3,
    lastModified: "2026-06-20",
  },
];

/**
 * Build a page Metadata object with canonical + Open Graph + Twitter kept in
 * sync. Without explicit per-page openGraph values, every page inherits the
 * root layout's OG title/description/url, so all shares look identical and the
 * og:url contradicts the canonical.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  noIndex?: boolean;
}): Metadata {
  const url = abs(path);
  // The root layout applies the "%s | SoberDev" template to `title`, but OG and
  // Twitter titles bypass templates, so compose the full string explicitly.
  const fullTitle = path === "/" ? DEFAULT_TITLE : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    ...(keywords ? { keywords: [...keywords] } : {}),
    alternates: { canonical: path },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
