---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Español
description: El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **Nombre ISO** | FinancialInstitutionCreditTransferV10 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 10 |

## Descripción general

El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **CdtTrfTxInf** — Información de transacción de transferencia con importe de liquidación interbancaria
- **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente
- **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación

## Contexto de negocio

- Se utiliza para transferencias de cuenta propia entre bancos y pagos de cobertura
- Soporta gestión de liquidez entre socios de banca corresponsal
- Lleva el tramo de cobertura de las transferencias de clientes liquidadas por método de cobertura
- Permite operaciones de tesorería y financiación entre instituciones financieras

## Contexto CBPR+ y esquemas

- Sustituye MT202 y MT202COV para transferencias entre instituciones
- Los flujos de método de cobertura emparejan pacs.009 con la instrucción de cliente pacs.008 subyacente
- Los datos estructurados de partes y la identificación LEI son cada vez más requeridos
- SWIFT gpi cubre pacs.009 para transparencia de banca corresponsal

## Flujo de mensaje

La institución deudora envía pacs.009 a la institución acreedora para transferir sus propios fondos. Para pagos por cobertura, pacs.009 proporciona el tramo de financiación mientras pacs.008 lleva la instrucción del cliente por un camino separado.

## Mensajes relacionados

- [`pacs.008.001.13`](/es/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/es/pacs.010.001.05/) — Financial Institution Direct Debit

