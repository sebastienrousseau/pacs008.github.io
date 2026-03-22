---
title: Typy wiadomości | Polski
description: Obsługiwane definicje i wersje wiadomości pacs ISO 20022.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Typy wiadomości

pacs008 obejmuje główną definicję wiadomości pacs.008 i powiązane wiadomości wykorzystywane w przepływach orkiestracji i uzgadniania.

## Uwzględnione wsparcie

| Typ wiadomości | Opis |
|---|---|
| [`pacs.002.001.12`](/pl/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/pl/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/pl/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/pl/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/pl/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/pl/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/pl/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/pl/pacs.028.001.05/) | FI to FI Payment Status Request |

## Model dostarczania

Każdy obsługiwany typ wiadomości jest wspierany przez zasoby szablonów i logikę walidacji, dzięki czemu zespoły mogą standaryzować generowanie i testy regresji w wielu kanałach.

## Kontekst rynkowy 2026

- **SEPA SCT / SCT Inst**: pacs.008 pozostaje kluczowy dla wymiany przelewów i przetwarzania płatności natychmiastowych.
- **CBPR+**: pacs.008 nadal zastępuje transgraniczne ładunki w stylu MT103 bogatszymi danymi strukturalnymi.
- **Adresy strukturalne**: aktualne wytyczne rynkowe wskazują na przejście w listopadzie 2026 od w pełni niestrukturalnych adresów pocztowych.
- **Metoda seryjna i STP**: wieloetapowe łańcuchy bank-do-banku nadal mają znaczenie, a warianty przetwarzania bezpośredniego pozostają istotne dla efektywności operacyjnej.

## Możliwości operacyjne

pacs008 zapewnia generowanie i walidację opartą na szablonach w ramach obsługiwanych rewizji definicji wiadomości:

- porównywać wersje
- przeprowadzać testy regresji aktualizacji schematów
- wzmacniać wychodzące dane wiadomości płatniczych przed wydaniem
- wspierać zespoły produktu, operacji i migracji z jednej bazy kodu

