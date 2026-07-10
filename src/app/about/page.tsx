import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { SERVICES, SITE, STATS, STUDIO, TEAM } from "@/lib/data";
import PageShell from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "SoberDev is a development studio in Delhi, India, building fast, reliable products end to end.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    title: "Direct founder access",
    body: "You work with the people designing, building, and shipping the product. No slow relay chain.",
  },
  {
    title: "Builds that can launch",
    body: "We care about the unglamorous pieces too: deployment, performance, SEO, polish, and handoff.",
  },
  {
    title: "Small team, sharp ownership",
    body: "Every project has clear scope, tight feedback loops, and enough craft to feel custom.",
  },
] as const;

const VISIBLE_TEAM = TEAM.filter((member) => member.name.toLowerCase() !== "comming soon");

function StatValue({ stat }: { stat: (typeof STATS)[number] }) {
  return (
    <>
      {stat.glyph ? stat.glyph : stat.dec ? stat.num.toFixed(1) : stat.num}
      {stat.suffix && <span className="text-indigo-400">{stat.suffix}</span>}
    </>
  );
}

export default function AboutPage() {
  return (
    <PageShell
      active="/about"
      eyebrow="The studio"
      title={
        <>
          Small team.
          <br />
          <span className="text-stroke">Serious shipping.</span>
        </>
      }
      intro={STUDIO.lead}
    >
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-36">
        <div className="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="max-w-3xl text-xl font-light leading-relaxed text-white/78 md:text-3xl md:leading-snug">
              {STUDIO.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
              >
                See the work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/75 transition-colors duration-300 hover:border-white/30 hover:text-white"
              >
                Start a project
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="border border-white/10 bg-white/[0.025] p-6 md:p-8">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-10 w-10 items-center justify-center border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/35">
                    Based in
                  </p>
                  <p className="font-display text-2xl font-bold tracking-tight">{SITE.location}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 text-sm font-light leading-relaxed text-white/58">
                <p>
                  We design, develop, deploy, and iterate with founders who need a real product in
                  the market, not a deck full of intentions.
                </p>
                <p>
                  The stack is modern, the process is practical, and the communication stays close
                  from the first scope call to launch day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="border-b border-white/10 px-1 py-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <div className="font-display text-5xl font-bold tracking-tighter text-white md:text-6xl">
                <StatValue stat={stat} />
              </div>
              <p className="mt-3 max-w-36 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-400">
              How we work
            </p>
            <h2 className="font-display text-4xl font-bold leading-none tracking-tighter text-white md:text-5xl">
              A studio shape built for momentum.
            </h2>
          </Reveal>

          <div className="grid gap-4 lg:col-span-8">
            {PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.08}>
                <article className="grid gap-5 border border-white/10 bg-white/[0.018] p-6 transition-colors duration-300 hover:border-white/20 md:grid-cols-[auto_1fr] md:p-7">
                  <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-indigo-300">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-white/55">
                      {principle.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-400">
                  The people
                </p>
                <h2 className="font-display text-4xl font-bold tracking-tighter text-white md:text-5xl">
                  Development studio
                </h2>
              </div>
              <p className="max-w-md text-sm font-light leading-relaxed text-white/50">
                The team stays close to both the product decisions and the implementation details.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {VISIBLE_TEAM.map((member, index) => {
              const content = (
                <>
                  <div className="flex items-start gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md ring-1 ring-white/10 grayscale transition-all duration-500 group-hover:ring-indigo-500/40 group-hover:grayscale-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl font-bold leading-tight text-white">
                            {member.name}
                          </h3>
                          <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-300/85">
                            {member.role}
                          </p>
                        </div>
                        {"href" in member && (
                          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="mt-7 max-w-sm text-sm font-light leading-relaxed text-white/55">
                    {member.bio}
                  </p>
                </>
              );

              return (
                <Reveal key={member.name} delay={index * 0.08}>
                  {"href" in member ? (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full border border-white/10 bg-white/[0.018] p-7 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.03]"
                    >
                      {content}
                    </a>
                  ) : (
                    <article className="group h-full border border-white/10 bg-white/[0.018] p-7">
                      {content}
                    </article>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="mt-24 grid gap-8 border border-white/10 bg-white/[0.025] p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-indigo-400/30 bg-indigo-500/10 text-indigo-300">
                <Sparkles className="h-4 w-4" />
              </div>
              <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tighter text-white md:text-5xl">
                Bring us the messy idea. We will turn it into something shippable.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md text-sm font-light leading-relaxed text-white/55">
                Landing pages, full-stack apps, AI tools, deployment, and the product decisions in
                between.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICES.map((service) => (
                  <span
                    key={service.no}
                    className="border border-white/12 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-white/48"
                  >
                    {service.title}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
