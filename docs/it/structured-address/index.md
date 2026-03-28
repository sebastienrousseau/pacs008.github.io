---
title: "Scadenza indirizzo strutturato novembre 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: it-IT
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Verificare la qualità attuale dei dati degli indirizzi nei record di debitore, creditore e agente."
  - name: "Step 2"
    text: "Mappare i campi indirizzo non strutturati esistenti al formato strutturato (via, numero civico, codice postale, città, paese)."
  - name: "Step 3"
    text: "Aggiungere la validazione degli indirizzi alla pipeline di pre-generazione utilizzando pacs008."
  - name: "Step 4"
    text: "Testare con dati di pagamento rappresentativi prima della scadenza."
---

# Scadenza indirizzo strutturato novembre 2026

SWIFT richiede indirizzi postali strutturati nei messaggi di pagamento transfrontalieri da novembre 2026. Cosa cambia, quali messaggi sono interessati e come pacs008 aiuta i team a prepararsi.

## Cosa cambia

SWIFT CBPR+ sta passando da indirizzi postali non strutturati a campi indirizzo strutturati nei messaggi di pagamento transfrontalieri. Dopo la scadenza di novembre 2026, i campi indirizzo delle parti principali devono utilizzare il formato strutturato con elementi separati per nome via, numero civico, codice postale, città e paese.

## Perché è importante

- Gli indirizzi non strutturati aumentano i tassi di riparazione manuale e ritardano l'elaborazione diretta.
- Gli indirizzi strutturati migliorano la precisione dello screening delle sanzioni separando il nome della parte dai dati di localizzazione.
- I requisiti normativi e di schema impongono sempre più dati strutturati per la conformità e la rendicontazione.
- I tassi di rifiuto dei pagamenti transfrontalieri aumentano quando la qualità degli indirizzi non soddisfa le aspettative delle controparti.

## Quali messaggi sono interessati

- **pacs.008** — indirizzi postali del debitore e del creditore nei bonifici clienti.
- **pacs.009** — indirizzi delle istituzioni nei trasferimenti di credito tra istituzioni finanziarie e pagamenti di copertura.
- **pacs.004** — indirizzi delle parti nei resi di pagamento.
- **pacs.003** — indirizzi di creditore e debitore negli addebiti diretti dei clienti.

## Come pacs008 aiuta

- Valida i campi indirizzo postale strutturato e ibrido prima della generazione XML.
- Segnala i dati di indirizzo non strutturati che non supererebbero i controlli dopo la scadenza.
- Supporta sia i formati ibridi pre-scadenza sia i formati solo strutturati post-scadenza.
- Integra i controlli di qualità degli indirizzi nelle pipeline CI e nei flussi di lavoro di validazione batch.

## Cronologia

- **Marzo 2023** — SWIFT CBPR+ entra in funzione con ISO 20022 per i pagamenti transfrontalieri.
- **Novembre 2025** — il periodo di coesistenza per le istruzioni di pagamento MT e MX termina.
- **Novembre 2026** — il requisito di indirizzo postale strutturato entra in vigore per i messaggi CBPR+.

## Cosa fare adesso

- Verificare la qualità attuale dei dati degli indirizzi nei record di debitore, creditore e agente.
- Mappare i campi indirizzo non strutturati esistenti al formato strutturato (via, numero civico, codice postale, città, paese).
- Aggiungere la validazione degli indirizzi alla pipeline di pre-generazione utilizzando pacs008.
- Testare con dati di pagamento rappresentativi prima della scadenza.

## Riferimenti

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

