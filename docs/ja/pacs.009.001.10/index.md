---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
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

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 27 February 2025。ソースリンクは以下に記載しています。

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

| 主要データ要素 | ビジネスコンテキスト |
|---|---|
| **GrpHdr** — メッセージ識別子と決済情報を含むグループヘッダー | 銀行間の自己勘定振替およびカバーペイメントに使用 |
| **CdtTrfTxInf** — 銀行間決済金額を含むクレジットトランスファー取引情報 | コルレスバンキングパートナー間の流動性管理に対応 |
| **Dbtr / DbtrAgt** — 債務者機関およびそのエージェントの識別 | カバー方式で決済される顧客クレジットトランスファーのカバーレッグを付帯 |
| **Cdtr / CdtrAgt** — 債権者機関およびそのエージェントの識別 | 金融機関間のトレジャリーおよび資金調達オペレーションを可能にする |
| **IntrBkSttlmAmt** — 決済通貨での銀行間決済金額 | 債務者機関は自己資金を送金するために債権者機関に pacs.009 を送信します。カバー方式の支払では、pacs.009 が資金調達レッグを提供し、pacs.008 が別のパスで顧客指図を運びます。 |

## CBPR+およびスキーマコンテキスト

- 機関間振替において MT202 および MT202COV を置き換える
- カバー方式フローでは pacs.009 を基となる pacs.008 顧客指図とペアリング
- 構造化された当事者データおよび LEI 識別がますます要求される
- SWIFT gpi はコルレスバンキングの透明性のため pacs.009 をカバー

## メッセージフロー

債務者機関は自己資金を送金するために債権者機関に pacs.009 を送信します。カバー方式の支払では、pacs.009 が資金調達レッグを提供し、pacs.008 が別のパスで顧客指図を運びます。

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## 関連メッセージ
| メッセージ種別 | 説明 | 概要 |
|---|---|---|
| [`pacs.008.001.13`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。 |
| [`pacs.002.001.12`](/ja/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。 |
| [`pacs.010.001.05`](/ja/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010 メッセージは、金融機関自身の勘定でのダイレクトデビット取引に金融機関間で使用されます。一つの機関が他の機関の口座から直接資金を回収することを可能にします。 |

