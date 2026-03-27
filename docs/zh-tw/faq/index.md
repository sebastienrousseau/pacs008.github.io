---
title: "ISO 20022 常見問題 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: zh-TW
lastUpdated: true
image: /logo.webp
---

# ISO 20022 常見問題

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## 概述

### 什麼是 ISO 20022？

ISO 20022 是金融報文的國際標準。它為金融機構之間交換的支付報文定義了通用語言和模型。與 SWIFT MT 等舊格式不同，ISO 20022 採用 XML，支持更豐富、更結構化的參與方、金額和參考資訊資料。

### 什麼是 pacs 報文？

pacs（payments clearing and settlement）報文系列涵蓋銀行間支付指令、狀態報告、退回、撤銷和查詢。包括：

- pacs.002 — 狀態報告
- pacs.003 — 客戶直接借記
- pacs.004 — 支付退回
- pacs.007 — 支付撤銷
- pacs.008 — 客戶貸記轉帳
- pacs.009 — 金融機構間貸記轉帳
- pacs.010 — 金融機構間直接借記
- pacs.028 — 支付狀態請求

每種報文在支付生命週期中承擔特定角色。

### pacs 報文與 SWIFT MT 報文有什麼區別？

SWIFT MT 報文採用平面欄位標籤格式（例如 MT103 用於客戶貸記轉帳）。pacs 報文採用分層 XML，具有更豐富的資料結構。主要區別包括：

- 支持單條報文包含多筆交易
- 結構化的參與方識別（LEI、多重識別）
- 結構化郵政地址
- 結構化匯款資訊

對應關係：MT103 對應 pacs.008，MT202 對應 pacs.009，MT199 狀態文字由 pacs.002 取代。

### pain 報文與 pacs 報文之間的關係是什麼？

pain（payment initiation）報文在客戶與其銀行之間傳輸。pacs 報文在銀行之間傳輸。來自付款人銀行的 pain.001 客戶貸記轉帳發起指令會轉化為 pacs.008 銀行間指令。兩個域共享通用資料元素，但服務於支付鏈的不同環節。

## 報文選擇

### 什麼時候應使用 pacs.008？

pacs.008 用於銀行間客戶貸記轉帳指令。它承載付款方和收款方資料、金額和貨幣、匯款資訊以及結算詳情。它是在銀行間網路上傳送客戶支付的主要報文，無論是境內（SEPA）還是跨境（CBPR+）。

### 什麼時候應使用 pacs.009 而不是 pacs.008？

pacs.009 用於機構自有帳戶轉帳、融資環節和備付款。與 pacs.008 代表付款方承載客戶支付不同，pacs.009 是銀行為自身帳戶之間轉移資金。在備付方式流程中，pacs.009 承載融資環節，而 pacs.008 透過獨立路徑承載客戶指令。

### pacs.004 和 pacs.007 有什麼區別？

pacs.004 將已結算的資金從接收方沿支付鏈返回。pacs.007 從原始發起方沿支付鏈正向撤銷支付。當收款行在結算後無法將資金入帳給收款人時使用 pacs.004。當發起方發現錯誤、重複或詐欺時使用 pacs.007。

### 什麼時候應使用 pacs.028 而不是等待 pacs.002？

當支付未能及時收到 pacs.002 狀態更新時，使用 pacs.028 主動請求支付狀態。pacs.002 是事件驅動的（接收方代理主動傳送），而 pacs.028 是異常驅動的（指令發起方請求查詢）。pacs.028 用於延遲、不明或缺失的支付狀態更新，而非常規通訊。

### pacs.003 用於什麼場景？

pacs.003 承載銀行間客戶直接借記指令。收款方代理將其傳送給付款方代理以收取資金。它必須包含有效的授權委託參考，支持 SEPA Core 和 B2B 直接借記方案。不用於貸記轉帳或機構間自有帳戶直接借記。

### pacs.010 用於什麼場景？

pacs.010 處理金融機構之間在各自帳戶上的直接借記。用於銀行間費用收取、保證金追繳以及雙邊協議下的類似義務。不用於客戶直接借記或貸記轉帳。

## 報文結構

### 什麼是 Group Header（GrpHdr）？

Group Header 在每條 pacs 報文中恰好出現一次。它包含報文識別（MsgId）、建立時間戳記（CreDtTm）、交易筆數（NbOfTxs）、結算資訊（SttlmInf），以及可選的銀行間結算總金額和支付類型資訊。它標識報文信封，而不是單筆業務交易。

### pacs.008 中有哪些支付識別？

pacs.008 使用五個識別。MsgId 識別報文信封，在每一跳更新。InstrId 是相鄰代理間的點對點參考，每一跳可能更新。EndToEndId 由發起方設定，鏈條中任何代理均不得修改。TxId 由第一個指令代理分配，在銀行間空間保持不變。UETR 是 UUID，在所有環節中保持不變，用於端到端追蹤。

### 有哪些結算方式？

定義了四種結算方式。CLRG 透過清算系統結算（如 TARGET2、EURO1、CHIPS）。INDA 在被指令代理的帳簿上結算，付款方代理在該代理處持有帳戶。INGA 在指令代理的帳簿上結算，被指令代理在該代理處持有帳戶。COVE 透過由 pacs.009 承載的獨立備付款進行結算。

### 費用承擔代碼的含義是什麼？

DEBT 意為所有費用由付款方承擔（等同 MT103 OUR）。CRED 意為所有費用由收款方承擔（等同 BEN）。SHAR 意為費用在付款方和收款方代理間分攤（等同 SHA）。SLEV 意為費用遵循服務級別規則，SEPA 貸記轉帳強制使用。

## CBPR+ 與遷移

### 什麼是 CBPR+？

CBPR+（Cross-Border Payments and Reporting Plus）是 SWIFT 在跨境支付報文中採用 ISO 20022 的計畫。它於 2023 年 3 月上線，用 pacs 報文替代 MT 報文。CBPR+ 強制要求所有狀態通訊使用 pacs.002，支持更豐富的參與方資料和結構化地址，並透過 gpi 使用基於 UETR 的追蹤。

### MT/MX 共存期發生了什麼？

跨境支付指令的共存期已於 2025 年 11 月結束。此後，CBPR+ 報文必須使用 ISO 20022（MX）格式。過渡期間的 MT/MX 轉換服務不再適用於新業務流。銀行必須原生傳送和接收 pacs 報文。

### 2026 年 11 月結構化地址截止日期是什麼？

自 2026 年 11 月起，SWIFT CBPR+ 要求跨境支付報文中使用結構化郵政地址。非結構化地址行（僅 AdrLine）將不再被關鍵參與方欄位接受。最低要求 TwnNm 和 Ctry 為必填項，建議填寫 StrtNm 和 BldgNb 或 PstBx。這將改善制裁篩查並減少人工修補。

### pacs.008 如何替代 MT103？

pacs.008 替代 MT103 和 MT103+，用於客戶貸記轉帳。主要映射：MT103 欄位 20 對應 MsgId 或 InstrId；欄位 32A 拆分為 IntrBkSttlmDt 和 IntrBkSttlmAmt；欄位 50a 對應 Dbtr 和 DbtrAcct；欄位 59a 對應 Cdtr 和 CdtrAcct；欄位 70 對應 RmtInf；欄位 71A 對應 ChrgBr。pacs.008 新增了 UETR、結構化匯款資訊、LEI 識別，並支持單條報文包含多筆交易。

### pacs.009 如何替代 MT202？

pacs.009 替代 MT202 和 MT202COV，用於機構間轉帳。在備付方式流程中，MT202COV（同時承載融資和底層客戶資料）被明確拆分：pacs.009 承載融資環節，pacs.008 直接承載客戶指令。這種拆分提高了資料品質並減少了對帳問題。

## 技術細節

### 什麼是結構化地址和非結構化地址？

結構化地址為每個組成部分使用獨立的 XML 元素：StrtNm（街道）、BldgNb（門牌號）、PstCd（郵遞區號）、TwnNm（城市）、Ctry（國家），以及 Flr、Room、DstrctNm 等可選元素。非結構化地址使用最多七個 AdrLine 元素的自由文字。混合地址在過渡期內同時使用兩者。2026 年 11 月之後，CBPR+ 要求使用結構化格式。

### 什麼是 UETR？gpi 追蹤如何運作？

UETR（Unique End-to-End Transaction Reference）是由付款方代理產生的 UUID v4 識別符，在支付的所有環節中保持不變。它出現在 pacs.008、pacs.009、pacs.002、pacs.004、pacs.007 和 pacs.028 中。SWIFT gpi 利用 UETR 透過雲端 Tracker 資料庫追蹤支付。每個代理確認接收和處理狀態，實現端到端可視化和 SLA 監控。

### 常見的 pacs.002 狀態碼有哪些？

ACCP 意為通過客戶檔案檢查後已接受。ACSP 意為已接受且結算進行中。ACSC 意為付款方帳戶結算已完成。RJCT 意為已拒絕（附 StsRsnInf 中的原因代碼）。PDNG 意為等待進一步處理。RCVD 意為已接收但尚未處理。每個狀態可附帶結構化原因代碼，如 AC01（帳號錯誤）、AM04（餘額不足）或 RC01（BIC 錯誤）。

### pacs.004 中常見的退回原因代碼有哪些？

常見退回原因代碼包括 AC01（帳號錯誤）、AC04（帳戶已關閉）、AC06（帳戶已凍結）、AM04（餘額不足）、BE04（收款方地址缺失）、CUST（客戶要求）、DUPL（重複支付）、FOCR（根據撤銷請求）和 FR01（詐欺）。完整列表在 ISO 20022 External Code Sets 中定義。

### 什麼是結構化匯款資訊？

pacs.008 中的結構化匯款資訊使用 RmtInf/Strd 元素承載單據參考（發票號、貸記通知單）、金額（應付、已付、稅額、折扣）以及收款方參考（ISO 11649 RF 參考號）。這實現了自動化發票匹配和對帳。常用單據類型代碼包括 CINV（商業發票）、CREN（貸記通知單）和 SOAC（對帳單）。

### 什麼是 LEI？何時使用？

LEI（Legal Entity Identifier）是依據 ISO 17442 制定的 20 位字母數字代碼。它唯一識別參與金融交易的法人實體。在 pacs 報文中，LEI 出現在參與方的 OrgId/LEI 和代理的 FinInstnId/LEI 中。CBPR+ 日益鼓勵使用 LEI 進行參與方和代理識別。LEI 改善了實體消歧並滿足監管報告要求。

## 關於 pacs008 工具包

### pacs008 做什麼？

pacs008 是一個 Python 工具包，用於產生、驗證和傳送 ISO 20022 支付報文。它從 CSV、JSON、JSONL、SQLite 和 Parquet 資料來源讀取支付資料，根據 JSON Schema 和 XSD 進行驗證，檢查 IBAN 和 BIC 識別符，清理資料以符合 SWIFT 字元規範，並輸出 XML 檔案。提供 REST API、CLI 和 Python 函式庫三種介面。

### pacs008 支持哪些報文類型？

pacs008 支持八種報文類型：pacs.002.001.12（狀態報告）、pacs.003.001.09（客戶直接借記）、pacs.004.001.11（支付退回）、pacs.007.001.11（支付撤銷）、pacs.008.001.13（客戶貸記轉帳）、pacs.009.001.10（金融機構貸記轉帳）、pacs.010.001.05（金融機構直接借記）和 pacs.028.001.05（支付狀態請求）。

### pacs008 如何應對 2026 年結構化地址截止日期？

pacs008 在產生 XML 前驗證結構化和混合郵政地址欄位。它標記在 2026 年 11 月截止日期後將失敗的非結構化地址資料，支持截止日期前的混合格式和截止日期後的純結構化格式，並將地址品質檢查整合到 CI 流水線和批次驗證工作流中。

### pacs008 能否在不產生 XML 的情況下驗證資料？

可以。使用 CLI 參數 `--dry-run` 或 API 端點 `POST /validate` 即可在不產生 XML 的前提下驗證支付資料。驗證流水線檢查 JSON Schema 合規性、IBAN 格式和校驗和、BIC 結構以及 SWIFT 字元合規性。結束代碼或 API 回應指示驗證是通過還是失敗。

## 參考資料

- [ISO 20022 報文定義目錄](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 外部代碼集](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 使用指南](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ 遷移路線圖](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA 貸記轉帳規則手冊](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA 即時貸記轉帳規則手冊](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

