---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **Nombre ISO** | FIToFIPaymentStatusReportV12 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 12 |

## Descripción general

El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 27 February 2025; los enlaces a las fuentes se muestran a continuación.

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

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación | Se utiliza para confirmar la liquidación o informar del rechazo de transferencias, adeudos directos y devoluciones |
| **OrgnlGrpInfAndSts** — Información y estado del grupo original para informes masivos | Permite la conciliación entre agentes ordenantes e instruidos |
| **TxInfAndSts** — Información y estado de la transacción para resultados individuales | Requerido en flujos CBPR+ para acusar recibo del procesamiento de mensajes pacs.008 y pacs.009 |
| **StsRsnInf** — Información del motivo del estado con códigos de razón estructurados | Soporta informes de estado tanto a nivel de grupo como a nivel de transacción individual |
| **OrgnlTxRef** — Referencia de la transacción original vinculada a la instrucción fuente | El agente instruido (receptor) envía pacs.002 al agente ordenante (emisor) para confirmar la aceptación, liquidación o rechazo de una instrucción de pago recibida como pacs.008 o pacs.009. |

## Contexto CBPR+ y esquemas

- Sustituye las narrativas de estado MT199 y del campo 79 en mensajes MT
- CBPR+ exige pacs.002 para toda comunicación de estado de pago
- Los códigos de razón estructurados sustituyen las explicaciones de rechazo en texto libre
- La integración de seguimiento SWIFT gpi requiere pacs.002 para transparencia de extremo a extremo

## Flujo de mensaje

El agente instruido (receptor) envía pacs.002 al agente ordenante (emisor) para confirmar la aceptación, liquidación o rechazo de una instrucción de pago recibida como pacs.008 o pacs.009.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.002.001.12 | Implementación actual en pacs008 | Úselo cuando trabaje con las plantillas y artefactos de validación actualmente soportados por el proyecto. |
| pacs.002.001.13-15 | Revisiones posteriores del catálogo | Review later ISO revisions before starting new interoperability work or onboarding new infrastructures. |

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

- `MsgId`: Use a new identifier for the status report itself, not the original payment instruction.
- `OrgnlInstrId`: Keep the original instruction identifier intact so status can be matched automatically.
- `TxSts`: This is the operational state; map it carefully to internal workflow states rather than assuming a one-to-one match.
- `StsRsnInf`: Structured reason codes are far more useful than free text for repair and analytics.

## Comparar pacs.002 vs pacs.028

| Dimensión | pacs.002.001.12 | Mensaje de comparación |
|---|---|---|
| Propósito principal | Report status | Request status |
| Who starts the interaction | The institution sending the status | The institution asking for status |
| Operational posture | Event-driven reporting | Exception-driven enquiry |
| Supuesto erróneo a evitar | That status reporting replaces investigation workflows | That every payment needs an explicit status request |

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Financial Institution Credit Transfer | El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez. |
| [`pacs.028.001.05`](/es/pacs.028.001.05/) | FI to FI Payment Status Request | El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado. |

