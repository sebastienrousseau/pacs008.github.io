---
title: "스킴 변경 기록 | pacs008"
description: "메시지 수용 여부를 좌우하는 모든 규칙 변경을 발효일별로 묶었습니다."
lang: ko-KR
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ko/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# 스킴 변경 기록

메시지 수용 여부를 좌우하는 모든 규칙 변경을 발효일별로 묶었습니다.

규칙 레지스트리에서 생성, 규칙 세트 `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

Swift는 2026년 11월부터 연간 Standards Release 주기로 전환하므로, 이 목록은 기한에서 끝나지 않고 매년 늘어납니다.

구독: [Atom feed](/scheme-changes.xml).

## 규칙 세트 버전 관리

규칙 식별자는 마이너 릴리스 사이에서 안정적입니다. 규칙의 통과·실패가 바뀌면 새 세트 버전이 필요하며, 그래야 보고서를 재현할 수 있습니다.

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## 규칙 세트를 고정하는 방법

검증 보고서에는 세트 버전과 해시가 기록됩니다. 불일치를 제기할 때 둘 다 인용하면 판정을 낳은 세트를 정확히 재구성할 수 있습니다.
