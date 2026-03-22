---
title: pacs.004.001.11 — Payment Return | Bahasa Indonesia
description: Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nama ISO** | PaymentReturnV11 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 11 |

## Ikhtisar

Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **TxInf** — Informasi Transaksi dengan jumlah pengembalian dan pihak-pihak
- **OrgnlGrpInf** — Informasi Grup Asli yang menghubungkan ke pesan sumber
- **RtrRsnInf** — Informasi Alasan Pengembalian dengan kode alasan terstruktur
- **OrgnlTxRef** — Referensi Transaksi Asli untuk pencocokan dan rekonsiliasi

## Konteks bisnis

- Menangani pengembalian pasca-penyelesaian ketika rekening penerima manfaat tidak dapat dikreditkan
- Mendukung skenario penarikan kembali di mana pengirim asal meminta pengembalian dana
- Membawa kode alasan pengembalian terstruktur untuk transparansi regulasi dan operasional
- Berlaku untuk pengembalian transfer kredit (pacs.008) dan pengembalian debit langsung (pacs.003)

## Konteks CBPR+ dan skema

- Menggantikan MT103 RETURN dan pesan pengembalian metode cover
- Kode alasan pengembalian distandarkan dan dapat dibaca mesin berdasarkan ISO 20022
- CBPR+ memerlukan data referensi transaksi asli yang lengkap untuk pencocokan
- Pelacakan SWIFT gpi diperluas ke transaksi pengembalian untuk visibilitas ujung-ke-ujung

## Alur pesan

Agen yang diinstruksikan mengirim pacs.004 kembali melalui rantai pembayaran untuk mengembalikan dana yang sebelumnya telah diselesaikan. Setiap agen dalam rantai memproses pengembalian dan mengkreditkan kembali rekening yang relevan.

## Pesan terkait

- [`pacs.008.001.13`](/id/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/id/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report

