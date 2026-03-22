---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Español
description: El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **Nombre ISO** | FIToFICustomerDirectDebitV09 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 9 |

## Descripción general

El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **DrctDbtTxInf** — Información de transacción de adeudo directo con importe y partes
- **Cdtr** — Identificación del acreedor y datos de cuenta
- **CdtrAgt** — Identificación del agente del acreedor (institución cobradora)
- **DbtrAgt** — Identificación del agente del deudor (institución pagadora)

## Contexto de negocio

- Soporta esquemas SEPA Core y B2B de adeudo directo
- Se utiliza para cobro de pagos recurrentes como suscripciones, facturas y amortizaciones de préstamos
- Requiere una referencia de mandato válida entre deudor y acreedor
- Permite el cobro masivo de múltiples instrucciones de adeudo directo en un solo mensaje

## Contexto CBPR+ y esquemas

- Los requisitos de dirección estructurada e identificación de partes se aplican igualmente a los adeudos directos
- Los datos relativos al mandato deben estar completamente estructurados a partir de noviembre de 2026
- Sustituye los formatos de adeudo directo tipo MT104 en flujos transfronterizos
- La validación de la identificación del esquema del acreedor se aplica cada vez más

## Flujo de mensaje

El agente del acreedor inicia pacs.003 hacia el agente del deudor para cobrar fondos. El agente del deudor valida el mandato, comprueba la cobertura de la cuenta y liquida o devuelve la transacción.

## Mensajes relacionados

- [`pacs.004.001.11`](/es/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/es/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/es/pacs.002.001.12/) — FI to FI Payment Status Report

