---
title: pacs.009.001.10 | 金融機関間信用振替 | pacs008
description: pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — 金融機関間信用振替

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## 概要

pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

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
          <td class="operational-matrix-table__right">銀行間の自己勘定振替およびカバーペイメントに使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 銀行間決済金額を含むクレジットトランスファー取引情報</td>
          <td class="operational-matrix-table__right">コルレスバンキングパートナー間の流動性管理に対応</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 債務者機関およびそのエージェントの識別</td>
          <td class="operational-matrix-table__right">カバー方式で決済される顧客クレジットトランスファーのカバーレッグを付帯</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 債権者機関およびそのエージェントの識別</td>
          <td class="operational-matrix-table__right">金融機関間のトレジャリーおよび資金調達オペレーションを可能にする</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — 決済通貨での銀行間決済金額</td>
          <td class="operational-matrix-table__right">債務者機関は自己資金を送金するために債権者機関に pacs.009 を送信します。カバー方式の支払では、pacs.009 が資金調達レッグを提供し、pacs.008 が別のパスで顧客指図を運びます。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- 機関間振替において MT202 および MT202COV を置き換える
- カバー方式フローでは pacs.009 を基となる pacs.008 顧客指図とペアリング
- 構造化された当事者データおよび LEI 識別がますます要求される
- SWIFT gpi はコルレスバンキングの透明性のため pacs.009 をカバー

## メッセージフロー

債務者機関は自己資金を送金するために債権者機関に pacs.009 を送信します。カバー方式の支払では、pacs.009 が資金調達レッグを提供し、pacs.008 が別のパスで顧客指図を運びます。

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">pacs008 における現在の実装</td>
          <td class="version-diff-table__takeaway">FI クレジット転送フローに対する現在のプロジェクト対応内容と一致します。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">より新しいカタログ改訂版</td>
          <td class="version-diff-table__takeaway">コルレス環境やカバー決済環境でのロードマップ計画に重要です。</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### フィールド解説

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## 比較 pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>観点</th>
        <th>pacs.009.001.10</th>
        <th>比較対象メッセージ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主目的</td>
          <td class="message-comparison-table__current">金融機関自己勘定送金またはカバーレッグ</td>
          <td class="message-comparison-table__other">顧客クレジット転送</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">業務責任者</td>
          <td class="message-comparison-table__current">トレジャリー / コルレス / 資金業務</td>
          <td class="message-comparison-table__other">顧客支払業務</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">典型的な組み合わせ</td>
          <td class="message-comparison-table__current">pacs.002、pacs.004、および関連する pacs.008 フロー</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">避けるべき誤解</td>
          <td class="message-comparison-table__current">単により技術的な pacs.008 だという考え</td>
          <td class="message-comparison-table__other">金融機関の資金フローをそのまま無理なく表現できるという考え</td>
        </tr>
    </tbody>
  </table>
</div>

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/ja/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機関間支払ステータス報告</td>
          <td class="related-messages-table__overview">pacs.002 メッセージは、金融機関が以前に送信した支払指図のステータスを報告するために送信します。支払メッセージ内の個々の取引について、確認、拒否、または保留中のステータス情報を提供します。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">金融機関間口座振替</td>
          <td class="related-messages-table__overview">pacs.010 メッセージは、金融機関自身の勘定でのダイレクトデビット取引に金融機関間で使用されます。一つの機関が他の機関の口座から直接資金を回収することを可能にします。</td>
        </tr>
    </tbody>
  </table>
</div>

