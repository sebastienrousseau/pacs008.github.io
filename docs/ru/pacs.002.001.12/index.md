---
title: pacs.002.001.12 | Отчёт о статусе платежа между финансовыми учреждениями | pacs008
description: Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о...
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — Отчёт о статусе платежа между финансовыми учреждениями

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
          <td class="message-metadata-table__label"><strong>Название ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Обзор

Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и меткой времени создания
- **OrgnlGrpInfAndSts** — Информация об исходной группе и статус для отчётности на уровне пакета
- **TxInfAndSts** — Информация о транзакции и статус для результатов отдельных транзакций
- **StsRsnInf** — Информация о причине статуса со структурированными кодами причин
- **OrgnlTxRef** — Ссылка на исходную транзакцию, связывающая с исходным поручением

## Бизнес-контекст

- Используется для подтверждения расчёта или отчёта об отклонении кредитовых переводов, прямых дебетований и возвратов платежей
- Обеспечивает сверку между инструктирующими и инструктируемыми агентами
- Требуется в потоках CBPR+ для подтверждения обработки сообщений pacs.008 и pacs.009
- Поддерживает отчётность о статусе как на уровне группы пакета, так и на уровне отдельных транзакций

<div class="operational-matrix-table" tabindex="0" aria-label="Ключевые элементы данных Бизнес-контекст">
  <table>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок группы с идентификацией сообщения и меткой времени создания</td>
          <td class="operational-matrix-table__right">Используется для подтверждения расчёта или отчёта об отклонении кредитовых переводов, прямых дебетований и возвратов платежей</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Информация об исходной группе и статус для отчётности на уровне пакета</td>
          <td class="operational-matrix-table__right">Обеспечивает сверку между инструктирующими и инструктируемыми агентами</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Информация о транзакции и статус для результатов отдельных транзакций</td>
          <td class="operational-matrix-table__right">Требуется в потоках CBPR+ для подтверждения обработки сообщений pacs.008 и pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Информация о причине статуса со структурированными кодами причин</td>
          <td class="operational-matrix-table__right">Поддерживает отчётность о статусе как на уровне группы пакета, так и на уровне отдельных транзакций</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Ссылка на исходную транзакцию, связывающая с исходным поручением</td>
          <td class="operational-matrix-table__right">Инструктируемый агент (получатель) отправляет pacs.002 обратно инструктирующему агенту (отправителю) для подтверждения принятия, расчёта или отклонения полученного платёжного поручения, такого как pacs.008 или pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Заменяет MT199 и текстовые описания статуса в поле 79 сообщений MT
- CBPR+ обязывает использовать pacs.002 для всех сообщений о статусе платежей
- Структурированные коды причин заменяют свободные текстовые пояснения отклонений
- Интеграция отслеживания SWIFT gpi требует pacs.002 для сквозной прозрачности

## Поток сообщения

Инструктируемый агент (получатель) отправляет pacs.002 обратно инструктирующему агенту (отправителю) для подтверждения принятия, расчёта или отклонения полученного платёжного поручения, такого как pacs.008 или pacs.009.

## Таблица отличий версий

<div class="version-diff-table" tabindex="0" aria-label="Таблица отличий версий">
  <table>
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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Используйте это, когда нужно соответствовать текущим шаблонам и артефактам валидации проекта.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Более поздние ревизии каталога</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Сравнение pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Сравнение pacs.002 vs pacs.028">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Измерение</th>
        <th>pacs.002.001.12</th>
        <th>Сообщение для сравнения</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основное назначение</td>
          <td class="message-comparison-table__current">Сообщить статус</td>
          <td class="message-comparison-table__other">Запросить статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Кто инициирует взаимодействие</td>
          <td class="message-comparison-table__current">Учреждение, отправляющее статус</td>
          <td class="message-comparison-table__other">Учреждение, запрашивающее статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Операционная модель</td>
          <td class="message-comparison-table__current">Отчётность по событию</td>
          <td class="message-comparison-table__other">Запрос по исключению</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Какого неверного предположения избегать</td>
          <td class="message-comparison-table__current">Что отчётность по статусу заменяет процессы разбора запросов и расследований</td>
          <td class="message-comparison-table__other">Что для каждого платежа нужен явный запрос статуса</td>
        </tr>
    </tbody>
  </table>
</div>

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/ru/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а не от имени клиента. Оно поддерживает межбанковское финансирование, покрывающие платежи и управление ликвидностью.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Запрос статуса платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.028 отправляется финансовым учреждением для запроса статуса ранее направленного платёжного поручения. Оно обеспечивает проактивное отслеживание обработки платежа без ожидания незапрошенного отчёта о статусе.</td>
        </tr>
    </tbody>
  </table>
</div>

