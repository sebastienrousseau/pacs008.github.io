---
title: pacs.009.001.10 — Financial Institution Credit Transfer | 繁體中文
description: pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO 名稱** | FinancialInstitutionCreditTransferV10 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 10 |

## 概述

pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭
- **CdtTrfTxInf** — 包含銀行間清算金額的信用轉帳交易資訊
- **Dbtr / DbtrAgt** — 債務人機構及其代理人的識別
- **Cdtr / CdtrAgt** — 債權人機構及其代理人的識別
- **IntrBkSttlmAmt** — 以清算貨幣表示的銀行間清算金額

## 業務背景

- 用於銀行間自有帳戶轉帳和覆蓋付款
- 支援通匯銀行合作夥伴之間的流動性管理
- 攜帶透過覆蓋方式清算的客戶信用轉帳的覆蓋段
- 支援金融機構之間的資金營運和融資操作

## CBPR+ 與方案背景

- 在機構間轉帳中取代 MT202 和 MT202COV
- 覆蓋方式流程將 pacs.009 與基礎 pacs.008 客戶指令配對
- 結構化當事方資料和 LEI 識別的要求日益增加
- SWIFT gpi 涵蓋 pacs.009 以實現通匯銀行透明度

## 訊息流程

債務人機構向債權人機構發送 pacs.009 以轉移自有資金。對於覆蓋方式的付款，pacs.009 提供資金調撥段，而 pacs.008 透過另一路徑攜帶客戶指令。

## 相關訊息

- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/zh-tw/pacs.010.001.05/) — Financial Institution Direct Debit

