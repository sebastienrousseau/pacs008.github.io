---
title: Tipos de mensaje | pacs008 ISO 20022
description: Definiciones y versiones de mensajes pacs ISO 20022 compatibles. Generación, validación, orquestación de API y soporte de cumplimiento para flujos de...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# Tipos de mensaje

pacs008 cubre la definición de mensaje pacs.008 principal y los mensajes relacionados utilizados en flujos de orquestación y reconciliación.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026 utilizando materiales públicos de ISO 20022, EPC y Swift enlazados en esta página.

## Soporte incluido

| Tipo de mensaje | Descripción | Versión | Año | Descripción general |
|---|---|---|---|---|
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | FI to FI Payment Status Report | `pacs.002.001.12` | 2019 | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |
| [`pacs.003.001.09`](/es/pacs.003.001.09/) | FI to FI Customer Direct Debit | `pacs.003.001.09` | 2019 | El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor. |
| [`pacs.004.001.11`](/es/pacs.004.001.11/) | Payment Return | `pacs.004.001.11` | 2019 | El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora. |
| [`pacs.007.001.11`](/es/pacs.007.001.11/) | FI to FI Payment Reversal | `pacs.007.001.11` | 2019 | El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original. |
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer | `pacs.008.001.13` | 2023 | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Financial Institution Credit Transfer | `pacs.009.001.10` | 2019 | El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez. |
| [`pacs.010.001.05`](/es/pacs.010.001.05/) | Financial Institution Direct Debit | `pacs.010.001.05` | 2019 | El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución. |
| [`pacs.028.001.05`](/es/pacs.028.001.05/) | FI to FI Payment Status Request | `pacs.028.001.05` | 2019 | El mensaje pacs.028 es enviado por una institución financiera para solicitar el estado de una instrucción de pago enviada previamente. Permite el seguimiento proactivo del procesamiento de pagos sin esperar un informe de estado no solicitado. |

## Modelo de entrega

Cada tipo de mensaje compatible está respaldado por plantillas y lógica de validación para que los equipos puedan estandarizar la generación y las pruebas de regresión en múltiples canales.

## Elegir el mensaje correcto

El catálogo de mensajes es más importante cuando los equipos deben decidir qué mensaje inicia el trabajo, cuál informa del estado y cuál corrige o revierte el flujo.

Consulte la [guía de selección de mensajes](/es/message-selection/) para una vista resumida de decisión sobre los flujos pacs soportados.


## Contexto de mercado 2026

- **SEPA SCT / SCT Inst**: pacs.008 sigue siendo central para el intercambio de transferencias y el procesamiento de pagos instantáneos.
- **CBPR+**: pacs.008 continúa reemplazando las cargas MT103 transfronterizas con datos estructurados más ricos.
- **Direcciones estructuradas**: la guía actual del mercado apunta a la transición de noviembre de 2026 alejándose de las direcciones postales completamente no estructuradas.
- **Método serial y STP**: las cadenas banco a banco de múltiples tramos siguen siendo importantes, y las variantes de procesamiento directo siguen siendo esenciales para la eficiencia operativa.

## Capacidades operativas

pacs008 proporciona generación y validación respaldadas por plantillas a través de las revisiones de definiciones de mensajes compatibles:

- comparar versiones
- realizar pruebas de regresión de actualizaciones de esquemas
- fortalecer los datos de mensajes de pago salientes antes del lanzamiento
- apoyar a los equipos de producto, operaciones y migración desde una sola base de código

