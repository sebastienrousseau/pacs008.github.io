---
title: pacs.004.001.11 | 지급 반환 | pacs008
description: pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — 지급 반환

| | |
|---|---|
| **ISO 이름** | PaymentReturnV11 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 11 |

## 개요

pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더
- **TxInf** — 반환 금액 및 당사자 정보가 포함된 거래 정보
- **OrgnlGrpInf** — 원본 메시지에 연결되는 원본 그룹 정보
- **RtrRsnInf** — 구조화된 사유 코드가 포함된 반환 사유 정보
- **OrgnlTxRef** — 매칭 및 대사를 위한 원본 거래 참조

## 비즈니스 컨텍스트

- 수취인 계좌에 입금이 불가능한 경우 결제 후 반환 처리
- 발신자가 자금 반환을 요청하는 회수 시나리오 지원
- 규제 및 운영 투명성을 위한 구조화된 반환 사유 코드 포함
- 신용이체 반환(pacs.008) 및 자동이체 반환(pacs.003) 모두에 적용

| 핵심 데이터 요소 | 비즈니스 컨텍스트 |
|---|---|
| **GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더 | 수취인 계좌에 입금이 불가능한 경우 결제 후 반환 처리 |
| **TxInf** — 반환 금액 및 당사자 정보가 포함된 거래 정보 | 발신자가 자금 반환을 요청하는 회수 시나리오 지원 |
| **OrgnlGrpInf** — 원본 메시지에 연결되는 원본 그룹 정보 | 규제 및 운영 투명성을 위한 구조화된 반환 사유 코드 포함 |
| **RtrRsnInf** — 구조화된 사유 코드가 포함된 반환 사유 정보 | 신용이체 반환(pacs.008) 및 자동이체 반환(pacs.003) 모두에 적용 |
| **OrgnlTxRef** — 매칭 및 대사를 위한 원본 거래 참조 | 피지시 에이전트는 이전에 결제된 자금을 반환하기 위해 결제 체인을 통해 pacs.004를 반송합니다. 체인 내 각 에이전트가 반환을 처리하고 관련 계좌에 자금을 환원합니다. |

## CBPR+ 및 스키마 컨텍스트

- MT103 RETURN 및 커버 방식 반환 메시징을 대체
- 반환 사유 코드가 ISO 20022에 따라 표준화되고 기계 판독 가능
- CBPR+는 매칭을 위해 완전한 원본 거래 참조 데이터를 요구
- SWIFT gpi 추적이 엔드투엔드 가시성을 위해 반환 거래로 확장

## 메시지 흐름

피지시 에이전트는 이전에 결제된 자금을 반환하기 위해 결제 체인을 통해 pacs.004를 반송합니다. 체인 내 각 에이전트가 반환을 처리하고 관련 계좌에 자금을 환원합니다.

## 버전 차이 표

| 버전 범위 | 중요한 이유 | 구현 시 핵심 사항 |
|---|---|---|
| pacs.004.001.11 | pacs008의 현재 구현 | 현재 지급 반환 템플릿과 정렬됩니다. |
| pacs.004.001.12-14 | 이후 카탈로그 개정판 | 스킴 업그레이드나 신규 상대 기관이 범위에 포함된다면 이후 반환 메시지 개정판을 검토하세요. |

## 주석이 달린 XML 예제

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

### 필드 해설

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 사유 코드의 품질은 후속 고객 커뮤니케이션과 운영 경로 지정에 매우 중요합니다.

## 비교 pacs.004 vs pacs.007

| 비교 기준 | pacs.004.001.11 | 비교 메시지 |
|---|---|---|
| 주요 목적 | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| 가장 적합한 용도 | 결제 후 반환 처리 | 리콜, 오류 또는 사기 유발 리버설 처리 |

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## 관련 메시지
| 메시지 유형 | 설명 | 개요 |
|---|---|---|
| [`pacs.008.001.13`](/ko/pacs.008.001.13/) | 금융기관 간 고객 신용이체 | pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다. |
| [`pacs.003.001.09`](/ko/pacs.003.001.09/) | 금융기관 간 고객 직접출금 | pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다. |
| [`pacs.002.001.12`](/ko/pacs.002.001.12/) | 금융기관 간 지급 상태 보고 | pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다. |

