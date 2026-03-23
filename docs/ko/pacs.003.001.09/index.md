---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO 이름** | FIToFICustomerDirectDebitV09 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 9 |

## 개요

pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 27 February 2025; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더
- **DrctDbtTxInf** — 금액 및 당사자 정보가 포함된 자동이체 거래 정보
- **Cdtr** — 채권자 식별 및 계좌 세부정보
- **CdtrAgt** — 채권자 에이전트(추심 기관) 식별
- **DbtrAgt** — 채무자 에이전트(지급 기관) 식별

## 비즈니스 컨텍스트

- SEPA 코어 및 B2B 자동이체 스킴 지원
- 구독, 공과금, 대출 상환 등 정기 결제 추심에 사용
- 채무자와 채권자 간 유효한 위임 참조 필요
- 단일 메시지 내 복수 자동이체 지시의 일괄 추심 가능

| 핵심 데이터 요소 | 비즈니스 컨텍스트 |
|---|---|
| **GrpHdr** — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더 | SEPA 코어 및 B2B 자동이체 스킴 지원 |
| **DrctDbtTxInf** — 금액 및 당사자 정보가 포함된 자동이체 거래 정보 | 구독, 공과금, 대출 상환 등 정기 결제 추심에 사용 |
| **Cdtr** — 채권자 식별 및 계좌 세부정보 | 채무자와 채권자 간 유효한 위임 참조 필요 |
| **CdtrAgt** — 채권자 에이전트(추심 기관) 식별 | 단일 메시지 내 복수 자동이체 지시의 일괄 추심 가능 |
| **DbtrAgt** — 채무자 에이전트(지급 기관) 식별 | 채권자 에이전트는 자금을 추심하기 위해 채무자 에이전트를 향해 pacs.003을 개시합니다. 채무자 에이전트는 위임을 검증하고 계좌 잔액을 확인한 후 거래를 결제하거나 반환합니다. |

## CBPR+ 및 스키마 컨텍스트

- 구조화된 주소 및 당사자 식별 요구사항이 자동이체에도 동일하게 적용
- 위임 관련 데이터는 2026년 11월까지 완전히 구조화되어야 함
- 국경 간 흐름에서 레거시 MT104 형식의 자동이체 포맷을 대체
- 채권자 스킴 식별의 유효성 검증이 점점 강화됨

## 메시지 흐름

채권자 에이전트는 자금을 추심하기 위해 채무자 에이전트를 향해 pacs.003을 개시합니다. 채무자 에이전트는 위임을 검증하고 계좌 잔액을 확인한 후 거래를 결제하거나 반환합니다.

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 관련 메시지
| 메시지 유형 | 설명 | 개요 |
|---|---|---|
| [`pacs.004.001.11`](/ko/pacs.004.001.11/) | Payment Return | pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다. |
| [`pacs.007.001.11`](/ko/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007 메시지는 아직 결제되지 않은 이전에 전송된 결제 지시를 취소하거나 결제된 결제의 취소를 요청하는 데 사용됩니다. pacs.004(반환)와 달리 원래의 지시 에이전트가 개시합니다. |
| [`pacs.002.001.12`](/ko/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다. |

