---
title: pacs.002.001.12 | 金融機構間付款狀態報告 | pacs008
description: pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — 金融機構間付款狀態報告

| | |
|---|---|
| **ISO 名稱** | FIToFIPaymentStatusReportV12 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 12 |

## 概述

pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **OrgnlGrpInfAndSts** — 用於批次層級報告的原始群組資訊及狀態
- **TxInfAndSts** — 用於個別交易結果的交易資訊及狀態
- **StsRsnInf** — 包含結構化原因代碼的狀態原因資訊
- **OrgnlTxRef** — 連結回原始指令的原始交易參考

## 業務背景

- 用於確認信用轉帳、直接扣款及付款退回的清算，或報告拒絕
- 實現指示代理人與被指示代理人之間的對帳
- 在 CBPR+ 流程中，確認 pacs.008 和 pacs.009 訊息的處理為必要
- 支援批次群組層級及個別交易層級的狀態報告

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含訊息識別碼和建立時間戳記的群組標頭</td>
          <td class="operational-matrix-table__right">用於確認信用轉帳、直接扣款及付款退回的清算，或報告拒絕</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — 用於批次層級報告的原始群組資訊及狀態</td>
          <td class="operational-matrix-table__right">實現指示代理人與被指示代理人之間的對帳</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — 用於個別交易結果的交易資訊及狀態</td>
          <td class="operational-matrix-table__right">在 CBPR+ 流程中，確認 pacs.008 和 pacs.009 訊息的處理為必要</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — 包含結構化原因代碼的狀態原因資訊</td>
          <td class="operational-matrix-table__right">支援批次群組層級及個別交易層級的狀態報告</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 連結回原始指令的原始交易參考</td>
          <td class="operational-matrix-table__right">被指示代理人（接收方）向指示代理人（發送方）返回 pacs.002，以確認對所收到付款指令（如 pacs.008 或 pacs.009）的接受、清算或拒絕。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 取代 MT199 及 MT 訊息中欄位 79 的狀態敘述
- CBPR+ 要求所有付款狀態通訊使用 pacs.002
- 結構化原因代碼取代自由文字的拒絕說明
- SWIFT gpi 追蹤整合要求 pacs.002 以實現端到端透明度

## 訊息流程

被指示代理人（接收方）向指示代理人（發送方）返回 pacs.002，以確認對所收到付款指令（如 pacs.008 或 pacs.009）的接受、清算或拒絕。

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">pacs008 中的目前實作</td>
          <td class="version-diff-table__takeaway">當需要對齊目前專案範本與驗證資產時，請使用此版本。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">後續目錄版本</td>
          <td class="version-diff-table__takeaway">在開始新的互通作業或接入新基礎設施之前，請檢視後續的 ISO 版本。</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

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

### 欄位說明

- `MsgId`: 請為狀態報告本身使用新的識別碼，而不是沿用原始付款指令的識別碼。
- `OrgnlInstrId`: 請保持原始指令識別碼不變，以便系統自動比對狀態。
- `TxSts`: 這是作業狀態；應謹慎映射到內部工作流程狀態，而不要假設存在一對一對應。
- `StsRsnInf`: 對於修復處理與分析而言，結構化原因代碼遠比自由文字更有價值。

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
        <th>比較維度</th>
        <th>pacs.002.001.12</th>
        <th>對照訊息</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">回報狀態</td>
          <td class="message-comparison-table__other">查詢狀態</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">由誰發起互動</td>
          <td class="message-comparison-table__current">傳送狀態的機構</td>
          <td class="message-comparison-table__other">查詢狀態的機構</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">作業姿態</td>
          <td class="message-comparison-table__current">事件驅動式回報</td>
          <td class="message-comparison-table__other">例外驅動式查詢</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">應避免的錯誤假設</td>
          <td class="message-comparison-table__current">認為狀態回報可以取代調查處理流程</td>
          <td class="message-comparison-table__other">認為每筆付款都需要明確的狀態請求</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


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
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">金融機構信用轉帳</td>
          <td class="related-messages-table__overview">pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態請求</td>
          <td class="related-messages-table__overview">pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。</td>
        </tr>
    </tbody>
  </table>
</div>

