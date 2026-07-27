---
title: "pacs 訊息詳解 | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: zh-TW
lastUpdated: true
image: /logo.webp
---

# pacs 訊息詳解

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## 支付生命週期

完整的 pacs 支付生命週期包含六個階段和多種報文類型協同工作。

**階段 1 — 發起。** 支付從客戶-銀行域（pain.001）發起。付款方銀行接收指令並將其轉化為銀行間域。

**階段 2 — 銀行間指令。** 付款方代理建立 pacs.008 並傳送給鏈條中的下一個代理。在序列流中，pacs.008 逐跳透過中間代理傳遞。在備付流中，pacs.008 從付款方代理直接傳送到收款方代理，而獨立的 pacs.009 透過代理行鏈條承載融資環節。

**階段 3 — 狀態報告。** 在每一跳，接收代理可以回傳 pacs.002 確認接受（ACCP/ACSP/ACSC）、拒絕（RJCT）或待處理狀態（PDNG）。在 CBPR+ 中，所有支付狀態通訊均強制使用 pacs.002。

**階段 4 — 結算。** 結算透過清算系統（CLRG）、代理行帳戶（INDA/INGA）或備付款（COVE）進行。銀行間結算日期和金額決定了何時以及結算多少。

**階段 5 — 收款人入帳。** 收款方代理將資金入帳給收款人，並可傳送客戶通知。

**階段 6 — 異常處理。** 如果結算後收款人無法入帳，pacs.004 沿鏈條返回資金。如果發起方發現錯誤或詐欺，pacs.007 沿鏈條正向傳遞。如果狀態不明，pacs.028 向下一代理查詢，答覆透過 pacs.002 返回。

### 序列方式流

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### 備付方式流

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## pacs.008 的 XML 結構

pacs.008 包含兩個主要構建塊：Group Header（GrpHdr）和貸記轉帳交易資訊（CdtTrfTxInf）。

### Group Header（GrpHdr）

Group Header 在每條報文中恰好出現一次，包含：

- **MsgId** — 由傳送代理分配的唯一報文識別。最大 35 個字元，每個傳送方必須唯一。
- **CreDtTm** — ISO 8601 格式的建立時間戳記。
- **NbOfTxs** — 報文中包含的單筆交易數量。
- **SttlmInf** — 結算資訊，包括結算方式（SttlmMtd）以及可選的清算系統和結算帳戶。
- **IntrBkSttlmDt** — 銀行間結算日期。
- **PmtTpInf** — 支付類型資訊，包括優先順序、服務級別、本地工具和類別目的。

### 貸記轉帳交易資訊（CdtTrfTxInf）

每筆交易包含：

- **PmtId** — 支付識別：InstrId、EndToEndId、TxId 和 UETR。
- **IntrBkSttlmAmt** — 帶幣種代碼的銀行間結算金額。
- **InstdAmt** — 原始指令金額（可能因外匯而與結算金額不同）。
- **ChrgBr** — 費用承擔代碼（DEBT、CRED、SHAR 或 SLEV）。
- **Dbtr / DbtrAcct / DbtrAgt** — 付款方姓名、地址、識別、帳戶和代理。
- **Cdtr / CdtrAcct / CdtrAgt** — 收款方姓名、地址、識別、帳戶和代理。
- **IntrmyAgt1 / 2 / 3** — 鏈條中最多三個中間代理。
- **RmtInf** — 匯款資訊，非結構化（自由文字）或結構化（單據參考、金額、日期）。
- **Purp** — 結構化目的代碼。
- **RgltryRptg** — 監管報告詳情。

## 支付識別

pacs 報文使用多個識別，在支付鏈中承擔不同角色。

<div class="api-fields-table" tabindex="0" aria-label="支付識別">
  <table>
    <caption>支付識別及其角色</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">識別</th>
        <th scope="col">設定方</th>
        <th scope="col">在鏈條中是否變化？</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">每個傳送代理</td><td class="api-fields-table__constraint">是 — 每條報文重新產生</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">每個指令代理</td><td class="api-fields-table__constraint">是 — 每一跳可能更新</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">發起方（付款方）</td><td class="api-fields-table__constraint">否 — 不得修改</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">第一個指令代理</td><td class="api-fields-table__constraint">否 — 不得修改</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">付款方代理</td><td class="api-fields-table__constraint">否 — 全程追蹤</td></tr>
    </tbody>
  </table>
</div>

## 結算方式

SttlmMtd 元素定義銀行間結算如何進行。

- **CLRG** — 透過清算系統結算，如 TARGET2、EURO1 或 CHIPS。境內和區域清算最為常見。
- **INDA** — 在被指令代理的帳簿上結算。付款方代理在下一個代理處持有 nostro 帳戶。雙邊代理行典型方式。
- **INGA** — 在指令代理的帳簿上結算。被指令代理在傳送代理處持有 nostro 帳戶。不如 INDA 常見。
- **COVE** — 透過獨立的備付款結算。pacs.009 承載融資環節，pacs.008 直接承載客戶資料。用於跨境代理行業務。

## 費用承擔代碼

ChrgBr 元素指定誰承擔支付費用。

- **DEBT** — 付款方承擔所有費用（MT103 等同：OUR）。收款方收到全額。
- **CRED** — 收款方承擔所有費用（MT103 等同：BEN）。費用從轉帳金額中扣除。
- **SHAR** — 費用共擔（MT103 等同：SHA）。各方支付各自代理的費用。跨境支付最為常見。
- **SLEV** — 費用遵循服務級別。SEPA 強制要求。不從轉帳金額中扣除。

## 郵政地址格式

### 結構化地址

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### 非結構化地址（2026 年 11 月後 CBPR+ 不再接受）

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

關鍵約束：StrtNm 最大 70 個字元（CBPR+），TwnNm 最大 35 個字元（CBPR+），Ctry 為 ISO 3166-1 alpha-2，AdrLine 每行最大 70 個字元且最多 7 行。

## 參與方識別

pacs.008 中的參與方支持多種識別方式：

- **BIC** — 依據 ISO 9362 的業務識別代碼。8 或 11 個字元（BBBBCCLL 或 BBBBCCLLBBB）。用於代理的 FinInstnId/BICFI 和參與方的 OrgId/AnyBIC。
- **LEI** — 依據 ISO 17442 的法人實體識別。20 位字母數字字元。出現在參與方的 OrgId/LEI 和代理的 FinInstnId/LEI 中。
- **IBAN** — 依據 ISO 13616 的國際銀行帳號。用於 DbtrAcct/Id/IBAN 和 CdtrAcct/Id/IBAN。
- **組織識別** — 其他基於方案的識別（稅號、DUNS、客戶號），透過 OrgId/Othr 附帶方案名稱代碼。
- **個人識別** — 用於自然人：出生日期和地點、護照（CCPT）、身分證（NIDN）或駕照（DRLC），透過 PrvtId。

## 匯款資訊

pacs.008 中的匯款資料使用 RmtInf 元素，有兩種形式：

**非結構化** — 每次最多 140 個字元的自由文字。簡單但限制自動對帳。

**結構化** — 帶有類型代碼、編號、日期和金額的單據參考。常見單據類型：CINV（商業發票）、CREN（貸記通知單）、SOAC（對帳單）。透過 CdtrRefInf 支持 ISO 11649 收款方參考（RF + 校驗位 + 參考號）。實現自動發票匹配和多發票支付。

## UETR 和 gpi 追蹤

UETR（Unique End-to-End Transaction Reference）是由付款方代理產生的 UUID v4。它出現在 pacs.008、pacs.009、pacs.002、pacs.004、pacs.007 和 pacs.028 的 PmtId/UETR 中。在整個支付鏈中必須保持不變。

SWIFT gpi 利用 UETR 透過雲端 Tracker 資料庫追蹤支付。每個代理確認接收和處理狀態，實現端到端可視化。gpi 跨境支付的 SLA 目標是當天將資金入帳至收款人帳戶。

## 參考資料

- [ISO 20022 報文定義目錄](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 外部代碼集](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 使用指南](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ 遷移路線圖 PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA 貸記轉帳規則手冊](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

