---
title: pacs.028.001.05 — FI to FI Payment Status Request | Bahasa Indonesia
description: Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nama ISO** | FIToFIPaymentStatusRequestV05 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 5 |

## Ikhtisar

Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **TxInf** — Informasi Transaksi yang mengidentifikasi pembayaran yang akan ditanyakan
- **OrgnlGrpInf** — Informasi Grup Asli yang merujuk pesan sumber
- **OrgnlInstrId** — Identifikasi Instruksi Asli dari pembayaran sumber
- **OrgnlEndToEndId** — Identifikasi Ujung ke Ujung Asli untuk ketertelusuran

## Konteks bisnis

- Memungkinkan pertanyaan status proaktif untuk instruksi pembayaran yang sedang dalam perjalanan
- Mendukung tim operasi yang menyelidiki pembayaran yang tertunda atau hilang
- Melengkapi pacs.002 dengan menginisiasi komunikasi status alih-alih menunggu
- Digunakan dalam alur kerja penanganan pengecualian dan pemantauan SLA

## Konteks CBPR+ dan skema

- Menggantikan pola pertanyaan status MT199 dan kueri pesan SWIFT manual
- CBPR+ mendukung permintaan status terstruktur yang ditautkan ke pengidentifikasi pesan asli
- Pelacakan berbasis UETR melalui gpi mengurangi kebutuhan pertanyaan manual
- Semakin terintegrasi ke dalam dasbor operasi pembayaran otomatis

## Alur pesan

Agen yang memberi instruksi mengirim pacs.028 ke agen yang diinstruksikan untuk meminta status pembayaran tertentu. Agen yang diinstruksikan merespons dengan pacs.002 yang berisi status pemrosesan terkini.

## Pesan terkait

- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/id/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Financial Institution Credit Transfer

