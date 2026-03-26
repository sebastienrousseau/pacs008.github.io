---
title: "Słownik pojęć ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages.
lang: pl-PL
lastUpdated: true
image: /logo.webp
---

# Słownik pojęć ISO 20022

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Automatyczna izba rozliczeniowa. Sieć przetwarzająca zbiorcze płatności elektroniczne między instytucjami finansowymi.

**AdrLine** — Linia adresowa. Pole adresowe w formacie tekstu wolnego w strukturach adresu pocztowego ISO 20022.

**ACCP** — Zaakceptowany profil klienta. Kod statusu pacs.002 wskazujący, że poprzednie kontrole zostały zaliczone.

**ACSC** — Zaakceptowane rozliczenie zakończone. Potwierdza, że rozliczenie na koncie dłużnika zostało zakończone.

**ACSP** — Zaakceptowane rozliczenie w toku. Wszystkie kontrole zostały zaliczone i rozliczenie jest w toku.

## B–N

**BAH** — Nagłówek aplikacji biznesowej (head.001). Znormalizowana koperta opakowująca wiadomości biznesowe ISO 20022.

**BIC** — Kod identyfikacyjny firmy (ISO 9362). 8- lub 11-znakowy kod jednoznacznie identyfikujący instytucję finansową.

**CBPR+** — Płatności i raportowanie transgraniczne Plus. Program SWIFT do migracji z MT na ISO 20022. Uruchomiony w marcu 2023.

**CdtTrfTxInf** — Informacje o transakcji przelewu. Główny blok budulcowy na poziomie transakcji w pacs.008.

**ChrgBr** — Ponoszący opłaty. Określa, kto ponosi opłaty transakcyjne. Wartości: DEBT, CRED, SHAR, SLEV.

**CLRG** — Rozliczenie przez system rozrachunkowy. Środki przepływają przez system taki jak TARGET2.

**COVE** — Rozliczenie metodą pokrycia. Oddzielna płatność pokrycia pacs.009 obsługuje finansowanie.

**CSM** — Mechanizm rozliczania i rozrachunku.

**Dbtr** — Dłużnik. Strona, która jest winna środki i inicjuje płatność.

**DbtrAgt** — Agent dłużnika. Instytucja finansowa obsługująca konto dłużnika.

**E2E ID** — Identyfikacja end-to-end (EndToEndId). Referencja, która musi pozostać niezmieniona przez wszystkich agentów.

**EPC** — Europejska Rada ds. Płatności. Zarządza regulaminami schematów płatności SEPA.

**FI** — Instytucja finansowa. **FIToFI** — Z instytucji finansowej do instytucji finansowej.

**gpi** — Globalna innowacja płatnicza. Inicjatywa SWIFT na rzecz szybszych płatności transgranicznych.

**GrpHdr** — Nagłówek grupy. Blok metadanych na poziomie wiadomości w komunikatach pacs.

**Hybrid address** — Format adresu pocztowego łączący elementy strukturalne z niestrukturalnymi elementami AdrLine.

**IBAN** — Międzynarodowy numer rachunku bankowego (ISO 13616). Walidowany przy użyciu sumy kontrolnej ISO 7064 Mod 97-10.

**INDA** — Rozliczenie przez agenta instruowanego. **INGA** — Rozliczenie przez agenta instruującego.

**InstrId** — Identyfikacja instrukcji. Referencja punkt-punkt między sąsiednimi agentami.

**IntrBkSttlmAmt** — Kwota rozliczenia międzybankowego.

**ISO 20022** — Międzynarodowy standard elektronicznej wymiany danych między instytucjami finansowymi.

**LEI** — Identyfikator podmiotu prawnego (ISO 17442). 20-znakowy kod alfanumeryczny.

**MsgId** — Identyfikacja wiadomości. **MT** — Typ wiadomości (starszy format SWIFT). **MX** — Format wiadomości XML ISO 20022.

**NbOfTxs** — Liczba transakcji.

## P

**pacs** — Rozliczanie i rozrachunek płatności. Domena biznesowa ISO 20022 dla międzybankowych komunikatów płatniczych.

**pacs.002** — Raport o statusie płatności FI do FI. **pacs.003** — Polecenie zapłaty klienta FI do FI.

**pacs.004** — Zwrot płatności. **pacs.007** — Odwrócenie płatności FI do FI.

**pacs.008** — Przelew klienta FI do FI. Zastępuje MT103.

**pacs.009** — Przelew instytucji finansowej. Zastępuje MT202/MT202COV.

**pacs.010** — Polecenie zapłaty instytucji finansowej. **pacs.028** — Zapytanie o status płatności FI do FI.

**pain** — Inicjacja płatności. Domena ISO 20022 dla komunikatów klient-bank.

**PII** — Dane umożliwiające identyfikację osoby. pacs008 maskuje PII w ustrukturyzowanych logach.

**PstlAdr** — Adres pocztowy. Obsługuje formaty strukturalne i niestrukturalne.

## R–U

**RJCT** — Odrzucony. Kod statusu pacs.002 wskazujący, że płatność została odrzucona.

**RmtInf** — Informacje o przelewie. Dane referencyjne płatności transportowane w pacs.008.

**RTGS** — Rozrachunek brutto w czasie rzeczywistym.

**SCT** — Przelew SEPA. **SCT Inst** — Natychmiastowy przelew SEPA.

**SDD** — Polecenie zapłaty SEPA. **SEPA** — Jednolity Obszar Płatności w Euro.

**SLEV** — Poziom usługi. Obowiązkowy dla SEPA. **STP** — Przetwarzanie bezpośrednie.

**SttlmMtd** — Metoda rozliczenia. Definiuje sposób rozliczenia międzybankowego: CLRG, INDA, INGA lub COVE.

**TxId** — Identyfikacja transakcji. Referencja międzybankowa przypisana przez pierwszego agenta instruującego.

**UETR** — Unikalna referencja transakcji end-to-end. Identyfikator UUID v4 do śledzenia gpi.

## X

**XSD** — Definicja schematu XML. Formalny schemat definiujący strukturę wiadomości XML ISO 20022.

**XXE** — Zewnętrzna encja XML. Luka bezpieczeństwa w przetwarzaniu XML. pacs008 zapobiega atakom XXE, używając defusedxml.

## Odniesienia

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

