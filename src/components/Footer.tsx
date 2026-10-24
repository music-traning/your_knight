import React from "react";
import { SwordIcon } from "./ui/SwordIcon";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-10 pb-28 px-4 text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <SwordIcon className="w-5 h-5" />
          <span className="font-cyber italic font-black text-xl tracking-wider text-white neon-text-subtle">
            Your<span className="text-[#FF007F]">Knight</span>
          </span>
        </div>
        <p className="text-xs font-bold text-zinc-400">
          神歌プロジェクト 新世代歌い手グループ初期メンバーオーディション
        </p>
        <p className="text-[11px] font-cyber tracking-widest text-zinc-600">
          © KAMIUTA PROJECT / YourKnight All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
