---
title: "ISO 20022 詞彙表 | pacs008"
description: pacs.008及相關訊息中使用的關鍵ISO 20022和支付訊息術語的定義。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# ISO 20022 詞彙表

本詞彙表定義了ISO 20022 pacs訊息和本站中使用的關鍵術語、縮寫和技術概念。

## A

**ACH** — 自動清算所（Automated Clearing House）。處理金融機構間批量電子支付的網路。

**AdrLine** — 地址行（Address Line）。ISO 20022郵政地址結構中的自由文字地址欄位。每行最多70個字元，最多7行。將於2026年11月前被CBPR+的結構化地址元素取代。

**ACCP** — 客戶資料已接受（Accepted Customer Profile）。pacs.002狀態代碼，表示先前的檢查（語法、客戶資料）已通過。

**ACSC** — 結算完成已接受（Accepted Settlement Completed）。pacs.002狀態代碼，確認付款人帳戶上的結算已完成。

**ACSP** — 結算處理中已接受（Accepted Settlement in Process）。pacs.002狀態代碼，表示所有檢查均已通過，結算正在進行中。

## B

**BAH** — 業務應用標頭（Business Application Header，head.001）。通過SWIFT傳輸ISO 20022業務訊息的標準化信封。包含路由資訊、訊息定義識別碼和發送方/接收方BIC。

**BIC** — 業務識別代碼（Business Identifier Code，ISO 9362）。唯一識別金融機構的8或11位字元代碼。格式：BBBBCCLL（銀行代碼+國家+地區），可選BBB分支代碼。

## C

**CBPR+** — 跨境支付與報告增強版（Cross-Border Payments and Reporting Plus）。SWIFT將跨境支付訊息從MT遷移到ISO 20022的專案。2023年3月上線。

**CdtTrfTxInf** — 貸記轉帳交易資訊（Credit Transfer Transaction Information）。pacs.008中主要的交易級建構區塊，包含支付詳情、當事方、金額和匯款資訊。

**ChrgBr** — 費用承擔方（Charge Bearer）。指定誰支付交易費用。值：DEBT（付款人）、CRED（收款人）、SHAR（分擔）、SLEV（服務級別，僅SEPA）。

**CLRG** — 清算系統結算。通過TARGET2、EURO1或CHIPS等清算系統轉移資金的結算方法。

**COVE** — 備付方式結算。由單獨的pacs.009備付支付處理代理行間的資金調撥，而pacs.008直接傳輸客戶資料的結算方法。

**CSM** — 清算和結算機制（Clearing and Settlement Mechanism）。處理和結算參與機構間支付指令的基礎設施。

## D

**Dbtr** — 付款人（Debtor）。欠款並發起付款的一方。在pacs.008中，Dbtr元素包含付款人的姓名、郵政地址、身份識別和居住國。

**DbtrAgt** — 付款人代理（Debtor Agent）。管理付款人帳戶並發送pacs.008指令的金融機構。

## E

**E2E ID** — 端到端識別（End-to-End Identification，EndToEndId）。由發起人分配的參考，必須在支付鏈中所有代理間保持不變。用於客戶級可追溯性。

**EPC** — 歐洲支付委員會（European Payments Council）。管理貸記轉帳和直接扣款的SEPA支付方案規則手冊的機構。

## F

**FI** — 金融機構（Financial Institution）。參與支付清算和結算的銀行或其他機構。

**FIToFI** — 金融機構對金融機構（Financial Institution to Financial Institution）。描述pacs訊息運作的銀行間領域。

## G

**gpi** — 全球支付創新（Global Payments Innovation）。SWIFT推動更快、更透明跨境支付的倡議。使用UETR通過基於雲端的Tracker進行端到端追蹤。

**GrpHdr** — 組頭（Group Header）。pacs訊息中的訊息級元資料區塊。包含MsgId、CreDtTm、NbOfTxs、結算資訊和支付類型資訊。

## H

**混合地址** — 將結構化元素（StrtNm、TwnNm、Ctry）與非結構化AdrLine元素相結合的郵政地址格式。在2026年11月結構化地址截止日期前的過渡期內允許使用。

## I

**IBAN** — 國際銀行帳號（International Bank Account Number，ISO 13616）。用於跨境和國內支付的標準化帳號格式。使用ISO 7064 Mod 97-10校驗和進行驗證。

**INDA** — 被指令代理結算（Instructed Agent settlement）。在被指令代理的帳簿上結算資金的方法，付款方代理在該處持有往來帳戶。

**INGA** — 指令代理結算（Instructing Agent settlement）。在指令代理的帳簿上結算資金的方法，被指令代理在該處持有往來帳戶。

**InstrId** — 指令識別（Instruction Identification）。支付鏈中相鄰代理間的點對點參考。可在每個跳轉處更改。

**IntrBkSttlmAmt** — 銀行間結算金額（Interbank Settlement Amount）。指令代理與被指令代理之間以結算貨幣結算的金額。

**ISO 20022** — 金融機構間電子資料交換的國際標準。定義了支付、證券、貿易融資及其他金融領域的通用資料模型和基於XML的訊息格式。

## L

**LEI** — 法人實體識別碼（Legal Entity Identifier，ISO 17442）。唯一識別參與金融交易的法律實體的20位字母數字代碼。用於當事方的OrgId/LEI和代理的FinInstnId/LEI。

## M

**MsgId** — 訊息識別（Message Identification）。由發送代理分配的訊息信封唯一識別碼。在支付鏈的每個跳轉處更改。

**MT** — 訊息類型（Message Type）。SWIFT的傳統訊息格式（如客戶匯款用MT103，金融機構間轉帳用MT202）。正被ISO 20022 MX訊息取代。

**MX** — SWIFT使用的ISO 20022 XML訊息格式。MX訊息在CBPR+框架下取代MT訊息用於跨境支付。

## N

**NbOfTxs** — 交易數量（Number of Transactions）。組頭元素，指示訊息中包含的單個交易數量。

## P

**pacs** — 支付清算與結算（Payments Clearing and Settlement）。涵蓋銀行間支付訊息的ISO 20022業務領域。

**pacs.002** — 金融機構間支付狀態報告。報告先前支付指令的處理狀態（已接受、已拒絕、待處理、已結算）。

**pacs.003** — 金融機構間客戶直接扣款。在銀行間傳輸客戶直接扣款指令以收取資金。

**pacs.004** — 支付退回。當支付無法套用時，通過支付鏈退回已結算資金。

**pacs.007** — 金融機構間支付撤銷。從原始發送方向前通過鏈條撤銷支付指令。

**pacs.008** — 金融機構間客戶貸記轉帳。客戶貸記轉帳的主要銀行間訊息。取代MT103。

**pacs.009** — 金融機構貸記轉帳。以銀行自身名義在銀行間轉移資金。涵蓋資金調撥、備付支付和流動性管理。取代MT202/MT202COV。

**pacs.010** — 金融機構直接扣款。允許一家銀行在雙邊協議下從另一家銀行的自有帳戶扣款。

**pacs.028** — 金融機構間支付狀態請求。當未收到pacs.002更新時，主動請求先前支付的狀態。

**pain** — 支付發起（Payment Initiation）。涵蓋客戶到銀行訊息的ISO 20022業務領域（如貸記轉帳發起用pain.001）。

**PII** — 個人可識別資訊（Personally Identifiable Information）。可識別個人身份的資料。pacs008在結構化日誌中遮蔽PII。

**PstlAdr** — 郵政地址（Postal Address）。pacs訊息中用於當事方的地址結構。支援結構化（StrtNm、TwnNm、Ctry）和非結構化（AdrLine）格式。

## R

**RJCT** — 已拒絕（Rejected）。表示支付已被拒絕的pacs.002狀態代碼。

**RmtInf** — 匯款資訊（Remittance Information）。pacs.008中攜帶的支付參考資料。支援非結構化（自由文字，最多140字元）和結構化（文件參考、金額、收款人參考）格式。

**RTGS** — 即時全額結算（Real-Time Gross Settlement）。交易逐筆即時結算的支付系統（如TARGET2、Fedwire、CHAPS）。

## S

**SCT** — SEPA貸記轉帳（SEPA Credit Transfer）。EPC管理的使用pacs.008的歐元貸記轉帳方案。

**SCT Inst** — SEPA即時貸記轉帳（SEPA Instant Credit Transfer）。SCT的即時支付變體，10秒內完成結算。

**SDD** — SEPA直接扣款（SEPA Direct Debit）。EPC管理的使用pacs.003的歐元直接扣款方案。

**SEPA** — 單一歐元支付區（Single Euro Payments Area）。覆蓋36個歐洲國家的歐元貸記轉帳、直接扣款和卡支付的支付一體化倡議。

**SLEV** — 服務級別（Service Level）。SEPA必需的費用承擔代碼。表示費用遵循方案規則，不從轉帳金額中扣除。

**STP** — 直通處理（Straight-Through Processing）。無需人工干預的自動化端到端支付處理。

**SttlmMtd** — 結算方法（Settlement Method）。定義銀行間結算方式：CLRG（清算系統）、INDA（被指令代理）、INGA（指令代理）或COVE（備付支付）。

## T

**TxId** — 交易識別（Transaction Identification）。由第一個指令代理分配的銀行間參考。後續代理不得更改。

## U

**UETR** — 唯一端到端交易參考（Unique End-to-End Transaction Reference）。由付款方代理產生的UUID v4識別碼，在支付的所有環節中不變地傳輸，用於gpi追蹤。

## X

**XSD** — XML模式定義（XML Schema Definition）。定義ISO 20022 XML訊息的結構、元素和資料類型的正式模式。

**XXE** — XML外部實體（XML External Entity）。XML解析中的安全漏洞。pacs008使用defusedxml防止XXE攻擊。

## 參考資料

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
