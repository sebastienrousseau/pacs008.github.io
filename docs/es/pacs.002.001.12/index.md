---
title: pacs.002.001.12 — FI to FI Payment Status Report | Español
description: El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago.
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

## Contexto CBPR+ y esquemas

- Sustituye las narrativas de estado MT199 y del campo 79 en mensajes MT
- CBPR+ exige pacs.002 para toda comunicación de estado de pago
- Los códigos de razón estructurados sustituyen las explicaciones de rechazo en texto libre
- La integración de seguimiento SWIFT gpi requiere pacs.002 para transparencia de extremo a extremo

## Flujo de mensaje

El agente instruido (receptor) envía pacs.002 al agente ordenante (emisor) para confirmar la aceptación, liquidación o rechazo de una instrucción de pago recibida como pacs.008 o pacs.009.

## Mensajes relacionados

- [`pacs.008.001.13`](/es/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/es/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/es/pacs.028.001.05/) — FI to FI Payment Status Request

