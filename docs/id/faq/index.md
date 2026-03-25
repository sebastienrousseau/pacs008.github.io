---
title: "Pertanyaan yang sering diajukan | pacs008"
description: Pertanyaan umum tentang pesan pacs ISO 20022, migrasi CBPR+, pemilihan pesan, implementasi, dan toolkit pacs008.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Pertanyaan yang sering diajukan

Halaman ini menjawab pertanyaan umum tentang pesan pacs ISO 20022, cara kerjanya bersama, dan bagaimana pacs008 membantu tim mengimplementasikannya.

## Umum

### Apa itu ISO 20022?

ISO 20022 adalah standar internasional untuk pesan keuangan. Standar ini mendefinisikan bahasa dan model umum untuk pesan pembayaran yang dipertukarkan antar lembaga keuangan. Tidak seperti format lama seperti SWIFT MT, ISO 20022 menggunakan XML dan mendukung data yang lebih kaya dan terstruktur untuk pihak, jumlah, dan referensi.

### Apa itu pesan pacs?

Keluarga pesan pacs (payments clearing and settlement) mencakup instruksi pembayaran antarbank, laporan status, pengembalian, pembalikan, dan permintaan informasi. Ini mencakup pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010, dan pacs.028. Setiap pesan memiliki peran khusus dalam siklus hidup pembayaran.

### Bagaimana pesan pacs berbeda dari pesan SWIFT MT?

Pesan SWIFT MT menggunakan format datar dengan tag bidang (misalnya MT103 untuk transfer kredit nasabah). Pesan pacs menggunakan XML hierarkis dengan struktur data yang lebih kaya. Perbedaan utama mencakup dukungan untuk beberapa transaksi per pesan, identifikasi pihak terstruktur (LEI, beberapa ID), alamat pos terstruktur, dan informasi pengiriman uang terstruktur. MT103 sesuai dengan pacs.008, MT202 dengan pacs.009, dan teks status MT199 digantikan oleh pacs.002.

### Apa hubungan antara pesan pain dan pacs?

Pesan pain (payment initiation) berjalan antara nasabah dan banknya. Pesan pacs berjalan antar bank. Inisiasi transfer kredit nasabah pain.001 dari bank debitur menjadi instruksi antarbank pacs.008. Kedua domain berbagi elemen data umum tetapi melayani bagian berbeda dari rantai pembayaran.

## Pemilihan pesan

### Kapan harus menggunakan pacs.008?

Gunakan pacs.008 untuk instruksi transfer kredit nasabah antar bank. Pesan ini membawa data pihak debitur dan kreditur, jumlah, informasi pengiriman uang, dan detail penyelesaian. Ini adalah pesan utama untuk mengirim pembayaran nasabah melalui jaringan antarbank, baik domestik (SEPA) maupun lintas batas (CBPR+).

### Kapan harus menggunakan pacs.009 daripada pacs.008?

Gunakan pacs.009 untuk transfer rekening sendiri institusi, kaki pendanaan, dan pembayaran penutup. Tidak seperti pacs.008 yang membawa pembayaran nasabah atas nama debitur, pacs.009 memindahkan dana antar bank atas nama mereka sendiri. Dalam alur metode penutup, pacs.009 membawa pendanaan sementara pacs.008 membawa instruksi nasabah di jalur terpisah.

### Apa perbedaan antara pacs.004 dan pacs.007?

pacs.004 mengembalikan dana yang telah diselesaikan dari sisi penerima melalui rantai. pacs.007 membalikkan pembayaran dari sisi pengirim asli ke depan melalui rantai. Gunakan pacs.004 ketika bank penerima manfaat tidak dapat menerapkan kredit setelah penyelesaian. Gunakan pacs.007 ketika pengirim menemukan kesalahan, duplikat, atau penipuan.

### Kapan harus menggunakan pacs.028 daripada menunggu pacs.002?

Gunakan pacs.028 ketika Anda perlu secara aktif meminta status pembayaran yang belum menerima pembaruan pacs.002 tepat waktu. pacs.002 dipicu oleh peristiwa (agen penerima mengirimnya secara proaktif), sementara pacs.028 dipicu oleh pengecualian (agen pengirim memintanya). Gunakan pacs.028 untuk pembaruan pembayaran yang tertunda, tidak jelas, atau hilang, bukan sebagai lalu lintas rutin.

### Untuk apa pacs.003 digunakan?

pacs.003 membawa instruksi debit langsung nasabah antar bank. Agen kreditur mengirimnya ke agen debitur untuk mengumpulkan dana. Memerlukan referensi mandat yang valid dan mendukung skema debit langsung SEPA Core dan B2B. Tidak digunakan untuk transfer kredit atau debit rekening sendiri institusi.

### Untuk apa pacs.010 digunakan?

pacs.010 menangani debit langsung antar lembaga keuangan pada rekening mereka sendiri. Digunakan untuk penagihan antar bank seperti biaya, panggilan margin, dan kewajiban serupa berdasarkan perjanjian bilateral. Tidak digunakan untuk debit langsung nasabah atau transfer kredit.

## Struktur pesan

### Apa itu Group Header (GrpHdr)?

Group Header muncul tepat satu kali per pesan pacs. Berisi pengenal pesan (MsgId), stempel waktu pembuatan (CreDtTm), jumlah transaksi (NbOfTxs), informasi penyelesaian (SttlmInf), dan secara opsional jumlah total penyelesaian antarbank dan informasi jenis pembayaran. Mengidentifikasi amplop pesan, bukan transaksi bisnis individual.

### Apa saja pengenal pembayaran di pacs.008?

pacs.008 menggunakan empat pengenal utama. MsgId mengidentifikasi amplop pesan dan berubah di setiap hop. InstrId adalah referensi titik-ke-titik antara agen yang berdekatan dan dapat berubah per hop. EndToEndId ditetapkan oleh pengirim dan tidak boleh diubah oleh agen mana pun dalam rantai. TxId ditetapkan oleh agen pengirim pertama dan tetap konstan di ruang antarbank. UETR adalah UUID yang tetap tidak berubah di semua kaki untuk pelacakan ujung ke ujung.

### Metode penyelesaian apa yang tersedia?

Empat metode penyelesaian didefinisikan. CLRG menyelesaikan melalui sistem kliring seperti TARGET2, EURO1, atau CHIPS. INDA menyelesaikan di buku agen yang diinstruksikan di mana agen debitur memiliki rekening. INGA menyelesaikan di buku agen pengirim di mana agen yang diinstruksikan memiliki rekening. COVE menyelesaikan melalui pembayaran penutup terpisah yang dibawa oleh pacs.009.

### Apa arti kode penanggung biaya?

DEBT berarti semua biaya ditanggung oleh debitur (setara dengan MT103 OUR). CRED berarti semua biaya ditanggung oleh kreditur (setara dengan BEN). SHAR berarti biaya dibagi antara agen debitur dan kreditur (setara dengan SHA). SLEV berarti biaya mengikuti aturan tingkat layanan dan wajib untuk transfer kredit SEPA.

## CBPR+ dan migrasi

### Apa itu CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) adalah program SWIFT untuk mengadopsi ISO 20022 dalam pesan pembayaran lintas batas. Diluncurkan pada Maret 2023 dan menggantikan pesan MT dengan padanan pacs. CBPR+ mewajibkan pacs.002 untuk semua komunikasi status, mendukung data pihak yang lebih kaya dan alamat terstruktur, serta menggunakan pelacakan berbasis UETR melalui gpi.

### Apa yang terjadi dengan periode koeksistensi MT/MX?

Periode koeksistensi untuk instruksi pembayaran lintas batas berakhir pada November 2025. Sejak saat itu, pesan CBPR+ harus menggunakan format ISO 20022 (MX). Layanan penerjemahan yang mengkonversi antara MT dan MX selama masa transisi tidak lagi tersedia untuk alur baru. Bank sekarang harus mengirim dan menerima pesan pacs asli.

### Apa tenggat waktu alamat terstruktur November 2026?

Mulai November 2026, SWIFT CBPR+ mewajibkan alamat pos terstruktur dalam pesan pembayaran lintas batas. Baris alamat tidak terstruktur (hanya AdrLine) tidak akan lagi diterima untuk bidang pihak utama. Minimal, TwnNm dan Ctry diperlukan, dengan StrtNm dan BldgNb atau PstBx direkomendasikan. Ini meningkatkan penyaringan sanksi dan mengurangi perbaikan manual.

### Bagaimana pacs.008 menggantikan MT103?

pacs.008 menggantikan MT103 dan MT103+ untuk transfer kredit nasabah. Pemetaan utama: bidang MT103 20 sesuai dengan MsgId atau InstrId; bidang 32A terbagi menjadi IntrBkSttlmDt dan IntrBkSttlmAmt; bidang 50a sesuai dengan Dbtr dan DbtrAcct; bidang 59a sesuai dengan Cdtr dan CdtrAcct; bidang 70 sesuai dengan RmtInf; bidang 71A sesuai dengan ChrgBr. pacs.008 menambahkan UETR, pengiriman uang terstruktur, identifikasi LEI, dan mendukung beberapa transaksi per pesan.

### Bagaimana pacs.009 menggantikan MT202?

pacs.009 menggantikan MT202 dan MT202COV untuk transfer antar institusi. Dalam alur metode penutup, MT202COV (yang membawa pendanaan dan data nasabah yang mendasari) terpisah dengan bersih: pacs.009 membawa kaki pendanaan sementara pacs.008 membawa instruksi nasabah secara langsung. Pemisahan ini meningkatkan kualitas data dan mengurangi masalah rekonsiliasi.

## Detail teknis

### Apa itu alamat terstruktur vs tidak terstruktur?

Alamat terstruktur menggunakan elemen XML terpisah untuk setiap komponen: StrtNm (jalan), BldgNb (nomor bangunan), PstCd (kode pos), TwnNm (kota), Ctry (negara), dan elemen opsional seperti Flr, Room, dan DstrctNm. Alamat tidak terstruktur menggunakan hingga tujuh elemen AdrLine dengan teks bebas. Alamat hibrida menggabungkan keduanya selama periode transisi. Setelah November 2026, CBPR+ mewajibkan format terstruktur.

### Apa itu UETR dan bagaimana pelacakan gpi bekerja?

UETR (Unique End-to-End Transaction Reference) adalah pengenal UUID v4 yang dihasilkan oleh agen debitur dan dibawa tanpa perubahan di semua kaki pembayaran. Muncul di pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, dan pacs.028. SWIFT gpi menggunakan UETR untuk melacak pembayaran melalui database Tracker berbasis cloud. Setiap agen mengonfirmasi penerimaan dan pemrosesan, memungkinkan visibilitas ujung ke ujung dan pemantauan SLA.

### Apa kode status pacs.002 yang umum?

ACCP berarti diterima setelah pemeriksaan profil nasabah. ACSP berarti diterima dan penyelesaian sedang berlangsung. ACSC berarti penyelesaian pada rekening debitur selesai. RJCT berarti ditolak (dengan kode alasan di StsRsnInf). PDNG berarti menunggu pemrosesan lebih lanjut. RCVD berarti diterima tetapi belum diproses. Setiap status dapat mencakup kode alasan terstruktur seperti AC01 (rekening salah), AM04 (dana tidak cukup), atau RC01 (BIC salah).

### Apa kode alasan pengembalian umum di pacs.004?

Kode alasan pengembalian yang sering digunakan meliputi AC01 (nomor rekening salah), AC04 (rekening ditutup), AC06 (rekening diblokir), AM04 (dana tidak cukup), BE04 (alamat kreditur hilang), CUST (diminta oleh nasabah), DUPL (pembayaran duplikat), FOCR (mengikuti permintaan pembatalan), dan FR01 (penipuan). Daftar lengkap didefinisikan dalam ISO 20022 External Code Sets.

### Apa itu informasi pengiriman uang terstruktur?

Pengiriman uang terstruktur di pacs.008 menggunakan elemen RmtInf/Strd untuk membawa referensi dokumen (nomor faktur, nota kredit), jumlah (jatuh tempo, dikirim, pajak, diskon), dan referensi kreditur (referensi RF ISO 11649). Ini memungkinkan pencocokan faktur otomatis dan rekonsiliasi. Kode jenis dokumen umum termasuk CINV (faktur komersial), CREN (nota kredit), dan SOAC (laporan rekening).

### Apa itu LEI dan kapan digunakan?

LEI (Legal Entity Identifier) adalah kode alfanumerik 20 karakter sesuai ISO 17442. Ini secara unik mengidentifikasi entitas hukum yang berpartisipasi dalam transaksi keuangan. Dalam pesan pacs, LEI muncul di OrgId/LEI untuk pihak dan FinInstnId/LEI untuk agen. CBPR+ semakin mendorong LEI untuk identifikasi pihak dan agen. Ini meningkatkan disambiguasi entitas dan mendukung persyaratan pelaporan regulasi.

## Tentang toolkit pacs008

### Apa yang dilakukan pacs008?

pacs008 adalah toolkit Python yang menghasilkan, memvalidasi, dan mengirim pesan pembayaran ISO 20022. Membaca data pembayaran dari sumber CSV, JSON, JSONL, SQLite, dan Parquet, memvalidasi terhadap JSON Schema dan XSD, memeriksa pengenal IBAN dan BIC, membersihkan data untuk kepatuhan karakter SWIFT, dan menghasilkan file XML. Menyediakan REST API, CLI, dan pustaka Python.

### Jenis pesan apa yang didukung pacs008?

pacs008 mendukung delapan jenis pesan: pacs.002.001.12 (laporan status), pacs.003.001.09 (debit langsung nasabah), pacs.004.001.11 (pengembalian pembayaran), pacs.007.001.11 (pembalikan pembayaran), pacs.008.001.13 (transfer kredit nasabah), pacs.009.001.10 (transfer kredit lembaga keuangan), pacs.010.001.05 (debit langsung lembaga keuangan), dan pacs.028.001.05 (permintaan status pembayaran).

### Bagaimana pacs008 membantu dengan tenggat waktu alamat terstruktur 2026?

pacs008 memvalidasi bidang alamat pos terstruktur dan hibrida sebelum pembuatan XML. Menandai data alamat tidak terstruktur yang akan gagal setelah tenggat waktu November 2026, mendukung format hibrida pra-tenggat dan format hanya terstruktur pasca-tenggat, dan mengintegrasikan pemeriksaan kualitas alamat ke dalam pipeline CI dan alur kerja validasi batch.

### Bisakah pacs008 memvalidasi data tanpa menghasilkan XML?

Ya. Gunakan flag CLI `--dry-run` atau endpoint API `POST /validate` untuk memvalidasi data pembayaran tanpa menghasilkan XML. Pipeline validasi memeriksa kesesuaian JSON Schema, format dan checksum IBAN, struktur BIC, dan kepatuhan karakter SWIFT. Kode keluar atau respons API menunjukkan apakah validasi berhasil atau gagal.

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
