---
title: pacs.010.001.05 | Пряме дебетування між фінансовими установами | pacs008
description: Повідомлення pacs.010 використовується між фінансовими установами для транзакцій прямого дебетування з власного рахунку установи. Воно дозволяє одній...
lang: uk-UA
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Пряме дебетування між фінансовими установами

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

Повідомлення pacs.010 використовується між фінансовими установами для транзакцій прямого дебетування з власного рахунку установи. Воно дозволяє одній установі стягувати кошти безпосередньо з рахунку іншої установи.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та інформацією про розрахунок
- **DrctDbtTxInf** — Інформація про транзакцію прямого дебетування з сумою інкасування
- **Cdtr / CdtrAgt** — Ідентифікація установи-кредитора та її агента
- **Dbtr / DbtrAgt** — Ідентифікація установи-дебітора та її агента
- **IntrBkSttlmAmt** — Сума міжбанківського розрахунку у валюті розрахунку

## Бізнес-контекст

- Підтримує міжбанківське пряме дебетування між фінансовими установами
- Використовується для стягнення комісій, маржинальних вимог та інституційних розрахункових зобов'язань
- Вимагає попередньо узгоджених двосторонніх домовленостей між установами-учасниками
- Критично важливе для інституційного управління грошовими коштами та міжбанківських розрахункових циклів

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок групи з ідентифікацією повідомлення та інформацією про розрахунок</td>
          <td class="operational-matrix-table__right">Підтримує міжбанківське пряме дебетування між фінансовими установами</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Інформація про транзакцію прямого дебетування з сумою інкасування</td>
          <td class="operational-matrix-table__right">Використовується для стягнення комісій, маржинальних вимог та інституційних розрахункових зобов&#39;язань</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Ідентифікація установи-кредитора та її агента</td>
          <td class="operational-matrix-table__right">Вимагає попередньо узгоджених двосторонніх домовленостей між установами-учасниками</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Ідентифікація установи-дебітора та її агента</td>
          <td class="operational-matrix-table__right">Критично важливе для інституційного управління грошовими коштами та міжбанківських розрахункових циклів</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Сума міжбанківського розрахунку у валюті розрахунку</td>
          <td class="operational-matrix-table__right">Установа-кредитор надсилає pacs.010 установі-дебітору для інкасування коштів за попередньо узгодженою домовленістю. Установа-дебітор перевіряє запит та здійснює розрахунок або відхиляє пряме дебетування.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Замінює елементи MT204 для обробки міжбанківського прямого дебетування
- Структурована ідентифікація сторін відповідає тим самим вимогам, що й інші повідомлення pacs
- Валідація інституційних ідентифікаторів (BIC, LEI) є обов'язковою
- Включено в дорожні карти повного впровадження ISO 20022 в ринкових інфраструктурах

## Потік повідомлення

Установа-кредитор надсилає pacs.010 установі-дебітору для інкасування коштів за попередньо узгодженою домовленістю. Установа-дебітор перевіряє запит та здійснює розрахунок або відхиляє пряме дебетування.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Служить орієнтиром для підтримки прямого дебетування між установами в поточному проєкті.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Пізніша редакція каталогу</td>
          <td class="version-diff-table__takeaway">Перегляньте це перед впровадженням новіших вимог інфраструктури.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Коментарі до полів

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/uk/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовий переказ між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.009 використовується для кредитових переказів між фінансовими установами, коли переказ здійснюється від власного імені установи, а не від імені клієнта. Воно підтримує міжбанківське фінансування, покриваючі платежі та управління ліквідністю.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Клієнтське пряме дебетування між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.003 передається між фінансовими установами для виконання доручення клієнта на пряме дебетування. Воно дозволяє банку кредитора стягувати кошти з банку дебітора від імені кредитора.</td>
        </tr>
    </tbody>
  </table>
</div>

