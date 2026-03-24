---
title: "Typy wiadomości | pacs008 ISO 20022"
description: Obsługiwane definicje i wersje wiadomości pacs ISO 20022.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Typy wiadomości

pacs008 obejmuje główną definicję wiadomości pacs.008 i powiązane wiadomości wykorzystywane w przepływach orkiestracji i uzgadniania.

## Uwzględnione wsparcie

<div class="message-coverage-table" tabindex="0" aria-label="Uwzględnione wsparcie">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Typ wiadomości</th>
        <th>Opis</th>
        <th>Rok</th>
        <th>Przegląd</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">Polecenie zapłaty klienta FI-do-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">Zwrot płatności</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">Odwrócenie płatności FI-do-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">Przelew kredytowy klienta FI-do-FI</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">Przelew kredytowy między instytucjami finansowymi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">Polecenie zapłaty między instytucjami finansowymi</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/pl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">Zapytanie o status płatności FI-do-FI</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy.</td>
        </tr>
    </tbody>
  </table>
</div>

## Model dostarczania

Każdy obsługiwany typ wiadomości jest wspierany przez zasoby szablonów i logikę walidacji, dzięki czemu zespoły mogą standaryzować generowanie i testy regresji w wielu kanałach.

## Wybór właściwej wiadomości

Katalog komunikatów jest szczególnie ważny wtedy, gdy zespoły muszą ustalić, który komunikat rozpoczyna przepływ, który raportuje status, a który koryguje lub odwraca proces.

Zobacz [przewodnik wyboru wiadomości](/pl/message-selection/), aby uzyskać skrócony widok decyzji dla obsługiwanych przepływów pacs.

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

