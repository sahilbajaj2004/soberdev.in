"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HERO, SITE } from "@/lib/data";
import { scrollToId } from "@/components/providers/SmoothScroll";
import Magnetic from "@/components/ui/Magnetic";

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);
  const fade = useTransform(scrollY, [0, 450], [1, 0]);

  useGSAP(
    () => {
      if (reduce) {
        gsap.set(".hero-word, .hero-fade", { y: 0, opacity: 1 });
        return;
      }
      gsap.set(".hero-word", { yPercent: 120 });
      gsap.set(".hero-fade", { opacity: 0, y: 20 });

      const reveal = () => {
        const tl = gsap.timeline();
        tl.to(".hero-word", {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.06,
        }).to(
          ".hero-fade",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 },
          "-=0.5",
        );
      };

      let done = false;
      const start = () => {
        if (done) return;
        done = true;
        reveal();
      };
      window.addEventListener("loader:done", start, { once: true });
      const fallback = window.setTimeout(start, 3200);
      return () => {
        window.removeEventListener("loader:done", start);
        clearTimeout(fallback);
      };
    },
    { scope: root, dependencies: [reduce] },
  );

  const Word = ({ children, accent }: { children: string; accent?: boolean }) => (
    <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span className={`hero-word inline-block ${accent ? "text-indigo-500" : ""}`}>
        {children}
      </span>
    </span>
  );

  return (
    <section
      ref={root}
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-black noise"
    >
      {/* animated indigo aurora */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 left-[10%] h-[520px] w-[520px] rounded-full bg-indigo-600/25 blur-[140px]"
          animate={reduce ? undefined : { x: [0, 120, -60, 0], y: [0, 80, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[5%] h-[460px] w-[460px] rounded-full bg-indigo-400/15 blur-[150px]"
          animate={reduce ? undefined : { x: [0, -90, 40, 0], y: [0, -60, 30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, #000 40%, transparent 100%)",
        }}
      />

      <motion.div style={{ y, opacity: fade }} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-28">
        <h1 className="font-display font-bold text-white leading-[0.92] tracking-tighter text-[clamp(2.8rem,9vw,9rem)]">
          {/*
            The eyebrow lives inside the h1 so the heading text reads
            "Software development studio in Delhi, India — We build products that
            actually ship.", carrying both search intent and the brand line.
            Styling keeps it visually identical to the previous sibling element.
          */}
          <span className="hero-fade mb-7 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-[11px] font-mono font-normal uppercase tracking-[0.28em] text-white/55">
              {HERO.kicker}
            </span>
          </span>
          <span className="block">
            {HERO.line1.map((w, i) => (
              <span key={i} className="mr-[0.25em]"><Word>{w}</Word></span>
            ))}
          </span>
          <span className="block">
            {HERO.line2.map((w, i) => (
              <span key={i} className="mr-[0.25em]"><Word>{w}</Word></span>
            ))}
          </span>
          <span className="block">
            {HERO.line3.map((w, i) => (
              <span key={i} className="mr-[0.25em]">
                <Word accent={w === "ship."}>{w}</Word>
              </span>
            ))}
          </span>
        </h1>

        <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-md text-base md:text-lg text-white/55 font-light leading-relaxed">
            {HERO.sub}
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-4">
            <Magnetic strength={0.4}>
              <button
                onClick={() => scrollToId("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <button
                onClick={() => scrollToId("projects")}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white/50"
              >
                View work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.div>

      {/* corner meta */}
      <div className="hero-fade absolute bottom-6 left-6 hidden md:block text-[11px] font-mono uppercase tracking-[0.22em] text-white/35">
        {SITE.location}
      </div>
    </section>
  );
}
