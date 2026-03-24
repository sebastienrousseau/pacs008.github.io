---
title: pacs.009.001.10 | Кредитовий переказ між фінансовими установами | pacs008
description: Повідомлення pacs.009 використовується для кредитових переказів між фінансовими установами, коли переказ здійснюється від власного імені установи, а не...
lang: uk-UA
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Кредитовий переказ між фінансовими установами

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Огляд

Повідомлення pacs.009 використовується для кредитових переказів між фінансовими установами, коли переказ здійснюється від власного імені установи, а не від імені клієнта. Воно підтримує міжбанківське фінансування, покриваючі платежі та управління ліквідністю.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікацією повідомлення та інформацією про розрахунок
- **CdtTrfTxInf** — Інформація про транзакцію кредитового переказу з сумою міжбанківського розрахунку
- **Dbtr / DbtrAgt** — Ідентифікація установи-дебітора та її агента
- **Cdtr / CdtrAgt** — Ідентифікація установи-кредитора та її агента
- **IntrBkSttlmAmt** — Сума міжбанківського розрахунку у валюті розрахунку

## Бізнес-контекст

- Використовується для міжбанківських переказів з власного рахунку та покриваючих платежів
- Підтримує управління ліквідністю між партнерами кореспондентського банкінгу
- Несе покриваючу частину клієнтських кредитових переказів, розрахованих методом покриття
- Забезпечує казначейські та фінансові операції між фінансовими установами

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок групи з ідентифікацією повідомлення та інформацією про розрахунок</td>
          <td class="operational-matrix-table__right">Використовується для міжбанківських переказів з власного рахунку та покриваючих платежів</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Інформація про транзакцію кредитового переказу з сумою міжбанківського розрахунку</td>
          <td class="operational-matrix-table__right">Підтримує управління ліквідністю між партнерами кореспондентського банкінгу</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Ідентифікація установи-дебітора та її агента</td>
          <td class="operational-matrix-table__right">Несе покриваючу частину клієнтських кредитових переказів, розрахованих методом покриття</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Ідентифікація установи-кредитора та її агента</td>
          <td class="operational-matrix-table__right">Забезпечує казначейські та фінансові операції між фінансовими установами</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Сума міжбанківського розрахунку у валюті розрахунку</td>
          <td class="operational-matrix-table__right">Установа-дебітор надсилає pacs.009 установі-кредитору для переказу власних коштів. Для платежів методом покриття pacs.009 забезпечує фінансову частину, тоді як pacs.008 несе клієнтське доручення окремим маршрутом.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Замінює MT202 та MT202COV для переказів між установами
- Потоки методу покриття пов'язують pacs.009 з базовим клієнтським дорученням pacs.008
- Структуровані дані про сторони та ідентифікація LEI дедалі частіше вимагаються
- SWIFT gpi охоплює pacs.009 для прозорості кореспондентського банкінгу

## Потік повідомлення

Установа-дебітор надсилає pacs.009 установі-кредитору для переказу власних коштів. Для платежів методом покриття pacs.009 забезпечує фінансову частину, тоді як pacs.008 несе клієнтське доручення окремим маршрутом.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Поточна реалізація в pacs008</td>
          <td class="version-diff-table__takeaway">Відповідає поточній підтримці проєкту для потоків кредитових переказів FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Пізніші редакції каталогу</td>
          <td class="version-diff-table__takeaway">Важливо для планування дорожньої карти в середовищах кореспондентських і покривних платежів.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Коментарі до полів

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Порівняння pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Порівняння pacs.009 vs pacs.008">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Вимір</th>
        <th>pacs.009.001.10</th>
        <th>Повідомлення для порівняння</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основне призначення</td>
          <td class="message-comparison-table__current">Кредитовий переказ за власним рахунком установи або покривний розрахунковий етап</td>
          <td class="message-comparison-table__other">Клієнтський кредитовий переказ</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Власник бізнес-процесу</td>
          <td class="message-comparison-table__current">Казначейські / кореспондентські / операції фінансування</td>
          <td class="message-comparison-table__other">Операції клієнтських платежів</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Типові поєднання</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 та пов’язані потоки pacs.008</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Хибне припущення, якого слід уникати</td>
          <td class="message-comparison-table__current">Що це просто більш технічний pacs.008</td>
          <td class="message-comparison-table__other">Що він без проблем покриває потоки інституційного фінансування</td>
        </tr>
    </tbody>
  </table>
</div>

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/uk/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Звіт про статус платежу між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.002 надсилається фінансовою установою для звітування про статус раніше надісланого платіжного доручення. Воно надає інформацію про підтвердження, відхилення або статус очікування для окремих транзакцій у межах платіжного повідомлення.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Пряме дебетування між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.010 використовується між фінансовими установами для транзакцій прямого дебетування з власного рахунку установи. Воно дозволяє одній установі стягувати кошти безпосередньо з рахунку іншої установи.</td>
        </tr>
    </tbody>
  </table>
</div>

