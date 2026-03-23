---
title: pacs.009.001.10 | 金融機構信用轉帳 | pacs008
description: pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — 金融機構信用轉帳

| | |
|---|---|
| **ISO 名稱** | FinancialInstitutionCreditTransferV10 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 10 |

## 概述

pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

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

| 關鍵資料要素 | 業務背景 |
|---|---|
| **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭 | 用於銀行間自有帳戶轉帳和覆蓋付款 |
| **CdtTrfTxInf** — 包含銀行間清算金額的信用轉帳交易資訊 | 支援通匯銀行合作夥伴之間的流動性管理 |
| **Dbtr / DbtrAgt** — 債務人機構及其代理人的識別 | 攜帶透過覆蓋方式清算的客戶信用轉帳的覆蓋段 |
| **Cdtr / CdtrAgt** — 債權人機構及其代理人的識別 | 支援金融機構之間的資金營運和融資操作 |
| **IntrBkSttlmAmt** — 以清算貨幣表示的銀行間清算金額 | 債務人機構向債權人機構發送 pacs.009 以轉移自有資金。對於覆蓋方式的付款，pacs.009 提供資金調撥段，而 pacs.008 透過另一路徑攜帶客戶指令。 |

## CBPR+ 與方案背景

- 在機構間轉帳中取代 MT202 和 MT202COV
- 覆蓋方式流程將 pacs.009 與基礎 pacs.008 客戶指令配對
- 結構化當事方資料和 LEI 識別的要求日益增加
- SWIFT gpi 涵蓋 pacs.009 以實現通匯銀行透明度

## 訊息流程

債務人機構向債權人機構發送 pacs.009 以轉移自有資金。對於覆蓋方式的付款，pacs.009 提供資金調撥段，而 pacs.008 透過另一路徑攜帶客戶指令。

## 版本差異表

| 版本範圍 | 重要原因 | 實作重點 |
|---|---|---|
| pacs.009.001.10 | pacs008 中的目前實作 | 與目前專案對 FI 信用轉帳流程的支援範圍一致。 |
| pacs.009.001.11-12 | 後續目錄版本 | 對於代理行與補償支付環境中的路線圖規劃很重要。 |

## 附註解的 XML 範例

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### 欄位說明

- `InstrId`: 應使用仍可連結到底層客戶流程的資金撥付階段識別碼。
- `IntrBkSttlmAmt`: 自有帳戶與補償清算流程通常需要對結算金額與日期施加更嚴格的資金控管。
- `Dbtr` / `Cdtr`: 這些是機構參與方，而不是零售客戶角色；建模時應據此處理。

## 比較 pacs.009 vs pacs.008

| 比較維度 | pacs.009.001.10 | 對照訊息 |
|---|---|---|
| 主要用途 | 機構自有帳戶信用轉帳或覆蓋清算環節 | 客戶信用轉帳 |
| 業務負責人 | 資金 / 代理行 / 融資作業 | 客戶支付作業 |
| 典型搭配 | pacs.002、pacs.004 與相關的 pacs.008 流程 | pacs.002, pacs.004, pacs.007, pacs.028 |
| 應避免的錯誤假設 | 認為它只是更技術化的 pacs.008 | 認為它可以直接承載機構融資流程而不需額外設計 |

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## 相關訊息
| 訊息類型 | 說明 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh-tw/pacs.008.001.13/) | 金融機構間客戶信用轉帳 | pacs.008 訊息是金融機構之間交換的核心付款指令，用於代表客戶轉移資金。它為一筆或多筆信用轉帳交易攜帶債務人、債權人、金額和匯款資訊。 |
| [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) | 金融機構間付款狀態報告 | pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。 |
| [`pacs.010.001.05`](/zh-tw/pacs.010.001.05/) | 金融機構直接扣款 | pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。 |

