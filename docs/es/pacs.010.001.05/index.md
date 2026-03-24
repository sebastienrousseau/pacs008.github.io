---
title: pacs.010.001.05 | Débito directo entre instituciones financieras | pacs008
description: El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Débito directo entre instituciones financieras

<div class="message-metadata-table" tabindex="0" aria-label="pacs.010.001.05 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionDirectDebitV05</td>
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

El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **DrctDbtTxInf** — Información de transacción de adeudo directo con importe de cobro
- **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente
- **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación

## Contexto de negocio

- Soporta cobro de adeudos directos interbancarios entre instituciones financieras
- Se utiliza para cobro de comisiones, llamadas de margen y obligaciones de liquidación institucional
- Requiere acuerdos bilaterales preestablecidos entre instituciones participantes
- Crítico para la gestión de tesorería institucional y ciclos de liquidación interbancaria

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabecera de grupo con identificación del mensaje e información de liquidación</td>
          <td class="operational-matrix-table__right">Soporta cobro de adeudos directos interbancarios entre instituciones financieras</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — Información de transacción de adeudo directo con importe de cobro</td>
          <td class="operational-matrix-table__right">Se utiliza para cobro de comisiones, llamadas de margen y obligaciones de liquidación institucional</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Institución acreedora e identificación de su agente</td>
          <td class="operational-matrix-table__right">Requiere acuerdos bilaterales preestablecidos entre instituciones participantes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Institución deudora e identificación de su agente</td>
          <td class="operational-matrix-table__right">Crítico para la gestión de tesorería institucional y ciclos de liquidación interbancaria</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — Importe de liquidación interbancaria en la divisa de liquidación</td>
          <td class="operational-matrix-table__right">La institución acreedora envía pacs.010 a la institución deudora para cobrar fondos bajo un acuerdo preestablecido. La institución deudora valida la solicitud y liquida o rechaza el adeudo directo.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Sustituye elementos del MT204 para procesamiento de adeudos directos interbancarios
- La identificación estructurada de partes sigue los mismos requisitos que otros mensajes pacs
- La validación de identificadores institucionales (BIC, LEI) es obligatoria
- Incluido en las hojas de ruta de adopción completa de ISO 20022 en infraestructuras de mercado

## Flujo de mensaje

La institución acreedora envía pacs.010 a la institución deudora para cobrar fondos bajo un acuerdo preestablecido. La institución deudora valida la solicitud y liquida o rechaza el adeudo directo.

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
          <td class="version-diff-table__range">pacs.010.001.05</td>
          <td class="version-diff-table__why">Implementación actual en pacs008</td>
          <td class="version-diff-table__takeaway">Punto de referencia para el soporte de adeudos directos entre instituciones en el proyecto actual.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.010.001.06</td>
          <td class="version-diff-table__why">Revisión posterior del catálogo</td>
          <td class="version-diff-table__takeaway">Review before adopting newer infrastructure requirements.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

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

### Comentarios de campos

- `InstrId`: Use an identifier that links back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Institution direct-debit amounts often need clear bilateral tolerance controls.
- `Cdtr` / `Dbtr`: Capture institutional roles clearly. This is not a retail-customer debit model.

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
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
          <td class="related-messages-table__id"><a href="/es/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferencia de crédito entre instituciones financieras</td>
          <td class="related-messages-table__overview">El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">Informe de estado de pagos FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">Débito directo de cliente FI a FI</td>
          <td class="related-messages-table__overview">El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.</td>
        </tr>
    </tbody>
  </table>
</div>

