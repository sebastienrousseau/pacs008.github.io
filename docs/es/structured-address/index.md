---
title: "Plazo de dirección estructurada noviembre 2026 | pacs008"
description: Cómo afecta el plazo SWIFT CBPR+ de noviembre 2026 para direcciones postales estructuradas a pacs.008 y mensajes de pago relacionados, y cómo pacs008...
lang: es-ES
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Auditar la calidad actual de los datos de dirección en los registros de deudor, acreedor y agente."
  - name: "Step 2"
    text: "Mapear los campos de dirección no estructurados existentes al formato estructurado (calle, edificio, código postal, ciudad, país)."
  - name: "Step 3"
    text: "Añadir validación de dirección al pipeline de pre-generación usando pacs008."
  - name: "Step 4"
    text: "Probar con datos de pago representativos antes del plazo."
---

# Plazo de dirección estructurada noviembre 2026

SWIFT requiere direcciones postales estructuradas en mensajes de pago transfronterizos a partir de noviembre de 2026. Esta página explica qué cambia, qué mensajes se ven afectados y cómo pacs008 ayuda a los equipos a prepararse.

## Qué cambia

SWIFT CBPR+ está pasando de direcciones postales no estructuradas a campos de dirección estructurados en mensajes de pago transfronterizos. Después del plazo de noviembre de 2026, los campos de dirección de las partes clave deben usar el formato estructurado con elementos separados para nombre de calle, número de edificio, código postal, ciudad y país.

## Por qué es importante

- Las direcciones no estructuradas aumentan las tasas de reparación manual y retrasan el procesamiento automático.
- Las direcciones estructuradas mejoran la precisión del filtrado de sanciones al separar el nombre de la parte de los datos de ubicación.
- Los requisitos regulatorios y de esquema exigen cada vez más datos estructurados para el cumplimiento y la presentación de informes.
- Las tasas de rechazo de pagos transfronterizos aumentan cuando la calidad de las direcciones no cumple las expectativas de las contrapartes.

## Qué mensajes se ven afectados

- **pacs.008** — direcciones postales del deudor y acreedor en transferencias de crédito de clientes.
- **pacs.009** — direcciones de instituciones en transferencias de crédito entre instituciones financieras y pagos de cobertura.
- **pacs.004** — direcciones de las partes en devoluciones de pago.
- **pacs.003** — direcciones del acreedor y deudor en domiciliaciones de clientes.

## Cómo ayuda pacs008

- Valida campos de dirección postal estructurada e híbrida antes de la generación XML.
- Señala datos de dirección no estructurados que fallarían después del plazo.
- Soporta tanto formatos híbridos pre-plazo como formatos solo estructurados post-plazo.
- Integra verificaciones de calidad de dirección en pipelines CI y flujos de validación por lotes.

## Cronología

- **Marzo 2023** — SWIFT CBPR+ entra en funcionamiento con ISO 20022 para pagos transfronterizos.
- **Noviembre 2025** — termina el período de coexistencia de instrucciones de pago MT y MX.
- **Noviembre 2026** — el requisito de dirección postal estructurada entra en vigor para mensajes CBPR+.

## Qué hacer ahora

- Auditar la calidad actual de los datos de dirección en los registros de deudor, acreedor y agente.
- Mapear los campos de dirección no estructurados existentes al formato estructurado (calle, edificio, código postal, ciudad, país).
- Añadir validación de dirección al pipeline de pre-generación usando pacs008.
- Probar con datos de pago representativos antes del plazo.

## Referencias

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

