---
title: "Catatan perubahan skema | pacs008"
description: "Setiap perubahan aturan yang menentukan apakah sebuah pesan diterima, dikelompokkan menurut tanggal berlaku."
lang: id-ID
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /id/perubahan-skema/
robots: "index, follow"
draft: false
noindex: false
---

# Catatan perubahan skema

Setiap perubahan aturan yang menentukan apakah sebuah pesan diterima, dikelompokkan menurut tanggal berlaku.

Dihasilkan dari registri aturan, set aturan `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Sejak November 2026 Swift beralih ke siklus Standards Release tahunan, sehingga daftar ini akan bertambah tiap tahun, bukan berhenti pada tenggat.

Berlangganan: [Atom feed](/scheme-changes.xml).

## Pemberian versi set aturan

Pengenal aturan stabil antar rilis minor. Perubahan hasil suatu aturan menuntut versi set baru, agar laporan tetap dapat direproduksi.

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


## Cara mengunci set aturan

Laporan validasi mencatat versi dan hash set. Sebutkan keduanya saat melaporkan ketidaksesuaian, agar set persis dapat direkonstruksi.
