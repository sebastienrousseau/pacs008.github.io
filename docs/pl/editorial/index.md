---
title: "Polityka redakcyjna | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# Polityka redakcyjna

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [Katalog definicji komunikatów ISO 20022](https://www.iso20022.org/iso-20022-message-definitions) — specyfikacje komunikatów i historia wersji.
- [Wytyczne użytkowania SWIFT CBPR+](https://www.swift.com/standards/iso-20022) — kontekst płatności transgranicznych.
- [Regulamin przelewów SEPA EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) — zasady przelewów w euro.
- [Regulamin natychmiastowych przelewów SEPA EPC](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) — zasady płatności natychmiastowych.

## Proces przeglądu treści

Każda strona na pacs008.com przechodzi strukturalny przegląd przed publikacją. Nowe treści zaczynają się od szkicu opartego na źródłach pierwotnych. Szkic jest weryfikowany pod kątem technicznej dokładności względem katalogu komunikatów ISO 20022 i odpowiedniej dokumentacji schematu.

Po wstępnym przeglądzie treść przechodzi kontrolę strukturalną, która zapewnia spójność z istniejącymi stronami. Nawigacja, odsyłacze i terminologia są ujednolicone w całym serwisie. Data przeglądu widoczna na każdej stronie komunikatu odzwierciedla ostatnią weryfikację względem źródeł pierwotnych.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Dokładność techniczna

Treści techniczne opierają się na definicjach komunikatów ISO 20022 opublikowanych w oficjalnym katalogu. Nazwy pól, typy danych i reguły kardynalności odpowiadają schematom XSD poszczególnych wersji komunikatów. Gdy użycie właściwe dla danego schematu odbiega od standardu bazowego, bezpośrednio cytowana jest odpowiednia dokumentacja schematu.

Przykłady kodu w dokumentacji API są testowane względem bieżącego wydania toolkitu pacs008. Polecenia CLI, endpointy API i metody biblioteki Python odzwierciedlają pakiet opublikowany na PyPI. Przykłady są aktualizowane przy każdym nowym wydaniu, aby zachować synchronizację z toolkitem.

## Metodologia tłumaczenia

pacs008.com jest dostępny w 22 językach. Wszystkie treści powstają w języku angielskim. Przetłumaczone strony są generowane z przejrzanego angielskiego materiału źródłowego za pomocą skryptu budującego, który zachowuje strukturę strony, hierarchię nagłówków i cele łączy we wszystkich wersjach językowych.

Terminy techniczne, identyfikatory ISO i kody standardowe nie są tłumaczone, aby uniknąć niejednoznaczności. Terminy takie jak pacs.008.001.13, BIC, IBAN i CBPR+ występują w standardowej formie we wszystkich językach. Treści nietechniczne są tłumaczone tak, aby brzmiały naturalnie w każdym języku docelowym. Tłumaczenia są sprawdzane pod kątem spójności strukturalnej i regenerowane w przypadku zmian w angielskim materiale źródłowym.

## Częstotliwość aktualizacji

Treści są aktualizowane w odpowiedzi na trzy czynniki. Po pierwsze, gdy ISO 20022 opublikuje nową wersję katalogu komunikatów wpływającą na definicje komunikatów pacs. Po drugie, gdy SWIFT wyda zaktualizowane wytyczne CBPR+ lub nowe terminy migracji. Po trzecie, gdy EPC zaktualizuje regulaminy przelewów lub natychmiastowych przelewów SEPA.

Toolkit pacs008 stosuje wersjonowanie semantyczne. Każde nowe wydanie znajduje odzwierciedlenie w dokumentacji API i dzienniku zmian. Witryna jest przebudowywana i wdrażana ponownie przy każdej aktualizacji treści lub toolkitu.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
