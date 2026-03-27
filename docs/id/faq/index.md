---
title: "Pertanyaan umum tentang ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: id-ID
lastUpdated: true
image: /logo.webp
---

# Pertanyaan umum tentang ISO 20022

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Umum

### Apa itu ISO 20022?

ISO 20022 adalah standar internasional untuk pesan keuangan. Standar ini mendefinisikan bahasa dan model umum untuk pesan pembayaran yang dipertukarkan antar lembaga keuangan. Berbeda dengan format lama seperti SWIFT MT, ISO 20022 menggunakan XML dan mendukung data yang lebih kaya serta terstruktur untuk pihak-pihak, jumlah, dan referensi.

### Apa itu pesan pacs?

Keluarga pesan pacs (payments clearing and settlement) mencakup instruksi pembayaran antarbank, laporan status, pengembalian, pembalikan, dan permintaan. Termasuk pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010, dan pacs.028. Setiap pesan memiliki peran spesifik dalam siklus hidup pembayaran.

### Bagaimana perbedaan pesan pacs dengan pesan SWIFT MT?

Pesan SWIFT MT menggunakan format tag-field datar (misalnya MT103 untuk transfer kredit pelanggan). Pesan pacs menggunakan XML hierarkis dengan struktur data yang lebih kaya. Perbedaan utama mencakup dukungan untuk beberapa transaksi per pesan, identifikasi pihak terstruktur (LEI, beberapa ID), alamat pos terstruktur, dan informasi remitansi terstruktur. MT103 dipetakan ke pacs.008, MT202 dipetakan ke pacs.009, dan teks status MT199 digantikan oleh pacs.002.

### Apa hubungan antara pesan pain dan pacs?

Pesan pain (payment initiation) berjalan antara pelanggan dan bank mereka. Pesan pacs berjalan antar bank. Inisiasi transfer kredit pelanggan pain.001 dari bank debitur menjadi instruksi antarbank pacs.008. Kedua domain berbagi elemen data umum tetapi melayani bagian berbeda dari rantai pembayaran.

## Pemilihan pesan

### Kapan menggunakan pacs.008?

Gunakan pacs.008 untuk instruksi transfer kredit pelanggan antar bank. Pesan ini membawa data pihak debitur dan kreditur, jumlah, informasi remitansi, dan detail penyelesaian. Ini adalah pesan utama untuk mengirim pembayaran pelanggan melalui jaringan antarbank, baik domestik (SEPA) maupun lintas batas (CBPR+).

### Kapan menggunakan pacs.009 daripada pacs.008?

Gunakan pacs.009 untuk transfer rekening sendiri institusi, leg pendanaan, dan pembayaran penutup. Berbeda dengan pacs.008 yang membawa pembayaran pelanggan atas nama debitur, pacs.009 memindahkan dana antar bank atas nama mereka sendiri. Dalam alur penutup, pacs.009 membawa pendanaan sementara pacs.008 membawa instruksi pelanggan pada jalur terpisah.

### Apa perbedaan antara pacs.004 dan pacs.007?

pacs.004 mengembalikan dana yang sudah diselesaikan dari sisi penerima melalui rantai. pacs.007 membalikkan pembayaran dari sisi penginstruksi asli ke depan melalui rantai. Gunakan pacs.004 ketika bank penerima tidak dapat mengkredit dana setelah penyelesaian. Gunakan pacs.007 ketika pengirim menemukan kesalahan, duplikasi, atau penipuan.

### Kapan menggunakan pacs.028 daripada menunggu pacs.002?

Gunakan pacs.028 ketika perlu secara aktif meminta status pembayaran yang belum menerima pembaruan pacs.002 tepat waktu. pacs.002 berbasis peristiwa (agen penerima mengirimnya secara proaktif), sementara pacs.028 berbasis pengecualian (agen penginstruksi memintanya). Gunakan pacs.028 untuk pembaruan pembayaran yang terlambat, tidak jelas, atau hilang, bukan sebagai lalu lintas rutin.

### Apa kegunaan pacs.003?

pacs.003 membawa instruksi debit langsung pelanggan antar bank. Agen kreditur mengirimnya ke agen debitur untuk menagih dana. Memerlukan referensi mandat yang valid dan mendukung skema debit langsung SEPA Core dan B2B. Tidak digunakan untuk transfer kredit atau debit langsung antar institusi pada rekening mereka sendiri.

### Apa kegunaan pacs.010?

pacs.010 menangani debit langsung antar lembaga keuangan pada rekening mereka sendiri. Digunakan untuk penagihan bank-ke-bank seperti biaya, margin call, dan kewajiban serupa berdasarkan perjanjian bilateral. Tidak digunakan untuk debit langsung pelanggan atau transfer kredit.

## Struktur pesan

### Apa itu Group Header (GrpHdr)?

Group Header muncul tepat satu kali per pesan pacs. Berisi pengidentifikasi pesan (MsgId), cap waktu pembuatan (CreDtTm), jumlah transaksi (NbOfTxs), informasi penyelesaian (SttlmInf), dan secara opsional jumlah total penyelesaian antarbank serta informasi tipe pembayaran. Mengidentifikasi amplop pesan, bukan transaksi bisnis individual.

### Apa saja pengidentifikasi pembayaran dalam pacs.008?

pacs.008 menggunakan empat pengidentifikasi utama. MsgId mengidentifikasi amplop pesan dan berubah di setiap hop. InstrId adalah referensi point-to-point antara agen yang berdekatan dan dapat berubah per hop. EndToEndId ditetapkan oleh pengirim asal dan tidak boleh diubah oleh agen mana pun dalam rantai. TxId ditetapkan oleh agen penginstruksi pertama dan tetap konstan dalam ruang antarbank. UETR adalah UUID yang tidak berubah di semua leg untuk pelacakan end-to-end.

### Metode penyelesaian apa yang tersedia?

Empat metode penyelesaian didefinisikan. CLRG menyelesaikan melalui sistem kliring seperti TARGET2, EURO1, atau CHIPS. INDA menyelesaikan pada pembukuan agen yang diinstruksikan di mana agen debitur memiliki rekening. INGA menyelesaikan pada pembukuan agen penginstruksi di mana agen yang diinstruksikan memiliki rekening. COVE menyelesaikan melalui pembayaran penutup terpisah yang dibawa oleh pacs.009.

### Apa arti kode penanggung biaya?

DEBT berarti semua biaya ditanggung debitur (setara MT103 OUR). CRED berarti semua biaya ditanggung kreditur (setara BEN). SHAR berarti biaya dibagi antara agen debitur dan kreditur (setara SHA). SLEV berarti biaya mengikuti aturan tingkat layanan dan wajib untuk transfer kredit SEPA.

## CBPR+ dan migrasi

### Apa itu CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) adalah program SWIFT untuk mengadopsi ISO 20022 dalam pesan pembayaran lintas batas. Mulai beroperasi Maret 2023 dan menggantikan pesan MT dengan padanan pacs. CBPR+ mewajibkan pacs.002 untuk semua komunikasi status, mendukung data pihak yang lebih kaya dan alamat terstruktur, serta menggunakan pelacakan berbasis UETR melalui gpi.

### Apa yang terjadi dengan periode koeksistensi MT/MX?

Periode koeksistensi untuk instruksi pembayaran lintas batas berakhir pada November 2025. Sejak itu, pesan CBPR+ harus menggunakan format ISO 20022 (MX). Layanan penerjemahan yang mengonversi antara MT dan MX selama transisi tidak lagi tersedia untuk alur baru. Bank sekarang harus mengirim dan menerima pesan pacs asli.

### Apa tenggat alamat terstruktur November 2026?

Mulai November 2026, SWIFT CBPR+ mewajibkan alamat pos terstruktur dalam pesan pembayaran lintas batas. Baris alamat tidak terstruktur (AdrLine saja) tidak lagi diterima untuk field pihak utama. Minimal, TwnNm dan Ctry diperlukan, dengan StrtNm dan BldgNb atau PstBx direkomendasikan. Ini meningkatkan penyaringan sanksi dan mengurangi perbaikan manual.

### Bagaimana pacs.008 menggantikan MT103?

pacs.008 menggantikan MT103 dan MT103+ untuk transfer kredit pelanggan. Pemetaan utama: field 20 MT103 dipetakan ke MsgId atau InstrId; field 32A terbagi menjadi IntrBkSttlmDt dan IntrBkSttlmAmt; field 50a dipetakan ke Dbtr dan DbtrAcct; field 59a dipetakan ke Cdtr dan CdtrAcct; field 70 dipetakan ke RmtInf; field 71A dipetakan ke ChrgBr. pacs.008 menambahkan UETR, remitansi terstruktur, identifikasi LEI, dan mendukung beberapa transaksi per pesan.

### Bagaimana pacs.009 menggantikan MT202?

pacs.009 menggantikan MT202 dan MT202COV untuk transfer antar institusi. Dalam alur penutup, MT202COV (yang membawa pendanaan dan data pelanggan dasar) terbagi dengan bersih: pacs.009 membawa leg pendanaan sementara pacs.008 membawa instruksi pelanggan secara langsung. Pemisahan ini meningkatkan kualitas data dan mengurangi masalah rekonsiliasi.

## Detail teknis

### Apa itu alamat terstruktur vs tidak terstruktur?

Alamat terstruktur menggunakan elemen XML terpisah untuk setiap komponen: StrtNm (jalan), BldgNb (nomor gedung), PstCd (kode pos), TwnNm (kota), Ctry (negara), dan elemen opsional seperti Flr, Room, dan DstrctNm. Alamat tidak terstruktur menggunakan hingga tujuh elemen AdrLine dengan teks bebas. Alamat hibrida menggabungkan keduanya selama periode transisi. Setelah November 2026, CBPR+ mewajibkan format terstruktur.

### Apa itu UETR dan bagaimana pelacakan gpi bekerja?

UETR (Unique End-to-End Transaction Reference) adalah pengidentifikasi UUID v4 yang dihasilkan oleh agen debitur dan dibawa tanpa perubahan di semua leg pembayaran. Muncul dalam pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, dan pacs.028. SWIFT gpi menggunakan UETR untuk melacak pembayaran melalui database Tracker berbasis cloud. Setiap agen mengonfirmasi penerimaan dan pemrosesan, memungkinkan visibilitas end-to-end dan pemantauan SLA.

### Apa kode status umum pacs.002?

ACCP berarti diterima setelah pemeriksaan profil pelanggan. ACSP berarti diterima dan penyelesaian sedang berlangsung. ACSC berarti penyelesaian pada rekening debitur selesai. RJCT berarti ditolak (dengan kode alasan dalam StsRsnInf). PDNG berarti menunggu pemrosesan lebih lanjut. RCVD berarti diterima tetapi belum diproses. Setiap status dapat menyertakan kode alasan terstruktur seperti AC01 (nomor rekening salah), AM04 (dana tidak mencukupi), atau RC01 (BIC salah).

### Apa kode alasan pengembalian umum dalam pacs.004?

Kode alasan pengembalian yang sering muncul termasuk AC01 (nomor rekening salah), AC04 (rekening ditutup), AC06 (rekening diblokir), AM04 (dana tidak mencukupi), BE04 (alamat kreditur tidak ada), CUST (diminta oleh pelanggan), DUPL (pembayaran duplikat), FOCR (mengikuti permintaan pembatalan), dan FR01 (penipuan). Daftar lengkap didefinisikan dalam External Code Sets ISO 20022.

### Apa itu informasi remitansi terstruktur?

Remitansi terstruktur dalam pacs.008 menggunakan elemen RmtInf/Strd untuk membawa referensi dokumen (nomor faktur, nota kredit), jumlah (jatuh tempo, diremitkan, pajak, diskon), dan referensi kreditur (referensi RF ISO 11649). Ini memungkinkan pencocokan faktur otomatis dan rekonsiliasi. Kode tipe dokumen umum termasuk CINV (faktur komersial), CREN (nota kredit), dan SOAC (laporan rekening).

### Apa itu LEI dan kapan digunakan?

LEI (Legal Entity Identifier) adalah kode alfanumerik 20 karakter sesuai ISO 17442. Mengidentifikasi secara unik entitas hukum yang berpartisipasi dalam transaksi keuangan. Dalam pesan pacs, LEI muncul dalam OrgId/LEI untuk pihak-pihak dan FinInstnId/LEI untuk agen. CBPR+ semakin mendorong LEI untuk identifikasi pihak dan agen. Meningkatkan disambiguasi entitas dan mendukung persyaratan pelaporan regulasi.

## Tentang toolkit pacs008

### Apa yang dilakukan pacs008?

pacs008 adalah toolkit Python yang menghasilkan, memvalidasi, dan mengirim pesan pembayaran ISO 20022. Membaca data pembayaran dari sumber CSV, JSON, JSONL, SQLite, dan Parquet, memvalidasi terhadap JSON Schema dan XSD, memeriksa pengidentifikasi IBAN dan BIC, membersihkan data untuk kepatuhan karakter SWIFT, dan menghasilkan file XML. Menyediakan REST API, CLI, dan pustaka Python.

### Tipe pesan apa yang didukung pacs008?

pacs008 mendukung delapan tipe pesan: pacs.002.001.12 (laporan status), pacs.003.001.09 (debit langsung pelanggan), pacs.004.001.11 (pengembalian pembayaran), pacs.007.001.11 (pembalikan pembayaran), pacs.008.001.13 (transfer kredit pelanggan), pacs.009.001.10 (transfer kredit lembaga keuangan), pacs.010.001.05 (debit langsung lembaga keuangan), dan pacs.028.001.05 (permintaan status pembayaran).

### Bagaimana pacs008 membantu dengan tenggat alamat terstruktur 2026?

pacs008 memvalidasi field alamat pos terstruktur dan hibrida sebelum pembuatan XML. Menandai data alamat tidak terstruktur yang akan gagal setelah tenggat November 2026, mendukung format hibrida pra-tenggat dan format terstruktur saja pasca-tenggat, serta mengintegrasikan pemeriksaan kualitas alamat ke dalam pipeline CI dan alur kerja validasi batch.

### Bisakah pacs008 memvalidasi data tanpa menghasilkan XML?

Ya. Gunakan flag CLI `--dry-run` atau endpoint API `POST /validate` untuk memvalidasi data pembayaran tanpa menghasilkan XML. Pipeline validasi memeriksa kepatuhan JSON Schema, format dan checksum IBAN, struktur BIC, dan kepatuhan karakter SWIFT. Kode keluar atau respons API menunjukkan apakah validasi berhasil atau gagal.

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

