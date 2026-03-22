---
title: pacs.004.001.11 — Payment Return | 繁體中文
description: pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO 名稱** | PaymentReturnV11 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭
- **TxInf** — 包含退回金額和當事方資訊的交易資訊
- **OrgnlGrpInf** — 連結到來源訊息的原始群組資訊
- **RtrRsnInf** — 包含結構化原因代碼的退回原因資訊
- **OrgnlTxRef** — 用於匹配和對帳的原始交易參考

## 業務背景

- 處理收款人帳戶無法入帳時的清算後退回
- 支援發起人請求退回資金的召回情境
- 攜帶結構化退回原因代碼以確保監管和營運透明度
- 同時適用於信用轉帳退回（pacs.008）和直接扣款退回（pacs.003）

## CBPR+ 與方案背景

- 取代 MT103 RETURN 和覆蓋方式退回訊息傳遞
- 退回原因代碼在 ISO 20022 下實現標準化和機器可讀
- CBPR+ 要求完整的原始交易參考資料以進行匹配
- SWIFT gpi 追蹤擴展至退回交易以實現端到端可視性

## 訊息流程

被指示代理人透過付款鏈返回 pacs.004 以退回先前已清算的資金。鏈中的每個代理人處理退回並將資金退還至相關帳戶。

## 相關訊息

- [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/zh-tw/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) — FI to FI Payment Status Report

