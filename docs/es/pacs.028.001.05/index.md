---
title: pacs.028.001.05 | Solicitud de estado de pago FI a FI | pacs008
description: El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Solicitud de estado de pago FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.028.001.05 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusRequestV05</td>
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
          <td class="message-metadata-table__value">5</td>
        </tr>
    </tbody>
  </table>
</div>

## Descripción general

El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación
- **TxInf** — Información de transacción identificando el pago a consultar
- **OrgnlGrpInf** — Información del grupo original referenciando al mensaje fuente
- **OrgnlInstrId** — Identificación de la instrucción original del pago fuente
- **OrgnlEndToEndId** — Identificación de extremo a extremo original para trazabilidad

## Contexto de negocio

- Permite la consulta proactiva de estado para instrucciones de pago en tránsito
- Apoya a los equipos de operaciones en la investigación de pagos retrasados o perdidos
- Complementa pacs.002 iniciando la comunicación de estado en lugar de esperar
- Se utiliza en flujos de gestión de excepciones y monitorización de SLA

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
          <td class="operational-matrix-table__right">Permite la consulta proactiva de estado para instrucciones de pago en tránsito</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — Información de transacción identificando el pago a consultar</td>
          <td class="operational-matrix-table__right">Apoya a los equipos de operaciones en la investigación de pagos retrasados o perdidos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — Información del grupo original referenciando al mensaje fuente</td>
          <td class="operational-matrix-table__right">Complementa pacs.002 iniciando la comunicación de estado en lugar de esperar</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlInstrId</strong> — Identificación de la instrucción original del pago fuente</td>
          <td class="operational-matrix-table__right">Se utiliza en flujos de gestión de excepciones y monitorización de SLA</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlEndToEndId</strong> — Identificación de extremo a extremo original para trazabilidad</td>
          <td class="operational-matrix-table__right">El agente ordenante envía pacs.028 al agente instruido para solicitar el estado de un pago específico. El agente instruido responde con un pacs.002 que contiene el estado de procesamiento actual.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Sustituye los patrones de consulta de estado MT199 y las consultas manuales de mensajes SWIFT
- CBPR+ soporta solicitudes de estado estructuradas vinculadas a identificadores del mensaje original
- El seguimiento basado en UETR a través de gpi reduce la necesidad de consultas manuales
- Se integra cada vez más en paneles de operaciones de pago automatizados

## Flujo de mensaje

El agente ordenante envía pacs.028 al agente instruido para solicitar el estado de un pago específico. El agente instruido responde con un pacs.002 que contiene el estado de procesamiento actual.

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
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Adecuado para el modelado actual de solicitudes de estado.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">Revisión posterior del catálogo</td>
          <td class="version-diff-table__takeaway">Revise la versión más reciente del catálogo para la planificación futura de interoperabilidad.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Comentarios de campos

- `MsgId`: La propia solicitud necesita un identificador auditable distinto del pago subyacente.
- `OrgnlInstrId`: Use el identificador fuente exacto de la instrucción original para maximizar la precisión de conciliación.
- `OrgnlEndToEndId`: Incluir trazabilidad de cara al cliente ayuda a los equipos operativos a conciliar la consulta con mayor rapidez.

## Comparar pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensión</th>
        <th>pacs.028.001.05</th>
        <th>Mensaje de comparación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Propósito principal</td>
          <td class="message-comparison-table__current">Request status</td>
          <td class="message-comparison-table__other">Report status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Quién inicia la interacción</td>
          <td class="message-comparison-table__current">La institución que solicita el estado</td>
          <td class="message-comparison-table__other">La institución que envía el estado</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Postura operativa</td>
          <td class="message-comparison-table__current">Consulta impulsada por excepciones</td>
          <td class="message-comparison-table__other">Reporte basado en eventos</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Supuesto erróneo a evitar</td>
          <td class="message-comparison-table__current">Que debería enviarse de forma rutinaria para cada pago</td>
          <td class="message-comparison-table__other">Que elimina la necesidad de una gestión proactiva de casos</td>
        </tr>
    </tbody>
  </table>
</div>

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
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
          <td class="related-messages-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Informe de estado de pagos FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">Transferencia de crédito de cliente FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferencia de crédito entre instituciones financieras</td>
          <td class="related-messages-table__overview">El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.</td>
        </tr>
    </tbody>
  </table>
</div>

