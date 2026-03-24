---
title: pacs.002.001.12 | 金融機関間支払ステータス報告 | pacs008
description: pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — 金融機関間支払ステータス報告

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## 概要

pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — メッセージ識別子と作成タイムスタンプを含むグループヘッダー</td>
          <td class="operational-matrix-table__right">クレジットトランスファー、ダイレクトデビット、および支払返却の決済確認または拒否報告に使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — 一括レベルの報告のための元グループ情報およびステータス</td>
          <td class="operational-matrix-table__right">指図元エージェントと被指図エージェント間の照合を可能にする</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — 個々の取引結果のための取引情報およびステータス</td>
          <td class="operational-matrix-table__right">CBPR+ フローにおいて pacs.008 および pacs.009 メッセージの処理確認に必須</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — 構造化された理由コードを含むステータス理由情報</td>
          <td class="operational-matrix-table__right">一括グループレベルおよび個別取引レベルの両方のステータス報告に対応</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 元の指図に紐づく元取引参照</td>
          <td class="operational-matrix-table__right">被指図エージェント（受信者）は、pacs.008 または pacs.009 などの受信した支払指図の受理、決済、または拒否を確認するため、指図元エージェント（送信者）に pacs.002 を返送します。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- MT199 および MT メッセージのフィールド79ステータスナラティブを置き換える
- CBPR+ はすべての支払ステータス通信に pacs.002 を義務付ける
- 構造化された理由コードが自由テキストの拒否説明に代わる
- SWIFT gpi トラッキングの統合により、pacs.002 がエンドツーエンドの透明性に必要

## メッセージフロー

被指図エージェント（受信者）は、pacs.008 または pacs.009 などの受信した支払指図の受理、決済、または拒否を確認するため、指図元エージェント（送信者）に pacs.002 を返送します。

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">pacs008 における現在の実装</td>
          <td class="version-diff-table__takeaway">現在のプロジェクトテンプレートと検証資産に合わせる場合に使用します。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">より新しいカタログ改訂版</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### フィールド解説

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## 比較 pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>観点</th>
        <th>pacs.002.001.12</th>
        <th>比較対象メッセージ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主目的</td>
          <td class="message-comparison-table__current">ステータスを報告する</td>
          <td class="message-comparison-table__other">ステータスを照会する</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">やり取りを開始する主体</td>
          <td class="message-comparison-table__current">ステータスを送る金融機関</td>
          <td class="message-comparison-table__other">ステータスを照会する金融機関</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">運用上の位置付け</td>
          <td class="message-comparison-table__current">イベント駆動の報告</td>
          <td class="message-comparison-table__other">例外対応型の照会</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">避けるべき誤解</td>
          <td class="message-comparison-table__current">ステータス報告で調査ワークフローを置き換えられるという考え</td>
          <td class="message-comparison-table__other">すべての支払に明示的なステータス照会が必要だという考え</td>
        </tr>
    </tbody>
  </table>
</div>

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/ja/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">金融機関間顧客信用振替</td>
          <td class="related-messages-table__overview">pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機関間信用振替</td>
          <td class="related-messages-table__overview">pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">金融機関間支払ステータス照会</td>
          <td class="related-messages-table__overview">pacs.028 メッセージは、金融機関が以前に送信した支払指図のステータスを照会するために送信します。未承諾のステータスレポートを待つことなく、支払処理の能動的な追跡を可能にします。</td>
        </tr>
    </tbody>
  </table>
</div>

