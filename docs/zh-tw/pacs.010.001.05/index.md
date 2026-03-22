---
title: pacs.010.001.05 — Financial Institution Direct Debit | 繁體中文
description: pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO 名稱** | FinancialInstitutionDirectDebitV05 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。

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

## CBPR+ 與方案背景

- 在銀行間直接扣款處理中取代 MT204 的部分功能
- 結構化當事方識別遵循與其他 pacs 訊息相同的要求
- 機構識別碼（BIC、LEI）的驗證為強制性的
- 包含在市場基礎設施全面採用 ISO 20022 的路線圖中

## 訊息流程

債權人機構根據預先達成的安排向債務人機構發送 pacs.010 以收取資金。債務人機構驗證請求並清算或拒絕該直接扣款。

## 相關訊息

- [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/zh-tw/pacs.003.001.09/) — FI to FI Customer Direct Debit

