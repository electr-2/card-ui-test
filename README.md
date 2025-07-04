AI製でやんす
ご容赦を
パクってもいいよ

↓↓↓以下AI
# スワイプ可能なカードUI デモ

React と Tailwind CSS を使用したスワイプ可能なカードUIのデモンストレーションです。

## 機能

- 🎯 **スワイプジェスチャー**: マウスドラッグとタッチの両方に対応
- 🎨 **美しいアニメーション**: スムーズなトランジションと回転効果
- 📱 **レスポンシブデザイン**: モバイルとデスクトップの両方で動作
- 🎮 **カード分類**: 左スワイプで削除、右スワイプで保存
- 📊 **リアルタイム統計**: 処理済みカードの統計表示

## 技術スタック

- **React**: UIフレームワーク
- **Vite**: 高速ビルドツール
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build
```

## 使い方

1. 開発サーバーを起動後、ブラウザで `http://localhost:5173` にアクセス
2. カードを左右にドラッグまたはスワイプして分類
3. 統計エリアで処理済みカードの数を確認
4. すべてのカードを処理後、リセットボタンで再開始

## プロジェクト構造

```
src/
├── components/
│   ├── SwipeableCard.jsx  # スワイプ可能なカードコンポーネント
│   └── CardDeck.jsx       # カードデッキ管理コンポーネント
├── App.jsx               # メインアプリケーション
└── index.css            # Tailwind CSS設定
```
