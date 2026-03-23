---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: Mesajul pacs.007 este utilizat pentru a inversa o instrucțiune de plată trimisă anterior care nu a fost încă decontată sau pentru a solicita inversarea...
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

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 27 February 2025; linkurile către surse sunt mai jos.

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

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare | Inițiat când expeditorul original identifică o eroare înainte sau după decontare |
| **TxInf** — Informații privind tranzacția cu suma inversării și părțile implicate | Utilizat în scenarii de fraudă unde este necesară inversarea rapidă |
| **OrgnlGrpInf** — Informații ale grupului original cu referință la mesajul sursă | Suportă atât inversarea totală, cât și parțială a sumelor plății originale |
| **RvslRsnInf** — Informații privind motivul inversării cu coduri de motiv structurate | Conține coduri de motiv de inversare structurate pentru procesarea în aval |
| **OrgnlTxRef** — Referința tranzacției originale pentru trasabilitate de la un capăt la altul | Agentul ordonator (expeditorul original) trimite pacs.007 înainte prin lanțul de plăți pentru a inversa o plată instruită anterior. Fiecare agent procesează instrucțiunea de inversare și ajustează decontarea în consecință. |

## Context CBPR+ și scheme

- Se deosebește de pacs.004 prin direcție — inversarea curge înainte de la inițiator, returnarea curge înapoi de la beneficiar
- CBPR+ necesită asocierea cu identificatorii mesajului original pentru potrivire automată
- Codurile de motiv structurate înlocuiesc narațiunile în text liber din mesajele MT vechi
- Utilizat din ce în ce mai mult în fluxurile de reclamare a plăților instantanee și prevenire a fraudei

## Fluxul mesajului

Agentul ordonator (expeditorul original) trimite pacs.007 înainte prin lanțul de plăți pentru a inversa o plată instruită anterior. Fiecare agent procesează instrucțiunea de inversare și ajustează decontarea în consecință.

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | FI to FI Customer Credit Transfer | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.004.001.11`](/ro/pacs.004.001.11/) | Payment Return | Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare. |
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | FI to FI Payment Status Report | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |

