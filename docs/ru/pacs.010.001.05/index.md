---
title: "pacs.010.001.05 | Прямое дебетование между финансовыми учреждениями | pacs008"
description: Сообщение pacs.010 используется между финансовыми учреждениями для транзакций прямого дебетования с собственного счёта учреждения. Оно позволяет одному...
lang: ru-RU
lastUpdated: true
image: /logo.svg
faq:
  - question: "Is pacs.010 common in retail payment products?"
    answer: "Usually no. It fits bank-to-bank direct-debit scenarios better than standard retail products."
  - question: "What should teams design first?"
    answer: "Start with approval rules, bilateral controls, and exception handling before finalising XML templates."
---

# pacs.010.001.05 — Прямое дебетование между финансовыми учреждениями

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

Сообщение pacs.010 используется между финансовыми учреждениями для транзакций прямого дебетования с собственного счёта учреждения. Оно позволяет одному учреждению взыскивать средства непосредственно со счёта другого учреждения.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года. Дата справки по каталогу ISO 20022: 2025-02-27; ссылки на источники приведены ниже.

## Ключевые элементы данных

- **GrpHdr** — Заголовок группы с идентификацией сообщения и информацией о расчёте
- **DrctDbtTxInf** — Информация о транзакции прямого дебетования с суммой инкассирования
- **Cdtr / CdtrAgt** — Идентификация учреждения-кредитора и его агента
- **Dbtr / DbtrAgt** — Идентификация учреждения-дебитора и его агента
- **IntrBkSttlmAmt** — Сумма межбанковского расчёта в валюте расчёта

## Бизнес-контекст

- Поддерживает межбанковское прямое дебетование между финансовыми учреждениями
- Используется для взимания комиссий, маржинальных требований и институциональных расчётных обязательств
- Требует предварительно согласованных двусторонних соглашений между участвующими учреждениями
- Критически важно для институционального управления денежными средствами и межбанковских расчётных циклов

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
          <td class="operational-matrix-table__right">Поддерживает межбанковское прямое дебетование между финансовыми учреждениями</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Информация о транзакции прямого дебетования с суммой инкассирования</td>
          <td class="operational-matrix-table__right">Используется для взимания комиссий, маржинальных требований и институциональных расчётных обязательств</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Идентификация учреждения-кредитора и его агента</td>
          <td class="operational-matrix-table__right">Требует предварительно согласованных двусторонних соглашений между участвующими учреждениями</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Идентификация учреждения-дебитора и его агента</td>
          <td class="operational-matrix-table__right">Критически важно для институционального управления денежными средствами и межбанковских расчётных циклов</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Сумма межбанковского расчёта в валюте расчёта</td>
          <td class="operational-matrix-table__right">Учреждение-кредитор отправляет pacs.010 учреждению-дебитору для инкассирования средств по предварительно согласованному соглашению. Учреждение-дебитор проверяет запрос и осуществляет расчёт или отклоняет прямое дебетование.</td>
        </tr>
    </tbody>
  </table>
</div>

## Контекст CBPR+ и схем

- Заменяет элементы MT204 для обработки межбанкового прямого дебетования
- Структурированная идентификация сторон следует тем же требованиям, что и другие сообщения pacs
- Валидация институциональных идентификаторов (BIC, LEI) является обязательной
- Включено в дорожные карты полного внедрения ISO 20022 в рыночных инфраструктурах

## Поток сообщения

Учреждение-кредитор отправляет pacs.010 учреждению-дебитору для инкассирования средств по предварительно согласованному соглашению. Учреждение-дебитор проверяет запрос и осуществляет расчёт или отклоняет прямое дебетование.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Текущая реализация в pacs008</td>
          <td class="version-diff-table__takeaway">Служит ориентиром для поддержки прямого дебетования между учреждениями в текущем проекте.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Более поздняя ревизия каталога</td>
          <td class="version-diff-table__takeaway">Проверьте это перед внедрением более новых требований инфраструктуры.</td>
        </tr>
    </tbody>
  </table>
</div>

## Прокомментированный XML-пример

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

### Комментарии к полям

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Первичные источники

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/ru/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Кредитовый перевод между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а не от имени клиента. Оно поддерживает межбанковское финансирование, покрывающие платежи и управление ликвидностью.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ru/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Клиентское прямое дебетование между финансовыми учреждениями</td>
          <td class="related-messages-table__overview">Сообщение pacs.003 передаётся между финансовыми учреждениями для исполнения поручения клиента на прямое дебетование. Оно позволяет банку кредитора взыскивать средства с банка дебитора от имени кредитора.</td>
        </tr>
    </tbody>
  </table>
</div>

