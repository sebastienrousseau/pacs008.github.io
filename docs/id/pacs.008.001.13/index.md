---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Bahasa Indonesia
description: Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nama ISO** | FIToFICustomerCreditTransferV13 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2023 |
| **Versi** | 13 |

## Ikhtisar

Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.

## Elemen data utama

- **GrpHdr** — Group Header dengan ID pesan, tanggal pembuatan, jumlah transaksi, dan informasi penyelesaian
- **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah, biaya, dan tujuan
- **Dbtr / DbtrAgt** — Identifikasi dan rincian rekening Debitur dan Agen Debitur
- **Cdtr / CdtrAgt** — Identifikasi dan rincian rekening Kreditur dan Agen Kreditur
- **RmtInf** — Informasi Remitansi untuk referensi pembayaran terstruktur atau tidak terstruktur

## Konteks bisnis

- Pesan utama untuk transfer kredit lintas batas dan domestik yang diinisiasi pelanggan
- Digunakan di seluruh SEPA SCT, SEPA Instant, CBPR+, dan sistem kliring nasional
- Membawa informasi remitansi terstruktur untuk mendukung rekonsiliasi langsung otomatis
- Mendukung metode penyelesaian serial, cover, dan langsung untuk rantai pembayaran multi-kaki

## Konteks CBPR+ dan skema

- Menggantikan MT103 dan MT103+ untuk transfer kredit pelanggan lintas batas
- Tenggat alamat terstruktur November 2026 berlaku untuk semua alamat pos pihak
- SWIFT gpi memerlukan pacs.008 untuk pelacakan ujung-ke-ujung berbasis UETR
- 13 revisi mencerminkan evolusi skema yang berkelanjutan di seluruh infrastruktur pasar

## Alur pesan

Agen debitur membuat pacs.008 dan mengirimkannya ke agen kreditur (langsung atau melalui perantara). Setiap agen dalam rantai memvalidasi, memperkaya, dan meneruskan instruksi hingga agen kreditur mengkreditkan rekening penerima manfaat.

## Versi yang didukung

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

## Pesan terkait

- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/id/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Financial Institution Credit Transfer

