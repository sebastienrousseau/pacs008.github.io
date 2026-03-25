---
title: "常見問題 | pacs008"
description: 關於ISO 20022 pacs訊息、CBPR+遷移、訊息選擇、實施和pacs008工具套件的常見問題。
lang: zh-TW
lastUpdated: true
image: /logo.svg
---

# 常見問題

本頁面回答關於ISO 20022 pacs訊息、它們如何協同運作以及pacs008如何幫助團隊實施的常見問題。

## 一般問題

### 什麼是ISO 20022？

ISO 20022是金融訊息傳遞的國際標準。它定義了金融機構之間交換支付訊息的通用語言和模型。與SWIFT MT等舊格式不同，ISO 20022使用XML，支援當事方、金額和參考資訊的更豐富、更結構化的資料。

### 什麼是pacs訊息？

pacs（payments clearing and settlement，支付清算與結算）訊息家族涵蓋銀行間支付指令、狀態報告、退回、撤銷和查詢。包括pacs.002、pacs.003、pacs.004、pacs.007、pacs.008、pacs.009、pacs.010和pacs.028。每種訊息在支付生命週期中扮演特定角色。

### pacs訊息與SWIFT MT訊息有何不同？

SWIFT MT訊息使用扁平的欄位標籤格式（如MT103用於客戶匯款）。Pacs訊息使用具有更豐富資料結構的分層XML。主要區別包括支援每條訊息包含多筆交易、結構化的當事方識別（LEI、多個ID）、結構化的郵政地址和結構化的匯款資訊。MT103對應pacs.008，MT202對應pacs.009，MT199狀態文字被pacs.002取代。

### pain訊息和pacs訊息之間的關係是什麼？

pain（payment initiation，支付發起）訊息在客戶與其銀行之間傳輸。pacs訊息在銀行之間傳輸。來自付款人銀行的pain.001客戶貸記轉帳發起變為pacs.008銀行間指令。兩個領域共享公共資料元素，但服務於支付鏈的不同部分。

## 訊息選擇

### 何時應使用pacs.008？

銀行間的客戶貸記轉帳指令應使用pacs.008。它承載付款人和收款人的當事方資料、金額、匯款資訊和結算詳情。它是通過銀行間網路傳送客戶付款的主要訊息，無論是國內（SEPA）還是跨境（CBPR+）。

### 何時應使用pacs.009而非pacs.008？

機構自有帳戶轉帳、融資環節和備付支付應使用pacs.009。與代表付款人承載客戶付款的pacs.008不同，pacs.009以銀行自己的名義在銀行間轉移資金。在備付方式流程中，pacs.009承載融資，而pacs.008在單獨的路徑上承載客戶指令。

### pacs.004和pacs.007之間的區別是什麼？

pacs.004從收款方通過鏈條退回已結算資金。pacs.007從原始指令方向前通過鏈條撤銷付款。當受益銀行在結算後無法貸記時使用pacs.004。當發起方發現錯誤、重複或詐欺時使用pacs.007。

### 何時應使用pacs.028而非等待pacs.002？

當需要主動請求未及時收到pacs.002更新的付款狀態時使用pacs.028。pacs.002是事件驅動的（接收代理主動傳送），而pacs.028是異常驅動的（指令代理請求）。pacs.028用於延遲、不明確或缺失的付款更新，不作為常規流量使用。

### pacs.003用於什麼？

pacs.003承載銀行間的客戶直接扣款指令。收款方代理向付款方代理傳送以收取資金。它需要有效的委託參考，並支援SEPA Core和B2B直接扣款方案。不用於貸記轉帳或機構自有帳戶扣款。

### pacs.010用於什麼？

pacs.010處理金融機構之間在自有帳戶上的直接扣款。用於銀行間收款，如費用、追加保證金和雙邊協議下的類似義務。不用於客戶直接扣款或貸記轉帳。

## 訊息結構

### 什麼是Group Header（GrpHdr）？

Group Header在每條pacs訊息中恰好出現一次。包含訊息識別碼（MsgId）、建立時間戳記（CreDtTm）、交易數量（NbOfTxs）、結算資訊（SttlmInf），以及可選的銀行間結算總金額和付款類型資訊。它標識訊息信封，而非單個業務交易。

### pacs.008中的付款識別碼有哪些？

pacs.008使用四個主要識別碼。MsgId標識訊息信封，在每個跳轉處更改。InstrId是相鄰代理之間的點對點參考，每個跳轉可能更改。EndToEndId由發起人設定，鏈中的任何代理都不得更改。TxId由第一個指令代理分配，在銀行間空間中保持不變。UETR是在所有環節中保持不變的UUID，用於端到端追蹤。

### 有哪些結算方法？

定義了四種結算方法。CLRG通過TARGET2、EURO1或CHIPS等清算系統結算。INDA在被指令代理的帳簿上結算，付款方代理在該處持有帳戶。INGA在指令代理的帳簿上結算，被指令代理在該處持有帳戶。COVE通過pacs.009承載的單獨備付支付結算。

### 費用承擔代碼是什麼意思？

DEBT表示所有費用由付款人承擔（相當於MT103 OUR）。CRED表示所有費用由收款人承擔（相當於BEN）。SHAR表示費用由付款人和收款人的代理之間分擔（相當於SHA）。SLEV表示費用遵循服務級別規則，SEPA貸記轉帳中為必填。

## CBPR+和遷移

### 什麼是CBPR+？

CBPR+（Cross-Border Payments and Reporting Plus）是SWIFT在跨境支付訊息傳遞中採用ISO 20022的專案。2023年3月上線，用pacs等價物替代MT訊息。CBPR+要求所有狀態通訊使用pacs.002，支援更豐富的當事方資料和結構化地址，並通過gpi使用基於UETR的追蹤。

### MT/MX共存期發生了什麼？

跨境支付指令的共存期於2025年11月結束。此後，CBPR+訊息必須使用ISO 20022（MX）格式。過渡期間在MT和MX之間轉換的翻譯服務不再適用於新流程。銀行現在必須傳送和接收原生pacs訊息。

### 2026年11月的結構化地址截止日期是什麼？

從2026年11月起，SWIFT CBPR+要求跨境支付訊息中使用結構化郵政地址。非結構化地址行（僅AdrLine）將不再被關鍵當事方欄位接受。至少需要TwnNm和Ctry，建議使用StrtNm和BldgNb或PstBx。這改善了制裁篩查並減少了手動修復。

### pacs.008如何取代MT103？

pacs.008取代MT103和MT103+用於客戶貸記轉帳。主要對應：MT103欄位20對應MsgId或InstrId；欄位32A拆分為IntrBkSttlmDt和IntrBkSttlmAmt；欄位50a對應Dbtr和DbtrAcct；欄位59a對應Cdtr和CdtrAcct；欄位70對應RmtInf；欄位71A對應ChrgBr。pacs.008增加了UETR、結構化匯款、LEI識別，並支援每條訊息包含多筆交易。

### pacs.009如何取代MT202？

pacs.009取代MT202和MT202COV用於機構間轉帳。在備付方式流程中，MT202COV（同時承載融資和底層客戶資料）被清晰拆分：pacs.009承載融資環節，而pacs.008直接承載客戶指令。這種分離提高了資料品質並減少了對帳問題。

## 技術細節

### 結構化地址與非結構化地址是什麼？

結構化地址為每個組成部分使用單獨的XML元素：StrtNm（街道）、BldgNb（門牌號）、PstCd（郵遞區號）、TwnNm（城鎮）、Ctry（國家）以及Flr、Room和DstrctNm等可選元素。非結構化地址使用最多七個AdrLine元素和自由文字。混合地址在過渡期間結合兩者。2026年11月後，CBPR+要求結構化格式。

### 什麼是UETR，gpi追蹤如何運作？

UETR（Unique End-to-End Transaction Reference，唯一端到端交易參考）是由付款方代理產生的UUID v4識別碼，在支付的所有環節中保持不變。出現在pacs.008、pacs.009、pacs.002、pacs.004、pacs.007和pacs.028中。SWIFT gpi使用UETR通過基於雲端的Tracker資料庫追蹤支付。每個代理確認接收和處理，實現端到端的可見性和SLA監控。

### pacs.002的常見狀態代碼有哪些？

ACCP表示客戶資料檢查後已接受。ACSP表示已接受且結算正在進行中。ACSC表示付款人帳戶上的結算已完成。RJCT表示已拒絕（在StsRsnInf中包含原因代碼）。PDNG表示等待進一步處理。RCVD表示已接收但尚未處理。每個狀態可能包含結構化原因代碼，如AC01（帳戶不正確）、AM04（資金不足）或RC01（BIC不正確）。

### pacs.004中的常見退回原因代碼有哪些？

常見退回原因代碼包括AC01（帳號不正確）、AC04（已關閉帳戶）、AC06（凍結帳戶）、AM04（資金不足）、BE04（收款人地址缺失）、CUST（客戶要求）、DUPL（重複付款）、FOCR（取消請求後續）和FR01（詐欺）。完整列表在ISO 20022外部代碼集中定義。

### 什麼是結構化匯款資訊？

pacs.008中的結構化匯款使用RmtInf/Strd元素承載文件參考（發票號、貸項通知單）、金額（到期、已匯、稅款、折扣）和收款人參考（ISO 11649 RF參考）。這實現了自動化發票配對和對帳。常見的文件類型代碼包括CINV（商業發票）、CREN（貸項通知單）和SOAC（帳戶對帳單）。

### 什麼是LEI，何時使用？

LEI（Legal Entity Identifier，法律實體識別碼）是根據ISO 17442的20個字元的字母數字代碼。它唯一標識參與金融交易的法律實體。在pacs訊息中，LEI出現在當事方的OrgId/LEI和代理的FinInstnId/LEI中。CBPR+越來越鼓勵使用LEI進行當事方和代理識別。它改善了實體消歧並支援監管報告要求。

## 關於pacs008工具套件

### pacs008做什麼？

pacs008是一個Python工具套件，用於產生、驗證和傳送ISO 20022支付訊息。它從CSV、JSON、JSONL、SQLite和Parquet資料來源讀取支付資料，根據JSON Schema和XSD進行驗證，檢查IBAN和BIC識別碼，清理資料以符合SWIFT字元合規性，並輸出XML檔案。它提供REST API、CLI和Python函式庫。

### pacs008支援哪些訊息類型？

pacs008支援八種訊息類型：pacs.002.001.12（狀態報告）、pacs.003.001.09（客戶直接扣款）、pacs.004.001.11（支付退回）、pacs.007.001.11（支付撤銷）、pacs.008.001.13（客戶貸記轉帳）、pacs.009.001.10（金融機構貸記轉帳）、pacs.010.001.05（金融機構直接扣款）和pacs.028.001.05（支付狀態請求）。

### pacs008如何幫助應對2026年結構化地址截止日期？

pacs008在XML產生前驗證結構化和混合郵政地址欄位。它標記在2026年11月截止日期後會失敗的非結構化地址資料，支援截止日期前的混合格式和截止日期後的僅結構化格式，並將地址品質檢查整合到CI管線和批次驗證工作流程中。

### pacs008能否在不產生XML的情況下驗證資料？

可以。使用`--dry-run` CLI標誌或`POST /validate` API端點來驗證支付資料而不產生XML。驗證管線檢查JSON Schema一致性、IBAN格式和校驗和、BIC結構以及SWIFT字元合規性。退出代碼或API回應指示驗證是否通過。

## 參考資料

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
