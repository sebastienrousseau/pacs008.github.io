---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | 繁體中文
description: pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO 名稱** | FIToFICustomerCreditTransferV13 |
| **註冊狀態** | Registered |
| **年份** | 2023 |
| **版本** | 13 |

## 概述

pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。

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

## CBPR+ 與方案背景

- 在跨境客戶信用轉帳中取代 MT103 和 MT103+
- 2026年11月結構化地址截止日期適用於所有當事方郵政地址
- SWIFT gpi 要求 pacs.008 以實現基於 UETR 的端到端追蹤
- 13次修訂反映了市場基礎設施中架構的持續演進

## 訊息流程

債務人代理人建立 pacs.008 並發送至債權人代理人（直接發送或透過中介機構轉發）。鏈中的每個代理人驗證、豐富並轉發指令，直到債權人代理人將資金入帳至收款人帳戶。

## 支援的版本

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## 相關訊息

- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) — Financial Institution Credit Transfer

