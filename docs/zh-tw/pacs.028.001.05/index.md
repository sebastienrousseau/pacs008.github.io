---
title: pacs.028.001.05 — FI to FI Payment Status Request | 繁體中文
description: pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO 名稱** | FIToFIPaymentStatusRequestV05 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.028 訊息由金融機構發送，用於查詢先前發送的付款指令之狀態。它無需等待主動推送的狀態報告，即可實現對付款處理的主動追蹤。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **TxInf** — 識別待查詢付款的交易資訊
- **OrgnlGrpInf** — 參考來源訊息的原始群組資訊
- **OrgnlInstrId** — 來自來源付款的原始指令識別碼
- **OrgnlEndToEndId** — 用於可追溯性的原始端到端識別碼

## 業務背景

- 支援對在途付款指令進行主動狀態查詢
- 協助營運團隊調查延遲或遺失的付款
- 透過主動發起狀態通訊而非被動等待來補充 pacs.002
- 用於例外處理和 SLA 監控工作流程

## CBPR+ 與方案背景

- 取代 MT199 狀態查詢模式和手動 SWIFT 訊息查詢
- CBPR+ 支援與原始訊息識別碼關聯的結構化狀態請求
- 基於 UETR 的 gpi 追蹤減少了手動查詢的需求
- 日益整合到自動化付款營運儀表板中

## 訊息流程

指示代理人向被指示代理人發送 pacs.028 以請求特定付款的狀態。被指示代理人以包含目前處理狀態的 pacs.002 進行回應。

## 相關訊息

- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) — Financial Institution Credit Transfer

