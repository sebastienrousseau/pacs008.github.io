---
title: "Glosarium ISO 20022 | pacs008"
description: Definisi istilah kunci ISO 20022 dan pesan pembayaran yang digunakan dalam pacs.008 dan pesan terkait.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Glosarium ISO 20022

Glosarium ini mendefinisikan istilah kunci, singkatan, dan konsep teknis yang digunakan dalam pesan pacs ISO 20022 dan situs ini.

## A

**ACH** — Automated Clearing House (Lembaga Kliring Otomatis). Jaringan yang memproses pembayaran elektronik secara batch antar lembaga keuangan.

**AdrLine** — Address Line (Baris Alamat). Bidang alamat teks bebas dalam struktur alamat pos ISO 20022. Hingga 7 baris masing-masing 70 karakter. Sedang digantikan oleh elemen alamat terstruktur untuk CBPR+ pada November 2026.

**ACCP** — Accepted Customer Profile (Profil Nasabah Diterima). Kode status pacs.002 yang menunjukkan bahwa pemeriksaan sebelumnya (sintaksis, profil nasabah) telah lulus.

**ACSC** — Accepted Settlement Completed (Penyelesaian Diterima Selesai). Kode status pacs.002 yang mengonfirmasi bahwa penyelesaian pada rekening debitur telah selesai.

**ACSP** — Accepted Settlement in Process (Penyelesaian Diterima dalam Proses). Kode status pacs.002 yang menunjukkan bahwa semua pemeriksaan telah lulus dan penyelesaian sedang berlangsung.

## B

**BAH** — Business Application Header (head.001). Amplop standar yang membungkus pesan bisnis ISO 20022 untuk transportasi melalui SWIFT. Berisi informasi routing, pengenal definisi pesan, dan BIC pengirim/penerima.

**BIC** — Business Identifier Code (ISO 9362). Kode 8 atau 11 karakter yang secara unik mengidentifikasi lembaga keuangan. Format: BBBBCCLL (kode bank + negara + lokasi) dengan kode cabang BBB opsional.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Program SWIFT untuk migrasi pesan pembayaran lintas batas dari MT ke ISO 20022. Diluncurkan Maret 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information. Blok bangunan utama tingkat transaksi dalam pacs.008 yang berisi detail pembayaran, pihak, jumlah, dan informasi pengiriman uang.

**ChrgBr** — Charge Bearer (Penanggung Biaya). Menentukan siapa yang membayar biaya transaksi. Nilai: DEBT (debitur), CRED (kreditur), SHAR (bersama), SLEV (tingkat layanan, hanya SEPA).

**CLRG** — Penyelesaian sistem kliring. Metode penyelesaian di mana dana bergerak melalui sistem kliring seperti TARGET2, EURO1, atau CHIPS.

**COVE** — Penyelesaian metode penutup. Metode penyelesaian di mana pembayaran penutup pacs.009 terpisah menangani pendanaan antara koresponden sementara pacs.008 membawa data nasabah secara langsung.

**CSM** — Clearing and Settlement Mechanism (Mekanisme Kliring dan Penyelesaian). Infrastruktur yang memproses dan menyelesaikan instruksi pembayaran antar lembaga peserta.

## D

**Dbtr** — Debtor (Debitur). Pihak yang berutang dana dan memulai pembayaran. Dalam pacs.008, elemen Dbtr membawa nama debitur, alamat pos, identifikasi, dan negara tempat tinggal.

**DbtrAgt** — Debtor Agent (Agen Debitur). Lembaga keuangan yang melayani rekening debitur dan mengirim instruksi pacs.008.

## E

**E2E ID** — End-to-End Identification (EndToEndId). Referensi yang ditetapkan oleh pengirim yang harus tetap tidak berubah di semua agen dalam rantai pembayaran. Digunakan untuk ketertelusuran tingkat nasabah.

**EPC** — European Payments Council (Dewan Pembayaran Eropa). Badan yang mengelola buku aturan skema pembayaran SEPA untuk transfer kredit dan debit langsung.

## F

**FI** — Financial Institution (Lembaga Keuangan). Bank atau lembaga lain yang berpartisipasi dalam kliring dan penyelesaian pembayaran.

**FIToFI** — Financial Institution to Financial Institution. Menjelaskan domain antarbank tempat pesan pacs beroperasi.

## G

**gpi** — Global Payments Innovation. Inisiatif SWIFT untuk pembayaran lintas batas yang lebih cepat dan transparan. Menggunakan UETR untuk pelacakan ujung ke ujung melalui Tracker berbasis cloud.

**GrpHdr** — Group Header. Blok metadata tingkat pesan dalam pesan pacs. Berisi MsgId, CreDtTm, NbOfTxs, informasi penyelesaian, dan informasi jenis pembayaran.

## H

**Alamat hibrida** — Format alamat pos yang menggabungkan elemen terstruktur (StrtNm, TwnNm, Ctry) dengan elemen AdrLine tidak terstruktur. Diizinkan selama periode transisi sebelum tenggat waktu alamat terstruktur November 2026.

## I

**IBAN** — International Bank Account Number (ISO 13616). Format nomor rekening standar yang digunakan untuk pembayaran lintas batas dan domestik. Divalidasi menggunakan checksum ISO 7064 Mod 97-10.

**INDA** — Instructed Agent settlement. Metode penyelesaian di mana dana diselesaikan di buku agen yang diinstruksikan, tempat agen debitur memegang rekening nostro.

**INGA** — Instructing Agent settlement. Metode penyelesaian di mana dana diselesaikan di buku agen pengirim instruksi, tempat agen yang diinstruksikan memegang rekening nostro.

**InstrId** — Instruction Identification. Referensi titik-ke-titik antara agen yang berdekatan dalam rantai pembayaran. Dapat berubah di setiap hop.

**IntrBkSttlmAmt** — Interbank Settlement Amount. Jumlah yang diselesaikan antara agen pengirim instruksi dan agen yang diinstruksikan, dalam mata uang penyelesaian.

**ISO 20022** — Standar internasional untuk pertukaran data elektronik antar lembaga keuangan. Mendefinisikan model data umum dan format pesan berbasis XML untuk pembayaran, sekuritas, pembiayaan perdagangan, dan domain keuangan lainnya.

## L

**LEI** — Legal Entity Identifier (ISO 17442). Kode alfanumerik 20 karakter yang secara unik mengidentifikasi entitas hukum yang berpartisipasi dalam transaksi keuangan. Digunakan dalam OrgId/LEI untuk pihak dan FinInstnId/LEI untuk agen.

## M

**MsgId** — Message Identification. Pengenal unik untuk amplop pesan, ditetapkan oleh agen pengirim. Berubah di setiap hop dalam rantai pembayaran.

**MT** — Message Type. Format pesan warisan SWIFT (misalnya MT103 untuk transfer kredit nasabah, MT202 untuk transfer lembaga keuangan). Digantikan oleh pesan MX ISO 20022.

**MX** — Format pesan XML ISO 20022 yang digunakan oleh SWIFT. Pesan MX menggantikan pesan MT untuk pembayaran lintas batas di bawah CBPR+.

## N

**NbOfTxs** — Number of Transactions. Elemen Group Header yang menunjukkan berapa banyak transaksi individual yang terkandung dalam pesan.

## P

**pacs** — Payments Clearing and Settlement. Domain bisnis ISO 20022 yang mencakup pesan pembayaran antarbank.

**pacs.002** — Laporan Status Pembayaran FI ke FI. Melaporkan status pemrosesan (diterima, ditolak, tertunda, diselesaikan) dari instruksi pembayaran sebelumnya.

**pacs.003** — Debit Langsung Nasabah FI ke FI. Membawa instruksi debit langsung nasabah antar bank untuk pengumpulan dana.

**pacs.004** — Pengembalian Pembayaran. Mengembalikan dana yang telah diselesaikan melalui rantai pembayaran ketika pembayaran tidak dapat diterapkan.

**pacs.007** — Pembalikan Pembayaran FI ke FI. Membalikkan instruksi pembayaran dari pengirim asli ke depan melalui rantai.

**pacs.008** — Transfer Kredit Nasabah FI ke FI. Pesan antarbank utama untuk transfer kredit nasabah. Menggantikan MT103.

**pacs.009** — Transfer Kredit Lembaga Keuangan. Memindahkan dana antar bank atas nama mereka sendiri. Mencakup pendanaan, pembayaran penutup, dan manajemen likuiditas. Menggantikan MT202/MT202COV.

**pacs.010** — Debit Langsung Lembaga Keuangan. Memungkinkan satu bank mendebit rekening sendiri bank lain berdasarkan perjanjian bilateral.

**pacs.028** — Permintaan Status Pembayaran FI ke FI. Secara aktif meminta status pembayaran sebelumnya ketika tidak ada pembaruan pacs.002 yang diterima.

**pain** — Payment Initiation. Domain bisnis ISO 20022 yang mencakup pesan nasabah-ke-bank (misalnya pain.001 untuk inisiasi transfer kredit).

**PII** — Personally Identifiable Information. Data yang dapat mengidentifikasi individu. pacs008 menyamarkan PII dalam log terstruktur.

**PstlAdr** — Postal Address. Struktur alamat yang digunakan untuk pihak dalam pesan pacs. Mendukung format terstruktur (StrtNm, TwnNm, Ctry) dan tidak terstruktur (AdrLine).

## R

**RJCT** — Rejected (Ditolak). Kode status pacs.002 yang menunjukkan bahwa pembayaran telah ditolak.

**RmtInf** — Remittance Information. Data referensi pembayaran yang dibawa dalam pacs.008. Mendukung format tidak terstruktur (teks bebas, maks 140 karakter) dan terstruktur (referensi dokumen, jumlah, referensi kreditur).

**RTGS** — Real-Time Gross Settlement. Sistem pembayaran di mana transaksi diselesaikan secara individual dan real-time (misalnya TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. Skema transfer kredit euro yang dikelola oleh EPC, menggunakan pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. Varian pembayaran instan SCT, penyelesaian dalam waktu kurang dari 10 detik.

**SDD** — SEPA Direct Debit. Skema debit langsung euro yang dikelola oleh EPC, menggunakan pacs.003.

**SEPA** — Single Euro Payments Area. Inisiatif integrasi pembayaran yang mencakup transfer kredit, debit langsung, dan pembayaran kartu euro di 36 negara Eropa.

**SLEV** — Service Level. Kode penanggung biaya wajib untuk SEPA. Berarti biaya mengikuti aturan skema tanpa potongan dari jumlah transfer.

**STP** — Straight-Through Processing. Pemrosesan pembayaran otomatis ujung ke ujung tanpa intervensi manual.

**SttlmMtd** — Settlement Method. Mendefinisikan bagaimana penyelesaian antarbank terjadi: CLRG (sistem kliring), INDA (agen yang diinstruksikan), INGA (agen pengirim instruksi), atau COVE (pembayaran penutup).

## T

**TxId** — Transaction Identification. Referensi antarbank yang ditetapkan oleh agen pengirim instruksi pertama. Tidak boleh diubah oleh agen berikutnya.

## U

**UETR** — Unique End-to-End Transaction Reference. Pengenal UUID v4 yang dihasilkan oleh agen debitur dan dibawa tanpa perubahan di semua kaki pembayaran untuk pelacakan gpi.

## X

**XSD** — XML Schema Definition. Skema formal yang mendefinisikan struktur, elemen, dan tipe data pesan XML ISO 20022.

**XXE** — XML External Entity. Kerentanan keamanan dalam parsing XML. pacs008 mencegah serangan XXE menggunakan defusedxml.

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
