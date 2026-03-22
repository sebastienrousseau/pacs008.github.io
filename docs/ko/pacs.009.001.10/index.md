---
title: pacs.009.001.10 — Financial Institution Credit Transfer | 한국어
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

## CBPR+ 및 스키마 컨텍스트

- 기관 간 이체에서 MT202 및 MT202COV를 대체
- 커버 방식 흐름에서 pacs.009를 기반 pacs.008 고객 지시와 페어링
- 구조화된 당사자 데이터 및 LEI 식별이 점점 더 요구됨
- SWIFT gpi가 환거래 은행 투명성을 위해 pacs.009를 포괄

## 메시지 흐름

채무자 기관은 자체 자금을 이체하기 위해 채권자 기관에 pacs.009를 전송합니다. 커버 방식 결제의 경우 pacs.009가 자금 조달 레그를 제공하고 pacs.008이 별도 경로로 고객 지시를 전달합니다.

## 관련 메시지

- [`pacs.008.001.13`](/ko/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/ko/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/ko/pacs.010.001.05/) — Financial Institution Direct Debit

