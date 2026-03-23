---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO 名稱** | FIToFICustomerDirectDebitV09 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 9 |

## 概述

pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：27 February 2025；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭
- **DrctDbtTxInf** — 包含金額和當事方資訊的直接扣款交易資訊
- **Cdtr** — 債權人識別及帳戶詳細資料
- **CdtrAgt** — 債權人代理人（收款機構）識別
- **DbtrAgt** — 債務人代理人（付款機構）識別

## 業務背景

- 支援 SEPA 核心方案和 B2B 直接扣款方案
- 用於訂閱、公用事業費和貸款償還等經常性付款收款
- 需要債務人和債權人之間的有效授權參考
- 支援在單一訊息中批次收取多筆直接扣款指令

| 關鍵資料要素 | 業務背景 |
|---|---|
| **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭 | 支援 SEPA 核心方案和 B2B 直接扣款方案 |
| **DrctDbtTxInf** — 包含金額和當事方資訊的直接扣款交易資訊 | 用於訂閱、公用事業費和貸款償還等經常性付款收款 |
| **Cdtr** — 債權人識別及帳戶詳細資料 | 需要債務人和債權人之間的有效授權參考 |
| **CdtrAgt** — 債權人代理人（收款機構）識別 | 支援在單一訊息中批次收取多筆直接扣款指令 |
| **DbtrAgt** — 債務人代理人（付款機構）識別 | 債權人代理人向債務人代理人發起 pacs.003 以收取資金。債務人代理人驗證授權、檢查帳戶餘額，並清算或退回交易。 |

## CBPR+ 與方案背景

- 結構化地址和當事方識別要求同樣適用於直接扣款
- 授權相關資料須在2026年11月前實現完全結構化
- 在跨境流程中取代舊版 MT104 格式的直接扣款格式
- 債權人方案識別的驗證執行日益加強

## 訊息流程

債權人代理人向債務人代理人發起 pacs.003 以收取資金。債務人代理人驗證授權、檢查帳戶餘額，並清算或退回交易。

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相關訊息
| 訊息類型 | 說明 | 概述 |
|---|---|---|
| [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) | Payment Return | pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。 |
| [`pacs.007.001.11`](/zh-tw/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。 |
| [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。 |

