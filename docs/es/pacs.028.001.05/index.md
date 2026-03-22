---
title: pacs.028.001.05 — FI to FI Payment Status Request | Español
description: El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **Nombre ISO** | FIToFIPaymentStatusRequestV05 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 5 |

## Descripción general

El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado.

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

## Contexto CBPR+ y esquemas

- Sustituye los patrones de consulta de estado MT199 y las consultas manuales de mensajes SWIFT
- CBPR+ soporta solicitudes de estado estructuradas vinculadas a identificadores del mensaje original
- El seguimiento basado en UETR a través de gpi reduce la necesidad de consultas manuales
- Se integra cada vez más en paneles de operaciones de pago automatizados

## Flujo de mensaje

El agente ordenante envía pacs.028 al agente instruido para solicitar el estado de un pago específico. El agente instruido responde con un pacs.002 que contiene el estado de procesamiento actual.

## Mensajes relacionados

- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/es/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/es/pacs.009.001.10/) — Financial Institution Credit Transfer

