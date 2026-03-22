---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Bahasa Indonesia
description: Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nama ISO** | FinancialInstitutionCreditTransferV10 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 10 |

## Ikhtisar

Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah penyelesaian antarbank
- **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya
- **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya
- **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian

## Konteks bisnis

- Digunakan untuk transfer rekening sendiri bank-ke-bank dan pembayaran cover
- Mendukung manajemen likuiditas antara mitra perbankan koresponden
- Membawa kaki cover dari transfer kredit pelanggan yang diselesaikan melalui metode cover
- Memungkinkan operasi perbendaharaan dan pendanaan antara lembaga keuangan

## Konteks CBPR+ dan skema

- Menggantikan MT202 dan MT202COV untuk transfer antar lembaga
- Alur metode cover memasangkan pacs.009 dengan instruksi pelanggan pacs.008 yang mendasari
- Data pihak terstruktur dan identifikasi LEI semakin diperlukan
- SWIFT gpi mencakup pacs.009 untuk transparansi perbankan koresponden

## Alur pesan

Lembaga debitur mengirim pacs.009 ke lembaga kreditur untuk mentransfer dananya sendiri. Untuk pembayaran metode cover, pacs.009 menyediakan kaki pendanaan sementara pacs.008 membawa instruksi pelanggan melalui jalur terpisah.

## Pesan terkait

- [`pacs.008.001.13`](/id/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/id/pacs.010.001.05/) — Financial Institution Direct Debit

