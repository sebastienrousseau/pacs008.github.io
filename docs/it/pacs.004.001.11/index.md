---
title: pacs.004.001.11 | Reso di pagamento | pacs008
description: Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un...
lang: it-IT
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Reso di pagamento

| | |
|---|---|
| **Nome ISO** | PaymentReturnV11 |
| **Stato di registrazione** | Registered |
| **Anno** | 2019 |
| **Versione** | 11 |

## Panoramica

Il messaggio pacs.004 viene utilizzato per restituire una transazione di pagamento precedentemente regolata. Inverte il flusso di fondi quando un pagamento non può essere applicato, è stato inviato per errore o viene richiamato dall'istituto di origine.

> Ultima revisione rispetto a fonti primarie il 23 marzo 2026. Data di riferimento del catalogo ISO 20022: 2025-02-27; i collegamenti alle fonti sono riportati di seguito.

## Elementi di dati chiave

- **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione
- **TxInf** — Informazioni sulla transazione con importo della restituzione e parti coinvolte
- **OrgnlGrpInf** — Informazioni sul gruppo originale con collegamento al messaggio di origine
- **RtrRsnInf** — Informazioni sul motivo della restituzione con codici motivo strutturati
- **OrgnlTxRef** — Riferimento alla transazione originale per abbinamento e riconciliazione

## Contesto di business

- Gestisce le restituzioni post-regolamento quando il conto del beneficiario non può essere accreditato
- Supporta scenari di richiamo in cui l'ordinante richiede la restituzione dei fondi
- Trasporta codici motivo di restituzione strutturati per la trasparenza normativa e operativa
- Si applica sia alle restituzioni di bonifici (pacs.008) che alle restituzioni di addebiti diretti (pacs.003)

| Elementi di dati chiave | Contesto di business |
|---|---|
| **GrpHdr** — Intestazione di gruppo con identificazione del messaggio e marca temporale di creazione | Gestisce le restituzioni post-regolamento quando il conto del beneficiario non può essere accreditato |
| **TxInf** — Informazioni sulla transazione con importo della restituzione e parti coinvolte | Supporta scenari di richiamo in cui l'ordinante richiede la restituzione dei fondi |
| **OrgnlGrpInf** — Informazioni sul gruppo originale con collegamento al messaggio di origine | Trasporta codici motivo di restituzione strutturati per la trasparenza normativa e operativa |
| **RtrRsnInf** — Informazioni sul motivo della restituzione con codici motivo strutturati | Si applica sia alle restituzioni di bonifici (pacs.008) che alle restituzioni di addebiti diretti (pacs.003) |
| **OrgnlTxRef** — Riferimento alla transazione originale per abbinamento e riconciliazione | L'agente incaricato invia pacs.004 attraverso la catena di pagamento per restituire fondi precedentemente regolati. Ogni agente nella catena elabora la restituzione e riaccredita i conti pertinenti. |

## Contesto CBPR+ e schemi

- Sostituisce MT103 RETURN e la messaggistica di restituzione con metodo copertura
- I codici motivo di restituzione sono standardizzati e leggibili automaticamente secondo ISO 20022
- CBPR+ richiede i dati completi di riferimento della transazione originale per l'abbinamento
- Il tracciamento SWIFT gpi si estende alle transazioni di restituzione per la visibilità end-to-end

## Flusso del messaggio

L'agente incaricato invia pacs.004 attraverso la catena di pagamento per restituire fondi precedentemente regolati. Ogni agente nella catena elabora la restituzione e riaccredita i conti pertinenti.

## Tabella delle differenze di versione

| Intervallo di versione | Perché conta | Implicazione implementativa |
|---|---|---|
| pacs.004.001.11 | Implementazione attuale in pacs008 | Si allinea ai modelli attuali per i messaggi di ritorno del pagamento. |
| pacs.004.001.12-14 | Revisioni successive del catalogo | Rivedi le revisioni successive dei messaggi di ritorno quando aggiornamenti di schema o nuove controparti rientrano nell'ambito. |

## Esempio XML commentato

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

### Commenti sui campi

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Reason-code quality is critical for downstream customer communication and operational routing.

## Confrontare pacs.004 vs pacs.007

| Dimensione | pacs.004.001.11 | Messaggio di confronto |
|---|---|---|
| Scopo principale | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Più adatto a | Gestione dei resi dopo il regolamento | Gestione delle inversioni dovute a recall, errore o frode |

## Riferimenti primari

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Messaggi correlati
| Tipo di messaggio | Descrizione | Panoramica |
|---|---|---|
| [`pacs.008.001.13`](/it/pacs.008.001.13/) | Bonifico cliente tra istituzioni finanziarie | Il messaggio pacs.008 è l'istruzione di pagamento principale scambiata tra istituti finanziari per trasferire fondi per conto di un cliente. Contiene informazioni su debitore, creditore, importo e dettagli di rimessa per una o più transazioni di bonifico. |
| [`pacs.003.001.09`](/it/pacs.003.001.09/) | Addebito diretto cliente tra istituzioni finanziarie | Il messaggio pacs.003 viene scambiato tra istituti finanziari per eseguire un'istruzione di addebito diretto del cliente. Consente alla banca del creditore di raccogliere fondi dalla banca del debitore per conto del creditore. |
| [`pacs.002.001.12`](/it/pacs.002.001.12/) | Rapporto di stato del pagamento tra istituzioni finanziarie | Il messaggio pacs.002 viene inviato da un istituto finanziario per comunicare lo stato di un'istruzione di pagamento precedentemente inviata. Fornisce informazioni di conferma, rifiuto o stato in sospeso per le singole transazioni all'interno di un messaggio di pagamento. |

