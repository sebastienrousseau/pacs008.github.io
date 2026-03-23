---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO 이름** | FinancialInstitutionCreditTransferV10 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 10 |

## 개요

pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 27 February 2025; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더
- **CdtTrfTxInf** — 은행 간 결제 금액이 포함된 신용이체 거래 정보
- **Dbtr / DbtrAgt** — 채무자 기관 및 에이전트 식별
- **Cdtr / CdtrAgt** — 채권자 기관 및 에이전트 식별
- **IntrBkSttlmAmt** — 결제 통화로 표시된 은행 간 결제 금액

## 비즈니스 컨텍스트

- 은행 간 자기 계정 이체 및 커버 결제에 사용
- 환거래 은행 파트너 간 유동성 관리 지원
- 커버 방식으로 결제되는 고객 신용이체의 커버 레그를 포함
- 금융기관 간 자금 운용 및 조달 업무 가능

| 핵심 데이터 요소 | 비즈니스 컨텍스트 |
|---|---|
| **GrpHdr** — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더 | 은행 간 자기 계정 이체 및 커버 결제에 사용 |
| **CdtTrfTxInf** — 은행 간 결제 금액이 포함된 신용이체 거래 정보 | 환거래 은행 파트너 간 유동성 관리 지원 |
| **Dbtr / DbtrAgt** — 채무자 기관 및 에이전트 식별 | 커버 방식으로 결제되는 고객 신용이체의 커버 레그를 포함 |
| **Cdtr / CdtrAgt** — 채권자 기관 및 에이전트 식별 | 금융기관 간 자금 운용 및 조달 업무 가능 |
| **IntrBkSttlmAmt** — 결제 통화로 표시된 은행 간 결제 금액 | 채무자 기관은 자체 자금을 이체하기 위해 채권자 기관에 pacs.009를 전송합니다. 커버 방식 결제의 경우 pacs.009가 자금 조달 레그를 제공하고 pacs.008이 별도 경로로 고객 지시를 전달합니다. |

## CBPR+ 및 스키마 컨텍스트

- 기관 간 이체에서 MT202 및 MT202COV를 대체
- 커버 방식 흐름에서 pacs.009를 기반 pacs.008 고객 지시와 페어링
- 구조화된 당사자 데이터 및 LEI 식별이 점점 더 요구됨
- SWIFT gpi가 환거래 은행 투명성을 위해 pacs.009를 포괄

## 메시지 흐름

채무자 기관은 자체 자금을 이체하기 위해 채권자 기관에 pacs.009를 전송합니다. 커버 방식 결제의 경우 pacs.009가 자금 조달 레그를 제공하고 pacs.008이 별도 경로로 고객 지시를 전달합니다.

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## 관련 메시지
| 메시지 유형 | 설명 | 개요 |
|---|---|---|
| [`pacs.008.001.13`](/ko/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다. |
| [`pacs.002.001.12`](/ko/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다. |
| [`pacs.010.001.05`](/ko/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다. |

