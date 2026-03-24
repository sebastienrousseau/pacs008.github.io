---
title: pacs.010.001.05 | 金融機構直接扣款 | pacs008
description: pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — 金融機構直接扣款

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
          <td class="message-metadata-table__label"><strong>ISO 名稱</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭
- **DrctDbtTxInf** — 包含收取金額的直接扣款交易資訊
- **Cdtr / CdtrAgt** — 債權人機構及其代理人的識別
- **Dbtr / DbtrAgt** — 債務人機構及其代理人的識別
- **IntrBkSttlmAmt** — 以清算貨幣表示的銀行間清算金額

## 業務背景

- 支援金融機構之間的銀行間直接扣款收款
- 用於費用收取、保證金追繳和機構間清算義務
- 需要參與機構之間預先達成的雙邊安排
- 對機構現金管理和銀行間清算週期至關重要

<div class="operational-matrix-table" tabindex="0" aria-label="關鍵資料要素 業務背景">
  <table>
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
          <td class="operational-matrix-table__right">支援金融機構之間的銀行間直接扣款收款</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — 包含收取金額的直接扣款交易資訊</td>
          <td class="operational-matrix-table__right">用於費用收取、保證金追繳和機構間清算義務</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 債權人機構及其代理人的識別</td>
          <td class="operational-matrix-table__right">需要參與機構之間預先達成的雙邊安排</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 債務人機構及其代理人的識別</td>
          <td class="operational-matrix-table__right">對機構現金管理和銀行間清算週期至關重要</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — 以清算貨幣表示的銀行間清算金額</td>
          <td class="operational-matrix-table__right">債權人機構根據預先達成的安排向債務人機構發送 pacs.010 以收取資金。債務人機構驗證請求並清算或拒絕該直接扣款。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 在銀行間直接扣款處理中取代 MT204 的部分功能
- 結構化當事方識別遵循與其他 pacs 訊息相同的要求
- 機構識別碼（BIC、LEI）的驗證為強制性的
- 包含在市場基礎設施全面採用 ISO 20022 的路線圖中

## 訊息流程

債權人機構根據預先達成的安排向債務人機構發送 pacs.010 以收取資金。債務人機構驗證請求並清算或拒絕該直接扣款。

## 版本差異表

<div class="version-diff-table" tabindex="0" aria-label="版本差異表">
  <table>
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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">pacs008 中的目前實作</td>
          <td class="version-diff-table__takeaway">是目前專案中機構間直接扣款支援的參考基點。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">後續目錄版本</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

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

### 欄位說明

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


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
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機構信用轉帳</td>
          <td class="related-messages-table__overview">pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態報告</td>
          <td class="related-messages-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">金融機構間客戶直接扣款</td>
          <td class="related-messages-table__overview">pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。</td>
        </tr>
    </tbody>
  </table>
</div>

