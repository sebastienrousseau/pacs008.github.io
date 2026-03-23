---
title: pacs.004.001.11 | 付款退回 | pacs008
description: pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — 付款退回

| | |
|---|---|
| **ISO 名稱** | PaymentReturnV11 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.004 訊息用於退回先前已清算的付款交易。當付款無法入帳、被錯誤發送或發起機構請求召回時，它將逆轉資金流向。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

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

| 關鍵資料要素 | 業務背景 |
|---|---|
| **GrpHdr** — 包含訊息識別碼和建立時間戳記的群組標頭 | 處理收款人帳戶無法入帳時的清算後退回 |
| **TxInf** — 包含退回金額和當事方資訊的交易資訊 | 支援發起人請求退回資金的召回情境 |
| **OrgnlGrpInf** — 連結到來源訊息的原始群組資訊 | 攜帶結構化退回原因代碼以確保監管和營運透明度 |
| **RtrRsnInf** — 包含結構化原因代碼的退回原因資訊 | 同時適用於信用轉帳退回（pacs.008）和直接扣款退回（pacs.003） |
| **OrgnlTxRef** — 用於匹配和對帳的原始交易參考 | 被指示代理人透過付款鏈返回 pacs.004 以退回先前已清算的資金。鏈中的每個代理人處理退回並將資金退還至相關帳戶。 |

## CBPR+ 與方案背景

- 取代 MT103 RETURN 和覆蓋方式退回訊息傳遞
- 退回原因代碼在 ISO 20022 下實現標準化和機器可讀
- CBPR+ 要求完整的原始交易參考資料以進行匹配
- SWIFT gpi 追蹤擴展至退回交易以實現端到端可視性

## 訊息流程

被指示代理人透過付款鏈返回 pacs.004 以退回先前已清算的資金。鏈中的每個代理人處理退回並將資金退還至相關帳戶。

## 版本差異表

| 版本範圍 | 重要原因 | 實作重點 |
|---|---|---|
| pacs.004.001.11 | pacs008 中的目前實作 | 與目前的付款退回範本保持一致。 |
| pacs.004.001.12-14 | 後續目錄版本 | 當範圍包含方案升級或新增交易對手時，請檢視後續的退回訊息版本。 |

## 附註解的 XML 範例

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### 欄位說明

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 原因代碼的品質對於後續客戶溝通與營運路由至關重要。

## 比較 pacs.004 vs pacs.007

| 比較維度 | pacs.004.001.11 | 對照訊息 |
|---|---|---|
| 主要用途 | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| 最適合用於 | 處理結算後退回 | 處理因召回、錯誤或詐欺引發的撤銷 |

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## 相關訊息
| 訊息類型 | 說明 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) | 金融機構間客戶信用轉帳 | pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。 |
| [`pacs.003.001.09`](/zh-tw/pacs.003.001.09/) | 金融機構間客戶直接扣款 | pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。 |
| [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) | 金融機構間付款狀態報告 | pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。 |

