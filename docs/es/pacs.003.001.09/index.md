---
title: "pacs.003.001.09 | Débito directo de cliente FI a FI | pacs008"
description: El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del...
lang: es-ES
lastUpdated: true
image: /logo.webp
faq:
  - question: "Is pacs.003 the direct-debit mirror of pacs.008?"
    answer: "No. It handles customer direct-debit flows, which have different mandate, timing, and exception rules."
  - question: "What matters most operationally?"
    answer: "Mandate quality, debtor-account rules, and return handling matter more than XML generation."
---

# pacs.003.001.09 — Débito directo de cliente FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Campo</th>
        <th scope="col">Valor</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nombre ISO</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Estado de registro</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Año</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versión</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## Descripción general

El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **DrctDbtTxInf** — Información de transacción de adeudo directo con importe y partes
- **Cdtr** — Identificación del acreedor y datos de cuenta
- **CdtrAgt** — Identificación del agente del acreedor (institución cobradora)
- **DbtrAgt** — Identificación del agente del deudor (institución pagadora)

## Contexto de negocio

- Soporta esquemas SEPA Core y B2B de adeudo directo
- Se utiliza para cobro de pagos recurrentes como suscripciones, facturas y amortizaciones de préstamos
- Requiere una referencia de mandato válida entre deudor y acreedor
- Permite el cobro masivo de múltiples instrucciones de adeudo directo en un solo mensaje

<div class="operational-matrix-table" tabindex="0" aria-label="Elementos de datos clave Contexto de negocio">
  <table>
    <caption>Key data elements and business context</caption>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>Elementos de datos clave</th>
        <th>Contexto de negocio</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabecera de grupo con identificación del mensaje e información de liquidación</td>
          <td class="operational-matrix-table__right">Soporta esquemas SEPA Core y B2B de adeudo directo</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Información de transacción de adeudo directo con importe y partes</td>
          <td class="operational-matrix-table__right">Se utiliza para cobro de pagos recurrentes como suscripciones, facturas y amortizaciones de préstamos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — Identificación del acreedor y datos de cuenta</td>
          <td class="operational-matrix-table__right">Requiere una referencia de mandato válida entre deudor y acreedor</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — Identificación del agente del acreedor (institución cobradora)</td>
          <td class="operational-matrix-table__right">Permite el cobro masivo de múltiples instrucciones de adeudo directo en un solo mensaje</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — Identificación del agente del deudor (institución pagadora)</td>
          <td class="operational-matrix-table__right">El agente del acreedor inicia pacs.003 hacia el agente del deudor para cobrar fondos. El agente del deudor valida el mandato, comprueba la cobertura de la cuenta y liquida o devuelve la transacción.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Los requisitos de dirección estructurada e identificación de partes se aplican igualmente a los adeudos directos
- Los datos relativos al mandato deben estar completamente estructurados a partir de noviembre de 2026
- Sustituye los formatos de adeudo directo tipo MT104 en flujos transfronterizos
- La validación de la identificación del esquema del acreedor se aplica cada vez más

## Flujo de mensaje

El agente del acreedor inicia pacs.003 hacia el agente del deudor para cobrar fondos. El agente del deudor valida el mandato, comprueba la cobertura de la cuenta y liquida o devuelve la transacción.

## Tabla de diferencias de versión

<div class="version-diff-table" tabindex="0" aria-label="Tabla de diferencias de versión">
  <table>
    <caption>Tabla de diferencias de versión</caption>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>Rango de versiones</th>
        <th>Por qué importa</th>
        <th>Conclusión de implementación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Útil para la modelización de referencias de adeudo directo en el proyecto actual.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">Revisiones posteriores del catálogo</td>
          <td class="version-diff-table__takeaway">Revise versiones posteriores para cambios de mandato, estado e interoperabilidad antes de usarlo en una nueva implementación.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

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

### Comentarios de campos

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: El éxito del adeudo directo suele depender más de la calidad de la cuenta y del mandato que de la estructura XML.

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

## Mensajes relacionados
<div class="related-messages-table" tabindex="0" aria-label="Mensajes relacionados">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>Tipo de mensaje</th>
        <th>Descripción</th>
        <th>Descripción general</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Devolución de pago</td>
          <td class="related-messages-table__overview">El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">Reverso de pago FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Informe de estado de pagos FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
    </tbody>
  </table>
</div>

