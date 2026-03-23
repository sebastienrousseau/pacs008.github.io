---
title: pacs.003.001.09 | Débito directo de cliente FI a FI | pacs008
description: El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — Débito directo de cliente FI a FI

| | |
|---|---|
| **Nombre ISO** | FIToFICustomerDirectDebitV09 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 9 |

## Descripción general

El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

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

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación | Soporta esquemas SEPA Core y B2B de adeudo directo |
| **DrctDbtTxInf** — Información de transacción de adeudo directo con importe y partes | Se utiliza para cobro de pagos recurrentes como suscripciones, facturas y amortizaciones de préstamos |
| **Cdtr** — Identificación del acreedor y datos de cuenta | Requiere una referencia de mandato válida entre deudor y acreedor |
| **CdtrAgt** — Identificación del agente del acreedor (institución cobradora) | Permite el cobro masivo de múltiples instrucciones de adeudo directo en un solo mensaje |
| **DbtrAgt** — Identificación del agente del deudor (institución pagadora) | El agente del acreedor inicia pacs.003 hacia el agente del deudor para cobrar fondos. El agente del deudor valida el mandato, comprueba la cobertura de la cuenta y liquida o devuelve la transacción. |

## Contexto CBPR+ y esquemas

- Los requisitos de dirección estructurada e identificación de partes se aplican igualmente a los adeudos directos
- Los datos relativos al mandato deben estar completamente estructurados a partir de noviembre de 2026
- Sustituye los formatos de adeudo directo tipo MT104 en flujos transfronterizos
- La validación de la identificación del esquema del acreedor se aplica cada vez más

## Flujo de mensaje

El agente del acreedor inicia pacs.003 hacia el agente del deudor para cobrar fondos. El agente del deudor valida el mandato, comprueba la cobertura de la cuenta y liquida o devuelve la transacción.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.003.001.09 | Implementación actual en pacs008 | Útil para la modelización de referencias de adeudo directo en el proyecto actual. |
| pacs.003.001.10-11 | Revisiones posteriores del catálogo | Revise versiones posteriores para cambios de mandato, estado e interoperabilidad antes de un uso greenfield. |

## Fragmento XML comentado

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### Comentarios de campos

- `EndToEndId`: Mantenga separados los identificadores de mandato y cobro de las referencias de facturas comerciales.
- `IntrBkSttlmAmt`: Valide la precisión del importe del adeudo y las reglas de divisa antes de generar el XML.
- `Dbtr` / `Cdtr`: El éxito del adeudo directo suele depender más de la calidad de la cuenta y del mandato que de la estructura XML.

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.004.001.11`](/es/pacs.004.001.11/) | Devolución de pago | El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora. |
| [`pacs.007.001.11`](/es/pacs.007.001.11/) | Reverso de pago FI a FI | El mensaje pacs.007 se utiliza para revertir una instrucción de pago enviada previamente que aún no ha sido liquidada o para solicitar la reversión de un pago liquidado. A diferencia de pacs.004 (devolución), es iniciado por el agente ordenante original. |
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |

