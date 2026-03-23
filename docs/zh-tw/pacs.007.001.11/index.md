---
title: pacs.007.001.11 | 金融機構間付款撤銷 | pacs008
description: pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — 金融機構間付款撤銷

| | |
|---|---|
| **ISO 名稱** | FIToFIPaymentReversalV11 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.007 訊息用於撤銷先前發送但尚未清算的付款指令，或請求撤銷已清算的付款。與 pacs.004（退回）不同，它由原始指示代理人發起。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

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

| 關鍵資料要素 | 業務背景 |
|---|---|
| **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭 | 當原始發送方在清算前或清算後發現錯誤時發起 |
| **TxInf** — 包含撤銷金額和當事方資訊的交易資訊 | 用於需要快速撤銷的詐欺情境 |
| **OrgnlGrpInf** — 參考來源訊息的原始群組資訊 | 支援對原始付款金額的全額和部分撤銷 |
| **RvslRsnInf** — 包含結構化原因代碼的撤銷原因資訊 | 攜帶結構化撤銷原因代碼以供下游處理 |
| **OrgnlTxRef** — 用於端到端可追溯性的原始交易參考 | 指示代理人（原始發送方）透過付款鏈向前發送 pacs.007 以撤銷先前指示的付款。每個代理人處理撤銷指令並相應調整清算。 |

## CBPR+ 與方案背景

- 與 pacs.004 透過方向區分 — 撤銷從發起方向前流動，退回從收款方向後流動
- CBPR+ 要求與原始訊息識別碼配對以實現自動匹配
- 結構化原因代碼取代舊版 MT 訊息中的自由文字敘述
- 在即時付款召回和詐欺防範工作流程中的使用日益增加

## 訊息流程

指示代理人（原始發送方）透過付款鏈向前發送 pacs.007 以撤銷先前指示的付款。每個代理人處理撤銷指令並相應調整清算。

## 版本差異表

| 版本範圍 | 重要原因 | 實作重點 |
|---|---|---|
| pacs.007.001.11 | pacs008 中的目前實作 | 是建立撤銷處理流程模型的良好基線。 |
| pacs.007.001.12-13 | 後續目錄版本 | 請檢查後續版本是否符合目前市場基礎設施要求。 |

## 附註解的 XML 範例

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### 欄位說明

- `MsgId`: 撤銷報文本身需要獨立且可稽核的安全識別碼。
- `OrgnlInstrId`: 請保留原始付款參考，以避免對帳鏈中斷。
- `RvslRsnInf`: 請使用結構化撤銷原因，以便對詐欺、錯誤和重複付款情境採用不同路由。

## 比較 pacs.007 vs pacs.004

| 比較維度 | pacs.007.001.11 | 對照訊息 |
|---|---|---|
| 主要用途 | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| 最適合用於 | 處理因召回、錯誤或詐欺引發的撤銷 | 處理結算後退回 |

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相關訊息
| 訊息類型 | 說明 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) | 金融機構間客戶信用轉帳 | pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。 |
| [`pacs.004.001.11`](/zh-tw/pacs.004.001.11/) | 付款退回 | pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。 |
| [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) | 金融機構間付款狀態報告 | pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。 |

