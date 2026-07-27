---
title: "2026년 11월 구조화 주소 마감 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ko-KR
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "채무자, 채권자, 에이전트 기록 전반에 걸쳐 현재 주소 데이터 품질을 감사합니다."
  - name: "Step 2"
    text: "기존 비구조화 주소 필드를 구조화된 형식(도로, 건물, 우편번호, 도시, 국가)으로 매핑합니다."
  - name: "Step 3"
    text: "pacs008을 사용하여 사전 생성 파이프라인에 주소 검증을 추가합니다."
  - name: "Step 4"
    text: "마감일 전에 대표적인 결제 데이터로 테스트합니다."
---

# 2026년 11월 구조화 주소 마감

SWIFT는 2026년 11월부터 국경 간 결제 메시지에 구조화된 우편 주소를 요구합니다. 무엇이 변경되는지, 어떤 메시지가 영향을 받는지, pacs008이 팀의 준비를 어떻게 지원하는지 설명합니다.

## 무엇이 변경되는가

SWIFT CBPR+는 국경 간 결제 메시지에서 비구조화 우편 주소를 구조화된 주소 필드로 전환하고 있습니다. 2026년 11월 마감일 이후, 주요 당사자 주소 필드는 도로명, 건물 번호, 우편번호, 도시, 국가에 대한 개별 요소를 포함한 구조화된 형식을 사용해야 합니다.

## 왜 중요한가

- 비구조화 주소는 수동 수정 비율을 높이고 직통 처리를 지연시킵니다.
- 구조화된 주소는 당사자 이름을 위치 데이터에서 분리하여 제재 심사 정확도를 향상시킵니다.
- 규제 및 스킴 요구사항이 규정 준수와 보고를 위해 구조화된 데이터를 점점 더 의무화하고 있습니다.
- 주소 품질이 거래 상대방의 기대를 충족하지 못하면 국경 간 결제 거부율이 상승합니다.

## 영향을 받는 메시지

- **pacs.008** — 고객 신용 이체에서 채무자와 채권자의 우편 주소.
- **pacs.009** — 금융기관 간 신용 이체 및 커버 결제에서 기관 주소.
- **pacs.004** — 결제 반환에서 당사자 주소.
- **pacs.003** — 고객 자동이체에서 채권자와 채무자 주소.

## pacs008의 지원 방법

- XML 생성 전에 구조화 및 하이브리드 우편 주소 필드를 검증합니다.
- 마감일 이후 실패할 비구조화 주소 데이터에 플래그를 표시합니다.
- 마감일 이전의 하이브리드 형식과 마감일 이후의 구조화 전용 형식을 모두 지원합니다.
- 주소 품질 검사를 CI 파이프라인 및 배치 검증 워크플로에 통합합니다.

## 타임라인

- **2023년 3월** — SWIFT CBPR+가 ISO 20022로 국경 간 결제에서 가동 개시.
- **2025년 11월** — MT 및 MX 결제 지시의 공존 기간 종료.
- **2026년 11월** — CBPR+ 메시지에 대한 구조화된 우편 주소 요구사항 발효.

## 지금 해야 할 일

- 채무자, 채권자, 에이전트 기록 전반에 걸쳐 현재 주소 데이터 품질을 감사합니다.
- 기존 비구조화 주소 필드를 구조화된 형식(도로, 건물, 우편번호, 도시, 국가)으로 매핑합니다.
- pacs008을 사용하여 사전 생성 파이프라인에 주소 검증을 추가합니다.
- 마감일 전에 대표적인 결제 데이터로 테스트합니다.

## 참고 자료

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

