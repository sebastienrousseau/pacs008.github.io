---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Español
description: El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **Nombre ISO** | FIToFICustomerCreditTransferV13 |
| **Estado de registro** | Registered |
| **Año** | 2023 |
| **Versión** | 13 |

## Descripción general

El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia.

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

## Contexto CBPR+ y esquemas

- Sustituye MT103 y MT103+ para transferencias transfronterizas de clientes
- El plazo de direcciones estructuradas de noviembre de 2026 se aplica a todas las direcciones postales de las partes
- SWIFT gpi requiere pacs.008 para seguimiento de extremo a extremo basado en UETR
- 13 revisiones reflejan la evolución continua del esquema a través de las infraestructuras de mercado

## Flujo de mensaje

El agente del deudor crea un pacs.008 y lo envía al agente del acreedor (directamente o a través de intermediarios). Cada agente en la cadena valida, enriquece y reenvía la instrucción hasta que el agente del acreedor abona la cuenta del beneficiario.

## Versiones compatibles

| Version | |
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

- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/es/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/es/pacs.009.001.10/) — Financial Institution Credit Transfer

