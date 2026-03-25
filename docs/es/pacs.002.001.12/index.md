---
title: "pacs.002.001.12 | Informe de estado de pagos FI a FI | pacs008"
description: El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona...
lang: es-ES
lastUpdated: true
image: /logo.svg
faq:
  - question: "¿Es pacs.002 un mensaje de pago?"
    answer: "No. Informa el estado de una instrucción anterior en lugar de mover valor por sí mismo."
  - question: "¿Debería pacs.002 reemplazar los estados de flujo de trabajo internos?"
    answer: "No. Debería informarlos, pero los estados internos de casos aún necesitan su propia lógica operacional."
---

# pacs.002.001.12 — Informe de estado de pagos FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## Descripción general

El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación
- **OrgnlGrpInfAndSts** — Información y estado del grupo original para informes masivos
- **TxInfAndSts** — Información y estado de la transacción para resultados individuales
- **StsRsnInf** — Información del motivo del estado con códigos de razón estructurados
- **OrgnlTxRef** — Referencia de la transacción original vinculada a la instrucción fuente

## Contexto de negocio

- Se utiliza para confirmar la liquidación o informar del rechazo de transferencias, adeudos directos y devoluciones
- Permite la conciliación entre agentes ordenantes e instruidos
- Requerido en flujos CBPR+ para acusar recibo del procesamiento de mensajes pacs.008 y pacs.009
- Soporta informes de estado tanto a nivel de grupo como a nivel de transacción individual

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabecera de grupo con identificación del mensaje y marca temporal de creación</td>
          <td class="operational-matrix-table__right">Se utiliza para confirmar la liquidación o informar del rechazo de transferencias, adeudos directos y devoluciones</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — Información y estado del grupo original para informes masivos</td>
          <td class="operational-matrix-table__right">Permite la conciliación entre agentes ordenantes e instruidos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — Información y estado de la transacción para resultados individuales</td>
          <td class="operational-matrix-table__right">Requerido en flujos CBPR+ para acusar recibo del procesamiento de mensajes pacs.008 y pacs.009</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — Información del motivo del estado con códigos de razón estructurados</td>
          <td class="operational-matrix-table__right">Soporta informes de estado tanto a nivel de grupo como a nivel de transacción individual</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — Referencia de la transacción original vinculada a la instrucción fuente</td>
          <td class="operational-matrix-table__right">El agente instruido (receptor) envía pacs.002 al agente ordenante (emisor) para confirmar la aceptación, liquidación o rechazo de una instrucción de pago recibida como pacs.008 o pacs.009.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Sustituye las narrativas de estado MT199 y del campo 79 en mensajes MT
- CBPR+ exige pacs.002 para toda comunicación de estado de pago
- Los códigos de razón estructurados sustituyen las explicaciones de rechazo en texto libre
- La integración de seguimiento SWIFT gpi requiere pacs.002 para transparencia de extremo a extremo

## Flujo de mensaje

El agente instruido (receptor) envía pacs.002 al agente ordenante (emisor) para confirmar la aceptación, liquidación o rechazo de una instrucción de pago recibida como pacs.008 o pacs.009.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Úselo cuando trabaje con las plantillas y artefactos de validación actualmente soportados por el proyecto.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">Revisiones posteriores del catálogo</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Comentarios de campos

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## Comparar pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.002 vs pacs.028">
  <table>
    <caption>Comparar pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensión</th>
        <th>pacs.002.001.12</th>
        <th>Mensaje de comparación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Propósito principal</td>
          <td class="message-comparison-table__current">Report status</td>
          <td class="message-comparison-table__other">Request status</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Quién inicia la interacción</td>
          <td class="message-comparison-table__current">La institución que envía el estado</td>
          <td class="message-comparison-table__other">La institución que solicita el estado</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Postura operativa</td>
          <td class="message-comparison-table__current">Reporte basado en eventos</td>
          <td class="message-comparison-table__other">Consulta impulsada por excepciones</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Supuesto erróneo a evitar</td>
          <td class="message-comparison-table__current">Que la información de estado sustituye los flujos de investigación</td>
          <td class="message-comparison-table__other">Que cada pago necesita una solicitud explícita de estado</td>
        </tr>
    </tbody>
  </table>
</div>

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/es/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferencia de crédito entre instituciones financieras</td>
          <td class="related-messages-table__overview">El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">Solicitud de estado de pago FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado.</td>
        </tr>
    </tbody>
  </table>
</div>

