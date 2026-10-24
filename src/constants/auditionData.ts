export const AUDITION_ENTRY_URL = "https://x.com/misaki_utaite_" as const;

export interface EnvironmentCardItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  highlight: string;
  description?: string;
}

export const ENVIRONMENT_CARDS: EnvironmentCardItem[] = [
  {
    id: "env-01",
    number: "01",
    tag: "SOUND & MIX",
    title: "圧倒的クオリティの「楽曲制作・Mix環境」",
    highlight: "楽曲制作・Mix環境",
    description:
      "プロのクリエイター陣による本格的なサウンドメイキング。あなたの声の魅力を最大限に引き出す最高峰のMix・マスタリング環境を提供します。",
  },
  {
    id: "env-02",
    number: "02",
    tag: "ORIGINAL & MV",
    title: "「オリジナル楽曲」と「MV制作」のフルサポート（コラボでの「歌ってみた」を週1回ペースで展開）",
    highlight: "「オリジナル楽曲」と「MV制作」のフルサポート",
    description:
      "グループオリジナル曲やハイクオリティなMV制作を全面バックアップ。さらにコラボでの「歌ってみた」を週1回ペースで展開し、圧倒的な露出と成長を実現します。",
  },
  {
    id: "env-03",
    number: "03",
    tag: "MANAGEMENT",
    title: "活動に全集中できる「Discord活動管理体制」（スケジュール管理や進行管理を運営がサポート）",
    highlight: "Discord活動管理体制",
    description:
      "複雑なスケジュール調整や制作進行管理はすべて専用Discordにて運営陣が徹底サポート。クリエイティブな表現と歌唱に100%集中できる体制を整えています。",
  },
];

export const KNIGHT_VIRTUES = [
  { kanji: "奇跡", en: "MIRACLE" },
  { kanji: "信頼", en: "TRUST" },
  { kanji: "希望", en: "HOPE" },
  { kanji: "勇気", en: "COURAGE" },
  { kanji: "誠実", en: "SINCERITY" },
  { kanji: "叡智", en: "WISDOM" },
] as const;

export const REQUIREMENTS_LIST: string[] = [
  "10代後半〜20代前半の男女（男女3名ずつ、計6名）",
  "長尺動画（週1回目安）やゲーム実況に積極的に参加できる方。",
  "他の歌い手グループとの兼任不可（個人活動は自由だが、グループを優先）。",
  "顔出し・実写での活動は原則行わないため、安全管理を徹底できる方。",
];

export interface FlowStepItem {
  step: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export const FLOW_STEPS: FlowStepItem[] = [
  {
    step: "STEP 01",
    title: "エントリー（書類＆音源審査）",
    subtitle: "公式X（旧Twitter）の案内より必要事項と歌唱音源を添えてエントリー",
  },
  {
    step: "STEP 02",
    title: "オンライン面談・実技審査",
    subtitle: "活動への熱意や方向性のヒアリング、およびオンラインでの実技審査",
  },
  {
    step: "STEP 03",
    title: "メンバー選定・キャラクター構築（本人の希望を尊重し共同制作）",
    subtitle: "6人の騎士（ヴァイスシュヴァリエ）決定後、あなたの理想を反映したビジュアル・世界観を共同制作",
  },
  {
    step: "STEP 04",
    title: "制作準備・交流期間（2027年1月〜）",
    subtitle: "メンバー顔合わせ・ボイトレ・オリジナル楽曲＆MV収録・ティザー準備",
    badge: "2027.01 START",
  },
  {
    step: "STEP 05",
    title: "2027年4月、活動開始",
    subtitle: "神歌プロジェクト初・新世代歌い手グループ『YourKnight』堂々デビュー",
    badge: "2027.04 DEBUT",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    question: "配信やグループ経験がなくても応募できますか？",
    answer: "A. 可能です。熱意を重視します。",
  },
  {
    id: "faq-2",
    question: "顔出しは必須ですか？",
    answer: "A. いいえ、顔出し・実写での活動は原則行いません。",
  },
  {
    id: "faq-3",
    question: "個人の活動は続けられますか？",
    answer:
      "A. 自由ですが、グループ活動の予定が重複した場合はグループを優先していただきます。",
  },
];
