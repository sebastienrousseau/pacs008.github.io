---
title: pacs.002.001.12 | Звіт про статус платежу між фінансовими установами | pacs008
description: Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про...
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Звіт про статус платежу між фінансовими установами

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Назва ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Статус реєстрації</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Рік</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Версія</strong></td>
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Огляд

Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та міткою часу створення
- **OrgnlGrpInfAndSts** — Інформація про вихідну групу та статус для звітності на рівні пакета
- **TxInfAndSts** — Інформація про транзакцію та статус для результатів окремих транзакцій
- **StsRsnInf** — Інформація про причину статусу зі структурованими кодами причин
- **OrgnlTxRef** — Посилання на вихідну транзакцію, що пов'язує з вихідним дорученням

## Бізнес-контекст

- Використовується для підтвердження розрахунку або звіту про відхилення кредитових переказів, прямих дебетувань та повернень платежів
- Забезпечує звірку між інструктуючими та інструктованими агентами
- Вимагається в потоках CBPR+ для підтвердження обробки повідомлень pacs.008 та pacs.009
- Підтримує звітність про статус як на рівні групи пакета, так і на рівні окремих транзакцій

<div class="operational-matrix-table" tabindex="0" aria-label="Ключові елементи даних Бізнес-контекст">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Ключові елементи даних</th>
        <th>Бізнес-контекст</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок групи з ідентифікацією повідомлення та міткою часу створення</td>
          <td class="operational-matrix-table__right">Використовується для підтвердження розрахунку або звіту про відхилення кредитових переказів, прямих дебетувань та повернень платежів</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Інформація про вихідну групу та статус для звітності на рівні пакета</td>
          <td class="operational-matrix-table__right">Забезпечує звірку між інструктуючими та інструктованими агентами</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Інформація про транзакцію та статус для результатів окремих транзакцій</td>
          <td class="operational-matrix-table__right">Вимагається в потоках CBPR+ для підтвердження обробки повідомлень pacs.008 та pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Інформація про причину статусу зі структурованими кодами причин</td>
          <td class="operational-matrix-table__right">Підтримує звітність про статус як на рівні групи пакета, так і на рівні окремих транзакцій</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Посилання на вихідну транзакцію, що пов&#39;язує з вихідним дорученням</td>
          <td class="operational-matrix-table__right">Інструктований агент (отримувач) надсилає pacs.002 назад інструктуючому агенту (відправнику) для підтвердження прийняття, розрахунку або відхилення отриманого платіжного доручення, такого як pacs.008 або pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Замінює MT199 та текстові описи статусу в полі 79 повідомлень MT
- CBPR+ зобов'язує використовувати pacs.002 для всіх повідомлень про статус платежів
- Структуровані коди причин замінюють вільні текстові пояснення відхилень
- Інтеграція відстеження SWIFT gpi вимагає pacs.002 для наскрізної прозорості

## Потік повідомлення

Інструктований агент (отримувач) надсилає pacs.002 назад інструктуючому агенту (відправнику) для підтвердження прийняття, розрахунку або відхилення отриманого платіжного доручення, такого як pacs.008 або pacs.009.

## Таблиця відмінностей версій

<div class="version-diff-table" tabindex="0" aria-label="Таблиця відмінностей версій">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Діапазон версій</th>
        <th>Чому це важливо</th>
        <th>Практичний висновок</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Використовуйте це, коли потрібно узгодити поточні шаблони й артефакти валідації проєкту.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Пізніші редакції каталогу</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Коментарі до полів

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Порівняння pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Порівняння pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Вимір</th>
        <th>pacs.002.001.12</th>
        <th>Повідомлення для порівняння</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основне призначення</td>
          <td class="message-comparison-table__current">Повідомити статус</td>
          <td class="message-comparison-table__other">Запросити статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Хто ініціює взаємодію</td>
          <td class="message-comparison-table__current">Установа, що надсилає статус</td>
          <td class="message-comparison-table__other">Установа, що запитує статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Операційна модель</td>
          <td class="message-comparison-table__current">Звітність за подією</td>
          <td class="message-comparison-table__other">Запит за винятком</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Хибне припущення, якого слід уникати</td>
          <td class="message-comparison-table__current">Що звітність про статус замінює процеси розслідування та опрацювання запитів</td>
          <td class="message-comparison-table__other">Що кожен платіж потребує явного запиту статусу</td>
        </tr>
    </tbody>
  </table>
</div>

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Пов'язані повідомлення
<div class="related-messages-table" tabindex="0" aria-label="Пов&#39;язані повідомлення">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
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
          <td class="related-messages-table__id"><a href="/uk/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Клієнтський кредитовий переказ між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.008 є основним платіжним дорученням, що передається між фінансовими установами для переказу коштів від імені клієнта. Воно містить інформацію про дебітора, кредитора, суму та реквізити переказу для однієї або кількох транзакцій кредитового переказу.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовий переказ між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.009 використовується для кредитових переказів між фінансовими установами, коли переказ здійснюється від власного імені установи, а не від імені клієнта. Воно підтримує міжбанківське фінансування, покриваючі платежі та управління ліквідністю.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Запит статусу платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.028 надсилається фінансовою установою для запиту статусу раніше надісланого платіжного доручення. Воно забезпечує проактивне відстеження обробки платежу без очікування незапитуваного звіту про статус.</td>
        </tr>
    </tbody>
  </table>
</div>

