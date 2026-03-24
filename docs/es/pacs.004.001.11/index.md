---
title: pacs.004.001.11 | Devolución de pago | pacs008
description: El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Devolución de pago

| | |
|---|---|
| **Nombre ISO** | PaymentReturnV11 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 11 |

## Descripción general

El mensaje pacs.004 se utiliza para devolver una transacción de pago liquidada previamente. Invierte el flujo de fondos cuando un pago no puede aplicarse, se envió por error o está siendo reclamado por la institución originadora.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación
- **TxInf** — Información de transacción con importe de devolución y partes
- **OrgnlGrpInf** — Información del grupo original vinculada al mensaje fuente
- **RtrRsnInf** — Información del motivo de devolución con códigos de razón estructurados
- **OrgnlTxRef** — Referencia de la transacción original para emparejamiento y conciliación

## Contexto de negocio

- Gestiona devoluciones posteriores a la liquidación cuando la cuenta del beneficiario no puede ser abonada
- Soporta escenarios de reclamación donde el originador solicita la devolución de fondos
- Lleva códigos de motivo de devolución estructurados para transparencia regulatoria y operativa
- Se aplica tanto a devoluciones de transferencias (pacs.008) como a devoluciones de adeudos directos (pacs.003)

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje y marca temporal de creación | Gestiona devoluciones posteriores a la liquidación cuando la cuenta del beneficiario no puede ser abonada |
| **TxInf** — Información de transacción con importe de devolución y partes | Soporta escenarios de reclamación donde el originador solicita la devolución de fondos |
| **OrgnlGrpInf** — Información del grupo original vinculada al mensaje fuente | Lleva códigos de motivo de devolución estructurados para transparencia regulatoria y operativa |
| **RtrRsnInf** — Información del motivo de devolución con códigos de razón estructurados | Se aplica tanto a devoluciones de transferencias (pacs.008) como a devoluciones de adeudos directos (pacs.003) |
| **OrgnlTxRef** — Referencia de la transacción original para emparejamiento y conciliación | El agente instruido envía pacs.004 a través de la cadena de pago para devolver fondos liquidados previamente. Cada agente en la cadena procesa la devolución y abona las cuentas correspondientes. |

## Contexto CBPR+ y esquemas

- Sustituye MT103 RETURN y la mensajería de devolución por método de cobertura
- Los códigos de motivo de devolución están estandarizados y son legibles por máquina bajo ISO 20022
- CBPR+ requiere datos completos de referencia de la transacción original para el emparejamiento
- El seguimiento SWIFT gpi se extiende a las transacciones de devolución para visibilidad de extremo a extremo

## Flujo de mensaje

El agente instruido envía pacs.004 a través de la cadena de pago para devolver fondos liquidados previamente. Cada agente en la cadena procesa la devolución y abona las cuentas correspondientes.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.004.001.11 | Implementación actual en pacs008 | Se alinea con las plantillas actuales para devoluciones de pagos. |
| pacs.004.001.12-14 | Revisiones posteriores del catálogo | Revise versiones posteriores de los mensajes de devolución cuando haya actualizaciones del esquema o nuevas contrapartes en alcance. |

## Fragmento XML comentado

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Comentarios de campos

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: La calidad de los códigos de motivo es crucial para la comunicación posterior con el cliente y el encaminamiento operativo.

## Comparar pacs.004 vs pacs.007

| Dimensión | pacs.004.001.11 | Mensaje de comparación |
|---|---|---|
| Propósito principal | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| Más adecuado para | Gestión de devoluciones tras la liquidación | Gestión de reversiones por recall, error o fraude |

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | Transferencia de crédito de cliente FI a FI | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.003.001.09`](/es/pacs.003.001.09/) | Débito directo de cliente FI a FI | El mensaje pacs.003 se intercambia entre instituciones financieras para ejecutar una instrucción de adeudo directo de cliente. Permite al banco del acreedor cobrar fondos del banco del deudor en nombre del acreedor. |
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |

