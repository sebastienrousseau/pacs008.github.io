---
title: pacs.002.001.12 — FI to FI Payment Status Report | Bahasa Indonesia
description: Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nama ISO** | FIToFIPaymentStatusReportV12 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 12 |

## Ikhtisar

Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **OrgnlGrpInfAndSts** — Informasi Grup Asli dan Status untuk pelaporan tingkat massal
- **TxInfAndSts** — Informasi Transaksi dan Status untuk hasil transaksi individual
- **StsRsnInf** — Informasi Alasan Status dengan kode alasan terstruktur
- **OrgnlTxRef** — Referensi Transaksi Asli yang menghubungkan kembali ke instruksi sumber

## Konteks bisnis

- Digunakan untuk mengonfirmasi penyelesaian atau melaporkan penolakan transfer kredit, debit langsung, dan pengembalian pembayaran
- Memungkinkan rekonsiliasi antara agen yang memberi instruksi dan agen yang diinstruksikan
- Diperlukan dalam alur CBPR+ untuk mengakui pemrosesan pesan pacs.008 dan pacs.009
- Mendukung pelaporan status baik tingkat grup massal maupun tingkat transaksi individual

## Konteks CBPR+ dan skema

- Menggantikan narasi status MT199 dan field 79 dalam pesan MT
- CBPR+ mewajibkan pacs.002 untuk semua komunikasi status pembayaran
- Kode alasan terstruktur menggantikan penjelasan penolakan teks bebas
- Integrasi pelacakan SWIFT gpi memerlukan pacs.002 untuk transparansi ujung-ke-ujung

## Alur pesan

Agen yang diinstruksikan (penerima) mengirim pacs.002 kembali ke agen yang memberi instruksi (pengirim) untuk mengonfirmasi penerimaan, penyelesaian, atau penolakan instruksi pembayaran yang diterima seperti pacs.008 atau pacs.009.

## Pesan terkait

- [`pacs.008.001.13`](/id/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/id/pacs.028.001.05/) — FI to FI Payment Status Request

