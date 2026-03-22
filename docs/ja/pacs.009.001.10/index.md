---
title: pacs.009.001.10 — Financial Institution Credit Transfer | 日本語
description: pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO名称** | FinancialInstitutionCreditTransferV10 |
| **登録状況** | Registered |
| **年** | 2019 |
| **バージョン** | 10 |

## 概要

pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と決済情報を含むグループヘッダー
- **CdtTrfTxInf** — 銀行間決済金額を含むクレジットトランスファー取引情報
- **Dbtr / DbtrAgt** — 債務者機関およびそのエージェントの識別
- **Cdtr / CdtrAgt** — 債権者機関およびそのエージェントの識別
- **IntrBkSttlmAmt** — 決済通貨での銀行間決済金額

## ビジネスコンテキスト

- 銀行間の自己勘定振替およびカバーペイメントに使用
- コルレスバンキングパートナー間の流動性管理に対応
- カバー方式で決済される顧客クレジットトランスファーのカバーレッグを付帯
- 金融機関間のトレジャリーおよび資金調達オペレーションを可能にする

## CBPR+およびスキーマコンテキスト

- 機関間振替において MT202 および MT202COV を置き換える
- カバー方式フローでは pacs.009 を基となる pacs.008 顧客指図とペアリング
- 構造化された当事者データおよび LEI 識別がますます要求される
- SWIFT gpi はコルレスバンキングの透明性のため pacs.009 をカバー

## メッセージフロー

債務者機関は自己資金を送金するために債権者機関に pacs.009 を送信します。カバー方式の支払では、pacs.009 が資金調達レッグを提供し、pacs.008 が別のパスで顧客指図を運びます。

## 関連メッセージ

- [`pacs.008.001.13`](/ja/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/ja/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/ja/pacs.010.001.05/) — Financial Institution Direct Debit

