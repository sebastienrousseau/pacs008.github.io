---
title: "pacs.008.001.13 | 金融機関間顧客信用振替 | pacs008"
description: pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。
lang: ja-JP
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — 金融機関間顧客信用振替

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>登録状況</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>年</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>バージョン</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## 概要

pacs.008 メッセージは、顧客に代わって資金を送金するために金融機関間で交換される中核的な支払指図です。1つ以上のクレジットトランスファー取引について、債務者、債権者、金額、および送金情報を付帯します。

> 2026年3月23日に一次情報との照合を行いました。ISO 20022 カタログの参照日: 2025-02-27。ソースリンクは以下に記載しています。

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — メッセージID、作成日、取引数、および決済情報を含むグループヘッダー</td>
          <td class="operational-matrix-table__right">顧客発の国際および国内クレジットトランスファーの主要メッセージ</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 金額、手数料、および目的を含むクレジットトランスファー取引情報</td>
          <td class="operational-matrix-table__right">SEPA SCT、SEPA Instant、CBPR+、および国内クリアリングシステムで使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 債務者および債務者エージェントの識別とアカウント詳細</td>
          <td class="operational-matrix-table__right">ストレートスルー照合を支援するための構造化された送金情報を付帯</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 債権者および債権者エージェントの識別とアカウント詳細</td>
          <td class="operational-matrix-table__right">マルチレッグ支払チェーンにおけるシリアル、カバー、およびダイレクト決済方式に対応</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — 構造化またはフリーテキストの支払参照のための送金情報</td>
          <td class="operational-matrix-table__right">債務者エージェントは pacs.008 を作成し、債権者エージェントに（直接または仲介機関を経由して）送信します。チェーン内の各エージェントが指図を検証、補完、転送し、最終的に債権者エージェントが受取人の口座に入金します。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+およびスキーマコンテキスト

- クロスボーダー顧客クレジットトランスファーにおいて MT103 および MT103+ を置き換える
- 2026年11月の構造化アドレス期限がすべての当事者郵便アドレスに適用
- SWIFT gpi は UETR ベースのエンドツーエンドトラッキングに pacs.008 を要求
- 13回の改訂がマーケットインフラストラクチャ全体にわたるスキーマの継続的進化を反映

## メッセージフロー

債務者エージェントは pacs.008 を作成し、債権者エージェントに（直接または仲介機関を経由して）送信します。チェーン内の各エージェントが指図を検証、補完、転送し、最終的に債権者エージェントが受取人の口座に入金します。

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">初期の改訂版</td>
          <td class="version-diff-table__takeaway">主にレガシー移行分析やバージョン履歴の把握に役立ちます。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">現行版以前の近代的改訂版</td>
          <td class="version-diff-table__takeaway">最近の移行や共存プロジェクトで最も遭遇しやすい改訂版です。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">現在のカタログ改訂版</td>
          <td class="version-diff-table__takeaway">現行バージョン計画に使えますが、スキーム利用ルールと相手先の準備状況は引き続き確認してください。</td>
        </tr>
    </tbody>
  </table>
</div>

## 注釈付き XML サンプル

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### フィールド解説

- `MsgId`: これはエンド顧客の支払参照ではなく、メッセージエンベロープ自体を識別するものにしてください。
- `EndToEndId`: 可能な限り、下流システム全体で顧客向けのトレーサビリティを安定して維持してください。
- `UETR`: クロスボーダーかつ追跡重視の環境では一貫して使用し、後続ワークフロー段階で場当たり的に生成しないでください。
- `IntrBkSttlmAmt`: スキーマ検証の前に、業務ルールで金額と通貨を検証してください。
- `Dbtr` / `Cdtr`: 当事者データの品質、住所構造、識別子は通常、修復率を左右する主要因です。

## 比較 pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.008 vs pacs.009">
  <table>
    <caption>比較 pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>観点</th>
        <th>pacs.008.001.13</th>
        <th>比較対象メッセージ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主目的</td>
          <td class="message-comparison-table__current">顧客クレジット転送</td>
          <td class="message-comparison-table__other">金融機関自己勘定送金またはカバーレッグ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">業務責任者</td>
          <td class="message-comparison-table__current">顧客支払業務</td>
          <td class="message-comparison-table__other">トレジャリー / コルレス / 資金業務</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">典型的な組み合わせ</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002、pacs.004、および場合によっては関連する pacs.008 フロー</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">避けるべき誤解</td>
          <td class="message-comparison-table__current">すべての銀行間送金がここに該当するという考え</td>
          <td class="message-comparison-table__other">顧客向けクレジット転送指図を置き換えられるという考え</td>
        </tr>
    </tbody>
  </table>
</div>

## 一次参照資料

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## サポートバージョン

<div class="message-versions-table" tabindex="0" aria-label="サポートバージョン">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>バージョン</th>
        <th>ステータス</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>現行</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/ja/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">支払返却</td>
          <td class="related-messages-table__overview">pacs.004 メッセージは、以前に決済された支払取引を返却するために使用されます。支払が適用できなかった場合、誤って送信された場合、または発信機関が取り消しを要求する場合に、資金の流れを逆転させます。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ja/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機関間信用振替</td>
          <td class="related-messages-table__overview">pacs.009 メッセージは、顧客に代わってではなく金融機関自身の勘定でのクレジットトランスファーに使用されます。銀行間の資金移動、カバーペイメント、および流動性管理に対応します。</td>
        </tr>
    </tbody>
  </table>
</div>

