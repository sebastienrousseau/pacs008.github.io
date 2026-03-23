---
title: pacs.028.001.05 | FI to FI Payment Status Request | pacs008
description: Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif...
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

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 27 February 2025; tautan sumber tercantum di bawah.

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

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan stempel waktu pembuatan | Memungkinkan pertanyaan status proaktif untuk instruksi pembayaran yang sedang dalam perjalanan |
| **TxInf** — Informasi Transaksi yang mengidentifikasi pembayaran yang akan ditanyakan | Mendukung tim operasi yang menyelidiki pembayaran yang tertunda atau hilang |
| **OrgnlGrpInf** — Informasi Grup Asli yang merujuk pesan sumber | Melengkapi pacs.002 dengan menginisiasi komunikasi status alih-alih menunggu |
| **OrgnlInstrId** — Identifikasi Instruksi Asli dari pembayaran sumber | Digunakan dalam alur kerja penanganan pengecualian dan pemantauan SLA |
| **OrgnlEndToEndId** — Identifikasi Ujung ke Ujung Asli untuk ketertelusuran | Agen yang memberi instruksi mengirim pacs.028 ke agen yang diinstruksikan untuk meminta status pembayaran tertentu. Agen yang diinstruksikan merespons dengan pacs.002 yang berisi status pemrosesan terkini. |

## Konteks CBPR+ dan skema

- Menggantikan pola pertanyaan status MT199 dan kueri pesan SWIFT manual
- CBPR+ mendukung permintaan status terstruktur yang ditautkan ke pengidentifikasi pesan asli
- Pelacakan berbasis UETR melalui gpi mengurangi kebutuhan pertanyaan manual
- Semakin terintegrasi ke dalam dasbor operasi pembayaran otomatis

## Alur pesan

Agen yang memberi instruksi mengirim pacs.028 ke agen yang diinstruksikan untuk meminta status pembayaran tertentu. Agen yang diinstruksikan merespons dengan pacs.002 yang berisi status pemrosesan terkini.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Financial Institution Credit Transfer | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |

