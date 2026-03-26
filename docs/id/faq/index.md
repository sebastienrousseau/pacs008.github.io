---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: id-ID
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Umum

### Apa itu ISO 20022?

ISO 20022 adalah standar internasional untuk pesan keuangan. Mendefinisikan bahasa dan model umum untuk pesan pembayaran antar lembaga keuangan. Menggunakan XML dan mendukung data yang lebih kaya dan terstruktur.

### Apa itu pesan pacs?

Keluarga pesan pacs mencakup instruksi pembayaran antarbank, laporan status, pengembalian, pembalikan, dan permintaan. Termasuk pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010, dan pacs.028.

## Pemilihan Pesan

### Kapan menggunakan pacs.008?

Gunakan pacs.008 untuk instruksi transfer kredit pelanggan antar bank.

## Struktur Pesan

### Apa itu Group Header (GrpHdr)?

Group Header muncul tepat satu kali per pesan pacs. Berisi MsgId, CreDtTm, NbOfTxs, dan SttlmInf.

## CBPR+ dan Migrasi

### Apa itu CBPR+?

CBPR+ adalah program SWIFT untuk mengadopsi ISO 20022 dalam pesan pembayaran lintas batas. Mulai beroperasi Maret 2023.

## Detail Teknis

### Apa itu UETR dan bagaimana pelacakan gpi bekerja?

UETR adalah pengidentifikasi UUID v4 yang dihasilkan oleh agen debitur dan dibawa tanpa perubahan untuk pelacakan gpi.

## Tentang toolkit pacs008

### Apa yang dilakukan pacs008?

pacs008 adalah toolkit Python yang menghasilkan, memvalidasi, dan mengirim pesan pembayaran ISO 20022.

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

