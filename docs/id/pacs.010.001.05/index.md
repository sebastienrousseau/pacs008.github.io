---
title: pacs.010.001.05 | Direct Debit Antar Lembaga Keuangan | pacs008
description: Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Direct Debit Antar Lembaga Keuangan

| | |
|---|---|
| **Nama ISO** | FinancialInstitutionDirectDebitV05 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 5 |

## Ikhtisar

Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah penagihan
- **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya
- **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya
- **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian

## Konteks bisnis

- Mendukung penagihan debit langsung antarbank antara lembaga keuangan
- Digunakan untuk penagihan biaya, margin call, dan kewajiban penyelesaian institusional
- Memerlukan pengaturan bilateral yang telah disepakati sebelumnya antara lembaga peserta
- Penting untuk manajemen kas institusional dan siklus penyelesaian antarbank

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian | Mendukung penagihan debit langsung antarbank antara lembaga keuangan |
| **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah penagihan | Digunakan untuk penagihan biaya, margin call, dan kewajiban penyelesaian institusional |
| **Cdtr / CdtrAgt** — Identifikasi lembaga kreditur dan agennya | Memerlukan pengaturan bilateral yang telah disepakati sebelumnya antara lembaga peserta |
| **Dbtr / DbtrAgt** — Identifikasi lembaga debitur dan agennya | Penting untuk manajemen kas institusional dan siklus penyelesaian antarbank |
| **IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank dalam mata uang penyelesaian | Lembaga kreditur mengirim pacs.010 ke lembaga debitur untuk menagih dana berdasarkan pengaturan yang telah disepakati sebelumnya. Lembaga debitur memvalidasi permintaan dan menyelesaikan atau menolak debit langsung. |

## Konteks CBPR+ dan skema

- Menggantikan elemen MT204 untuk pemrosesan debit langsung antarbank
- Identifikasi pihak terstruktur mengikuti persyaratan yang sama seperti pesan pacs lainnya
- Validasi pengidentifikasi institusional (BIC, LEI) bersifat wajib
- Termasuk dalam peta jalan adopsi ISO 20022 penuh di seluruh infrastruktur pasar

## Alur pesan

Lembaga kreditur mengirim pacs.010 ke lembaga debitur untuk menagih dana berdasarkan pengaturan yang telah disepakati sebelumnya. Lembaga debitur memvalidasi permintaan dan menyelesaikan atau menolak debit langsung.

## Tabel perbedaan versi

| Rentang versi | Mengapa ini penting | Kesimpulan implementasi |
|---|---|---|
| pacs.010.001.05 | Implementasi saat ini di pacs008 | Menjadi titik acuan untuk dukungan debit langsung antar lembaga dalam proyek saat ini. |
| pacs.010.001.06 | Revisi katalog berikutnya | Tinjau sebelum mengadopsi persyaratan infrastruktur yang lebih baru. |

## Contoh XML beranotasi

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Komentar bidang

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Jumlah debit langsung antar lembaga sering memerlukan kontrol toleransi bilateral yang eksplisit.
- `Cdtr` / `Dbtr`: Catat peran institusi dengan jelas; ini bukan model debit untuk nasabah ritel.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Transfer Kredit Antar Lembaga Keuangan | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | Laporan Status Pembayaran FI ke FI | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.003.001.09`](/id/pacs.003.001.09/) | Direct Debit Pelanggan FI ke FI | Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur. |

