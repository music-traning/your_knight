import React from "react";
import { FLOW_STEPS } from "../constants/auditionData";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SwordIcon } from "./ui/SwordIcon";

export const FlowSection: React.FC = () => {
  return (
    <section
      id="flow"
      className="relative bg-zinc-950 py-20 px-4 sm:px-6 border-b border-zinc-800/80 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-40" />

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <SwordIcon className="w-5 h-5" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.25em] text-[#FF007F] neon-text-subtle">
              05 // AUDITION FLOW
            </span>
          </div>

          <h2 className="font-black text-2xl sm:text-3xl leading-snug text-white mb-10 italic">
            騎士へのロードマップ
            <span className="block sm:inline text-lg sm:text-2xl text-[#FF007F] neon-text mt-1 sm:mt-0 sm:ml-2">
              （2027年4月 活動開始予定）
            </span>
          </h2>
        </ScrollReveal>

        {/* Timeline Container with Left Glowing Neon Pink Vertical Line */}
        <div className="relative pl-8 sm:pl-10">
          {/* Glowing Vertical Pink Line on Left Edge */}
          <div
            className="absolute left-3 sm:left-4 top-2 bottom-2 w-[3px] bg-[#FF007F]"
            style={{
              boxShadow:
                "0 0 12px #FF007F, 0 0 24px #FF007F, 0 0 40px rgba(255,0,127,0.8)",
            }}
          />

          <div className="space-y-7">
            {FLOW_STEPS.map((item, index) => (
              <ScrollReveal key={item.step} delayMs={index * 100}>
                <div className="relative group">
                  {/* Glowing Node on the Left Line */}
                  <div className="absolute -left-[29px] sm:-left-[33px] top-4 w-5 h-5 rounded-full bg-[#0A0A0A] border-2 border-[#FF007F] flex items-center justify-center shadow-[0_0_15px_#FF007F]">
                    <span className="w-2 h-2 rounded-full bg-[#FF007F] animate-ping" />
                  </div>

                  {/* Step Card */}
                  <div className="bg-[#0A0A0A] border border-zinc-800 hover:border-[#FF007F] transition-all p-5 shadow-[0_0_15px_rgba(255,0,127,0.15)] hover:shadow-[0_0_25px_rgba(255,0,127,0.45)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-cyber italic font-black text-xs tracking-[0.2em] text-[#FF007F] neon-text-subtle">
                        {item.step}
                      </span>
                      {item.badge && (
                        <span className="font-cyber italic font-bold text-[10px] tracking-widest px-2 py-0.5 bg-[#FF007F] text-white shadow-[0_0_10px_#FF007F]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-black text-base sm:text-lg text-white leading-snug mb-1.5">
                      {index + 1}. {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
