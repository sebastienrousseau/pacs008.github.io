---
title: "Mensajes PACS explicados | pacs008"
description: "Referencia técnica detallada para mensajes pacs ISO 20022: ciclo de vida, estructura XML, métodos de liquidación, códigos de motivo, tipos de dirección..."
lang: es-ES
lastUpdated: true
image: /logo.webp
---

# Mensajes PACS explicados

Esta página proporciona una referencia técnica detallada para la familia de mensajes pacs ISO 20022. Cubre cómo funcionan los mensajes en el ciclo de vida completo de un pago, la estructura XML, los métodos de liquidación, los códigos de motivo, la identificación de partes, la información de remesa y el seguimiento de extremo a extremo.

## Ciclo de vida del pago

El ciclo de vida completo de un pago pacs comprende seis etapas y múltiples tipos de mensajes que funcionan conjuntamente.

**Etapa 1 — Iniciación.** El pago se origina en el ámbito cliente-banco (pain.001). El banco del deudor recibe la instrucción y la traslada al ámbito interbancario.

**Etapa 2 — Instrucción interbancaria.** El agente del deudor crea un pacs.008 y lo envía al siguiente agente de la cadena. En un flujo en serie, el pacs.008 se transmite paso a paso a través de los intermediarios. En un flujo de cobertura, el pacs.008 va directamente del agente del deudor al agente del acreedor, mientras que un pacs.009 separado gestiona el tramo de financiación a través de la cadena de corresponsales.

**Etapa 3 — Informes de estado.** En cada paso, el agente receptor puede devolver un pacs.002 confirmando la aceptación (ACCP/ACSP/ACSC), el rechazo (RJCT) o un estado pendiente (PDNG). En CBPR+, el pacs.002 es obligatorio para toda comunicación de estado de pago.

**Etapa 4 — Liquidación.** La liquidación se realiza a través de un sistema de compensación (CLRG), en cuentas de corresponsales (INDA/INGA) o mediante un pago de cobertura (COVE). La fecha y el importe de la liquidación interbancaria determinan cuándo y cuánto se liquida.

**Etapa 5 — Abono al beneficiario.** El agente del acreedor abona al beneficiario y puede enviar una notificación al cliente.

**Etapa 6 — Gestión de excepciones.** Si el beneficiario no puede ser abonado tras la liquidación, el pacs.004 devuelve los fondos a través de la cadena. Si el ordenante detecta un error o fraude, el pacs.007 avanza a través de la cadena. Si el estado es desconocido, el pacs.028 consulta al siguiente agente y la respuesta regresa a través de pacs.002.

### Flujo en serie

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Flujo de cobertura

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## Estructura XML de pacs.008

pacs.008 tiene dos bloques principales: la cabecera de grupo (GrpHdr) y la información de la transacción de transferencia de crédito (CdtTrfTxInf).

### Cabecera de grupo (GrpHdr)

La cabecera de grupo aparece exactamente una vez por mensaje y contiene:

- **MsgId** — Identificador único del mensaje asignado por el agente emisor. Máximo 35 caracteres, debe ser único por emisor.
- **CreDtTm** — Marca de tiempo de creación en formato ISO 8601.
- **NbOfTxs** — Número de transacciones individuales en el mensaje.
- **SttlmInf** — Información de liquidación incluyendo el método de liquidación (SttlmMtd) y opcionalmente el sistema de compensación y la cuenta de liquidación.
- **IntrBkSttlmDt** — Fecha en la que se produce la liquidación interbancaria.
- **PmtTpInf** — Información del tipo de pago incluyendo prioridad, nivel de servicio, instrumento local y propósito de categoría.

### Información de la transacción de transferencia de crédito (CdtTrfTxInf)

Cada transacción contiene:

- **PmtId** — Identificadores de pago: InstrId, EndToEndId, TxId y UETR.
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria con código de divisa.
- **InstdAmt** — Importe original instruido (puede diferir del importe de liquidación por cambio de divisa).
- **ChrgBr** — Código de asunción de gastos (DEBT, CRED, SHAR o SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Nombre, dirección, identificación, cuenta y agente del deudor.
- **Cdtr / CdtrAcct / CdtrAgt** — Nombre, dirección, identificación, cuenta y agente del acreedor.
- **IntrmyAgt1 / 2 / 3** — Hasta tres agentes intermediarios en la cadena.
- **RmtInf** — Información de remesa, ya sea no estructurada (texto libre) o estructurada (referencias de documentos, importes, fechas).
- **Purp** — Código de propósito estructurado.
- **RgltryRptg** — Detalles de información regulatoria.

## Identificadores de pago

Los mensajes pacs utilizan varios identificadores que cumplen diferentes funciones en la cadena de pago.

<div class="api-fields-table" tabindex="0" aria-label="Identificadores de pago">
  <table>
    <caption>Identificadores de pago y sus funciones</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Identificador</th>
        <th scope="col">Establecido por</th>
        <th scope="col">¿Cambia en la cadena?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Cada agente emisor</td>
          <td class="api-fields-table__constraint">Sí — nuevo por mensaje</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Cada agente ordenante</td>
          <td class="api-fields-table__constraint">Sí — puede cambiar en cada paso</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Ordenante (deudor)</td>
          <td class="api-fields-table__constraint">No — no debe modificarse</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Primer agente ordenante</td>
          <td class="api-fields-table__constraint">No — no debe modificarse</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Agente del deudor</td>
          <td class="api-fields-table__constraint">No — seguimiento universal</td>
        </tr>
    </tbody>
  </table>
</div>

## Métodos de liquidación

El elemento SttlmMtd define cómo se realiza la liquidación interbancaria.

- **CLRG** — Liquidación a través de un sistema de compensación como TARGET2, EURO1 o CHIPS. El más habitual para compensación nacional y regional.
- **INDA** — Liquidación en los libros del agente instruido. El agente del deudor mantiene una cuenta nostro en el siguiente agente. Típico de la banca corresponsal bilateral.
- **INGA** — Liquidación en los libros del agente ordenante. El agente instruido mantiene una cuenta nostro en el agente emisor. Menos habitual que INDA.
- **COVE** — Liquidación mediante un pago de cobertura separado. Un pacs.009 gestiona el tramo de financiación mientras el pacs.008 transmite directamente los datos del cliente. Se utiliza en la banca corresponsal transfronteriza.

## Códigos de asunción de gastos

El elemento ChrgBr especifica quién asume los gastos del pago.

- **DEBT** — El deudor asume todos los gastos (equivalente MT103: OUR). El acreedor recibe el importe íntegro.
- **CRED** — El acreedor asume todos los gastos (equivalente MT103: BEN). Los gastos se deducen de la transferencia.
- **SHAR** — Los gastos se comparten (equivalente MT103: SHA). Cada parte paga los gastos de su propio agente. El más habitual en pagos transfronterizos.
- **SLEV** — Los gastos siguen el nivel de servicio. Obligatorio para SEPA. Sin deducciones del importe de la transferencia.

## Correspondencia de campos MT103 a pacs.008

<div class="api-fields-table" tabindex="0" aria-label="Correspondencia de campos MT103 a pacs.008">
  <table>
    <caption>Principales correspondencias de campos de MT103 a pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Campo MT103</th>
        <th scope="col">Nombre MT103</th>
        <th scope="col">Ruta XML pacs.008</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Referencia del emisor</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Código de operación bancaria</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Fecha valor / Importe</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Importe instruido</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Cliente ordenante</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Institución ordenante</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Institución de la cuenta</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Cliente beneficiario</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Información de remesa</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Detalle de gastos</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Info. emisor a receptor</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Códigos de estado y de motivo

### Códigos de estado pacs.002

<div class="api-fields-table" tabindex="0" aria-label="Códigos de estado pacs.002">
  <table>
    <caption>Códigos de estado de transacción en pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Código</th>
        <th scope="col">Significado</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Aceptado — controles previos superados</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Aceptado — liquidación en curso</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Aceptado — liquidación completada</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Recibido — aún no procesado</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">Pendiente — procesamiento adicional necesario</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Rechazado — con código de motivo</td></tr>
    </tbody>
  </table>
</div>

### Códigos de motivo habituales de rechazo y devolución

<div class="api-fields-table" tabindex="0" aria-label="Códigos de motivo habituales">
  <table>
    <caption>Códigos de motivo de rechazo y devolución más utilizados</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Número de cuenta incorrecto</td><td class="api-fields-table__constraint">El número de cuenta es inválido o no existe</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Cuenta cerrada</td><td class="api-fields-table__constraint">La cuenta está cerrada</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Cuenta bloqueada</td><td class="api-fields-table__constraint">La cuenta está bloqueada para transacciones</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Fondos insuficientes</td><td class="api-fields-table__constraint">Fondos insuficientes en la cuenta del deudor</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Duplicación</td><td class="api-fields-table__constraint">Pago duplicado detectado</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Dirección del acreedor ausente</td><td class="api-fields-table__constraint">La dirección del acreedor falta o está incompleta</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Solicitado por el cliente</td><td class="api-fields-table__constraint">Devolución o rechazo solicitado por el cliente</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Pago duplicado</td><td class="api-fields-table__constraint">Pago duplicado identificado</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">Tras anulación</td><td class="api-fields-table__constraint">Como consecuencia de una solicitud de anulación</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Fraude</td><td class="api-fields-table__constraint">Sospecha de fraude</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC incorrecto</td><td class="api-fields-table__constraint">El BIC es incorrecto o desconocido</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Nombre/dirección del acreedor ausente</td><td class="api-fields-table__constraint">Faltan el nombre o los datos de dirección del acreedor</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Hora límite</td><td class="api-fields-table__constraint">Se ha superado la hora límite de procesamiento</td></tr>
    </tbody>
  </table>
</div>

## Formato de dirección postal

### Dirección estructurada

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Dirección no estructurada (obsoleta para CBPR+ a partir de noviembre de 2026)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Restricciones principales: StrtNm máximo 70 caracteres (CBPR+), TwnNm máximo 35 caracteres (CBPR+), Ctry en formato ISO 3166-1 alfa-2, AdrLine máximo 70 caracteres por línea y máximo 7 líneas.

## Identificación de las partes

Las partes en pacs.008 admiten múltiples métodos de identificación:

- **BIC** — Código de identificación empresarial según ISO 9362. 8 u 11 caracteres (BBBBCCLL o BBBBCCLLBBB). Utilizado en FinInstnId/BICFI para agentes y OrgId/AnyBIC para partes.
- **LEI** — Identificador de entidad jurídica según ISO 17442. 20 caracteres alfanuméricos. Aparece en OrgId/LEI para partes y FinInstnId/LEI para agentes. Mejora la desambiguación de entidades para los informes regulatorios.
- **IBAN** — Número de cuenta bancaria internacional según ISO 13616. Utilizado en DbtrAcct/Id/IBAN y CdtrAcct/Id/IBAN.
- **Identificadores de organización** — Otros identificadores basados en esquema (NIF, DUNS, número de cliente) mediante OrgId/Othr con un código de nombre de esquema.
- **Identificadores privados** — Para personas físicas: fecha y lugar de nacimiento, pasaporte (CCPT), documento nacional de identidad (NIDN) o permiso de conducir (DRLC) mediante PrvtId.

## Información de remesa

Los datos de remesa en pacs.008 utilizan el elemento RmtInf con dos formas:

**No estructurada** — Texto libre de hasta 140 caracteres por ocurrencia. Sencillo pero limita la conciliación automatizada.

**Estructurada** — Referencias de documentos con códigos de tipo, números, fechas e importes. Tipos de documento habituales: CINV (factura comercial), CREN (nota de crédito), SOAC (extracto de cuenta). Admite referencias de acreedor ISO 11649 (RF + dígitos de control + referencia) mediante CdtrRefInf. Permite la conciliación automática de facturas y los pagos de múltiples facturas.

## UETR y seguimiento gpi

UETR (Unique End-to-End Transaction Reference) es un UUID v4 generado por el agente del deudor. Aparece en PmtId/UETR a lo largo de pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 y pacs.028. No debe modificarse en toda la cadena de pago.

SWIFT gpi utiliza el UETR para rastrear los pagos a través de una base de datos Tracker alojada en la nube. Cada agente confirma la recepción y el procesamiento, lo que permite una visibilidad de extremo a extremo. El acuerdo de nivel de servicio gpi para pagos transfronterizos tiene como objetivo el abono en el día en la cuenta del acreedor.

## Referencias

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

