---
title: pacs.007.001.11 — FI to FI Payment Reversal | 繁體中文
description: pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO 名稱** | FIToFIPaymentReversalV11 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **TxInf** — 包含撤銷金額和當事方資訊的交易資訊
- **OrgnlGrpInf** — 參考來源訊息的原始群組資訊
- **RvslRsnInf** — 包含結構化原因代碼的撤銷原因資訊
- **OrgnlTxRef** — 用於端到端可追溯性的原始交易參考

## 業務背景

- 當原始發送方在清算前或清算後發現錯誤時發起
- 用於需要快速撤銷的詐欺情境
- 支援對原始付款金額的全額和部分撤銷
- 攜帶結構化撤銷原因代碼以供下游處理

## CBPR+ 與方案背景

- 與 pacs.004 透過方向區分 — 撤銷從發起方向前流動，退回從收款方向後流動
- CBPR+ 要求與原始訊息識別碼配對以實現自動匹配
- 結構化原因代碼取代舊版 MT 訊息中的自由文字敘述
- 在即時付款召回和詐欺防範工作流程中的使用日益增加

## 訊息流程

指示代理人（原始發送方）透過付款鏈向前發送 pacs.007 以撤銷先前指示的付款。每個代理人處理撤銷指令並相應調整清算。

## 相關訊息

- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report

