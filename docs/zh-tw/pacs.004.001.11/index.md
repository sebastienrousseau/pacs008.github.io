---
title: "pacs.004.001.11 | 付款退回 | pacs008"
description: pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。
lang: zh-TW
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — 付款退回

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## 概述

pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **TxInf** — 包含退回金額和當事方資訊的交易資訊
- **OrgnlGrpInf** — 連結到來源訊息的原始群組資訊
- **RtrRsnInf** — 包含結構化原因代碼的退回原因資訊
- **OrgnlTxRef** — 用於匹配和對帳的原始交易參考

## 業務背景

- 處理收款人帳戶無法入帳時的清算後退回
- 支援發起人請求退回資金的召回情境
- 攜帶結構化退回原因代碼以確保監管和營運透明度
- 同時適用於信用轉帳退回（pacs.008）和直接扣款退回（pacs.003）

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 包含訊息識別碼和建立時間戳記的群組標頭</td>
          <td class="operational-matrix-table__right">處理收款人帳戶無法入帳時的清算後退回</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 包含退回金額和當事方資訊的交易資訊</td>
          <td class="operational-matrix-table__right">支援發起人請求退回資金的召回情境</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 連結到來源訊息的原始群組資訊</td>
          <td class="operational-matrix-table__right">攜帶結構化退回原因代碼以確保監管和營運透明度</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — 包含結構化原因代碼的退回原因資訊</td>
          <td class="operational-matrix-table__right">同時適用於信用轉帳退回（pacs.008）和直接扣款退回（pacs.003）</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 用於匹配和對帳的原始交易參考</td>
          <td class="operational-matrix-table__right">被指示代理人透過付款鏈返回 pacs.004 以退回先前已清算的資金。鏈中的每個代理人處理退回並將資金退還至相關帳戶。</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 與方案背景

- 取代 MT103 RETURN 和覆蓋方式退回訊息傳遞
- 退回原因代碼在 ISO 20022 下實現標準化和機器可讀
- CBPR+ 要求完整的原始交易參考資料以進行匹配
- SWIFT gpi 追蹤擴展至退回交易以實現端到端可視性

## 訊息流程

被指示代理人透過付款鏈返回 pacs.004 以退回先前已清算的資金。鏈中的每個代理人處理退回並將資金退還至相關帳戶。

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">pacs008 中的目前實作</td>
          <td class="version-diff-table__takeaway">與目前的付款退回範本保持一致。</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">後續目錄版本</td>
          <td class="version-diff-table__takeaway">當範圍包含方案升級或新增交易對手時，請檢視後續的退回訊息版本。</td>
        </tr>
    </tbody>
  </table>
</div>

## 附註解的 XML 範例

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### 欄位說明

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 原因代碼的品質對於後續客戶溝通與營運路由至關重要。

## 比較 pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="比較 pacs.004 vs pacs.007">
  <table>
    <caption>比較 pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>比較維度</th>
        <th>pacs.004.001.11</th>
        <th>對照訊息</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">主要用途</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">最適合用於</td>
          <td class="message-comparison-table__current">處理結算後退回</td>
          <td class="message-comparison-table__other">處理因召回、錯誤或詐欺引發的撤銷</td>
        </tr>
    </tbody>
  </table>
</div>

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">金融機構間客戶直接扣款</td>
          <td class="related-messages-table__overview">pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">金融機構間付款狀態報告</td>
          <td class="related-messages-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
    </tbody>
  </table>
</div>

