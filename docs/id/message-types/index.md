---
title: Jenis Pesan | pacs008 ISO 20022
description: Definisi dan versi pesan pacs ISO 20022 yang didukung. Pembuatan, validasi, orkestrasi API, dan dukungan kepatuhan untuk alur transfer kredit pelanggan...
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Jenis Pesan

pacs008 mencakup definisi pesan inti pacs.008 dan pesan terkait yang digunakan dalam alur orkestrasi dan rekonsiliasi.

> Terakhir ditinjau terhadap sumber primer pada 23 Maret 2026 menggunakan materi publik ISO 20022, EPC, dan Swift yang dirujuk pada halaman ini.

## Dukungan yang disertakan

| Jenis pesan | Deskripsi | Versi | Tahun | Ikhtisar |
|---|---|---|---|---|
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report | `pacs.002.001.12` | 2019 | Pesan pacs.002 dikirim oleh lembaga keuangan untuk melaporkan status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memberikan informasi konfirmasi, penolakan, atau status tertunda untuk transaksi individual dalam pesan pembayaran. |
| [`pacs.003.001.09`](/id/pacs.003.001.09/) | FI to FI Customer Direct Debit | `pacs.003.001.09` | 2019 | Pesan pacs.003 dipertukarkan antara lembaga keuangan untuk mengeksekusi instruksi debit langsung pelanggan. Pesan ini memungkinkan bank kreditur untuk menagih dana dari bank debitur atas nama kreditur. |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Payment Return | `pacs.004.001.11` | 2019 | Pesan pacs.004 digunakan untuk mengembalikan transaksi pembayaran yang sebelumnya telah diselesaikan. Pesan ini membalikkan aliran dana ketika pembayaran tidak dapat diterapkan, dikirim secara keliru, atau sedang ditarik kembali oleh lembaga asal. |
| [`pacs.007.001.11`](/id/pacs.007.001.11/) | FI to FI Payment Reversal | `pacs.007.001.11` | 2019 | Pesan pacs.007 digunakan untuk membalikkan instruksi pembayaran yang sebelumnya dikirim yang belum diselesaikan atau untuk meminta pembalikan pembayaran yang telah diselesaikan. Berbeda dengan pacs.004 (pengembalian), pesan ini diinisiasi oleh agen yang memberi instruksi asli. |
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer | `pacs.008.001.13` | 2023 | Pesan pacs.008 adalah instruksi pembayaran inti yang dipertukarkan antara lembaga keuangan untuk mentransfer dana atas nama pelanggan. Pesan ini membawa informasi debitur, kreditur, jumlah, dan remitansi untuk satu atau lebih transaksi transfer kredit. |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Financial Institution Credit Transfer | `pacs.009.001.10` | 2019 | Pesan pacs.009 digunakan untuk transfer kredit antara lembaga keuangan di mana transfer dilakukan atas nama lembaga itu sendiri bukan atas nama pelanggan. Pesan ini mendukung pendanaan antarbank, pembayaran cover, dan manajemen likuiditas. |
| [`pacs.010.001.05`](/id/pacs.010.001.05/) | Financial Institution Direct Debit | `pacs.010.001.05` | 2019 | Pesan pacs.010 digunakan antara lembaga keuangan untuk transaksi debit langsung pada rekening lembaga itu sendiri. Pesan ini memungkinkan satu lembaga untuk menagih dana langsung dari rekening lembaga lain. |
| [`pacs.028.001.05`](/id/pacs.028.001.05/) | FI to FI Payment Status Request | `pacs.028.001.05` | 2019 | Pesan pacs.028 dikirim oleh lembaga keuangan untuk meminta status instruksi pembayaran yang sebelumnya dikirim. Pesan ini memungkinkan pelacakan proaktif pemrosesan pembayaran tanpa menunggu laporan status yang tidak diminta. |

## Model pengiriman

Setiap jenis pesan yang didukung dilengkapi dengan aset template dan logika validasi sehingga tim dapat menstandarkan pembuatan dan pengujian regresi di berbagai saluran.


## Konteks pasar 2026

- **SEPA SCT / SCT Inst**: pacs.008 tetap sentral untuk pertukaran transfer kredit dan pemrosesan pembayaran instan.
- **CBPR+**: pacs.008 terus menggantikan muatan lintas batas gaya MT103 dengan data terstruktur yang lebih kaya.
- **Alamat terstruktur**: panduan pasar saat ini menunjukkan peralihan November 2026 dari alamat pos yang sepenuhnya tidak terstruktur.
- **Metode serial dan STP**: rantai bank-ke-bank multi-tahap tetap penting, dan varian pemrosesan langsung tetap penting untuk efisiensi operasional.

## Kemampuan operasional

pacs008 menyediakan pembuatan dan validasi berbasis template di seluruh revisi definisi pesan yang didukung:

- membandingkan versi
- menguji regresi pembaruan skema
- memperkuat data pesan pembayaran keluar sebelum rilis
- mendukung tim produk, operasi, dan migrasi dari satu basis kode

