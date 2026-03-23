---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi...
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

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 27 February 2025; tautan sumber tercantum di bawah.

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

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan | Digunakan untuk mengonfirmasi penyelesaian atau melaporkan penolakan transfer kredit, debit langsung, dan pengembalian pembayaran |
| **OrgnlGrpInfAndSts** — Informasi Grup Asli dan Status untuk pelaporan tingkat massal | Memungkinkan rekonsiliasi antara agen yang memberi instruksi dan agen yang diinstruksikan |
| **TxInfAndSts** — Informasi Transaksi dan Status untuk hasil transaksi individual | Diperlukan dalam alur CBPR+ untuk mengakui pemrosesan pesan pacs.008 dan pacs.009 |
| **StsRsnInf** — Informasi Alasan Status dengan kode alasan terstruktur | Mendukung pelaporan status baik tingkat grup massal maupun tingkat transaksi individual |
| **OrgnlTxRef** — Referensi Transaksi Asli yang menghubungkan kembali ke instruksi sumber | Agen yang diinstruksikan (penerima) mengirim pacs.002 kembali ke agen yang memberi instruksi (pengirim) untuk mengonfirmasi penerimaan, penyelesaian, atau penolakan instruksi pembayaran yang diterima seperti pacs.008 atau pacs.009. |

## Konteks CBPR+ dan skema

- Menggantikan narasi status MT199 dan field 79 dalam pesan MT
- CBPR+ mewajibkan pacs.002 untuk semua komunikasi status pembayaran
- Kode alasan terstruktur menggantikan penjelasan penolakan teks bebas
- Integrasi pelacakan SWIFT gpi memerlukan pacs.002 untuk transparansi ujung-ke-ujung

## Alur pesan

Agen yang diinstruksikan (penerima) mengirim pacs.002 kembali ke agen yang memberi instruksi (pengirim) untuk mengonfirmasi penerimaan, penyelesaian, atau penolakan instruksi pembayaran yang diterima seperti pacs.008 atau pacs.009.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Financial Institution Credit Transfer | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |
| [`pacs.028.001.05`](/id/pacs.028.001.05/) | FI to FI Payment Status Request | Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta. |

