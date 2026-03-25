---
title: "pacs.028.001.05 | Запрос статуса платежа между финансовыми учреждениями | pacs008"
description: Сообщение pacs.028 отправляется финансовым учреждением для запроса статуса ранее направленного платёжного поручения. Оно обеспечивает проактивное...
lang: ru-RU
lastUpdated: true
image: /logo.svg
faq:
  - question: "Следует ли отправлять pacs.028 после каждого платежа?"
    answer: "Обычно нет. Он лучше всего работает как целевой инструмент для исключений, а не как массовый трафик."
  - question: "Что делает pacs.028 полезным?"
    answer: "Чёткие правила тайм-аута, эскалации и сверки вокруг исходного платёжного дела."
---

# pacs.028.001.05 — Запрос статуса платежа между финансовыми учреждениями

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Обзор

Сообщение pacs.028 отправляется финансовым учреждением для запроса статуса ранее направленного платёжного поручения. Оно обеспечивает проактивное отслеживание обработки платежа без ожидания незапрошенного отчёта о статусе.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и меткой времени создания
- **TxInf** — Информация о транзакции, идентифицирующая платёж для запроса
- **OrgnlGrpInf** — Информация об исходной группе со ссылкой на исходное сообщение
- **OrgnlInstrId** — Идентификатор исходной инструкции из исходного платежа
- **OrgnlEndToEndId** — Исходный сквозной идентификатор для отслеживаемости

## Бизнес-контекст

- Обеспечивает проактивный запрос статуса для платёжных поручений в обработке
- Поддерживает операционные команды, расследующие задержанные или пропавшие платежи
- Дополняет pacs.002, инициируя коммуникацию о статусе вместо ожидания
- Используется в процессах обработки исключений и мониторинга SLA

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Заголовок группы с идентификацией сообщения и меткой времени создания</td>
          <td class="operational-matrix-table__right">Обеспечивает проактивный запрос статуса для платёжных поручений в обработке</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Информация о транзакции, идентифицирующая платёж для запроса</td>
          <td class="operational-matrix-table__right">Поддерживает операционные команды, расследующие задержанные или пропавшие платежи</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Информация об исходной группе со ссылкой на исходное сообщение</td>
          <td class="operational-matrix-table__right">Дополняет pacs.002, инициируя коммуникацию о статусе вместо ожидания</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Идентификатор исходной инструкции из исходного платежа</td>
          <td class="operational-matrix-table__right">Используется в процессах обработки исключений и мониторинга SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Исходный сквозной идентификатор для отслеживаемости</td>
          <td class="operational-matrix-table__right">Инструктирующий агент отправляет pacs.028 инструктируемому агенту для запроса статуса конкретного платежа. Инструктируемый агент отвечает сообщением pacs.002 с текущим статусом обработки.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Заменяет шаблоны запросов статуса MT199 и ручные запросы сообщений SWIFT
- CBPR+ поддерживает структурированные запросы статуса, связанные с идентификаторами исходных сообщений
- Отслеживание на основе UETR через gpi снижает необходимость в ручных запросах
- Всё активнее интегрируется в автоматизированные панели управления платёжными операциями

## Поток сообщения

Инструктирующий агент отправляет pacs.028 инструктируемому агенту для запроса статуса конкретного платежа. Инструктируемый агент отвечает сообщением pacs.002 с текущим статусом обработки.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Подходит для текущего моделирования запросов статуса.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Более поздняя ревизия каталога</td>
          <td class="version-diff-table__takeaway">Для будущего планирования взаимодействия проверьте более новую ревизию каталога.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `MsgId`: Сам запрос должен иметь проверяемый идентификатор, отличный от базового платежа.
- `OrgnlInstrId`: Используйте точный исходный идентификатор из первоначальной инструкции, чтобы максимально повысить точность сопоставления.
- `OrgnlEndToEndId`: Добавление клиентской трассируемости помогает операционным командам быстрее сопоставлять запрос.

## Сравнение pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Сравнение pacs.028 vs pacs.002">
  <table>
    <caption>Сравнение pacs.028 vs pacs.002</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Измерение</th>
        <th>pacs.028.001.05</th>
        <th>Сообщение для сравнения</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основное назначение</td>
          <td class="message-comparison-table__current">Запросить статус</td>
          <td class="message-comparison-table__other">Сообщить статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Кто инициирует взаимодействие</td>
          <td class="message-comparison-table__current">Учреждение, запрашивающее статус</td>
          <td class="message-comparison-table__other">Учреждение, отправляющее статус</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Операционная модель</td>
          <td class="message-comparison-table__current">Запрос по исключению</td>
          <td class="message-comparison-table__other">Отчётность по событию</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Какого неверного предположения избегать</td>
          <td class="message-comparison-table__current">Что его следует отправлять регулярно по каждому платежу</td>
          <td class="message-comparison-table__other">Что он устраняет необходимость в проактивном управлении кейсами</td>
        </tr>
    </tbody>
  </table>
</div>

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/ru/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Клиентский кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.008 является основным платёжным поручением, передаваемым между финансовыми учреждениями для перевода средств от имени клиента. Оно содержит информацию о дебиторе, кредиторе, сумме и реквизитах перевода для одной или нескольких транзакций кредитового перевода.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а не от имени клиента. Оно поддерживает межбанковское финансирование, покрывающие платежи и управление ликвидностью.</td>
        </tr>
    </tbody>
  </table>
</div>

