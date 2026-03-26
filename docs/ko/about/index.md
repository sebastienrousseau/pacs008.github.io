---
title: "pacs008 소개 | pacs008"
description: pacs008이 하는 일과 대상 사용자. 금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원.
lang: ko-KR
lastUpdated: true
image: /logo.webp
howtoName: "How to implement ISO 20022 pacs.008 payment messages"
howtoDescription: "Step-by-step checklist for rolling out ISO 20022 pacs.008 message generation and validation."
howto:
  - name: "Step 1"
    text: "Pick the right message family for the business event before writing templates."
  - name: "Step 2"
    text: "Validate business data before XML generation so that schema errors are not the first signal."
  - name: "Step 3"
    text: "Treat BIC, IBAN, remittance, and postal-address quality as a release criterion, not a later cleanup."
  - name: "Step 4"
    text: "Regression-test each scheme or bank rule change with representative payment data."
---

# pacs008 소개

pacs008은 금융기관 간 ISO 20022 고객 신용 이체 워크플로를 자동화하기 위한 Python 툴킷입니다.

## 기능

- `pacs.008` 및 관련 pacs 메시지 정의용 XML 생성
- 스키마에 대해 데이터 및 XML 검증
- 자동화 워크플로를 위한 FastAPI 서비스 노출
- 로컬 실행 및 CI 파이프라인용 CLI 제공
- CSV, JSON, JSONL, SQLite, Parquet 등 구조화된 데이터 소스 지원
- IBAN(75개국, ISO 7064 체크섬) 및 BIC(ISO 9362) 식별자 검증
- 음역 및 필드 길이 제한으로 SWIFT 준수를 위한 결제 데이터 정제
- 메모리 효율적 처리를 위해 설정 가능한 청크로 대규모 데이터셋 스트림 처리
- 컨테이너화된 API 배포를 위한 Docker 이미지 제공

## 대상 사용자

- 결제 운영 팀
- 내부 결제 처리 인프라를 구축하는 플랫폼 엔지니어
- ISO 20022로의 마이그레이션 프로그램
- 아웃바운드 결제 메시지를 검증하는 컴플라이언스 및 QA 팀

## 검증

XML이 작성되기 전에 여러 검증 계층이 작동합니다:

- 20개의 메시지 유형별 스키마에 대한 JSON Schema 검증
- 75개국을 대상으로 하는 IBAN 형식 및 체크섬 검증
- ISO 9362에 따른 BIC 구조 및 국가 코드 검증
- 공식 ISO 20022 스키마에 대한 생성된 XML의 XSD 검증

## 보안

pacs008은 처리 파이프라인의 모든 계층에 심층 방어를 적용합니다:

- 모든 XML 파싱 작업에 대한 defusedxml을 통한 XXE 방지
- 엄격한 디렉토리 허용 목록을 통한 경로 탐색 보호
- GDPR 및 PCI DSS 준수를 지원하는 구조화된 JSON 로그에서의 PII 마스킹
- SQLite 소스에 대한 엄격한 테이블명 살균을 통한 SQL 인젝션 방지

## 2026 대비

pacs008은 2026년에 관련된 운영 마감 기한과 데이터 품질 요구 사항에 맞춰 설계되었습니다:

- CBPR+ 및 스키마 마이그레이션을 위한 구조화 및 하이브리드 우편 주소 처리
- 채무자, 채권자, 에이전트 데이터 품질에 대한 강화된 검증
- 레거시 및 현재 pacs.008 리비전에 걸친 버전 인식 생성
- CI, 배치 작업 및 내부 결제 서비스에 맞는 자동화 경로

## 운영 초점

pacs008은 메시지 정의 참조를 넘어 운영 구현을 지원합니다:

- 실제 소스 데이터에서 XML 생성
- 전달 전 검증
- 결제 체인 및 다운스트림 형식 모델링
- 스키마별 변경 사항을 코드에서 테스트 가능하게 만들기

## 구현 체크리스트

- 템플릿을 작성하기 전에 업무 이벤트에 맞는 메시지 패밀리를 먼저 결정합니다.
- 스키마 오류가 첫 경고가 되지 않도록 XML 생성 전에 업무 데이터를 검증합니다.
- BIC, IBAN, 송금 정보, 주소 품질을 사후 정제가 아니라 릴리스 기준으로 다룹니다.
- 스킴 또는 은행별 규칙이 바뀔 때마다 대표 결제 데이터로 회귀 테스트를 수행합니다.

