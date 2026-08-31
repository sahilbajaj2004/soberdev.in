"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { STATS, STUDIO, TEAM, type Stat } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

gsap.registerPlugin(ScrollTrigger);

const LINKED_TEAM = TEAM.filter(
  (member): member is Extract<(typeof TEAM)[number], { href: string }> => "href" in member
);

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (stat.glyph || !ref.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obj = { v: 0 };
    const render = () =>
      (ref.current!.textContent = stat.dec ? obj.v.toFixed(1) : String(Math.round(obj.v)));
    if (reduce) {
      obj.v = stat.num;
      render();
      return;
    }
    gsap.to(obj, {
      v: stat.num,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: render,
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
  }, []);

  return (
    <span className="font-display font-bold tracking-tighter text-white">
      {stat.glyph ? stat.glyph : <span ref={ref}>0</span>}
      {stat.suffix && <span className="text-indigo-500">{stat.suffix}</span>}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-black overflow-hidden noise">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-indigo-400 mb-6">
              The studio
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[0.95] tracking-tighter">
              We build different,<br />
              <span className="text-stroke">and we ship.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 space-y-6">
            <p className="text-xl md:text-2xl text-white/85 font-light leading-snug">{STUDIO.lead}</p>
            <p className="text-base text-white/50 font-light leading-relaxed">{STUDIO.body}</p>
          </Reveal>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {STATS.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className="border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0 px-2 py-8"
            >
              <div className="text-5xl md:text-6xl">
                <Counter stat={s} />
              </div>
              <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* team */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {LINKED_TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full border border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.025] hover:border-white/20"
              >
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:ring-indigo-500/40">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} at SoberDev`}
                      fill
                      sizes="80px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between">
                    <div>
                      <p className="text-xl font-display font-bold text-white">{m.name}</p>
                      <p className="text-indigo-400/80 text-[11px] uppercase tracking-[0.2em] font-bold mt-1">
                        {m.role}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <p className="mt-6 text-white/55 text-sm font-light leading-relaxed max-w-sm">{m.bio}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
