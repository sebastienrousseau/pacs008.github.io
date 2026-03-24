---
title: "Посібник з вибору повідомлень | pacs008"
description: Оберіть потрібне повідомлення ISO 20022 pacs для генерації, статусів, повернень, сторнування та запитів.
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# Посібник з вибору повідомлень

Спочатку обирайте сімейство pacs за бізнес-подією, а потім за схемою та операційною моделлю.

## Швидка матриця вибору

<div class="decision-matrix-table" tabindex="0" aria-label="Швидка матриця вибору">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Тип повідомлення</th>
        <th>Опис</th>
        <th>Огляд</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Клієнтське пряме дебетування між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.003 передається між фінансовими установами для виконання доручення клієнта на пряме дебетування. Воно дозволяє банку кредитора стягувати кошти з банку дебітора від імені кредитора.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Повернення платежу</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.004 використовується для повернення раніше розрахованої платіжної транзакції. Воно обертає рух коштів, коли платіж не може бути зарахований, був надісланий помилково або відкликається установою-відправником.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Сторнування платежу між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.007 використовується для сторнування раніше надісланого платіжного доручення, яке ще не було розраховане, або для запиту сторнування розрахованого платежу. На відміну від pacs.004 (повернення), воно ініціюється первинним інструктуючим агентом.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Клієнтський кредитовий переказ між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.008 є основним платіжним дорученням, що передається між фінансовими установами для переказу коштів від імені клієнта. Воно містить інформацію про дебітора, кредитора, суму та реквізити переказу для однієї або кількох транзакцій кредитового переказу.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Кредитовий переказ між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.009 використовується для кредитових переказів між фінансовими установами, коли переказ здійснюється від власного імені установи, а не від імені клієнта. Воно підтримує міжбанківське фінансування, покриваючі платежі та управління ліквідністю.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Пряме дебетування між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.010 використовується між фінансовими установами для транзакцій прямого дебетування з власного рахунку установи. Воно дозволяє одній установі стягувати кошти безпосередньо з рахунку іншої установи.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/uk/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Запит статусу платежу між фінансовими установами</td>
          <td class="decision-matrix-table__overview">Повідомлення pacs.028 надсилається фінансовою установою для запиту статусу раніше надісланого платіжного доручення. Воно забезпечує проактивне відстеження обробки платежу без очікування незапитуваного звіту про статус.</td>
        </tr>
    </tbody>
  </table>
</div>

## Типові точки порівняння

<div class="comparison-points-table" tabindex="0" aria-label="Типові точки порівняння">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Порівняння</th>
        <th>Ключова відмінність</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Клієнтський платіж проти інституційного або покривного переказу</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Повернення з боку отримувача проти сторнування з боку відправника</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Звіт про статус проти запиту статусу</td>
        </tr>
    </tbody>
  </table>
</div>

## Підтримувані сторінки повідомлень

- [`pacs.002.001.12`](/uk/pacs.002.001.12/) — Звіт про статус платежу між фінансовими установами
- [`pacs.003.001.09`](/uk/pacs.003.001.09/) — Клієнтське пряме дебетування між фінансовими установами
- [`pacs.004.001.11`](/uk/pacs.004.001.11/) — Повернення платежу
- [`pacs.007.001.11`](/uk/pacs.007.001.11/) — Сторнування платежу між фінансовими установами
- [`pacs.008.001.13`](/uk/pacs.008.001.13/) — Клієнтський кредитовий переказ між фінансовими установами
- [`pacs.009.001.10`](/uk/pacs.009.001.10/) — Кредитовий переказ між фінансовими установами
- [`pacs.010.001.05`](/uk/pacs.010.001.05/) — Пряме дебетування між фінансовими установами
- [`pacs.028.001.05`](/uk/pacs.028.001.05/) — Запит статусу платежу між фінансовими установами

