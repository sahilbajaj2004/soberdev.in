"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/**
 * FAQ accordion.
 *
 * Every answer stays mounted and is collapsed with animated height rather than
 * being unmounted. Previously only the open item existed in the DOM, so five of
 * the answers were absent from the server-rendered HTML entirely — invisible to
 * any crawler or answer engine that does not click. Collapsed-but-present
 * content is indexed normally; content that was never rendered is not.
 *
 * The FAQPage JSON-LD is emitted by the page (src/app/page.tsx) as part of the
 * connected @graph, so it is intentionally not duplicated here.
 */
export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="relative py-28 md:py-40 bg-black overflow-hidden noise">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="lg:sticky lg:top-28 text-4xl md:text-6xl font-display font-bold text-white leading-[0.95] tracking-tighter">
                Questions,<br />
                <span className="text-indigo-500">answered.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8 border-t border-white/10">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;

              return (
                <div key={faq.question} className="border-b border-white/10">
                  {/* Each question is a real heading, so the FAQ list contributes
                      to the document outline instead of being anonymous spans. */}
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left text-lg md:text-2xl font-display font-bold text-white"
                    >
                      {faq.question}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`shrink-0 ${isOpen ? "text-indigo-400" : "text-white/40"}`}
                      >
                        <Plus className="h-6 w-6" />
                      </motion.span>
                    </button>
                  </h3>

                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 pr-10 text-white/55 text-base font-light leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
