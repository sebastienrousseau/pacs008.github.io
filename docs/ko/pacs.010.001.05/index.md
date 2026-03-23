---
title: pacs.010.001.05 | 금융기관 간 직접출금 | pacs008
description: pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — 금융기관 간 직접출금

| | |
|---|---|
| **ISO 이름** | FinancialInstitutionDirectDebitV05 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 5 |

## 개요

pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더
- **DrctDbtTxInf** — 추심 금액이 포함된 자동이체 거래 정보
- **Cdtr / CdtrAgt** — 채권자 기관 및 에이전트 식별
- **Dbtr / DbtrAgt** — 채무자 기관 및 에이전트 식별
- **IntrBkSttlmAmt** — 결제 통화로 표시된 은행 간 결제 금액

## 비즈니스 컨텍스트

- 금융기관 간 은행 간 자동이체 추심 지원
- 수수료 추심, 마진 콜 및 기관 간 결제 의무에 사용
- 참가 기관 간 사전 합의된 양자 약정 필요
- 기관의 현금 관리 및 은행 간 결제 주기에 필수적

| 핵심 데이터 요소 | 비즈니스 컨텍스트 |
|---|---|
| **GrpHdr** — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더 | 금융기관 간 은행 간 자동이체 추심 지원 |
| **DrctDbtTxInf** — 추심 금액이 포함된 자동이체 거래 정보 | 수수료 추심, 마진 콜 및 기관 간 결제 의무에 사용 |
| **Cdtr / CdtrAgt** — 채권자 기관 및 에이전트 식별 | 참가 기관 간 사전 합의된 양자 약정 필요 |
| **Dbtr / DbtrAgt** — 채무자 기관 및 에이전트 식별 | 기관의 현금 관리 및 은행 간 결제 주기에 필수적 |
| **IntrBkSttlmAmt** — 결제 통화로 표시된 은행 간 결제 금액 | 채권자 기관은 사전 합의된 약정에 따라 자금을 추심하기 위해 채무자 기관에 pacs.010을 전송합니다. 채무자 기관은 요청을 검증하고 자동이체를 결제하거나 거절합니다. |

## CBPR+ 및 스키마 컨텍스트

- 은행 간 자동이체 처리에서 MT204의 요소를 대체
- 구조화된 당사자 식별은 다른 pacs 메시지와 동일한 요구사항을 따름
- 기관 식별자(BIC, LEI)의 유효성 검증이 필수
- 시장 인프라 전반의 ISO 20022 완전 채택 로드맵에 포함

## 메시지 흐름

채권자 기관은 사전 합의된 약정에 따라 자금을 추심하기 위해 채무자 기관에 pacs.010을 전송합니다. 채무자 기관은 요청을 검증하고 자동이체를 결제하거나 거절합니다.

## 버전 차이 표

| 버전 범위 | 중요한 이유 | 구현 시 핵심 사항 |
|---|---|---|
| pacs.010.001.05 | pacs008의 현재 구현 | 현재 프로젝트에서 기관 간 자동이체 지원을 위한 기준점입니다. |
| pacs.010.001.06 | 후속 카탈로그 개정판 | 더 새로운 인프라 요구사항을 채택하기 전에 검토하세요. |

## 주석이 달린 XML 예제

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### 필드 해설

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: 기관 간 자동이체 금액에는 명시적인 양자 허용 한도 통제가 필요한 경우가 많습니다.
- `Cdtr` / `Dbtr`: 기관 역할을 명확히 기록하세요. 이것은 소매 고객 대상 차변 모델이 아닙니다.

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 관련 메시지
| 메시지 유형 | 설명 | 개요 |
|---|---|---|
| [`pacs.009.001.10`](/ko/pacs.009.001.10/) | 금융기관 간 신용이체 | pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다. |
| [`pacs.002.001.12`](/ko/pacs.002.001.12/) | 금융기관 간 지급 상태 보고 | pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다. |
| [`pacs.003.001.09`](/ko/pacs.003.001.09/) | 금융기관 간 고객 직접출금 | pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다. |

