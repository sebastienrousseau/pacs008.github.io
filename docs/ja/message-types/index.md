---
title: メッセージ種別 | 日本語
description: サポートされている ISO 20022 pacs メッセージ定義とバージョン。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# メッセージ種別

Pacs008 はコアの pacs.008 メッセージ定義と、オーケストレーションおよびリコンシリエーションフローで使用される関連メッセージをカバーします。

## 含まれるサポート

| メッセージ種別 | 説明 |
|---|---|
| [`pacs.002.001.12`](/ja/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/ja/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/ja/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/ja/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/ja/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/ja/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/ja/pacs.028.001.05/) | FI to FI Payment Status Request |

## 提供モデル

サポートされている各メッセージタイプにはテンプレートアセットと検証ロジックが含まれており、チームは複数のダウンストリームチャネルで生成とリグレッションテストを標準化できます。

## 2026 年の市場コンテキスト

- **SEPA SCT / SCT Inst**：pacs.008 は送金交換と即時決済処理の中心であり続けます。
- **CBPR+**：pacs.008 は MT103 スタイルのクロスボーダーペイロードをより豊富な構造化データに置き換え続けます。
- **構造化住所**：現在の市場ガイダンスは、2026 年 11 月の完全非構造化郵便住所からの切り替えを指し示しています。
- **シリアル方式と STP**：マルチレッグの銀行間チェーンは依然重要であり、ストレートスルー処理バリアントは運用効率にとって不可欠です。

## 運用機能

Pacs008 はサポートされたメッセージ定義リビジョンにわたるテンプレートベースの生成と検証を提供します：

- バージョンの比較
- スキーマ更新のリグレッションテスト
- リリース前の送信決済メッセージデータの強化
- 単一のコードベースからプロダクト、オペレーション、移行チームをサポート

