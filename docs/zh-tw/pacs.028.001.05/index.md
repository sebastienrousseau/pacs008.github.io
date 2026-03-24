---
title: pacs.028.001.05 | 金融機構間付款狀態請求 | pacs008
description: pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — 金融機構間付款狀態請求

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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

pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **TxInf** — 識別待查詢付款的交易資訊
- **OrgnlGrpInf** — 參考來源訊息的原始群組資訊
- **OrgnlInstrId** — 來自來源付款的原始指令識別碼
- **OrgnlEndToEndId** — 用於可追溯性的原始端到端識別碼

## 業務背景

- 支援對在途付款指令進行主動狀態查詢
- 協助營運團隊調查延遲或遺失的付款
- 透過主動發起狀態通訊而非被動等待來補充 pacs.002
- 用於例外處理和 SLA 監控工作流程

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
          <td class="operational-matrix-table__right">支援對在途付款指令進行主動狀態查詢</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 識別待查詢付款的交易資訊</td>
          <td class="operational-matrix-table__right">協助營運團隊調查延遲或遺失的付款</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 參考來源訊息的原始群組資訊</td>
          <td class="operational-matrix-table__right">透過主動發起狀態通訊而非被動等待來補充 pacs.002</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — 來自來源付款的原始指令識別碼</td>
          <td class="operational-matrix-table__right">用於例外處理和 SLA 監控工作流程</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — 用於可追溯性的原始端到端識別碼</td>
          <td class="operational-matrix-table__right">指示代理人向被指示代理人發送 pacs.028 以請求特定付款的狀態。被指示代理人以包含目前處理狀態的 pacs.002 進行回應。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 取代 MT199 狀態查詢模式和手動 SWIFT 訊息查詢
- CBPR+ 支援與原始訊息識別碼關聯的結構化狀態請求
- 基於 UETR 的 gpi 追蹤減少了手動查詢的需求
- 日益整合到自動化付款營運儀表板中

## 訊息流程

指示代理人向被指示代理人發送 pacs.028 以請求特定付款的狀態。被指示代理人以包含目前處理狀態的 pacs.002 進行回應。

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">pacs008 中的目前實作</td>
          <td class="version-diff-table__takeaway">適用於目前的狀態查詢建模。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">後續目錄版本</td>
          <td class="version-diff-table__takeaway">請檢查較新的目錄版本，以支援未來的互通規劃。</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

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

### 欄位說明

- `MsgId`: 查詢請求本身需要一個可稽核且與底層付款分離的識別碼。
- `OrgnlInstrId`: 請使用原始指令中的精確來源識別碼，以最大化配對準確度。
- `OrgnlEndToEndId`: 加入面向客戶的可追蹤性有助於營運團隊更快完成查詢對帳。

## 比較 pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比較維度</th>
        <th>pacs.028.001.05</th>
        <th>對照訊息</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">查詢狀態</td>
          <td class="message-comparison-table__other">回報狀態</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">由誰發起互動</td>
          <td class="message-comparison-table__current">查詢狀態的機構</td>
          <td class="message-comparison-table__other">傳送狀態的機構</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">作業姿態</td>
          <td class="message-comparison-table__current">例外驅動式查詢</td>
          <td class="message-comparison-table__other">事件驅動式回報</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">應避免的錯誤假設</td>
          <td class="message-comparison-table__current">認為每筆付款都應例行傳送此訊息</td>
          <td class="message-comparison-table__other">認為它可以免除主動案例管理的需要</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態報告</td>
          <td class="related-messages-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
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
    </tbody>
  </table>
</div>

