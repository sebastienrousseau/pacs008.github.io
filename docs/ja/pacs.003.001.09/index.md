---
title: pacs.003.001.09 | 金融機関間顧客口座振替 | pacs008
description: pacs.003 メッセージは、顧客のダイレクトデビット指図を実行するために金融機関間で交換されます。債権者の銀行が債権者に代わって債務者の銀行から資金を回収することを可能にします。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — 金融機関間顧客口座振替

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO名称</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>登録状況</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>年</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>バージョン</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## 概要

pacs.003 メッセージは、顧客のダイレクトデビット指図を実行するために金融機関間で交換されます。債権者の銀行が債権者に代わって債務者の銀行から資金を回収することを可能にします。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と決済情報を含むグループヘッダー
- **DrctDbtTxInf** — 金額および当事者情報を含むダイレクトデビット取引情報
- **Cdtr** — 債権者の識別およびアカウント詳細
- **CdtrAgt** — 債権者エージェント（回収機関）の識別
- **DbtrAgt** — 債務者エージェント（支払機関）の識別

## ビジネスコンテキスト

- SEPA コアおよび B2B ダイレクトデビットスキームに対応
- サブスクリプション、公共料金、ローン返済などの定期的な支払回収に使用
- 債務者と債権者間の有効な委任参照が必要
- 単一メッセージ内での複数ダイレクトデビット指図の一括回収を可能にする

<div class="operational-matrix-table" tabindex="0" aria-label="主要データ要素 ビジネスコンテキスト">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>主要データ要素</th>
        <th>ビジネスコンテキスト</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — メッセージ識別子と決済情報を含むグループヘッダー</td>
          <td class="operational-matrix-table__right">SEPA コアおよび B2B ダイレクトデビットスキームに対応</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — 金額および当事者情報を含むダイレクトデビット取引情報</td>
          <td class="operational-matrix-table__right">サブスクリプション、公共料金、ローン返済などの定期的な支払回収に使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — 債権者の識別およびアカウント詳細</td>
          <td class="operational-matrix-table__right">債務者と債権者間の有効な委任参照が必要</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — 債権者エージェント（回収機関）の識別</td>
          <td class="operational-matrix-table__right">単一メッセージ内での複数ダイレクトデビット指図の一括回収を可能にする</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — 債務者エージェント（支払機関）の識別</td>
          <td class="operational-matrix-table__right">債権者エージェントは資金を回収するために債務者エージェントに向けて pacs.003 を開始します。債務者エージェントは委任を検証し、口座残高を確認し、取引を決済または返却します。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- 構造化されたアドレスおよび当事者識別要件はダイレクトデビットにも同様に適用される
- 委任関連データは2026年11月までに完全に構造化される必要がある
- クロスボーダーフローにおけるレガシー MT104 形式のダイレクトデビットフォーマットを置き換える
- 債権者スキーム識別のバリデーションがますます強化されている

## メッセージフロー

債権者エージェントは資金を回収するために債務者エージェントに向けて pacs.003 を開始します。債務者エージェントは委任を検証し、口座残高を確認し、取引を決済または返却します。

## バージョン差分表

<div class="version-diff-table" tabindex="0" aria-label="バージョン差分表">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>バージョン範囲</th>
        <th>重要な理由</th>
        <th>実装上の要点</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">pacs008 における現在の実装</td>
          <td class="version-diff-table__takeaway">現在のプロジェクトで口座振替参照をモデル化する際に有用です。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">より新しいカタログ改訂版</td>
          <td class="version-diff-table__takeaway">新規導入に使う前に、後続版で委任、ステータス、相互運用性に関する更新を確認してください。</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### フィールド解説

- `EndToEndId`: マンデート識別子と取立識別子は、業務上の請求書参照とは分けて管理してください。
- `IntrBkSttlmAmt`: XML を生成する前に、引落金額の精度と通貨ルールを検証してください。
- `Dbtr` / `Cdtr`: 口座振替の成否は、XML 構造よりも口座情報とマンデートの品質に左右されることが少なくありません。

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 関連メッセージ
<div class="related-messages-table" tabindex="0" aria-label="関連メッセージ">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>メッセージ種別</th>
        <th>説明</th>
        <th>概要</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">支払返却</td>
          <td class="related-messages-table__overview">pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">金融機関間支払取消</td>
          <td class="related-messages-table__overview">pacs.007 メッセージは、まだ決済されていない以前に送信した支払指図を取り消すため、または決済済み支払の取り消しを要求するために使用されます。pacs.004（返却）とは異なり、元の指図元エージェントが開始します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機関間支払ステータス報告</td>
          <td class="related-messages-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
    </tbody>
  </table>
</div>

