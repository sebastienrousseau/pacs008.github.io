---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO名称** | FIToFIPaymentStatusReportV12 |
| **登録状況** | Registered |
| **年** | 2019 |
| **バージョン** | 12 |

## 概要

pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 27 February 2025。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー
- **OrgnlGrpInfAndSts** — 一括レベルの報告のための元グループ情報およびステータス
- **TxInfAndSts** — 個々の取引結果のための取引情報およびステータス
- **StsRsnInf** — 構造化された理由コードを含むステータス理由情報
- **OrgnlTxRef** — 元の指図に紐づく元取引参照

## ビジネスコンテキスト

- クレジットトランスファー、ダイレクトデビット、および支払返却の決済確認または拒否報告に使用
- 指図元エージェントと被指図エージェント間の照合を可能にする
- CBPR+ フローにおいて pacs.008 および pacs.009 メッセージの処理確認に必須
- 一括グループレベルおよび個別取引レベルの両方のステータス報告に対応

| 主要データ要素 | ビジネスコンテキスト |
|---|---|
| **GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー | クレジットトランスファー、ダイレクトデビット、および支払返却の決済確認または拒否報告に使用 |
| **OrgnlGrpInfAndSts** — 一括レベルの報告のための元グループ情報およびステータス | 指図元エージェントと被指図エージェント間の照合を可能にする |
| **TxInfAndSts** — 個々の取引結果のための取引情報およびステータス | CBPR+ フローにおいて pacs.008 および pacs.009 メッセージの処理確認に必須 |
| **StsRsnInf** — 構造化された理由コードを含むステータス理由情報 | 一括グループレベルおよび個別取引レベルの両方のステータス報告に対応 |
| **OrgnlTxRef** — 元の指図に紐づく元取引参照 | 被指図エージェント（受信者）は、pacs.008 または pacs.009 などの受信した支払指図の受理、決済、または拒否を確認するため、指図元エージェント（送信者）に pacs.002 を返送します。 |

## CBPR+およびスキーマコンテキスト

- MT199 および MT メッセージのフィールド79ステータスナラティブを置き換える
- CBPR+ はすべての支払ステータス通信に pacs.002 を義務付ける
- 構造化された理由コードが自由テキストの拒否説明に代わる
- SWIFT gpi トラッキングの統合により、pacs.002 がエンドツーエンドの透明性に必要

## メッセージフロー

被指図エージェント（受信者）は、pacs.008 または pacs.009 などの受信した支払指図の受理、決済、または拒否を確認するため、指図元エージェント（送信者）に pacs.002 を返送します。

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## 関連メッセージ
| メッセージ種別 | 説明 | 概要 |
|---|---|---|
| [`pacs.008.001.13`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。 |
| [`pacs.009.001.10`](/ja/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。 |
| [`pacs.028.001.05`](/ja/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028 メッセージは、金融機関が以前に送信した支払指図のステータスを照会するために送信します。未承諾のステータスレポートを待つことなく、支払処理の能動的な追跡を可能にします。 |

