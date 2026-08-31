"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40 bg-black overflow-hidden noise">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <Reveal>
          <h2 className="max-w-3xl text-4xl md:text-6xl font-display font-bold text-white leading-[0.98] tracking-tighter mb-16">
            Trusted by the founders<br />
            <span className="text-stroke">we build with.</span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem
              key={t.name}
              className="group flex h-full flex-col justify-between border border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.025]"
            >
              <p className="text-lg text-white/80 font-light leading-relaxed">“{t.content}”</p>
              <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative h-11 w-11 overflow-hidden rounded-full grayscale transition-all duration-500 group-hover:grayscale-0">
                  <Image
                    src={t.image}
                    alt={`${t.name}, ${t.role}, SoberDev client`}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-indigo-400/70 text-[10px] uppercase tracking-[0.18em] font-bold">
                    {t.role}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
