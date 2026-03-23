---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nama ISO** | FinancialInstitutionCreditTransferV10 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 10 |

## Ikhtisar

Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 27 February 2025; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah penyelesaian antarbank
- **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya
- **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya
- **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian

## Konteks bisnis

- Digunakan untuk transfer rekening sendiri bank-ke-bank dan pembayaran cover
- Mendukung manajemen likuiditas antara mitra perbankan koresponden
- Membawa kaki cover dari transfer kredit pelanggan yang diselesaikan melalui metode cover
- Memungkinkan operasi perbendaharaan dan pendanaan antara lembaga keuangan

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian | Digunakan untuk transfer rekening sendiri bank-ke-bank dan pembayaran cover |
| **CdtTrfTxInf** — Informasi Transaksi Transfer Kredit dengan jumlah penyelesaian antarbank | Mendukung manajemen likuiditas antara mitra perbankan koresponden |
| **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya | Membawa kaki cover dari transfer kredit pelanggan yang diselesaikan melalui metode cover |
| **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya | Memungkinkan operasi perbendaharaan dan pendanaan antara lembaga keuangan |
| **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian | Lembaga debitur mengirim pacs.009 ke lembaga kreditur untuk mentransfer dananya sendiri. Untuk pembayaran metode cover, pacs.009 menyediakan kaki pendanaan sementara pacs.008 membawa instruksi pelanggan melalui jalur terpisah. |

## Konteks CBPR+ dan skema

- Menggantikan MT202 dan MT202COV untuk transfer antar lembaga
- Alur metode cover memasangkan pacs.009 dengan instruksi pelanggan pacs.008 yang mendasari
- Data pihak terstruktur dan identifikasi LEI semakin diperlukan
- SWIFT gpi mencakup pacs.009 untuk transparansi perbankan koresponden

## Alur pesan

Lembaga debitur mengirim pacs.009 ke lembaga kreditur untuk mentransfer dananya sendiri. Untuk pembayaran metode cover, pacs.009 menyediakan kaki pendanaan sementara pacs.008 membawa instruksi pelanggan melalui jalur terpisah.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.010.001.05`](/id/pacs.010.001.05/) | Financial Institution Direct Debit | Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain. |

