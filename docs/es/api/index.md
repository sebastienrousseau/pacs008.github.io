---
title: API | Español
description: Soporte de flujos REST y CLI en Pacs008.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# API

El proyecto proporciona tanto una API REST como una CLI para flujos de procesamiento de mensajes de pago.

## Capacidades de la API

- endpoints de salud y disponibilidad
- validación de datos antes de la generación XML
- generación síncrona para flujos directos
- ejecución asíncrona de tareas para pipelines de mayor duración
- archivos generados descargables a través de flujos de finalización de tareas

## Capacidades de la CLI

- apuntar a un archivo fuente y versión de mensaje
- validar contra XSD antes de la entrega
- generar XML en directorios de salida compatibles con pipelines
- integrarse en trabajos CI, programaciones por lotes y herramientas de operador local

## Enfoque de implementación

Pacs008 está diseñado para uso operativo en equipos de procesamiento de pagos:

- validación previa antes de la creación del mensaje
- selección de esquema y versión en tiempo de ejecución
- flujos de generación asíncronos para servicios internos
- salidas determinísticas para pruebas y pistas de auditoría

## Requisitos de calidad de datos para 2026

Los requisitos de calidad de los mensajes se están endureciendo en la industria, particularmente en torno a:

- identificación de partes y agentes
- preparación de direcciones estructuradas o híbridas
- manejo más rico de remesas y referencias
- transparencia a través de cadenas de pago seriales

La API y la CLI están diseñadas para hacer que esas verificaciones formen parte del flujo de trabajo en lugar de un paso de revisión manual.

