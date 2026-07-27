---
title: "Słownik pojęć ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# Słownik pojęć ISO 20022

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Automatyczna izba rozliczeniowa. Sieć przetwarzająca zbiorcze płatności elektroniczne między instytucjami finansowymi.

**AdrLine** — Linia adresowa. Pole adresowe w formacie tekstu wolnego w strukturach adresu pocztowego ISO 20022. Maksymalnie 7 linii po 70 znaków każda. Zastępowane przez strukturalne elementy adresowe dla CBPR+ do listopada 2026.

**ACCP** — Zaakceptowany profil klienta. Kod statusu pacs.002 wskazujący, że poprzednie kontrole (składnia, profil klienta) zostały zaliczone.

**ACSC** — Zaakceptowane rozliczenie zakończone. Kod statusu pacs.002 potwierdzający, że rozliczenie na koncie dłużnika zostało zakończone.

**ACSP** — Zaakceptowane rozliczenie w toku. Kod statusu pacs.002 wskazujący, że wszystkie kontrole zostały zaliczone i rozliczenie jest w toku.

## B

**BAH** — Nagłówek aplikacji biznesowej (head.001). Znormalizowana koperta opakowująca wiadomości biznesowe ISO 20022 do transportu przez SWIFT. Zawiera informacje o routingu, identyfikator definicji wiadomości oraz kody BIC nadawcy i odbiorcy.

**BIC** — Kod identyfikacyjny firmy (ISO 9362). 8- lub 11-znakowy kod jednoznacznie identyfikujący instytucję finansową. Format: BBBBCCLL (kod banku + kraj + lokalizacja) z opcjonalnym kodem oddziału BBB.

## C

**CBPR+** — Płatności i raportowanie transgraniczne Plus. Program SWIFT do migracji transgranicznej komunikacji płatniczej z MT na ISO 20022. Uruchomiony w marcu 2023.

**CdtTrfTxInf** — Informacje o transakcji przelewu kredytowego. Główny blok budulcowy na poziomie transakcji w pacs.008, zawierający szczegóły płatności, strony, kwoty i informacje o przelewie.

**ChrgBr** — Ponoszący opłaty. Określa, kto ponosi opłaty transakcyjne. Wartości: DEBT (dłużnik), CRED (wierzyciel), SHAR (współdzielone), SLEV (poziom usługi, tylko SEPA).

**CLRG** — Rozliczenie przez system rozrachunkowy. Metoda rozliczenia, w której środki przepływają przez system rozrachunkowy taki jak TARGET2, EURO1 lub CHIPS.

**COVE** — Rozliczenie metodą pokrycia. Metoda rozliczenia, w której oddzielna płatność pokrycia pacs.009 obsługuje finansowanie między korespondentami, podczas gdy pacs.008 przenosi dane klienta bezpośrednio.

**CSM** — Mechanizm rozliczania i rozrachunku. Infrastruktura przetwarzająca i rozliczająca instrukcje płatnicze między uczestniczącymi instytucjami.

## D

**Dbtr** — Dłużnik. Strona, która jest winna środki i inicjuje płatność. W pacs.008 element Dbtr zawiera nazwę dłużnika, adres pocztowy, identyfikację i kraj zamieszkania.

**DbtrAgt** — Agent dłużnika. Instytucja finansowa obsługująca konto dłużnika i wysyłająca instrukcję pacs.008.

## E

**E2E ID** — Identyfikacja end-to-end (EndToEndId). Referencja przypisana przez zleceniodawcę, która musi pozostać niezmieniona przez wszystkich agentów w łańcuchu płatności. Służy do identyfikowalności na poziomie klienta.

**EPC** — Europejska Rada ds. Płatności. Organ zarządzający regulaminami schematów płatności SEPA dla przelewów kredytowych i poleceń zapłaty.

## F

**FI** — Instytucja finansowa. Bank lub inna instytucja uczestnicząca w rozliczaniu i rozrachunku płatności.

**FIToFI** — Z instytucji finansowej do instytucji finansowej. Opisuje domenę międzybankową, w której operują komunikaty pacs.

## G

**gpi** — Globalna innowacja płatnicza. Inicjatywa SWIFT na rzecz szybszych, bardziej przejrzystych płatności transgranicznych. Wykorzystuje UETR do śledzenia end-to-end za pośrednictwem chmurowego Trackera.

**GrpHdr** — Nagłówek grupy. Blok metadanych na poziomie wiadomości w komunikatach pacs. Zawiera MsgId, CreDtTm, NbOfTxs, informacje o rozliczeniu i informacje o typie płatności.

## H

**Hybrid address** — Adres hybrydowy. Format adresu pocztowego łączący elementy strukturalne (StrtNm, TwnNm, Ctry) z niestrukturalnymi elementami AdrLine. Dozwolony w okresie przejściowym przed terminem wdrożenia adresów strukturalnych w listopadzie 2026.

## I

**IBAN** — Międzynarodowy numer rachunku bankowego (ISO 13616). Znormalizowany format numeru rachunku używany w płatnościach transgranicznych i krajowych. Walidowany przy użyciu sumy kontrolnej ISO 7064 Mod 97-10.

**INDA** — Rozliczenie przez agenta instruowanego. Metoda rozliczenia, w której środki rozliczane są w księgach agenta instruowanego, gdzie agent dłużnika posiada rachunek nostro.

**INGA** — Rozliczenie przez agenta instruującego. Metoda rozliczenia, w której środki rozliczane są w księgach agenta instruującego, gdzie agent instruowany posiada rachunek nostro.

**InstrId** — Identyfikacja instrukcji. Referencja punkt-punkt między sąsiednimi agentami w łańcuchu płatności. Może zmieniać się na każdym etapie.

**IntrBkSttlmAmt** — Kwota rozliczenia międzybankowego. Kwota rozliczana między agentem instruującym a agentem instruowanym, w walucie rozliczenia.

**ISO 20022** — Międzynarodowy standard elektronicznej wymiany danych między instytucjami finansowymi. Definiuje wspólny model danych i formaty wiadomości oparte na XML dla płatności, papierów wartościowych, finansowania handlu i innych dziedzin finansowych.

## L

**LEI** — Identyfikator podmiotu prawnego (ISO 17442). 20-znakowy kod alfanumeryczny jednoznacznie identyfikujący podmioty prawne uczestniczące w transakcjach finansowych. Używany w OrgId/LEI dla stron i FinInstnId/LEI dla agentów.

## M

**MsgId** — Identyfikacja wiadomości. Unikalny identyfikator koperty wiadomości, przypisany przez agenta wysyłającego. Zmienia się na każdym etapie łańcucha płatności.

**MT** — Typ wiadomości. Starszy format wiadomości SWIFT (np. MT103 dla przelewów klientów, MT202 dla transferów między instytucjami finansowymi). Zastępowany przez wiadomości MX ISO 20022.

**MX** — Format wiadomości XML ISO 20022 używany przez SWIFT. Wiadomości MX zastępują wiadomości MT dla płatności transgranicznych w ramach CBPR+.

## N

**NbOfTxs** — Liczba transakcji. Element nagłówka grupy wskazujący, ile pojedynczych transakcji zawiera wiadomość.

## P

**pacs** — Rozliczanie i rozrachunek płatności. Domena biznesowa ISO 20022 obejmująca międzybankowe komunikaty płatnicze.

**pacs.002** — Raport o statusie płatności FI do FI. Raportuje status przetwarzania (zaakceptowany, odrzucony, oczekujący, rozliczony) wcześniejszej instrukcji płatniczej.

**pacs.003** — Polecenie zapłaty klienta FI do FI. Przenosi instrukcję polecenia zapłaty klienta między bankami w celu pobrania środków.

**pacs.004** — Zwrot płatności. Zwraca rozliczone środki przez łańcuch płatności, gdy płatność nie może zostać zastosowana.

**pacs.007** — Odwrócenie płatności FI do FI. Odwraca instrukcję płatniczą od pierwotnego nadawcy przez łańcuch.

**pacs.008** — Przelew kredytowy klienta FI do FI. Główny komunikat międzybankowy dla przelewów kredytowych klientów. Zastępuje MT103.

**pacs.009** — Przelew kredytowy instytucji finansowej. Przemieszcza środki między bankami na ich własny rachunek. Obejmuje finansowanie, płatności pokrycia i zarządzanie płynnością. Zastępuje MT202/MT202COV.

**pacs.010** — Polecenie zapłaty instytucji finansowej. Umożliwia jednemu bankowi obciążenie rachunku własnego innego banku na podstawie umowy dwustronnej.

**pacs.028** — Zapytanie o status płatności FI do FI. Aktywnie żąda statusu wcześniejszej płatności, gdy nie nadeszła aktualizacja pacs.002.

**pain** — Inicjacja płatności. Domena biznesowa ISO 20022 obejmująca komunikaty klient-bank (np. pain.001 do inicjacji przelewu kredytowego).

**PII** — Dane umożliwiające identyfikację osoby. Dane pozwalające zidentyfikować osobę fizyczną. pacs008 maskuje PII w ustrukturyzowanych logach.

**PstlAdr** — Adres pocztowy. Struktura adresowa używana dla stron w komunikatach pacs. Obsługuje formaty strukturalne (StrtNm, TwnNm, Ctry) i niestrukturalne (AdrLine).

## R

**RJCT** — Odrzucony. Kod statusu pacs.002 wskazujący, że płatność została odrzucona.

**RmtInf** — Informacje o przelewie. Dane referencyjne płatności transportowane w pacs.008. Obsługuje formaty niestrukturalne (tekst wolny, maks. 140 znaków) i strukturalne (referencje dokumentów, kwoty, referencje wierzyciela).

**RTGS** — Rozrachunek brutto w czasie rzeczywistym. System płatności, w którym transakcje rozliczane są indywidualnie i w czasie rzeczywistym (np. TARGET2, Fedwire, CHAPS).

## S

**SCT** — Przelew SEPA. Schemat przelewu kredytowego w euro zarządzany przez EPC, wykorzystujący pacs.008.

**SCT Inst** — Natychmiastowy przelew SEPA. Wariant natychmiastowej płatności SCT, rozliczany w mniej niż 10 sekund.

**SDD** — Polecenie zapłaty SEPA. Schemat polecenia zapłaty w euro zarządzany przez EPC, wykorzystujący pacs.003.

**SEPA** — Jednolity Obszar Płatności w Euro. Inicjatywa integracji płatności obejmująca przelewy kredytowe, polecenia zapłaty i płatności kartowe w euro w 36 krajach europejskich.

**SLEV** — Poziom usługi. Obowiązkowy kod ponoszącego opłaty dla SEPA. Oznacza, że opłaty podlegają regułom schematu bez potrąceń z kwoty przelewu.

**STP** — Przetwarzanie bezpośrednie. Zautomatyzowane przetwarzanie płatności end-to-end bez ręcznej interwencji.

**SttlmMtd** — Metoda rozliczenia. Definiuje sposób rozliczenia międzybankowego: CLRG (system rozrachunkowy), INDA (agent instruowany), INGA (agent instruujący) lub COVE (płatność pokrycia).

## T

**TxId** — Identyfikacja transakcji. Referencja międzybankowa przypisana przez pierwszego agenta instruującego. Nie może być zmieniana przez kolejnych agentów.

## U

**UETR** — Unikalna referencja transakcji end-to-end. Identyfikator UUID v4 generowany przez agenta dłużnika i przenoszony bez zmian przez wszystkie etapy płatności do śledzenia gpi.

## X

**XSD** — Definicja schematu XML. Formalny schemat definiujący strukturę, elementy i typy danych wiadomości XML ISO 20022.

**XXE** — Zewnętrzna encja XML. Luka bezpieczeństwa w przetwarzaniu XML. pacs008 zapobiega atakom XXE, używając defusedxml.

## Odniesienia

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

