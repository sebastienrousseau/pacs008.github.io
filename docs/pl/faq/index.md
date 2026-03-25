---
title: "Często zadawane pytania | pacs008"
description: Najczęstsze pytania dotyczące komunikatów pacs ISO 20022, migracji CBPR+, wyboru komunikatów, implementacji i zestawu narzędzi pacs008.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Często zadawane pytania

Ta strona odpowiada na najczęstsze pytania dotyczące komunikatów pacs ISO 20022, ich współdziałania oraz sposobu, w jaki pacs008 pomaga zespołom w ich implementacji.

## Ogólne

### Czym jest ISO 20022?

ISO 20022 to międzynarodowy standard komunikacji finansowej. Definiuje wspólny język i model dla komunikatów płatniczych wymienianych między instytucjami finansowymi. W przeciwieństwie do starszych formatów, takich jak SWIFT MT, ISO 20022 wykorzystuje XML i obsługuje bogatsze, bardziej ustrukturyzowane dane dla stron, kwot i referencji.

### Czym są komunikaty pacs?

Rodzina komunikatów pacs (payments clearing and settlement) obejmuje międzybankowe instrukcje płatnicze, raporty o statusie, zwroty, odwrócenia i zapytania. Obejmuje pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 i pacs.028. Każdy komunikat pełni określoną rolę w cyklu życia płatności.

### Czym różnią się komunikaty pacs od komunikatów SWIFT MT?

Komunikaty SWIFT MT używają płaskiego formatu znaczników pól (np. MT103 dla poleceń przelewu klienta). Komunikaty pacs używają hierarchicznego XML z bogatszymi strukturami danych. Kluczowe różnice obejmują obsługę wielu transakcji na komunikat, ustrukturyzowaną identyfikację stron (LEI, wiele identyfikatorów), ustrukturyzowane adresy pocztowe i ustrukturyzowane informacje o przelewie. MT103 odpowiada pacs.008, MT202 odpowiada pacs.009, a tekst statusu MT199 jest zastępowany przez pacs.002.

### Jaka jest relacja między komunikatami pain i pacs?

Komunikaty pain (payment initiation) przesyłane są między klientem a jego bankiem. Komunikaty pacs przesyłane są między bankami. Inicjacja polecenia przelewu pain.001 z banku dłużnika staje się instrukcją międzybankową pacs.008. Oba domeny dzielą wspólne elementy danych, ale obsługują różne części łańcucha płatności.

## Wybór komunikatów

### Kiedy powinienem użyć pacs.008?

Użyj pacs.008 dla instrukcji polecenia przelewu klienta między bankami. Przenosi dane stron dłużnika i wierzyciela, kwoty, informacje o przelewie i szczegóły rozliczenia. Jest to główny komunikat do wysyłania płatności klientów przez sieć międzybankową, zarówno krajowo (SEPA), jak i transgranicznie (CBPR+).

### Kiedy powinienem użyć pacs.009 zamiast pacs.008?

Użyj pacs.009 dla transferów na rachunek własny instytucji, segmentów finansowania i płatności pokrycia. W przeciwieństwie do pacs.008, który przenosi płatność klienta w imieniu dłużnika, pacs.009 przenosi środki między bankami na ich własny rachunek. W przepływach metody pokrycia pacs.009 przenosi finansowanie, podczas gdy pacs.008 przenosi instrukcję klienta na oddzielnej ścieżce.

### Jaka jest różnica między pacs.004 a pacs.007?

pacs.004 zwraca rozliczone środki ze strony odbierającej z powrotem przez łańcuch. pacs.007 odwraca płatność ze strony instruującej do przodu przez łańcuch. Użyj pacs.004, gdy bank beneficjenta nie może zastosować kredytu po rozliczeniu. Użyj pacs.007, gdy zleceniodawca odkryje błąd, duplikat lub oszustwo.

### Kiedy powinienem użyć pacs.028 zamiast czekać na pacs.002?

Użyj pacs.028, gdy musisz aktywnie zapytać o status płatności, która nie otrzymała terminowej aktualizacji pacs.002. pacs.002 jest sterowany zdarzeniami (agent odbierający wysyła go proaktywnie), podczas gdy pacs.028 jest sterowany wyjątkami (agent instruujący go żąda). Użyj pacs.028 dla opóźnionych, niejasnych lub brakujących aktualizacji płatności, nie jako rutynowy ruch.

### Do czego służy pacs.003?

pacs.003 przenosi instrukcje polecenia zapłaty klienta między bankami. Agent wierzyciela wysyła go do agenta dłużnika w celu pobrania środków. Wymaga ważnej referencji mandatu i obsługuje schematy polecenia zapłaty SEPA Core i B2B. Nie jest używany do poleceń przelewu ani obciążeń rachunku własnego instytucji.

### Do czego służy pacs.010?

pacs.010 obsługuje polecenia zapłaty między instytucjami finansowymi na ich własnych rachunkach. Jest używany do inkaso między bankami, takich jak opłaty, wezwania do uzupełnienia depozytu i podobne zobowiązania wynikające z umów dwustronnych. Nie jest używany do poleceń zapłaty klientów ani poleceń przelewu.

## Struktura komunikatu

### Czym jest Group Header (GrpHdr)?

Group Header pojawia się dokładnie raz na komunikat pacs. Zawiera identyfikator komunikatu (MsgId), znacznik czasu utworzenia (CreDtTm), liczbę transakcji (NbOfTxs), informacje o rozliczeniu (SttlmInf) oraz opcjonalnie całkowitą kwotę rozliczenia międzybankowego i informacje o typie płatności. Identyfikuje kopertę komunikatu, a nie poszczególne transakcje biznesowe.

### Jakie są identyfikatory płatności w pacs.008?

pacs.008 używa czterech głównych identyfikatorów. MsgId identyfikuje kopertę komunikatu i zmienia się przy każdym przeskoku. InstrId jest referencją punkt-punkt między sąsiednimi agentami i może zmieniać się przy każdym przeskoku. EndToEndId jest ustawiany przez zleceniodawcę i nie może być zmieniany przez żadnego agenta w łańcuchu. TxId jest przypisywany przez pierwszego agenta instruującego i pozostaje stały w przestrzeni międzybankowej. UETR jest identyfikatorem UUID, który pozostaje niezmieniony we wszystkich segmentach do śledzenia end-to-end.

### Jakie metody rozliczenia są dostępne?

Zdefiniowano cztery metody rozliczenia. CLRG rozlicza przez system rozliczeniowy, taki jak TARGET2, EURO1 lub CHIPS. INDA rozlicza w księgach agenta instruowanego, gdzie agent dłużnika prowadzi rachunek. INGA rozlicza w księgach agenta instruującego, gdzie agent instruowany prowadzi rachunek. COVE rozlicza poprzez oddzielną płatność pokrycia przenoszoną przez pacs.009.

### Co oznaczają kody ponoszenia opłat?

DEBT oznacza, że wszystkie opłaty ponosi dłużnik (odpowiednik MT103 OUR). CRED oznacza, że wszystkie opłaty ponosi wierzyciel (odpowiednik BEN). SHAR oznacza, że opłaty są dzielone między agentów dłużnika i wierzyciela (odpowiednik SHA). SLEV oznacza, że opłaty podlegają zasadom poziomu usługi i jest obowiązkowy dla poleceń przelewu SEPA.

## CBPR+ i migracja

### Czym jest CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) to program SWIFT dotyczący przyjęcia ISO 20022 w transgranicznej komunikacji płatniczej. Uruchomiony w marcu 2023 roku, zastępuje komunikaty MT odpowiednikami pacs. CBPR+ wymaga pacs.002 dla całej komunikacji statusowej, obsługuje bogatsze dane stron i ustrukturyzowane adresy oraz wykorzystuje śledzenie oparte na UETR poprzez gpi.

### Co stało się z okresem współistnienia MT/MX?

Okres współistnienia dla transgranicznych instrukcji płatniczych zakończył się w listopadzie 2025 roku. Od tego czasu komunikaty CBPR+ muszą używać formatu ISO 20022 (MX). Usługi tłumaczenia, które konwertowały między MT i MX podczas przejścia, nie są już dostępne dla nowych przepływów. Banki muszą teraz wysyłać i odbierać natywne komunikaty pacs.

### Czym jest termin adresów strukturalnych z listopada 2026?

Od listopada 2026 SWIFT CBPR+ wymaga ustrukturyzowanych adresów pocztowych w transgranicznych komunikatach płatniczych. Nieustrukturyzowane wiersze adresu (samo AdrLine) nie będą już akceptowane dla kluczowych pól stron. Wymagane są co najmniej TwnNm i Ctry, z zaleceniem StrtNm i BldgNb lub PstBx. Poprawia to kontrolę sankcji i zmniejsza naprawy ręczne.

### Jak pacs.008 zastępuje MT103?

pacs.008 zastępuje MT103 i MT103+ dla poleceń przelewu klienta. Główne mapowanie: pole 20 MT103 odpowiada MsgId lub InstrId; pole 32A dzieli się na IntrBkSttlmDt i IntrBkSttlmAmt; pole 50a odpowiada Dbtr i DbtrAcct; pole 59a odpowiada Cdtr i CdtrAcct; pole 70 odpowiada RmtInf; pole 71A odpowiada ChrgBr. pacs.008 dodaje UETR, ustrukturyzowane informacje o przelewie, identyfikację LEI i obsługuje wiele transakcji na komunikat.

### Jak pacs.009 zastępuje MT202?

pacs.009 zastępuje MT202 i MT202COV dla transferów między instytucjami. W przepływach metody pokrycia MT202COV (który przenosił zarówno finansowanie, jak i dane klienta) dzieli się czysto: pacs.009 przenosi segment finansowania, podczas gdy pacs.008 przenosi instrukcję klienta bezpośrednio. Ta separacja poprawia jakość danych i zmniejsza problemy z uzgodnieniami.

## Szczegóły techniczne

### Czym są adresy ustrukturyzowane a nieustrukturyzowane?

Adresy ustrukturyzowane używają oddzielnych elementów XML dla każdego składnika: StrtNm (ulica), BldgNb (numer budynku), PstCd (kod pocztowy), TwnNm (miasto), Ctry (kraj) oraz opcjonalnych elementów jak Flr, Room i DstrctNm. Adresy nieustrukturyzowane używają do siedmiu elementów AdrLine z tekstem dowolnym. Adresy hybrydowe łączą oba podczas okresu przejściowego. Po listopadzie 2026 CBPR+ wymaga formatu ustrukturyzowanego.

### Czym jest UETR i jak działa śledzenie gpi?

UETR (Unique End-to-End Transaction Reference) to identyfikator UUID v4 generowany przez agenta dłużnika i przenoszony bez zmian przez wszystkie segmenty płatności. Pojawia się w pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 i pacs.028. SWIFT gpi używa UETR do śledzenia płatności przez bazę danych Tracker w chmurze. Każdy agent potwierdza odbiór i przetworzenie, umożliwiając widoczność end-to-end i monitorowanie SLA.

### Jakie są typowe kody statusu pacs.002?

ACCP oznacza zaakceptowany po kontroli profilu klienta. ACSP oznacza zaakceptowany i rozliczenie w toku. ACSC oznacza zakończenie rozliczenia na rachunku dłużnika. RJCT oznacza odrzucony (z kodem przyczyny w StsRsnInf). PDNG oznacza oczekujący na dalsze przetwarzanie. RCVD oznacza odebrany, ale jeszcze nie przetworzony. Każdy status może zawierać ustrukturyzowany kod przyczyny, taki jak AC01 (nieprawidłowy rachunek), AM04 (niewystarczające środki) lub RC01 (nieprawidłowy BIC).

### Jakie są typowe kody przyczyn zwrotu w pacs.004?

Częste kody przyczyn zwrotu obejmują AC01 (nieprawidłowy numer rachunku), AC04 (zamknięty rachunek), AC06 (zablokowany rachunek), AM04 (niewystarczające środki), BE04 (brak adresu wierzyciela), CUST (na żądanie klienta), DUPL (zduplikowana płatność), FOCR (po żądaniu anulowania) i FR01 (oszustwo). Pełna lista jest zdefiniowana w Zewnętrznych Zbiorach Kodów ISO 20022.

### Czym są ustrukturyzowane informacje o przelewie?

Ustrukturyzowany przelew w pacs.008 używa elementu RmtInf/Strd do przenoszenia referencji dokumentów (numery faktur, noty kredytowe), kwot (należne, przelane, podatek, rabat) oraz referencji wierzyciela (referencje RF ISO 11649). Umożliwia to automatyczne dopasowywanie faktur i uzgadnianie. Typowe kody typów dokumentów obejmują CINV (faktura handlowa), CREN (nota kredytowa) i SOAC (wyciąg z rachunku).

### Czym jest LEI i kiedy jest używany?

LEI (Legal Entity Identifier) to 20-znakowy kod alfanumeryczny zgodny z ISO 17442. Jednoznacznie identyfikuje podmioty prawne uczestniczące w transakcjach finansowych. W komunikatach pacs LEI pojawia się w OrgId/LEI dla stron i FinInstnId/LEI dla agentów. CBPR+ coraz bardziej zachęca do stosowania LEI w identyfikacji stron i agentów. Poprawia disambiguation podmiotów i wspiera wymagania sprawozdawczości regulacyjnej.

## O zestawie narzędzi pacs008

### Co robi pacs008?

pacs008 to zestaw narzędzi Python, który generuje, waliduje i wysyła komunikaty płatnicze ISO 20022. Odczytuje dane płatnicze ze źródeł CSV, JSON, JSONL, SQLite i Parquet, waliduje względem JSON Schema i XSD, sprawdza identyfikatory IBAN i BIC, czyści dane pod kątem zgodności ze znakami SWIFT i generuje pliki XML. Udostępnia REST API, CLI i bibliotekę Python.

### Jakie typy komunikatów obsługuje pacs008?

pacs008 obsługuje osiem typów komunikatów: pacs.002.001.12 (raport o statusie), pacs.003.001.09 (polecenie zapłaty klienta), pacs.004.001.11 (zwrot płatności), pacs.007.001.11 (odwrócenie płatności), pacs.008.001.13 (polecenie przelewu klienta), pacs.009.001.10 (przelew instytucji finansowej), pacs.010.001.05 (polecenie zapłaty instytucji finansowej) i pacs.028.001.05 (żądanie statusu płatności).

### Jak pacs008 pomaga z terminem adresów strukturalnych 2026?

pacs008 waliduje ustrukturyzowane i hybrydowe pola adresów pocztowych przed generacją XML. Oznacza nieustrukturyzowane dane adresowe, które nie spełnią wymagań po terminie z listopada 2026, obsługuje zarówno formaty hybrydowe przed terminem, jak i formaty tylko ustrukturyzowane po terminie oraz integruje kontrole jakości adresów w potokach CI i przepływach pracy walidacji wsadowej.

### Czy pacs008 może walidować dane bez generowania XML?

Tak. Użyj flagi CLI `--dry-run` lub punktu końcowego API `POST /validate`, aby zwalidować dane płatnicze bez generowania XML. Potok walidacji sprawdza zgodność z JSON Schema, format i sumę kontrolną IBAN, strukturę BIC oraz zgodność ze znakami SWIFT. Kod wyjścia lub odpowiedź API wskazuje, czy walidacja przeszła pomyślnie czy nie.

## Referencje

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
