---
title: "Описание сообщений pacs | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ru-RU
lastUpdated: true
image: /logo.webp
---

# Описание сообщений pacs

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Жизненный цикл платежа

Полный жизненный цикл платежа pacs включает шесть этапов и несколько типов сообщений, работающих совместно.

**Этап 1 — Инициирование.** Платёж возникает в домене клиент-банк (pain.001). Банк должника получает инструкцию и транспонирует её в межбанковский домен.

**Этап 2 — Межбанковская инструкция.** Агент должника создаёт pacs.008 и отправляет его следующему агенту в цепочке. В последовательном потоке pacs.008 передаётся поэтапно через посредников. В покрывающем потоке pacs.008 идёт напрямую от агента должника к агенту кредитора, а отдельный pacs.009 обеспечивает финансирование через корреспондентскую цепочку.

**Этап 3 — Отчёты о статусе.** На каждом этапе принимающий агент может вернуть pacs.002, подтверждающий принятие (ACCP/ACSP/ACSC), отклонение (RJCT) или статус ожидания (PDNG). В CBPR+ pacs.002 обязателен для всех коммуникаций о статусе платежа.

**Этап 4 — Расчёт.** Расчёт выполняется через клиринговую систему (CLRG), на корреспондентских счетах (INDA/INGA) или через покрывающий платёж (COVE). Дата и сумма межбанковского расчёта определяют, когда и сколько рассчитывается.

**Этап 5 — Зачисление бенефициару.** Агент кредитора зачисляет средства бенефициару и может отправить уведомление клиенту.

**Этап 6 — Обработка исключений.** Если средства не могут быть зачислены бенефициару после расчёта, pacs.004 возвращает средства по цепочке. Если отправитель обнаруживает ошибку или мошенничество, pacs.007 продвигается вперёд по цепочке. Если статус неизвестен, pacs.028 запрашивает следующего агента, а ответ возвращается через pacs.002.

### Последовательный поток

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Поток покрытия

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML-структура pacs.008

pacs.008 состоит из двух основных блоков: заголовка группы (GrpHdr) и информации о транзакции кредитового перевода (CdtTrfTxInf).

### Заголовок группы (GrpHdr)

Заголовок группы появляется ровно один раз в каждом сообщении и содержит:

- **MsgId** — Уникальный идентификатор сообщения, назначаемый отправляющим агентом. Максимум 35 символов, уникален в рамках отправителя.
- **CreDtTm** — Временная метка создания в формате ISO 8601.
- **NbOfTxs** — Количество отдельных транзакций в сообщении.
- **SttlmInf** — Информация о расчёте, включая метод расчёта (SttlmMtd), опционально клиринговую систему и расчётный счёт.
- **IntrBkSttlmDt** — Дата межбанковского расчёта.
- **PmtTpInf** — Информация о типе платежа: приоритет, уровень сервиса, локальный инструмент и категория назначения.

### Информация о транзакции кредитового перевода (CdtTrfTxInf)

Каждая транзакция содержит:

- **PmtId** — Идентификаторы платежа: InstrId, EndToEndId, TxId и UETR.
- **IntrBkSttlmAmt** — Сумма межбанковского расчёта с кодом валюты.
- **InstdAmt** — Исходная запрошенная сумма (может отличаться от суммы расчёта из-за конвертации).
- **ChrgBr** — Код несения расходов (DEBT, CRED, SHAR или SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Имя, адрес, идентификация, счёт и агент должника.
- **Cdtr / CdtrAcct / CdtrAgt** — Имя, адрес, идентификация, счёт и агент кредитора.
- **IntrmyAgt1 / 2 / 3** — До трёх посреднических агентов в цепочке.
- **RmtInf** — Информация о назначении платежа: неструктурированная (свободный текст) или структурированная (ссылки на документы, суммы, даты).
- **Purp** — Структурированный код назначения.
- **RgltryRptg** — Детали регуляторной отчётности.

## Идентификаторы платежа

Сообщения pacs используют несколько идентификаторов, выполняющих различные роли в платёжной цепочке.

<div class="api-fields-table" tabindex="0" aria-label="Идентификаторы платежа">
  <table>
    <caption>Идентификаторы платежа и их роли</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Идентификатор</th>
        <th scope="col">Назначается</th>
        <th scope="col">Изменяется в цепочке?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Каждым отправляющим агентом</td>
          <td class="api-fields-table__constraint">Да — новый для каждого сообщения</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Каждым инструктирующим агентом</td>
          <td class="api-fields-table__constraint">Да — может изменяться на каждом шаге</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Отправителем (должником)</td>
          <td class="api-fields-table__constraint">Нет — не должен изменяться</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Первым инструктирующим агентом</td>
          <td class="api-fields-table__constraint">Нет — не должен изменяться</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Агентом должника</td>
          <td class="api-fields-table__constraint">Нет — универсальное отслеживание</td>
        </tr>
    </tbody>
  </table>
</div>

## Методы расчёта

Элемент SttlmMtd определяет способ межбанковского расчёта.

- **CLRG** — Расчёт через клиринговую систему, такую как TARGET2, EURO1 или CHIPS. Наиболее распространён для национального и регионального клиринга.
- **INDA** — Расчёт на счетах инструктируемого агента. Агент должника имеет счёт «ностро» у следующего агента. Типичен для двустороннего корреспондентского банкинга.
- **INGA** — Расчёт на счетах инструктирующего агента. Инструктируемый агент имеет счёт «ностро» у отправляющего агента. Менее распространён, чем INDA.
- **COVE** — Расчёт через отдельный покрывающий платёж. pacs.009 обеспечивает финансирование, а pacs.008 передаёт данные клиента напрямую. Используется в трансграничном корреспондентском банкинге.

## Коды несения расходов

Элемент ChrgBr определяет, кто несёт расходы по платежу.

- **DEBT** — Все расходы несёт должник (эквивалент MT103: OUR). Кредитор получает полную сумму.
- **CRED** — Все расходы несёт кредитор (эквивалент MT103: BEN). Расходы вычитаются из перевода.
- **SHAR** — Расходы разделяются (эквивалент MT103: SHA). Каждая сторона оплачивает расходы своего агента. Наиболее распространён для трансграничных платежей.
- **SLEV** — Расходы определяются уровнем сервиса. Обязателен для SEPA. Без вычетов из суммы перевода.

## Формат почтового адреса

### Структурированный адрес

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Неструктурированный адрес (устаревший для CBPR+ после ноября 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Основные ограничения: StrtNm макс. 70 символов (CBPR+), TwnNm макс. 35 символов (CBPR+), Ctry в формате ISO 3166-1 alpha-2, AdrLine макс. 70 символов на строку и макс. 7 строк.

## UETR и отслеживание gpi

UETR (Unique End-to-End Transaction Reference) — UUID v4, генерируемый агентом должника. Присутствует в PmtId/UETR в pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 и pacs.028. Не должен изменяться на протяжении всей платёжной цепочки.

SWIFT gpi использует UETR для отслеживания платежей через облачную базу данных Tracker. Каждый агент подтверждает получение и обработку, обеспечивая сквозную видимость. Соглашение об уровне обслуживания gpi для трансграничных платежей предусматривает зачисление на счёт кредитора в тот же день.

## Ссылки

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

