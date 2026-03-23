---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน...
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ชื่อ ISO** | FIToFICustomerCreditTransferV13 |
| **สถานะการลงทะเบียน** | Registered |
| **ปี** | 2023 |
| **เวอร์ชัน** | 13 |

## ภาพรวม

ข้อความ pacs.008 เป็นคำสั่งชำระเงินหลักที่แลกเปลี่ยนระหว่างสถาบันการเงินเพื่อโอนเงินในนามของลูกค้า โดยมีข้อมูลลูกหนี้ เจ้าหนี้ จำนวนเงิน และข้อมูลการโอนเงินสำหรับธุรกรรมโอนเครดิตหนึ่งรายการหรือมากกว่า

> ตรวจทานล่าสุดเทียบกับแหล่งข้อมูลหลักเมื่อวันที่ 23 มีนาคม 2026 วันที่อ้างอิงแคตตาล็อก ISO 20022: 27 February 2025; ลิงก์แหล่งข้อมูลแสดงอยู่ด้านล่าง

## องค์ประกอบข้อมูลหลัก

- **GrpHdr** — Group Header พร้อม ID ข้อความ วันที่สร้าง จำนวนธุรกรรม และข้อมูลการชำระบัญชี
- **CdtTrfTxInf** — ข้อมูลธุรกรรมโอนเครดิตพร้อมจำนวนเงิน ค่าธรรมเนียม และวัตถุประสงค์
- **Dbtr / DbtrAgt** — การระบุตัวตนและรายละเอียดบัญชีของลูกหนี้และตัวแทนลูกหนี้
- **Cdtr / CdtrAgt** — การระบุตัวตนและรายละเอียดบัญชีของเจ้าหนี้และตัวแทนเจ้าหนี้
- **RmtInf** — ข้อมูลการโอนเงินสำหรับการอ้างอิงการชำระเงินแบบมีโครงสร้างหรือไม่มีโครงสร้าง

## บริบทธุรกิจ

- ข้อความหลักสำหรับการโอนเครดิตข้ามพรมแดนและภายในประเทศที่ริเริ่มโดยลูกค้า
- ใช้ทั่วทั้ง SEPA SCT, SEPA Instant, CBPR+ และระบบหักบัญชีแห่งชาติ
- มีข้อมูลการโอนเงินแบบมีโครงสร้างเพื่อรองรับการกระทบยอดอัตโนมัติ
- รองรับวิธีการชำระบัญชีแบบอนุกรม แบบ cover และแบบตรงสำหรับสายการชำระเงินหลายขา

| องค์ประกอบข้อมูลหลัก | บริบทธุรกิจ |
|---|---|
| **GrpHdr** — Group Header พร้อม ID ข้อความ วันที่สร้าง จำนวนธุรกรรม และข้อมูลการชำระบัญชี | ข้อความหลักสำหรับการโอนเครดิตข้ามพรมแดนและภายในประเทศที่ริเริ่มโดยลูกค้า |
| **CdtTrfTxInf** — ข้อมูลธุรกรรมโอนเครดิตพร้อมจำนวนเงิน ค่าธรรมเนียม และวัตถุประสงค์ | ใช้ทั่วทั้ง SEPA SCT, SEPA Instant, CBPR+ และระบบหักบัญชีแห่งชาติ |
| **Dbtr / DbtrAgt** — การระบุตัวตนและรายละเอียดบัญชีของลูกหนี้และตัวแทนลูกหนี้ | มีข้อมูลการโอนเงินแบบมีโครงสร้างเพื่อรองรับการกระทบยอดอัตโนมัติ |
| **Cdtr / CdtrAgt** — การระบุตัวตนและรายละเอียดบัญชีของเจ้าหนี้และตัวแทนเจ้าหนี้ | รองรับวิธีการชำระบัญชีแบบอนุกรม แบบ cover และแบบตรงสำหรับสายการชำระเงินหลายขา |
| **RmtInf** — ข้อมูลการโอนเงินสำหรับการอ้างอิงการชำระเงินแบบมีโครงสร้างหรือไม่มีโครงสร้าง | ตัวแทนลูกหนี้สร้าง pacs.008 และส่งไปยังตัวแทนเจ้าหนี้ (โดยตรงหรือผ่านตัวกลาง) ตัวแทนแต่ละรายในสายตรวจสอบ เพิ่มข้อมูล และส่งต่อคำสั่งจนกว่าตัวแทนเจ้าหนี้จะเครดิตเข้าบัญชีผู้รับผลประโยชน์ |

## บริบท CBPR+ และรูปแบบ

- แทนที่ MT103 และ MT103+ สำหรับการโอนเครดิตลูกค้าข้ามพรมแดน
- กำหนดเส้นตายที่อยู่แบบมีโครงสร้างเดือนพฤศจิกายน 2026 บังคับใช้กับที่อยู่ไปรษณีย์ของคู่สัญญาทั้งหมด
- SWIFT gpi ต้องใช้ pacs.008 สำหรับการติดตามแบบครบวงจรด้วย UETR
- 13 การปรับปรุงสะท้อนถึงวิวัฒนาการ schema อย่างต่อเนื่องทั่วโครงสร้างพื้นฐานตลาด

## กระแสข้อความ

ตัวแทนลูกหนี้สร้าง pacs.008 และส่งไปยังตัวแทนเจ้าหนี้ (โดยตรงหรือผ่านตัวกลาง) ตัวแทนแต่ละรายในสายตรวจสอบ เพิ่มข้อมูล และส่งต่อคำสั่งจนกว่าตัวแทนเจ้าหนี้จะเครดิตเข้าบัญชีผู้รับผลประโยชน์

## เอกสารอ้างอิงหลัก

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## เวอร์ชันที่รองรับ

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## ข้อความที่เกี่ยวข้อง
| ประเภทข้อความ | คำอธิบาย | ภาพรวม |
|---|---|---|
| [`pacs.002.001.12`](/th/pacs.002.001.12/) | FI to FI Payment Status Report | ข้อความ pacs.002 ถูกส่งโดยสถาบันการเงินเพื่อรายงานสถานะของคำสั่งชำระเงินที่ส่งไปก่อนหน้านี้ โดยให้ข้อมูลยืนยัน ปฏิเสธ หรือสถานะรอดำเนินการสำหรับธุรกรรมแต่ละรายการภายในข้อความการชำระเงิน |
| [`pacs.004.001.11`](/th/pacs.004.001.11/) | Payment Return | ข้อความ pacs.004 ใช้เพื่อส่งคืนธุรกรรมการชำระเงินที่ชำระบัญชีแล้วก่อนหน้านี้ โดยย้อนกลับกระแสเงินทุนเมื่อไม่สามารถนำเงินไปใช้ได้ ส่งผิดพลาด หรือถูกเรียกคืนโดยสถาบันต้นทาง |
| [`pacs.009.001.10`](/th/pacs.009.001.10/) | Financial Institution Credit Transfer | ข้อความ pacs.009 ใช้สำหรับการโอนเครดิตระหว่างสถาบันการเงินโดยที่การโอนเป็นในนามของสถาบันเอง ไม่ใช่ในนามของลูกค้า รองรับการจัดหาเงินทุนระหว่างธนาคาร การชำระเงินแบบ cover และการจัดการสภาพคล่อง |

