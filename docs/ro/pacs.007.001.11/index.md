---
title: pacs.007.001.11 — FI to FI Payment Reversal | Română
description: Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nume ISO** | FIToFIPaymentReversalV11 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 11 |

## Prezentare generală

Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea unei plăți decontate. Spre deosebire de pacs.004 (returnare), este inițiat de agentul ordonator original.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **TxInf** — Informații privind tranzacția cu suma inversării și părțile implicate
- **OrgnlGrpInf** — Informații ale grupului original cu referință la mesajul sursă
- **RvslRsnInf** — Informații privind motivul inversării cu coduri de motiv structurate
- **OrgnlTxRef** — Referința tranzacției originale pentru trasabilitate de la un capăt la altul

## Context de afaceri

- Inițiat când expeditorul original identifică o eroare înainte sau după decontare
- Utilizat în scenarii de fraudă unde este necesară inversarea rapidă
- Suportă atât inversarea totală, cât și parțială a sumelor plății originale
- Conține coduri de motiv de inversare structurate pentru procesarea în aval

## Context CBPR+ și scheme

- Se deosebește de pacs.004 prin direcție — inversarea curge înainte de la inițiator, returnarea curge înapoi de la beneficiar
- CBPR+ necesită asocierea cu identificatorii mesajului original pentru potrivire automată
- Codurile de motiv structurate înlocuiesc narațiunile în text liber din mesajele MT vechi
- Utilizat din ce în ce mai mult în fluxurile de reclamare a plăților instantanee și prevenire a fraudei

## Fluxul mesajului

Agentul ordonator (expeditorul original) trimite pacs.007 înainte prin lanțul de plăți pentru a inversa o plată instruită anterior. Fiecare agent procesează instrucțiunea de inversare și ajustează decontarea în consecință.

## Mesaje conexe

- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/ro/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report

