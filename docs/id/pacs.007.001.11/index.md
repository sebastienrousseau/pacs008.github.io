---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran...
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

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 27 February 2025; tautan sumber tercantum di bawah.

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

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan | Diinisiasi ketika pengirim asli mengidentifikasi kesalahan sebelum atau sesudah penyelesaian |
| **TxInf** — Informasi Transaksi dengan jumlah pembalikan dan pihak-pihak | Digunakan dalam skenario penipuan di mana pembalikan cepat diperlukan |
| **OrgnlGrpInf** — Informasi Grup Asli yang merujuk pesan sumber | Mendukung pembalikan penuh dan sebagian dari jumlah pembayaran asli |
| **RvslRsnInf** — Informasi Alasan Pembalikan dengan kode alasan terstruktur | Membawa kode alasan pembalikan terstruktur untuk pemrosesan hilir |
| **OrgnlTxRef** — Referensi Transaksi Asli untuk ketertelusuran ujung-ke-ujung | Agen yang memberi instruksi (pengirim asli) mengirim pacs.007 maju melalui rantai pembayaran untuk membalikkan pembayaran yang sebelumnya diinstruksikan. Setiap agen memproses instruksi pembalikan dan menyesuaikan penyelesaian sesuai kebutuhan. |

## Konteks CBPR+ dan skema

- Dibedakan dari pacs.004 berdasarkan arah — pembalikan mengalir maju dari pengirim asal, pengembalian mengalir mundur dari penerima manfaat
- CBPR+ memerlukan pemasangan dengan pengidentifikasi pesan asli untuk pencocokan otomatis
- Kode alasan terstruktur menggantikan narasi teks bebas dari pesan MT warisan
- Semakin banyak digunakan dalam alur kerja penarikan kembali pembayaran instan dan pencegahan penipuan

## Alur pesan

Agen yang memberi instruksi (pengirim asli) mengirim pacs.007 maju melalui rantai pembayaran untuk membalikkan pembayaran yang sebelumnya diinstruksikan. Setiap agen memproses instruksi pembalikan dan menyesuaikan penyelesaian sesuai kebutuhan.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Payment Return | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |

