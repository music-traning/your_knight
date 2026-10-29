import React from "react";
import { Sparkles, ChevronRight, ShieldAlert } from "lucide-react";
import { SwordIcon } from "./ui/SwordIcon";

export const HeroSection: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-[94vh] flex flex-col justify-between overflow-hidden bg-[#0A0A0A] pt-6 pb-20 px-4 sm:px-6 border-b border-[#FF007F]/40"
      >
        {/* Cyber Grid & Glitch Noise Background Layers */}
        <div className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-75" />

        {/* Neon Pink Radial Aura */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, #FF007F 0%, rgba(255,0,127,0.2) 55%, transparent 75%)",
          }}
        />

        {/* Glitch Noise Horizontal Bars */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <div className="absolute top-[14%] left-0 w-full h-[2px] bg-[#FF007F] shadow-[0_0_12px_#FF007F] animate-glitch" />
          <div
            className="absolute top-[38%] -left-10 w-[75%] h-[1px] bg-[#FF007F]/90 shadow-[0_0_10px_#FF007F] animate-glitch"
            style={{ animationDelay: "1.2s" }}
          />
          <div
            className="absolute top-[68%] right-0 w-[65%] h-[3px] bg-[#FF007F]/80 shadow-[0_0_16px_#FF007F] animate-glitch"
            style={{ animationDelay: "2.4s" }}
          />
          <div
            className="absolute top-[83%] left-[10%] w-[45%] h-[1.5px] bg-zinc-300/70 shadow-[0_0_8px_#FFFFFF] animate-glitch"
            style={{ animationDelay: "0.7s" }}
          />
        </div>

        {/* Diagonal Metallic Crossed Swords Silhouette in Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
          <div className="w-[130%] h-[1px] bg-gradient-to-r from-transparent via-[#FF007F] to-transparent rotate-45 shadow-[0_0_20px_#FF007F]" />
          <div className="w-[130%] h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent -rotate-45" />
        </div>

        {/* Top Cyber HUD Bar */}
        <header className="relative z-10 max-w-xl mx-auto w-full flex items-center justify-between border-b border-zinc-800/90 pb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-[#FF007F] rounded-full shadow-[0_0_10px_#FF007F] animate-ping" />
            <span className="font-cyber italic font-bold text-xs tracking-[0.2em] text-[#FF007F] neon-text-subtle">
              KAMIUTA PROJECT // 01
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-cyber tracking-widest text-zinc-400 border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FF007F]" />
            <span>WEISS CHEVALIER</span>
          </div>
        </header>

        {/* Main Visual & Copy Container */}
        <div className="relative z-10 max-w-xl mx-auto w-full my-auto py-8 flex flex-col items-center text-center">
          {/* Jirai-Cyber Emblem Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-5 bg-zinc-950/90 border border-[#FF007F] neon-box">
            <SwordIcon className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-black italic tracking-widest text-white">
              神歌プロジェクト発・新世代歌い手グループ
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#FF007F]" />
          </div>

          {/* Group Title Logo Emblem */}
          <div className="relative mb-6 select-none">
            <div
              className="font-cyber font-black italic text-5xl sm:text-7xl tracking-tighter uppercase text-white neon-text animate-glitch"
              data-text="YourKnight"
            >
              Your<span className="text-[#FF007F]">Knight</span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-3">
              <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#FF007F]" />
              <span className="font-cyber italic text-xs sm:text-sm tracking-[0.3em] text-metallic font-bold">
                ― 初期メンバーオーディション開幕 ―
              </span>
              <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#FF007F]" />
            </div>
          </div>

          {/* Main Catch Copy */}
          <h1 className="font-black text-2xl sm:text-4xl leading-snug tracking-tight text-white mb-6">
            <span className="block italic">
              一人じゃ届かない声も、
            </span>
            <span className="block mt-1">
              ここなら
              <span className="text-[#FF007F] neon-text italic px-1 text-3xl sm:text-5xl">
                「奇跡」
              </span>
              に変わる。
            </span>
            <span className="mt-3 block text-base sm:text-xl font-black text-zinc-200 bg-gradient-to-r from-transparent via-[#FF007F]/25 to-transparent py-1.5 border-y border-[#FF007F]/40">
              神歌プロジェクト発・新世代歌い手グループ
              <br className="sm:hidden" />
              <span className="text-[#FF007F] neon-text-subtle italic">
                『YourKnight』
              </span>
              初期メンバーオーディション開幕。
            </span>
          </h1>

          {/* Lead Copy Box */}
          <div className="relative w-full bg-zinc-950/90 border border-zinc-700/80 p-5 sm:p-6 mb-8 text-left shadow-[0_0_25px_rgba(255,0,127,0.18)]">
            {/* Corner Cyber Brackets */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#FF007F]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#FF007F]" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#FF007F]" />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF007F]" />

            <p className="font-black italic text-lg sm:text-xl text-[#FF007F] neon-text-subtle mb-3 tracking-wide text-center">
              「As you wish. 仰せのままに！」
            </p>
            <p className="text-sm sm:text-base font-bold text-zinc-200 leading-relaxed">
              リスナーを“主人”とし、癒やしと笑顔を護り抜く
              <span className="text-white underline decoration-[#FF007F] decoration-2 underline-offset-4 font-black">
                6人の騎士（ヴァイスシュヴァリエ）
              </span>
              。
              <br />
              個人の限界を超え、最高のエンタメを届けるための
              <span className="text-[#FF007F] font-black italic neon-text-subtle">
                「剣」
              </span>
              となれ。
            </p>
          </div>

          {/* Hero Section First-View CTA Button */}
          <div className="w-full">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfHeUy4zA_wiaP0K6uHf9ob8lJ3UtjDqdswm0oyFYvVNB3tjg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#FF007F] text-white font-black italic text-base sm:text-lg tracking-wider border-2 border-white/80 animate-pulse-neon transition-transform active:scale-95"
            >
              <SwordIcon className="w-5 h-5" glow={false} />
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                オーディションに応募する
              </span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-2.5 text-[11px] font-cyber tracking-widest text-zinc-400">
              ✦ ENTRY VIA GOOGLE FORM ✦
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center gap-1 opacity-80">
          <span className="font-cyber italic text-[10px] tracking-[0.35em] text-[#FF007F]">
            SCROLL DOWN
          </span>
          <div className="w-[1px] h-7 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* Sticky Fixed Bottom CTA Bar (スマホファースト常時追従CTA) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-t border-[#FF007F]/60 px-3 py-2.5 shadow-[0_-8px_30px_rgba(255,0,127,0.35)]">
        <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
          <div className="hidden xs:flex flex-col">
            <span className="font-cyber italic text-[10px] text-[#FF007F] tracking-widest font-bold">
              YourKnight AUDITION
            </span>
            <span className="text-xs font-black text-white">
              初期メンバー6名募集中
            </span>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHeUy4zA_wiaP0K6uHf9ob8lJ3UtjDqdswm0oyFYvVNB3tjg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#FF007F] via-[#ff1a8c] to-[#FF007F] text-white font-black italic text-sm sm:text-base tracking-wider border border-white/70 neon-box active:scale-95 transition-all"
          >
            <SwordIcon className="w-4 h-4 shrink-0" glow={false} />
            <span>［ 今すぐオーディションに応募する ］</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    </>
  );
};
