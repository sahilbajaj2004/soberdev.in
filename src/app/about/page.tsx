import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { STATS, STUDIO, TEAM } from "@/lib/data";
import PageShell from "@/components/layout/PageShell";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "SoberDev is a development studio in Delhi, India, building fast, reliable products end to end.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell
      active="/about"
      eyebrow="The studio"
      title={
        <>
          We build different,
          <br />
          <span className="text-stroke">and we ship.</span>
        </>
      }
      intro={STUDIO.lead}
    >
      <section className="mx-auto max-w-[1400px] px-6 pb-24 md:pb-32">
        <Reveal>
          <p className="max-w-3xl border-t border-white/10 pt-10 text-lg font-light leading-relaxed text-white/70 md:text-2xl">
            {STUDIO.body}
          </p>
        </Reveal>

        {/* stats */}
        <div className="mt-20 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="border-b border-white/10 px-2 py-8 last:border-r-0 lg:border-b-0 lg:border-r"
            >
              <div className="text-5xl font-display font-bold tracking-tighter text-white md:text-6xl">
                {s.glyph ? s.glyph : s.dec ? s.num.toFixed(1) : s.num}
                {s.suffix && <span className="text-indigo-500">{s.suffix}</span>}
              </div>
              <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* team */}
        <Reveal>
          <h2 className="mt-24 mb-10 font-display text-3xl font-bold tracking-tighter text-white md:text-5xl">
            Development studio
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-white/10 p-7 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.025]"
              >
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 grayscale transition-all duration-500 group-hover:ring-indigo-500/40 group-hover:grayscale-0">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between">
                    <div>
                      <p className="font-display text-xl font-bold text-white">{m.name}</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-400/80">
                        {m.role}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400" />
                  </div>
                </div>
                <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/55">{m.bio}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:p-12">
            <h2 className="max-w-md font-display text-2xl font-bold tracking-tighter text-white md:text-4xl">
              Work directly with the founders.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
