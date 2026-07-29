---
title: "ความพร้อม ISO 20022 ปี 2026 | pacs008"
description: What changes on 14 November 2026 for SWIFT CBPR+ and Bank of England CHAPS, who is in scope, the exceptions, and downloadable test fixtures for each rule.
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
---

# ความพร้อม ISO 20022 ปี 2026

อีก **108 วัน** ถึง **14 พฤศจิกายน 2026** ณ วันที่ 2026-07-29

ตั้งแต่วันดังกล่าว ที่อยู่ทางไปรษณีย์ที่ไม่มีโครงสร้างโดยสมบูรณ์จะไม่ได้รับการยอมรับในข้อความชำระเงิน SWIFT CBPR+ และโดยไลบรารีตรวจสอบ CHAPS ของธนาคารแห่งอังกฤษอีกต่อไป ในวันเดียวกันยังมีการเปลี่ยนแปลงอีกสองรายการ และชุดที่ใหญ่กว่าจะตามมาในเดือนพฤศจิกายน 2027

ทุกกฎด้านล่างมีตัวระบุ วันที่มีผลบังคับ แหล่งอ้างอิงที่เชื่อถือได้ และไฟล์ทดสอบ จึงไม่มีสิ่งใดที่ต้องเชื่อโดยไม่ตรวจสอบ

## เรื่องนี้เกี่ยวข้องกับคุณหรือไม่

คุณอยู่ในขอบเขตหากคุณส่งการชำระเงิน CBPR+ หรือ CHAPS ที่มีที่อยู่ทางไปรษณีย์ของคู่สัญญาฝ่ายใดก็ตาม

| | |
|---|---|
| **ข้อความ** | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| **คู่สัญญา** | Debtor, creditor, ultimate debtor, ultimate creditor, and agents that carry an address |
| **นอกขอบเขต** | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| **ได้รับการยกเว้น** | Agents identified by BIC alone need no postal address (`CBPR-ADDR-005`) |

## สิ่งที่เปลี่ยนแปลงจริง

ข้อกำหนดนี้คือ **ขั้นต่ำ ไม่ใช่ขั้นสูงสุด** และนี่คือส่วนที่มักถูกเข้าใจผิดมากที่สุด

| รูปแบบ | `TwnNm` | `Ctry` | `AdrLine` | ก่อน 14 พ.ย. 2026 | ตั้งแต่วันนั้น |
|---|---|---|---|---|---|
| มีโครงสร้างสมบูรณ์ | มี | มี | ไม่มี | ยอมรับ | ยอมรับ |
| ไฮบริด | มี | มี | มี | ยอมรับ | **ยอมรับ** |
| ไม่มีโครงสร้างโดยสมบูรณ์ | ไม่มี | ไม่มี | มี | ยอมรับ | **ปฏิเสธ** |

คุณ**ไม่จำเป็น**ต้องย้ายถนน เลขที่อาคาร และรหัสไปรษณีย์ไปยังฟิลด์แบบมีโครงสร้าง เพียงระบุเมืองใน `<TwnNm>` และประเทศใน `<Ctry>` เป็นรหัส ISO 3166 สองตัวอักษรก็เพียงพอ ส่วนที่เหลือคงอยู่ในบรรทัดที่อยู่ได้ นั่นคือที่อยู่แบบไฮบริดและยังคงใช้ได้

[Full detail, with worked examples →](/structured-address/)

## ตรวจสอบข้อมูลของคุณตอนนี้

เครื่องมือสองอย่าง ทำงานทั้งหมดในเบราว์เซอร์ของคุณ ไม่มีการส่งข้อมูลการชำระเงินออกไป

- **[Batch address scan](/live/)** — upload a CSV of party addresses and get a
  readiness score, a breakdown by party, and a downloadable remediation list of
  the records that would fail.
- **[XSD validation](/live/)** — check an existing message against the official
  schema for element order, cardinality and datatypes.

## ไฟล์ทดสอบ

Run these through the workbench, the CLI or the API. Each maps to the rule it
exercises, so you can confirm your pipeline reacts the way you expect.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## ทุกกำหนดการ ไม่ใช่เพียงรายการนี้

พฤศจิกายน 2026 ไม่ใช่จุดสิ้นสุดของการเปลี่ยนแปลง ISO 20022 ตั้งแต่วันนั้น Swift จะเปลี่ยนไปใช้รอบ Standards Release รายปี ดังนั้นแนวทางการใช้งานจะเปลี่ยนทุกปี

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

[Dated change log and feed →](/scheme-changes/)

## สิ่งที่ต้องตรวจสอบ แยกตามบทบาท

### วิศวกรรม

- Find every place an address is concatenated into a single line before it
  reaches the message. That is usually where the problem is.
- Model town and country as separate fields end to end, not just at the
  boundary.
- Add `CBPR-ADDR-001` to `CBPR-ADDR-003` to your pre-submission validation,
  with the effective date, so failures surface before 14 November rather than
  on it.
- Add a negative test that a fully unstructured address is rejected. A rule you
  have never seen fire is a rule you cannot rely on.

### ข้อมูล

- Measure how many records are missing a structured town or country **now**, so
  the remediation effort is a number rather than a guess. The batch scan
  produces exactly this.
- Identify the authoritative source per field. Addresses often arrive from
  several systems with different conventions.
- Country must be a two-letter ISO 3166 code. `GB`, not `United Kingdom` or
  `GBR` — `CBPR-ADDR-003` fails on the latter two.

### การทดสอบ

- Test the day before, the day of, and the day after the effective date.
  Effective-date logic is where date-boundary bugs live.
- Test CBPR+ and CHAPS separately. They are modelled as distinct rules here for
  a reason.
- Include a hybrid address in the passing set. A test suite that only accepts
  fully structured addresses will reject valid traffic.

### ปฏิบัติการ

- Know what a rejection for this reason will look like in your monitoring, and
  who triages it.
- Confirm your counterparties' readiness, not only your own. A compliant message
  can still fail if the receiving side is not ready.

### ผู้บริหาร

- The exposure is the count of records that would fail today, not the count of
  systems. Ask for the number.
- Note the 2027 obligations below. Teams that treat November 2026 as the finish
  line will repeat this work in twelve months.

## ความแตกต่างระหว่างสคีม

| | SWIFT CBPR+ | Bank of England CHAPS |
|---|---|---|
| Unstructured rejected | 14 November 2026 | 14 November 2026 |
| Minimum acceptable | Hybrid | Hybrid |
| Enforced by | CBPR+ usage guidelines | CHAPS validation library |
| Purpose codes | Not mandated by this change | Mandatory for all payments from November 2027 |
| Structured remittance | Not mandated by this change | Mandatory from November 2027 |
| Rules here | `CBPR-ADDR-001` – `006` | `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |

## แหล่งข้อมูล

Every rule on this page derives from one of these. Rules marked *announced* are
published intentions whose exact date should be re-verified before you rely on
them.

| แหล่งข้อมูล | ผู้เผยแพร่ | เอกสาร | ตรวจสอบแล้ว |
|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2026-07-28 |

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

