---
title: "Często zadawane pytania o ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# Często zadawane pytania o ISO 20022

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Ogólne

### Czym jest ISO 20022?

ISO 20022 to międzynarodowy standard komunikacji finansowej. Definiuje wspólny język i model dla komunikatów płatniczych wymienianych między instytucjami finansowymi. W odróżnieniu od starszych formatów takich jak SWIFT MT, ISO 20022 wykorzystuje XML i obsługuje bogatsze, bardziej ustrukturyzowane dane dotyczące stron, kwot i referencji.

### Czym są komunikaty pacs?

Rodzina komunikatów pacs (payments clearing and settlement) obejmuje międzybankowe instrukcje płatnicze, raporty statusu, zwroty, odwrócenia i zapytania. Zawiera pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 i pacs.028. Każdy komunikat pełni określoną rolę w cyklu życia płatności.

### Czym różnią się komunikaty pacs od komunikatów SWIFT MT?

Komunikaty SWIFT MT używają płaskiego formatu z etykietami pól (np. MT103 dla przelewów klienckich). Komunikaty pacs używają hierarchicznego XML z bogatszymi strukturami danych. Kluczowe różnice obejmują obsługę wielu transakcji w jednym komunikacie, ustrukturyzowaną identyfikację stron (LEI, wiele identyfikatorów), ustrukturyzowane adresy pocztowe i ustrukturyzowane informacje o przelewie. MT103 odpowiada pacs.008, MT202 odpowiada pacs.009, a tekst statusu MT199 jest zastępowany przez pacs.002.

### Jaka jest relacja między komunikatami pain a pacs?

Komunikaty pain (payment initiation) podróżują między klientem a jego bankiem. Komunikaty pacs podróżują między bankami. Inicjacja przelewu pain.001 z banku dłużnika staje się instrukcją międzybankową pacs.008. Oba domeny dzielą wspólne elementy danych, ale obsługują różne części łańcucha płatności.

## Wybór komunikatu

### Kiedy powinienem użyć pacs.008?

Używaj pacs.008 dla instrukcji przelewów klienckich między bankami. Transportuje dane stron dłużnika i wierzyciela, kwoty, informacje o przelewie i szczegóły rozliczenia. Jest to główny komunikat do wysyłania płatności klienckich w sieci międzybankowej, zarówno krajowo (SEPA), jak i transgranicznie (CBPR+).

### Kiedy powinienem użyć pacs.009 zamiast pacs.008?

Używaj pacs.009 dla transferów na własny rachunek instytucji, etapów finansowania i płatności pokrycia. W odróżnieniu od pacs.008, który transportuje płatność kliencką w imieniu dłużnika, pacs.009 przenosi środki między bankami na ich własny rachunek. W przepływach pokrycia pacs.009 zapewnia finansowanie, podczas gdy pacs.008 transportuje instrukcję klienta osobną ścieżką.

### Jaka jest różnica między pacs.004 a pacs.007?

pacs.004 zwraca rozliczone środki ze strony odbierającej wstecz przez łańcuch. pacs.007 odwraca płatność ze strony instruującej oryginalnie do przodu przez łańcuch. Używaj pacs.004, gdy bank beneficjenta nie może zastosować uznania po rozliczeniu. Używaj pacs.007, gdy zleceniodawca odkryje błąd, duplikat lub oszustwo.

### Kiedy powinienem użyć pacs.028 zamiast czekać na pacs.002?

Używaj pacs.028, gdy musisz aktywnie zapytać o status płatności, która nie otrzymała terminowej aktualizacji pacs.002. pacs.002 jest sterowany zdarzeniami (agent odbierający wysyła go proaktywnie), podczas gdy pacs.028 jest sterowany wyjątkami (agent instruujący go żąda). Używaj pacs.028 dla opóźnionych, niejasnych lub brakujących aktualizacji płatności, nie jako ruch rutynowy.

### Do czego służy pacs.003?

pacs.003 transportuje instrukcje polecenia zapłaty klienta między bankami. Agent wierzyciela wysyła go do agenta dłużnika w celu zebrania środków. Wymaga ważnej referencji mandatu i obsługuje schematy poleceń zapłaty SEPA Core i B2B. Nie jest używany do przelewów ani do poleceń zapłaty na własny rachunek między instytucjami.

### Do czego służy pacs.010?

pacs.010 obsługuje polecenia zapłaty między instytucjami finansowymi na ich własnych rachunkach. Służy do inkasa międzybankowego, takiego jak opłaty, wezwania do uzupełnienia depozytu i podobne zobowiązania w ramach umów dwustronnych. Nie jest używany do poleceń zapłaty klienckich ani do przelewów.

## Struktura komunikatu

### Czym jest nagłówek grupy (GrpHdr)?

Nagłówek grupy pojawia się dokładnie raz na komunikat pacs. Zawiera identyfikator komunikatu (MsgId), znacznik czasu utworzenia (CreDtTm), liczbę transakcji (NbOfTxs), informacje o rozliczeniu (SttlmInf) oraz opcjonalnie łączną kwotę rozliczenia międzybankowego i informacje o typie płatności. Identyfikuje kopertę komunikatu, a nie poszczególne transakcje biznesowe.

### Jakie są identyfikatory płatności w pacs.008?

pacs.008 używa czterech głównych identyfikatorów. MsgId identyfikuje kopertę komunikatu i zmienia się na każdym przeskoku. InstrId to referencja punkt-do-punktu między sąsiednimi agentami i może się zmieniać na każdym przeskoku. EndToEndId jest ustalany przez zleceniodawcę i nie może być zmieniany przez żadnego agenta w łańcuchu. TxId jest przypisywany przez pierwszego agenta instruującego i pozostaje stały w przestrzeni międzybankowej. UETR to UUID, który pozostaje niezmienny we wszystkich segmentach dla śledzenia end-to-end.

### Jakie metody rozliczenia są dostępne?

Zdefiniowane są cztery metody rozliczenia. CLRG rozlicza przez system rozrachunkowy taki jak TARGET2, EURO1 lub CHIPS. INDA rozlicza w księgach agenta instruowanego, gdzie agent dłużnika posiada rachunek. INGA rozlicza w księgach agenta instruującego, gdzie agent instruowany posiada rachunek. COVE rozlicza przez oddzielną płatność pokrycia transportowaną przez pacs.009.

### Co oznaczają kody ponoszącego opłaty?

DEBT oznacza, że wszystkie opłaty ponosi dłużnik (odpowiednik MT103 OUR). CRED oznacza, że wszystkie opłaty ponosi wierzyciel (odpowiednik BEN). SHAR oznacza, że opłaty są dzielone między agentów dłużnika i wierzyciela (odpowiednik SHA). SLEV oznacza, że opłaty podlegają regułom poziomu usługi i jest obowiązkowy dla przelewów SEPA.

## CBPR+ i migracja

### Czym jest CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) to program SWIFT do wdrożenia ISO 20022 w transgranicznej komunikacji płatniczej. Uruchomiony w marcu 2023, zastępuje komunikaty MT odpowiednikami pacs. CBPR+ wymaga pacs.002 dla całej komunikacji statusowej, obsługuje bogatsze dane o stronach i adresy strukturalne, oraz wykorzystuje śledzenie oparte na UETR przez gpi.

### Co stało się z okresem współistnienia MT/MX?

Okres współistnienia dla transgranicznych instrukcji płatniczych zakończył się w listopadzie 2025. Od tego czasu komunikaty CBPR+ muszą używać formatu ISO 20022 (MX). Usługi tłumaczeniowe, które konwertowały między MT a MX podczas przejścia, nie są już dostępne dla nowych przepływów. Banki muszą teraz wysyłać i odbierać natywne komunikaty pacs.

### Jaki jest termin wdrożenia adresów strukturalnych w listopadzie 2026?

Od listopada 2026 SWIFT CBPR+ wymaga strukturalnych adresów pocztowych w transgranicznych komunikatach płatniczych. Niestrukturalne linie adresowe (samo AdrLine) nie będą już akceptowane dla kluczowych pól stron. Jako minimum wymagane są TwnNm i Ctry, z zalecanymi StrtNm i BldgNb lub PstBx. Poprawia to screening sankcji i zmniejsza ręczne naprawy.

### Jak pacs.008 zastępuje MT103?

pacs.008 zastępuje MT103 i MT103+ dla przelewów klienckich. Kluczowe mapowanie: pole 20 MT103 odpowiada MsgId lub InstrId; pole 32A dzieli się na IntrBkSttlmDt i IntrBkSttlmAmt; pole 50a odpowiada Dbtr i DbtrAcct; pole 59a odpowiada Cdtr i CdtrAcct; pole 70 odpowiada RmtInf; pole 71A odpowiada ChrgBr. pacs.008 dodaje UETR, ustrukturyzowane informacje o przelewie, identyfikację LEI i obsługuje wiele transakcji w jednym komunikacie.

### Jak pacs.009 zastępuje MT202?

pacs.009 zastępuje MT202 i MT202COV dla transferów międzyinstytucjonalnych. W przepływach pokrycia MT202COV (który transportował zarówno finansowanie, jak i dane klienta bazowego) dzieli się czysto: pacs.009 transportuje segment finansowania, a pacs.008 transportuje instrukcję klienta bezpośrednio. Ta separacja poprawia jakość danych i zmniejsza problemy z uzgadnianiem.

## Szczegóły techniczne

### Czym są adresy strukturalne i niestrukturalne?

Adresy strukturalne używają oddzielnych elementów XML dla każdego komponentu: StrtNm (ulica), BldgNb (numer budynku), PstCd (kod pocztowy), TwnNm (miasto), Ctry (kraj) oraz opcjonalnych elementów takich jak Flr, Room i DstrctNm. Adresy niestrukturalne używają do siedmiu elementów AdrLine z tekstem swobodnym. Adresy hybrydowe łączą oba formaty w okresie przejściowym. Po listopadzie 2026 CBPR+ wymaga formatu strukturalnego.

### Czym jest UETR i jak działa śledzenie gpi?

UETR (Unique End-to-End Transaction Reference) to identyfikator UUID v4 generowany przez agenta dłużnika i transportowany bez zmian przez wszystkie segmenty płatności. Pojawia się w pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 i pacs.028. SWIFT gpi używa UETR do śledzenia płatności przez bazę danych Tracker w chmurze. Każdy agent potwierdza odbiór i przetwarzanie, umożliwiając widoczność end-to-end i monitorowanie SLA.

### Jakie są popularne kody statusu pacs.002?

ACCP oznacza zaakceptowany po weryfikacji profilu klienta. ACSP oznacza zaakceptowany i rozliczenie jest w toku. ACSC oznacza zakończone rozliczenie na rachunku dłużnika. RJCT oznacza odrzucony (z kodem powodu w StsRsnInf). PDNG oznacza oczekujący na dalsze przetwarzanie. RCVD oznacza otrzymany, ale jeszcze nieprzetworzony. Każdy status może zawierać strukturalny kod powodu, taki jak AC01 (nieprawidłowy numer rachunku), AM04 (niewystarczające środki) lub RC01 (nieprawidłowy BIC).

### Jakie są popularne kody powodu zwrotu w pacs.004?

Częste kody powodu zwrotu obejmują AC01 (nieprawidłowy numer rachunku), AC04 (zamknięty rachunek), AC06 (zablokowany rachunek), AM04 (niewystarczające środki), BE04 (brak adresu wierzyciela), CUST (na żądanie klienta), DUPL (zduplikowana płatność), FOCR (po żądaniu anulowania) i FR01 (oszustwo). Pełna lista jest zdefiniowana w External Code Sets ISO 20022.

### Czym jest strukturalna informacja o przelewie?

Strukturalna informacja o przelewie w pacs.008 używa elementu RmtInf/Strd do transportu referencji dokumentów (numery faktur, noty kredytowe), kwot (należna, przelana, podatek, rabat) i referencji wierzyciela (referencje RF ISO 11649). Umożliwia to automatyczne dopasowywanie faktur i uzgadnianie. Popularne kody typów dokumentów obejmują CINV (faktura handlowa), CREN (nota kredytowa) i SOAC (wyciąg z rachunku).

### Czym jest LEI i kiedy jest używany?

LEI (Legal Entity Identifier) to 20-znakowy kod alfanumeryczny według ISO 17442. Jednoznacznie identyfikuje podmioty prawne uczestniczące w transakcjach finansowych. W komunikatach pacs LEI pojawia się w OrgId/LEI dla stron i FinInstnId/LEI dla agentów. CBPR+ coraz bardziej zachęca do stosowania LEI w identyfikacji stron i agentów. Poprawia disambiguation podmiotów i wspiera wymogi sprawozdawczości regulacyjnej.

## O zestawie narzędzi pacs008

### Co robi pacs008?

pacs008 to zestaw narzędzi Python, który generuje, waliduje i dostarcza komunikaty płatnicze ISO 20022. Odczytuje dane płatnicze ze źródeł CSV, JSON, JSONL, SQLite i Parquet, waliduje względem JSON Schema i XSD, sprawdza identyfikatory IBAN i BIC, czyści dane pod kątem zgodności ze znakami SWIFT i generuje pliki XML. Udostępnia REST API, CLI i bibliotekę Python.

### Jakie typy komunikatów obsługuje pacs008?

pacs008 obsługuje osiem typów komunikatów: pacs.002.001.12 (raport statusu), pacs.003.001.09 (polecenie zapłaty klienta), pacs.004.001.11 (zwrot płatności), pacs.007.001.11 (odwrócenie płatności), pacs.008.001.13 (przelew kliencki), pacs.009.001.10 (przelew między instytucjami finansowymi), pacs.010.001.05 (polecenie zapłaty między instytucjami finansowymi) i pacs.028.001.05 (żądanie statusu płatności).

### Jak pacs008 pomaga z terminem wdrożenia adresów strukturalnych 2026?

pacs008 waliduje pola adresu pocztowego strukturalnego i hybrydowego przed generowaniem XML. Sygnalizuje niestrukturalne dane adresowe, które nie przejdą walidacji po terminie w listopadzie 2026, obsługuje formaty hybrydowe przed terminem i wyłącznie strukturalne po terminie, oraz integruje kontrole jakości adresów w pipeline'ach CI i przepływach walidacji wsadowej.

### Czy pacs008 może walidować dane bez generowania XML?

Tak. Użyj flagi CLI `--dry-run` lub endpointu API `POST /validate`, aby zwalidować dane płatnicze bez generowania XML. Pipeline walidacji sprawdza zgodność z JSON Schema, format i sumę kontrolną IBAN, strukturę BIC oraz zgodność ze znakami SWIFT. Kod wyjścia lub odpowiedź API wskazuje, czy walidacja zakończyła się sukcesem czy niepowodzeniem.

## Odniesienia

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

