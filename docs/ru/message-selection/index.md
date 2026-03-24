---
title: Руководство по выбору сообщений | pacs008
description: Выберите подходящее сообщение ISO 20022 pacs для генерации, статусов, возвратов, сторно и запросов.
lang: ru-RU
lastUpdated: true
image: /logo.svg
---

# Руководство по выбору сообщений

Сначала выбирайте семейство pacs по бизнес-событию, затем по схеме и операционной модели.

> Последняя сверка с первичными источниками выполнена 23 марта 2026 года с использованием публичных материалов ISO 20022, EPC и Swift, указанных на этой странице.

## Быстрая матрица выбора

<div class="decision-matrix-table" tabindex="0" aria-label="Быстрая матрица выбора">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/ru/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">Отчёт о статусе платежа между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.002 отправляется финансовым учреждением для отчёта о статусе ранее направленного платёжного поручения. Оно предоставляет информацию о подтверждении, отклонении или статусе ожидания для отдельных транзакций в рамках платёжного сообщения.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">Клиентское прямое дебетование между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.003 передаётся между финансовыми учреждениями для исполнения поручения клиента на прямое дебетование. Оно позволяет банку кредитора взыскивать средства с банка дебитора от имени кредитора.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">Возврат платежа</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.004 используется для возврата ранее рассчитанной платёжной транзакции. Оно обращает движение средств, когда платёж не может быть зачислен, был отправлен по ошибке или отзывается отправляющим учреждением.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">Сторнирование платежа между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.007 используется для сторнирования ранее отправленного платёжного поручения, которое ещё не было рассчитано, или для запроса сторнирования рассчитанного платежа. В отличие от pacs.004 (возврат), оно инициируется первоначальным инструктирующим агентом.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">Клиентский кредитовый перевод между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.008 является основным платёжным поручением, передаваемым между финансовыми учреждениями для перевода средств от имени клиента. Оно содержит информацию о дебиторе, кредиторе, сумме и реквизитах перевода для одной или нескольких транзакций кредитового перевода.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">Кредитовый перевод между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.009 используется для кредитовых переводов между финансовыми учреждениями, когда перевод осуществляется от собственного имени учреждения, а не от имени клиента. Оно поддерживает межбанковское финансирование, покрывающие платежи и управление ликвидностью.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">Прямое дебетование между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.010 используется между финансовыми учреждениями для транзакций прямого дебетования с собственного счёта учреждения. Оно позволяет одному учреждению взыскивать средства непосредственно со счёта другого учреждения.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ru/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">Запрос статуса платежа между финансовыми учреждениями</td>
          <td class="decision-matrix-table__overview">Сообщение pacs.028 отправляется финансовым учреждением для запроса статуса ранее направленного платёжного поручения. Оно обеспечивает проактивное отслеживание обработки платежа без ожидания незапрошенного отчёта о статусе.</td>
        </tr>
    </tbody>
  </table>
</div>

## Частые точки сравнения

<div class="comparison-points-table" tabindex="0" aria-label="Частые точки сравнения">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>Сравнение</th>
        <th>Ключевое различие</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">Клиентский платёж против институционального или покрывающего перевода</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">Возврат со стороны получателя против сторно со стороны отправителя</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">Отчет о статусе против запроса статуса</td>
        </tr>
    </tbody>
  </table>
</div>

## Поддерживаемые страницы сообщений

- [`pacs.002.001.12`](/ru/pacs.002.001.12/) — Отчёт о статусе платежа между финансовыми учреждениями
- [`pacs.003.001.09`](/ru/pacs.003.001.09/) — Клиентское прямое дебетование между финансовыми учреждениями
- [`pacs.004.001.11`](/ru/pacs.004.001.11/) — Возврат платежа
- [`pacs.007.001.11`](/ru/pacs.007.001.11/) — Сторнирование платежа между финансовыми учреждениями
- [`pacs.008.001.13`](/ru/pacs.008.001.13/) — Клиентский кредитовый перевод между финансовыми учреждениями
- [`pacs.009.001.10`](/ru/pacs.009.001.10/) — Кредитовый перевод между финансовыми учреждениями
- [`pacs.010.001.05`](/ru/pacs.010.001.05/) — Прямое дебетование между финансовыми учреждениями
- [`pacs.028.001.05`](/ru/pacs.028.001.05/) — Запрос статуса платежа между финансовыми учреждениями

