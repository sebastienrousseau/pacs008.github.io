---
title: pacs.008.001.13 | Transfer Kredit Pelanggan FI ke FI | pacs008
description: Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Transfer Kredit Pelanggan FI ke FI

| | |
|---|---|
| **Nama ISO** | FIToFICustomerCreditTransferV13 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2023 |
| **Versi** | 13 |

## Ikhtisar

Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

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

## Tabel perbedaan versi

| Rentang versi | Mengapa ini penting | Kesimpulan implementasi |
|---|---|---|
| pacs.008.001.01-07 | Revisi awal | Terutama berguna untuk analisis migrasi dari sistem lama dan konteks riwayat versi. |
| pacs.008.001.08-12 | Revisi modern sebelum versi saat ini | Inilah revisi yang paling mungkin muncul dalam proyek migrasi atau koeksistensi terbaru. |
| pacs.008.001.13 | Revisi katalog saat ini | Gunakan ini untuk perencanaan versi saat ini, sambil tetap memvalidasi pedoman penggunaan skema dan kesiapan pihak lawan. |

## Contoh XML beranotasi

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Komentar bidang

- `MsgId`: Ini harus mengidentifikasi envelope pesan, bukan referensi pembayaran pelanggan akhir.
- `EndToEndId`: Jaga keterlacakan yang terlihat oleh pelanggan tetap stabil di seluruh sistem lanjutan bila memungkinkan.
- `UETR`: Gunakan ini secara konsisten dalam lingkungan lintas batas dan yang menuntut pelacakan tinggi; jangan hasilkan secara ad hoc pada tahap proses berikutnya.
- `IntrBkSttlmAmt`: Validasi jumlah dan mata uang menggunakan aturan bisnis sebelum validasi skema.
- `Dbtr` / `Cdtr`: Kualitas pihak, struktur alamat, dan pengenal biasanya menjadi penentu utama tingkat perbaikan.

## Bandingkan pacs.008 vs pacs.009

| Dimensi | pacs.008.001.13 | Pesan pembanding |
|---|---|---|
| Tujuan utama | Transfer kredit nasabah | Transfer kredit rekening milik institusi sendiri atau tahap penutup pendanaan |
| Pemilik bisnis | Operasi pembayaran nasabah | Operasi tresuri / perbankan koresponden / pendanaan |
| Pasangan umum | pacs.002, pacs.004, pacs.007, pacs.028 | aliran pacs.002, pacs.004, dan kadang-kadang aliran pacs.008 yang terkait |
| Asumsi keliru yang harus dihindari | Bahwa semua transfer antarbank termasuk di sini | Bahwa ini dapat menggantikan instruksi transfer kredit nasabah |

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

| Versi | |
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
| `pacs.008.001.13` | **Saat ini** |

## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | Laporan Status Pembayaran FI ke FI | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Retur Pembayaran | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Transfer Kredit Antar Lembaga Keuangan | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |

