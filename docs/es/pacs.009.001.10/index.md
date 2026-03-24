---
title: pacs.009.001.10 | Transferencia de crédito entre instituciones financieras | pacs008
description: El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta...
lang: es-ES
lastUpdated: true
image: /logo.svg
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — Transferencia de crédito entre instituciones financieras

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## Descripción general

El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **CdtTrfTxInf** — Información de transacción de transferencia con importe de liquidación interbancaria
- **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente
- **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación

## Contexto de negocio

- Se utiliza para transferencias de cuenta propia entre bancos y pagos de cobertura
- Soporta gestión de liquidez entre socios de banca corresponsal
- Lleva el tramo de cobertura de las transferencias de clientes liquidadas por método de cobertura
- Permite operaciones de tesorería y financiación entre instituciones financieras

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
          <td class="operational-matrix-table__right">Se utiliza para transferencias de cuenta propia entre bancos y pagos de cobertura</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Información de transacción de transferencia con importe de liquidación interbancaria</td>
          <td class="operational-matrix-table__right">Soporta gestión de liquidez entre socios de banca corresponsal</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Institución deudora e identificación de su agente</td>
          <td class="operational-matrix-table__right">Lleva el tramo de cobertura de las transferencias de clientes liquidadas por método de cobertura</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Institución acreedora e identificación de su agente</td>
          <td class="operational-matrix-table__right">Permite operaciones de tesorería y financiación entre instituciones financieras</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Importe de liquidación interbancaria en la divisa de liquidación</td>
          <td class="operational-matrix-table__right">La institución deudora envía pacs.009 a la institución acreedora para transferir sus propios fondos. Para pagos por cobertura, pacs.009 proporciona el tramo de financiación mientras pacs.008 lleva la instrucción del cliente por un camino separado.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Sustituye MT202 y MT202COV para transferencias entre instituciones
- Los flujos de método de cobertura emparejan pacs.009 con la instrucción de cliente pacs.008 subyacente
- Los datos estructurados de partes y la identificación LEI son cada vez más requeridos
- SWIFT gpi cubre pacs.009 para transparencia de banca corresponsal

## Flujo de mensaje

La institución deudora envía pacs.009 a la institución acreedora para transferir sus propios fondos. Para pagos por cobertura, pacs.009 proporciona el tramo de financiación mientras pacs.008 lleva la instrucción del cliente por un camino separado.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Coincide con el soporte actual del proyecto para flujos de transferencia de crédito FI.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">Revisiones posteriores del catálogo</td>
          <td class="version-diff-table__takeaway">Importante para planificar la hoja de ruta en entornos de banca corresponsal y pagos de cobertura.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Comentarios de campos

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## Comparar pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.009 vs pacs.008">
  <table>
    <caption>Comparar pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensión</th>
        <th>pacs.009.001.10</th>
        <th>Mensaje de comparación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Propósito principal</td>
          <td class="message-comparison-table__current">Transferencia de crédito por cuenta propia de la institución o tramo de cobertura</td>
          <td class="message-comparison-table__other">Transferencia de crédito de cliente</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsable de negocio</td>
          <td class="message-comparison-table__current">Operaciones de tesorería, corresponsalía y liquidez</td>
          <td class="message-comparison-table__other">Operaciones de pagos de clientes</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Combinaciones típicas</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 y flujos pacs.008 vinculados</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Supuesto erróneo a evitar</td>
          <td class="message-comparison-table__current">Que es simplemente una pacs.008 más técnica</td>
          <td class="message-comparison-table__other">Que puede gestionar sin problemas flujos de liquidez entre instituciones</td>
        </tr>
    </tbody>
  </table>
</div>

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/es/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transferencia de crédito de cliente FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Informe de estado de pagos FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">Débito directo entre instituciones financieras</td>
          <td class="related-messages-table__overview">El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución.</td>
        </tr>
    </tbody>
  </table>
</div>

