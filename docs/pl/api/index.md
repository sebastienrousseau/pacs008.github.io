---
title: API | Polski
description: Obsługa przepływów REST i CLI w Pacs008.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# API

Projekt zapewnia zarówno REST API, jak i CLI do operacyjnych przepływów wiadomości płatniczych.

## Możliwości API

- punkty końcowe zdrowia i gotowości
- walidacja danych przed generowaniem XML
- synchroniczne generowanie dla bezpośrednich przepływów
- asynchroniczne wykonywanie zadań dla dłuższych potoków
- pliki wygenerowane do pobrania przez przepływy zakończenia zadań

## Możliwości CLI

- wskazanie pliku źródłowego i wersji wiadomości
- walidacja względem XSD przed dostarczeniem
- generowanie XML do katalogów wyjściowych przyjaznych potokom
- dopasowanie do zadań CI, harmonogramów wsadowych i lokalnych narzędzi operatora

## Fokus na implementacji

Pacs008 jest zaprojektowany do użytku operacyjnego w zespołach przetwarzania płatności:

- walidacja wstępna przed utworzeniem wiadomości
- wybór schematu i wersji w czasie wykonywania
- asynchroniczne przepływy generowania dla usług wewnętrznych
- deterministyczne wyjścia do testów i ścieżek audytu

## Wymagania jakości danych na 2026

Wymagania jakości wiadomości zaostrzają się w branży, szczególnie w zakresie:

- identyfikacja stron i agentów
- gotowość adresów strukturalnych lub hybrydowych
- bogatsze przetwarzanie przekazów i referencji
- przejrzystość w łańcuchach płatności seryjnych

API i CLI są zaprojektowane tak, aby te kontrole stały się częścią przepływu pracy zamiast ręcznego kroku przeglądu.

