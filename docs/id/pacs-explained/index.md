---
title: "Penjelasan pesan PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: id-ID
lastUpdated: true
image: /logo.webp
---

# Penjelasan pesan PACS

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Siklus Hidup Pembayaran

Siklus hidup pembayaran pacs lengkap melibatkan enam tahap dan beberapa jenis pesan yang bekerja bersama.

**Tahap 1 — Inisiasi.** Pembayaran berasal dari domain pelanggan-ke-bank (pain.001).

**Tahap 2 — Instruksi antarbank.** Agen debitur membuat pacs.008 dan mengirimnya ke agen berikutnya.

**Tahap 3 — Laporan status.** Agen penerima dapat mengirim pacs.002 untuk mengonfirmasi status.

**Tahap 4 — Penyelesaian.** Dilakukan melalui CLRG, INDA/INGA, atau COVE.

**Tahap 5 — Kredit ke penerima.** Agen kreditur mengkredit penerima.

**Tahap 6 — Penanganan pengecualian.** pacs.004 mengembalikan dana. pacs.007 membalikkan pembayaran. pacs.028 meminta status.

### Alur serial

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Alur cover

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Struktur XML pacs.008

pacs.008 terdiri dari dua blok utama: header grup (GrpHdr) dan informasi transaksi transfer kredit (CdtTrfTxInf).

## Referensi

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

