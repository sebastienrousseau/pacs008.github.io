---
title: ประเภทข้อความ | ไทย
description: คำจำกัดความและเวอร์ชันข้อความ pacs ISO 20022 ที่รองรับ
lang: th-TH
lastUpdated: true
image: /logo.svg
---

# ประเภทข้อความ

Pacs008 ครอบคลุมคำจำกัดความข้อความหลัก pacs.008 และข้อความที่เกี่ยวข้องที่ใช้ในโฟลว์การจัดเรียงและการกระทบยอด

## การสนับสนุนที่รวมอยู่

| ประเภทข้อความ | คำอธิบาย |
|---|---|
| [`pacs.002.001.12`](/th/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/th/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/th/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/th/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/th/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/th/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/th/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/th/pacs.028.001.05/) | FI to FI Payment Status Request |

## โมเดลการส่งมอบ

ข้อความแต่ละประเภทที่รองรับมีเทมเพลตและตรรกะการตรวจสอบความถูกต้อง เพื่อให้ทีมสามารถมาตรฐานการสร้างและการทดสอบการถดถอยข้ามหลายช่องทาง

## บริบทตลาด 2026

- **SEPA SCT / SCT Inst**: pacs.008 ยังคงเป็นศูนย์กลางสำหรับการแลกเปลี่ยนการโอนเครดิตและการประมวลผลการชำระเงินทันที
- **CBPR+**: pacs.008 ยังคงแทนที่เพย์โหลดข้ามพรมแดนแบบ MT103 ด้วยข้อมูลที่มีโครงสร้างมากขึ้น
- **ที่อยู่ที่มีโครงสร้าง**: แนวทางตลาดปัจจุบันชี้ไปที่การเปลี่ยนแปลงในเดือนพฤศจิกายน 2026 จากที่อยู่ไปรษณีย์ที่ไม่มีโครงสร้างทั้งหมด
- **วิธีการแบบอนุกรมและ STP**: ห่วงโซ่ธนาคารต่อธนาคารหลายขั้นตอนยังคงสำคัญ และตัวแปรการประมวลผลโดยตรงยังคงจำเป็นสำหรับประสิทธิภาพการดำเนินงาน

## ความสามารถเชิงปฏิบัติการ

Pacs008 มอบการสร้างและการตรวจสอบที่สนับสนุนด้วยเทมเพลตข้ามรีวิชันคำจำกัดความข้อความที่รองรับ:

- เปรียบเทียบเวอร์ชัน
- ทดสอบการถดถอยของการอัปเดตสคีมา
- เสริมความแข็งแกร่งของข้อมูลข้อความการชำระเงินขาออกก่อนปล่อย
- สนับสนุนทีมผลิตภัณฑ์ การดำเนินงาน และการย้ายระบบจากฐานรหัสเดียว

