---
title: Jenis Pesan | Bahasa Indonesia
description: Definisi dan versi pesan pacs ISO 20022 yang didukung.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Jenis Pesan

pacs008 mencakup definisi pesan inti pacs.008 dan pesan terkait yang digunakan dalam alur orkestrasi dan rekonsiliasi.

## Dukungan yang disertakan

| Jenis pesan | Deskripsi |
|---|---|
| [`pacs.002.001.12`](/id/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/id/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/id/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/id/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/id/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/id/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/id/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/id/pacs.028.001.05/) | FI to FI Payment Status Request |

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

