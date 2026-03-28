---
title: "Termen adresă structurată noiembrie 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ro-RO
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Auditați calitatea actuală a datelor de adresă în înregistrările debitorului, creditorului și agentului."
  - name: "Step 2"
    text: "Mapați câmpurile de adresă nestructurate existente la formatul structurat (stradă, clădire, cod poștal, oraș, țară)."
  - name: "Step 3"
    text: "Adăugați validarea adreselor în conducta de pre-generare folosind pacs008."
  - name: "Step 4"
    text: "Testați cu date de plată reprezentative înainte de termenul limită."
---

# Termen adresă structurată noiembrie 2026

SWIFT impune adrese poștale structurate în mesajele de plată transfrontaliere începând din noiembrie 2026. Ce se schimbă, ce mesaje sunt afectate și cum ajută pacs008 echipele să se pregătească.

## Ce se schimbă

SWIFT CBPR+ trece de la adrese poștale nestructurate la câmpuri de adresă structurate în mesajele de plată transfrontaliere. După termenul limită din noiembrie 2026, câmpurile de adresă ale părților cheie trebuie să utilizeze formatul structurat cu elemente separate pentru numele străzii, numărul clădirii, codul poștal, orașul și țara.

## De ce este important

- Adresele nestructurate cresc ratele de reparare manuală și întârzie procesarea directă.
- Adresele structurate îmbunătățesc precizia verificării sancțiunilor prin separarea numelui părții de datele de localizare.
- Cerințele de reglementare și ale schemelor impun din ce în ce mai mult date structurate pentru conformitate și raportare.
- Ratele de respingere a plăților transfrontaliere cresc când calitatea adreselor nu îndeplinește așteptările contrapartidelor.

## Ce mesaje sunt afectate

- **pacs.008** — adresele poștale ale debitorului și creditorului în transferurile de credit ale clienților.
- **pacs.009** — adresele instituțiilor în transferurile de credit între instituții financiare și plățile de acoperire.
- **pacs.004** — adresele părților în returnările de plăți.
- **pacs.003** — adresele creditorului și debitorului în debitele directe ale clienților.

## Cum ajută pacs008

- Validează câmpurile de adresă poștală structurată și hibridă înainte de generarea XML.
- Semnalează datele de adresă nestructurate care ar eșua după termenul limită.
- Suportă atât formatele hibride pre-termen cât și formatele exclusiv structurate post-termen.
- Integrează verificările de calitate a adreselor în conductele CI și fluxurile de lucru pentru validare în lot.

## Cronologie

- **Martie 2023** — SWIFT CBPR+ devine operațional cu ISO 20022 pentru plățile transfrontaliere.
- **Noiembrie 2025** — perioada de coexistență pentru instrucțiunile de plată MT și MX se încheie.
- **Noiembrie 2026** — cerința de adresă poștală structurată intră în vigoare pentru mesajele CBPR+.

## Ce trebuie făcut acum

- Auditați calitatea actuală a datelor de adresă în înregistrările debitorului, creditorului și agentului.
- Mapați câmpurile de adresă nestructurate existente la formatul structurat (stradă, clădire, cod poștal, oraș, țară).
- Adăugați validarea adreselor în conducta de pre-generare folosind pacs008.
- Testați cu date de plată reprezentative înainte de termenul limită.

## Referințe

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

