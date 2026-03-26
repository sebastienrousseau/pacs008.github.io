---
title: "อธิบายข้อความ PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: th-TH
lastUpdated: true
image: /logo.webp
---

# อธิบายข้อความ PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## วงจรชีวิตการชำระเงิน

วงจรชีวิตการชำระเงิน pacs มี 6 ขั้นตอนและข้อความหลายประเภทที่ทำงานร่วมกัน

**ขั้นตอนที่ 1 — การเริ่มต้น** จาก pain.001 ในโดเมนลูกค้าถึงธนาคาร

**ขั้นตอนที่ 2 — คำสั่งระหว่างธนาคาร** ตัวแทนผู้ชำระเงินสร้าง pacs.008

**ขั้นตอนที่ 3 — รายงานสถานะ** pacs.002 ที่แต่ละขั้นตอน

**ขั้นตอนที่ 4 — การชำระบัญชี** ผ่าน CLRG, INDA/INGA หรือ COVE

**ขั้นตอนที่ 5 — เครดิตให้ผู้รับผลประโยชน์**

**ขั้นตอนที่ 6 — การจัดการข้อยกเว้น** pacs.004 คืนเงิน, pacs.007 กลับรายการ, pacs.028 สอบถามสถานะ

### แบบอนุกรม

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### แบบคัฟเวอร์

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## โครงสร้าง XML ของ pacs.008

### Group Header (GrpHdr)

- **MsgId** — ตัวระบุข้อความที่ไม่ซ้ำ สูงสุด 35 อักขระ
- **CreDtTm** — เวลาสร้างในรูปแบบ ISO 8601
- **NbOfTxs** — จำนวนธุรกรรม
- **SttlmInf** — ข้อมูลการชำระบัญชี
- **IntrBkSttlmDt** — วันที่ชำระบัญชีระหว่างธนาคาร

### Credit Transfer Transaction Information (CdtTrfTxInf)

- **PmtId** — InstrId, EndToEndId, TxId, UETR
- **IntrBkSttlmAmt** — จำนวนเงินชำระบัญชี
- **ChrgBr** — รหัสผู้รับภาระค่าธรรมเนียม
- **Dbtr / DbtrAcct / DbtrAgt** — ข้อมูลผู้ชำระเงิน
- **Cdtr / CdtrAcct / CdtrAgt** — ข้อมูลผู้รับเงิน
- **RmtInf** — ข้อมูลการโอน

## วิธีการชำระบัญชี

- **CLRG** — ผ่านระบบหักบัญชี
- **INDA** — ในบัญชีของตัวแทนที่ได้รับคำสั่ง
- **INGA** — ในบัญชีของตัวแทนที่สั่ง
- **COVE** — ผ่านการชำระเงินคัฟเวอร์แยกต่างหาก

## รหัสผู้รับภาระค่าธรรมเนียม

- **DEBT** — ผู้ชำระเงินรับภาระทั้งหมด (MT103: OUR)
- **CRED** — ผู้รับเงินรับภาระทั้งหมด (MT103: BEN)
- **SHAR** — แบ่งกัน (MT103: SHA)
- **SLEV** — ระดับบริการ บังคับสำหรับ SEPA

## รูปแบบที่อยู่ไปรษณีย์

### ที่อยู่แบบมีโครงสร้าง

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## UETR และการติดตาม gpi

UETR เป็น UUID v4 ที่สร้างโดยตัวแทนผู้ชำระเงิน ต้องไม่เปลี่ยนแปลงตลอดสายการชำระเงิน SWIFT gpi ใช้ UETR ติดตามผ่านฐานข้อมูล Tracker บนคลาวด์

## อ้างอิง

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

