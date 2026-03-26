---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## ทั่วไป

### ISO 20022 คืออะไร?

ISO 20022 เป็นมาตรฐานสากลสำหรับการส่งข้อความทางการเงิน กำหนดภาษาและโมเดลร่วมสำหรับข้อความการชำระเงินระหว่างสถาบันการเงิน ใช้ XML และรองรับข้อมูลที่ครบถ้วนกว่ารูปแบบเก่าอย่าง SWIFT MT

### ข้อความ pacs คืออะไร?

ตระกูลข้อความ pacs (payments clearing and settlement) ครอบคลุมคำสั่งการชำระเงินระหว่างธนาคาร รายงานสถานะ การคืนเงิน การกลับรายการ และการสอบถาม ประกอบด้วย pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 และ pacs.028

### ข้อความ pacs แตกต่างจากข้อความ SWIFT MT อย่างไร?

SWIFT MT ใช้รูปแบบฟิลด์แท็กแบบแบน pacs ใช้ XML แบบลำดับชั้น MT103 ตรงกับ pacs.008, MT202 ตรงกับ pacs.009

### ความสัมพันธ์ระหว่างข้อความ pain และ pacs?

ข้อความ pain เดินทางระหว่างลูกค้าและธนาคาร ข้อความ pacs เดินทางระหว่างธนาคาร

## การเลือกข้อความ

### ควรใช้ pacs.008 เมื่อใด?

ใช้ pacs.008 สำหรับคำสั่งโอนเครดิตลูกค้าระหว่างธนาคาร

### ควรใช้ pacs.009 แทน pacs.008 เมื่อใด?

ใช้ pacs.009 สำหรับการโอนบัญชีของสถาบันเอง การจัดหาเงินทุน และการชำระเงินคัฟเวอร์

### pacs.004 กับ pacs.007 ต่างกันอย่างไร?

pacs.004 คืนเงินจากฝั่งผู้รับ pacs.007 กลับรายการจากฝั่งผู้ส่ง

### ควรใช้ pacs.028 แทนการรอ pacs.002 เมื่อใด?

ใช้ pacs.028 เมื่อต้องการร้องขอสถานะอย่างกระตือรือร้น

### pacs.003 ใช้สำหรับอะไร?

pacs.003 ส่งคำสั่งเดบิตโดยตรงของลูกค้าระหว่างธนาคาร

### pacs.010 ใช้สำหรับอะไร?

pacs.010 จัดการเดบิตโดยตรงระหว่างสถาบันการเงิน

## โครงสร้างข้อความ

### Group Header (GrpHdr) คืออะไร?

Group Header ปรากฏหนึ่งครั้งต่อข้อความ pacs ประกอบด้วย MsgId, CreDtTm, NbOfTxs, SttlmInf

### ตัวระบุการชำระเงินใน pacs.008 มีอะไรบ้าง?

MsgId, InstrId, EndToEndId, TxId, UETR

### มีวิธีการชำระบัญชีอะไรบ้าง?

CLRG, INDA, INGA, COVE

### รหัสผู้รับภาระค่าธรรมเนียมหมายความว่าอะไร?

DEBT (ผู้ชำระเงิน), CRED (ผู้รับเงิน), SHAR (แบ่งกัน), SLEV (ระดับบริการ SEPA)

## CBPR+ และการย้ายระบบ

### CBPR+ คืออะไร?

CBPR+ เป็นโปรแกรมของ SWIFT สำหรับ ISO 20022 ในการชำระเงินข้ามพรมแดน เริ่มมีนาคม 2023

### ช่วง MT/MX ร่วมเป็นอย่างไร?

สิ้นสุดพฤศจิกายน 2025 ธนาคารต้องส่งข้อความ pacs ดั้งเดิม

### เส้นตายที่อยู่แบบมีโครงสร้างพฤศจิกายน 2026 คืออะไร?

SWIFT CBPR+ กำหนดให้ใช้ที่อยู่แบบมีโครงสร้าง ต้องมี TwnNm และ Ctry เป็นอย่างน้อย

### pacs.008 แทนที่ MT103 อย่างไร?

pacs.008 แทนที่ MT103 และ MT103+ เพิ่ม UETR, ข้อมูลโอนแบบมีโครงสร้าง, LEI

### pacs.009 แทนที่ MT202 อย่างไร?

pacs.009 แทนที่ MT202 และ MT202COV แยกเงินทุนจากข้อมูลลูกค้า

## รายละเอียดทางเทคนิค

### ที่อยู่แบบมีโครงสร้างกับไม่มีโครงสร้างคืออะไร?

แบบมีโครงสร้างใช้ StrtNm, BldgNb, PstCd, TwnNm, Ctry แบบไม่มีโครงสร้างใช้ AdrLine

### UETR คืออะไรและการติดตาม gpi ทำงานอย่างไร?

UETR เป็น UUID v4 ที่สร้างโดยตัวแทนผู้ชำระเงิน ไม่เปลี่ยนแปลงตลอดสายการชำระเงิน

### รหัสสถานะ pacs.002 ที่พบบ่อย?

ACCP, ACSP, ACSC, RJCT, PDNG, RCVD

### รหัสเหตุผลการคืนเงิน pacs.004 ที่พบบ่อย?

AC01, AC04, AC06, AM04, BE04, CUST, DUPL, FOCR, FR01

### ข้อมูลการโอนแบบมีโครงสร้างคืออะไร?

ใช้ RmtInf/Strd สำหรับการอ้างอิงเอกสาร จำนวนเงิน และการอ้างอิงเจ้าหนี้

### LEI คืออะไรและใช้เมื่อใด?

LEI เป็นรหัส 20 อักขระตาม ISO 17442 ใช้ใน OrgId/LEI และ FinInstnId/LEI

## เกี่ยวกับชุดเครื่องมือ pacs008

### pacs008 ทำอะไร?

pacs008 เป็นชุดเครื่องมือ Python ที่สร้าง ตรวจสอบ และส่งข้อความ ISO 20022

### pacs008 รองรับข้อความประเภทใด?

pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05, pacs.028.001.05

### pacs008 ช่วยเรื่องเส้นตายที่อยู่แบบมีโครงสร้างอย่างไร?

ตรวจสอบฟิลด์ที่อยู่ก่อนสร้าง XML

### pacs008 ตรวจสอบข้อมูลโดยไม่สร้าง XML ได้หรือไม่?

ได้ ใช้ `--dry-run` หรือ `POST /validate`

## อ้างอิง

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

