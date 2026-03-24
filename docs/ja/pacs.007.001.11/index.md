---
title: pacs.007.001.11 | 金融機関間支払取消 | pacs008
description: pacs.007 メッセージは、まだ決済されていない以前に送信した支払指図を取り消すため、または決済済み支払の取り消しを要求するために使用されます。pacs.004（返却）とは異なり、元の指図元エージェントが開始します。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — 金融機関間支払取消

| | |
|---|---|
| **ISO名称** | FIToFIPaymentReversalV11 |
| **登録状況** | Registered |
| **年** | 2019 |
| **バージョン** | 11 |

## 概要

pacs.007 メッセージは、まだ決済されていない以前に送信した支払指図を取り消すため、または決済済み支払の取り消しを要求するために使用されます。pacs.004（返却）とは異なり、元の指図元エージェントが開始します。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

## 主要データ要素

- **GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー
- **TxInf** — 取消金額および当事者情報を含む取引情報
- **OrgnlGrpInf** — 元メッセージを参照する元グループ情報
- **RvslRsnInf** — 構造化された理由コードを含む取消理由情報
- **OrgnlTxRef** — エンドツーエンドのトレーサビリティのための元取引参照

## ビジネスコンテキスト

- 元の送信者が決済前または決済後にエラーを特定した場合に開始
- 迅速な取消が必要な不正シナリオで使用
- 元の支払金額の全額および部分取消の両方に対応
- 下流処理のための構造化された取消理由コードを付帯

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
          <td class="operational-matrix-table__left">**GrpHdr** — メッセージ識別子と作成タイムスタンプを含むグループヘッダー</td>
          <td class="operational-matrix-table__right">元の送信者が決済前または決済後にエラーを特定した場合に開始</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — 取消金額および当事者情報を含む取引情報</td>
          <td class="operational-matrix-table__right">迅速な取消が必要な不正シナリオで使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — 元メッセージを参照する元グループ情報</td>
          <td class="operational-matrix-table__right">元の支払金額の全額および部分取消の両方に対応</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**RvslRsnInf** — 構造化された理由コードを含む取消理由情報</td>
          <td class="operational-matrix-table__right">下流処理のための構造化された取消理由コードを付帯</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlTxRef** — エンドツーエンドのトレーサビリティのための元取引参照</td>
          <td class="operational-matrix-table__right">指図元エージェント（元の送信者）は、以前に指図した支払を取り消すために支払チェーンを通じて pacs.007 を前方に送信します。各エージェントが取消指図を処理し、それに応じて決済を調整します。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- pacs.004 とは方向で区別される — 取消は発信者から前方に流れ、返却は受取人から後方に流れる
- CBPR+ は自動照合のために元メッセージ識別子とのペアリングを要求
- 構造化された理由コードがレガシー MT メッセージの自由テキストナラティブに代わる
- 即時決済のリコールおよび不正防止ワークフローでの使用が増加

## メッセージフロー

指図元エージェント（元の送信者）は、以前に指図した支払を取り消すために支払チェーンを通じて pacs.007 を前方に送信します。各エージェントが取消指図を処理し、それに応じて決済を調整します。

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">pacs008 における現在の実装</td>
          <td class="version-diff-table__takeaway">リバーサルワークフロー設計の良い基準になります。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">より新しいカタログ改訂版</td>
          <td class="version-diff-table__takeaway">現行の市場インフラ要件との整合性について、後続改訂版を確認してください。</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### フィールド解説

- `MsgId`: リバーサル自体に、監査に耐える独自の識別子が必要です。
- `OrgnlInstrId`: 照合の断絶を避けるため、元の支払参照を保持してください。
- `RvslRsnInf`: 不正、誤り、重複支払の各ケースを別々に振り分けられるよう、構造化されたリバーサル理由を使用してください。

## 比較 pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>観点</th>
        <th>pacs.007.001.11</th>
        <th>比較対象メッセージ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主目的</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">最も適した用途</td>
          <td class="message-comparison-table__current">リコール、誤り、または不正に起因するリバーサル対応</td>
          <td class="message-comparison-table__other">決済後の返却対応</td>
        </tr>
    </tbody>
  </table>
</div>

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/ja/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">金融機関間顧客信用振替</td>
          <td class="related-messages-table__overview">pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">支払返却</td>
          <td class="related-messages-table__overview">pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機関間支払ステータス報告</td>
          <td class="related-messages-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
    </tbody>
  </table>
</div>

