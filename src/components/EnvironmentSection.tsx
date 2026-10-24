import React, { useState } from "react";
import { Mic2, Film, MessageSquareCode } from "lucide-react";
import { ENVIRONMENT_CARDS } from "../constants/auditionData";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SwordIcon } from "./ui/SwordIcon";

export const EnvironmentSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Mic2 className="w-6 h-6 text-[#FF007F]" />;
      case 1:
        return <Film className="w-6 h-6 text-[#FF007F]" />;
      default:
        return <MessageSquareCode className="w-6 h-6 text-[#FF007F]" />;
    }
  };

  return (
    <section
      id="environment"
      className="relative bg-zinc-950 py-20 px-4 sm:px-6 border-b border-zinc-800/80 overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-50" />

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <SwordIcon className="w-5 h-5" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.25em] text-[#FF007F] neon-text-subtle">
              03 // DIVINE ENVIRONMENT
            </span>
          </div>

          <h2 className="font-black text-2xl sm:text-3xl leading-snug text-white mb-10">
            <span className="block text-base sm:text-lg text-zinc-300 font-bold mb-1 italic">
              君はただ、マイクの前に立つだけでいい。
            </span>
            <span className="italic">
              YourKnight{" "}
              <span className="text-[#FF007F] neon-text text-3xl sm:text-4xl">
                3つの「神」環境
              </span>
            </span>
          </h2>
        </ScrollReveal>

        {/* 3 Vertical Cards on Mobile & Desktop */}
        <div className="flex flex-col gap-6">
          {ENVIRONMENT_CARDS.map((card, index) => {
            const isTapped = activeCardId === card.id;
            return (
              <ScrollReveal key={card.id} delayMs={index * 120}>
                <div
                  onClick={() =>
                    setActiveCardId(isTapped ? null : card.id)
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveCardId(isTapped ? null : card.id);
                    }
                  }}
                  className={`group relative cursor-pointer select-none bg-[#0A0A0A] border transition-all duration-300 p-6 sm:p-7 ${
                    isTapped
                      ? "border-[#FF007F] shadow-[0_0_30px_rgba(255,0,127,0.85),0_0_60px_rgba(255,0,127,0.45),inset_0_0_20px_rgba(255,0,127,0.3)] -translate-y-1"
                      : "border-zinc-700/80 hover:border-[#FF007F] active:border-[#FF007F] shadow-[0_0_12px_rgba(255,0,127,0.2)] hover:shadow-[0_0_30px_rgba(255,0,127,0.85),0_0_60px_rgba(255,0,127,0.45),inset_0_0_18px_rgba(255,0,127,0.25)] active:shadow-[0_0_32px_rgba(255,0,127,0.95)] hover:-translate-y-1"
                  }`}
                >
                  {/* Top Metallic & Neon Header inside Card */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800 group-hover:border-[#FF007F]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-cyber italic font-black text-3xl text-[#FF007F] neon-text">
                        {card.number}
                      </span>
                      <span className="font-cyber italic text-xs tracking-[0.2em] text-metallic font-bold px-2 py-0.5 bg-zinc-900 border border-zinc-700">
                        {card.tag}
                      </span>
                    </div>
                    <div className="p-2 bg-zinc-900/90 border border-[#FF007F]/50 rounded-none shadow-[0_0_12px_rgba(255,0,127,0.4)] group-hover:scale-110 transition-transform">
                      {getIcon(index)}
                    </div>
                  </div>

                  {/* Card Main Title (Exact required text) */}
                  <h3 className="font-black text-lg sm:text-xl text-white leading-snug mb-3.5 group-hover:text-[#FF007F] transition-colors break-words">
                    {card.title}
                  </h3>

                  {/* Supporting Description */}
                  {card.description && (
                    <p className="text-xs sm:text-sm font-medium text-zinc-300 leading-relaxed break-words">
                      {card.description}
                    </p>
                  )}

                  {/* Corner Accent */}
                  <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF007F]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
