---
title: Przewodnik wyboru komunikatu | pacs008
description: Wybierz właściwy komunikat ISO 20022 pacs do generowania, raportowania statusu, zwrotów, odwróceń i zapytań.
lang: pl-PL
lastUpdated: true
image: /logo.svg
---

# Przewodnik wyboru komunikatu

Najpierw wybierz rodzinę pacs według zdarzenia biznesowego, a następnie według schematu i modelu operacyjnego.



## Szybka macierz decyzji

<div class="decision-matrix-table" tabindex="0" aria-label="Szybka macierz decyzji">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Typ wiadomości</th>
        <th>Opis</th>
        <th>Przegląd</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Raport statusu płatności FI-do-FI</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.002 jest wysyłany przez instytucję finansową w celu raportowania statusu wcześniej wysłanej instrukcji płatniczej. Dostarcza informacje o potwierdzeniu, odrzuceniu lub statusie oczekującym dla poszczególnych transakcji w ramach komunikatu płatniczego.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Polecenie zapłaty klienta FI-do-FI</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.003 jest wymieniany między instytucjami finansowymi w celu realizacji instrukcji polecenia zapłaty klienta. Umożliwia bankowi wierzyciela pobranie środków z banku dłużnika w imieniu wierzyciela.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Zwrot płatności</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.004 jest używany do zwrotu wcześniej rozliczonej transakcji płatniczej. Odwraca przepływ środków, gdy płatność nie może zostać zastosowana, została wysłana omyłkowo lub jest przywoływana przez instytucję inicjującą.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Odwrócenie płatności FI-do-FI</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.007 jest używany do odwrócenia wcześniej wysłanej instrukcji płatniczej, która nie została jeszcze rozliczona, lub do żądania odwrócenia rozliczonej płatności. W odróżnieniu od pacs.004 (zwrot) jest inicjowany przez oryginalnego agenta zlecającego.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Przelew kredytowy klienta FI-do-FI</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.008 jest podstawową instrukcją płatniczą wymienianą między instytucjami finansowymi w celu przekazania środków w imieniu klienta. Zawiera informacje o dłużniku, wierzycielu, kwocie i danych przekazu dla jednej lub więcej transakcji polecenia przelewu.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Przelew kredytowy między instytucjami finansowymi</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.009 jest używany do poleceń przelewu między instytucjami finansowymi, w których transfer odbywa się na rachunek własny instytucji, a nie w imieniu klienta. Obsługuje finansowanie międzybankowe, płatności pokrycia i zarządzanie płynnością.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Polecenie zapłaty między instytucjami finansowymi</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.010 jest używany między instytucjami finansowymi do transakcji poleceń zapłaty na rachunek własny instytucji. Umożliwia jednej instytucji pobranie środków bezpośrednio z rachunku innej instytucji.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/pl/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Zapytanie o status płatności FI-do-FI</td>
          <td class="decision-matrix-table__overview">Komunikat pacs.028 jest wysyłany przez instytucję finansową w celu zapytania o status wcześniej wysłanej instrukcji płatniczej. Umożliwia proaktywne śledzenie przetwarzania płatności bez oczekiwania na nieoczekiwany raport statusowy.</td>
        </tr>
    </tbody>
  </table>
</div>

## Typowe punkty porównania

<div class="comparison-points-table" tabindex="0" aria-label="Typowe punkty porównania">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Porównanie</th>
        <th>Kluczowa różnica</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Płatność klienta versus ruch instytucjonalny lub pokryciowy</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Zwrot po stronie odbiorcy versus odwrócenie po stronie zlecającej</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Raport statusu versus żądanie statusu</td>
        </tr>
    </tbody>
  </table>
</div>

## Obsługiwane strony komunikatów

- [`pacs.002.001.12`](/pl/pacs.002.001.12/) — Raport statusu płatności FI-do-FI
- [`pacs.003.001.09`](/pl/pacs.003.001.09/) — Polecenie zapłaty klienta FI-do-FI
- [`pacs.004.001.11`](/pl/pacs.004.001.11/) — Zwrot płatności
- [`pacs.007.001.11`](/pl/pacs.007.001.11/) — Odwrócenie płatności FI-do-FI
- [`pacs.008.001.13`](/pl/pacs.008.001.13/) — Przelew kredytowy klienta FI-do-FI
- [`pacs.009.001.10`](/pl/pacs.009.001.10/) — Przelew kredytowy między instytucjami finansowymi
- [`pacs.010.001.05`](/pl/pacs.010.001.05/) — Polecenie zapłaty między instytucjami finansowymi
- [`pacs.028.001.05`](/pl/pacs.028.001.05/) — Zapytanie o status płatności FI-do-FI

