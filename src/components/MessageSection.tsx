import React from "react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SwordIcon } from "./ui/SwordIcon";

export const MessageSection: React.FC = () => {
  return (
    <section
      id="message"
      className="relative overflow-hidden bg-[#0A0A0A] py-20 px-4 sm:px-6 border-b border-zinc-800/80"
    >
      {/* Diagonal Neon Pink Lines (剣の軌跡) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main Slash Line 1 */}
        <div
          className="absolute top-1/4 -left-1/4 w-[160%] h-[3px] bg-gradient-to-r from-transparent via-[#FF007F] to-transparent -rotate-[18deg] animate-slash"
          style={{
            boxShadow:
              "0 0 18px #FF007F, 0 0 35px #FF007F, 0 0 60px rgba(255,0,127,0.8)",
          }}
        />
        {/* Metallic Silver Sub-Slash */}
        <div className="absolute top-[28%] -left-1/4 w-[160%] h-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent -rotate-[18deg] opacity-70" />

        {/* Secondary Slash Line 2 */}
        <div
          className="absolute bottom-1/4 -right-1/4 w-[160%] h-[2px] bg-gradient-to-r from-transparent via-[#FF007F] to-transparent -rotate-[12deg] animate-slash"
          style={{
            animationDelay: "1.5s",
            boxShadow: "0 0 15px #FF007F, 0 0 30px #FF007F",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-3">
            <SwordIcon className="w-5 h-5" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.25em] text-[#FF007F] neon-text-subtle">
              02 // PRODUCER MESSAGE
            </span>
          </div>

          {/* Catch Copy */}
          <h2 className="font-black text-2xl sm:text-3xl leading-snug text-white mb-8 italic">
            <span className="inline-block bg-zinc-900/90 border-l-4 border-[#FF007F] px-3 py-1 mb-2 shadow-[0_0_15px_rgba(255,0,127,0.3)]">
              「歌ってみた」のその先へ。
            </span>
            <br />
            君の
            <span className="text-[#FF007F] neon-text">
              “可能性（才能）”
            </span>
            を、
            <br className="sm:hidden" />
            限界突破させる場所。
          </h2>
        </ScrollReveal>

        <ScrollReveal delayMs={150}>
          {/* Message Body Frame */}
          <div className="relative bg-zinc-950/90 backdrop-blur-sm border border-[#FF007F]/50 p-6 sm:p-8 neon-box">
            {/* Metallic Corner Accents */}
            <div className="absolute top-0 right-0 px-2.5 py-0.5 bg-[#FF007F] text-[10px] font-cyber font-bold italic tracking-widest text-white">
              KAMIUTA PHILOSOPHY
            </div>

            <p className="text-base sm:text-lg font-bold leading-relaxed text-zinc-100 space-y-4">
              <span className="block">
                神歌プロジェクトの理念は
                <span className="text-[#FF007F] font-black italic neon-text-subtle px-1">
                  『歌い手の可能性を謳歌する』
                </span>
                こと。
              </span>
              <span className="block text-metallic font-black text-lg sm:text-xl italic tracking-wide py-1">
                歌唱力、表現力、キャラクター性。
              </span>
              <span className="block">
                そのすべてを爆発させるための
                <span className="text-white font-black underline decoration-[#FF007F] decoration-2 underline-offset-4">
                  「最強のバックアップ体制」
                </span>
                を用意しました。
              </span>
              <span className="block">
                仲間と共に切磋琢磨し、リスナーがいつでも帰ってこられる居場所を創り上げます。
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
