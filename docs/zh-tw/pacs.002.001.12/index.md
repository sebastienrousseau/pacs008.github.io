---
title: pacs.002.001.12 — FI to FI Payment Status Report | 繁體中文
description: pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO 名稱** | FIToFIPaymentStatusReportV12 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 12 |

## 概述

pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **OrgnlGrpInfAndSts** — 用於批次層級報告的原始群組資訊及狀態
- **TxInfAndSts** — 用於個別交易結果的交易資訊及狀態
- **StsRsnInf** — 包含結構化原因代碼的狀態原因資訊
- **OrgnlTxRef** — 連結回原始指令的原始交易參考

## 業務背景

- 用於確認信用轉帳、直接扣款及付款退回的清算，或報告拒絕
- 實現指示代理人與被指示代理人之間的對帳
- 在 CBPR+ 流程中，確認 pacs.008 和 pacs.009 訊息的處理為必要
- 支援批次群組層級及個別交易層級的狀態報告

## CBPR+ 與方案背景

- 取代 MT199 及 MT 訊息中欄位 79 的狀態敘述
- CBPR+ 要求所有付款狀態通訊使用 pacs.002
- 結構化原因代碼取代自由文字的拒絕說明
- SWIFT gpi 追蹤整合要求 pacs.002 以實現端到端透明度

## 訊息流程

被指示代理人（接收方）向指示代理人（發送方）返回 pacs.002，以確認對所收到付款指令（如 pacs.008 或 pacs.009）的接受、清算或拒絕。

## 相關訊息

- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/zh-tw/pacs.028.001.05/) — FI to FI Payment Status Request

