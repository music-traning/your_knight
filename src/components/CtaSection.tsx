import React from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SwordIcon } from "./ui/SwordIcon";

export const CtaSection: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#0A0A0A] pt-24 pb-32 px-4 sm:px-6"
    >
      {/* Intense Cyber Neon Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-70" />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #FF007F 0%, rgba(255,0,127,0.3) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 bg-zinc-950 border border-[#FF007F] neon-box">
            <SwordIcon className="w-4 h-4" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.25em] text-[#FF007F]">
              FINAL CALL // ENTRY NOW
            </span>
          </div>

          {/* Catch Copy */}
          <h2 className="font-black text-2xl sm:text-4xl leading-snug text-white mb-10 italic">
            <span className="block mb-2">
              物語の主人公になる準備はできたか？
            </span>
            <span className="block text-3xl sm:text-5xl">
              さあ、君の
              <span className="text-[#FF007F] neon-text">「剣（こえ）」</span>
              を抜こう。
            </span>
          </h2>
        </ScrollReveal>

        {/* Full-Width Extra-Large Pulsing CTA Button */}
        <ScrollReveal delayMs={150}>
          <div className="w-full">
            <a
              href="https://x.com/misaki_utaite_"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-full py-6 sm:py-8 px-4 bg-[#FF007F] hover:bg-[#ff1a8c] text-white font-black italic text-lg sm:text-2xl tracking-wider border-2 border-white animate-pulse-neon transition-all active:scale-95"
            >
              <span className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)]">
                ［ 今すぐオーディションにエントリーする ］
              </span>
            </a>

            <p className="mt-4 text-xs font-bold text-zinc-400 tracking-wider">
              ※ボタンをタップすると公式X（
              <span className="text-[#FF007F] font-cyber italic">
                @misaki_utaite_
              </span>
              ）へ移動します
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
