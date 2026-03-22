---
title: pacs.028.001.05 — FI to FI Payment Status Request | Română
description: Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nume ISO** | FIToFIPaymentStatusRequestV05 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 5 |

## Prezentare generală

Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.

## Elemente de date cheie

- **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare
- **TxInf** — Informații privind tranzacția care identifică plata despre care se solicită informații
- **OrgnlGrpInf** — Informații ale grupului original cu referință la mesajul sursă
- **OrgnlInstrId** — Identificarea instrucțiunii originale din plata sursă
- **OrgnlEndToEndId** — Identificarea de la un capăt la altul originală pentru trasabilitate

## Context de afaceri

- Permite interogarea proactivă a statusului pentru instrucțiunile de plată în tranzit
- Susține echipele operaționale în investigarea plăților întârziate sau lipsă
- Completează pacs.002 prin inițierea comunicării de status în loc de așteptare
- Utilizat în fluxurile de gestionare a excepțiilor și monitorizare a SLA

## Context CBPR+ și scheme

- Înlocuiește modelele de interogare a statusului MT199 și interogările manuale de mesaje SWIFT
- CBPR+ suportă cereri de status structurate legate de identificatorii mesajului original
- Urmărirea bazată pe UETR prin gpi reduce necesitatea interogărilor manuale
- Din ce în ce mai integrat în tablourile de bord automatizate pentru operațiunile de plăți

## Fluxul mesajului

Agentul ordonator trimite pacs.028 agentului instruit pentru a solicita statusul unei plăți specifice. Agentul instruit răspunde cu un pacs.002 care conține statusul curent de procesare.

## Mesaje conexe

- [`pacs.002.001.12`](/ro/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/ro/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/ro/pacs.009.001.10/) — Financial Institution Credit Transfer

