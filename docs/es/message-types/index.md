---
title: Tipos de mensaje | Español
description: Definiciones y versiones de mensajes pacs ISO 20022 compatibles.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# Tipos de mensaje

Pacs008 cubre la definición de mensaje pacs.008 principal y los mensajes relacionados utilizados en flujos de orquestación y reconciliación.

## Soporte incluido

| Tipo de mensaje | Descripción |
|---|---|
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | FI to FI Payment Status Report |
| [`pacs.003.001.09`](/es/pacs.003.001.09/) | FI to FI Customer Direct Debit |
| [`pacs.004.001.11`](/es/pacs.004.001.11/) | Payment Return |
| [`pacs.007.001.11`](/es/pacs.007.001.11/) | FI to FI Payment Reversal |
| [`pacs.008.001.01`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.02`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.03`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.04`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.05`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.06`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.07`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.08`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.09`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.10`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.11`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.12`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | FI to FI Customer Credit Transfer |
| [`pacs.009.001.10`](/es/pacs.009.001.10/) | Financial Institution Credit Transfer |
| [`pacs.010.001.05`](/es/pacs.010.001.05/) | Financial Institution Direct Debit |
| [`pacs.028.001.05`](/es/pacs.028.001.05/) | FI to FI Payment Status Request |

## Modelo de entrega

Cada tipo de mensaje compatible está respaldado por plantillas y lógica de validación para que los equipos puedan estandarizar la generación y las pruebas de regresión en múltiples canales.

## Contexto de mercado 2026

- **SEPA SCT / SCT Inst**: pacs.008 sigue siendo central para el intercambio de transferencias y el procesamiento de pagos instantáneos.
- **CBPR+**: pacs.008 continúa reemplazando las cargas MT103 transfronterizas con datos estructurados más ricos.
- **Direcciones estructuradas**: la guía actual del mercado apunta a la transición de noviembre de 2026 alejándose de las direcciones postales completamente no estructuradas.
- **Método serial y STP**: las cadenas banco a banco de múltiples tramos siguen siendo importantes, y las variantes de procesamiento directo siguen siendo esenciales para la eficiencia operativa.

## Capacidades operativas

Pacs008 proporciona generación y validación respaldadas por plantillas a través de las revisiones de definiciones de mensajes compatibles:

- comparar versiones
- realizar pruebas de regresión de actualizaciones de esquemas
- fortalecer los datos de mensajes de pago salientes antes del lanzamiento
- apoyar a los equipos de producto, operaciones y migración desde una sola base de código

