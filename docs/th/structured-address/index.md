---
title: "กำหนดเวลาที่อยู่แบบมีโครงสร้าง พฤศจิกายน 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: th-TH
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "ตรวจสอบคุณภาพข้อมูลที่อยู่ปัจจุบันในบันทึกของผู้ชำระหนี้ ผู้รับชำระหนี้ และตัวแทน"
  - name: "Step 2"
    text: "แมปฟิลด์ที่อยู่แบบไม่มีโครงสร้างที่มีอยู่ไปยังรูปแบบมีโครงสร้าง (ถนน อาคาร รหัสไปรษณีย์ เมือง ประเทศ)"
  - name: "Step 3"
    text: "เพิ่มการตรวจสอบที่อยู่ในไปป์ไลน์ก่อนการสร้างโดยใช้ pacs008"
  - name: "Step 4"
    text: "ทดสอบด้วยข้อมูลการชำระเงินตัวแทนก่อนกำหนดเส้นตาย"
---

# กำหนดเวลาที่อยู่แบบมีโครงสร้าง พฤศจิกายน 2026

SWIFT กำหนดให้ใช้ที่อยู่ไปรษณีย์แบบมีโครงสร้างในข้อความการชำระเงินข้ามพรมแดนตั้งแต่เดือนพฤศจิกายน 2026 มีอะไรเปลี่ยนแปลง ข้อความใดได้รับผลกระทบ และ pacs008 ช่วยทีมเตรียมความพร้อมอย่างไร

## สิ่งที่เปลี่ยนแปลง

SWIFT CBPR+ กำลังเปลี่ยนจากที่อยู่ไปรษณีย์แบบไม่มีโครงสร้างเป็นฟิลด์ที่อยู่แบบมีโครงสร้างในข้อความการชำระเงินข้ามพรมแดน หลังจากกำหนดเส้นตายเดือนพฤศจิกายน 2026 ฟิลด์ที่อยู่ของฝ่ายหลักต้องใช้รูปแบบมีโครงสร้างที่มีองค์ประกอบแยกสำหรับชื่อถนน หมายเลขอาคาร รหัสไปรษณีย์ เมือง และประเทศ

## ทำไมจึงสำคัญ

- ที่อยู่แบบไม่มีโครงสร้างเพิ่มอัตราการแก้ไขด้วยตนเองและทำให้การประมวลผลโดยตรงล่าช้า
- ที่อยู่แบบมีโครงสร้างช่วยเพิ่มความแม่นยำในการคัดกรองการลงโทษโดยแยกชื่อฝ่ายออกจากข้อมูลตำแหน่ง
- ข้อกำหนดด้านกฎระเบียบและแผนงานกำหนดให้ใช้ข้อมูลแบบมีโครงสร้างมากขึ้นเพื่อการปฏิบัติตามกฎและการรายงาน
- อัตราการปฏิเสธการชำระเงินข้ามพรมแดนเพิ่มขึ้นเมื่อคุณภาพที่อยู่ไม่เป็นไปตามความคาดหวังของคู่สัญญา

## ข้อความใดได้รับผลกระทบ

- **pacs.008** — ที่อยู่ไปรษณีย์ของผู้ชำระหนี้และผู้รับชำระหนี้ในการโอนเครดิตลูกค้า
- **pacs.009** — ที่อยู่สถาบันในการโอนเครดิตระหว่างสถาบันการเงินและการชำระเงินแบบครอบคลุม
- **pacs.004** — ที่อยู่ของฝ่ายในการคืนเงิน
- **pacs.003** — ที่อยู่ของผู้รับชำระหนี้และผู้ชำระหนี้ในการหักบัญชีโดยตรงของลูกค้า

## pacs008 ช่วยอย่างไร

- ตรวจสอบฟิลด์ที่อยู่ไปรษณีย์แบบมีโครงสร้างและแบบผสมก่อนการสร้าง XML
- แจ้งเตือนข้อมูลที่อยู่แบบไม่มีโครงสร้างที่จะไม่ผ่านหลังจากกำหนดเส้นตาย
- รองรับทั้งรูปแบบผสมก่อนกำหนดเส้นตายและรูปแบบมีโครงสร้างเท่านั้นหลังกำหนดเส้นตาย
- ผสานการตรวจสอบคุณภาพที่อยู่เข้ากับไปป์ไลน์ CI และเวิร์กโฟลว์การตรวจสอบแบบแบตช์

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## ไทม์ไลน์

- **มีนาคม 2023** — SWIFT CBPR+ เริ่มใช้งานจริงกับ ISO 20022 สำหรับการชำระเงินข้ามพรมแดน
- **พฤศจิกายน 2025** — ระยะเวลาอยู่ร่วมกันของคำสั่งการชำระเงิน MT และ MX สิ้นสุด
- **พฤศจิกายน 2026** — ข้อกำหนดที่อยู่ไปรษณีย์แบบมีโครงสร้างมีผลบังคับใช้สำหรับข้อความ CBPR+
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## สิ่งที่ต้องทำตอนนี้

- ตรวจสอบคุณภาพข้อมูลที่อยู่ปัจจุบันในบันทึกของผู้ชำระหนี้ ผู้รับชำระหนี้ และตัวแทน
- แมปฟิลด์ที่อยู่แบบไม่มีโครงสร้างที่มีอยู่ไปยังรูปแบบมีโครงสร้าง (ถนน อาคาร รหัสไปรษณีย์ เมือง ประเทศ)
- เพิ่มการตรวจสอบที่อยู่ในไปป์ไลน์ก่อนการสร้างโดยใช้ pacs008
- ทดสอบด้วยข้อมูลการชำระเงินตัวแทนก่อนกำหนดเส้นตาย

## เอกสารอ้างอิง

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

