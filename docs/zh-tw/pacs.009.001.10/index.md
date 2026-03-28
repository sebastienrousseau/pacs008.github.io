---
title: "pacs.009.001.10 | 金融機構信用轉帳 | pacs008"
description: pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。
lang: zh-TW
lastUpdated: true
image: /logo.webp
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — 金融機構信用轉帳

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">欄位</th>
        <th scope="col">值</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO 名稱</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>註冊狀態</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>年份</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>版本</strong></td>
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭
- **CdtTrfTxInf** — 包含銀行間清算金額的信用轉帳交易資訊
- **Dbtr / DbtrAgt** — 債務人機構及其代理人的識別
- **Cdtr / CdtrAgt** — 債權人機構及其代理人的識別
- **IntrBkSttlmAmt** — 以清算貨幣表示的銀行間清算金額

## 業務背景

- 用於銀行間自有帳戶轉帳和覆蓋付款
- 支援通匯銀行合作夥伴之間的流動性管理
- 攜帶透過覆蓋方式清算的客戶信用轉帳的覆蓋段
- 支援金融機構之間的資金營運和融資操作

<div class="operational-matrix-table" tabindex="0" aria-label="關鍵資料要素 業務背景">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>關鍵資料要素</th>
        <th>業務背景</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含訊息識別碼和清算資訊的群組標頭</td>
          <td class="operational-matrix-table__right">用於銀行間自有帳戶轉帳和覆蓋付款</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 包含銀行間清算金額的信用轉帳交易資訊</td>
          <td class="operational-matrix-table__right">支援通匯銀行合作夥伴之間的流動性管理</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 債務人機構及其代理人的識別</td>
          <td class="operational-matrix-table__right">攜帶透過覆蓋方式清算的客戶信用轉帳的覆蓋段</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 債權人機構及其代理人的識別</td>
          <td class="operational-matrix-table__right">支援金融機構之間的資金營運和融資操作</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — 以清算貨幣表示的銀行間清算金額</td>
          <td class="operational-matrix-table__right">債務人機構向債權人機構發送 pacs.009 以轉移自有資金。對於覆蓋方式的付款，pacs.009 提供資金調撥段，而 pacs.008 透過另一路徑攜帶客戶指令。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 在機構間轉帳中取代 MT202 和 MT202COV
- 覆蓋方式流程將 pacs.009 與基礎 pacs.008 客戶指令配對
- 結構化當事方資料和 LEI 識別的要求日益增加
- SWIFT gpi 涵蓋 pacs.009 以實現通匯銀行透明度

## 訊息流程

債務人機構向債權人機構發送 pacs.009 以轉移自有資金。對於覆蓋方式的付款，pacs.009 提供資金調撥段，而 pacs.008 透過另一路徑攜帶客戶指令。

## 版本差異表

<div class="version-diff-table" tabindex="0" aria-label="版本差異表">
  <table>
    <caption>版本差異表</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>版本範圍</th>
        <th>重要原因</th>
        <th>實作重點</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">pacs008 中的目前實作</td>
          <td class="version-diff-table__takeaway">與目前專案對 FI 信用轉帳流程的支援範圍一致。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">後續目錄版本</td>
          <td class="version-diff-table__takeaway">對於代理行與補償支付環境中的路線圖規劃很重要。</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

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

### 欄位說明

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## 比較 pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.009 vs pacs.008">
  <table>
    <caption>比較 pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比較維度</th>
        <th>pacs.009.001.10</th>
        <th>對照訊息</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">機構自有帳戶信用轉帳或覆蓋清算環節</td>
          <td class="message-comparison-table__other">客戶信用轉帳</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">業務負責人</td>
          <td class="message-comparison-table__current">資金 / 代理行 / 融資作業</td>
          <td class="message-comparison-table__other">客戶支付作業</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">典型搭配</td>
          <td class="message-comparison-table__current">pacs.002、pacs.004 與相關的 pacs.008 流程</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">應避免的錯誤假設</td>
          <td class="message-comparison-table__current">認為它只是更技術化的 pacs.008</td>
          <td class="message-comparison-table__other">認為它可以直接承載機構融資流程而不需額外設計</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

## 相關訊息
<div class="related-messages-table" tabindex="0" aria-label="相關訊息">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>訊息類型</th>
        <th>說明</th>
        <th>概述</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">金融機構間客戶信用轉帳</td>
          <td class="related-messages-table__overview">pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態報告</td>
          <td class="related-messages-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">金融機構直接扣款</td>
          <td class="related-messages-table__overview">pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。</td>
        </tr>
    </tbody>
  </table>
</div>

