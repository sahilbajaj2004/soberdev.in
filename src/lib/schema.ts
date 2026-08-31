import {
  CURRENCY,
  FOUNDED_YEAR,
  NAP,
  PRICE_RANGE,
  ROUTES,
  SAME_AS,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
  abs,
} from "@/lib/site";

/**
 * JSON-LD builders.
 *
 * Everything is emitted as a single `@graph` with stable `@id` values so nodes
 * cross-reference each other instead of repeating themselves. That is what lets
 * Google -nd LLM-based answer engines re-olve "SoberDev" to one entity
 * rather than treating each page's markup as an unrelated island.
 */

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const pageId = (path: string) => `${abs(path)}#webpage`;

type Node = Record<string, unknown>;

/** Wrap nodes into a single connected graph document. */
export function graph(...nodes: Array<Node | null | undefined>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

/**
 * The studio itself. Typed as ProfessionalService (a LocalBusiness subtype) so
 * it can legitimately carry geo, areaServed and priceRange, while also being a
 * valid Organization for knowledge-panel purposes.
 */
export function organizationNode(): Node {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: ["Sober Dev", "SoberDev Studio"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: abs("/icon-512.png"),
      width: 512,
      height: 512,
      caption: SITE_NAME,
    },
    image: { "@id": `${SITE_URL}/#logo` },
    description:
      "Software development studio in Delhi, India building landing pages, full-stack web apps, AI tools and cross-platform products for startups and small businesses.",
    slogan: "We build products that actually ship.",
    foundingDate: FOUNDED_YEAR,
    email: NAP.email,
    telephone: NAP.phone,
    priceRange: PRICE_RANGE,
    currenciesAccepted: CURRENCY,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.locality,
      addressRegion: NAP.region,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    hasMap: NAP.maps,
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "Country", name: NAP.countryName },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: [
      "Web development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "React Native",
      "Full-stack development",
      "UI/UX design",
      "DevOps",
      "Search engine optimisation",
    ],
    knowsLanguage: ["en", "hi"],
    sameAs: [...SAME_AS],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: NAP.email,
        telephone: NAP.phone,
        areaServed: NAP.country,
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

/** The website container. Publisher points back to the single org node. */
export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Software development studio in Delhi, India. Landing pages, full-stack web apps and cross-platform products.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/** Breadcrumbs derived from the route table so they cannot drift from the nav. */
export function breadcrumbNode(path: string): Node {
  const items = [{ name: "Home", item: SITE_URL }];

  if (path !== "/") {
    const route = ROUTES.find((r) => r.path === path);
    items.push({ name: route?.name ?? path.replace(/^\//, ""), item: abs(path) });
  }

  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#breadcrumb`,
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

/**
 * A concrete page. `about`/`isPartOf` are what tie an individual URL back to the
 * organisation entity, which is the signal answer engines use to attribute a
 * fact on this page to this business.
 */
export function webPageNode({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: string;
}): Node {
  return {
    "@type": type,
    "@id": pageId(path),
    url: abs(path),
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    breadcrumb: { "@id": `${abs(path)}#breadcrumb` },
    primaryImageOfPage: { "@id": `${SITE_URL}/#logo` },
    inLanguage: "en-IN",
  };
}

/**
 * FAQPage. The single highest-leverage markup for answer engines: it maps a
 * literal question string to a self-contained answer, which is exactly the shape
 * featured snippets and AI overviews extract.
 */
export function faqNode(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
  path: string,
): Node {
  return {
    "@type": "FAQPage",
    "@id": `${abs(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Individual services, each an offering of the org, with an itemised catalogue. */
export function servicesNode(
  services: ReadonlyArray<{
    title: string;
    description: string;
    includes?: readonly string[];
  }>,
): Node[] {
  return services.map((service) => ({
    "@type": "Service",
    "@id": `${abs("/services")}#${slug(service.title)}`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "Country", name: NAP.countryName },
    ],
    ...(service.includes?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.title} deliverables`,
            itemListElement: service.includes.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item },
            })),
          },
        }
      : {}),
  }));
}

/**
 * Price tiers as real Offers. Concrete numbers are disproportionately likely to
 * be quoted back by an AI answer, so they are worth marking up precisely.
 */
export function offerCatalogNode(
  tiers: ReadonlyArray<{ label: string; from: number }>,
): Node {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/#pricing`,
    name: "SoberDev development pricing",
    itemListElement: tiers.map((tier, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: tier.label,
      description: `${tier.label} development by SoberDev, starting from ₹${tier.from.toLocaleString("en-IN")}.`,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: tier.from,
        priceCurrency: CURRENCY,
        valueAddedTaxIncluded: false,
        minPrice: tier.from,
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": ORG_ID },
    })),
  };
}

/** Portfolio as an ordered ItemList of CreativeWork,-crawlable and citable. */
export function projectsNode(
  projects: ReadonlyArray<{
    title: string;
    kind: string;
    blurb: string;
    tags: readonly string[];
    image: string;
    year: string;
    link: string;
  }>,
  path: string,
): Node {
  return {
    "@type": "ItemList",
    "@id": `${abs(path)}#portfolio`,
    name: "Projects shipped by SoberDev",
    numberOfItems: projects.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: projects.map((project, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        headline: `${project.title} - ${project.kind}`,
        description: project.blurb,
        image: abs(project.image),
        url: project.link,
        dateCreated: project.year,
        genre: project.kind,
        keywords: [...project.tags].join(", "),
        creator: { "@id": ORG_ID },
      },
    })),
  };
}

/** Team members as Person nodes, linked as employees of the org. */
export function teamNode(
  team: ReadonlyArray<{
    name: string;
    role: string;
    bio: string;
    href: string;
    image: string;
  }>,
): Node[] {
  return team.map((member) => ({
    "@type": "Person",
    "@id": `${abs("/about")}#${slug(member.name)}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: abs(member.image),
    sameAs: [member.href],
    worksFor: { "@id": ORG_ID },
    knowsAbout: ["Web development", "React", "Next.js", "Full-stack development"],
  }));
}

/**
 * Client testimonials as Review nodes.
 *
 * Deliberately emitted WITHOUT `reviewRating` or an `aggregateRating` on the
 * organisation. Google treats star ratings that a business collects and marks up
 * about itself as self-serving: they are ineligible for rich results and can
 * trigger a manual action. The reviews still carry real, attributable social
 * proof for answer engines - we just don't fabricate numbers to chase stars.
 */
export function reviewsNode(
  testimonials: ReadonlyArray<{ name: string; role: string; content: string }>,
): Node[] {
  return testimonials.map((testimonial, i) => ({
    "@type": "Review",
    "@id": `${SITE_URL}/#review-${i + 1}`,
    reviewBody: testimonial.content,
    author: {
      "@type": "Person",
      name: testimonial.name,
      jobTitle: testimonial.role,
    },
    itemReviewed: { "@id": ORG_ID },
  }));
}

/** ContactPage-specific node exposing the reachable channels. */
export function contactPointNode(): Node {
  return {
    "@type": "ContactPage",
    "@id": `${abs("/contact")}#contactpage`,
    url: abs("/contact"),
    name: "Contact SoberDev",
    mainEntity: { "@id": ORG_ID },
  };
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
