---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nama ISO** | FIToFICustomerCreditTransferV13 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2023 |
| **Versi** | 13 |

## Ikhtisar

Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 27 February 2025; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan ID pesan, tanggal pembuatan, jumlah transaksi, dan informasi penyelesaian
- **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah, biaya, dan tujuan
- **Dbtr / DbtrAgt** — Identifikasi dan rincian rekening Debitur dan Agen Debitur
- **Cdtr / CdtrAgt** — Identifikasi dan rincian rekening Kreditur dan Agen Kreditur
- **RmtInf** — Informasi Remitansi untuk referensi pembayaran terstruktur atau tidak terstruktur

## Konteks bisnis

- Pesan utama untuk transfer kredit lintas batas dan domestik yang diinisiasi pelanggan
- Digunakan di seluruh SEPA SCT, SEPA Instant, CBPR+, dan sistem kliring nasional
- Membawa informasi remitansi terstruktur untuk mendukung rekonsiliasi langsung otomatis
- Mendukung metode penyelesaian serial, cover, dan langsung untuk rantai pembayaran multi-kaki

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan ID pesan, tanggal pembuatan, jumlah transaksi, dan informasi penyelesaian | Pesan utama untuk transfer kredit lintas batas dan domestik yang diinisiasi pelanggan |
| **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah, biaya, dan tujuan | Digunakan di seluruh SEPA SCT, SEPA Instant, CBPR+, dan sistem kliring nasional |
| **Dbtr / DbtrAgt** — Identifikasi dan rincian rekening Debitur dan Agen Debitur | Membawa informasi remitansi terstruktur untuk mendukung rekonsiliasi langsung otomatis |
| **Cdtr / CdtrAgt** — Identifikasi dan rincian rekening Kreditur dan Agen Kreditur | Mendukung metode penyelesaian serial, cover, dan langsung untuk rantai pembayaran multi-kaki |
| **RmtInf** — Informasi Remitansi untuk referensi pembayaran terstruktur atau tidak terstruktur | Agen debitur membuat pacs.008 dan mengirimkannya ke agen kreditur (langsung atau melalui perantara). Setiap agen dalam rantai memvalidasi, memperkaya, dan meneruskan instruksi hingga agen kreditur mengkreditkan rekening penerima manfaat. |

## Konteks CBPR+ dan skema

- Menggantikan MT103 dan MT103+ untuk transfer kredit pelanggan lintas batas
- Tenggat alamat terstruktur November 2026 berlaku untuk semua alamat pos pihak
- SWIFT gpi memerlukan pacs.008 untuk pelacakan ujung-ke-ujung berbasis UETR
- 13 revisi mencerminkan evolusi skema yang berkelanjutan di seluruh infrastruktur pasar

## Alur pesan

Agen debitur membuat pacs.008 dan mengirimkannya ke agen kreditur (langsung atau melalui perantara). Setiap agen dalam rantai memvalidasi, memperkaya, dan meneruskan instruksi hingga agen kreditur mengkreditkan rekening penerima manfaat.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Versi yang didukung

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Payment Return | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Financial Institution Credit Transfer | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |

