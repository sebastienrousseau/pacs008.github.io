---
title: pacs.004.001.11 | Devolución de pago | pacs008
description: El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Devolución de pago

| | |
|---|---|
| **Nombre ISO** | PaymentReturnV11 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 11 |

## Descripción general

El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación
- **TxInf** — Información de transacción con importe de devolución y partes
- **OrgnlGrpInf** — Información del grupo original vinculada al mensaje fuente
- **RtrRsnInf** — Información del motivo de devolución con códigos de razón estructurados
- **OrgnlTxRef** — Referencia de la transacción original para emparejamiento y conciliación

## Contexto de negocio

- Gestiona devoluciones posteriores a la liquidación cuando la cuenta del beneficiario no puede ser abonada
- Soporta escenarios de reclamación donde el originador solicita la devolución de fondos
- Lleva códigos de motivo de devolución estructurados para transparencia regulatoria y operativa
- Se aplica tanto a devoluciones de transferencias (pacs.008) como a devoluciones de adeudos directos (pacs.003)

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
          <td class="operational-matrix-table__left">**GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación</td>
          <td class="operational-matrix-table__right">Gestiona devoluciones posteriores a la liquidación cuando la cuenta del beneficiario no puede ser abonada</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — Información de transacción con importe de devolución y partes</td>
          <td class="operational-matrix-table__right">Soporta escenarios de reclamación donde el originador solicita la devolución de fondos</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — Información del grupo original vinculada al mensaje fuente</td>
          <td class="operational-matrix-table__right">Lleva códigos de motivo de devolución estructurados para transparencia regulatoria y operativa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**RtrRsnInf** — Información del motivo de devolución con códigos de razón estructurados</td>
          <td class="operational-matrix-table__right">Se aplica tanto a devoluciones de transferencias (pacs.008) como a devoluciones de adeudos directos (pacs.003)</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlTxRef** — Referencia de la transacción original para emparejamiento y conciliación</td>
          <td class="operational-matrix-table__right">El agente instruido envía pacs.004 a través de la cadena de pago para devolver fondos liquidados previamente. Cada agente en la cadena procesa la devolución y abona las cuentas correspondientes.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Sustituye MT103 RETURN y la mensajería de devolución por método de cobertura
- Los códigos de motivo de devolución están estandarizados y son legibles por máquina bajo ISO 20022
- CBPR+ requiere datos completos de referencia de la transacción original para el emparejamiento
- El seguimiento SWIFT gpi se extiende a las transacciones de devolución para visibilidad de extremo a extremo

## Flujo de mensaje

El agente instruido envía pacs.004 a través de la cadena de pago para devolver fondos liquidados previamente. Cada agente en la cadena procesa la devolución y abona las cuentas correspondientes.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Se alinea con las plantillas actuales para devoluciones de pagos.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">Revisiones posteriores del catálogo</td>
          <td class="version-diff-table__takeaway">Revise versiones posteriores de los mensajes de devolución cuando haya actualizaciones del esquema o nuevas contrapartes en alcance.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

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

### Comentarios de campos

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: La calidad de los códigos de motivo es crucial para la comunicación posterior con el cliente y el encaminamiento operativo.

## Comparar pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.004 vs pacs.007">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensión</th>
        <th>pacs.004.001.11</th>
        <th>Mensaje de comparación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Propósito principal</td>
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
          <td class="message-comparison-table__dimension">Más adecuado para</td>
          <td class="message-comparison-table__current">Gestión de devoluciones tras la liquidación</td>
          <td class="message-comparison-table__other">Gestión de reversiones por recall, error o fraude</td>
        </tr>
    </tbody>
  </table>
</div>

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/es/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Débito directo de cliente FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Informe de estado de pagos FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
    </tbody>
  </table>
</div>

