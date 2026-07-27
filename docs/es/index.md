---
title: "pacs008 | ISO 20022 Payment Message Toolkit and API"
description: "Generación, validación, orquestación de API y soporte de cumplimiento para flujos de transferencia de crédito de clientes entre instituciones financieras."
lang: "es-ES"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/es/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "Automatice el procesamiento de mensajes pacs.008 ISO 20022."
home: true
metaTitle: "pacs008"
subtitle: "Generación, validación, orquestación de API y soporte de cumplimiento para flujos de transferencia de crédito de clientes entre instituciones financieras."
tagline: "Generación, validación, orquestación de API y soporte de cumplimiento para flujos de transferencia de crédito de clientes entre instituciones financieras."
actionText: "Conozca pacs008"
actionLink: "/es/about/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# Automatice el procesamiento de mensajes pacs.008 ISO 20022.

Generación, validación, orquestación de API y soporte de cumplimiento para flujos de transferencia de crédito de clientes entre instituciones financieras.

## Qué hace

- **Qué hace**: Genera XML para `pacs.008` y definiciones de mensajes pacs relacionadas; Valida datos y XML contra esquemas; Expone un servicio FastAPI para flujos de trabajo automatizados.
- **Validación**: Validación JSON Schema contra 20 esquemas específicos de tipo de mensaje; Verificación de formato y suma de control IBAN para 75 países; Validación XSD del XML generado contra los esquemas oficiales ISO 20022.
- **Seguridad**: Prevención de XXE mediante defusedxml para todas las operaciones de análisis XML; Protección contra traversal de rutas con lista blanca estricta de directorios; Enmascaramiento de PII en logs JSON estructurados para cumplimiento RGPD y PCI DSS.
- **Preparación 2026**: manejo de direcciones postales estructuradas e híbridas para CBPR+ y migraciones de esquemas; validación más sólida de la calidad de datos de deudor, acreedor y agente; generación consciente de versiones a través de revisiones pacs.008 anteriores y actuales.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/es/api/) and [Selection Guide](/es/message-selection/).
