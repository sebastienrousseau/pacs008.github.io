---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO名称** | FIToFICustomerCreditTransferV13 |
| **登録状況** | Registered |
| **年** | 2023 |
| **バージョン** | 13 |

## 概要

pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 27 February 2025。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージID、作成日、取引数、および決済情報を含むグループヘッダー
- **CdtTrfTxInf** — 金額、手数料、および目的を含むクレジットトランスファー取引情報
- **Dbtr / DbtrAgt** — 債務者および債務者エージェントの識別とアカウント詳細
- **Cdtr / CdtrAgt** — 債権者および債権者エージェントの識別とアカウント詳細
- **RmtInf** — 構造化またはフリーテキストの支払参照のための送金情報

## ビジネスコンテキスト

- 顧客発の国際および国内クレジットトランスファーの主要メッセージ
- SEPA SCT、SEPA Instant、CBPR+、および国内クリアリングシステムで使用
- ストレートスルー照合を支援するための構造化された送金情報を付帯
- マルチレッグ支払チェーンにおけるシリアル、カバー、およびダイレクト決済方式に対応

| 主要データ要素 | ビジネスコンテキスト |
|---|---|
| **GrpHdr** — メッセージID、作成日、取引数、および決済情報を含むグループヘッダー | 顧客発の国際および国内クレジットトランスファーの主要メッセージ |
| **CdtTrfTxInf** — 金額、手数料、および目的を含むクレジットトランスファー取引情報 | SEPA SCT、SEPA Instant、CBPR+、および国内クリアリングシステムで使用 |
| **Dbtr / DbtrAgt** — 債務者および債務者エージェントの識別とアカウント詳細 | ストレートスルー照合を支援するための構造化された送金情報を付帯 |
| **Cdtr / CdtrAgt** — 債権者および債権者エージェントの識別とアカウント詳細 | マルチレッグ支払チェーンにおけるシリアル、カバー、およびダイレクト決済方式に対応 |
| **RmtInf** — 構造化またはフリーテキストの支払参照のための送金情報 | 債務者エージェントは pacs.008 を作成し、債権者エージェントに（直接または仲介機関を経由して）送信します。チェーン内の各エージェントが指図を検証、補完、転送し、最終的に債権者エージェントが受取人の口座に入金します。 |

## CBPR+およびスキーマコンテキスト

- クロスボーダー顧客クレジットトランスファーにおいて MT103 および MT103+ を置き換える
- 2026年11月の構造化アドレス期限がすべての当事者郵便アドレスに適用
- SWIFT gpi は UETR ベースのエンドツーエンドトラッキングに pacs.008 を要求
- 13回の改訂がマーケットインフラストラクチャ全体にわたるスキーマの継続的進化を反映

## メッセージフロー

債務者エージェントは pacs.008 を作成し、債権者エージェントに（直接または仲介機関を経由して）送信します。チェーン内の各エージェントが指図を検証、補完、転送し、最終的に債権者エージェントが受取人の口座に入金します。

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## サポートバージョン

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## 関連メッセージ
| メッセージ種別 | 説明 | 概要 |
|---|---|---|
| [`pacs.002.001.12`](/ja/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。 |
| [`pacs.004.001.11`](/ja/pacs.004.001.11/) | Payment Return | pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。 |
| [`pacs.009.001.10`](/ja/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。 |

