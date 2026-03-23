---
title: pacs.008.001.13 | Transferencia de crédito de cliente FI a FI | pacs008
description: El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — Transferencia de crédito de cliente FI a FI

| | |
|---|---|
| **Nombre ISO** | FIToFICustomerCreditTransferV13 |
| **Estado de registro** | Registered |
| **Año** | 2023 |
| **Versión** | 13 |

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

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con ID de mensaje, fecha de creación, número de transacciones e información de liquidación | El mensaje principal para transferencias transfronterizas y nacionales iniciadas por clientes |
| **CdtTrfTxInf** — Información de transacción de transferencia con importe, cargos y propósito | Se utiliza en SEPA SCT, SEPA Instant, CBPR+ y sistemas de compensación nacionales |
| **Dbtr / DbtrAgt** — Identificación y datos de cuenta del deudor y su agente | Lleva información de remesa estructurada para la conciliación automatizada |
| **Cdtr / CdtrAgt** — Identificación y datos de cuenta del acreedor y su agente | Soporta métodos de liquidación serial, cobertura y directo para cadenas de pago multietapa |
| **RmtInf** — Información de remesa para referencias de pago estructuradas o no estructuradas | El agente del deudor crea un pacs.008 y lo envía al agente del acreedor (directamente o a través de intermediarios). Cada agente en la cadena valida, enriquece y reenvía la instrucción hasta que el agente del acreedor abona la cuenta del beneficiario. |

## Contexto CBPR+ y esquemas

- Sustituye MT103 y MT103+ para transferencias transfronterizas de clientes
- El plazo de direcciones estructuradas de noviembre de 2026 se aplica a todas las direcciones postales de las partes
- SWIFT gpi requiere pacs.008 para seguimiento de extremo a extremo basado en UETR
- 13 revisiones reflejan la evolución continua del esquema a través de las infraestructuras de mercado

## Flujo de mensaje

El agente del deudor crea un pacs.008 y lo envía al agente del acreedor (directamente o a través de intermediarios). Cada agente en la cadena valida, enriquece y reenvía la instrucción hasta que el agente del acreedor abona la cuenta del beneficiario.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.008.001.01-07 | Revisiones iniciales | Útil principalmente para análisis de migraciones heredadas y contexto histórico de versiones. |
| pacs.008.001.08-12 | Revisiones modernas previas a la actual | Estas son las revisiones que con más probabilidad aparecerán en proyectos recientes de migración o coexistencia. |
| pacs.008.001.13 | Revisión actual del catálogo | Úselo para planificar con la versión actual, validando aún las reglas del esquema y la preparación de las contrapartes. |

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

| Dimensión | pacs.008.001.13 | Mensaje de comparación |
|---|---|---|
| Propósito principal | Transferencia de crédito de cliente | Transferencia de crédito por cuenta propia de la institución o tramo de cobertura |
| Responsable de negocio | Operaciones de pagos de clientes | Operaciones de tesorería, corresponsalía y financiación |
| Combinaciones típicas | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002, pacs.004, and sometimes linked pacs.008 flows |
| Supuesto erróneo a evitar | That all bank-to-bank transfers belong here | That it can replace customer credit-transfer instructions |

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

| Versión | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |
| [`pacs.004.001.11`](/es/pacs.004.001.11/) | Devolución de pago | El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora. |
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Transferencia de crédito entre instituciones financieras | El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez. |

