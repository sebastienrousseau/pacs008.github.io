---
title: "Пояснення повідомлень PACS | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: uk-UA
lastUpdated: true
image: /logo.webp
---

# Пояснення повідомлень PACS

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Життєвий цикл платежу

Повний життєвий цикл платежу pacs включає шість етапів та кілька типів повідомлень, що працюють спільно.

**Етап 1 — Ініціювання.** Платіж виникає у домені клієнт-банк (pain.001). Банк боржника отримує інструкцію та транспонує її в міжбанківський домен.

**Етап 2 — Міжбанківська інструкція.** Агент боржника створює pacs.008 та надсилає його наступному агенту в ланцюгу. У послідовному потоці pacs.008 передається поетапно через посередників. У покриваючому потоці pacs.008 іде напряму від агента боржника до агента кредитора, а окремий pacs.009 забезпечує фінансування через кореспондентський ланцюг.

**Етап 3 — Звіти про статус.** На кожному етапі приймаючий агент може повернути pacs.002, що підтверджує прийняття (ACCP/ACSP/ACSC), відхилення (RJCT) або статус очікування (PDNG). У CBPR+ pacs.002 обов'язковий для всіх комунікацій про статус платежу.

**Етап 4 — Розрахунок.** Розрахунок виконується через клірингову систему (CLRG), на кореспондентських рахунках (INDA/INGA) або через покриваючий платіж (COVE). Дата та сума міжбанківського розрахунку визначають, коли та скільки розраховується.

**Етап 5 — Зарахування бенефіціару.** Агент кредитора зараховує кошти бенефіціару та може надіслати повідомлення клієнту.

**Етап 6 — Обробка винятків.** Якщо кошти не можуть бути зараховані бенефіціару після розрахунку, pacs.004 повертає кошти по ланцюгу. Якщо відправник виявляє помилку або шахрайство, pacs.007 просувається вперед по ланцюгу. Якщо статус невідомий, pacs.028 запитує наступного агента, а відповідь повертається через pacs.002.

### Послідовний потік

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Потік покриття

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML-структура pacs.008

pacs.008 складається з двох основних блоків: заголовка групи (GrpHdr) та інформації про транзакцію кредитового переказу (CdtTrfTxInf).

### Заголовок групи (GrpHdr)

Заголовок групи з'являється рівно один раз у кожному повідомленні та містить:

- **MsgId** — Унікальний ідентифікатор повідомлення, призначений агентом-відправником. Максимум 35 символів, унікальний у межах відправника.
- **CreDtTm** — Часова мітка створення у форматі ISO 8601.
- **NbOfTxs** — Кількість окремих транзакцій у повідомленні.
- **SttlmInf** — Інформація про розрахунок, включаючи метод розрахунку (SttlmMtd), опціонально клірингову систему та розрахунковий рахунок.
- **IntrBkSttlmDt** — Дата міжбанківського розрахунку.
- **PmtTpInf** — Інформація про тип платежу: пріоритет, рівень сервісу, локальний інструмент та категорія призначення.

### Інформація про транзакцію кредитового переказу (CdtTrfTxInf)

Кожна транзакція містить:

- **PmtId** — Ідентифікатори платежу: InstrId, EndToEndId, TxId та UETR.
- **IntrBkSttlmAmt** — Сума міжбанківського розрахунку з кодом валюти.
- **InstdAmt** — Вихідна запитана сума (може відрізнятися від суми розрахунку через конвертацію).
- **ChrgBr** — Код несення витрат (DEBT, CRED, SHAR або SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Ім'я, адреса, ідентифікація, рахунок та агент боржника.
- **Cdtr / CdtrAcct / CdtrAgt** — Ім'я, адреса, ідентифікація, рахунок та агент кредитора.
- **IntrmyAgt1 / 2 / 3** — До трьох посередницьких агентів у ланцюгу.
- **RmtInf** — Інформація про призначення платежу: неструктурована (вільний текст) або структурована (посилання на документи, суми, дати).
- **Purp** — Структурований код призначення.
- **RgltryRptg** — Деталі регуляторної звітності.

## Ідентифікатори платежу

Повідомлення pacs використовують кілька ідентифікаторів, що виконують різні ролі в платіжному ланцюгу.

<div class="api-fields-table" tabindex="0" aria-label="Ідентифікатори платежу">
  <table>
    <caption>Ідентифікатори платежу та їхні ролі</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Ідентифікатор</th>
        <th scope="col">Призначається</th>
        <th scope="col">Змінюється в ланцюгу?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Кожним агентом-відправником</td>
          <td class="api-fields-table__constraint">Так — новий для кожного повідомлення</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Кожним інструктуючим агентом</td>
          <td class="api-fields-table__constraint">Так — може змінюватися на кожному кроці</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Відправником (боржником)</td>
          <td class="api-fields-table__constraint">Ні — не повинен змінюватися</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Першим інструктуючим агентом</td>
          <td class="api-fields-table__constraint">Ні — не повинен змінюватися</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Агентом боржника</td>
          <td class="api-fields-table__constraint">Ні — універсальне відстеження</td>
        </tr>
    </tbody>
  </table>
</div>

## Методи розрахунку

Елемент SttlmMtd визначає спосіб міжбанківського розрахунку.

- **CLRG** — Розрахунок через клірингову систему, таку як TARGET2, EURO1 або CHIPS. Найпоширеніший для національного та регіонального клірингу.
- **INDA** — Розрахунок на рахунках інструктованого агента. Агент боржника має рахунок «ностро» в наступного агента. Типовий для двостороннього кореспондентського банкінгу.
- **INGA** — Розрахунок на рахунках інструктуючого агента. Інструктований агент має рахунок «ностро» в агента-відправника. Менш поширений, ніж INDA.
- **COVE** — Розрахунок через окремий покриваючий платіж. pacs.009 забезпечує фінансування, а pacs.008 передає дані клієнта напряму. Використовується в транскордонному кореспондентському банкінгу.

## Коди несення витрат

Елемент ChrgBr визначає, хто несе витрати за платіж.

- **DEBT** — Усі витрати несе боржник (еквівалент MT103: OUR). Кредитор отримує повну суму.
- **CRED** — Усі витрати несе кредитор (еквівалент MT103: BEN). Витрати вираховуються з переказу.
- **SHAR** — Витрати розподіляються (еквівалент MT103: SHA). Кожна сторона оплачує витрати свого агента. Найпоширеніший для транскордонних платежів.
- **SLEV** — Витрати визначаються рівнем сервісу. Обов'язковий для SEPA. Без вирахувань із суми переказу.

## Формат поштової адреси

### Структурована адреса

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Неструктурована адреса (застаріла для CBPR+ після листопада 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Основні обмеження: StrtNm макс. 70 символів (CBPR+), TwnNm макс. 35 символів (CBPR+), Ctry у форматі ISO 3166-1 alpha-2, AdrLine макс. 70 символів на рядок та макс. 7 рядків.

## UETR та відстеження gpi

UETR (Unique End-to-End Transaction Reference) — UUID v4, згенерований агентом боржника. Присутній у PmtId/UETR в pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 та pacs.028. Не повинен змінюватися протягом усього платіжного ланцюга.

SWIFT gpi використовує UETR для відстеження платежів через хмарну базу даних Tracker. Кожен агент підтверджує отримання та обробку, забезпечуючи наскрізну видимість. Угода про рівень обслуговування gpi для транскордонних платежів передбачає зарахування на рахунок кредитора того самого дня.

## Посилання

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

