import React, { useState } from "react";
import { FAQ_LIST } from "../constants/auditionData";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SwordIcon } from "./ui/SwordIcon";

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className="relative bg-[#0A0A0A] py-20 px-4 sm:px-6 border-b border-zinc-800/80"
    >
      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <SwordIcon className="w-5 h-5" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.25em] text-[#FF007F] neon-text-subtle">
              06 // FAQ
            </span>
          </div>

          <h2 className="font-black text-2xl sm:text-3xl leading-snug text-white mb-8 italic">
            よくある質問
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = !!openIds[faq.id];
            return (
              <ScrollReveal key={faq.id} delayMs={index * 100}>
                <div
                  className={`border transition-all duration-300 bg-zinc-950 ${
                    isOpen
                      ? "border-[#FF007F] shadow-[0_0_20px_rgba(255,0,127,0.35)]"
                      : "border-zinc-800 hover:border-[#FF007F]/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-cyber italic font-black text-[#FF007F] neon-text-subtle text-base sm:text-lg shrink-0">
                        Q{index + 1}.
                      </span>
                      <span className="font-black text-sm sm:text-base text-white leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    {/* Neon Pink '+' Mark */}
                    <span
                      className={`shrink-0 w-8 h-8 flex items-center justify-center border border-[#FF007F]/60 bg-[#0A0A0A] text-[#FF007F] font-black text-2xl leading-none neon-text transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-[#FF007F]/15" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    >
                      ＋
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-zinc-800/80 bg-[#0A0A0A]/70">
                      <p className="font-bold text-sm sm:text-base text-zinc-200 leading-relaxed pl-7 border-l-2 border-[#FF007F]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
