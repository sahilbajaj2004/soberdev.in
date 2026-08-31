import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRICING_TIERS, SERVICES } from "@/lib/data";
import PageShell from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbNode,
  faqNode,
  graph,
  offerCatalogNode,
  servicesNode,
  webPageNode,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/site";

const TITLE = "Web & App Development Services";
const DESCRIPTION =
  "Web platforms in React and Next.js, experience design, cross-platform apps, and DevOps. Landing pages from ₹12,000, full-stack web apps from ₹35,000.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/services",
  keywords: [
    "web development services India",
    "Next.js development services",
    "React Native app development",
    "DevOps and deployment services",
    "website development cost India",
  ],
});

/**
 * Per-service detail layered on top of the homepage cards. The stack lists are
 * grounded in the technologies already listed across the site.
 */
const DETAIL: Record<
  string,
  { detail: string; includes: string[] }
> = {
  "01": {
    detail:
      "We build the full product, not just the front end. Fast, accessible interfaces in React and Next.js, backed by typed APIs and databases that hold up as you grow. Performance and SEO are built in, not bolted on later.",
    includes: ["React & Next.js", "TypeScript", "Tailwind CSS", "Node.js / Express APIs", "MongoDB & MySQL", "SEO & performance"],
  },
  "02": {
    detail:
      "Interfaces with character. We pair clean visual hierarchy with purposeful motion so the product feels considered the moment it loads - without sacrificing speed or accessibility.",
    includes: ["UI & interaction design", "Motion with GSAP & Framer Motion", "Design systems", "Responsive layouts", "Accessibility"],
  },
  "03": {
    detail:
      "One product, every screen. We ship cross-platform apps with React Native and responsive PWAs so a single, maintainable codebase runs smoothly on Android and iOS as well as the web.",
    includes: ["React Native", "Responsive PWAs", "iOS & Android", "Offline-friendly UX", "App store readiness"],
  },
  "04": {
    detail:
      "Shipping is part of the build. We set up hosting, pipelines, and databases so releases are reliable and repeatable, and so you are never stuck wondering how to deploy the thing we made.",
    includes: ["Vercel, Render & Railway", "MongoDB Atlas", "CI/CD pipelines", "Docker", "AWS", "Monitoring & rollbacks"],
  },
};

/**
 * Page-specific FAQs. Deliberately distinct from the homepage set: repeating
 * identical question/answer pairs across URLs makes the pages compete with each
 * other, whereas commercial-intent questions ("what does it cost", "how long")
 * belong on the services page where the buying decision happens.
 */
const SERVICE_FAQS = [
  {
    question: "How much does web development cost at SoberDev?",
    answer:
      "Landing pages start at ₹12,000, portfolio sites at ₹8,000, and full-stack web apps at ₹35,000. Price scales with the number of screens, backend complexity, and any third-party integrations such as payments or authentication.",
  },
  {
    question: "Which services can be combined in one project?",
    answer:
      "All four. A typical engagement pairs Web Platforms with Experience Design and Deploy & DevOps, so the product is designed, built, and live under one scope. Cross-Platform Apps can be added when the product also needs to run on Android and iOS.",
  },
  {
    question: "Do you take over existing or half-finished projects?",
    answer:
      "Yes. We audit the existing codebase first, report what is salvageable, and quote the remaining work separately. Inherited React and Next.js projects are the most straightforward, and we can also migrate older stacks.",
  },
  {
    question: "Is SEO included in a build?",
    answer:
      "Yes. Technical SEO is part of every web build: server-rendered pages, metadata, structured data, sitemaps, image optimisation, and Core Web Vitals. Ongoing content and link strategy is a separate engagement.",
  },
];

const servicesGraph = graph(
  webPageNode({ path: "/services", title: TITLE, description: DESCRIPTION }),
  breadcrumbNode("/services"),
  ...servicesNode(
    SERVICES.map((s) => ({
      title: s.title,
      description: DETAIL[s.no]?.detail ?? s.description,
      includes: DETAIL[s.no]?.includes,
    })),
  ),
  offerCatalogNode(PRICING_TIERS),
  faqNode(SERVICE_FAQS, "/services"),
);

export default function ServicesPage() {
  return (
    <PageShell
      active="/services"
      eyebrow="What we do"
      title={
        <>
          Services that
          <br />
          <span className="text-indigo-500">ship.</span>
        </>
      }
      intro="Based in Delhi, building full-stack products, landing pages, and tools for founders who need something real, shipped. Four things we do, end to end."
    >
      <JsonLd id="schema-services" data={servicesGraph} />
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <div className="border-t border-white/10">
          {SERVICES.map((s, i) => {
            const d = DETAIL[s.no];
            return (
              <Reveal key={s.no} delay={(i % 2) * 0.06}>
                <article className="grid grid-cols-1 gap-6 border-b border-white/10 py-12 md:grid-cols-12 md:py-16">
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-white/30">{s.no}</span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-display text-3xl font-bold tracking-tighter text-white md:text-5xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/55">
                      {d?.detail ?? s.description}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="mb-4 text-[10px] font-mono uppercase tracking-[0.22em] text-white/30">
                      Stack &amp; included
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {(d?.includes ?? []).map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white/60"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-24 border-t border-white/10 pt-14">
            <h2 className="font-display text-2xl font-bold tracking-tighter text-white md:text-4xl">
              What it costs
            </h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/50">
              Indicative starting prices in INR. Final scope is quoted per project
              after a short discovery call.
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              {PRICING_TIERS.map((tier) => (
                <div key={tier.label} className="bg-black p-6 md:p-8">
                  <dt className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                    {tier.label}
                  </dt>
                  <dd className="mt-3 font-display text-3xl font-bold tracking-tighter text-white md:text-4xl">
                    <span className="text-white/40">from </span>₹
                    {tier.from.toLocaleString("en-IN")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-24 border-t border-white/10 pt-14">
            <h2 className="font-display text-2xl font-bold tracking-tighter text-white md:text-4xl">
              Service questions
            </h2>
            {/*
              Rendered as always-visible content rather than an accordion. Answers
              hidden behind interaction still exist in the DOM here, which is what
              crawlers and answer engines read.
            */}
            <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
              {SERVICE_FAQS.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-display text-lg font-bold text-white md:text-xl">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tighter text-white md:text-4xl">
                Have something to build?
              </h2>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/50">
                Tell us about the project and we&apos;ll come back with scope, timeline, and a quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
