---
title: Panduan pemilihan pesan | pacs008
description: Pilih pesan pacs ISO 20022 yang tepat untuk pembuatan, pelaporan status, retur, reversal, dan permintaan status.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Panduan pemilihan pesan

Pilih keluarga pacs berdasarkan peristiwa bisnis terlebih dahulu, lalu berdasarkan skema dan model operasional.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026 menggunakan materi publik ISO 20022, EPC, dan Swift yang dirujuk pada halaman ini.

## Matriks keputusan cepat

| Jenis pesan | Deskripsi | Ikhtisar |
|---|---|---|
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.003.001.09`](/id/pacs.003.001.09/) | FI to FI Customer Direct Debit | Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur. |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Payment Return | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.007.001.11`](/id/pacs.007.001.11/) | FI to FI Payment Reversal | Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli. |
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Financial Institution Credit Transfer | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |
| [`pacs.010.001.05`](/id/pacs.010.001.05/) | Financial Institution Direct Debit | Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain. |
| [`pacs.028.001.05`](/id/pacs.028.001.05/) | FI to FI Payment Status Request | Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta. |

## Titik perbandingan umum

| Perbandingan | Perbedaan utama |
|---|---|
| `pacs.008` vs `pacs.009` | Pembayaran nasabah versus perpindahan institusi atau cover |
| `pacs.004` vs `pacs.007` | Retur dari pihak penerima versus reversal dari pihak pengirim |
| `pacs.002` vs `pacs.028` | Laporan status versus permintaan status |

## Halaman pesan yang didukung

- [`pacs.002.001.12`](/id/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/id/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/id/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/id/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/id/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/id/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/id/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/id/pacs.028.001.05/) — FI to FI Payment Status Request

