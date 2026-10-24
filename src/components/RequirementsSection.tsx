import React from "react";
import { KNIGHT_VIRTUES, REQUIREMENTS_LIST } from "../constants/auditionData";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SwordIcon } from "./ui/SwordIcon";

export const RequirementsSection: React.FC = () => {
  return (
    <section
      id="requirements"
      className="relative bg-[#0A0A0A] py-20 px-4 sm:px-6 border-b border-zinc-800/80 overflow-hidden"
    >
      {/* Subtle Neon Aura */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #FF007F 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <SwordIcon className="w-5 h-5" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.25em] text-[#FF007F] neon-text-subtle">
              04 // REQUIREMENTS
            </span>
          </div>

          <h2 className="font-black text-2xl sm:text-3xl leading-snug text-white mb-6">
            <span className="block text-[#FF007F] neon-text italic tracking-wider">
              奇跡・信頼・希望・勇気・誠実・叡智。
            </span>
            <span className="block mt-1 italic">
              君が宿す
              <span className="text-metallic font-black">「信念の刃」</span>
              はどれだ？
            </span>
          </h2>

          {/* 6 Virtues Cyber Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
            {KNIGHT_VIRTUES.map((virtue) => (
              <div
                key={virtue.kanji}
                className="flex flex-col items-center justify-center py-2 px-1 bg-zinc-950 border border-[#FF007F]/50 shadow-[0_0_10px_rgba(255,0,127,0.2)]"
              >
                <span className="font-black text-sm text-white">
                  {virtue.kanji}
                </span>
                <span className="font-cyber italic text-[9px] tracking-widest text-[#FF007F]">
                  {virtue.en}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Sword Checklist UI */}
        <ScrollReveal delayMs={150}>
          <div className="bg-zinc-950/95 border border-zinc-700 p-5 sm:p-7 neon-box">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-5">
              <span className="font-cyber italic font-bold text-xs tracking-[0.2em] text-zinc-300">
                QUALIFICATION CHECKLIST
              </span>
              <span className="text-xs font-black text-[#FF007F] neon-text-subtle">
                募集要項・求める人物像
              </span>
            </div>

            <ul className="space-y-4">
              {REQUIREMENTS_LIST.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 bg-[#0A0A0A] border border-zinc-800/90 hover:border-[#FF007F]/70 transition-colors"
                >
                  <div className="mt-0.5 shrink-0 p-1 bg-zinc-900 border border-[#FF007F] shadow-[0_0_10px_rgba(255,0,127,0.6)]">
                    <SwordIcon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm sm:text-base text-zinc-100 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
