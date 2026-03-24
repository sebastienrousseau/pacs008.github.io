---
title: pacs.028.001.05 | 金融機関間支払ステータス照会 | pacs008
description: pacs.028 メッセージは、金融機関が以前に送信した支払指図のステータスを照会するために送信します。未承諾のステータスレポートを待つことなく、支払処理の能動的な追跡を可能にします。
lang: ja-JP
lastUpdated: true
image: /logo.svg
faq:
  - question: "Should pacs.028 be sent after every payment?"
    answer: "Usually no. It works best as a targeted exception tool, not as blanket traffic."
  - question: "What makes pacs.028 useful?"
    answer: "Clear timeout, escalation, and reconciliation rules around the original payment case."
---

# pacs.028.001.05 — 金融機関間支払ステータス照会

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">フィールド</th>
        <th scope="col">値</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO名称</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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

pacs.028 メッセージは、金融機関が以前に送信した支払指図のステータスを照会するために送信します。未承諾のステータスレポートを待つことなく、支払処理の能動的な追跡を可能にします。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー
- **TxInf** — 照会対象の支払を識別する取引情報
- **OrgnlGrpInf** — 元メッセージを参照する元グループ情報
- **OrgnlInstrId** — 元の支払からの元指図識別子
- **OrgnlEndToEndId** — トレーサビリティのための元エンドツーエンド識別子

## ビジネスコンテキスト

- 処理中の支払指図に対する能動的なステータス照会を可能にする
- 遅延または未着の支払を調査するオペレーションチームを支援
- 待機するのではなくステータス通信を開始することで pacs.002 を補完
- 例外処理および SLA モニタリングワークフローで使用

<div class="operational-matrix-table" tabindex="0" aria-label="主要データ要素 ビジネスコンテキスト">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — メッセージ識別子と作成タイムスタンプを含むグループヘッダー</td>
          <td class="operational-matrix-table__right">処理中の支払指図に対する能動的なステータス照会を可能にする</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 照会対象の支払を識別する取引情報</td>
          <td class="operational-matrix-table__right">遅延または未着の支払を調査するオペレーションチームを支援</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 元メッセージを参照する元グループ情報</td>
          <td class="operational-matrix-table__right">待機するのではなくステータス通信を開始することで pacs.002 を補完</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — 元の支払からの元指図識別子</td>
          <td class="operational-matrix-table__right">例外処理および SLA モニタリングワークフローで使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — トレーサビリティのための元エンドツーエンド識別子</td>
          <td class="operational-matrix-table__right">指図元エージェントは特定の支払のステータスを要求するため、被指図エージェントに pacs.028 を送信します。被指図エージェントは現在の処理ステータスを含む pacs.002 で応答します。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- MT199 ステータス照会パターンおよび手動 SWIFT メッセージクエリを置き換える
- CBPR+ は元メッセージ識別子に紐づく構造化されたステータスリクエストに対応
- UETR ベースの gpi トラッキングにより手動照会の必要性が軽減
- 自動化された支払オペレーションダッシュボードへの統合が進む

## メッセージフロー

指図元エージェントは特定の支払のステータスを要求するため、被指図エージェントに pacs.028 を送信します。被指図エージェントは現在の処理ステータスを含む pacs.002 で応答します。

## バージョン差分表

<div class="version-diff-table" tabindex="0" aria-label="バージョン差分表">
  <table>
    <caption>バージョン差分表</caption>
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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">pacs008 における現在の実装</td>
          <td class="version-diff-table__takeaway">現在のステータス照会モデリングに適しています。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">後続のカタログ改訂版</td>
          <td class="version-diff-table__takeaway">将来の相互運用計画のため、より新しいカタログ改訂版を確認してください。</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### フィールド解説

- `MsgId`: 照会そのものにも、元の支払とは別の監査可能な識別子が必要です。
- `OrgnlInstrId`: 照合精度を最大化するため、元の指図に含まれる正確な元識別子を使用してください。
- `OrgnlEndToEndId`: 顧客向けトレーサビリティを含めることで、運用チームは照会をより迅速に照合できます.

## 比較 pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.028 vs pacs.002">
  <table>
    <caption>比較 pacs.028 vs pacs.002</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>観点</th>
        <th>pacs.028.001.05</th>
        <th>比較対象メッセージ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主目的</td>
          <td class="message-comparison-table__current">ステータスを照会する</td>
          <td class="message-comparison-table__other">ステータスを報告する</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">やり取りを開始する主体</td>
          <td class="message-comparison-table__current">ステータスを照会する金融機関</td>
          <td class="message-comparison-table__other">ステータスを送る金融機関</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">運用上の位置付け</td>
          <td class="message-comparison-table__current">例外対応型の照会</td>
          <td class="message-comparison-table__other">イベント駆動の報告</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">避けるべき誤解</td>
          <td class="message-comparison-table__current">すべての支払について定常的に送るべきだという考え</td>
          <td class="message-comparison-table__other">これにより能動的なケース管理が不要になるという考え</td>
        </tr>
    </tbody>
  </table>
</div>

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機関間支払ステータス報告</td>
          <td class="related-messages-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">金融機関間顧客信用振替</td>
          <td class="related-messages-table__overview">pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機関間信用振替</td>
          <td class="related-messages-table__overview">pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。</td>
        </tr>
    </tbody>
  </table>
</div>

