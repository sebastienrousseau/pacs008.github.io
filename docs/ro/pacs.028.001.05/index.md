---
title: pacs.028.001.05 | Cerere de stare a plății FI-la-FI | pacs008
description: Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Cerere de stare a plății FI-la-FI

| | |
|---|---|
| **Nume ISO** | FIToFIPaymentStatusRequestV05 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 5 |

## Prezentare generală

Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

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

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare | Permite interogarea proactivă a statusului pentru instrucțiunile de plată în tranzit |
| **TxInf** — Informații privind tranzacția care identifică plata despre care se solicită informații | Susține echipele operaționale în investigarea plăților întârziate sau lipsă |
| **OrgnlGrpInf** — Informații ale grupului original cu referință la mesajul sursă | Completează pacs.002 prin inițierea comunicării de status în loc de așteptare |
| **OrgnlInstrId** — Identificarea instrucțiunii originale din plata sursă | Utilizat în fluxurile de gestionare a excepțiilor și monitorizare a SLA |
| **OrgnlEndToEndId** — Identificarea de la un capăt la altul originală pentru trasabilitate | Agentul ordonator trimite pacs.028 agentului instruit pentru a solicita statusul unei plăți specifice. Agentul instruit răspunde cu un pacs.002 care conține statusul curent de procesare. |

## Context CBPR+ și scheme de plată

- Înlocuiește modelele de interogare a statusului MT199 și interogările manuale de mesaje SWIFT
- CBPR+ suportă cereri de status structurate legate de identificatorii mesajului original
- Urmărirea bazată pe UETR prin gpi reduce necesitatea interogărilor manuale
- Din ce în ce mai integrat în tablourile de bord automatizate pentru operațiunile de plăți

## Fluxul mesajului

Agentul ordonator trimite pacs.028 agentului instruit pentru a solicita statusul unei plăți specifice. Agentul instruit răspunde cu un pacs.002 care conține statusul curent de procesare.

## Tabelul diferențelor de versiune

| Interval de versiuni | De ce contează | Concluzie de implementare |
|---|---|---|
| pacs.028.001.05 | Implementarea curentă în pacs008 | Potrivit pentru modelarea curentă a cererilor de status. |
| pacs.028.001.06 | Revizie ulterioară a catalogului | Verifică revizia mai nouă a catalogului pentru planificarea interoperabilității viitoare. |

## Exemplu XML comentat

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Comentarii pe câmpuri

- `MsgId`: Cererea în sine are nevoie de un identificator auditabil distinct de plata de bază.
- `OrgnlInstrId`: Folosește identificatorul sursă exact din instrucțiunea originală pentru a maximiza acuratețea potrivirii.
- `OrgnlEndToEndId`: Includerea trasabilității clientului ajută echipele operaționale să reconcilieze mai rapid interogarea.

## Compară pacs.028 vs pacs.002

| Dimensiune | pacs.028.001.05 | Mesaj de comparație |
|---|---|---|
| Scop principal | Solicită statusul | Raportează statusul |
| Cine începe interacțiunea | Instituția care solicită statusul | Instituția care trimite statusul |
| Postură operațională | Interogare bazată pe excepție | Raportare bazată pe eveniment |
| Presupunere greșită de evitat | Că ar trebui trimis în mod obișnuit pentru fiecare plată | Că elimină nevoia de management proactiv al cazurilor |

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | Raport de stare a plății FI-la-FI | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | Transfer de credit client FI-la-FI | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.009.001.10`](/ro/pacs.009.001.10/) | Transfer de credit între instituții financiare | Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității. |

