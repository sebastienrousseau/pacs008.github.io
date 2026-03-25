---
title: "pacs.008.001.13 | Transferencia de crédito de cliente FI a FI | pacs008"
description: El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente...
lang: es-ES
lastUpdated: true
image: /logo.svg
faq:
  - question: "¿Es pacs.008 suficiente por sí solo para pagos en producción?"
    answer: "No. La preparación para producción también depende de las reglas del esquema, la calidad de dirección, los datos de las partes, el manejo de estados y los flujos de excepción."
  - question: "¿Qué causa más trabajo de reparación?"
    answer: "Datos de partes débiles, mala estructuración de direcciones, identificadores inconsistentes y contenido de remesa no estructurado son causas comunes."
---

# pacs.008.001.13 — Transferencia de crédito de cliente FI a FI

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
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
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Estado de registro</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Año</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>Versión</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## Descripción general

El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con ID de mensaje, fecha de creación, número de transacciones e información de liquidación
- **CdtTrfTxInf** — Información de transacción de transferencia con importe, cargos y propósito
- **Dbtr / DbtrAgt** — Identificación y datos de cuenta del deudor y su agente
- **Cdtr / CdtrAgt** — Identificación y datos de cuenta del acreedor y su agente
- **RmtInf** — Información de remesa para referencias de pago estructuradas o no estructuradas

## Contexto de negocio

- El mensaje principal para transferencias transfronterizas y nacionales iniciadas por clientes
- Se utiliza en SEPA SCT, SEPA Instant, CBPR+ y sistemas de compensación nacionales
- Lleva información de remesa estructurada para la conciliación automatizada
- Soporta métodos de liquidación serial, cobertura y directo para cadenas de pago multietapa

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — Cabecera de grupo con ID de mensaje, fecha de creación, número de transacciones e información de liquidación</td>
          <td class="operational-matrix-table__right">El mensaje principal para transferencias transfronterizas y nacionales iniciadas por clientes</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — Información de transacción de transferencia con importe, cargos y propósito</td>
          <td class="operational-matrix-table__right">Se utiliza en SEPA SCT, SEPA Instant, CBPR+ y sistemas de compensación nacionales</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — Identificación y datos de cuenta del deudor y su agente</td>
          <td class="operational-matrix-table__right">Lleva información de remesa estructurada para la conciliación automatizada</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — Identificación y datos de cuenta del acreedor y su agente</td>
          <td class="operational-matrix-table__right">Soporta métodos de liquidación serial, cobertura y directo para cadenas de pago multietapa</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — Información de remesa para referencias de pago estructuradas o no estructuradas</td>
          <td class="operational-matrix-table__right">El agente del deudor crea un pacs.008 y lo envía al agente del acreedor (directamente o a través de intermediarios). Cada agente en la cadena valida, enriquece y reenvía la instrucción hasta que el agente del acreedor abona la cuenta del beneficiario.</td>
        </tr>
    </tbody>
  </table>
</div>

## Contexto CBPR+ y esquemas

- Sustituye MT103 y MT103+ para transferencias transfronterizas de clientes
- El plazo de direcciones estructuradas de noviembre de 2026 se aplica a todas las direcciones postales de las partes
- SWIFT gpi requiere pacs.008 para seguimiento de extremo a extremo basado en UETR
- 13 revisiones reflejan la evolución continua del esquema a través de las infraestructuras de mercado

## Flujo de mensaje

El agente del deudor crea un pacs.008 y lo envía al agente del acreedor (directamente o a través de intermediarios). Cada agente en la cadena valida, enriquece y reenvía la instrucción hasta que el agente del acreedor abona la cuenta del beneficiario.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">Revisiones iniciales</td>
          <td class="version-diff-table__takeaway">Útil principalmente para análisis de migraciones heredadas y contexto histórico de versiones.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">Revisiones modernas previas a la actual</td>
          <td class="version-diff-table__takeaway">Estas son las revisiones que con más probabilidad aparecerán en proyectos recientes de migración o coexistencia.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">Revisión actual del catálogo</td>
          <td class="version-diff-table__takeaway">Úselo para planificar con la versión actual, validando aún las reglas del esquema y la preparación de las contrapartes.</td>
        </tr>
    </tbody>
  </table>
</div>

## Fragmento XML comentado

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### Comentarios de campos

- `MsgId`: Este campo debe identificar el sobre del mensaje, no la referencia de pago del cliente final.
- `EndToEndId`: Mantenga estable la trazabilidad de cara al cliente a través de los sistemas posteriores siempre que sea posible.
- `UETR`: Úselo de forma coherente en entornos transfronterizos y de seguimiento intensivo; no lo genere de forma improvisada en etapas posteriores del flujo.
- `IntrBkSttlmAmt`: Valide importe y divisa con reglas de negocio antes de la validación del esquema.
- `Dbtr` / `Cdtr`: La calidad de los datos de las partes, la estructura de las direcciones y los identificadores suelen ser los principales factores del volumen de reparaciones.

## Comparar pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="Comparar pacs.008 vs pacs.009">
  <table>
    <caption>Comparar pacs.008 vs pacs.009</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>Dimensión</th>
        <th>pacs.008.001.13</th>
        <th>Mensaje de comparación</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">Propósito principal</td>
          <td class="message-comparison-table__current">Transferencia de crédito de cliente</td>
          <td class="message-comparison-table__other">Transferencia de crédito por cuenta propia de la institución o tramo de cobertura</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Responsable de negocio</td>
          <td class="message-comparison-table__current">Operaciones de pagos de clientes</td>
          <td class="message-comparison-table__other">Operaciones de tesorería, corresponsalía y liquidez</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Combinaciones típicas</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, and sometimes linked pacs.008 flows</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Supuesto erróneo a evitar</td>
          <td class="message-comparison-table__current">That all bank-to-bank transfers belong here</td>
          <td class="message-comparison-table__other">That it can replace customer credit-transfer instructions</td>
        </tr>
    </tbody>
  </table>
</div>

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)

## Versiones compatibles

<div class="message-versions-table" tabindex="0" aria-label="Versiones compatibles">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>Versión</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>Actual</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/es/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">Devolución de pago</td>
          <td class="related-messages-table__overview">El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/es/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">Transferencia de crédito entre instituciones financieras</td>
          <td class="related-messages-table__overview">El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.</td>
        </tr>
    </tbody>
  </table>
</div>

