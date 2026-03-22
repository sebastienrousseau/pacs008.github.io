---
title: pacs.007.001.11 — FI to FI Payment Reversal | Español
description: El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **Nombre ISO** | FIToFIPaymentReversalV11 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 11 |

## Descripción general

El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original.

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

## Contexto CBPR+ y esquemas

- Se distingue de pacs.004 por la dirección — la reversión fluye hacia adelante desde el originador, la devolución fluye hacia atrás desde el beneficiario
- CBPR+ requiere emparejamiento con identificadores del mensaje original para procesamiento automatizado
- Los códigos de razón estructurados sustituyen las narrativas en texto libre de los mensajes MT heredados
- Se utiliza cada vez más en flujos de reclamación de pagos instantáneos y prevención de fraude

## Flujo de mensaje

El agente ordenante (emisor original) envía pacs.007 a través de la cadena de pago para revertir un pago instruido previamente. Cada agente procesa la instrucción de reversión y ajusta la liquidación en consecuencia.

## Mensajes relacionados

- [`pacs.008.001.13`](/es/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/es/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report

