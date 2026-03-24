---
title: pacs.003.001.09 | Клієнтське пряме дебетування між фінансовими установами | pacs008
description: Повідомлення pacs.003 передається між фінансовими установами для виконання доручення клієнта на пряме дебетування. Воно дозволяє банку кредитора стягувати...
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Клієнтське пряме дебетування між фінансовими установами

| | |
|---|---|
| **Назва ISO** | FIToFICustomerDirectDebitV09 |
| **Статус реєстрації** | Registered |
| **Рік** | 2019 |
| **Версія** | 9 |

## Огляд

Повідомлення pacs.003 передається між фінансовими установами для виконання доручення клієнта на пряме дебетування. Воно дозволяє банку кредитора стягувати кошти з банку дебітора від імені кредитора.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та інформацією про розрахунок
- **DrctDbtTxInf** — Інформація про транзакцію прямого дебетування з сумою та сторонами
- **Cdtr** — Ідентифікація кредитора та реквізити рахунку
- **CdtrAgt** — Ідентифікація агента кредитора (інкасуючої установи)
- **DbtrAgt** — Ідентифікація агента дебітора (платіжної установи)

## Бізнес-контекст

- Підтримує схеми прямого дебетування SEPA Core та B2B
- Використовується для інкасування періодичних платежів, таких як підписки, комунальні рахунки та погашення кредитів
- Вимагає дійсного посилання на мандат між дебітором та кредитором
- Дозволяє пакетне інкасування кількох доручень на пряме дебетування в одному повідомленні

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
          <td class="operational-matrix-table__left">**GrpHdr** — Заголовок групи з ідентифікацією повідомлення та інформацією про розрахунок</td>
          <td class="operational-matrix-table__right">Підтримує схеми прямого дебетування SEPA Core та B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**DrctDbtTxInf** — Інформація про транзакцію прямого дебетування з сумою та сторонами</td>
          <td class="operational-matrix-table__right">Використовується для інкасування періодичних платежів, таких як підписки, комунальні рахунки та погашення кредитів</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**Cdtr** — Ідентифікація кредитора та реквізити рахунку</td>
          <td class="operational-matrix-table__right">Вимагає дійсного посилання на мандат між дебітором та кредитором</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**CdtrAgt** — Ідентифікація агента кредитора (інкасуючої установи)</td>
          <td class="operational-matrix-table__right">Дозволяє пакетне інкасування кількох доручень на пряме дебетування в одному повідомленні</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**DbtrAgt** — Ідентифікація агента дебітора (платіжної установи)</td>
          <td class="operational-matrix-table__right">Агент кредитора ініціює pacs.003 на адресу агента дебітора для інкасування коштів. Агент дебітора перевіряє мандат, контролює покриття рахунку та здійснює розрахунок або повертає транзакцію.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Вимоги до структурованої адреси та ідентифікації сторін однаково застосовуються до прямих дебетувань
- Дані, пов'язані з мандатом, мають бути повністю структуровані з листопада 2026 року
- Замінює застарілі формати прямого дебетування типу MT104 у транскордонних потоках
- Валідація ідентифікації схеми кредитора дедалі активніше застосовується

## Потік повідомлення

Агент кредитора ініціює pacs.003 на адресу агента дебітора для інкасування коштів. Агент дебітора перевіряє мандат, контролює покриття рахунку та здійснює розрахунок або повертає транзакцію.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Корисно для моделювання посилань на пряме дебетування в поточному проєкті.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Пізніші редакції каталогу</td>
          <td class="version-diff-table__takeaway">Перед використанням у новому впровадженні перевірте пізніші редакції щодо оновлень мандатів, статусів і взаємосумісності.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Коментарі до полів

- `EndToEndId`: Тримайте ідентифікатори мандата та інкасації окремо від бізнес-посилань на рахунки-фактури.
- `IntrBkSttlmAmt`: Перевіряйте точність суми списання та валютні правила до формування XML.
- `Dbtr` / `Cdtr`: Успішність прямого дебетування часто більше залежить від якості рахунку та мандата, ніж від структури XML.

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/uk/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Повернення платежу</td>
          <td class="related-messages-table__overview">Повідомлення pacs.004 використовується для повернення раніше розрахованої платіжної транзакції. Воно обертає рух коштів, коли платіж не може бути зарахований, був надісланий помилково або відкликається установою-відправником.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Сторнування платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.007 використовується для сторнування раніше надісланого платіжного доручення, яке ще не було розраховане, або для запиту сторнування розрахованого платежу. На відміну від pacs.004 (повернення), воно ініціюється первинним інструктуючим агентом.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
    </tbody>
  </table>
</div>

