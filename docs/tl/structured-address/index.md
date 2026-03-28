---
title: "Deadline ng structured address noong Nobyembre 2026 | pacs008"
description: Paano naaapektuhan ng SWIFT CBPR+ November 2026 structured postal address deadline ang pacs.008 at mga kaugnay na mensahe ng pagbabayad, at paano...
lang: tl-PH
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "I-audit ang kasalukuyang kalidad ng address data sa mga record ng debtor, creditor, at agent."
  - name: "Step 2"
    text: "I-map ang mga umiiral na unstructured na address field sa structured na format (kalye, gusali, postal code, lungsod, bansa)."
  - name: "Step 3"
    text: "Magdagdag ng address validation sa pre-generation pipeline gamit ang pacs008."
  - name: "Step 4"
    text: "Mag-test gamit ang representative na payment data bago ang deadline."
---

# Deadline ng structured address noong Nobyembre 2026

Kinakailangan ng SWIFT ang mga structured na postal address sa mga cross-border na mensahe ng pagbabayad mula Nobyembre 2026. Ano ang nagbabago, aling mga mensahe ang apektado, at paano tumutulong ang pacs008 sa mga team na maghanda.

## Ano ang nagbabago

Ang SWIFT CBPR+ ay lumilipat mula sa mga unstructured na postal address patungo sa mga structured na address field sa mga cross-border na mensahe ng pagbabayad. Pagkatapos ng deadline sa Nobyembre 2026, ang mga address field ng mga pangunahing partido ay kailangang gumamit ng structured na format na may hiwalay na mga elemento para sa pangalan ng kalye, numero ng gusali, postal code, lungsod, at bansa.

## Bakit ito mahalaga

- Ang mga unstructured na address ay nagpapataas ng rate ng manu-manong pag-aayos at nagpapabagal ng direktang pagproseso.
- Ang mga structured na address ay nagpapabuti ng katumpakan ng sanctions screening sa pamamagitan ng paghihiwalay ng pangalan ng partido mula sa data ng lokasyon.
- Ang mga regulatoryo at scheme na kinakailangan ay lalong nag-uutos ng structured na data para sa pagsunod at pag-uulat.
- Ang mga rate ng pagtanggi sa cross-border na pagbabayad ay tumataas kapag ang kalidad ng address ay hindi nakakatugon sa mga inaasahan ng counterparty.

## Aling mga mensahe ang apektado

- **pacs.008** — mga postal address ng debtor at creditor sa mga customer credit transfer.
- **pacs.009** — mga address ng institusyon sa mga credit transfer sa pagitan ng mga financial institution at cover payment.
- **pacs.004** — mga address ng partido sa mga payment return.
- **pacs.003** — mga address ng creditor at debtor sa mga customer direct debit.

## Paano tumutulong ang pacs008

- Vine-validate ang mga structured at hybrid na postal address field bago ang XML generation.
- Mina-mark ang mga unstructured na address data na mabibigo pagkatapos ng deadline.
- Sinusuportahan ang parehong mga hybrid na format bago ang deadline at structured-only na format pagkatapos ng deadline.
- Ini-integrate ang mga address quality check sa mga CI pipeline at batch validation workflow.

## Timeline

- **Marso 2023** — naging live ang SWIFT CBPR+ na may ISO 20022 para sa mga cross-border na pagbabayad.
- **Nobyembre 2025** — natapos ang panahon ng coexistence para sa mga MT at MX na instruksiyon ng pagbabayad.
- **Nobyembre 2026** — ang kinakailangan ng structured na postal address ay nagkakabisa para sa mga mensahe ng CBPR+.

## Ano ang dapat gawin ngayon

- I-audit ang kasalukuyang kalidad ng address data sa mga record ng debtor, creditor, at agent.
- I-map ang mga umiiral na unstructured na address field sa structured na format (kalye, gusali, postal code, lungsod, bansa).
- Magdagdag ng address validation sa pre-generation pipeline gamit ang pacs008.
- Mag-test gamit ang representative na payment data bago ang deadline.

## Mga Sanggunian

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

