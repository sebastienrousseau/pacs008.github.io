---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO 이름** | FIToFICustomerCreditTransferV13 |
| **등록 상태** | Registered |
| **연도** | 2023 |
| **버전** | 13 |

## 개요

pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 27 February 2025; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 ID, 생성일, 거래 수 및 결제 정보가 포함된 그룹 헤더
- **CdtTrfTxInf** — 금액, 수수료 및 목적이 포함된 신용이체 거래 정보
- **Dbtr / DbtrAgt** — 채무자 및 채무자 에이전트 식별과 계좌 세부정보
- **Cdtr / CdtrAgt** — 채권자 및 채권자 에이전트 식별과 계좌 세부정보
- **RmtInf** — 구조화 또는 비구조화 결제 참조를 위한 송금 정보

## 비즈니스 컨텍스트

- 고객 발의 국경 간 및 국내 신용이체의 주요 메시지
- SEPA SCT, SEPA Instant, CBPR+ 및 국내 청산 시스템에서 사용
- 완전 자동 대사를 지원하기 위한 구조화된 송금 정보 포함
- 다구간 결제 체인에서 직렬, 커버 및 직접 결제 방식 지원

| 핵심 데이터 요소 | 비즈니스 컨텍스트 |
|---|---|
| **GrpHdr** — 메시지 ID, 생성일, 거래 수 및 결제 정보가 포함된 그룹 헤더 | 고객 발의 국경 간 및 국내 신용이체의 주요 메시지 |
| **CdtTrfTxInf** — 금액, 수수료 및 목적이 포함된 신용이체 거래 정보 | SEPA SCT, SEPA Instant, CBPR+ 및 국내 청산 시스템에서 사용 |
| **Dbtr / DbtrAgt** — 채무자 및 채무자 에이전트 식별과 계좌 세부정보 | 완전 자동 대사를 지원하기 위한 구조화된 송금 정보 포함 |
| **Cdtr / CdtrAgt** — 채권자 및 채권자 에이전트 식별과 계좌 세부정보 | 다구간 결제 체인에서 직렬, 커버 및 직접 결제 방식 지원 |
| **RmtInf** — 구조화 또는 비구조화 결제 참조를 위한 송금 정보 | 채무자 에이전트는 pacs.008을 생성하여 채권자 에이전트에게(직접 또는 중개기관을 통해) 전송합니다. 체인 내 각 에이전트가 지시를 검증, 보완 및 전달하여 최종적으로 채권자 에이전트가 수취인 계좌에 입금합니다. |

## CBPR+ 및 스키마 컨텍스트

- 국경 간 고객 신용이체에서 MT103 및 MT103+를 대체
- 2026년 11월 구조화 주소 기한이 모든 당사자 우편 주소에 적용
- SWIFT gpi는 UETR 기반 엔드투엔드 추적에 pacs.008을 요구
- 13번의 개정이 시장 인프라 전반에 걸친 스키마의 지속적 발전을 반영

## 메시지 흐름

채무자 에이전트는 pacs.008을 생성하여 채권자 에이전트에게(직접 또는 중개기관을 통해) 전송합니다. 체인 내 각 에이전트가 지시를 검증, 보완 및 전달하여 최종적으로 채권자 에이전트가 수취인 계좌에 입금합니다.

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## 지원 버전

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## 관련 메시지
| 메시지 유형 | 설명 | 개요 |
|---|---|---|
| [`pacs.002.001.12`](/ko/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다. |
| [`pacs.004.001.11`](/ko/pacs.004.001.11/) | Payment Return | pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다. |
| [`pacs.009.001.10`](/ko/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다. |

