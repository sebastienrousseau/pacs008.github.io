---
title: pacs.003.001.09 | Direct Debit Pelanggan FI ke FI | pacs008
description: Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Direct Debit Pelanggan FI ke FI

| | |
|---|---|
| **Nama ISO** | FIToFICustomerDirectDebitV09 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 9 |

## Ikhtisar

Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

## Elemen data utama

- **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian
- **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah dan pihak-pihak
- **Cdtr** — Identifikasi kreditur dan rincian rekening
- **CdtrAgt** — Identifikasi Agen Kreditur (lembaga penagih)
- **DbtrAgt** — Identifikasi Agen Debitur (lembaga pembayar)

## Konteks bisnis

- Mendukung skema debit langsung SEPA Core dan B2B
- Digunakan untuk penagihan pembayaran berulang seperti langganan, tagihan utilitas, dan pembayaran cicilan pinjaman
- Memerlukan referensi mandat yang valid antara debitur dan kreditur
- Memungkinkan penagihan massal beberapa instruksi debit langsung dalam satu pesan

| Elemen data utama | Konteks bisnis |
|---|---|
| **GrpHdr** — Group Header dengan identifikasi pesan dan informasi penyelesaian | Mendukung skema debit langsung SEPA Core dan B2B |
| **DrctDbtTxInf** — Informasi Transaksi Debit Langsung dengan jumlah dan pihak-pihak | Digunakan untuk penagihan pembayaran berulang seperti langganan, tagihan utilitas, dan pembayaran cicilan pinjaman |
| **Cdtr** — Identifikasi kreditur dan rincian rekening | Memerlukan referensi mandat yang valid antara debitur dan kreditur |
| **CdtrAgt** — Identifikasi Agen Kreditur (lembaga penagih) | Memungkinkan penagihan massal beberapa instruksi debit langsung dalam satu pesan |
| **DbtrAgt** — Identifikasi Agen Debitur (lembaga pembayar) | Agen kreditur menginisiasi pacs.003 menuju agen debitur untuk menagih dana. Agen debitur memvalidasi mandat, memeriksa cakupan rekening, dan menyelesaikan atau mengembalikan transaksi. |

## Konteks CBPR+ dan skema

- Persyaratan alamat terstruktur dan identifikasi pihak berlaku sama untuk debit langsung
- Data terkait mandat harus sepenuhnya terstruktur mulai November 2026
- Menggantikan format debit langsung gaya MT104 warisan dalam alur lintas batas
- Validasi identifikasi skema kreditur semakin ditegakkan

## Alur pesan

Agen kreditur menginisiasi pacs.003 menuju agen debitur untuk menagih dana. Agen debitur memvalidasi mandat, memeriksa cakupan rekening, dan menyelesaikan atau mengembalikan transaksi.

## Tabel perbedaan versi

| Rentang versi | Mengapa ini penting | Kesimpulan implementasi |
|---|---|---|
| pacs.003.001.09 | Implementasi saat ini di pacs008 | Berguna untuk pemodelan referensi debit langsung dalam proyek saat ini. |
| pacs.003.001.10-11 | Revisi katalog berikutnya | Periksa revisi yang lebih baru untuk pembaruan mandat, status, dan interoperabilitas sebelum penggunaan pada implementasi baru. |

## Contoh XML beranotasi

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Komentar bidang

- `EndToEndId`: Pisahkan pengenal mandat dan penagihan dari referensi faktur bisnis.
- `IntrBkSttlmAmt`: Validasi ketepatan jumlah debit dan aturan mata uang sebelum menghasilkan XML.
- `Dbtr` / `Cdtr`: Keberhasilan debit langsung sering lebih bergantung pada kualitas rekening dan mandat daripada pada struktur XML.

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Retur Pembayaran | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.007.001.11`](/id/pacs.007.001.11/) | Pembalikan Pembayaran FI ke FI | Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli. |
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | Laporan Status Pembayaran FI ke FI | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |

