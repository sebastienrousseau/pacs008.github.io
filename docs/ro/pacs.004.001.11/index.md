---
title: pacs.004.001.11 — Payment Return | Română
description: Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nume ISO** | PaymentReturnV11 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 11 |

## Prezentare generală

Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **TxInf** — Informații privind tranzacția cu suma returnării și părțile implicate
- **OrgnlGrpInf** — Informații ale grupului original cu legătura către mesajul sursă
- **RtrRsnInf** — Informații privind motivul returnării cu coduri de motiv structurate
- **OrgnlTxRef** — Referința tranzacției originale pentru potrivire și reconciliere

## Context de afaceri

- Gestionează returnările post-decontare când contul beneficiarului nu poate fi creditat
- Suportă scenarii de reclamare în care inițiatorul solicită returnarea fondurilor
- Conține coduri de motiv de returnare structurate pentru transparență reglementară și operațională
- Se aplică atât returnărilor de transferuri de credit (pacs.008), cât și returnărilor de debitări directe (pacs.003)

## Context CBPR+ și scheme

- Înlocuiește MT103 RETURN și mesageria de returnare prin metoda de acoperire
- Codurile de motiv de returnare sunt standardizate și lizibile automat conform ISO 20022
- CBPR+ necesită date complete de referință ale tranzacției originale pentru potrivire
- Urmărirea SWIFT gpi se extinde la tranzacțiile de returnare pentru vizibilitate de la un capăt la altul

## Fluxul mesajului

Agentul instruit trimite pacs.004 înapoi prin lanțul de plăți pentru a returna fonduri decontate anterior. Fiecare agent din lanț procesează returnarea și recreditează conturile relevante.

## Mesaje conexe

- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/ro/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report

