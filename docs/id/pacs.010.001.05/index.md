---
title: pacs.010.001.05 — Financial Institution Direct Debit | Bahasa Indonesia
description: Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nama ISO** | FinancialInstitutionDirectDebitV05 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 5 |

## Ikhtisar

Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah penagihan
- **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya
- **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya
- **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian

## Konteks bisnis

- Mendukung penagihan debit langsung antarbank antara lembaga keuangan
- Digunakan untuk penagihan biaya, margin call, dan kewajiban penyelesaian institusional
- Memerlukan pengaturan bilateral yang telah disepakati sebelumnya antara lembaga peserta
- Penting untuk manajemen kas institusional dan siklus penyelesaian antarbank

## Konteks CBPR+ dan skema

- Menggantikan elemen MT204 untuk pemrosesan debit langsung antarbank
- Identifikasi pihak terstruktur mengikuti persyaratan yang sama seperti pesan pacs lainnya
- Validasi pengidentifikasi institusional (BIC, LEI) bersifat wajib
- Termasuk dalam peta jalan adopsi ISO 20022 penuh di seluruh infrastruktur pasar

## Alur pesan

Lembaga kreditur mengirim pacs.010 ke lembaga debitur untuk menagih dana berdasarkan pengaturan yang telah disepakati sebelumnya. Lembaga debitur memvalidasi permintaan dan menyelesaikan atau menolak debit langsung.

## Pesan terkait

- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/id/pacs.003.001.09/) — FI to FI Customer Direct Debit

