---
title: pacs.003.001.09 | 金融機構間客戶直接扣款 | pacs008
description: pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。
lang: zh-TW
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — 金融機構間客戶直接扣款

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭
- **DrctDbtTxInf** — 包含金額和當事方資訊的直接扣款交易資訊
- **Cdtr** — 債權人識別及帳戶詳細資料
- **CdtrAgt** — 債權人代理人（收款機構）識別
- **DbtrAgt** — 債務人代理人（付款機構）識別

## 業務背景

- 支援 SEPA 核心方案和 B2B 直接扣款方案
- 用於訂閱、公用事業費和貸款償還等經常性付款收款
- 需要債務人和債權人之間的有效授權參考
- 支援在單一訊息中批次收取多筆直接扣款指令

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
          <td class="operational-matrix-table__right">支援 SEPA 核心方案和 B2B 直接扣款方案</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — 包含金額和當事方資訊的直接扣款交易資訊</td>
          <td class="operational-matrix-table__right">用於訂閱、公用事業費和貸款償還等經常性付款收款</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — 債權人識別及帳戶詳細資料</td>
          <td class="operational-matrix-table__right">需要債務人和債權人之間的有效授權參考</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — 債權人代理人（收款機構）識別</td>
          <td class="operational-matrix-table__right">支援在單一訊息中批次收取多筆直接扣款指令</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — 債務人代理人（付款機構）識別</td>
          <td class="operational-matrix-table__right">債權人代理人向債務人代理人發起 pacs.003 以收取資金。債務人代理人驗證授權、檢查帳戶餘額，並清算或退回交易。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 結構化地址和當事方識別要求同樣適用於直接扣款
- 授權相關資料須在2026年11月前實現完全結構化
- 在跨境流程中取代舊版 MT104 格式的直接扣款格式
- 債權人方案識別的驗證執行日益加強

## 訊息流程

債權人代理人向債務人代理人發起 pacs.003 以收取資金。債務人代理人驗證授權、檢查帳戶餘額，並清算或退回交易。

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">pacs008 中的目前實作</td>
          <td class="version-diff-table__takeaway">適用於目前專案中的直接扣款參照建模。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">後續目錄版本</td>
          <td class="version-diff-table__takeaway">在用於全新建置前，請檢查後續版本中關於授權、狀態與互通性的更新。</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

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

### 欄位說明

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: 直接扣款能否順利處理，往往更取決於帳戶與授權品質，而不是 XML 結構。

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">付款退回</td>
          <td class="related-messages-table__overview">pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">金融機構間付款撤銷</td>
          <td class="related-messages-table__overview">pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態報告</td>
          <td class="related-messages-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
    </tbody>
  </table>
</div>

