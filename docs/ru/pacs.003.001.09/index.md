---
title: "pacs.003.001.09 | Клиентское прямое дебетование между финансовыми учреждениями | pacs008"
description: Сообщение pacs.003 передаётся между финансовыми учреждениями для исполнения поручения клиента на прямое дебетование. Оно позволяет банку кредитора...
lang: ru-RU
lastUpdated: true
image: /logo.svg
faq:
  - question: "Является ли pacs.003 зеркалом прямого дебета pacs.008?"
    answer: "Нет. Он обрабатывает потоки прямого дебетования клиентов с другими правилами мандата, сроками и исключениями."
  - question: "Что наиболее важно с операционной точки зрения?"
    answer: "Качество мандата, правила счёта должника и обработка возвратов важнее, чем генерация XML."
---

# pacs.003.001.09 — Клиентское прямое дебетование между финансовыми учреждениями

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
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
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Обзор

Сообщение pacs.003 передаётся между финансовыми учреждениями для исполнения поручения клиента на прямое дебетование. Оно позволяет банку кредитора взыскивать средства с банка дебитора от имени кредитора.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и информацией о расчёте
- **DrctDbtTxInf** — Информация о транзакции прямого дебетования с суммой и сторонами
- **Cdtr** — Идентификация кредитора и реквизиты счёта
- **CdtrAgt** — Идентификация агента кредитора (инкассирующего учреждения)
- **DbtrAgt** — Идентификация агента дебитора (платящего учреждения)

## Бизнес-контекст

- Поддерживает схемы прямого дебетования SEPA Core и B2B
- Используется для инкассирования периодических платежей, таких как подписки, коммунальные счета и погашение кредитов
- Требует действительной ссылки на мандат между дебитором и кредитором
- Позволяет пакетное инкассирование нескольких поручений на прямое дебетование в одном сообщении

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
          <td class="operational-matrix-table__right">Поддерживает схемы прямого дебетования SEPA Core и B2B</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Информация о транзакции прямого дебетования с суммой и сторонами</td>
          <td class="operational-matrix-table__right">Используется для инкассирования периодических платежей, таких как подписки, коммунальные счета и погашение кредитов</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Идентификация кредитора и реквизиты счёта</td>
          <td class="operational-matrix-table__right">Требует действительной ссылки на мандат между дебитором и кредитором</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Идентификация агента кредитора (инкассирующего учреждения)</td>
          <td class="operational-matrix-table__right">Позволяет пакетное инкассирование нескольких поручений на прямое дебетование в одном сообщении</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Идентификация агента дебитора (платящего учреждения)</td>
          <td class="operational-matrix-table__right">Агент кредитора инициирует pacs.003 в адрес агента дебитора для инкассирования средств. Агент дебитора проверяет мандат, контролирует покрытие счёта и выполняет расчёт либо возвращает транзакцию.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Требования к структурированному адресу и идентификации сторон в равной степени применяются к прямым дебетованиям
- Данные, связанные с мандатом, должны быть полностью структурированы с ноября 2026 года
- Заменяет устаревшие форматы прямого дебетования в стиле MT104 в трансграничных потоках
- Валидация идентификации схемы кредитора всё активнее применяется

## Поток сообщения

Агент кредитора инициирует pacs.003 в адрес агента дебитора для инкассирования средств. Агент дебитора проверяет мандат, контролирует покрытие счёта и выполняет расчёт либо возвращает транзакцию.

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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Полезно для моделирования ссылок на прямое дебетование в текущем проекте.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Более поздние ревизии каталога</td>
          <td class="version-diff-table__takeaway">Перед использованием в новом внедрении проверьте более поздние ревизии на предмет обновлений по мандатам, статусам и взаимодействию.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: Успех прямого дебетования часто больше зависит от качества счёта и мандата, чем от структуры XML.

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/ru/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Возврат платежа</td>
          <td class="related-messages-table__overview">Сообщение pacs.004 используется для возврата ранее рассчитанной платёжной транзакции. Оно обращает движение средств, когда платёж не может быть зачислен, был отправлен по ошибке или отзывается отправляющим учреждением.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Сторнирование платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.007 используется для сторнирования ранее отправленного платёжного поручения, которое ещё не было рассчитано, или для запроса сторнирования рассчитанного платежа. В отличие от pacs.004 (возврат), оно инициируется первоначальным инструктирующим агентом.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
    </tbody>
  </table>
</div>

