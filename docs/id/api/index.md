---
title: API | Bahasa Indonesia
description: Dukungan alur kerja REST dan CLI di Pacs008.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# API

Proyek ini menyediakan REST API dan CLI untuk alur kerja pemrosesan pesan pembayaran operasional.

## Kemampuan API

- endpoint kesehatan dan kesiapan
- validasi data sebelum pembuatan XML
- pembuatan sinkron untuk alur kerja langsung
- eksekusi tugas asinkron untuk pipeline yang lebih lama
- file yang dihasilkan dapat diunduh melalui alur penyelesaian tugas

## Kemampuan CLI

- menunjuk ke file sumber dan versi pesan
- memvalidasi terhadap XSD sebelum pengiriman
- menghasilkan XML ke direktori output yang ramah pipeline
- cocok dengan tugas CI, jadwal batch, dan peralatan operator lokal

## Fokus implementasi

Pacs008 dirancang untuk penggunaan operasional di seluruh tim pemrosesan pembayaran:

- validasi pra-penerbangan sebelum pembuatan pesan
- pemilihan skema dan versi saat runtime
- alur pembuatan asinkron untuk layanan internal
- output deterministik untuk pengujian dan jejak audit

## Persyaratan kualitas data untuk 2026

Persyaratan kualitas pesan semakin ketat di seluruh industri, terutama seputar:

- identifikasi pihak dan agen
- kesiapan alamat terstruktur atau hibrida
- penanganan remitansi dan referensi yang lebih kaya
- transparansi di seluruh rantai pembayaran serial

API dan CLI dirancang untuk menjadikan pemeriksaan tersebut bagian dari alur kerja alih-alih langkah tinjauan manual.

