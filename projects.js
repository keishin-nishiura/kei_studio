/**
 * projects.js — プロジェクト進捗データ管理
 * ────────────────────────────────────────────
 * ここを編集するだけで Progress セクションが自動更新されます。
 *
 * フィールド説明:
 *   id          : 一意のID（DOMのidにも使用）
 *   name        : プロジェクト名
 *   tagline     : キャッチフレーズ（一行）
 *   description : 現状の説明
 *   icon        : アイコン文字（絵文字 or 略称）
 *   accentFrom  : グラデーション開始色（rgba）
 *   accentTo    : グラデーション終了色（rgba）
 *   glowColor   : グロー発光色
 *   percent     : 全体進捗 0〜100
 *   status      : "active" | "planning" | "shipped" | "paused"
 *   stack       : 技術スタック（文字列の配列）
 *   phases      : フェーズ配列
 *     label       : フェーズ名
 *     description : 説明
 *     state       : "done" | "current" | "upcoming"
 */

const PROJECTS = [
  {
    id: "qreader",
    name: "QReader",
    tagline: "読むことに集中できる、静かなリーダー体験",
    description:
      "Qiita API を用いた記事フィード、検索、ストック（お気に入り）管理、タグ設定、認証、記事表示（SafariView）など主要機能は実装済み。現在は UI の微調整、パフォーマンス最適化、アクセシビリティ、バグ修正を中心にリリース準備を進めています。具体的には記事カードのレイアウト調整、検索絞り込みの安定化、チュートリアルオーバーレイの改善、ネイティブ広告表示の確認、テストカバレッジの強化を行っています.",
    icon: "Q",
    accentFrom: "rgba(134,216,255,0.18)",
    accentTo: "rgba(143,124,255,0.10)",
    glowColor: "rgba(134,216,255,0.28)",
    percent: 72,
    status: "active",
    stack: [
      "Swift",
      "SwiftUI",
      "Combine",
      "Qiita API (REST)",
      "URLSession",
      "Unit/UI Tests (XCTest)",
    ],
    phases: [
      {
        label: "Concept",
        description:
          "アプリの価値仮説（読む行為を邪魔しない体験）と主要機能を定義。方向性やプロダクトのビジョンを文書化しています。",
        state: "done",
      },
      {
        label: "Structure",
        description:
          "画面構成・データフローを設計。主要な画面、データの流れ、認証・通信周りの構成を整理しました。",
        state: "done",
      },
      {
        label: "Development",
        description:
          "実装と統合を進行中。実装済み機能（現状の具体例）:\n  - フィード表示\n  - 記事詳細と外部表示\n  - 検索画面と絞り込み処理\n  - ストック管理\n  - タグ設定・インサイト\n  - ログイン・認証\n  - チュートリアルオーバーレイ\n  - ネイティブ広告表示\n  - モーション検知ユーティリティ\n現在は UI 調整・バグ修正・API エラーハンドリングの強化に注力。",
        state: "current",
      },
      {
        label: "Refinement",
        description:
          "アクセシビリティ対応、表示速度改善、メモリ使用量削減、UI の一貫性調整、ストア提出用メタデータ作成。具体作業:\n  - VoiceOver ラベル整備\n  - 画像キャッシュ最適化\n  - ローカライズ確認\n  - テストケース追加",
        state: "upcoming",
      },
      {
        label: "Release",
        description:
          "App Store 用の最終チェック、スクリーンショット／説明文作成、リリース手順確認。ローンチ直前の QA と軽微バグ修正を実施。",
        state: "upcoming",
      },
    ],
  },

  // ── 新しいプロジェクトはここに追加するだけ ──
  // {
  //   id: 'next-project',
  //   name: 'NextProject',
  //   tagline: 'ひとことで表すキャッチフレーズ',
  //   description: '現状の説明。',
  //   icon: 'N',
  //   accentFrom: 'rgba(159,243,210,0.18)',
  //   accentTo:   'rgba(134,216,255,0.10)',
  //   glowColor:  'rgba(159,243,210,0.28)',
  //   percent: 15,
  //   status: 'planning',
  //   stack: ['React', 'TypeScript', 'Supabase'],
  //   phases: [
  //     { label: 'Concept',     description: 'アイデアを固める。',   state: 'current'  },
  //     { label: 'Design',      description: 'UIを設計する。',       state: 'upcoming' },
  //     { label: 'Development', description: '実装する。',           state: 'upcoming' },
  //     { label: 'Release',     description: '公開する。',           state: 'upcoming' },
  //   ],
  // },
];

/** ステータス表示設定 */
const STATUS_CONFIG = {
  active: { label: "Active Dev", dot: "#86d8ff" },
  planning: { label: "Planning", dot: "#9ff3d2" },
  shipped: { label: "Shipped ✓", dot: "#a8edbd" },
  paused: { label: "Paused", dot: "#7f8b99" },
};
