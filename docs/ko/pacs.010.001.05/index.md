---
title: pacs.010.001.05 — Financial Institution Direct Debit | 한국어
description: pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO 이름** | FinancialInstitutionDirectDebitV05 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 5 |

## 개요

pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.

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

## CBPR+ 및 스키마 컨텍스트

- 은행 간 자동이체 처리에서 MT204의 요소를 대체
- 구조화된 당사자 식별은 다른 pacs 메시지와 동일한 요구사항을 따름
- 기관 식별자(BIC, LEI)의 유효성 검증이 필수
- 시장 인프라 전반의 ISO 20022 완전 채택 로드맵에 포함

## 메시지 흐름

채권자 기관은 사전 합의된 약정에 따라 자금을 추심하기 위해 채무자 기관에 pacs.010을 전송합니다. 채무자 기관은 요청을 검증하고 자동이체를 결제하거나 거절합니다.

## 관련 메시지

- [`pacs.009.001.10`](/ko/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/ko/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/ko/pacs.003.001.09/) — FI to FI Customer Direct Debit

