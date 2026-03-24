---
title: pacs.008.001.13 | 金融機構間客戶信用轉帳 | pacs008
description: pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。
lang: zh-TW
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — 金融機構間客戶信用轉帳

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>註冊狀態</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>年份</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>版本</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息ID、建立日期、交易數量和清算資訊的群組標頭
- **CdtTrfTxInf** — 包含金額、費用和用途的信用轉帳交易資訊
- **Dbtr / DbtrAgt** — 債務人和債務人代理人的識別及帳戶詳細資料
- **Cdtr / CdtrAgt** — 債權人和債權人代理人的識別及帳戶詳細資料
- **RmtInf** — 用於結構化或非結構化付款參考的匯款資訊

## 業務背景

- 客戶發起的跨境和國內信用轉帳的主要訊息
- 在 SEPA SCT、SEPA Instant、CBPR+ 和國內清算系統中使用
- 攜帶結構化匯款資訊以支援直通式對帳
- 支援多段付款鏈中的串列、覆蓋和直接清算方式

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含訊息ID、建立日期、交易數量和清算資訊的群組標頭</td>
          <td class="operational-matrix-table__right">客戶發起的跨境和國內信用轉帳的主要訊息</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 包含金額、費用和用途的信用轉帳交易資訊</td>
          <td class="operational-matrix-table__right">在 SEPA SCT、SEPA Instant、CBPR+ 和國內清算系統中使用</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 債務人和債務人代理人的識別及帳戶詳細資料</td>
          <td class="operational-matrix-table__right">攜帶結構化匯款資訊以支援直通式對帳</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 債權人和債權人代理人的識別及帳戶詳細資料</td>
          <td class="operational-matrix-table__right">支援多段付款鏈中的串列、覆蓋和直接清算方式</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — 用於結構化或非結構化付款參考的匯款資訊</td>
          <td class="operational-matrix-table__right">債務人代理人建立 pacs.008 並發送至債權人代理人（直接發送或透過中介機構轉發）。鏈中的每個代理人驗證、豐富並轉發指令，直到債權人代理人將資金入帳至收款人帳戶。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 在跨境客戶信用轉帳中取代 MT103 和 MT103+
- 2026年11月結構化地址截止日期適用於所有當事方郵政地址
- SWIFT gpi 要求 pacs.008 以實現基於 UETR 的端到端追蹤
- 13次修訂反映了市場基礎設施中架構的持續演進

## 訊息流程

債務人代理人建立 pacs.008 並發送至債權人代理人（直接發送或透過中介機構轉發）。鏈中的每個代理人驗證、豐富並轉發指令，直到債權人代理人將資金入帳至收款人帳戶。

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">早期版本</td>
          <td class="version-diff-table__takeaway">主要適用於舊系統遷移分析與版本歷史背景說明。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">現行版本之前的較新版本</td>
          <td class="version-diff-table__takeaway">這些版本最可能出現在近期遷移或共存專案中。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">目前目錄版本</td>
          <td class="version-diff-table__takeaway">可用於現行版本規劃，但仍需驗證方案使用規則與交易對手準備情況。</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

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

### 欄位說明

- `MsgId`: 這裡應標識訊息封裝本身，而不是終端客戶的付款參照。
- `EndToEndId`: 如有可能，應在下游系統之間維持面向客戶的可追蹤性穩定一致。
- `UETR`: 在跨境與高追蹤需求環境中應一致使用此欄位，不要在後續流程階段臨時產生。
- `IntrBkSttlmAmt`: 在進行綱要驗證前，應先依業務規則驗證金額與幣別。
- `Dbtr` / `Cdtr`: 參與方資料品質、地址結構與識別碼通常是決定修復率的主要因素。

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
        <th>比較維度</th>
        <th>pacs.008.001.13</th>
        <th>對照訊息</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">客戶信用轉帳</td>
          <td class="message-comparison-table__other">機構自有帳戶信用轉帳或覆蓋清算環節</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">業務負責人</td>
          <td class="message-comparison-table__current">客戶支付作業</td>
          <td class="message-comparison-table__other">資金 / 代理行 / 融資作業</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">典型搭配</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002、pacs.004，以及有時相關聯的 pacs.008 流程</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">應避免的錯誤假設</td>
          <td class="message-comparison-table__current">認為所有銀行間轉帳都應歸入這裡</td>
          <td class="message-comparison-table__other">認為它可以取代客戶信用轉帳指令</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## 支援的版本

<div class="message-versions-table" tabindex="0" aria-label="支援的版本">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>版本</th>
        <th>狀態</th>
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
          <td class="message-versions-table__status"><strong>目前</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態報告</td>
          <td class="related-messages-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">付款退回</td>
          <td class="related-messages-table__overview">pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機構信用轉帳</td>
          <td class="related-messages-table__overview">pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。</td>
        </tr>
    </tbody>
  </table>
</div>

