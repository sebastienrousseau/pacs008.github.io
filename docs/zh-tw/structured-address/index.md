---
title: "2026年11月結構化地址截止日期 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: zh-TW
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "稽核債務人、債權人和代理人記錄中當前地址資料品質。"
  - name: "Step 2"
    text: "將現有非結構化地址欄位對映到結構化格式（街道、建築、郵遞區號、城市、國家）。"
  - name: "Step 3"
    text: "使用 pacs008 將地址驗證新增到預產生管道中。"
  - name: "Step 4"
    text: "在截止日期前使用代表性支付資料進行測試。"
---

# 2026年11月結構化地址截止日期

SWIFT 要求從2026年11月起在跨境支付訊息中使用結構化郵政地址。了解哪些內容將發生變化、哪些訊息受到影響，以及 pacs008 如何幫助團隊做好準備。

## 正在發生什麼變化

SWIFT CBPR+ 正在將跨境支付訊息中的非結構化郵政地址轉換為結構化地址欄位。在2026年11月截止日期之後，關鍵方的地址欄位必須使用結構化格式，包含街道名稱、建築編號、郵遞區號、城市和國家的獨立元素。

## 為什麼重要

- 非結構化地址增加了人工修復率並延遲了直通處理。
- 結構化地址透過將當事方名稱與位置資料分離來提高制裁篩查準確性。
- 監管和方案要求日益強制要求使用結構化資料以滿足合規和報告需求。
- 當地址品質不符合交易對手預期時，跨境支付拒絕率會上升。

## 哪些訊息受到影響

- **pacs.008** — 客戶信貸轉帳中債務人和債權人的郵政地址。
- **pacs.009** — 金融機構間信貸轉帳和備付金支付中的機構地址。
- **pacs.004** — 付款退回中的當事方地址。
- **pacs.003** — 客戶直接借記中的債權人和債務人地址。

## pacs008 如何提供幫助

- 在 XML 產生之前驗證結構化和混合郵政地址欄位。
- 標記在截止日期後將會失敗的非結構化地址資料。
- 支援截止日期前的混合格式和截止日期後的純結構化格式。
- 將地址品質檢查整合到 CI 管道和批次驗證工作流程中。

## 時間線

- **2023年3月** — SWIFT CBPR+ 以 ISO 20022 標準上線運行跨境支付。
- **2025年11月** — MT 和 MX 支付指令的共存期結束。
- **2026年11月** — 結構化郵政地址要求對 CBPR+ 訊息生效。

## 現在應該做什麼

- 稽核債務人、債權人和代理人記錄中當前地址資料品質。
- 將現有非結構化地址欄位對映到結構化格式（街道、建築、郵遞區號、城市、國家）。
- 使用 pacs008 將地址驗證新增到預產生管道中。
- 在截止日期前使用代表性支付資料進行測試。

## 參考資料

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

