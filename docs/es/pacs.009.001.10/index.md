---
title: pacs.009.001.10 | Transferencia de crédito entre instituciones financieras | pacs008
description: El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta...
lang: es-ES
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Transferencia de crédito entre instituciones financieras

| | |
|---|---|
| **Nombre ISO** | FinancialInstitutionCreditTransferV10 |
| **Estado de registro** | Registered |
| **Año** | 2019 |
| **Versión** | 10 |

## Descripción general

El mensaje pacs.009 se utiliza para transferencias entre instituciones financieras cuando la transferencia es por cuenta propia de la institución. Soporta financiación interbancaria, pagos de cobertura y gestión de liquidez.

> Revisado por última vez frente a fuentes primarias el 23 de marzo de 2026. Fecha de referencia del catálogo ISO 20022: 2025-02-27; los enlaces a las fuentes se muestran a continuación.

## Elementos de datos clave

- **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación
- **CdtTrfTxInf** — Información de transacción de transferencia con importe de liquidación interbancaria
- **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente
- **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente
- **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación

## Contexto de negocio

- Se utiliza para transferencias de cuenta propia entre bancos y pagos de cobertura
- Soporta gestión de liquidez entre socios de banca corresponsal
- Lleva el tramo de cobertura de las transferencias de clientes liquidadas por método de cobertura
- Permite operaciones de tesorería y financiación entre instituciones financieras

| Elementos de datos clave | Contexto de negocio |
|---|---|
| **GrpHdr** — Cabecera de grupo con identificación del mensaje e información de liquidación | Se utiliza para transferencias de cuenta propia entre bancos y pagos de cobertura |
| **CdtTrfTxInf** — Información de transacción de transferencia con importe de liquidación interbancaria | Soporta gestión de liquidez entre socios de banca corresponsal |
| **Dbtr / DbtrAgt** — Institución deudora e identificación de su agente | Lleva el tramo de cobertura de las transferencias de clientes liquidadas por método de cobertura |
| **Cdtr / CdtrAgt** — Institución acreedora e identificación de su agente | Permite operaciones de tesorería y financiación entre instituciones financieras |
| **IntrBkSttlmAmt** — Importe de liquidación interbancaria en la divisa de liquidación | La institución deudora envía pacs.009 a la institución acreedora para transferir sus propios fondos. Para pagos por cobertura, pacs.009 proporciona el tramo de financiación mientras pacs.008 lleva la instrucción del cliente por un camino separado. |

## Contexto CBPR+ y esquemas

- Sustituye MT202 y MT202COV para transferencias entre instituciones
- Los flujos de método de cobertura emparejan pacs.009 con la instrucción de cliente pacs.008 subyacente
- Los datos estructurados de partes y la identificación LEI son cada vez más requeridos
- SWIFT gpi cubre pacs.009 para transparencia de banca corresponsal

## Flujo de mensaje

La institución deudora envía pacs.009 a la institución acreedora para transferir sus propios fondos. Para pagos por cobertura, pacs.009 proporciona el tramo de financiación mientras pacs.008 lleva la instrucción del cliente por un camino separado.

## Tabla de diferencias de versión

| Rango de versiones | Por qué importa | Conclusión de implementación |
|---|---|---|
| pacs.009.001.10 | Implementación actual en pacs008 | Coincide con el soporte actual del proyecto para flujos de transferencia de crédito FI. |
| pacs.009.001.11-12 | Revisiones posteriores del catálogo | Importante para planificar la hoja de ruta en entornos de banca corresponsal y pagos de cobertura. |

## Fragmento XML comentado

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Comentarios de campos

- `InstrId`: Utilice un identificador del tramo de liquidez que pueda seguir vinculado al flujo de cliente subyacente.
- `IntrBkSttlmAmt`: Los flujos por cuenta propia y de cobertura suelen requerir controles de tesorería más estrictos sobre importes y fechas de liquidación.
- `Dbtr` / `Cdtr`: Se trata de partes institucionales, no de roles de cliente minorista; modélelas en consecuencia.

## Comparar pacs.009 vs pacs.008

| Dimensión | pacs.009.001.10 | Mensaje de comparación |
|---|---|---|
| Propósito principal | Transferencia de crédito por cuenta propia de la institución o tramo de cobertura | Transferencia de crédito de cliente |
| Responsable de negocio | Operaciones de tesorería, corresponsalía y liquidez | Operaciones de pagos de clientes |
| Combinaciones típicas | pacs.002, pacs.004 y flujos pacs.008 vinculados | pacs.002, pacs.004, pacs.007, pacs.028 |
| Supuesto erróneo a evitar | Que es simplemente una pacs.008 más técnica | Que puede gestionar sin problemas flujos de liquidez entre instituciones |

## Referencias primarias

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## Mensajes relacionados
| Tipo de mensaje | Descripción | Descripción general |
|---|---|---|
| [`pacs.008.001.13`](/es/pacs.008.001.13/) | Transferencia de crédito de cliente FI a FI | El mensaje pacs.008 es la instrucción de pago central intercambiada entre instituciones financieras para transferir fondos en nombre de un cliente. Contiene información de deudor, acreedor, importe y remesa para una o más transacciones de transferencia. |
| [`pacs.002.001.12`](/es/pacs.002.001.12/) | Informe de estado de pagos FI a FI | El mensaje pacs.002 es enviado por una institución financiera para informar del estado de una instrucción de pago enviada previamente. Proporciona información de confirmación, rechazo o estado pendiente para transacciones individuales dentro de un mensaje de pago. |
| [`pacs.010.001.05`](/es/pacs.010.001.05/) | Débito directo entre instituciones financieras | El mensaje pacs.010 se utiliza entre instituciones financieras para transacciones de adeudo directo por cuenta propia de la institución. Permite a una institución cobrar fondos directamente de la cuenta de otra institución. |

