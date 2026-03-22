---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Română
description: Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nume ISO** | FIToFICustomerDirectDebitV09 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 9 |

## Prezentare generală

Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și informații de decontare
- **DrctDbtTxInf** — Informații privind tranzacția de debitare directă cu sumă și părți implicate
- **Cdtr** — Identificarea creditorului și detaliile contului
- **CdtrAgt** — Identificarea agentului creditorului (instituția colectoare)
- **DbtrAgt** — Identificarea agentului debitorului (instituția plătitoare)

## Context de afaceri

- Suportă schemele de debitare directă SEPA Core și B2B
- Utilizat pentru colectarea plăților recurente precum abonamente, facturi de utilități și rambursări de împrumuturi
- Necesită o referință de mandat validă între debitor și creditor
- Permite colectarea în masă a mai multor instrucțiuni de debitare directă într-un singur mesaj

## Context CBPR+ și scheme

- Cerințele de adresă structurată și identificare a părților se aplică în egală măsură debitărilor directe
- Datele legate de mandat trebuie să fie complet structurate din noiembrie 2026
- Înlocuiește formatele vechi de debitare directă în stil MT104 în fluxurile transfrontaliere
- Validarea identificării schemei creditorului este din ce în ce mai strict aplicată

## Fluxul mesajului

Agentul creditorului inițiază pacs.003 către agentul debitorului pentru a colecta fonduri. Agentul debitorului validează mandatul, verifică acoperirea contului și decontează sau returnează tranzacția.

## Mesaje conexe

- [`pacs.004.001.11`](/ro/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/ro/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report

