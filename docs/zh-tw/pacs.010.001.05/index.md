---
title: pacs.010.001.05 | 金融機構直接扣款 | pacs008
description: pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — 金融機構直接扣款

| | |
|---|---|
| **ISO 名稱** | FinancialInstitutionDirectDebitV05 |
| **註冊狀態** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.010 訊息用於金融機構自身帳戶的直接扣款交易。它使一個機構能夠直接從另一個機構的帳戶中收取資金。

> 已於 2026 年 3 月 23 日依據主要來源完成複核。ISO 20022 目錄參考日期：2025-02-27；來源連結如下。

## 關鍵資料要素

- **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭
- **DrctDbtTxInf** — 包含收取金額的直接扣款交易資訊
- **Cdtr / CdtrAgt** — 債權人機構及其代理人的識別
- **Dbtr / DbtrAgt** — 債務人機構及其代理人的識別
- **IntrBkSttlmAmt** — 以清算貨幣表示的銀行間清算金額

## 業務背景

- 支援金融機構之間的銀行間直接扣款收款
- 用於費用收取、保證金追繳和機構間清算義務
- 需要參與機構之間預先達成的雙邊安排
- 對機構現金管理和銀行間清算週期至關重要

| 關鍵資料要素 | 業務背景 |
|---|---|
| **GrpHdr** — 包含訊息識別碼和清算資訊的群組標頭 | 支援金融機構之間的銀行間直接扣款收款 |
| **DrctDbtTxInf** — 包含收取金額的直接扣款交易資訊 | 用於費用收取、保證金追繳和機構間清算義務 |
| **Cdtr / CdtrAgt** — 債權人機構及其代理人的識別 | 需要參與機構之間預先達成的雙邊安排 |
| **Dbtr / DbtrAgt** — 債務人機構及其代理人的識別 | 對機構現金管理和銀行間清算週期至關重要 |
| **IntrBkSttlmAmt** — 以清算貨幣表示的銀行間清算金額 | 債權人機構根據預先達成的安排向債務人機構發送 pacs.010 以收取資金。債務人機構驗證請求並清算或拒絕該直接扣款。 |

## CBPR+ 與方案背景

- 在銀行間直接扣款處理中取代 MT204 的部分功能
- 結構化當事方識別遵循與其他 pacs 訊息相同的要求
- 機構識別碼（BIC、LEI）的驗證為強制性的
- 包含在市場基礎設施全面採用 ISO 20022 的路線圖中

## 訊息流程

債權人機構根據預先達成的安排向債務人機構發送 pacs.010 以收取資金。債務人機構驗證請求並清算或拒絕該直接扣款。

## 版本差異表

| 版本範圍 | 重要原因 | 實作重點 |
|---|---|---|
| pacs.010.001.05 | pacs008 中的目前實作 | 是目前專案中機構間直接扣款支援的參考基點。 |
| pacs.010.001.06 | 後續目錄版本 | Review before adopting newer infrastructure requirements. |

## 附註解的 XML 範例

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### 欄位說明

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: 機構間直接扣款金額通常需要明確的雙邊容差控管。
- `Cdtr` / `Dbtr`: 應清楚標示機構角色；這不是零售客戶借記模型。

## 主要參考來源

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相關訊息
| 訊息類型 | 說明 | 概述 |
|---|---|---|
| [`pacs.009.001.10`](/zh-tw/pacs.009.001.10/) | 金融機構信用轉帳 | pacs.009 訊息用於金融機構自身帳戶間的信用轉帳，而非代表客戶進行。它支援銀行間資金調撥、覆蓋付款和流動性管理。 |
| [`pacs.002.001.12`](/zh-tw/pacs.002.001.12/) | 金融機構間付款狀態報告 | pacs.002 訊息由金融機構發送，用於報告先前發送的付款指令之狀態。它為付款訊息中的個別交易提供確認、拒絕或待處理的狀態資訊。 |
| [`pacs.003.001.09`](/zh-tw/pacs.003.001.09/) | 金融機構間客戶直接扣款 | pacs.003 訊息在金融機構之間交換，用於執行客戶直接扣款指令。它使債權人的銀行能夠代表債權人從債務人的銀行收取資金。 |

