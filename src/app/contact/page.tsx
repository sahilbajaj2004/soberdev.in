import type { Metadata } from "next";
import { SITE, PRICING, PRICING_TIERS } from "@/lib/data";
import PageShell from "@/components/layout/PageShell";
import ContactForm from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  contactPointNode,
  graph,
  offerCatalogNode,
  webPageNode,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/site";

const TITLE = "Contact — Start a Project";
const DESCRIPTION =
  "Contact SoberDev in Delhi, India — email contact@soberdev.in or call +91 8595105597. Tell us what you're building; we reply within one working day.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
  keywords: [
    "contact SoberDev",
    "hire web developer Delhi",
    "web development quote India",
  ],
});

const contactGraph = graph(
  webPageNode({
    path: "/contact",
    title: TITLE,
    description: DESCRIPTION,
    type: "ContactPage",
  }),
  breadcrumbNode("/contact"),
  contactPointNode(),
  offerCatalogNode(PRICING_TIERS),
);

const LABEL = "block text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mb-2";

export default function ContactPage() {
  return (
    <PageShell
      active="/contact"
      eyebrow="Get in touch"
      title={
        <>
          Let&apos;s build
          <br />
          <span className="text-stroke">something.</span>
        </>
      }
      intro="Tell us what you're building. We reply to every genuine inquiry, usually within a day."
    >
      <JsonLd id="schema-contact" data={contactGraph} />
      <section className="mx-auto max-w-[1400px] px-6 pb-28 md:pb-40">
        <div className="grid grid-cols-1 gap-16 border-t border-white/10 pt-16 lg:grid-cols-2">
          {/* details */}
          <Reveal className="space-y-10">
            <h2 className="font-display text-2xl font-bold tracking-tighter text-white md:text-3xl">
              Contact details
            </h2>
            <a href={`mailto:${SITE.email}`} className="group block">
              <span className={LABEL}>Direct mail</span>
              <span className="text-2xl font-light text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
                {SITE.email}
              </span>
            </a>
            <a href={SITE.phoneHref} className="group block">
              <span className={LABEL}>Phone</span>
              <span className="text-2xl font-light text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
                {SITE.phone}
              </span>
            </a>
            <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="group block">
              <span className={LABEL}>Location</span>
              <span className="text-2xl font-light text-white transition-colors group-hover:text-indigo-400 md:text-3xl">
                {SITE.location}
              </span>
            </a>
            <div>
              <span className={LABEL}>Pricing</span>
              <ul className="space-y-1.5">
                {PRICING.map((p) => (
                  <li key={p} className="text-sm font-light text-white/60">{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tighter text-white md:text-3xl">
              Tell us about the project
            </h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
