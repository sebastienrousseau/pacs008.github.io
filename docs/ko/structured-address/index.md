---
title: "2026년 11월 구조화 주소 마감 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ko-KR
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
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

이는 최대 요건이 아니라 최소 요건입니다. 2026년 11월 14일부터 적용 대상 당사자는 도시명을 TwnNm에, 국가를 두 자리 ISO 3166 코드로 Ctry에 기재해야 합니다. 도로명, 건물번호, 우편번호는 주소 행에 남아 있어도 됩니다. 이것이 하이브리드 주소이며 허용됩니다. 폐지되는 것은 완전 비구조화 주소, 즉 구조화된 도시와 국가 없이 전체 주소가 자유 텍스트로만 기재된 경우뿐입니다. BIC로만 식별되는 기관은 해당되지 않습니다.

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

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## 타임라인

| Date | Scheme | Change | Rule |
|---|---|---|---|
| `2025-11-22` | CBPR+ | Hybrid postal address option available | `CBPR-ADDR-004` |
| `2025-11-22` | CBPR+ | MT/MX coexistence for payment instructions ends | — |
| `2026-11-14` | CBPR+ | Fully unstructured postal address rejected | `CBPR-ADDR-001` |
| `2026-11-14` | CHAPS | CHAPS validation library rejects unstructured addresses | `CHAPS-ADDR-001` |
| `2026-11-14` | CBPR+ | MT101 interbank coexistence ends; contingency relays to `pain.001` | — |
| `2026-11-14` | Swift | `camt.110` investigation requests must be receivable | — |
| `2026-11-14` | Swift | Annual Standards Release cycle begins | — |
| `2027-11` | CHAPS | Purpose codes mandatory on all payments (announced) | `CHAPS-PURP-001` |
| `2027-11` | CHAPS | Structured remittance information mandatory (announced) | `CHAPS-RMT-001` |
| `2027-11` | Swift | `camt.110` and `camt.111` both mandatory (announced) | — |

## 지금 해야 할 일

- 채무자, 채권자, 에이전트 기록 전반에 걸쳐 현재 주소 데이터 품질을 감사합니다.
- 기존 비구조화 주소 필드를 구조화된 형식(도로, 건물, 우편번호, 도시, 국가)으로 매핑합니다.
- pacs008을 사용하여 사전 생성 파이프라인에 주소 검증을 추가합니다.
- 마감일 전에 대표적인 결제 데이터로 테스트합니다.

## 참고 자료

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

