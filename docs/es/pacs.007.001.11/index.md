---
title: pacs.007.001.11 | Reverso de pago FI a FI | pacs008
description: El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — Reverso de pago FI a FI

| | |
|---|---|
| **Nombre ISO** | FIToFIPaymentReversalV11 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 11 |

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

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación | Se inicia cuando el emisor original identifica un error antes o después de la liquidación |
| **TxInf** — Información de transacción con importe de reversión y partes | Se utiliza en escenarios de fraude que requieren una reversión rápida |
| **OrgnlGrpInf** — Información del grupo original referenciando al mensaje fuente | Soporta la reversión total y parcial de los importes de pago originales |
| **RvslRsnInf** — Información del motivo de reversión con códigos de razón estructurados | Lleva códigos de motivo de reversión estructurados para el procesamiento posterior |
| **OrgnlTxRef** — Referencia de la transacción original para trazabilidad de extremo a extremo | El agente ordenante (emisor original) envía pacs.007 a través de la cadena de pago para revertir un pago instruido previamente. Cada agente procesa la instrucción de reversión y ajusta la liquidación en consecuencia. |

## Contexto CBPR+ y esquemas

- Se distingue de pacs.004 por la dirección — la reversión fluye hacia adelante desde el originador, la devolución fluye hacia atrás desde el beneficiario
- CBPR+ requiere emparejamiento con identificadores del mensaje original para procesamiento automatizado
- Los códigos de razón estructurados sustituyen las narrativas en texto libre de los mensajes MT heredados
- Se utiliza cada vez más en flujos de reclamación de pagos instantáneos y prevención de fraude

## Flujo de mensaje

El agente ordenante (emisor original) envía pacs.007 a través de la cadena de pago para revertir un pago instruido previamente. Cada agente procesa la instrucción de reversión y ajusta la liquidación en consecuencia.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.007.001.11 | Implementación actual en pacs008 | Buena base para modelar flujos de reversión. |
| pacs.007.001.12-13 | Revisiones posteriores del catálogo | Check later revisions for current market-infrastructure alignment. |

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

- `MsgId`: La propia reversión necesita su propio identificador seguro para auditoría.
- `OrgnlInstrId`: Conserve la referencia original del pago para evitar rupturas en la conciliación.
- `RvslRsnInf`: Use motivos de reversión estructurados para que los casos de fraude, error y pago duplicado puedan encaminarse de forma distinta.

## Comparar pacs.007 vs pacs.004

| Dimensión | pacs.007.001.11 | Mensaje de comparación |
|---|---|---|
| Propósito principal | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| Más adecuado para | Gestión de reversiones por recall, error o fraude | Gestión de devoluciones tras la liquidación |

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | Transferencia de crédito de cliente FI a FI | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.004.001.11`](/es/pacs.004.001.11/) | Devolución de pago | El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora. |
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |

