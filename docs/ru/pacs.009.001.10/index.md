---
title: "pacs.009.001.10 | Кредитовый перевод между финансовыми учреждениями | pacs008"
description: Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а...
lang: ru-RU
lastUpdated: true
image: /logo.svg
faq:
  - question: "Когда следует выбирать pacs.009 вместо pacs.008?"
    answer: "Выбирайте pacs.009 для переводов на собственный счёт и покрывающих ног; выбирайте pacs.008 для инструкций кредитового перевода клиента."
  - question: "Почему pacs.009 часто труднее сверить, чем ожидалось?"
    answer: "Потому что банки должны сохранять связь между казначейским финансированием, корреспондентскими ногами и любым связанным клиентским платежом."
---

# pacs.009.001.10 — Кредитовый перевод между финансовыми учреждениями

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Поле</th>
        <th scope="col">Значение</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Название ISO</strong></td>
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Статус регистрации</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Год</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Версия</strong></td>
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Обзор

Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а не от имени клиента. Оно поддерживает межбанковское финансирование, покрывающие платежи и управление ликвидностью.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и информацией о расчёте
- **CdtTrfTxInf** — Информация о транзакции кредитового перевода с суммой межбанковского расчёта
- **Dbtr / DbtrAgt** — Идентификация учреждения-дебитора и его агента
- **Cdtr / CdtrAgt** — Идентификация учреждения-кредитора и его агента
- **IntrBkSttlmAmt** — Сумма межбанковского расчёта в валюте расчёта

## Бизнес-контекст

- Используется для межбанковских переводов с собственного счёта и покрывающих платежей
- Поддерживает управление ликвидностью между партнёрами корреспондентского банкинга
- Несёт покрывающую часть клиентских кредитовых переводов, рассчитываемых методом покрытия
- Обеспечивает казначейские и финансовые операции между финансовыми учреждениями

<div class="operational-matrix-table" tabindex="0" aria-label="Ключевые элементы данных Бизнес-контекст">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Ключевые элементы данных</th>
        <th>Бизнес-контекст</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок группы с идентификацией сообщения и информацией о расчёте</td>
          <td class="operational-matrix-table__right">Используется для межбанковских переводов с собственного счёта и покрывающих платежей</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Информация о транзакции кредитового перевода с суммой межбанковского расчёта</td>
          <td class="operational-matrix-table__right">Поддерживает управление ликвидностью между партнёрами корреспондентского банкинга</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Идентификация учреждения-дебитора и его агента</td>
          <td class="operational-matrix-table__right">Несёт покрывающую часть клиентских кредитовых переводов, рассчитываемых методом покрытия</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Идентификация учреждения-кредитора и его агента</td>
          <td class="operational-matrix-table__right">Обеспечивает казначейские и финансовые операции между финансовыми учреждениями</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Сумма межбанковского расчёта в валюте расчёта</td>
          <td class="operational-matrix-table__right">Учреждение-дебитор отправляет pacs.009 учреждению-кредитору для перевода собственных средств. Для платежей методом покрытия pacs.009 обеспечивает финансовую часть, в то время как pacs.008 несёт клиентское поручение по отдельному маршруту.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Заменяет MT202 и MT202COV для переводов между учреждениями
- Потоки метода покрытия связывают pacs.009 с базовой клиентской инструкцией pacs.008
- Структурированные данные о сторонах и идентификация LEI всё чаще требуются
- SWIFT gpi охватывает pacs.009 для прозрачности корреспондентского банкинга

## Поток сообщения

Учреждение-дебитор отправляет pacs.009 учреждению-кредитору для перевода собственных средств. Для платежей методом покрытия pacs.009 обеспечивает финансовую часть, в то время как pacs.008 несёт клиентское поручение по отдельному маршруту.

## Таблица отличий версий

<div class="version-diff-table" tabindex="0" aria-label="Таблица отличий версий">
  <table>
    <caption>Таблица отличий версий</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Диапазон версий</th>
        <th>Почему это важно</th>
        <th>Практический вывод</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Соответствует текущей поддержке проекта для потоков кредитовых переводов FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Более поздние ревизии каталога</td>
          <td class="version-diff-table__takeaway">Важно для планирования дорожной карты в средах корреспондентских и покрывающих платежей.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Сравнение pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Сравнение pacs.009 vs pacs.008">
  <table>
    <caption>Сравнение pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Измерение</th>
        <th>pacs.009.001.10</th>
        <th>Сообщение для сравнения</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основное назначение</td>
          <td class="message-comparison-table__current">Кредитовый перевод по собственному счёту учреждения или покрывающий расчётный этап</td>
          <td class="message-comparison-table__other">Клиентский кредитовый перевод</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Бизнес-владелец</td>
          <td class="message-comparison-table__current">Казначейские / корреспондентские / операции фондирования</td>
          <td class="message-comparison-table__other">Операции клиентских платежей</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Типовые сочетания</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 и связанные потоки pacs.008</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Какого неверного предположения избегать</td>
          <td class="message-comparison-table__current">Что это просто более технический pacs.008</td>
          <td class="message-comparison-table__other">Что он без проблем покрывает потоки институционального фондирования</td>
        </tr>
    </tbody>
  </table>
</div>

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

## Связанные сообщения
<div class="related-messages-table" tabindex="0" aria-label="Связанные сообщения">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Тип сообщения</th>
        <th>Описание</th>
        <th>Обзор</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Клиентский кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.008 является основным платёжным поручением, передаваемым между финансовыми учреждениями для перевода средств от имени клиента. Оно содержит информацию о дебиторе, кредиторе, сумме и реквизитах перевода для одной или нескольких транзакций кредитового перевода.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Прямое дебетование между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.010 используется между финансовыми учреждениями для транзакций прямого дебетования с собственного счёта учреждения. Оно позволяет одному учреждению взыскивать средства непосредственно со счёта другого учреждения.</td>
        </tr>
    </tbody>
  </table>
</div>

