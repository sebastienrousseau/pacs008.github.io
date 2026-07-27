---
title: "Kebijakan editorial | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: id-ID
lastUpdated: true
image: /logo.webp
---

# Kebijakan editorial

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 katalog definisi pesan](https://www.iso20022.org/iso-20022-message-definitions) untuk spesifikasi pesan dan riwayat versi.
- [SWIFT CBPR+ panduan penggunaan](https://www.swift.com/standards/iso-20022) untuk konteks pembayaran lintas batas.
- [EPC SEPA buku aturan transfer kredit](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) untuk aturan transfer kredit euro.
- [EPC SEPA buku aturan transfer kredit instan](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) untuk aturan pembayaran instan.

## Proses peninjauan konten

Setiap halaman di pacs008.com menjalani peninjauan terstruktur sebelum publikasi. Konten baru dimulai dari draf berdasarkan materi sumber primer. Draf diperiksa akurasi teknisnya terhadap katalog pesan ISO 20022 dan dokumentasi skema yang relevan. Nomor versi, pengidentifikasi registrasi, dan definisi bidang diverifikasi terhadap entri katalog resmi.

Setelah peninjauan awal, konten menjalani pemeriksaan struktural untuk memastikan konsistensi dengan halaman yang ada. Navigasi, referensi silang, dan terminologi distandarisasi di seluruh situs. Tanggal peninjauan yang ditampilkan pada setiap halaman pesan mencerminkan verifikasi terbaru terhadap sumber primer.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Akurasi teknis

Konten teknis mengikuti definisi pesan ISO 20022 sebagaimana dipublikasikan dalam katalog resmi. Nama bidang, tipe data, dan aturan kardinalitas sesuai dengan skema XSD untuk setiap versi pesan. Jika penggunaan khusus skema berbeda dari standar dasar, dokumentasi skema yang relevan dikutip secara langsung.

Contoh kode dalam dokumentasi API diuji terhadap rilis terkini toolkit pacs008. Perintah CLI, endpoint API, dan metode pustaka Python mencerminkan paket yang dipublikasikan di PyPI. Contoh diperbarui dengan setiap rilis baru agar tetap sinkron dengan toolkit.

## Metodologi penerjemahan

pacs008.com tersedia dalam 22 bahasa. Semua konten berasal dari bahasa Inggris. Halaman terjemahan dihasilkan dari materi sumber bahasa Inggris yang telah ditinjau menggunakan skrip pembangunan yang mempertahankan struktur halaman, hierarki judul, dan target tautan di semua lokal.

Istilah teknis, pengidentifikasi ISO, dan kode standar tetap tidak diterjemahkan untuk menghindari ambiguitas. Istilah seperti pacs.008.001.13, BIC, IBAN, dan CBPR+ muncul dalam bentuk standarnya di setiap bahasa. Konten non-teknis diterjemahkan agar terbaca secara alami di setiap bahasa sasaran. Terjemahan ditinjau untuk konsistensi struktural dan diregenerasi ketika materi sumber bahasa Inggris berubah.

## Frekuensi pembaruan

Konten diperbarui sebagai respons terhadap tiga pemicu. Pertama, ketika ISO 20022 menerbitkan versi katalog pesan baru yang memengaruhi definisi pesan pacs. Kedua, ketika SWIFT merilis panduan penggunaan CBPR+ yang diperbarui atau tenggat migrasi. Ketiga, ketika EPC memperbarui buku aturan transfer kredit SEPA atau transfer kredit instan SEPA.

Toolkit pacs008 mengikuti semantic versioning. Setiap rilis baru tercermin dalam dokumentasi API dan changelog. Situs dibangun ulang dan di-deploy ulang dengan setiap pembaruan konten atau toolkit.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
