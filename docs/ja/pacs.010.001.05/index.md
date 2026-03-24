---
title: pacs.010.001.05 | 金融機関間口座振替 | pacs008
description: pacs.010 メッセージは、金融機関自身の勘定でのダイレクトデビット取引に金融機関間で使用されます。一つの機関が他の機関の口座から直接資金を回収することを可能にします。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — 金融機関間口座振替

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## 概要

pacs.010 メッセージは、金融機関自身の勘定でのダイレクトデビット取引に金融機関間で使用されます。一つの機関が他の機関の口座から直接資金を回収することを可能にします。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と決済情報を含むグループヘッダー
- **DrctDbtTxInf** — 回収金額を含むダイレクトデビット取引情報
- **Cdtr / CdtrAgt** — 債権者機関およびそのエージェントの識別
- **Dbtr / DbtrAgt** — 債務者機関およびそのエージェントの識別
- **IntrBkSttlmAmt** — 決済通貨での銀行間決済金額

## ビジネスコンテキスト

- 金融機関間の銀行間ダイレクトデビット回収に対応
- 手数料回収、マージンコール、および機関間決済義務に使用
- 参加機関間の事前合意された双方向取決めが必要
- 機関のキャッシュマネジメントおよび銀行間決済サイクルに不可欠

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
          <td class="operational-matrix-table__right">金融機関間の銀行間ダイレクトデビット回収に対応</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — 回収金額を含むダイレクトデビット取引情報</td>
          <td class="operational-matrix-table__right">手数料回収、マージンコール、および機関間決済義務に使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 債権者機関およびそのエージェントの識別</td>
          <td class="operational-matrix-table__right">参加機関間の事前合意された双方向取決めが必要</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 債務者機関およびそのエージェントの識別</td>
          <td class="operational-matrix-table__right">機関のキャッシュマネジメントおよび銀行間決済サイクルに不可欠</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — 決済通貨での銀行間決済金額</td>
          <td class="operational-matrix-table__right">債権者機関は事前合意された取決めに基づき資金を回収するため、債務者機関に pacs.010 を送信します。債務者機関は要求を検証し、ダイレクトデビットを決済または拒否します。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- 銀行間ダイレクトデビット処理において MT204 の要素を置き換える
- 構造化された当事者識別は他の pacs メッセージと同じ要件に従う
- 機関識別子（BIC、LEI）のバリデーションが必須
- マーケットインフラストラクチャ全体の ISO 20022 完全採用ロードマップに含まれる

## メッセージフロー

債権者機関は事前合意された取決めに基づき資金を回収するため、債務者機関に pacs.010 を送信します。債務者機関は要求を検証し、ダイレクトデビットを決済または拒否します。

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">pacs008 における現在の実装</td>
          <td class="version-diff-table__takeaway">現在のプロジェクトにおける金融機関向け口座振替対応の基準点です。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">後続のカタログ改訂版</td>
          <td class="version-diff-table__takeaway">より新しいインフラ要件を採用する前に確認してください。</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### フィールド解説

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/ja/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機関間信用振替</td>
          <td class="related-messages-table__overview">pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機関間支払ステータス報告</td>
          <td class="related-messages-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">金融機関間顧客口座振替</td>
          <td class="related-messages-table__overview">pacs.003 メッセージは、顧客のダイレクトデビット指図を実行するために金融機関間で交換されます。債権者の銀行が債権者に代わって債務者の銀行から資金を回収することを可能にします。</td>
        </tr>
    </tbody>
  </table>
</div>

