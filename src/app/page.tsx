import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import JsonLd from "@/components/seo/JsonLd";
import { FAQS, PRICING_TIERS, PROJECTS, SERVICES, TESTIMONIALS } from "@/lib/data";
import {
  breadcrumbNode,
  faqNode,
  graph,
  offerCatalogNode,
  projectsNode,
  reviewsNode,
  servicesNode,
  webPageNode,
} from "@/lib/schema";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, KEYWORDS, buildMetadata } from "@/lib/site";

/**
 * The homepage previously had no metadata export of its own, so its canonical,
 * OG title and OG description all fell through to the root layout defaults.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    keywords: KEYWORDS,
  }),
  // The root layout's title template must not wrap the homepage title.
  title: { absolute: DEFAULT_TITLE },
};

const homeGraph = graph(
  webPageNode({
    path: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  }),
  breadcrumbNode("/"),
  faqNode(FAQS, "/"),
  offerCatalogNode(PRICING_TIERS),
  projectsNode(PROJECTS, "/"),
  ...servicesNode(SERVICES),
  ...reviewsNode(TESTIMONIALS),
);

export default function SoberDevWebsite() {
  return (
    <main className="relative bg-black">
      <JsonLd id="schema-home" data={homeGraph} />
      <Navbar />
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
