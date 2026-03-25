---
title: "pacs.028.001.05 | Запит статусу платежу між фінансовими установами | pacs008"
description: Повідомлення pacs.028 надсилається фінансовою установою для запиту статусу раніше надісланого платіжного доручення. Воно забезпечує проактивне відстеження...
lang: uk-UA
lastUpdated: true
image: /logo.svg
faq:
  - question: "Чи слід відправляти pacs.028 після кожного платежу?"
    answer: "Зазвичай ні. Він найкраще працює як цільовий інструмент для винятків, а не як масовий трафік."
  - question: "Що робить pacs.028 корисним?"
    answer: "Чіткі правила тайм-ауту, ескалації та звірки навколо первісної платіжної справи."
---

# pacs.028.001.05 — Запит статусу платежу між фінансовими установами

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Поле</th>
        <th scope="col">Значення</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Назва ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Огляд

Повідомлення pacs.028 надсилається фінансовою установою для запиту статусу раніше надісланого платіжного доручення. Воно забезпечує проактивне відстеження обробки платежу без очікування незапитуваного звіту про статус.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та міткою часу створення
- **TxInf** — Інформація про транзакцію, що ідентифікує платіж для запиту
- **OrgnlGrpInf** — Інформація про вихідну групу з посиланням на вихідне повідомлення
- **OrgnlInstrId** — Ідентифікатор вихідного доручення з вихідного платежу
- **OrgnlEndToEndId** — Вихідний наскрізний ідентифікатор для відстежуваності

## Бізнес-контекст

- Забезпечує проактивний запит статусу для платіжних доручень в обробці
- Підтримує операційні команди, що розслідують затримані або відсутні платежі
- Доповнює pacs.002, ініціюючи комунікацію про статус замість очікування
- Використовується в процесах обробки виключень та моніторингу SLA

<div class="operational-matrix-table" tabindex="0" aria-label="Ключові елементи даних Бізнес-контекст">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__right">Забезпечує проактивний запит статусу для платіжних доручень в обробці</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Інформація про транзакцію, що ідентифікує платіж для запиту</td>
          <td class="operational-matrix-table__right">Підтримує операційні команди, що розслідують затримані або відсутні платежі</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Інформація про вихідну групу з посиланням на вихідне повідомлення</td>
          <td class="operational-matrix-table__right">Доповнює pacs.002, ініціюючи комунікацію про статус замість очікування</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Ідентифікатор вихідного доручення з вихідного платежу</td>
          <td class="operational-matrix-table__right">Використовується в процесах обробки виключень та моніторингу SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Вихідний наскрізний ідентифікатор для відстежуваності</td>
          <td class="operational-matrix-table__right">Інструктуючий агент надсилає pacs.028 інструктованому агенту для запиту статусу конкретного платежу. Інструктований агент відповідає повідомленням pacs.002 з поточним статусом обробки.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Замінює шаблони запитів статусу MT199 та ручні запити повідомлень SWIFT
- CBPR+ підтримує структуровані запити статусу, пов'язані з ідентифікаторами вихідних повідомлень
- Відстеження на основі UETR через gpi зменшує потребу в ручних запитах
- Дедалі активніше інтегрується в автоматизовані панелі управління платіжними операціями

## Потік повідомлення

Інструктуючий агент надсилає pacs.028 інструктованому агенту для запиту статусу конкретного платежу. Інструктований агент відповідає повідомленням pacs.002 з поточним статусом обробки.

## Таблиця відмінностей версій

<div class="version-diff-table" tabindex="0" aria-label="Таблиця відмінностей версій">
  <table>
    <caption>Таблиця відмінностей версій</caption>
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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Підходить для поточного моделювання запитів статусу.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Пізніша редакція каталогу</td>
          <td class="version-diff-table__takeaway">Для майбутнього планування взаємосумісності перевірте новішу редакцію каталогу.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Коментарі до полів

- `MsgId`: Сам запит повинен мати аудитований ідентифікатор, відмінний від базового платежу.
- `OrgnlInstrId`: Використовуйте точний вихідний ідентифікатор з початкової інструкції, щоб максимізувати точність зіставлення.
- `OrgnlEndToEndId`: Додавання клієнтської трасованості допомагає операційним командам швидше звіряти запит.

## Порівняння pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Порівняння pacs.028 vs pacs.002">
  <table>
    <caption>Порівняння pacs.028 vs pacs.002</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Вимір</th>
        <th>pacs.028.001.05</th>
        <th>Повідомлення для порівняння</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основне призначення</td>
          <td class="message-comparison-table__current">Запросити статус</td>
          <td class="message-comparison-table__other">Повідомити статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Хто ініціює взаємодію</td>
          <td class="message-comparison-table__current">Установа, що запитує статус</td>
          <td class="message-comparison-table__other">Установа, що надсилає статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Операційна модель</td>
          <td class="message-comparison-table__current">Запит за винятком</td>
          <td class="message-comparison-table__other">Звітність за подією</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Хибне припущення, якого слід уникати</td>
          <td class="message-comparison-table__current">Що його слід надсилати регулярно для кожного платежу</td>
          <td class="message-comparison-table__other">Що він усуває потребу в проактивному управлінні кейсами</td>
        </tr>
    </tbody>
  </table>
</div>

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
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
    </tbody>
  </table>
</div>

