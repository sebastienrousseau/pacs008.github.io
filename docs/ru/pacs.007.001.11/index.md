---
title: pacs.007.001.11 | Сторнирование платежа между финансовыми учреждениями | pacs008
description: Сообщение pacs.007 используется для сторнирования ранее отправленного платёжного поручения, которое ещё не было рассчитано, или для запроса сторнирования...
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Сторнирование платежа между финансовыми учреждениями

| | |
|---|---|
| **Название ISO** | FIToFIPaymentReversalV11 |
| **Статус регистрации** | Registered |
| **Год** | 2019 |
| **Версия** | 11 |

## Обзор

Сообщение pacs.007 используется для сторнирования ранее отправленного платёжного поручения, которое ещё не было рассчитано, или для запроса сторнирования рассчитанного платежа. В отличие от pacs.004 (возврат), оно инициируется первоначальным инструктирующим агентом.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и меткой времени создания
- **TxInf** — Информация о транзакции с суммой сторнирования и сторонами
- **OrgnlGrpInf** — Информация об исходной группе со ссылкой на исходное сообщение
- **RvslRsnInf** — Информация о причине сторнирования со структурированными кодами причин
- **OrgnlTxRef** — Ссылка на исходную транзакцию для сквозной отслеживаемости

## Бизнес-контекст

- Инициируется, когда первоначальный отправитель обнаруживает ошибку до или после расчёта
- Используется в сценариях мошенничества, когда требуется быстрое сторнирование
- Поддерживает как полное, так и частичное сторнирование суммы исходного платежа
- Содержит структурированные коды причин сторнирования для последующей обработки

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
          <td class="operational-matrix-table__left">**GrpHdr** — Заголовок группы с идентификацией сообщения и меткой времени создания</td>
          <td class="operational-matrix-table__right">Инициируется, когда первоначальный отправитель обнаруживает ошибку до или после расчёта</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Информация о транзакции с суммой сторнирования и сторонами</td>
          <td class="operational-matrix-table__right">Используется в сценариях мошенничества, когда требуется быстрое сторнирование</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Информация об исходной группе со ссылкой на исходное сообщение</td>
          <td class="operational-matrix-table__right">Поддерживает как полное, так и частичное сторнирование суммы исходного платежа</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**RvslRsnInf** — Информация о причине сторнирования со структурированными кодами причин</td>
          <td class="operational-matrix-table__right">Содержит структурированные коды причин сторнирования для последующей обработки</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlTxRef** — Ссылка на исходную транзакцию для сквозной отслеживаемости</td>
          <td class="operational-matrix-table__right">Инструктирующий агент (первоначальный отправитель) отправляет pacs.007 вперёд по платёжной цепочке для сторнирования ранее инструктированного платежа. Каждый агент обрабатывает инструкцию сторнирования и корректирует расчёт соответственно.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Отличается от pacs.004 направлением — сторнирование идёт вперёд от отправителя, возврат идёт назад от бенефициара
- CBPR+ требует связки с идентификаторами исходного сообщения для автоматического сопоставления
- Структурированные коды причин заменяют свободные текстовые описания из устаревших MT-сообщений
- Всё чаще используется в процессах отзыва мгновенных платежей и предотвращения мошенничества

## Поток сообщения

Инструктирующий агент (первоначальный отправитель) отправляет pacs.007 вперёд по платёжной цепочке для сторнирования ранее инструктированного платежа. Каждый агент обрабатывает инструкцию сторнирования и корректирует расчёт соответственно.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Хорошая основа для моделирования процессов сторнирования.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Более поздние ревизии каталога</td>
          <td class="version-diff-table__takeaway">Проверьте более поздние ревизии на соответствие текущим требованиям рыночной инфраструктуры.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `MsgId`: Само сообщение сторнирования должно иметь собственный безопасный для аудита идентификатор.
- `OrgnlInstrId`: Сохраняйте исходную ссылку на платёж, чтобы избежать разрывов при сверке.
- `RvslRsnInf`: Используйте структурированные причины сторнирования, чтобы случаи мошенничества, ошибок и дублирующихся платежей направлялись по-разному.

## Сравнение pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Сравнение pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Измерение</th>
        <th>pacs.007.001.11</th>
        <th>Сообщение для сравнения</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основное назначение</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Лучше всего подходит для</td>
          <td class="message-comparison-table__current">Обработка сторнирований по отзыву, ошибке или мошенничеству</td>
          <td class="message-comparison-table__other">Обработка возвратов после расчёта</td>
        </tr>
    </tbody>
  </table>
</div>

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/ru/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Клиентский кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.008 является основным платёжным поручением, передаваемым между финансовыми учреждениями для перевода средств от имени клиента. Оно содержит информацию о дебиторе, кредиторе, сумме и реквизитах перевода для одной или нескольких транзакций кредитового перевода.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Возврат платежа</td>
          <td class="related-messages-table__overview">Сообщение pacs.004 используется для возврата ранее рассчитанной платёжной транзакции. Оно обращает движение средств, когда платёж не может быть зачислен, был отправлен по ошибке или отзывается отправляющим учреждением.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
    </tbody>
  </table>
</div>

