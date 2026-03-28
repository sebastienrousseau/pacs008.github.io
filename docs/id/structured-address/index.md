---
title: "Batas waktu alamat terstruktur November 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: id-ID
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Audit kualitas data alamat saat ini di seluruh catatan debitur, kreditur, dan agen."
  - name: "Step 2"
    text: "Petakan bidang alamat tidak terstruktur yang ada ke format terstruktur (jalan, gedung, kode pos, kota, negara)."
  - name: "Step 3"
    text: "Tambahkan validasi alamat ke pipeline pra-pembuatan menggunakan pacs008."
  - name: "Step 4"
    text: "Uji dengan data pembayaran representatif sebelum tenggat waktu."
---

# Batas waktu alamat terstruktur November 2026

SWIFT mewajibkan alamat pos terstruktur dalam pesan pembayaran lintas batas mulai November 2026. Apa yang berubah, pesan mana yang terpengaruh, dan bagaimana pacs008 membantu tim mempersiapkan diri.

## Apa yang berubah

SWIFT CBPR+ beralih dari alamat pos tidak terstruktur ke bidang alamat terstruktur dalam pesan pembayaran lintas batas. Setelah tenggat waktu November 2026, bidang alamat pihak utama harus menggunakan format terstruktur dengan elemen terpisah untuk nama jalan, nomor gedung, kode pos, kota, dan negara.

## Mengapa ini penting

- Alamat tidak terstruktur meningkatkan tingkat perbaikan manual dan menunda pemrosesan langsung.
- Alamat terstruktur meningkatkan akurasi penyaringan sanksi dengan memisahkan nama pihak dari data lokasi.
- Persyaratan regulasi dan skema semakin mewajibkan data terstruktur untuk kepatuhan dan pelaporan.
- Tingkat penolakan pembayaran lintas batas meningkat ketika kualitas alamat tidak memenuhi ekspektasi pihak lawan.

## Pesan mana yang terpengaruh

- **pacs.008** — alamat pos debitur dan kreditur dalam transfer kredit nasabah.
- **pacs.009** — alamat institusi dalam transfer kredit antar lembaga keuangan dan pembayaran penutup.
- **pacs.004** — alamat pihak dalam pengembalian pembayaran.
- **pacs.003** — alamat kreditur dan debitur dalam debit langsung nasabah.

## Bagaimana pacs008 membantu

- Memvalidasi bidang alamat pos terstruktur dan hibrida sebelum pembuatan XML.
- Menandai data alamat tidak terstruktur yang akan gagal setelah tenggat waktu.
- Mendukung format hibrida sebelum tenggat waktu dan format terstruktur saja setelah tenggat waktu.
- Mengintegrasikan pemeriksaan kualitas alamat ke dalam pipeline CI dan alur kerja validasi batch.

## Lini Masa

- **Maret 2023** — SWIFT CBPR+ diluncurkan dengan ISO 20022 untuk pembayaran lintas batas.
- **November 2025** — periode koeksistensi untuk instruksi pembayaran MT dan MX berakhir.
- **November 2026** — persyaratan alamat pos terstruktur berlaku untuk pesan CBPR+.

## Apa yang harus dilakukan sekarang

- Audit kualitas data alamat saat ini di seluruh catatan debitur, kreditur, dan agen.
- Petakan bidang alamat tidak terstruktur yang ada ke format terstruktur (jalan, gedung, kode pos, kota, negara).
- Tambahkan validasi alamat ke pipeline pra-pembuatan menggunakan pacs008.
- Uji dengan data pembayaran representatif sebelum tenggat waktu.

## Referensi

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

