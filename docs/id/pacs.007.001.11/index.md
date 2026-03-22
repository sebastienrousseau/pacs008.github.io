---
title: pacs.007.001.11 — FI to FI Payment Reversal | Bahasa Indonesia
description: Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nama ISO** | FIToFIPaymentReversalV11 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 11 |

## Ikhtisar

Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan
- **TxInf** — Informasi Transaksi dengan jumlah pembalikan dan pihak-pihak
- **OrgnlGrpInf** — Informasi Grup Asli yang merujuk pesan sumber
- **RvslRsnInf** — Informasi Alasan Pembalikan dengan kode alasan terstruktur
- **OrgnlTxRef** — Referensi Transaksi Asli untuk ketertelusuran ujung-ke-ujung

## Konteks bisnis

- Diinisiasi ketika pengirim asli mengidentifikasi kesalahan sebelum atau sesudah penyelesaian
- Digunakan dalam skenario penipuan di mana pembalikan cepat diperlukan
- Mendukung pembalikan penuh dan sebagian dari jumlah pembayaran asli
- Membawa kode alasan pembalikan terstruktur untuk pemrosesan hilir

## Konteks CBPR+ dan skema

- Dibedakan dari pacs.004 berdasarkan arah — pembalikan mengalir maju dari pengirim asal, pengembalian mengalir mundur dari penerima manfaat
- CBPR+ memerlukan pemasangan dengan pengidentifikasi pesan asli untuk pencocokan otomatis
- Kode alasan terstruktur menggantikan narasi teks bebas dari pesan MT warisan
- Semakin banyak digunakan dalam alur kerja penarikan kembali pembayaran instan dan pencegahan penipuan

## Alur pesan

Agen yang memberi instruksi (pengirim asli) mengirim pacs.007 maju melalui rantai pembayaran untuk membalikkan pembayaran yang sebelumnya diinstruksikan. Setiap agen memproses instruksi pembalikan dan menyesuaikan penyelesaian sesuai kebutuhan.

## Pesan terkait

- [`pacs.008.001.13`](/id/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/id/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report

