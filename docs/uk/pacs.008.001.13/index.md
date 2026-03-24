---
title: pacs.008.001.13 | Клієнтський кредитовий переказ між фінансовими установами | pacs008
description: Повідомлення pacs.008 є основним платіжним дорученням, що передається між фінансовими установами для переказу коштів від імені клієнта. Воно містить...
lang: uk-UA
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Клієнтський кредитовий переказ між фінансовими установами

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Статус реєстрації</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Рік</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Версія</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Огляд

Повідомлення pacs.008 є основним платіжним дорученням, що передається між фінансовими установами для переказу коштів від імені клієнта. Воно містить інформацію про дебітора, кредитора, суму та реквізити переказу для однієї або кількох транзакцій кредитового переказу.

> Останню перевірку за первинними джерелами виконано 23 березня 2026 року. Дата довідки каталогу ISO 20022: 2025-02-27; посилання на джерела наведено нижче.

## Ключові елементи даних

- **GrpHdr** — Заголовок групи з ідентифікатором повідомлення, датою створення, кількістю транзакцій та інформацією про розрахунок
- **CdtTrfTxInf** — Інформація про транзакцію кредитового переказу з сумою, комісіями та призначенням
- **Dbtr / DbtrAgt** — Ідентифікація дебітора та агента дебітора і реквізити рахунку
- **Cdtr / CdtrAgt** — Ідентифікація кредитора та агента кредитора і реквізити рахунку
- **RmtInf** — Інформація про переказ для структурованих або неструктурованих платіжних посилань

## Бізнес-контекст

- Основне повідомлення для транскордонних та внутрішніх кредитових переказів, ініційованих клієнтом
- Використовується в SEPA SCT, SEPA Instant, CBPR+ та національних клірингових системах
- Містить структуровану інформацію про переказ для підтримки автоматичної звірки
- Підтримує послідовний, покриваючий та прямий методи розрахунку для багатоетапних платіжних ланцюгів

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок групи з ідентифікатором повідомлення, датою створення, кількістю транзакцій та інформацією про розрахунок</td>
          <td class="operational-matrix-table__right">Основне повідомлення для транскордонних та внутрішніх кредитових переказів, ініційованих клієнтом</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Інформація про транзакцію кредитового переказу з сумою, комісіями та призначенням</td>
          <td class="operational-matrix-table__right">Використовується в SEPA SCT, SEPA Instant, CBPR+ та національних клірингових системах</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Ідентифікація дебітора та агента дебітора і реквізити рахунку</td>
          <td class="operational-matrix-table__right">Містить структуровану інформацію про переказ для підтримки автоматичної звірки</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Ідентифікація кредитора та агента кредитора і реквізити рахунку</td>
          <td class="operational-matrix-table__right">Підтримує послідовний, покриваючий та прямий методи розрахунку для багатоетапних платіжних ланцюгів</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Інформація про переказ для структурованих або неструктурованих платіжних посилань</td>
          <td class="operational-matrix-table__right">Агент дебітора створює pacs.008 та надсилає його агенту кредитора (безпосередньо або через посередників). Кожен агент у ланцюгу перевіряє, збагачує та пересилає доручення, доки агент кредитора не зарахує кошти на рахунок бенефіціара.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ та схем

- Замінює MT103 та MT103+ для транскордонних клієнтських кредитових переказів
- Граничний термін структурованої адреси — листопад 2026 року — поширюється на всі поштові адреси сторін
- SWIFT gpi вимагає pacs.008 для наскрізного відстеження на основі UETR
- 13 редакцій відображають безперервну еволюцію схеми в ринкових інфраструктурах

## Потік повідомлення

Агент дебітора створює pacs.008 та надсилає його агенту кредитора (безпосередньо або через посередників). Кожен агент у ланцюгу перевіряє, збагачує та пересилає доручення, доки агент кредитора не зарахує кошти на рахунок бенефіціара.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Ранні редакції</td>
          <td class="version-diff-table__takeaway">Корисно насамперед для аналізу переходу зі застарілих систем і розуміння історії версій.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Сучасні редакції до поточної</td>
          <td class="version-diff-table__takeaway">Саме ці редакції найчастіше трапляються в нещодавніх проєктах міграції або співіснування.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Поточна редакція каталогу</td>
          <td class="version-diff-table__takeaway">Використовуйте це для планування за поточною версією, продовжуючи перевіряти правила схеми та готовність контрагентів.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокоментований XML-приклад

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Коментарі до полів

- `MsgId`: Це поле має ідентифікувати сам конверт повідомлення, а не посилання на платіж кінцевого клієнта.
- `EndToEndId`: За можливості зберігайте стабільну клієнтську трасованість у всіх наступних системах.
- `UETR`: Використовуйте це послідовно в транскордонних і вимогливих до відстеження сценаріях; не створюйте значення ситуативно на пізніших етапах обробки.
- `IntrBkSttlmAmt`: Перевіряйте суму й валюту за бізнес-правилами до валідації схеми.
- `Dbtr` / `Cdtr`: Якість даних про сторони, структура адрес і ідентифікатори зазвичай найбільше впливають на обсяг виправлень.

## Порівняння pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Порівняння pacs.008 vs pacs.009">
  <table>
    <caption>Порівняння pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Вимір</th>
        <th>pacs.008.001.13</th>
        <th>Повідомлення для порівняння</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основне призначення</td>
          <td class="message-comparison-table__current">Клієнтський кредитовий переказ</td>
          <td class="message-comparison-table__other">Кредитовий переказ за власним рахунком установи або покривний розрахунковий етап</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Власник бізнес-процесу</td>
          <td class="message-comparison-table__current">Операції клієнтських платежів</td>
          <td class="message-comparison-table__other">Казначейські / кореспондентські / операції фінансування</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Типові поєднання</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 та інколи пов’язані потоки pacs.008</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Хибне припущення, якого слід уникати</td>
          <td class="message-comparison-table__current">Що сюди належать усі міжбанківські перекази</td>
          <td class="message-comparison-table__other">Що він може замінити клієнтські інструкції кредитового переказу</td>
        </tr>
    </tbody>
  </table>
</div>

## Первинні джерела

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Підтримувані версії

<div class="message-versions-table" tabindex="0" aria-label="Підтримувані версії">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Версія</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Поточна</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/uk/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Повернення платежу</td>
          <td class="related-messages-table__overview">Повідомлення pacs.004 використовується для повернення раніше розрахованої платіжної транзакції. Воно обертає рух коштів, коли платіж не може бути зарахований, був надісланий помилково або відкликається установою-відправником.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/uk/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовий переказ між фінансовими установами</td>
          <td class="related-messages-table__overview">Повідомлення pacs.009 використовується для кредитових переказів між фінансовими установами, коли переказ здійснюється від власного імені установи, а не від імені клієнта. Воно підтримує міжбанківське фінансування, покриваючі платежі та управління ліквідністю.</td>
        </tr>
    </tbody>
  </table>
</div>

