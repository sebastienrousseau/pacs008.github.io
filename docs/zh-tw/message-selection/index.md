---
title: 訊息選擇指南 | pacs008
description: 為產生、狀態回報、退回、撤銷與查詢選擇合適的 ISO 20022 pacs 訊息。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# 訊息選擇指南

先依業務事件選擇 pacs 家族，再依方案規則與運作模型細化選擇。



## 快速決策矩陣

<div class="decision-matrix-table" tabindex="0" aria-label="快速決策矩陣">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">金融機構間付款狀態報告</td>
          <td class="decision-matrix-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">金融機構間客戶直接扣款</td>
          <td class="decision-matrix-table__overview">pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">付款退回</td>
          <td class="decision-matrix-table__overview">pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">金融機構間付款撤銷</td>
          <td class="decision-matrix-table__overview">pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">金融機構間客戶信用轉帳</td>
          <td class="decision-matrix-table__overview">pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">金融機構信用轉帳</td>
          <td class="decision-matrix-table__overview">pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">金融機構直接扣款</td>
          <td class="decision-matrix-table__overview">pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/zh-tw/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">金融機構間付款狀態請求</td>
          <td class="decision-matrix-table__overview">pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。</td>
        </tr>
    </tbody>
  </table>
</div>

## 常見比較重點

<div class="comparison-points-table" tabindex="0" aria-label="常見比較重點">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>比較項目</th>
        <th>關鍵差異</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">客戶付款與機構資金或補償清算移轉的差異</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">接收方退回與發起方撤銷的差異</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">狀態回報與狀態查詢的差異</td>
        </tr>
    </tbody>
  </table>
</div>

## 支援的訊息頁面

- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — 金融機構間付款狀態報告
- [`pacs.003.001.09`](/zh-tw/pacs.003.001.09/) — 金融機構間客戶直接扣款
- [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) — 付款退回
- [`pacs.007.001.11`](/zh-tw/pacs.007.001.11/) — 金融機構間付款撤銷
- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — 金融機構間客戶信用轉帳
- [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) — 金融機構信用轉帳
- [`pacs.010.001.05`](/zh-tw/pacs.010.001.05/) — 金融機構直接扣款
- [`pacs.028.001.05`](/zh-tw/pacs.028.001.05/) — 金融機構間付款狀態請求

