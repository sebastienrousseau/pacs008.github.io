---
title: pacs.028.001.05 — FI to FI Payment Status Request | 한국어
description: pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO 이름** | FIToFIPaymentStatusRequestV05 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 5 |

## 개요

pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더
- **TxInf** — 조회 대상 결제를 식별하는 거래 정보
- **OrgnlGrpInf** — 원본 메시지를 참조하는 원본 그룹 정보
- **OrgnlInstrId** — 원본 결제의 원본 지시 식별자
- **OrgnlEndToEndId** — 추적성을 위한 원본 엔드투엔드 식별자

## 비즈니스 컨텍스트

- 처리 중인 결제 지시에 대한 능동적 상태 조회 가능
- 지연되거나 누락된 결제를 조사하는 운영팀 지원
- 대기하지 않고 상태 통신을 개시함으로써 pacs.002를 보완
- 예외 처리 및 SLA 모니터링 워크플로에서 사용

## CBPR+ 및 스키마 컨텍스트

- MT199 상태 조회 패턴 및 수동 SWIFT 메시지 쿼리를 대체
- CBPR+는 원본 메시지 식별자에 연결된 구조화된 상태 요청 지원
- UETR 기반 gpi 추적으로 수동 조회 필요성 감소
- 자동화된 결제 운영 대시보드에 점점 통합됨

## 메시지 흐름

지시 에이전트는 특정 결제의 상태를 요청하기 위해 피지시 에이전트에게 pacs.028을 전송합니다. 피지시 에이전트는 현재 처리 상태가 포함된 pacs.002로 응답합니다.

## 관련 메시지

- [`pacs.002.001.12`](/ko/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/ko/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/ko/pacs.009.001.10/) — Financial Institution Credit Transfer

