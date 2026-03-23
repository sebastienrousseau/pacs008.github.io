---
title: pacs.004.001.11 | Retur de plată | pacs008
description: Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi...
lang: ro-RO
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Retur de plată

| | |
|---|---|
| **Nume ISO** | PaymentReturnV11 |
| **Stare de înregistrare** | Registered |
| **An** | 2019 |
| **Versiune** | 11 |

## Prezentare generală

Mesajul pacs.004 este utilizat pentru returnarea unei tranzacții de plată decontate anterior. Inversează fluxul de fonduri atunci când o plată nu poate fi aplicată, a fost trimisă din eroare sau este reclamată de instituția inițiatoare.

> Ultima verificare față de surse primare a fost efectuată la 23 martie 2026. Data de referință a catalogului ISO 20022: 2025-02-27; linkurile către surse sunt mai jos.

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

| Elemente de date cheie | Context de afaceri |
|---|---|
| **GrpHdr** — Antet de grup cu identificarea mesajului și marca temporală de creare | Gestionează returnările post-decontare când contul beneficiarului nu poate fi creditat |
| **TxInf** — Informații privind tranzacția cu suma returnării și părțile implicate | Suportă scenarii de reclamare în care inițiatorul solicită returnarea fondurilor |
| **OrgnlGrpInf** — Informații ale grupului original cu legătura către mesajul sursă | Conține coduri de motiv de returnare structurate pentru transparență reglementară și operațională |
| **RtrRsnInf** — Informații privind motivul returnării cu coduri de motiv structurate | Se aplică atât returnărilor de transferuri de credit (pacs.008), cât și returnărilor de debitări directe (pacs.003) |
| **OrgnlTxRef** — Referința tranzacției originale pentru potrivire și reconciliere | Agentul instruit trimite pacs.004 înapoi prin lanțul de plăți pentru a returna fonduri decontate anterior. Fiecare agent din lanț procesează returnarea și recreditează conturile relevante. |

## Context CBPR+ și scheme

- Înlocuiește MT103 RETURN și mesageria de returnare prin metoda de acoperire
- Codurile de motiv de returnare sunt standardizate și lizibile automat conform ISO 20022
- CBPR+ necesită date complete de referință ale tranzacției originale pentru potrivire
- Urmărirea SWIFT gpi se extinde la tranzacțiile de returnare pentru vizibilitate de la un capăt la altul

## Fluxul mesajului

Agentul instruit trimite pacs.004 înapoi prin lanțul de plăți pentru a returna fonduri decontate anterior. Fiecare agent din lanț procesează returnarea și recreditează conturile relevante.

## Tabelul diferențelor de versiune

| Interval de versiuni | De ce contează | Concluzie de implementare |
|---|---|---|
| pacs.004.001.11 | Implementarea curentă în pacs008 | Se aliniază cu template-urile curente pentru retururile de plată. |
| pacs.004.001.12-14 | Revizii ulterioare ale catalogului | Verifică reviziile ulterioare ale mesajelor de retur când upgrade-urile de schemă sau contrapărți noi intră în sferă. |

## Exemplu XML comentat

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Comentarii pe câmpuri

- `OrgnlInstrId`: Acesta trebuie să indice tranzacția decontată care este returnată.
- `RtrdIntrBkSttlmAmt`: Suma returnată trebuie să reflecte valoarea efectiv returnată, nu o sumă de business reconstruită.
- `RtrRsnInf`: Calitatea codurilor de motiv este critică pentru comunicarea cu clienții în sistemele ulterioare și pentru rutarea operațională.

## Compară pacs.004 vs pacs.007

| Dimensiune | pacs.004.001.11 | Mesaj de comparație |
|---|---|---|
| Scop principal | Returnarea fondurilor deja decontate | Reversarea unei plăți instruite anterior |
| Inițiat de | Partea de primire / beneficiar | Partea care a inițiat instrucțiunea inițială |
| Direcția fluxului | Înapoi prin lanț | Înainte prin lanț |
| Cel mai potrivit pentru | Gestionarea returului după decontare | Gestionarea reversărilor generate de recall, eroare sau fraudă |

## Referințe primare

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Mesaje conexe
| Tip de mesaj | Descriere | Prezentare generală |
|---|---|---|
| [`pacs.008.001.13`](/ro/pacs.008.001.13/) | Transfer de credit client FI-la-FI | Mesajul pacs.008 este instrucțiunea de plată principală schimbată între instituții financiare pentru a transfera fonduri în numele unui client. Conține informații despre debitor, creditor, sumă și detalii de remitere pentru una sau mai multe tranzacții de transfer de credit. |
| [`pacs.003.001.09`](/ro/pacs.003.001.09/) | Debit direct de client FI-la-FI | Mesajul pacs.003 este schimbat între instituții financiare pentru a executa o instrucțiune de debitare directă a clientului. Permite băncii creditorului să colecteze fonduri de la banca debitorului în numele creditorului. |
| [`pacs.002.001.12`](/ro/pacs.002.001.12/) | Raport de stare a plății FI-la-FI | Mesajul pacs.002 este trimis de o instituție financiară pentru a raporta statusul unei instrucțiuni de plată trimise anterior. Furnizează informații de confirmare, respingere sau status în așteptare pentru tranzacțiile individuale din cadrul unui mesaj de plată. |

