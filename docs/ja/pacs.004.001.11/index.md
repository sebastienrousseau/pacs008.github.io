---
title: pacs.004.001.11 | 支払返却 | pacs008
description: pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — 支払返却

| | |
|---|---|
| **ISO名称** | PaymentReturnV11 |
| **登録状況** | Registered |
| **年** | 2019 |
| **バージョン** | 11 |

## 概要

pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー
- **TxInf** — 返却金額および当事者情報を含む取引情報
- **OrgnlGrpInf** — 元メッセージに紐づく元グループ情報
- **RtrRsnInf** — 構造化された理由コードを含む返却理由情報
- **OrgnlTxRef** — 照合および照合のための元取引参照

## ビジネスコンテキスト

- 受取人の口座に入金できない場合の決済後返却を処理
- 発信者が資金の返却を要求するリコールシナリオに対応
- 規制上および業務上の透明性のため構造化された返却理由コードを付帯
- クレジットトランスファーの返却（pacs.008）およびダイレクトデビットの返却（pacs.003）の両方に適用

| 主要データ要素 | ビジネスコンテキスト |
|---|---|
| **GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー | 受取人の口座に入金できない場合の決済後返却を処理 |
| **TxInf** — 返却金額および当事者情報を含む取引情報 | 発信者が資金の返却を要求するリコールシナリオに対応 |
| **OrgnlGrpInf** — 元メッセージに紐づく元グループ情報 | 規制上および業務上の透明性のため構造化された返却理由コードを付帯 |
| **RtrRsnInf** — 構造化された理由コードを含む返却理由情報 | クレジットトランスファーの返却（pacs.008）およびダイレクトデビットの返却（pacs.003）の両方に適用 |
| **OrgnlTxRef** — 照合および照合のための元取引参照 | 被指図エージェントは、以前に決済された資金を返却するために支払チェーンを通じて pacs.004 を返送します。チェーン内の各エージェントが返却を処理し、該当する口座に資金を返金します。 |

## CBPR+およびスキーマコンテキスト

- MT103 RETURN およびカバー方式の返却メッセージングを置き換える
- 返却理由コードは ISO 20022 の下で標準化され機械可読となる
- CBPR+ は照合のために完全な元取引参照データを要求
- SWIFT gpi トラッキングはエンドツーエンドの可視性のため返却取引にも拡張

## メッセージフロー

被指図エージェントは、以前に決済された資金を返却するために支払チェーンを通じて pacs.004 を返送します。チェーン内の各エージェントが返却を処理し、該当する口座に資金を返金します。

## バージョン差分表

| バージョン範囲 | 重要な理由 | 実装上の要点 |
|---|---|---|
| pacs.004.001.11 | pacs008 における現在の実装 | 現在の支払返却テンプレートと整合します。 |
| pacs.004.001.12-14 | より新しいカタログ改訂版 | スキームのアップグレードや新しい相手先が対象になる場合は、後続の返却メッセージ改訂版を確認してください。 |

## 注釈付き XML サンプル

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### フィールド解説

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 理由コードの品質は、その後の顧客対応と運用上の振り分けにとって極めて重要です。

## 比較 pacs.004 vs pacs.007

| 観点 | pacs.004.001.11 | 比較対象メッセージ |
|---|---|---|
| 主目的 | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| 最も適した用途 | 決済後の返却対応 | リコール、誤り、または不正に起因するリバーサル対応 |

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## 関連メッセージ
| メッセージ種別 | 説明 | 概要 |
|---|---|---|
| [`pacs.008.001.13`](/ja/pacs.008.001.13/) | 金融機関間顧客信用振替 | pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。 |
| [`pacs.003.001.09`](/ja/pacs.003.001.09/) | 金融機関間顧客口座振替 | pacs.003 メッセージは、顧客のダイレクトデビット指図を実行するために金融機関間で交換されます。債権者の銀行が債権者に代わって債務者の銀行から資金を回収することを可能にします。 |
| [`pacs.002.001.12`](/ja/pacs.002.001.12/) | 金融機関間支払ステータス報告 | pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。 |

