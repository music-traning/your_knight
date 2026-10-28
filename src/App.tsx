import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { HeroSection } from "./components/HeroSection";
import { MessageSection } from "./components/MessageSection";
import { EnvironmentSection } from "./components/EnvironmentSection";
import { RequirementsSection } from "./components/RequirementsSection";
import { FlowSection } from "./components/FlowSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 selection:bg-[#FF007F] selection:text-white">
      <main>
        {/* 1. Heroセクション */}
        <HeroSection />

        {/* 2. 運営からのメッセージ */}
        <MessageSection />

        {/* 3. 3つの神環境（メリット） */}
        <EnvironmentSection />

        {/* 4. 募集要項・求める人物像 */}
        <RequirementsSection />

        {/* 5. オーディションのフロー */}
        <FlowSection />

        {/* 6. よくある質問 */}
        <FaqSection />

        {/* 7. CTA（応募用ボタン） */}
        <CtaSection />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
