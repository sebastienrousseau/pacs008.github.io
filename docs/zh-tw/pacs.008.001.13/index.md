---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
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

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：27 February 2025；來源連結如下。

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

| 關鍵資料要素 | 業務背景 |
|---|---|
| **GrpHdr** — 包含訊息ID、建立日期、交易數量和清算資訊的群組標頭 | 客戶發起的跨境和國內信用轉帳的主要訊息 |
| **CdtTrfTxInf** — 包含金額、費用和用途的信用轉帳交易資訊 | 在 SEPA SCT、SEPA Instant、CBPR+ 和國內清算系統中使用 |
| **Dbtr / DbtrAgt** — 債務人和債務人代理人的識別及帳戶詳細資料 | 攜帶結構化匯款資訊以支援直通式對帳 |
| **Cdtr / CdtrAgt** — 債權人和債權人代理人的識別及帳戶詳細資料 | 支援多段付款鏈中的串列、覆蓋和直接清算方式 |
| **RmtInf** — 用於結構化或非結構化付款參考的匯款資訊 | 債務人代理人建立 pacs.008 並發送至債權人代理人（直接發送或透過中介機構轉發）。鏈中的每個代理人驗證、豐富並轉發指令，直到債權人代理人將資金入帳至收款人帳戶。 |

## CBPR+ 與方案背景

- 在跨境客戶信用轉帳中取代 MT103 和 MT103+
- 2026年11月結構化地址截止日期適用於所有當事方郵政地址
- SWIFT gpi 要求 pacs.008 以實現基於 UETR 的端到端追蹤
- 13次修訂反映了市場基礎設施中架構的持續演進

## 訊息流程

債務人代理人建立 pacs.008 並發送至債權人代理人（直接發送或透過中介機構轉發）。鏈中的每個代理人驗證、豐富並轉發指令，直到債權人代理人將資金入帳至收款人帳戶。

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


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
| 訊息類型 | 說明 | 概述 |
|---|---|---|
| [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。 |
| [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) | Payment Return | pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。 |
| [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。 |

