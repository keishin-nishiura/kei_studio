# mocks

デザインモックの管理フォルダです。

---

## ディレクトリ構造ルール

新しいモックを作成する際は、**プロジェクト名のフォルダを作成し、その中にファイルを追加**していきます。

```
mocks/
└── {プロジェクト名}/
    ├── index.html      # トップページ（必須）
    ├── reserve.html    # 予約ページ（任意）
    ├── valley.html     # その他ページ（任意）
    └── assets/         # 画像・CSS・JS などのアセット（任意）
```

### ルール

1. **フォルダ名** はプロジェクト名をケバブケース（小文字・ハイフン区切り）で命名する
   - 例: `midori-place`, `kiraha-resort`, `restaurant-corp`
2. **トップページ** は必ず `index.html` とする
3. **モック内の遷移ページ**（予約・詳細など）はフォルダ内にファイルを追加する
   - ❌ `mocks/midori-reserve.html` のようにフォルダ外に置かない
   - ✅ `mocks/midori-place/reserve.html` のようにフォルダ内に置く
4. **アセット**（画像・スクリプト・スタイルなど）が必要な場合は `assets/` フォルダを作成してまとめる
5. ファイル内のパス参照は**相対パス**を使用する

---

## 既存モック一覧

| フォルダ名 | 概要 | ページ |
|---|---|---|
| `sorakiri-place/` | ソラキリプレイス | index, reserve |
| `midori-place/` | ミドリプレイス | index, reserve, valley |
| `kiraha-resort/` | キラハリゾート | index |
| `hoshikusa-place/` | ホシクサプレイス | index, v2 |
| `restaurant-corp/` | レストランコープ | index |
| `retribes/` | リトライブス | index + assets |

---

## 新規モック作成手順

1. `mocks/` 直下にプロジェクトフォルダを作成
2. `index.html` を作成してトップページを実装
3. 遷移先ページが増える場合は同フォルダ内にファイルを追加
4. アセットが必要な場合は `assets/` フォルダを作成してまとめる
