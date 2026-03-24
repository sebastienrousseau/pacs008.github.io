---
title: "Preguntas frecuentes | pacs008"
description: Preguntas comunes sobre mensajes pacs ISO 20022, migración CBPR+, selección de mensajes, implementación y el toolkit pacs008.
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# Preguntas frecuentes

Esta página responde preguntas comunes sobre los mensajes pacs ISO 20022, cómo funcionan juntos y cómo pacs008 ayuda a los equipos a implementarlos.

## General

### ¿Qué es ISO 20022?

ISO 20022 es un estándar internacional para la mensajería financiera. Define un lenguaje y un modelo comunes para los mensajes de pago intercambiados entre instituciones financieras. A diferencia de formatos anteriores como SWIFT MT, ISO 20022 utiliza XML y admite datos más ricos y estructurados para las partes, los importes y las referencias.

### ¿Qué son los mensajes pacs?

La familia de mensajes pacs (payments clearing and settlement) cubre las instrucciones de pago interbancarias, los informes de estado, las devoluciones, las reversiones y las consultas. Incluye pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 y pacs.028. Cada mensaje cumple una función específica en el ciclo de vida del pago.

### ¿En qué se diferencian los mensajes pacs de los mensajes SWIFT MT?

Los mensajes SWIFT MT utilizan un formato plano de etiquetas de campo (por ejemplo, MT103 para transferencias de clientes). Los mensajes pacs utilizan XML jerárquico con estructuras de datos más ricas. Las diferencias clave incluyen soporte para múltiples transacciones por mensaje, identificación estructurada de las partes (LEI, múltiples IDs), direcciones postales estructuradas e información de remesa estructurada. MT103 corresponde a pacs.008, MT202 corresponde a pacs.009 y el texto de estado MT199 se reemplaza por pacs.002.

### ¿Cuál es la relación entre los mensajes pain y pacs?

Los mensajes pain (payment initiation) circulan entre el cliente y su banco. Los mensajes pacs circulan entre bancos. Un pain.001 de iniciación de transferencia del banco del deudor se convierte en una instrucción interbancaria pacs.008. Los dos dominios comparten elementos de datos comunes pero sirven a partes diferentes de la cadena de pago.

## Selección de mensajes

### ¿Cuándo debo usar pacs.008?

Use pacs.008 para instrucciones de transferencia de clientes entre bancos. Contiene datos de las partes deudora y acreedora, importes, información de remesa y detalles de liquidación. Es el mensaje principal para el envío de pagos de clientes a través de la red interbancaria, ya sea a nivel nacional (SEPA) o transfronterizo (CBPR+).

### ¿Cuándo debo usar pacs.009 en lugar de pacs.008?

Use pacs.009 para transferencias de cuenta propia entre instituciones, tramos de financiación y pagos de cobertura. A diferencia de pacs.008, que transporta un pago de cliente en nombre de un deudor, pacs.009 mueve fondos entre bancos por cuenta propia. En los flujos de cobertura, pacs.009 se encarga de la financiación mientras que pacs.008 transporta la instrucción del cliente por una vía separada.

### ¿Cuál es la diferencia entre pacs.004 y pacs.007?

pacs.004 devuelve los fondos liquidados desde el lado receptor a través de la cadena. pacs.007 revierte un pago desde el lado emisor original hacia adelante en la cadena. Use pacs.004 cuando el banco beneficiario no pueda aplicar el crédito después de la liquidación. Use pacs.007 cuando el ordenante descubra un error, un duplicado o un fraude.

### ¿Cuándo debo usar pacs.028 en lugar de esperar pacs.002?

Use pacs.028 cuando necesite solicitar activamente el estado de un pago que no ha recibido una actualización pacs.002 oportuna. pacs.002 se activa por eventos (el agente receptor lo envía de forma proactiva), mientras que pacs.028 se activa por excepciones (el agente ordenante lo solicita). Use pacs.028 para actualizaciones de pago retrasadas, inciertas o faltantes, no como tráfico rutinario.

### ¿Para qué se utiliza pacs.003?

pacs.003 transporta instrucciones de adeudo directo de clientes entre bancos. El agente del acreedor lo envía al agente del deudor para cobrar fondos. Requiere una referencia de mandato válida y admite los esquemas de adeudo directo SEPA Core y B2B. No se utiliza para transferencias ni para adeudos directos de cuenta propia entre instituciones.

### ¿Para qué se utiliza pacs.010?

pacs.010 gestiona los adeudos directos entre instituciones financieras sobre sus propias cuentas. Se utiliza para cobros de banco a banco, como comisiones, llamadas de margen y obligaciones similares en el marco de acuerdos bilaterales. No se utiliza para adeudos directos de clientes ni para transferencias.

## Estructura de los mensajes

### ¿Qué es el Group Header (GrpHdr)?

El Group Header aparece exactamente una vez por mensaje pacs. Contiene el identificador del mensaje (MsgId), la marca de tiempo de creación (CreDtTm), el número de transacciones (NbOfTxs), la información de liquidación (SttlmInf) y, opcionalmente, el importe total de liquidación interbancaria e información del tipo de pago. Identifica el sobre del mensaje, no las transacciones comerciales individuales.

### ¿Cuáles son los identificadores de pago en pacs.008?

pacs.008 utiliza cuatro identificadores principales. MsgId identifica el sobre del mensaje y cambia en cada salto. InstrId es una referencia punto a punto entre agentes adyacentes y puede cambiar en cada salto. EndToEndId lo establece el ordenante y no debe ser modificado por ningún agente de la cadena. TxId lo asigna el primer agente ordenante y permanece constante en el espacio interbancario. UETR es un UUID que permanece sin cambios en todos los tramos para el seguimiento de extremo a extremo.

### ¿Qué métodos de liquidación están disponibles?

Se definen cuatro métodos de liquidación. CLRG liquida a través de un sistema de compensación como TARGET2, EURO1 o CHIPS. INDA liquida en los libros del agente instruido, donde el agente del deudor mantiene una cuenta. INGA liquida en los libros del agente ordenante, donde el agente instruido mantiene una cuenta. COVE liquida mediante un pago de cobertura separado transportado por pacs.009.

### ¿Qué significan los códigos de cargo de comisiones?

DEBT significa que todas las comisiones son a cargo del deudor (equivalente MT103 OUR). CRED significa que todas las comisiones son a cargo del acreedor (equivalente BEN). SHAR significa que las comisiones se comparten entre los agentes del deudor y del acreedor (equivalente SHA). SLEV significa que las comisiones siguen las reglas del nivel de servicio y es obligatorio para las transferencias SEPA.

## CBPR+ y migración

### ¿Qué es CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) es el programa de SWIFT para la adopción de ISO 20022 en la mensajería de pagos transfronterizos. Entró en funcionamiento en marzo de 2023 y reemplaza los mensajes MT por sus equivalentes pacs. CBPR+ exige pacs.002 para toda la comunicación de estados, admite datos de partes más ricos y direcciones estructuradas, y utiliza el seguimiento basado en UETR a través de gpi.

### ¿Qué ocurrió con el período de coexistencia MT/MX?

El período de coexistencia para instrucciones de pago transfronterizas finalizó en noviembre de 2025. Desde entonces, los mensajes CBPR+ deben utilizar el formato ISO 20022 (MX). Los servicios de traducción que convertían entre MT y MX durante la transición ya no están disponibles para nuevos flujos. Los bancos deben enviar y recibir mensajes pacs nativos.

### ¿Cuál es la fecha límite de noviembre de 2026 para direcciones estructuradas?

A partir de noviembre de 2026, SWIFT CBPR+ exige direcciones postales estructuradas en los mensajes de pago transfronterizos. Las líneas de dirección no estructuradas (solo AdrLine) ya no se aceptarán para campos de partes clave. Como mínimo, se requieren TwnNm y Ctry, y se recomiendan StrtNm y BldgNb o PstBx. Esto mejora el filtrado de sanciones y reduce la reparación manual.

### ¿Cómo reemplaza pacs.008 a MT103?

pacs.008 reemplaza a MT103 y MT103+ para transferencias de clientes. Mapeo clave: el campo 20 de MT103 corresponde a MsgId o InstrId; el campo 32A se divide en IntrBkSttlmDt e IntrBkSttlmAmt; el campo 50a corresponde a Dbtr y DbtrAcct; el campo 59a corresponde a Cdtr y CdtrAcct; el campo 70 corresponde a RmtInf; el campo 71A corresponde a ChrgBr. pacs.008 añade UETR, remesa estructurada, identificación LEI y admite múltiples transacciones por mensaje.

### ¿Cómo reemplaza pacs.009 a MT202?

pacs.009 reemplaza a MT202 y MT202COV para transferencias entre instituciones. En los flujos de cobertura, el MT202COV (que transportaba tanto la financiación como los datos del cliente subyacente) se divide de forma limpia: pacs.009 transporta el tramo de financiación mientras que pacs.008 transporta directamente la instrucción del cliente. Esta separación mejora la calidad de los datos y reduce los problemas de conciliación.

## Detalles técnicos

### ¿Qué son las direcciones estructuradas y no estructuradas?

Las direcciones estructuradas utilizan elementos XML separados para cada componente: StrtNm (calle), BldgNb (número de edificio), PstCd (código postal), TwnNm (ciudad), Ctry (país) y elementos opcionales como Flr, Room y DstrctNm. Las direcciones no estructuradas utilizan hasta siete elementos AdrLine con texto libre. Las direcciones híbridas combinan ambas durante el período de transición. Después de noviembre de 2026, CBPR+ exige el formato estructurado.

### ¿Qué es UETR y cómo funciona el seguimiento gpi?

UETR (Unique End-to-End Transaction Reference) es un identificador UUID v4 generado por el agente del deudor y transportado sin cambios a través de todos los tramos de un pago. Aparece en pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 y pacs.028. SWIFT gpi utiliza el UETR para rastrear pagos a través de una base de datos Tracker en la nube. Cada agente confirma la recepción y el procesamiento, lo que permite una visibilidad de extremo a extremo y el seguimiento de los SLA.

### ¿Cuáles son los códigos de estado comunes en pacs.002?

ACCP significa aceptado tras las verificaciones del perfil del cliente. ACSP significa aceptado y la liquidación está en curso. ACSC significa que la liquidación en la cuenta del deudor se ha completado. RJCT significa rechazado (con un código de motivo en StsRsnInf). PDNG significa pendiente de procesamiento adicional. RCVD significa recibido pero aún no procesado. Cada estado puede incluir un código de motivo estructurado como AC01 (número de cuenta incorrecto), AM04 (fondos insuficientes) o RC01 (BIC incorrecto).

### ¿Cuáles son los códigos de motivo de devolución comunes en pacs.004?

Los códigos de motivo de devolución frecuentes incluyen AC01 (número de cuenta incorrecto), AC04 (cuenta cerrada), AC06 (cuenta bloqueada), AM04 (fondos insuficientes), BE04 (dirección del acreedor faltante), CUST (solicitado por el cliente), DUPL (pago duplicado), FOCR (tras solicitud de cancelación) y FR01 (fraude). La lista completa se define en los External Code Sets de ISO 20022.

### ¿Qué es la información de remesa estructurada?

La remesa estructurada en pacs.008 utiliza el elemento RmtInf/Strd para transportar referencias de documentos (números de factura, notas de crédito), importes (vencido, remitido, impuesto, descuento) y referencias del acreedor (referencias RF según ISO 11649). Esto permite la conciliación automatizada de facturas. Los códigos de tipo de documento comunes incluyen CINV (factura comercial), CREN (nota de crédito) y SOAC (extracto de cuenta).

### ¿Qué es LEI y cuándo se utiliza?

LEI (Legal Entity Identifier) es un código alfanumérico de 20 caracteres según ISO 17442. Identifica de forma única a las entidades jurídicas que participan en transacciones financieras. En los mensajes pacs, LEI aparece en OrgId/LEI para las partes y en FinInstnId/LEI para los agentes. CBPR+ fomenta cada vez más el uso de LEI para la identificación de partes y agentes. Mejora la desambiguación de entidades y apoya los requisitos de informes regulatorios.

## Acerca del toolkit pacs008

### ¿Qué hace pacs008?

pacs008 es un toolkit de Python que genera, valida y envía mensajes de pago ISO 20022. Lee datos de pago de fuentes CSV, JSON, JSONL, SQLite y Parquet, valida contra JSON Schema y XSD, verifica identificadores IBAN y BIC, limpia los datos para cumplir con los caracteres SWIFT y produce archivos XML. Proporciona una API REST, un CLI y una biblioteca de Python.

### ¿Qué tipos de mensajes admite pacs008?

pacs008 admite ocho tipos de mensajes: pacs.002.001.12 (informe de estado), pacs.003.001.09 (adeudo directo de cliente), pacs.004.001.11 (devolución de pago), pacs.007.001.11 (reversión de pago), pacs.008.001.13 (transferencia de cliente), pacs.009.001.10 (transferencia entre instituciones financieras), pacs.010.001.05 (adeudo directo entre instituciones financieras) y pacs.028.001.05 (solicitud de estado de pago).

### ¿Cómo ayuda pacs008 con la fecha límite de direcciones estructuradas de noviembre de 2026?

pacs008 valida los campos de dirección postal estructurada e híbrida antes de la generación XML. Señala los datos de dirección no estructurados que fallarían después de la fecha límite de noviembre de 2026, admite tanto formatos híbridos antes de la fecha límite como formatos exclusivamente estructurados después, e integra las verificaciones de calidad de direcciones en los pipelines CI y los flujos de trabajo de validación por lotes.

### ¿Puede pacs008 validar datos sin generar XML?

Sí. Use el flag CLI `--dry-run` o el endpoint de API `POST /validate` para validar datos de pago sin generar XML. El pipeline de validación verifica la conformidad con JSON Schema, el formato y la suma de verificación IBAN, la estructura BIC y la conformidad con los caracteres SWIFT. El código de salida o la respuesta de la API indica si la validación fue exitosa o falló.

## Referencias

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

