---
title: pacs.007.001.11 | Сторнування платежу між фінансовими установами | pacs008
description: Повідомлення pacs.007 використовується для сторнування раніше надісланого платіжного доручення, яке ще не було розраховане, або для запиту сторнування...
lang: uk-UA
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.007 only for fraud scenarios?"
    answer: "No. Fraud is a major use case, but any instructing-side need to reverse a payment can trigger it."
  - question: "Can it be handled like a normal return?"
    answer: "No. Reversal timing, reason capture, and reconciliation differ materially from returns."
---

# pacs.007.001.11 — Сторнування платежу між фінансовими установами

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Огляд

Повідомлення pacs.007 використовується для сторнування раніше надісланого платіжного доручення, яке ще не було розраховане, або для запиту сторнування розрахованого платежу. На відміну від pacs.004 (повернення), воно ініціюється первинним інструктуючим агентом.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та міткою часу створення
- **TxInf** — Інформація про транзакцію з сумою сторнування та сторонами
- **OrgnlGrpInf** — Інформація про вихідну групу з посиланням на вихідне повідомлення
- **RvslRsnInf** — Інформація про причину сторнування зі структурованими кодами причин
- **OrgnlTxRef** — Посилання на вихідну транзакцію для наскрізної відстежуваності

## Бізнес-контекст

- Ініціюється, коли первинний відправник виявляє помилку до або після розрахунку
- Використовується в сценаріях шахрайства, коли потрібне швидке сторнування
- Підтримує як повне, так і часткове сторнування суми первинного платежу
- Містить структуровані коди причин сторнування для подальшої обробки

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
          <td class="operational-matrix-table__right">Ініціюється, коли первинний відправник виявляє помилку до або після розрахунку</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Інформація про транзакцію з сумою сторнування та сторонами</td>
          <td class="operational-matrix-table__right">Використовується в сценаріях шахрайства, коли потрібне швидке сторнування</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Інформація про вихідну групу з посиланням на вихідне повідомлення</td>
          <td class="operational-matrix-table__right">Підтримує як повне, так і часткове сторнування суми первинного платежу</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Інформація про причину сторнування зі структурованими кодами причин</td>
          <td class="operational-matrix-table__right">Містить структуровані коди причин сторнування для подальшої обробки</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Посилання на вихідну транзакцію для наскрізної відстежуваності</td>
          <td class="operational-matrix-table__right">Інструктуючий агент (первинний відправник) надсилає pacs.007 вперед через платіжний ланцюг для сторнування раніше доручeного платежу. Кожен агент обробляє інструкцію сторнування та коригує розрахунок відповідно.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Відрізняється від pacs.004 напрямком — сторнування рухається вперед від відправника, повернення рухається назад від бенефіціара
- CBPR+ вимагає зв'язування з ідентифікаторами вихідного повідомлення для автоматичного зіставлення
- Структуровані коди причин замінюють вільні текстові описи із застарілих повідомлень MT
- Дедалі частіше використовується в процесах відкликання миттєвих платежів та запобігання шахрайству

## Потік повідомлення

Інструктуючий агент (первинний відправник) надсилає pacs.007 вперед через платіжний ланцюг для сторнування раніше доручeного платежу. Кожен агент обробляє інструкцію сторнування та коригує розрахунок відповідно.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Добра основа для моделювання процесів сторнування.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Пізніші редакції каталогу</td>
          <td class="version-diff-table__takeaway">Перевірте пізніші редакції на відповідність поточним вимогам ринкової інфраструктури.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Коментарі до полів

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Зберігайте початкове посилання на платіж, щоб уникнути розривів під час звіряння.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Порівняння pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Порівняння pacs.007 vs pacs.004">
  <table>
    <caption>Порівняння pacs.007 vs pacs.004</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Вимір</th>
        <th>pacs.007.001.11</th>
        <th>Повідомлення для порівняння</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основне призначення</td>
          <td class="message-comparison-table__current">Сторнувати раніше інструктований платіж</td>
          <td class="message-comparison-table__other">Повернути вже розраховані кошти</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ініціюється стороною</td>
          <td class="message-comparison-table__current">Сторона початкового інструктора</td>
          <td class="message-comparison-table__other">Сторона отримувача / бенефіціара</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Напрямок потоку</td>
          <td class="message-comparison-table__current">Уперед через ланцюг</td>
          <td class="message-comparison-table__other">Назад через ланцюг</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Найкраще підходить для</td>
          <td class="message-comparison-table__current">Опрацювання сторнування через відкликання, помилку або шахрайство</td>
          <td class="message-comparison-table__other">Опрацювання повернення після розрахунку</td>
        </tr>
    </tbody>
  </table>
</div>

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/uk/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Клієнтський кредитовий переказ між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.008 є основним платіжним дорученням, що передається між фінансовими установами для переказу коштів від імені клієнта. Воно містить інформацію про дебітора, кредитора, суму та реквізити переказу для однієї або кількох транзакцій кредитового переказу.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Повернення платежу</td>
          <td class="related-messages-table__overview">Повідомлення pacs.004 використовується для повернення раніше розрахованої платіжної транзакції. Воно обертає рух коштів, коли платіж не може бути зарахований, був надісланий помилково або відкликається установою-відправником.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
    </tbody>
  </table>
</div>

