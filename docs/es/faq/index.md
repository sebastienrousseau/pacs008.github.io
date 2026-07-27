---
title: "Preguntas frecuentes | pacs008"
description: Preguntas comunes sobre mensajes pacs ISO 20022, migración CBPR+, selección de mensajes, implementación y el toolkit pacs008.
lang: es-ES
lastUpdated: true
image: /logo.webp
---

# Preguntas frecuentes

Esta página responde preguntas comunes sobre los mensajes pacs ISO 20022, cómo funcionan juntos y cómo pacs008 ayuda a los equipos a implementarlos.

## General

### ¿Que es ISO 20022?

ISO 20022 es el estandar internacional de mensajeria financiera. Define un lenguaje y un modelo comunes para los mensajes de pago intercambiados entre instituciones financieras. A diferencia de formatos anteriores como SWIFT MT, ISO 20022 utiliza XML y admite datos mas ricos y estructurados para las partes, los importes y las referencias.

### ¿Que son los mensajes pacs?

La familia pacs (payments clearing and settlement) cubre todos los mensajes interbancarios de pago:

- pacs.002 -- informe de estado
- pacs.003 -- adeudo directo de cliente
- pacs.004 -- devolucion de pago
- pacs.007 -- reversion de pago
- pacs.008 -- transferencia de credito de cliente
- pacs.009 -- transferencia entre instituciones financieras
- pacs.010 -- adeudo directo entre instituciones financieras
- pacs.028 -- solicitud de estado de pago

Cada mensaje cumple una funcion especifica en el ciclo de vida del pago.

### ¿En que se diferencian los mensajes pacs de los mensajes SWIFT MT?

Los mensajes SWIFT MT utilizan un formato plano de etiquetas de campo (por ejemplo, MT103 para transferencias de clientes). Los mensajes pacs utilizan XML jerarquico con estructuras de datos mas ricas. Diferencias principales:

- Soporte para multiples transacciones por mensaje
- Identificacion estructurada de las partes (LEI, multiples IDs)
- Direcciones postales estructuradas
- Informacion de remesa estructurada

Correspondencia: MT103 equivale a pacs.008, MT202 equivale a pacs.009, y el texto de estado MT199 se reemplaza por pacs.002.

### ¿Cual es la relacion entre los mensajes pain y pacs?

Los mensajes pain (payment initiation) circulan entre el cliente y su banco. Los mensajes pacs circulan entre bancos. Un pain.001 de iniciacion de transferencia del banco del deudor se convierte en una instruccion interbancaria pacs.008. Los dos dominios comparten elementos de datos comunes pero sirven a partes diferentes de la cadena de pago.

## Seleccion de mensajes

### ¿Cuando usar pacs.008?

pacs.008 se utiliza para instrucciones de transferencia de clientes entre bancos. Transporta:

- Datos de las partes deudora y acreedora
- Importes y divisa
- Informacion de remesa
- Detalles de liquidacion

Es el mensaje principal para el envio de pagos de clientes a traves de la red interbancaria, ya sea a nivel nacional (SEPA) o transfronterizo (CBPR+).

### ¿Cuando usar pacs.009 en lugar de pacs.008?

pacs.009 se utiliza para transferencias de cuenta propia entre instituciones, tramos de financiacion y pagos de cobertura. A diferencia de pacs.008, que transporta un pago de cliente en nombre de un deudor, pacs.009 mueve fondos entre bancos por cuenta propia. En los flujos de cobertura, pacs.009 se encarga de la financiacion mientras que pacs.008 transporta la instruccion del cliente por una via separada.

### ¿Cual es la diferencia entre pacs.004 y pacs.007?

- pacs.004 devuelve los fondos liquidados desde el lado receptor a traves de la cadena.
- pacs.007 revierte un pago desde el lado emisor original hacia adelante en la cadena.

Usar pacs.004 cuando el banco beneficiario no pueda aplicar el credito despues de la liquidacion. Usar pacs.007 cuando el ordenante descubra un error, un duplicado o un fraude.

### ¿Cuando usar pacs.028 en lugar de esperar pacs.002?

pacs.028 se utiliza para solicitar activamente el estado de un pago que no ha recibido una actualizacion pacs.002 oportuna. pacs.002 se activa por eventos (el agente receptor lo envia de forma proactiva), mientras que pacs.028 se activa por excepciones (el agente ordenante lo solicita). Usar pacs.028 para actualizaciones de pago retrasadas, inciertas o faltantes -- no como trafico rutinario.

### ¿Para que se utiliza pacs.003?

pacs.003 transporta instrucciones de adeudo directo de clientes entre bancos. El agente del acreedor lo envia al agente del deudor para cobrar fondos. Caracteristicas:

- Referencia de mandato valida obligatoria
- Soporte de los esquemas SEPA Core y B2B
- No se utiliza para transferencias ni para adeudos directos de cuenta propia entre instituciones

### ¿Para que se utiliza pacs.010?

pacs.010 gestiona los adeudos directos entre instituciones financieras sobre sus propias cuentas. Casos de uso:

- Comisiones de banco a banco
- Llamadas de margen
- Obligaciones similares en el marco de acuerdos bilaterales

No se utiliza para adeudos directos de clientes ni para transferencias.

## Estructura de los mensajes

### ¿Que es el Group Header (GrpHdr)?

El Group Header aparece exactamente una vez por mensaje pacs. Contiene:

- MsgId -- identificador del mensaje
- CreDtTm -- marca de tiempo de creacion
- NbOfTxs -- numero de transacciones
- SttlmInf -- informacion de liquidacion
- Importe total de liquidacion interbancaria (opcional)
- Informacion del tipo de pago (opcional)

Identifica el sobre del mensaje, no las transacciones comerciales individuales.

### ¿Cuales son los identificadores de pago en pacs.008?

pacs.008 utiliza cinco identificadores:

- MsgId -- identifica el sobre del mensaje, cambia en cada salto
- InstrId -- referencia punto a punto entre agentes adyacentes, puede cambiar en cada salto
- EndToEndId -- establecido por el ordenante, no debe ser modificado por ningun agente de la cadena
- TxId -- asignado por el primer agente ordenante, permanece constante en el espacio interbancario
- UETR -- UUID que permanece sin cambios en todos los tramos para el seguimiento de extremo a extremo

### ¿Que metodos de liquidacion estan disponibles?

Se definen cuatro metodos de liquidacion:

- CLRG -- liquidacion a traves de un sistema de compensacion (TARGET2, EURO1, CHIPS)
- INDA -- liquidacion en los libros del agente instruido, donde el agente del deudor mantiene una cuenta
- INGA -- liquidacion en los libros del agente ordenante, donde el agente instruido mantiene una cuenta
- COVE -- liquidacion mediante un pago de cobertura separado transportado por pacs.009

### ¿Que significan los codigos de cargo de comisiones?

Cuatro codigos definen quien asume las comisiones:

- DEBT -- todas las comisiones a cargo del deudor (equivalente MT103 OUR)
- CRED -- todas las comisiones a cargo del acreedor (equivalente BEN)
- SHAR -- comisiones compartidas entre los agentes del deudor y del acreedor (equivalente SHA)
- SLEV -- comisiones segun las reglas del nivel de servicio, obligatorio para transferencias SEPA

## CBPR+ y migracion

### ¿Que es CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) es el programa de SWIFT para la adopcion de ISO 20022 en la mensajeria de pagos transfronterizos. En funcionamiento desde marzo de 2023, reemplaza los mensajes MT por sus equivalentes pacs. Puntos clave:

- pacs.002 obligatorio para toda la comunicacion de estados
- Datos de partes mas ricos y direcciones estructuradas
- Seguimiento basado en UETR a traves de gpi

### ¿Que ocurrio con el periodo de coexistencia MT/MX?

El periodo de coexistencia para instrucciones de pago transfronterizas finalizo en noviembre de 2025. Desde entonces:

- Los mensajes CBPR+ deben utilizar el formato ISO 20022 (MX)
- Los servicios de traduccion MT/MX ya no estan disponibles para nuevos flujos
- Los bancos deben enviar y recibir mensajes pacs nativos

### ¿Cual es la fecha limite de noviembre de 2026 para direcciones estructuradas?

A partir de noviembre de 2026, SWIFT CBPR+ exige direcciones postales estructuradas en los mensajes de pago transfronterizos. Las lineas de direccion no estructuradas (solo AdrLine) ya no se aceptaran para campos de partes clave. Requisitos minimos:

- TwnNm y Ctry obligatorios
- StrtNm y BldgNb o PstBx recomendados

Esto mejora el filtrado de sanciones y reduce la reparacion manual.

### ¿Como reemplaza pacs.008 a MT103?

pacs.008 reemplaza a MT103 y MT103+ para transferencias de clientes. Correspondencia principal:

- Campo 20 → MsgId o InstrId
- Campo 32A → IntrBkSttlmDt e IntrBkSttlmAmt
- Campo 50a → Dbtr y DbtrAcct
- Campo 59a → Cdtr y CdtrAcct
- Campo 70 → RmtInf
- Campo 71A → ChrgBr

pacs.008 anade UETR, remesa estructurada, identificacion LEI y admite multiples transacciones por mensaje.

### ¿Como reemplaza pacs.009 a MT202?

pacs.009 reemplaza a MT202 y MT202COV para transferencias entre instituciones. En los flujos de cobertura, el MT202COV (que transportaba tanto la financiacion como los datos del cliente subyacente) se divide de forma limpia:

- pacs.009 transporta el tramo de financiacion
- pacs.008 transporta directamente la instruccion del cliente

Esta separacion mejora la calidad de los datos y reduce los problemas de conciliacion.

## Detalles tecnicos

### ¿Que son las direcciones estructuradas y no estructuradas?

Las direcciones estructuradas utilizan elementos XML separados para cada componente:

- StrtNm -- calle
- BldgNb -- numero de edificio
- PstCd -- codigo postal
- TwnNm -- ciudad
- Ctry -- pais
- Elementos opcionales: Flr, Room, DstrctNm

Las direcciones no estructuradas utilizan hasta siete elementos AdrLine con texto libre. Las direcciones hibridas combinan ambas durante el periodo de transicion. Despues de noviembre de 2026, CBPR+ exige el formato estructurado.

### ¿Que es UETR y como funciona el seguimiento gpi?

UETR (Unique End-to-End Transaction Reference) es un identificador UUID v4 generado por el agente del deudor y transportado sin cambios a traves de todos los tramos de un pago. Aparece en:

- pacs.008, pacs.009, pacs.002
- pacs.004, pacs.007, pacs.028

SWIFT gpi utiliza el UETR para rastrear pagos a traves de una base de datos Tracker en la nube. Cada agente confirma la recepcion y el procesamiento, lo que permite una visibilidad de extremo a extremo y el seguimiento de los SLA.

### ¿Cuales son los codigos de estado comunes en pacs.002?

Codigos de estado principales:

- ACCP -- aceptado tras las verificaciones del perfil del cliente
- ACSP -- aceptado, liquidacion en curso
- ACSC -- liquidacion en la cuenta del deudor completada
- RJCT -- rechazado (con un codigo de motivo en StsRsnInf)
- PDNG -- pendiente de procesamiento adicional
- RCVD -- recibido pero aun no procesado

Cada estado puede incluir un codigo de motivo estructurado como AC01 (numero de cuenta incorrecto), AM04 (fondos insuficientes) o RC01 (BIC incorrecto).

### ¿Cuales son los codigos de motivo de devolucion comunes en pacs.004?

Codigos de motivo de devolucion frecuentes:

- AC01 -- numero de cuenta incorrecto
- AC04 -- cuenta cerrada
- AC06 -- cuenta bloqueada
- AM04 -- fondos insuficientes
- BE04 -- direccion del acreedor faltante
- CUST -- solicitado por el cliente
- DUPL -- pago duplicado
- FOCR -- tras solicitud de cancelacion
- FR01 -- fraude

La lista completa se define en los External Code Sets de ISO 20022.

### ¿Que es la informacion de remesa estructurada?

La remesa estructurada en pacs.008 utiliza el elemento RmtInf/Strd para transportar:

- Referencias de documentos (numeros de factura, notas de credito)
- Importes (vencido, remitido, impuesto, descuento)
- Referencias del acreedor (referencias RF segun ISO 11649)

Esto permite la conciliacion automatizada de facturas. Codigos de tipo de documento comunes:

- CINV -- factura comercial
- CREN -- nota de credito
- SOAC -- extracto de cuenta

### ¿Que es LEI y cuando se utiliza?

LEI (Legal Entity Identifier) es un codigo alfanumerico de 20 caracteres segun ISO 17442. Identifica de forma unica a las entidades juridicas que participan en transacciones financieras. En los mensajes pacs:

- OrgId/LEI -- identificacion de las partes
- FinInstnId/LEI -- identificacion de los agentes

CBPR+ fomenta cada vez mas el uso de LEI para la identificacion de partes y agentes. Mejora la desambiguacion de entidades y apoya los requisitos de informes regulatorios.

## Acerca del toolkit pacs008

### ¿Que hace pacs008?

pacs008 es un toolkit Python que genera, valida y envia mensajes de pago ISO 20022. Funcionalidades:

- Lectura de datos de pago de fuentes CSV, JSON, JSONL, SQLite y Parquet
- Validacion contra JSON Schema y XSD
- Verificacion de identificadores IBAN y BIC
- Limpieza de datos para cumplir con los caracteres SWIFT
- Produccion de archivos XML

Tres interfaces disponibles: API REST, CLI y biblioteca Python.

### ¿Que tipos de mensajes admite pacs008?

pacs008 admite ocho tipos de mensajes:

- pacs.002.001.12 -- informe de estado
- pacs.003.001.09 -- adeudo directo de cliente
- pacs.004.001.11 -- devolucion de pago
- pacs.007.001.11 -- reversion de pago
- pacs.008.001.13 -- transferencia de credito de cliente
- pacs.009.001.10 -- transferencia entre instituciones financieras
- pacs.010.001.05 -- adeudo directo entre instituciones financieras
- pacs.028.001.05 -- solicitud de estado de pago

### ¿Como ayuda pacs008 con la fecha limite de direcciones estructuradas de noviembre de 2026?

pacs008 valida los campos de direccion postal estructurada e hibrida antes de la generacion XML:

- Senalamiento de datos de direccion no estructurados que fallarian despues de la fecha limite de noviembre de 2026
- Soporte de formatos hibridos antes de la fecha limite y formatos exclusivamente estructurados despues
- Integracion de verificaciones de calidad de direcciones en los pipelines CI y los flujos de trabajo de validacion por lotes

### ¿Puede pacs008 validar datos sin generar XML?

Si. Usar el flag CLI `--dry-run` o el endpoint de API `POST /validate` para validar datos de pago sin generar XML. El pipeline de validacion verifica:

- Conformidad con JSON Schema
- Formato y suma de verificacion IBAN
- Estructura BIC
- Conformidad con los caracteres SWIFT

El codigo de salida o la respuesta de la API indica si la validacion fue exitosa o fallo.

## Referencias

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

