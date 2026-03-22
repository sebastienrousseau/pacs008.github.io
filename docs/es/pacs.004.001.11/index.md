---
title: pacs.004.001.11 — Payment Return | Español
description: El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **Nombre ISO** | PaymentReturnV11 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 11 |

## Descripción general

El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación
- **TxInf** — Información de transacción con importe de devolución y partes
- **OrgnlGrpInf** — Información del grupo original vinculada al mensaje fuente
- **RtrRsnInf** — Información del motivo de devolución con códigos de razón estructurados
- **OrgnlTxRef** — Referencia de la transacción original para emparejamiento y conciliación

## Contexto de negocio

- Gestiona devoluciones posteriores a la liquidación cuando la cuenta del beneficiario no puede ser abonada
- Soporta escenarios de reclamación donde el originador solicita la devolución de fondos
- Lleva códigos de motivo de devolución estructurados para transparencia regulatoria y operativa
- Se aplica tanto a devoluciones de transferencias (pacs.008) como a devoluciones de adeudos directos (pacs.003)

## Contexto CBPR+ y esquemas

- Sustituye MT103 RETURN y la mensajería de devolución por método de cobertura
- Los códigos de motivo de devolución están estandarizados y son legibles por máquina bajo ISO 20022
- CBPR+ requiere datos completos de referencia de la transacción original para el emparejamiento
- El seguimiento SWIFT gpi se extiende a las transacciones de devolución para visibilidad de extremo a extremo

## Flujo de mensaje

El agente instruido envía pacs.004 a través de la cadena de pago para devolver fondos liquidados previamente. Cada agente en la cadena procesa la devolución y abona las cuentas correspondientes.

## Mensajes relacionados

- [`pacs.008.001.13`](/es/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/es/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report

