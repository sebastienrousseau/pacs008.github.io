---
title: 訊息類型 | pacs008 ISO 20022
description: 支援的 ISO 20022 pacs 訊息定義和版本。 面向金融機構間客戶信貸轉帳工作流程的產生、驗證、API 編排與合規支援。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# 訊息類型

pacs008 涵蓋核心 pacs.008 訊息定義和編排及對帳流程中使用的相關訊息。

## 包含的支援

<div class="message-coverage-table" tabindex="0" aria-label="包含的支援">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>訊息類型</th>
        <th>說明</th>
        <th>年份</th>
        <th>概述</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">金融機構間付款狀態報告</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">金融機構間客戶直接扣款</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">付款退回</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">金融機構間付款撤銷</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">金融機構間客戶信用轉帳</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">金融機構信用轉帳</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">金融機構直接扣款</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/zh-tw/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">金融機構間付款狀態請求</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。</td>
        </tr>
    </tbody>
  </table>
</div>

## 交付模型

每種支援的訊息類型都配備範本資源和驗證邏輯，以便團隊能夠在多個下游管道中標準化生成和迴歸測試。

## 如何選擇合適的訊息

當團隊需要判斷哪一種訊息啟動流程、哪一種回報狀態，以及哪一種用來修正或回退流程時，訊息目錄特別重要。

若要以單頁方式查看支援的 pacs 流程決策，請參閱專門的[訊息選擇指南](/zh-tw/message-selection/)。

## 2026 市場背景

- **SEPA SCT / SCT Inst**：pacs.008 仍然是信貸轉帳交換和即時支付處理的核心。
- **CBPR+**：pacs.008 繼續用更豐富的結構化資料替代 MT103 風格的跨境載荷。
- **結構化地址**：目前市場指引指向 2026 年 11 月從完全非結構化郵政地址的切換。
- **串列方法和 STP**：多環節銀行間鏈仍然重要，直通處理變體對營運效率仍然至關重要。

## 營運能力

pacs008 在支援的訊息定義修訂版本中提供基於範本的產生和驗證：

- 比較版本
- 對方案更新進行迴歸測試
- 在發布前加固外送支付訊息資料
- 從單一程式碼庫支援產品、營運和遷移團隊

