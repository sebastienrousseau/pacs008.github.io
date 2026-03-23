---
title: pacs.002.001.12 | Raport de stare a plății FI-la-FI | pacs008
description: Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Raport de stare a plății FI-la-FI

| | |
|---|---|
| **Nume ISO** | FIToFIPaymentStatusReportV12 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 12 |

## Prezentare generală

Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

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

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare | Utilizat pentru confirmarea decontării sau raportarea respingerii transferurilor de credit, debitărilor directe și returnărilor de plăți |
| **OrgnlGrpInfAndSts** — Informații și status ale grupului original pentru raportarea la nivel agregat | Permite reconcilierea între agentul ordonator și agentul instruit |
| **TxInfAndSts** — Informații și status ale tranzacției pentru rezultatele tranzacțiilor individuale | Obligatoriu în fluxurile CBPR+ pentru confirmarea procesării mesajelor pacs.008 și pacs.009 |
| **StsRsnInf** — Informații privind motivul statusului cu coduri de motiv structurate | Suportă raportarea statusului atât la nivel de grup agregat, cât și la nivel de tranzacție individuală |
| **OrgnlTxRef** — Referința tranzacției originale care face legătura cu instrucțiunea sursă | Agentul instruit (receptorul) trimite pacs.002 înapoi către agentul ordonator (expeditorul) pentru a confirma acceptarea, decontarea sau respingerea unei instrucțiuni de plată primite, cum ar fi pacs.008 sau pacs.009. |

## Context CBPR+ și scheme

- Înlocuiește MT199 și narațiunile de status din câmpul 79 al mesajelor MT
- CBPR+ impune pacs.002 pentru toată comunicarea privind statusul plăților
- Codurile de motiv structurate înlocuiesc explicațiile de respingere în text liber
- Integrarea cu urmărirea SWIFT gpi necesită pacs.002 pentru transparență de la un capăt la altul

## Fluxul mesajului

Agentul instruit (receptorul) trimite pacs.002 înapoi către agentul ordonator (expeditorul) pentru a confirma acceptarea, decontarea sau respingerea unei instrucțiuni de plată primite, cum ar fi pacs.008 sau pacs.009.

## Tabelul diferențelor de versiune

| Interval de versiuni | De ce contează | Concluzie de implementare |
|---|---|---|
| pacs.002.001.12 | Implementarea curentă în pacs008 | Folosește asta când trebuie să te aliniezi la template-urile și artefactele de validare curente ale proiectului. |
| pacs.002.001.13-15 | Revizii ulterioare ale catalogului | Revizuiește versiunile ISO ulterioare înainte de a începe lucrări noi de interoperabilitate sau de a integra infrastructuri noi. |

## Exemplu XML comentat

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Comentarii pe câmpuri

- `MsgId`: Folosește un identificator nou pentru raportul de status în sine, nu pentru instrucțiunea de plată originală.
- `OrgnlInstrId`: Păstrează nemodificat identificatorul instrucțiunii originale pentru ca statusul să poată fi corelat automat.
- `TxSts`: Acesta este statusul operațional; mapează-l cu atenție la stările interne ale procesului și nu presupune o corespondență unu-la-unu.
- `StsRsnInf`: Codurile structurate de motiv sunt mult mai utile decât textul liber pentru reparații și analitice.

## Compară pacs.002 vs pacs.028

| Dimensiune | pacs.002.001.12 | Mesaj de comparație |
|---|---|---|
| Scop principal | Raportează statusul | Solicită statusul |
| Cine începe interacțiunea | Instituția care trimite statusul | Instituția care solicită statusul |
| Postură operațională | Raportare bazată pe eveniment | Interogare bazată pe excepție |
| Presupunere greșită de evitat | Că raportarea statusului înlocuiește fluxurile de investigare și clarificare | Că fiecare plată are nevoie de o cerere explicită de status |

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | Transfer de credit client FI-la-FI | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.009.001.10`](/ro/pacs.009.001.10/) | Transfer de credit între instituții financiare | Mesajul pacs.009 este utilizat pentru transferuri de credit între instituții financiare în care transferul se face în cont propriu al instituției și nu în numele unui client. Suportă finanțarea interbancară, plățile de acoperire și gestionarea lichidității. |
| [`pacs.028.001.05`](/ro/pacs.028.001.05/) | Cerere de stare a plății FI-la-FI | Mesajul pacs.028 este trimis de o instituție financiară pentru a solicita statusul unei instrucțiuni de plată trimise anterior. Permite urmărirea proactivă a procesării plăților fără a aștepta un raport de status nesolicitat. |

