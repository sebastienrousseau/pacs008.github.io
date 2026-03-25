---
title: "Glosariusz ISO 20022 | pacs008"
description: Definicje kluczowych terminów ISO 20022 i komunikacji płatniczej używanych w pacs.008 i powiązanych komunikatach.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Glosariusz ISO 20022

Ten glosariusz definiuje kluczowe terminy, skróty i koncepcje techniczne używane w komunikatach pacs ISO 20022 i na tej stronie.

## A

**ACH** — Automated Clearing House (Automatyczna Izba Rozliczeniowa). Sieć przetwarzająca wsadowe płatności elektroniczne między instytucjami finansowymi.

**AdrLine** — Address Line (Wiersz adresu). Pole adresu w formie wolnego tekstu w strukturach adresów pocztowych ISO 20022. Do 7 wierszy po 70 znaków. Zastępowane strukturalnymi elementami adresowymi dla CBPR+ do listopada 2026.

**ACCP** — Accepted Customer Profile (Profil klienta zaakceptowany). Kod statusu pacs.002 wskazujący, że poprzednie kontrole (składnia, profil klienta) zostały zaliczone.

**ACSC** — Accepted Settlement Completed (Rozliczenie zakończone). Kod statusu pacs.002 potwierdzający zakończenie rozliczenia na rachunku dłużnika.

**ACSP** — Accepted Settlement in Process (Rozliczenie w toku). Kod statusu pacs.002 wskazujący, że wszystkie kontrole zostały zaliczone i rozliczenie jest w toku.

## B

**BAH** — Business Application Header (head.001). Znormalizowana koperta opakowująca komunikaty biznesowe ISO 20022 do transportu przez SWIFT. Zawiera informacje o trasowaniu, identyfikator definicji komunikatu oraz BIC nadawcy/odbiorcy.

**BIC** — Business Identifier Code (ISO 9362). 8- lub 11-znakowy kod jednoznacznie identyfikujący instytucję finansową. Format: BBBBCCLL (kod banku + kraj + lokalizacja) z opcjonalnym kodem oddziału BBB.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. Program SWIFT dotyczący migracji transgranicznych komunikatów płatniczych z MT na ISO 20022. Uruchomiony w marcu 2023.

**CdtTrfTxInf** — Credit Transfer Transaction Information (Informacja o transakcji polecenia przelewu). Główny blok budulcowy na poziomie transakcji w pacs.008 zawierający szczegóły płatności, strony, kwoty i informacje o przelewie.

**ChrgBr** — Charge Bearer (Ponoszący opłaty). Określa, kto ponosi opłaty transakcyjne. Wartości: DEBT (dłużnik), CRED (wierzyciel), SHAR (dzielone), SLEV (poziom usługi, tylko SEPA).

**CLRG** — Rozliczenie przez system rozliczeniowy. Metoda rozliczenia, w której środki przechodzą przez system rozliczeniowy taki jak TARGET2, EURO1 lub CHIPS.

**COVE** — Rozliczenie metodą pokrycia. Metoda rozliczenia, w której oddzielna płatność pokrycia pacs.009 obsługuje finansowanie między korespondentami, podczas gdy pacs.008 przenosi dane klienta bezpośrednio.

**CSM** — Clearing and Settlement Mechanism (Mechanizm rozliczeniowy). Infrastruktura przetwarzająca i rozliczająca instrukcje płatnicze między instytucjami uczestniczącymi.

## D

**Dbtr** — Debtor (Dłużnik). Strona, która jest winna środki i inicjuje płatność. W pacs.008 element Dbtr zawiera nazwę, adres pocztowy, identyfikację i kraj zamieszkania dłużnika.

**DbtrAgt** — Debtor Agent (Agent dłużnika). Instytucja finansowa obsługująca rachunek dłużnika i wysyłająca instrukcję pacs.008.

## E

**E2E ID** — End-to-End Identification (EndToEndId). Referencja przypisana przez zleceniodawcę, która musi pozostać niezmieniona przez wszystkich agentów w łańcuchu płatności. Używana do identyfikowalności na poziomie klienta.

**EPC** — European Payments Council (Europejska Rada ds. Płatności). Organ zarządzający regulaminami schematów płatności SEPA dla poleceń przelewu i poleceń zapłaty.

## F

**FI** — Financial Institution (Instytucja finansowa). Bank lub inna instytucja uczestnicząca w rozliczaniu płatności.

**FIToFI** — Financial Institution to Financial Institution. Opisuje domenę międzybankową, w której działają komunikaty pacs.

## G

**gpi** — Global Payments Innovation. Inicjatywa SWIFT na rzecz szybszych, przejrzystych płatności transgranicznych. Wykorzystuje UETR do śledzenia end-to-end za pośrednictwem opartego na chmurze Trackera.

**GrpHdr** — Group Header (Nagłówek grupy). Blok metadanych na poziomie komunikatu w komunikatach pacs. Zawiera MsgId, CreDtTm, NbOfTxs, informacje o rozliczeniu i informacje o typie płatności.

## H

**Adres hybrydowy** — Format adresu pocztowego łączący elementy strukturalne (StrtNm, TwnNm, Ctry) z nieustrukturyzowanymi elementami AdrLine. Dozwolony w okresie przejściowym przed terminem adresów strukturalnych z listopada 2026.

## I

**IBAN** — International Bank Account Number (ISO 13616) (Międzynarodowy Numer Rachunku Bankowego). Znormalizowany format numeru rachunku do płatności transgranicznych i krajowych. Walidowany przy użyciu sumy kontrolnej ISO 7064 Mod 97-10.

**INDA** — Instructed Agent settlement (Rozliczenie przez agenta instruowanego). Metoda rozliczenia, w której środki rozliczane są w księgach agenta instruowanego, gdzie agent dłużnika prowadzi rachunek nostro.

**INGA** — Instructing Agent settlement (Rozliczenie przez agenta instruującego). Metoda rozliczenia, w której środki rozliczane są w księgach agenta instruującego, gdzie agent instruowany prowadzi rachunek nostro.

**InstrId** — Instruction Identification (Identyfikacja instrukcji). Referencja punkt-punkt między sąsiednimi agentami w łańcuchu płatności. Może zmieniać się przy każdym przeskoku.

**IntrBkSttlmAmt** — Interbank Settlement Amount (Kwota rozliczenia międzybankowego). Kwota rozliczana między agentem instruującym a instruowanym w walucie rozliczenia.

**ISO 20022** — Międzynarodowy standard elektronicznej wymiany danych między instytucjami finansowymi. Definiuje wspólny model danych i formaty komunikatów oparte na XML dla płatności, papierów wartościowych, finansowania handlu i innych dziedzin finansowych.

## L

**LEI** — Legal Entity Identifier (ISO 17442). 20-znakowy kod alfanumeryczny jednoznacznie identyfikujący podmioty prawne uczestniczące w transakcjach finansowych. Używany w OrgId/LEI dla stron i FinInstnId/LEI dla agentów.

## M

**MsgId** — Message Identification (Identyfikacja komunikatu). Unikalny identyfikator koperty komunikatu, przypisany przez agenta wysyłającego. Zmienia się przy każdym przeskoku w łańcuchu płatności.

**MT** — Message Type (Typ komunikatu). Starszy format komunikatów SWIFT (np. MT103 dla poleceń przelewu klienta, MT202 dla transferów między instytucjami finansowymi). Zastępowany komunikatami MX ISO 20022.

**MX** — Format komunikatu XML ISO 20022 używany przez SWIFT. Komunikaty MX zastępują komunikaty MT dla płatności transgranicznych w ramach CBPR+.

## N

**NbOfTxs** — Number of Transactions (Liczba transakcji). Element nagłówka grupy wskazujący, ile transakcji zawiera komunikat.

## P

**pacs** — Payments Clearing and Settlement (Rozliczanie płatności). Domena biznesowa ISO 20022 obejmująca komunikaty płatności międzybankowych.

**pacs.002** — Raport o statusie płatności FI-FI. Raportuje status przetwarzania (zaakceptowany, odrzucony, oczekujący, rozliczony) wcześniejszej instrukcji płatniczej.

**pacs.003** — Polecenie zapłaty klienta FI-FI. Przenosi instrukcję polecenia zapłaty klienta między bankami w celu inkasa środków.

**pacs.004** — Zwrot płatności. Zwraca rozliczone środki przez łańcuch płatności, gdy płatność nie może zostać zastosowana.

**pacs.007** — Odwrócenie płatności FI-FI. Odwraca instrukcję płatniczą od oryginalnego nadawcy do przodu przez łańcuch.

**pacs.008** — Polecenie przelewu klienta FI-FI. Główny komunikat międzybankowy dla poleceń przelewu klienta. Zastępuje MT103.

**pacs.009** — Przelew instytucji finansowej. Przenosi środki między bankami na ich własny rachunek. Obejmuje finansowanie, płatności pokrycia i zarządzanie płynnością. Zastępuje MT202/MT202COV.

**pacs.010** — Polecenie zapłaty instytucji finansowej. Umożliwia jednemu bankowi obciążenie własnego rachunku innego banku w ramach umowy dwustronnej.

**pacs.028** — Żądanie statusu płatności FI-FI. Aktywnie żąda statusu wcześniejszej płatności, gdy nie nadeszła aktualizacja pacs.002.

**pain** — Payment Initiation (Inicjacja płatności). Domena biznesowa ISO 20022 obejmująca komunikaty klient-bank (np. pain.001 dla inicjacji polecenia przelewu).

**PII** — Personally Identifiable Information (Dane umożliwiające identyfikację osoby). Dane mogące zidentyfikować osobę. pacs008 maskuje PII w strukturalnych logach.

**PstlAdr** — Postal Address (Adres pocztowy). Struktura adresowa używana dla stron w komunikatach pacs. Obsługuje formaty ustrukturyzowane (StrtNm, TwnNm, Ctry) i nieustrukturyzowane (AdrLine).

## R

**RJCT** — Rejected (Odrzucony). Kod statusu pacs.002 wskazujący, że płatność została odrzucona.

**RmtInf** — Remittance Information (Informacja o przelewie). Dane referencyjne płatności przenoszone w pacs.008. Obsługuje formaty nieustrukturyzowane (tekst swobodny, maks. 140 znaków) i ustrukturyzowane (referencje dokumentów, kwoty, referencje wierzyciela).

**RTGS** — Real-Time Gross Settlement (Rozliczenie brutto w czasie rzeczywistym). System płatności, w którym transakcje rozliczane są indywidualnie i w czasie rzeczywistym (np. TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. Schemat polecenia przelewu w euro zarządzany przez EPC, wykorzystujący pacs.008.

**SCT Inst** — SEPA Instant Credit Transfer. Wariant płatności natychmiastowej SCT, rozliczenie w mniej niż 10 sekund.

**SDD** — SEPA Direct Debit. Schemat polecenia zapłaty w euro zarządzany przez EPC, wykorzystujący pacs.003.

**SEPA** — Single Euro Payments Area (Jednolity Obszar Płatności w Euro). Inicjatywa integracji płatności obejmująca polecenia przelewu, polecenia zapłaty i płatności kartowe w euro w 36 krajach europejskich.

**SLEV** — Service Level (Poziom usługi). Obowiązkowy kod ponoszenia opłat dla SEPA. Oznacza, że opłaty podlegają zasadom schematu bez potrąceń z kwoty przelewu.

**STP** — Straight-Through Processing (Przetwarzanie bezpośrednie). Zautomatyzowane przetwarzanie płatności end-to-end bez interwencji ręcznej.

**SttlmMtd** — Settlement Method (Metoda rozliczenia). Definiuje sposób rozliczenia międzybankowego: CLRG (system rozliczeniowy), INDA (agent instruowany), INGA (agent instruujący) lub COVE (płatność pokrycia).

## T

**TxId** — Transaction Identification (Identyfikacja transakcji). Referencja międzybankowa przypisana przez pierwszego agenta instruującego. Nie może być zmieniana przez kolejnych agentów.

## U

**UETR** — Unique End-to-End Transaction Reference. Identyfikator UUID v4 generowany przez agenta dłużnika i przenoszony bez zmian przez wszystkie segmenty płatności do śledzenia gpi.

## X

**XSD** — XML Schema Definition (Definicja schematu XML). Formalny schemat definiujący strukturę, elementy i typy danych komunikatu XML ISO 20022.

**XXE** — XML External Entity (Zewnętrzna encja XML). Podatność bezpieczeństwa w parsowaniu XML. pacs008 zapobiega atakom XXE używając defusedxml.

## Referencje

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
