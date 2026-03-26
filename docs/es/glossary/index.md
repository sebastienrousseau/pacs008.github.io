---
title: "Glosario ISO 20022 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: es-ES
lastUpdated: true
image: /logo.webp
---

# Glosario ISO 20022

This glossary defines the key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Cámara de compensación automatizada. Una red que procesa pagos electrónicos por lotes entre instituciones financieras.

**AdrLine** — Línea de dirección. Un campo de dirección en texto libre en las estructuras de dirección postal ISO 20022. Hasta 7 líneas de 70 caracteres cada una. Será reemplazado por elementos de dirección estructurados para CBPR+ antes de noviembre de 2026.

**ACCP** — Perfil de cliente aceptado. Un código de estado pacs.002 que indica que las verificaciones anteriores (sintaxis, perfil del cliente) han sido superadas.

**ACSC** — Liquidación aceptada completada. Un código de estado pacs.002 que confirma que la liquidación en la cuenta del deudor ha sido completada.

**ACSP** — Liquidación aceptada en proceso. Un código de estado pacs.002 que indica que todas las verificaciones han sido superadas y la liquidación está en curso.

## B

**BAH** — Cabecera de aplicación de negocio (head.001). Un sobre estandarizado que envuelve los mensajes de negocio ISO 20022 para su transporte a través de SWIFT. Contiene información de enrutamiento, identificador de definición del mensaje y BICs del emisor/receptor.

**BIC** — Código de identificación de negocio (ISO 9362). Un código de 8 u 11 caracteres que identifica de forma única a una institución financiera. Formato: BBBBCCLL (código de banco + país + localización) con código de sucursal BBB opcional.

## C

**CBPR+** — Pagos y reportes transfronterizos Plus. El programa de SWIFT para la migración de la mensajería de pagos transfronterizos de MT a ISO 20022. Entró en funcionamiento en marzo de 2023.

**CdtTrfTxInf** — Información de transacción de transferencia de crédito. El principal bloque de construcción a nivel de transacción en pacs.008 que contiene detalles de pago, partes, importes e información de remesa.

**ChrgBr** — Portador de cargos. Especifica quién paga los cargos de la transacción. Valores: DEBT (deudor), CRED (acreedor), SHAR (compartido), SLEV (nivel de servicio, solo SEPA).

**CLRG** — Liquidación por sistema de compensación. Un método de liquidación donde los fondos se mueven a través de un sistema de compensación como TARGET2, EURO1 o CHIPS.

**COVE** — Liquidación por método de cobertura. Un método de liquidación donde un pago de cobertura pacs.009 separado gestiona la financiación entre corresponsales mientras pacs.008 transporta los datos del cliente directamente.

**CSM** — Mecanismo de compensación y liquidación. Una infraestructura que procesa y liquida instrucciones de pago entre instituciones participantes.

## D

**Dbtr** — Deudor. La parte que adeuda fondos e inicia el pago. En pacs.008, el elemento Dbtr contiene el nombre del deudor, la dirección postal, la identificación y el país de residencia.

**DbtrAgt** — Agente del deudor. La institución financiera que gestiona la cuenta del deudor y envía la instrucción pacs.008.

## E

**E2E ID** — Identificación de extremo a extremo (EndToEndId). Una referencia asignada por el originador que debe permanecer sin cambios a través de todos los agentes en la cadena de pago. Utilizada para la trazabilidad a nivel de cliente.

**EPC** — Consejo Europeo de Pagos. El organismo que gestiona los reglamentos de los esquemas de pago SEPA para transferencias de crédito y débitos directos.

## F

**FI** — Institución financiera. Un banco u otra institución que participa en la compensación y liquidación de pagos.

**FIToFI** — Institución financiera a institución financiera. Describe el dominio interbancario donde operan los mensajes pacs.

## G

**gpi** — Innovación global de pagos. La iniciativa de SWIFT para pagos transfronterizos más rápidos y transparentes. Utiliza UETR para el seguimiento de extremo a extremo a través de un Tracker basado en la nube.

**GrpHdr** — Cabecera de grupo. El bloque de metadatos a nivel de mensaje en los mensajes pacs. Contiene MsgId, CreDtTm, NbOfTxs, información de liquidación e información de tipo de pago.

## H

**Hybrid address** — Un formato de dirección postal que combina elementos estructurados (StrtNm, TwnNm, Ctry) con elementos no estructurados AdrLine. Permitido durante el período de transición antes de la fecha límite de dirección estructurada de noviembre de 2026.

## I

**IBAN** — Número de cuenta bancaria internacional (ISO 13616). Un formato de número de cuenta estandarizado utilizado para pagos transfronterizos y nacionales. Validado mediante la suma de verificación ISO 7064 Mod 97-10.

**INDA** — Liquidación por agente instruido. Un método de liquidación donde los fondos se liquidan en los libros del agente instruido, donde el agente del deudor mantiene una cuenta nostro.

**INGA** — Liquidación por agente instructor. Un método de liquidación donde los fondos se liquidan en los libros del agente instructor, donde el agente instruido mantiene una cuenta nostro.

**InstrId** — Identificación de instrucción. Una referencia punto a punto entre agentes adyacentes en la cadena de pago. Puede cambiar en cada salto.

**IntrBkSttlmAmt** — Importe de liquidación interbancaria. El importe que se liquida entre el agente instructor y el agente instruido, en la moneda de liquidación.

**ISO 20022** — Un estándar internacional para el intercambio electrónico de datos entre instituciones financieras. Define un modelo de datos común y formatos de mensajes basados en XML para pagos, valores, financiación del comercio y otros dominios financieros.

## L

**LEI** — Identificador de entidad jurídica (ISO 17442). Un código alfanumérico de 20 caracteres que identifica de forma única a las entidades jurídicas que participan en transacciones financieras. Utilizado en OrgId/LEI para partes y FinInstnId/LEI para agentes.

## M

**MsgId** — Identificación de mensaje. Un identificador único para el sobre del mensaje, asignado por el agente emisor. Cambia en cada salto de la cadena de pago.

**MT** — Tipo de mensaje. El formato de mensaje heredado de SWIFT (p. ej., MT103 para transferencias de crédito de clientes, MT202 para transferencias entre instituciones financieras). Será reemplazado por mensajes MX ISO 20022.

**MX** — El formato de mensaje XML ISO 20022 utilizado por SWIFT. Los mensajes MX reemplazan a los mensajes MT para pagos transfronterizos bajo CBPR+.

## N

**NbOfTxs** — Número de transacciones. Un elemento de la cabecera de grupo que indica cuántas transacciones individuales están contenidas en el mensaje.

## P

**pacs** — Compensación y liquidación de pagos. El dominio de negocio ISO 20022 que cubre los mensajes de pago interbancarios.

**pacs.002** — Informe de estado de pago FI a FI. Informa del estado de procesamiento (aceptado, rechazado, pendiente, liquidado) de una instrucción de pago anterior.

**pacs.003** — Débito directo de cliente FI a FI. Transporta una instrucción de débito directo de cliente entre bancos para la recaudación de fondos.

**pacs.004** — Devolución de pago. Devuelve los fondos liquidados a través de la cadena de pago cuando un pago no puede ser aplicado.

**pacs.007** — Reversión de pago FI a FI. Revierte una instrucción de pago del emisor original a través de la cadena.

**pacs.008** — Transferencia de crédito de cliente FI a FI. El principal mensaje interbancario para transferencias de crédito de clientes. Reemplaza MT103.

**pacs.009** — Transferencia de crédito de institución financiera. Mueve fondos entre bancos por cuenta propia. Cubre financiación, pagos de cobertura y gestión de liquidez. Reemplaza MT202/MT202COV.

**pacs.010** — Débito directo de institución financiera. Permite a un banco debitar la cuenta propia de otro banco bajo un acuerdo bilateral.

**pacs.028** — Solicitud de estado de pago FI a FI. Solicita activamente el estado de un pago anterior cuando no ha llegado ninguna actualización pacs.002.

**pain** — Iniciación de pago. El dominio de negocio ISO 20022 que cubre los mensajes de cliente a banco (p. ej., pain.001 para la iniciación de transferencia de crédito).

**PII** — Información de identificación personal. Datos que pueden identificar a un individuo. pacs008 enmascara la PII en los registros estructurados.

**PstlAdr** — Dirección postal. La estructura de dirección utilizada para las partes en los mensajes pacs. Soporta formatos estructurados (StrtNm, TwnNm, Ctry) y no estructurados (AdrLine).

## R

**RJCT** — Rechazado. Un código de estado pacs.002 que indica que el pago ha sido rechazado.

**RmtInf** — Información de remesa. Datos de referencia de pago transportados en pacs.008. Soporta formatos no estructurados (texto libre, máx. 140 caracteres) y estructurados (referencias de documentos, importes, referencias de acreedor).

**RTGS** — Liquidación bruta en tiempo real. Un sistema de pago donde las transacciones se liquidan individualmente y en tiempo real (p. ej., TARGET2, Fedwire, CHAPS).

## S

**SCT** — Transferencia de crédito SEPA. El esquema de transferencia de crédito en euros gestionado por el EPC, utilizando pacs.008.

**SCT Inst** — Transferencia de crédito instantánea SEPA. La variante de pago instantáneo del SCT, que se liquida en menos de 10 segundos.

**SDD** — Débito directo SEPA. El esquema de débito directo en euros gestionado por el EPC, utilizando pacs.003.

**SEPA** — Zona Única de Pagos en Euros. Una iniciativa de integración de pagos que cubre transferencias de crédito, débitos directos y pagos con tarjeta en euros en 36 países europeos.

**SLEV** — Nivel de servicio. Un código de portador de cargos obligatorio para SEPA. Significa que los cargos siguen las reglas del esquema sin deducciones del importe de la transferencia.

**STP** — Procesamiento directo automatizado. Procesamiento automatizado de pagos de extremo a extremo sin intervención manual.

**SttlmMtd** — Método de liquidación. Define cómo se produce la liquidación interbancaria: CLRG (sistema de compensación), INDA (agente instruido), INGA (agente instructor) o COVE (pago de cobertura).

## T

**TxId** — Identificación de transacción. Una referencia interbancaria asignada por el primer agente instructor. No debe ser modificada por agentes posteriores.

## U

**UETR** — Referencia única de transacción de extremo a extremo. Un identificador UUID v4 generado por el agente del deudor y transportado sin cambios a través de todas las etapas de un pago para el seguimiento gpi.

## X

**XSD** — Definición de esquema XML. El esquema formal que define la estructura, los elementos y los tipos de datos de un mensaje XML ISO 20022.

**XXE** — Entidad externa XML. Una vulnerabilidad de seguridad en el análisis XML. pacs008 previene ataques XXE utilizando defusedxml.

## Referencias

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

