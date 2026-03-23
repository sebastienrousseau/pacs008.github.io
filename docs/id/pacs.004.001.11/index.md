---
title: pacs.004.001.11 | Payment Return | pacs008
description: Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran...
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

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 27 February 2025; tautan sumber tercantum di bawah.

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

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan | Menangani pengembalian pasca-penyelesaian ketika rekening penerima manfaat tidak dapat dikreditkan |
| **TxInf** — Informasi Transaksi dengan jumlah pengembalian dan pihak-pihak | Mendukung skenario penarikan kembali di mana pengirim asal meminta pengembalian dana |
| **OrgnlGrpInf** — Informasi Grup Asli yang menghubungkan ke pesan sumber | Membawa kode alasan pengembalian terstruktur untuk transparansi regulasi dan operasional |
| **RtrRsnInf** — Informasi Alasan Pengembalian dengan kode alasan terstruktur | Berlaku untuk pengembalian transfer kredit (pacs.008) dan pengembalian debit langsung (pacs.003) |
| **OrgnlTxRef** — Referensi Transaksi Asli untuk pencocokan dan rekonsiliasi | Agen yang diinstruksikan mengirim pacs.004 kembali melalui rantai pembayaran untuk mengembalikan dana yang sebelumnya telah diselesaikan. Setiap agen dalam rantai memproses pengembalian dan mengkreditkan kembali rekening yang relevan. |

## Konteks CBPR+ dan skema

- Menggantikan MT103 RETURN dan pesan pengembalian metode cover
- Kode alasan pengembalian distandarkan dan dapat dibaca mesin berdasarkan ISO 20022
- CBPR+ memerlukan data referensi transaksi asli yang lengkap untuk pencocokan
- Pelacakan SWIFT gpi diperluas ke transaksi pengembalian untuk visibilitas ujung-ke-ujung

## Alur pesan

Agen yang diinstruksikan mengirim pacs.004 kembali melalui rantai pembayaran untuk mengembalikan dana yang sebelumnya telah diselesaikan. Setiap agen dalam rantai memproses pengembalian dan mengkreditkan kembali rekening yang relevan.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.003.001.09`](/id/pacs.003.001.09/) | FI to FI Customer Direct Debit | Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur. |
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |

