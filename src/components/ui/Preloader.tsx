"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const finish = () => {
        window.dispatchEvent(new Event("loader:done"));
        setGone(true);
      };

      if (reduce) {
        finish();
        return;
      }

      document.body.style.overflow = "hidden";
      const counter = { v: 0 };

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          finish();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 1.9,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current)
            countRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
        },
      })
        .to(".pl-line", { yPercent: -110, duration: 0.6, ease: "power3.in", stagger: 0.05 }, "+=0.15")
        .to(".pl-count", { yPercent: 110, duration: 0.6, ease: "power3.in" }, "<")
        .to(
          ".pl-panel",
          {
            scaleY: 0,
            duration: 0.9,
            ease: "power4.inOut",
            transformOrigin: "top",
            stagger: 0.07,
          },
          "-=0.25",
        );
    },
    { scope: root },
  );

  if (gone) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[200]" aria-hidden>
      <div className="absolute inset-0 flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="pl-panel h-full flex-1 bg-[#0b0b10]" />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="overflow-hidden">
          {/*
            Deliberately a <div>, not a heading. The preloader is server-rendered
            into the initial HTML of every route, so a heading here would appear
            above each page's real <h1> and break the document outline sitewide.
          */}
          <div className="pl-line font-display text-[clamp(2.5rem,10vw,7rem)] font-extrabold leading-none tracking-tighter text-white">
            SOBER<span className="text-indigo-500">DEV</span>
          </div>
        </div>
        <div className="mt-5 overflow-hidden">
          <span className="pl-count block font-mono text-xs uppercase tracking-[0.5em] text-indigo-400">
            <span ref={countRef}>000</span> / 100
          </span>
        </div>
      </div>
    </div>
  );
}
