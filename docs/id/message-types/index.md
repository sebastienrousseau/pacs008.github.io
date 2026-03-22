---
title: Jenis Pesan | Bahasa Indonesia
description: Definisi dan versi pesan pacs ISO 20022 yang didukung.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Jenis Pesan

Pacs008 mencakup definisi pesan inti pacs.008 dan pesan terkait yang digunakan dalam alur orkestrasi dan rekonsiliasi.

## Dukungan yang disertakan

- `pacs.002.001.12`
- `pacs.003.001.09`
- `pacs.004.001.11`
- `pacs.007.001.11`
- `pacs.008.001.01`
- `pacs.008.001.02`
- `pacs.008.001.03`
- `pacs.008.001.04`
- `pacs.008.001.05`
- `pacs.008.001.06`
- `pacs.008.001.07`
- `pacs.008.001.08`
- `pacs.008.001.09`
- `pacs.008.001.10`
- `pacs.008.001.11`
- `pacs.008.001.12`
- `pacs.008.001.13`
- `pacs.009.001.10`
- `pacs.010.001.05`
- `pacs.028.001.05`

## Model pengiriman

Setiap jenis pesan yang didukung dilengkapi dengan aset template dan logika validasi sehingga tim dapat menstandarkan pembuatan dan pengujian regresi di berbagai saluran.

## Konteks pasar 2026

- **SEPA SCT / SCT Inst**: pacs.008 tetap sentral untuk pertukaran transfer kredit dan pemrosesan pembayaran instan.
- **CBPR+**: pacs.008 terus menggantikan muatan lintas batas gaya MT103 dengan data terstruktur yang lebih kaya.
- **Alamat terstruktur**: panduan pasar saat ini menunjukkan peralihan November 2026 dari alamat pos yang sepenuhnya tidak terstruktur.
- **Metode serial dan STP**: rantai bank-ke-bank multi-tahap tetap penting, dan varian pemrosesan langsung tetap penting untuk efisiensi operasional.

## Kemampuan operasional

Pacs008 menyediakan pembuatan dan validasi berbasis template di seluruh revisi definisi pesan yang didukung:

- membandingkan versi
- menguji regresi pembaruan skema
- memperkuat data pesan pembayaran keluar sebelum rilis
- mendukung tim produk, operasi, dan migrasi dari satu basis kode

