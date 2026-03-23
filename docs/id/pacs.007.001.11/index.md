---
title: pacs.007.001.11 | Pembalikan Pembayaran FI ke FI | pacs008
description: Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Pembalikan Pembayaran FI ke FI

| | |
|---|---|
| **Nama ISO** | FIToFIPaymentReversalV11 |
| **Status pendaftaran** | Registered |
| **Tahun** | 2019 |
| **Versi** | 11 |

## Ikhtisar

Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026. Tanggal referensi katalog ISO 20022: 2025-02-27; tautan sumber tercantum di bawah.

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

## Tabel perbedaan versi

| Rentang versi | Mengapa ini penting | Kesimpulan implementasi |
|---|---|---|
| pacs.007.001.11 | Implementasi saat ini di pacs008 | Landasan yang baik untuk pemodelan alur pembalikan pembayaran. |
| pacs.007.001.12-13 | Revisi katalog berikutnya | Periksa revisi yang lebih baru untuk keselarasan dengan infrastruktur pasar saat ini. |

## Contoh XML beranotasi

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Komentar bidang

- `MsgId`: Pesan pembalikan itu sendiri memerlukan pengenal tersendiri yang aman untuk keperluan audit.
- `OrgnlInstrId`: Pertahankan referensi pembayaran asli agar rekonsiliasi tidak terputus.
- `RvslRsnInf`: Gunakan alasan pembalikan terstruktur agar kasus penipuan, kesalahan, dan pembayaran duplikat dapat dirutekan secara berbeda.

## Bandingkan pacs.007 vs pacs.004

| Dimensi | pacs.007.001.11 | Pesan pembanding |
|---|---|---|
| Tujuan utama | Membalik pembayaran yang sebelumnya telah diinstruksikan | Mengembalikan dana yang sudah diselesaikan |
| Diinisiasi oleh | Pihak pemberi instruksi asal | Pihak penerima / penerima manfaat |
| Arah alur | Maju melalui rantai | Kembali melalui rantai |
| Paling cocok untuk | Penanganan pembalikan karena recall, kesalahan, atau penipuan | Penanganan pengembalian pasca-penyelesaian |

## Referensi primer

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Pesan terkait
| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | Transfer Kredit Pelanggan FI ke FI | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Retur Pembayaran | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | Laporan Status Pembayaran FI ke FI | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |

