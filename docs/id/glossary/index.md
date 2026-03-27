---
title: "Glosarium ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: id-ID
lastUpdated: true
image: /logo.webp
---

# Glosarium ISO 20022

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Lembaga Kliring Otomatis. Jaringan yang memproses pembayaran elektronik secara batch antar lembaga keuangan.

**AdrLine** — Baris Alamat. Kolom alamat teks bebas dalam struktur alamat pos ISO 20022. Maksimal 7 baris, masing-masing 70 karakter. Digantikan oleh elemen alamat terstruktur untuk CBPR+ pada November 2026.

**ACCP** — Profil Pelanggan Diterima. Kode status pacs.002 yang menunjukkan pemeriksaan sebelumnya (sintaks, profil pelanggan) telah berhasil.

**ACSC** — Penyelesaian Diterima Selesai. Kode status pacs.002 yang mengonfirmasi bahwa penyelesaian pada rekening debitur telah selesai.

**ACSP** — Penyelesaian Diterima Dalam Proses. Kode status pacs.002 yang menunjukkan semua pemeriksaan berhasil dan penyelesaian sedang berlangsung.

## B

**BAH** — Header Aplikasi Bisnis (head.001). Amplop terstandarisasi yang membungkus pesan bisnis ISO 20022 untuk transportasi melalui SWIFT. Berisi informasi routing, pengidentifikasi definisi pesan, dan BIC pengirim/penerima.

**BIC** — Kode Pengidentifikasi Bisnis (ISO 9362). Kode 8 atau 11 karakter yang mengidentifikasi lembaga keuangan secara unik. Format: BBBBCCLL (kode bank + negara + lokasi) dengan kode cabang BBB opsional.

## C

**CBPR+** — Pembayaran dan Pelaporan Lintas Batas Plus. Program SWIFT untuk migrasi pesan pembayaran lintas batas dari MT ke ISO 20022. Diluncurkan Maret 2023.

**CdtTrfTxInf** — Informasi Transaksi Transfer Kredit. Blok bangunan utama di tingkat transaksi dalam pacs.008, berisi detail pembayaran, pihak-pihak, jumlah, dan informasi remitansi.

**ChrgBr** — Penanggung Biaya. Menentukan siapa yang membayar biaya transaksi. Nilai: DEBT (debitur), CRED (kreditur), SHAR (bersama), SLEV (level layanan, khusus SEPA).

**CLRG** — Penyelesaian sistem kliring. Metode penyelesaian di mana dana mengalir melalui sistem kliring seperti TARGET2, EURO1, atau CHIPS.

**COVE** — Penyelesaian metode cover. Metode penyelesaian di mana pembayaran cover pacs.009 terpisah menangani pendanaan antar koresponden sementara pacs.008 membawa data pelanggan secara langsung.

**CSM** — Mekanisme Kliring dan Penyelesaian. Infrastruktur yang memproses dan menyelesaikan instruksi pembayaran antar lembaga peserta.

## D

**Dbtr** — Debitur. Pihak yang berutang dana dan memulai pembayaran. Dalam pacs.008, elemen Dbtr memuat nama debitur, alamat pos, identifikasi, dan negara tempat tinggal.

**DbtrAgt** — Agen Debitur. Lembaga keuangan yang melayani rekening debitur dan mengirimkan instruksi pacs.008.

## E

**E2E ID** — Identifikasi End-to-End (EndToEndId). Referensi yang ditetapkan oleh pengirim asal dan harus tetap tidak berubah di seluruh agen dalam rantai pembayaran. Digunakan untuk keterlacakan tingkat pelanggan.

**EPC** — Dewan Pembayaran Eropa. Badan yang mengelola buku aturan skema pembayaran SEPA untuk transfer kredit dan debit langsung.

## F

**FI** — Lembaga Keuangan. Bank atau lembaga lain yang berpartisipasi dalam kliring dan penyelesaian pembayaran.

**FIToFI** — Lembaga Keuangan ke Lembaga Keuangan. Menjelaskan domain antarbank tempat pesan pacs beroperasi.

## G

**gpi** — Inovasi Pembayaran Global. Inisiatif SWIFT untuk pembayaran lintas batas yang lebih cepat dan transparan. Menggunakan UETR untuk pelacakan end-to-end melalui Tracker berbasis cloud.

**GrpHdr** — Header Grup. Blok metadata tingkat pesan dalam pesan pacs. Berisi MsgId, CreDtTm, NbOfTxs, informasi penyelesaian, dan informasi tipe pembayaran.

## H

**Hybrid address** — Alamat hibrida. Format alamat pos yang menggabungkan elemen terstruktur (StrtNm, TwnNm, Ctry) dengan elemen AdrLine tidak terstruktur. Diperbolehkan selama periode transisi sebelum tenggat alamat terstruktur November 2026.

## I

**IBAN** — Nomor Rekening Bank Internasional (ISO 13616). Format nomor rekening terstandarisasi untuk pembayaran lintas batas dan domestik. Divalidasi menggunakan checksum ISO 7064 Mod 97-10.

**INDA** — Penyelesaian agen yang diinstruksikan. Metode penyelesaian di mana dana diselesaikan di buku agen yang diinstruksikan, tempat agen debitur memiliki rekening nostro.

**INGA** — Penyelesaian agen yang menginstruksikan. Metode penyelesaian di mana dana diselesaikan di buku agen yang menginstruksikan, tempat agen yang diinstruksikan memiliki rekening nostro.

**InstrId** — Identifikasi Instruksi. Referensi titik-ke-titik antara agen yang bersebelahan dalam rantai pembayaran. Dapat berubah di setiap titik.

**IntrBkSttlmAmt** — Jumlah Penyelesaian Antarbank. Jumlah yang diselesaikan antara agen yang menginstruksikan dan agen yang diinstruksikan, dalam mata uang penyelesaian.

**ISO 20022** — Standar internasional untuk pertukaran data elektronik antar lembaga keuangan. Mendefinisikan model data bersama dan format pesan berbasis XML untuk pembayaran, sekuritas, pembiayaan perdagangan, dan domain keuangan lainnya.

## L

**LEI** — Pengidentifikasi Badan Hukum (ISO 17442). Kode alfanumerik 20 karakter yang mengidentifikasi badan hukum peserta transaksi keuangan secara unik. Digunakan dalam OrgId/LEI untuk pihak-pihak dan FinInstnId/LEI untuk agen.

## M

**MsgId** — Identifikasi Pesan. Pengidentifikasi unik untuk amplop pesan, ditetapkan oleh agen pengirim. Berubah di setiap titik dalam rantai pembayaran.

**MT** — Tipe Pesan. Format pesan lama SWIFT (misalnya MT103 untuk transfer kredit pelanggan, MT202 untuk transfer lembaga keuangan). Digantikan oleh pesan MX ISO 20022.

**MX** — Format pesan XML ISO 20022 yang digunakan oleh SWIFT. Pesan MX menggantikan pesan MT untuk pembayaran lintas batas dalam CBPR+.

## N

**NbOfTxs** — Jumlah Transaksi. Elemen Header Grup yang menunjukkan berapa banyak transaksi individual yang terkandung dalam pesan.

## P

**pacs** — Kliring dan Penyelesaian Pembayaran. Domain bisnis ISO 20022 yang mencakup pesan pembayaran antarbank.

**pacs.002** — Laporan Status Pembayaran FI ke FI. Melaporkan status pemrosesan (diterima, ditolak, tertunda, diselesaikan) dari instruksi pembayaran sebelumnya.

**pacs.003** — Direct Debit Pelanggan FI ke FI. Membawa instruksi debit langsung pelanggan antar bank untuk penagihan dana.

**pacs.004** — Retur Pembayaran. Mengembalikan dana yang telah diselesaikan melalui rantai pembayaran ketika pembayaran tidak dapat diterapkan.

**pacs.007** — Pembalikan Pembayaran FI ke FI. Membalikkan instruksi pembayaran dari pengirim asli melalui rantai.

**pacs.008** — Transfer Kredit Pelanggan FI ke FI. Pesan antarbank utama untuk transfer kredit pelanggan. Menggantikan MT103.

**pacs.009** — Transfer Kredit Lembaga Keuangan. Memindahkan dana antar bank atas nama mereka sendiri. Mencakup pendanaan, pembayaran cover, dan manajemen likuiditas. Menggantikan MT202/MT202COV.

**pacs.010** — Direct Debit Lembaga Keuangan. Memungkinkan satu bank mendebit rekening bank lain berdasarkan perjanjian bilateral.

**pacs.028** — Permintaan Status Pembayaran FI ke FI. Secara aktif meminta status pembayaran sebelumnya ketika tidak ada pembaruan pacs.002 yang diterima.

**pain** — Inisiasi Pembayaran. Domain bisnis ISO 20022 yang mencakup pesan pelanggan-ke-bank (misalnya pain.001 untuk inisiasi transfer kredit).

**PII** — Informasi Identitas Pribadi. Data yang dapat mengidentifikasi individu. pacs008 menyembunyikan PII dalam log terstruktur.

**PstlAdr** — Alamat Pos. Struktur alamat yang digunakan untuk pihak-pihak dalam pesan pacs. Mendukung format terstruktur (StrtNm, TwnNm, Ctry) dan tidak terstruktur (AdrLine).

## R

**RJCT** — Ditolak. Kode status pacs.002 yang menunjukkan pembayaran telah ditolak.

**RmtInf** — Informasi Remitansi. Data referensi pembayaran yang dibawa dalam pacs.008. Mendukung format tidak terstruktur (teks bebas, maks 140 karakter) dan terstruktur (referensi dokumen, jumlah, referensi kreditur).

**RTGS** — Penyelesaian Bruto Real-Time. Sistem pembayaran di mana transaksi diselesaikan secara individual dan real-time (misalnya TARGET2, Fedwire, CHAPS).

## S

**SCT** — Transfer Kredit SEPA. Skema transfer kredit euro yang dikelola oleh EPC, menggunakan pacs.008.

**SCT Inst** — Transfer Kredit Instan SEPA. Varian pembayaran instan dari SCT, diselesaikan dalam waktu kurang dari 10 detik.

**SDD** — Debit Langsung SEPA. Skema debit langsung euro yang dikelola oleh EPC, menggunakan pacs.003.

**SEPA** — Area Pembayaran Euro Tunggal. Inisiatif integrasi pembayaran yang mencakup transfer kredit, debit langsung, dan pembayaran kartu dalam euro di 36 negara Eropa.

**SLEV** — Level Layanan. Kode penanggung biaya yang wajib untuk SEPA. Berarti biaya mengikuti aturan skema tanpa pengurangan dari jumlah transfer.

**STP** — Pemrosesan Langsung. Pemrosesan pembayaran otomatis end-to-end tanpa intervensi manual.

**SttlmMtd** — Metode Penyelesaian. Mendefinisikan bagaimana penyelesaian antarbank terjadi: CLRG (sistem kliring), INDA (agen yang diinstruksikan), INGA (agen yang menginstruksikan), atau COVE (pembayaran cover).

## T

**TxId** — Identifikasi Transaksi. Referensi antarbank yang ditetapkan oleh agen yang menginstruksikan pertama. Tidak boleh diubah oleh agen berikutnya.

## U

**UETR** — Referensi Transaksi End-to-End Unik. Pengidentifikasi UUID v4 yang dihasilkan oleh agen debitur dan dibawa tanpa perubahan di seluruh tahap pembayaran untuk pelacakan gpi.

## X

**XSD** — Definisi Skema XML. Skema formal yang mendefinisikan struktur, elemen, dan tipe data pesan XML ISO 20022.

**XXE** — Entitas Eksternal XML. Kerentanan keamanan dalam parsing XML. pacs008 mencegah serangan XXE menggunakan defusedxml.

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

