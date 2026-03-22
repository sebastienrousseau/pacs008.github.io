---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Bahasa Indonesia
description: Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nama ISO** | FIToFICustomerDirectDebitV09 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 9 |

## Ikhtisar

Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah dan pihak-pihak
- **Cdtr** — Identifikasi kreditur dan rincian rekening
- **CdtrAgt** — Identifikasi Agen Kreditur (lembaga penagih)
- **DbtrAgt** — Identifikasi Agen Debitur (lembaga pembayar)

## Konteks bisnis

- Mendukung skema debit langsung SEPA Core dan B2B
- Digunakan untuk penagihan pembayaran berulang seperti langganan, tagihan utilitas, dan pembayaran cicilan pinjaman
- Memerlukan referensi mandat yang valid antara debitur dan kreditur
- Memungkinkan penagihan massal beberapa instruksi debit langsung dalam satu pesan

## Konteks CBPR+ dan skema

- Persyaratan alamat terstruktur dan identifikasi pihak berlaku sama untuk debit langsung
- Data terkait mandat harus sepenuhnya terstruktur mulai November 2026
- Menggantikan format debit langsung gaya MT104 warisan dalam alur lintas batas
- Validasi identifikasi skema kreditur semakin ditegakkan

## Alur pesan

Agen kreditur menginisiasi pacs.003 menuju agen debitur untuk menagih dana. Agen debitur memvalidasi mandat, memeriksa cakupan rekening, dan menyelesaikan atau mengembalikan transaksi.

## Pesan terkait

- [`pacs.004.001.11`](/id/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/id/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report

