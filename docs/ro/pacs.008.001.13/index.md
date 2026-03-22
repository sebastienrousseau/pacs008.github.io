---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Română
description: Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nume ISO** | FIToFICustomerCreditTransferV13 |
| **Stare de înregistrare** | Registered |
| **An** | 2023 |
| **Versiune** | 13 |

## Prezentare generală

Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu ID-ul mesajului, data creării, numărul de tranzacții și informații de decontare
- **CdtTrfTxInf** — Informații privind tranzacția de transfer de credit cu sumă, comisioane și scop
- **Dbtr / DbtrAgt** — Identificarea debitorului și a agentului debitorului cu detaliile contului
- **Cdtr / CdtrAgt** — Identificarea creditorului și a agentului creditorului cu detaliile contului
- **RmtInf** — Informații de remitere pentru referințe de plată structurate sau nestructurate

## Context de afaceri

- Mesajul principal pentru transferurile de credit transfrontaliere și interne inițiate de client
- Utilizat în SEPA SCT, SEPA Instant, CBPR+ și sistemele de compensare naționale
- Conține informații de remitere structurate pentru a susține reconcilierea automată
- Suportă metode de decontare serială, prin acoperire și directă pentru lanțuri de plăți cu mai multe etape

## Context CBPR+ și scheme

- Înlocuiește MT103 și MT103+ pentru transferurile de credit transfrontaliere ale clienților
- Termenul limită pentru adresele structurate din noiembrie 2026 se aplică tuturor adreselor poștale ale părților
- SWIFT gpi necesită pacs.008 pentru urmărirea de la un capăt la altul bazată pe UETR
- 13 revizuiri reflectă evoluția continuă a schemei în infrastructurile de piață

## Fluxul mesajului

Agentul debitorului creează un pacs.008 și îl trimite agentului creditorului (direct sau prin intermediari). Fiecare agent din lanț validează, îmbogățește și transmite instrucțiunea până când agentul creditorului creditează contul beneficiarului.

## Versiuni acceptate

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Mesaje conexe

- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/ro/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Financial Institution Credit Transfer

