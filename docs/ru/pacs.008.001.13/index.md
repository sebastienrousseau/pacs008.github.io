---
title: "pacs.008.001.13 | Клиентский кредитовый перевод между финансовыми учреждениями | pacs008"
description: Сообщение pacs.008 является основным платёжным поручением, передаваемым между финансовыми учреждениями для перевода средств от имени клиента. Оно содержит...
lang: ru-RU
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.008 enough on its own for production payments?"
    answer: "No. Production readiness also depends on scheme rules, address quality, party data, status handling, and exception flows."
  - question: "What causes the most repair work?"
    answer: "Weak party data, poor address structuring, inconsistent identifiers, and unstructured remittance content are common causes."
---

# pacs.008.001.13 — Клиентский кредитовый перевод между финансовыми учреждениями

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Статус регистрации</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Год</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Версия</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Обзор

Сообщение pacs.008 является основным платёжным поручением, передаваемым между финансовыми учреждениями для перевода средств от имени клиента. Оно содержит информацию о дебиторе, кредиторе, сумме и реквизитах перевода для одной или нескольких транзакций кредитового перевода.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификатором сообщения, датой создания, количеством транзакций и информацией о расчёте
- **CdtTrfTxInf** — Информация о транзакции кредитового перевода с суммой, комиссиями и назначением
- **Dbtr / DbtrAgt** — Идентификация дебитора и агента дебитора и реквизиты счёта
- **Cdtr / CdtrAgt** — Идентификация кредитора и агента кредитора и реквизиты счёта
- **RmtInf** — Информация о переводе для структурированных или неструктурированных платёжных ссылок

## Бизнес-контекст

- Основное сообщение для трансграничных и внутренних кредитовых переводов, инициированных клиентом
- Используется в SEPA SCT, SEPA Instant, CBPR+ и национальных клиринговых системах
- Содержит структурированную информацию о переводе для поддержки автоматической сверки
- Поддерживает последовательный, покрывающий и прямой методы расчёта для многоэтапных платёжных цепочек

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок группы с идентификатором сообщения, датой создания, количеством транзакций и информацией о расчёте</td>
          <td class="operational-matrix-table__right">Основное сообщение для трансграничных и внутренних кредитовых переводов, инициированных клиентом</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Информация о транзакции кредитового перевода с суммой, комиссиями и назначением</td>
          <td class="operational-matrix-table__right">Используется в SEPA SCT, SEPA Instant, CBPR+ и национальных клиринговых системах</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Идентификация дебитора и агента дебитора и реквизиты счёта</td>
          <td class="operational-matrix-table__right">Содержит структурированную информацию о переводе для поддержки автоматической сверки</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Идентификация кредитора и агента кредитора и реквизиты счёта</td>
          <td class="operational-matrix-table__right">Поддерживает последовательный, покрывающий и прямой методы расчёта для многоэтапных платёжных цепочек</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Информация о переводе для структурированных или неструктурированных платёжных ссылок</td>
          <td class="operational-matrix-table__right">Агент дебитора создаёт pacs.008 и отправляет его агенту кредитора (напрямую или через посредников). Каждый агент в цепочке проверяет, обогащает и пересылает поручение, пока агент кредитора не зачислит средства на счёт бенефициара.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Заменяет MT103 и MT103+ для трансграничных клиентских кредитовых переводов
- Крайний срок по структурированным адресам — ноябрь 2026 года — распространяется на все почтовые адреса сторон
- SWIFT gpi требует pacs.008 для сквозного отслеживания на основе UETR
- 13 редакций отражают продолжающуюся эволюцию схемы в рыночных инфраструктурах

## Поток сообщения

Агент дебитора создаёт pacs.008 и отправляет его агенту кредитора (напрямую или через посредников). Каждый агент в цепочке проверяет, обогащает и пересылает поручение, пока агент кредитора не зачислит средства на счёт бенефициара.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Ранние ревизии</td>
          <td class="version-diff-table__takeaway">Полезно главным образом для анализа миграции с устаревших систем и понимания истории версий.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Современные ревизии до текущей</td>
          <td class="version-diff-table__takeaway">Именно эти ревизии чаще всего встречаются в недавних проектах миграции и сосуществования.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Текущая ревизия каталога</td>
          <td class="version-diff-table__takeaway">Используйте это для планирования по текущей версии, продолжая при этом проверять правила схемы и готовность контрагентов.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `MsgId`: Это поле должно идентифицировать сам конверт сообщения, а не ссылку на платёж конечного клиента.
- `EndToEndId`: По возможности сохраняйте стабильную клиентскую трассируемость во всех последующих системах.
- `UETR`: Используйте это последовательно в трансграничных и сильно отслеживаемых сценариях; не создавайте значение ситуативно на более поздних этапах обработки.
- `IntrBkSttlmAmt`: Проверяйте сумму и валюту по бизнес-правилам до валидации схемы.
- `Dbtr` / `Cdtr`: Качество данных о сторонах, структура адресов и идентификаторы обычно сильнее всего влияют на объём исправлений.

## Сравнение pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Сравнение pacs.008 vs pacs.009">
  <table>
    <caption>Сравнение pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Измерение</th>
        <th>pacs.008.001.13</th>
        <th>Сообщение для сравнения</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основное назначение</td>
          <td class="message-comparison-table__current">Клиентский кредитовый перевод</td>
          <td class="message-comparison-table__other">Кредитовый перевод по собственному счёту учреждения или покрывающий расчётный этап</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Бизнес-владелец</td>
          <td class="message-comparison-table__current">Операции клиентских платежей</td>
          <td class="message-comparison-table__other">Казначейские / корреспондентские / операции фондирования</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Типовые сочетания</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 и иногда связанные потоки pacs.008</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Какого неверного предположения избегать</td>
          <td class="message-comparison-table__current">Что сюда относится любой межбанковский перевод</td>
          <td class="message-comparison-table__other">Что он может заменить клиентские инструкции кредитового перевода</td>
        </tr>
    </tbody>
  </table>
</div>

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [SWIFT CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [SWIFT CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Поддерживаемые версии

<div class="message-versions-table" tabindex="0" aria-label="Поддерживаемые версии">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Версия</th>
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
          <td class="message-versions-table__status"><strong>Текущая</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Возврат платежа</td>
          <td class="related-messages-table__overview">Сообщение pacs.004 используется для возврата ранее рассчитанной платёжной транзакции. Оно обращает движение средств, когда платёж не может быть зачислен, был отправлен по ошибке или отзывается отправляющим учреждением.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а не от имени клиента. Оно поддерживает межбанковское финансирование, покрывающие платежи и управление ликвидностью.</td>
        </tr>
    </tbody>
  </table>
</div>

