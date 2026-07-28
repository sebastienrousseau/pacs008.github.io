---
title: "Batas waktu alamat terstruktur November 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: id-ID
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
    text: "Audit kualitas data alamat saat ini di seluruh catatan debitur, kreditur, dan agen."
  - name: "Step 2"
    text: "Petakan bidang alamat tidak terstruktur yang ada ke format terstruktur (jalan, gedung, kode pos, kota, negara)."
  - name: "Step 3"
    text: "Tambahkan validasi alamat ke pipeline pra-pembuatan menggunakan pacs008."
  - name: "Step 4"
    text: "Uji dengan data pembayaran representatif sebelum tenggat waktu."
---

# Batas waktu alamat terstruktur November 2026

SWIFT mewajibkan alamat pos terstruktur dalam pesan pembayaran lintas batas mulai November 2026. Apa yang berubah, pesan mana yang terpengaruh, dan bagaimana pacs008 membantu tim mempersiapkan diri.

## Apa yang berubah

SWIFT CBPR+ beralih dari alamat pos tidak terstruktur ke bidang alamat terstruktur dalam pesan pembayaran lintas batas. Setelah tenggat waktu November 2026, bidang alamat pihak utama harus menggunakan format terstruktur dengan elemen terpisah untuk nama jalan, nomor gedung, kode pos, kota, dan negara.

## Mengapa ini penting

- Alamat tidak terstruktur meningkatkan tingkat perbaikan manual dan menunda pemrosesan langsung.
- Alamat terstruktur meningkatkan akurasi penyaringan sanksi dengan memisahkan nama pihak dari data lokasi.
- Persyaratan regulasi dan skema semakin mewajibkan data terstruktur untuk kepatuhan dan pelaporan.
- Tingkat penolakan pembayaran lintas batas meningkat ketika kualitas alamat tidak memenuhi ekspektasi pihak lawan.

## Pesan mana yang terpengaruh

- **pacs.008** — alamat pos debitur dan kreditur dalam transfer kredit nasabah.
- **pacs.009** — alamat institusi dalam transfer kredit antar lembaga keuangan dan pembayaran penutup.
- **pacs.004** — alamat pihak dalam pengembalian pembayaran.
- **pacs.003** — alamat kreditur dan debitur dalam debit langsung nasabah.

## Bagaimana pacs008 membantu

- Memvalidasi bidang alamat pos terstruktur dan hibrida sebelum pembuatan XML.
- Menandai data alamat tidak terstruktur yang akan gagal setelah tenggat waktu.
- Mendukung format hibrida sebelum tenggat waktu dan format terstruktur saja setelah tenggat waktu.
- Mengintegrasikan pemeriksaan kualitas alamat ke dalam pipeline CI dan alur kerja validasi batch.

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

## Lini Masa

- **Maret 2023** — SWIFT CBPR+ diluncurkan dengan ISO 20022 untuk pembayaran lintas batas.
- **November 2025** — periode koeksistensi untuk instruksi pembayaran MT dan MX berakhir.
- **November 2026** — persyaratan alamat pos terstruktur berlaku untuk pesan CBPR+.
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## Apa yang harus dilakukan sekarang

- Audit kualitas data alamat saat ini di seluruh catatan debitur, kreditur, dan agen.
- Petakan bidang alamat tidak terstruktur yang ada ke format terstruktur (jalan, gedung, kode pos, kota, negara).
- Tambahkan validasi alamat ke pipeline pra-pembuatan menggunakan pacs008.
- Uji dengan data pembayaran representatif sebelum tenggat waktu.

## Referensi

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

