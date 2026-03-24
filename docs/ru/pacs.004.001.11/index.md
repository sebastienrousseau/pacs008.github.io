---
title: pacs.004.001.11 | Возврат платежа | pacs008
description: Сообщение pacs.004 используется для возврата ранее рассчитанной платёжной транзакции. Оно обращает движение средств, когда платёж не может быть зачислен...
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Возврат платежа

| | |
|---|---|
| **Название ISO** | PaymentReturnV11 |
| **Статус регистрации** | Registered |
| **Год** | 2019 |
| **Версия** | 11 |

## Обзор

Сообщение pacs.004 используется для возврата ранее рассчитанной платёжной транзакции. Оно обращает движение средств, когда платёж не может быть зачислен, был отправлен по ошибке или отзывается отправляющим учреждением.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и меткой времени создания
- **TxInf** — Информация о транзакции с суммой возврата и сторонами
- **OrgnlGrpInf** — Информация об исходной группе, связывающая с исходным сообщением
- **RtrRsnInf** — Информация о причине возврата со структурированными кодами причин
- **OrgnlTxRef** — Ссылка на исходную транзакцию для сопоставления и сверки

## Бизнес-контекст

- Обрабатывает возвраты после расчёта, когда счёт бенефициара не может быть кредитован
- Поддерживает сценарии отзыва, когда отправитель запрашивает возврат средств
- Содержит структурированные коды причин возврата для регуляторной и операционной прозрачности
- Применяется как к возвратам кредитовых переводов (pacs.008), так и к возвратам прямых дебетований (pacs.003)

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
          <td class="operational-matrix-table__right">Обрабатывает возвраты после расчёта, когда счёт бенефициара не может быть кредитован</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Информация о транзакции с суммой возврата и сторонами</td>
          <td class="operational-matrix-table__right">Поддерживает сценарии отзыва, когда отправитель запрашивает возврат средств</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Информация об исходной группе, связывающая с исходным сообщением</td>
          <td class="operational-matrix-table__right">Содержит структурированные коды причин возврата для регуляторной и операционной прозрачности</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — Информация о причине возврата со структурированными кодами причин</td>
          <td class="operational-matrix-table__right">Применяется как к возвратам кредитовых переводов (pacs.008), так и к возвратам прямых дебетований (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Ссылка на исходную транзакцию для сопоставления и сверки</td>
          <td class="operational-matrix-table__right">Инструктируемый агент отправляет pacs.004 обратно по платёжной цепочке для возврата ранее рассчитанных средств. Каждый агент в цепочке обрабатывает возврат и кредитует соответствующие счета.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Заменяет MT103 RETURN и сообщения о возвратах по методу покрытия
- Коды причин возврата стандартизированы и машиночитаемы в рамках ISO 20022
- CBPR+ требует полных справочных данных исходной транзакции для сопоставления
- Отслеживание SWIFT gpi распространяется на транзакции возврата для сквозной видимости

## Поток сообщения

Инструктируемый агент отправляет pacs.004 обратно по платёжной цепочке для возврата ранее рассчитанных средств. Каждый агент в цепочке обрабатывает возврат и кредитует соответствующие счета.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Соответствует текущим шаблонам для возвратов платежей.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Более поздние ревизии каталога</td>
          <td class="version-diff-table__takeaway">Проверьте более поздние ревизии сообщений возврата, если в объём работ входят обновления схемы или новые контрагенты.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Качество кодов причин критично для дальнейшего общения с клиентом и операционной маршрутизации.

## Сравнение pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Сравнение pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Измерение</th>
        <th>pacs.004.001.11</th>
        <th>Сообщение для сравнения</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Основное назначение</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Лучше всего подходит для</td>
          <td class="message-comparison-table__current">Обработка возвратов после расчёта</td>
          <td class="message-comparison-table__other">Обработка сторнирований по отзыву, ошибке или мошенничеству</td>
        </tr>
    </tbody>
  </table>
</div>

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/ru/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Клиентское прямое дебетование между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.003 передаётся между финансовыми учреждениями для исполнения поручения клиента на прямое дебетование. Оно позволяет банку кредитора взыскивать средства с банка дебитора от имени кредитора.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
    </tbody>
  </table>
</div>

