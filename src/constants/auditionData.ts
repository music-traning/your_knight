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
    title: "専属Mixエンジニアによる音声処理とバックアップ",
    highlight: "専属Mixエンジニア",
    description:
      "グループ内に専属のMix担当が在籍。本格的なDAWとプラグインを用いた精密なノイズ処理・ダイナミクス制御を行い、あなたの歌声を商用水準へ引き上げます。ボーカルミックスの技術的ハードルは内部でクリアできるため、歌唱表現に集中できます。(※まずはスマホ録音からでもエントリー可能です。専属エンジニアのMix技術でクオリティを引き上げます（本格的な宅録機材の導入相談やサポートも可能です）。)",
  },
  {
    id: "env-02",
    number: "02",
    tag: "ORIGINAL & MV",
    title: "週1回の「歌ってみた」展開と、共に目指すクリエイティブの拡大",
    highlight: "週1回の「歌ってみた」展開",
    description:
      "まずはグループ全体やコラボでの「歌ってみた」動画を週1回ペースで継続的に発信することを目標とします。完成された環境に乗っかるのではなく、活動を軌道に乗せながら、ゆくゆくはオリジナル楽曲の制作やリッチな動画表現へ、メンバー全員で共にステップアップしていくフェーズです。",
  },
  {
    id: "env-03",
    number: "03",
    tag: "MANAGEMENT",
    title: "Discordを拠点とした、主体的なチーム運営と制作進行",
    highlight: "主体的なチーム運営と制作進行",
    description:
      "複雑なスケジュール調整や企画進行は専用Discordに集約し、効率的に管理します。運営がすべてをお膳立てするのではなく、メンバー同士がフラットに意見を交わし、自らのアイデアで「YourKnight」というグループを作り上げていく、立ち上げ期ならではの熱量を大切にしています。",
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
  "10代後半〜20代の方（※性別不問。枠組みに囚われないあなたの個性を最優先します）",
  "活動ペース（月数回〜）は柔軟に相談可能です。歌枠やゲーム実況など、あなたの得意な形での参加を歓迎します。",
  "個人活動との両立を応援します。他グループとの兼任についても、まずはご相談ください。",
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
