---
title: pacs.007.001.11 | Reverso de pago FI a FI | pacs008
description: El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Reverso de pago FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>Nombre ISO</strong></td>
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## Descripción general

El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación
- **TxInf** — Información de transacción con importe de reversión y partes
- **OrgnlGrpInf** — Información del grupo original referenciando al mensaje fuente
- **RvslRsnInf** — Información del motivo de reversión con códigos de razón estructurados
- **OrgnlTxRef** — Referencia de la transacción original para trazabilidad de extremo a extremo

## Contexto de negocio

- Se inicia cuando el emisor original identifica un error antes o después de la liquidación
- Se utiliza en escenarios de fraude que requieren una reversión rápida
- Soporta la reversión total y parcial de los importes de pago originales
- Lleva códigos de motivo de reversión estructurados para el procesamiento posterior

<div class="operational-matrix-table" tabindex="0" aria-label="Elementos de datos clave Contexto de negocio">
  <table>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabecera de grupo con identificación del mensaje y marca temporal de creación</td>
          <td class="operational-matrix-table__right">Se inicia cuando el emisor original identifica un error antes o después de la liquidación</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Información de transacción con importe de reversión y partes</td>
          <td class="operational-matrix-table__right">Se utiliza en escenarios de fraude que requieren una reversión rápida</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Información del grupo original referenciando al mensaje fuente</td>
          <td class="operational-matrix-table__right">Soporta la reversión total y parcial de los importes de pago originales</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — Información del motivo de reversión con códigos de razón estructurados</td>
          <td class="operational-matrix-table__right">Lleva códigos de motivo de reversión estructurados para el procesamiento posterior</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referencia de la transacción original para trazabilidad de extremo a extremo</td>
          <td class="operational-matrix-table__right">El agente ordenante (emisor original) envía pacs.007 a través de la cadena de pago para revertir un pago instruido previamente. Cada agente procesa la instrucción de reversión y ajusta la liquidación en consecuencia.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Se distingue de pacs.004 por la dirección — la reversión fluye hacia adelante desde el originador, la devolución fluye hacia atrás desde el beneficiario
- CBPR+ requiere emparejamiento con identificadores del mensaje original para procesamiento automatizado
- Los códigos de razón estructurados sustituyen las narrativas en texto libre de los mensajes MT heredados
- Se utiliza cada vez más en flujos de reclamación de pagos instantáneos y prevención de fraude

## Flujo de mensaje

El agente ordenante (emisor original) envía pacs.007 a través de la cadena de pago para revertir un pago instruido previamente. Cada agente procesa la instrucción de reversión y ajusta la liquidación en consecuencia.

## Tabla de diferencias de versión

<div class="version-diff-table" tabindex="0" aria-label="Tabla de diferencias de versión">
  <table>
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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Buena base para modelar flujos de reversión.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">Revisiones posteriores del catálogo</td>
          <td class="version-diff-table__takeaway">Check later revisions for current market-infrastructure alignment.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

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

### Comentarios de campos

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: Conserve la referencia original del pago para evitar rupturas en la conciliación.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## Comparar pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensión</th>
        <th>pacs.007.001.11</th>
        <th>Mensaje de comparación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Propósito principal</td>
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
          <td class="message-comparison-table__dimension">Más adecuado para</td>
          <td class="message-comparison-table__current">Gestión de reversiones por recall, error o fraude</td>
          <td class="message-comparison-table__other">Gestión de devoluciones tras la liquidación</td>
        </tr>
    </tbody>
  </table>
</div>

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

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
          <td class="related-messages-table__id"><a href="/es/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Devolución de pago</td>
          <td class="related-messages-table__overview">El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Informe de estado de pagos FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
    </tbody>
  </table>
</div>

