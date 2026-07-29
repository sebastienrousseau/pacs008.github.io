---
title: "บันทึกการเปลี่ยนแปลงสคีม | pacs008"
description: "ทุกการเปลี่ยนกฎที่กำหนดว่าข้อความจะได้รับการยอมรับหรือไม่ จัดกลุ่มตามวันที่มีผลบังคับ"
lang: th-TH
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /th/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# บันทึกการเปลี่ยนแปลงสคีม

ทุกการเปลี่ยนกฎที่กำหนดว่าข้อความจะได้รับการยอมรับหรือไม่ จัดกลุ่มตามวันที่มีผลบังคับ

สร้างจากทะเบียนกฎ ชุดกฎ `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

ตั้งแต่พฤศจิกายน 2026 Swift เปลี่ยนไปใช้รอบ Standards Release รายปี รายการนี้จึงจะเพิ่มขึ้นทุกปีแทนที่จะจบที่กำหนดเส้นตาย

ติดตาม: [Atom feed](/scheme-changes.xml).

## การกำหนดเวอร์ชันชุดกฎ

ตัวระบุกฎคงที่ระหว่างรุ่นย่อย หากผลลัพธ์ของกฎเปลี่ยน ต้องออกชุดกฎเวอร์ชันใหม่ เพื่อให้รายงานยังทำซ้ำได้

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## วิธีตรึงชุดกฎ

รายงานการตรวจสอบบันทึกเวอร์ชันและแฮชของชุดกฎ โปรดอ้างอิงทั้งสองเมื่อแจ้งความคลาดเคลื่อน เพื่อสร้างชุดกฎเดิมขึ้นใหม่ได้
