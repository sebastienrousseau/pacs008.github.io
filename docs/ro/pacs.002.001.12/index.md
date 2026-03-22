---
title: pacs.002.001.12 — FI to FI Payment Status Report | Română
description: Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nume ISO** | FIToFIPaymentStatusReportV12 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 12 |

## Prezentare generală

Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **OrgnlGrpInfAndSts** — Informații și status ale grupului original pentru raportarea la nivel agregat
- **TxInfAndSts** — Informații și status ale tranzacției pentru rezultatele tranzacțiilor individuale
- **StsRsnInf** — Informații privind motivul statusului cu coduri de motiv structurate
- **OrgnlTxRef** — Referința tranzacției originale care face legătura cu instrucțiunea sursă

## Context de afaceri

- Utilizat pentru confirmarea decontării sau raportarea respingerii transferurilor de credit, debitărilor directe și returnărilor de plăți
- Permite reconcilierea între agentul ordonator și agentul instruit
- Obligatoriu în fluxurile CBPR+ pentru confirmarea procesării mesajelor pacs.008 și pacs.009
- Suportă raportarea statusului atât la nivel de grup agregat, cât și la nivel de tranzacție individuală

## Context CBPR+ și scheme

- Înlocuiește MT199 și narațiunile de status din câmpul 79 al mesajelor MT
- CBPR+ impune pacs.002 pentru toată comunicarea privind statusul plăților
- Codurile de motiv structurate înlocuiesc explicațiile de respingere în text liber
- Integrarea cu urmărirea SWIFT gpi necesită pacs.002 pentru transparență de la un capăt la altul

## Fluxul mesajului

Agentul instruit (receptorul) trimite pacs.002 înapoi către agentul ordonator (expeditorul) pentru a confirma acceptarea, decontarea sau respingerea unei instrucțiuni de plată primite, cum ar fi pacs.008 sau pacs.009.

## Mesaje conexe

- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/ro/pacs.028.001.05/) — FI to FI Payment Status Request

