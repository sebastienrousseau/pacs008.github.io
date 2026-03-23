---
title: pacs.028.001.05 | Solicitud de estado de pago FI a FI | pacs008
description: El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — Solicitud de estado de pago FI a FI

| | |
|---|---|
| **Nombre ISO** | FIToFIPaymentStatusRequestV05 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 5 |

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

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación | Permite la consulta proactiva de estado para instrucciones de pago en tránsito |
| **TxInf** — Información de transacción identificando el pago a consultar | Apoya a los equipos de operaciones en la investigación de pagos retrasados o perdidos |
| **OrgnlGrpInf** — Información del grupo original referenciando al mensaje fuente | Complementa pacs.002 iniciando la comunicación de estado en lugar de esperar |
| **OrgnlInstrId** — Identificación de la instrucción original del pago fuente | Se utiliza en flujos de gestión de excepciones y monitorización de SLA |
| **OrgnlEndToEndId** — Identificación de extremo a extremo original para trazabilidad | El agente ordenante envía pacs.028 al agente instruido para solicitar el estado de un pago específico. El agente instruido responde con un pacs.002 que contiene el estado de procesamiento actual. |

## Contexto CBPR+ y esquemas

- Sustituye los patrones de consulta de estado MT199 y las consultas manuales de mensajes SWIFT
- CBPR+ soporta solicitudes de estado estructuradas vinculadas a identificadores del mensaje original
- El seguimiento basado en UETR a través de gpi reduce la necesidad de consultas manuales
- Se integra cada vez más en paneles de operaciones de pago automatizados

## Flujo de mensaje

El agente ordenante envía pacs.028 al agente instruido para solicitar el estado de un pago específico. El agente instruido responde con un pacs.002 que contiene el estado de procesamiento actual.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.028.001.05 | Implementación actual en pacs008 | Adecuado para el modelado actual de solicitudes de estado. |
| pacs.028.001.06 | Revisión posterior del catálogo | Revise la versión más reciente del catálogo para la planificación futura de interoperabilidad. |

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

| Dimensión | pacs.028.001.05 | Mensaje de comparación |
|---|---|---|
| Propósito principal | Request status | Report status |
| Quién inicia la interacción | La institución que solicita el estado | La institución que envía el estado |
| Postura operativa | Consulta impulsada por excepciones | Reporte basado en eventos |
| Supuesto erróneo a evitar | Que debería enviarse de forma rutinaria para cada pago | Que elimina la necesidad de una gestión proactiva de casos |

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | Transferencia de crédito de cliente FI a FI | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Transferencia de crédito entre instituciones financieras | El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez. |

