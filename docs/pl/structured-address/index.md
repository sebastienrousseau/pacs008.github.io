---
title: "Termin adresu strukturalnego listopad 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: pl-PL
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Przeprowadzić audyt obecnej jakości danych adresowych w rekordach dłużników, wierzycieli i agentów."
  - name: "Step 2"
    text: "Zmapować istniejące nieustrukturyzowane pola adresowe do formatu ustrukturyzowanego (ulica, budynek, kod pocztowy, miasto, kraj)."
  - name: "Step 3"
    text: "Dodać walidację adresów do potoku pre-generacji przy użyciu pacs008."
  - name: "Step 4"
    text: "Przetestować z reprezentatywnymi danymi płatniczymi przed terminem."
---

# Termin adresu strukturalnego listopad 2026

SWIFT wymaga ustrukturyzowanych adresów pocztowych w transgranicznych komunikatach płatniczych od listopada 2026. Co się zmienia, które komunikaty są dotknięte i jak pacs008 pomaga zespołom w przygotowaniach.

## Co się zmienia

SWIFT CBPR+ przechodzi z nieustrukturyzowanych adresów pocztowych na ustrukturyzowane pola adresowe w transgranicznych komunikatach płatniczych. Po terminie w listopadzie 2026 pola adresowe kluczowych stron muszą używać formatu ustrukturyzowanego z oddzielnymi elementami dla nazwy ulicy, numeru budynku, kodu pocztowego, miasta i kraju.

## Dlaczego to ważne

- Nieustrukturyzowane adresy zwiększają wskaźniki ręcznych napraw i opóźniają przetwarzanie bezpośrednie.
- Ustrukturyzowane adresy poprawiają dokładność weryfikacji sankcji poprzez oddzielenie nazwy strony od danych lokalizacyjnych.
- Wymogi regulacyjne i wymogi schematów coraz częściej nakazują dane ustrukturyzowane w celach zgodności i raportowania.
- Wskaźniki odrzuceń płatności transgranicznych rosną, gdy jakość adresów nie spełnia oczekiwań kontrahentów.

## Które komunikaty są dotknięte

- **pacs.008** — adresy pocztowe dłużnika i wierzyciela w przelewach kredytowych klientów.
- **pacs.009** — adresy instytucji w przelewach kredytowych między instytucjami finansowymi i płatnościach pokrycia.
- **pacs.004** — adresy stron w zwrotach płatności.
- **pacs.003** — adresy wierzyciela i dłużnika w poleceniach zapłaty klientów.

## Jak pacs008 pomaga

- Waliduje ustrukturyzowane i hybrydowe pola adresu pocztowego przed generowaniem XML.
- Oznacza nieustrukturyzowane dane adresowe, które nie przejdą weryfikacji po terminie.
- Obsługuje zarówno hybrydowe formaty przed terminem, jak i formaty wyłącznie ustrukturyzowane po terminie.
- Integruje kontrole jakości adresów w potokach CI i przepływach walidacji wsadowej.

## Harmonogram

- **Marzec 2023** — SWIFT CBPR+ uruchomiony z ISO 20022 dla płatności transgranicznych.
- **Listopad 2025** — okres współistnienia instrukcji płatniczych MT i MX kończy się.
- **Listopad 2026** — wymóg ustrukturyzowanego adresu pocztowego wchodzi w życie dla komunikatów CBPR+.

## Co zrobić teraz

- Przeprowadzić audyt obecnej jakości danych adresowych w rekordach dłużników, wierzycieli i agentów.
- Zmapować istniejące nieustrukturyzowane pola adresowe do formatu ustrukturyzowanego (ulica, budynek, kod pocztowy, miasto, kraj).
- Dodać walidację adresów do potoku pre-generacji przy użyciu pacs008.
- Przetestować z reprezentatywnymi danymi płatniczymi przed terminem.

## Odniesienia

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

