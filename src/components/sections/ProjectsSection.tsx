"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const featured = PROJECTS.filter((p) => p.featured);
const rest = PROJECTS.filter((p) => !p.featured);

function FeaturedCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="panel group relative flex h-[78%] w-[82vw] shrink-0 flex-col overflow-hidden border border-white/10 bg-white/[0.02] sm:w-[60vw] md:w-[46vw] lg:w-[40vw]"
    >
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.title} — ${p.kind} built by SoberDev using ${p.tags.join(", ")}`}
          fill
          sizes="(max-width: 768px) 82vw, 46vw"
          priority={priority}
          className="object-cover object-top grayscale-[0.35] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 font-mono text-xs text-white/70">{p.index}</span>
        <ArrowUpRight className="absolute right-4 top-4 h-6 w-6 text-white/0 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white transition-colors group-hover:text-indigo-400">
            {p.title}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">{p.year}</span>
        </div>
        <p className="mt-3 text-sm text-white/50 font-light leading-relaxed line-clamp-3">{p.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-white/55"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const t = track.current!;
        gsap.set(t, { overflow: "visible" });
        const distance = () => t.scrollWidth - window.innerWidth;
        gsap.to(t, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: wrap },
  );

  return (
    <section id="projects" className="relative bg-black">
      {/* horizontal-pinned featured gallery */}
      <div ref={wrap} className="relative overflow-hidden noise">
        <div
          ref={track}
          className="flex h-[80vh] md:h-[100svh] items-center gap-6 overflow-x-auto px-6 md:gap-10 md:px-[6vw] no-scrollbar"
        >
          {/* intro panel */}
          <div className="shrink-0 w-[80vw] sm:w-[58vw] md:w-[36vw]">
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-400 mb-6">
              Selected work
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] tracking-tighter">
              Things<br />we&apos;ve<br /><span className="text-stroke">shipped.</span>
            </h2>
            <p className="mt-6 max-w-xs text-white/45 text-sm font-light leading-relaxed">
              Real, live products. Scroll sideways through a few we are proud of, then keep going for the
              full index.
            </p>
          </div>

          {featured.map((p, i) => (
            <FeaturedCard key={p.index} p={p} priority={i === 0} />
          ))}
        </div>
      </div>

      {/* full index grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-28 md:py-40">
        <Reveal>
          <div className="flex items-end justify-between mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter">
              The full index
            </h2>
            <span className="font-mono text-xs text-white/35">{PROJECTS.length} projects</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 0.08}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.title} — ${p.kind} built by SoberDev using ${p.tags.join(", ")}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top grayscale-[0.4] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white transition-colors group-hover:text-indigo-400">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {p.kind} · {p.year}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
