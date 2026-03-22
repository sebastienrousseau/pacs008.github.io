---
title: pacs.010.001.05 — Financial Institution Direct Debit | Español
description: El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **Nombre ISO** | FinancialInstitutionDirectDebitV05 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 5 |

## Descripción general

El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **DrctDbtTxInf** — Información de transacción de adeudo directo con importe de cobro
- **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente
- **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación

## Contexto de negocio

- Soporta cobro de adeudos directos interbancarios entre instituciones financieras
- Se utiliza para cobro de comisiones, llamadas de margen y obligaciones de liquidación institucional
- Requiere acuerdos bilaterales preestablecidos entre instituciones participantes
- Crítico para la gestión de tesorería institucional y ciclos de liquidación interbancaria

## Contexto CBPR+ y esquemas

- Sustituye elementos del MT204 para procesamiento de adeudos directos interbancarios
- La identificación estructurada de partes sigue los mismos requisitos que otros mensajes pacs
- La validación de identificadores institucionales (BIC, LEI) es obligatoria
- Incluido en las hojas de ruta de adopción completa de ISO 20022 en infraestructuras de mercado

## Flujo de mensaje

La institución acreedora envía pacs.010 a la institución deudora para cobrar fondos bajo un acuerdo preestablecido. La institución deudora valida la solicitud y liquida o rechaza el adeudo directo.

## Mensajes relacionados

- [`pacs.009.001.10`](/es/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/es/pacs.003.001.09/) — FI to FI Customer Direct Debit

