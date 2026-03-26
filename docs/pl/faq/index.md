---
title: "Często zadawane pytania o ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# Często zadawane pytania o ISO 20022

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Ogólne

### Czym jest ISO 20022?

ISO 20022 to międzynarodowy standard komunikacji finansowej. Definiuje wspólny język i model dla komunikatów płatniczych wymienianych między instytucjami finansowymi. W odróżnieniu od starszych formatów takich jak SWIFT MT, ISO 20022 wykorzystuje XML i obsługuje bogatsze, bardziej ustrukturyzowane dane.

### Czym są komunikaty pacs?

Rodzina komunikatów pacs (payments clearing and settlement) obejmuje międzybankowe instrukcje płatnicze, raporty statusu, zwroty, odwrócenia i zapytania. Zawiera pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 i pacs.028.

### Czym różnią się komunikaty pacs od komunikatów SWIFT MT?

Komunikaty SWIFT MT używają płaskiego formatu z etykietami pól. Komunikaty pacs używają hierarchicznego XML z bogatszymi strukturami danych.

### Jaka jest relacja między komunikatami pain a pacs?

Komunikaty pain (payment initiation) podróżują między klientem a jego bankiem. Komunikaty pacs podróżują między bankami. Inicjacja przelewu pain.001 staje się instrukcją międzybankową pacs.008.

## Wybór komunikatu

### Kiedy powinienem użyć pacs.008?

Używaj pacs.008 dla instrukcji przelewów klienckich między bankami. Transportuje dane stron dłużnika i wierzyciela, kwoty, informacje o przelewie i szczegóły rozliczenia.

### Kiedy powinienem użyć pacs.009 zamiast pacs.008?

Używaj pacs.009 dla transferów na własny rachunek instytucji, etapów finansowania i płatności pokrycia.

### Jaka jest różnica między pacs.004 a pacs.007?

pacs.004 zwraca rozliczone środki ze strony odbierającej. pacs.007 odwraca płatność ze strony instruującej.

### Kiedy powinienem użyć pacs.028 zamiast czekać na pacs.002?

Używaj pacs.028, gdy musisz aktywnie zapytać o status płatności, która nie otrzymała terminowej aktualizacji pacs.002.

### Do czego służy pacs.003?

pacs.003 transportuje instrukcje polecenia zapłaty klienta między bankami w celu zebrania środków.

### Do czego służy pacs.010?

pacs.010 obsługuje polecenia zapłaty między instytucjami finansowymi na ich własnych rachunkach.

## Struktura komunikatu

### Czym jest nagłówek grupy (GrpHdr)?

Nagłówek grupy pojawia się dokładnie raz na komunikat pacs. Zawiera MsgId, CreDtTm, NbOfTxs i SttlmInf.

### Jakie są identyfikatory płatności w pacs.008?

pacs.008 używa czterech głównych identyfikatorów: MsgId, InstrId, EndToEndId, TxId i UETR. EndToEndId i TxId nie mogą być zmieniane przez żadnego agenta.

### Jakie metody rozliczenia są dostępne?

Cztery metody: CLRG, INDA, INGA i COVE.

### Co oznaczają kody ponoszącego opłaty?

DEBT — wszystkie opłaty ponosi dłużnik. CRED — wierzyciel. SHAR — dzielone. SLEV — obowiązkowy dla SEPA.

## CBPR+ i migracja

### Czym jest CBPR+?

CBPR+ to program SWIFT do wdrożenia ISO 20022 w transgranicznej komunikacji płatniczej. Uruchomiony w marcu 2023.

### Co stało się z okresem współistnienia MT/MX?

Okres współistnienia zakończył się w listopadzie 2025. Od tego czasu komunikaty CBPR+ muszą używać formatu ISO 20022 (MX).

### Jaki jest termin wdrożenia adresów strukturalnych w listopadzie 2026?

Od listopada 2026 SWIFT CBPR+ wymaga strukturalnych adresów pocztowych. Jako minimum wymagane są TwnNm i Ctry.

### Jak pacs.008 zastępuje MT103?

pacs.008 zastępuje MT103 i MT103+. Pole 20 MT103 mapuje na MsgId lub InstrId; pole 32A dzieli się na IntrBkSttlmDt i IntrBkSttlmAmt; pole 50a mapuje na Dbtr i DbtrAcct.

### Jak pacs.009 zastępuje MT202?

pacs.009 zastępuje MT202 i MT202COV. W przepływach pokrycia pacs.009 transportuje etap finansowania, a pacs.008 transportuje instrukcję klienta bezpośrednio.

## Szczegóły techniczne

### Czym są adresy strukturalne i niestrukturalne?

Adresy strukturalne używają oddzielnych elementów XML: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Adresy niestrukturalne używają do siedmiu elementów AdrLine.

### Czym jest UETR i jak działa śledzenie gpi?

UETR to identyfikator UUID v4 generowany przez agenta dłużnika i transportowany bez zmian przez wszystkie etapy płatności. SWIFT gpi używa UETR do śledzenia.

### Jakie są popularne kody statusu pacs.002?

ACCP (zaakceptowany), ACSP (rozliczenie w toku), ACSC (rozliczenie zakończone), RJCT (odrzucony), PDNG (oczekujący).

### Jakie są popularne kody powodu zwrotu w pacs.004?

AC01, AC04, AC06, AM04, BE04, CUST, DUPL, FOCR, FR01.

### Czym jest strukturalna informacja o przelewie?

Strukturalna informacja o przelewie w pacs.008 używa elementu RmtInf/Strd do transportu referencji dokumentów, kwot i referencji wierzyciela.

### Czym jest LEI i kiedy jest używany?

LEI to 20-znakowy kod alfanumeryczny według ISO 17442. W komunikatach pacs pojawia się w OrgId/LEI dla stron i FinInstnId/LEI dla agentów.

## O zestawie narzędzi pacs008

### Co robi pacs008?

pacs008 to zestaw narzędzi Python, który generuje, waliduje i dostarcza komunikaty płatnicze ISO 20022.

### Jakie typy komunikatów obsługuje pacs008?

Osiem typów: pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05 i pacs.028.001.05.

### Jak pacs008 pomaga z terminem wdrożenia adresów strukturalnych 2026?

pacs008 waliduje pola adresu pocztowego strukturalnego i hybrydowego przed generowaniem XML.

### Czy pacs008 może walidować dane bez generowania XML?

Tak. Użyj flagi CLI `--dry-run` lub endpointu API `POST /validate`.

## Odniesienia

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

