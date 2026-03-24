---
title: pacs.004.001.11 | Повернення платежу | pacs008
description: Повідомлення pacs.004 використовується для повернення раніше розрахованої платіжної транзакції. Воно обертає рух коштів, коли платіж не може бути...
lang: uk-UA
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — Повернення платежу

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

Повідомлення pacs.004 використовується для повернення раніше розрахованої платіжної транзакції. Воно обертає рух коштів, коли платіж не може бути зарахований, був надісланий помилково або відкликається установою-відправником.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та міткою часу створення
- **TxInf** — Інформація про транзакцію з сумою повернення та сторонами
- **OrgnlGrpInf** — Інформація про вихідну групу, що пов'язує з вихідним повідомленням
- **RtrRsnInf** — Інформація про причину повернення зі структурованими кодами причин
- **OrgnlTxRef** — Посилання на вихідну транзакцію для зіставлення та звірки

## Бізнес-контекст

- Обробляє повернення після розрахунку, коли рахунок бенефіціара не може бути кредитований
- Підтримує сценарії відкликання, коли відправник запитує повернення коштів
- Містить структуровані коди причин повернення для регуляторної та операційної прозорості
- Застосовується як до повернень кредитових переказів (pacs.008), так і до повернень прямих дебетувань (pacs.003)

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
          <td class="operational-matrix-table__right">Обробляє повернення після розрахунку, коли рахунок бенефіціара не може бути кредитований</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Інформація про транзакцію з сумою повернення та сторонами</td>
          <td class="operational-matrix-table__right">Підтримує сценарії відкликання, коли відправник запитує повернення коштів</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Інформація про вихідну групу, що пов&#39;язує з вихідним повідомленням</td>
          <td class="operational-matrix-table__right">Містить структуровані коди причин повернення для регуляторної та операційної прозорості</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Інформація про причину повернення зі структурованими кодами причин</td>
          <td class="operational-matrix-table__right">Застосовується як до повернень кредитових переказів (pacs.008), так і до повернень прямих дебетувань (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Посилання на вихідну транзакцію для зіставлення та звірки</td>
          <td class="operational-matrix-table__right">Інструктований агент надсилає pacs.004 назад через платіжний ланцюг для повернення раніше розрахованих коштів. Кожен агент у ланцюгу обробляє повернення та кредитує відповідні рахунки.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Замінює MT103 RETURN та повідомлення про повернення методом покриття
- Коди причин повернення стандартизовані та машиночитабельні в рамках ISO 20022
- CBPR+ вимагає повних довідкових даних вихідної транзакції для зіставлення
- Відстеження SWIFT gpi поширюється на транзакції повернення для наскрізної видимості

## Потік повідомлення

Інструктований агент надсилає pacs.004 назад через платіжний ланцюг для повернення раніше розрахованих коштів. Кожен агент у ланцюгу обробляє повернення та кредитує відповідні рахунки.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Узгоджується з поточними шаблонами для повернень платежів.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Пізніші редакції каталогу</td>
          <td class="version-diff-table__takeaway">Перегляньте пізніші редакції повідомлень повернення, якщо в обсязі робіт є оновлення схеми або нові контрагенти.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Коментарі до полів

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Якість кодів причин критично важлива для подальшого спілкування з клієнтом і операційної маршрутизації.

## Порівняння pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Порівняння pacs.004 vs pacs.007">
  <table>
    <caption>Порівняння pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Вимір</th>
        <th>pacs.004.001.11</th>
        <th>Повідомлення для порівняння</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основне призначення</td>
          <td class="message-comparison-table__current">Повернути вже розраховані кошти</td>
          <td class="message-comparison-table__other">Сторнувати раніше інструктований платіж</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Ініціюється стороною</td>
          <td class="message-comparison-table__current">Сторона отримувача / бенефіціара</td>
          <td class="message-comparison-table__other">Сторона початкового інструктора</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Напрямок потоку</td>
          <td class="message-comparison-table__current">Назад через ланцюг</td>
          <td class="message-comparison-table__other">Уперед через ланцюг</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Найкраще підходить для</td>
          <td class="message-comparison-table__current">Опрацювання повернення після розрахунку</td>
          <td class="message-comparison-table__other">Опрацювання сторнування через відкликання, помилку або шахрайство</td>
        </tr>
    </tbody>
  </table>
</div>

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/uk/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Клієнтське пряме дебетування між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.003 передається між фінансовими установами для виконання доручення клієнта на пряме дебетування. Воно дозволяє банку кредитора стягувати кошти з банку дебітора від імені кредитора.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
    </tbody>
  </table>
</div>

