---
title: 2026 Readiness Hub — SWIFT CBPR+ & Bank of England Migration
description: What changes on 14 November 2026 for SWIFT CBPR+ and Bank of England CHAPS, who is in scope, the exceptions, and downloadable test fixtures for each rule.
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
---

# 2026년 ISO 20022 준비

**2026년 11월 14일**까지 **108일**(2026-07-29 기준).

해당 일자부터 완전 비구조화 우편 주소는 SWIFT CBPR+ 지급 메시지와 영란은행의 CHAPS 검증 라이브러리에서 더 이상 허용되지 않습니다. 같은 날 두 가지 변경이 추가로 시행되며, 2027년 11월에는 더 큰 변경 묶음이 뒤따릅니다.

Every rule below carries an identifier, an effective date, an authoritative source and a test fixture, so nothing here has to be taken on trust.

## 해당되시나요?

어느 당사자든 우편 주소가 포함된 CBPR+ 또는 CHAPS 지급을 보내신다면 적용 대상입니다.

| | |
|---|---|
| **메시지** | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| **당사자** | Debtor, creditor, ultimate debtor, ultimate creditor, and agents that carry an address |
| **적용 제외** | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| **면제** | Agents identified by BIC alone need no postal address (`CBPR-ADDR-005`) |

## 실제로 바뀌는 것

이 요건은 **최대가 아니라 최소**입니다. 가장 흔히 오해되는 부분입니다.

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | **Accepted** |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

도로명, 건물번호, 우편번호를 구조화 요소로 옮길 **필요는 없습니다**. `<TwnNm>`의 도시명과 `<Ctry>`의 두 자리 ISO 3166 국가 코드면 충분합니다. 나머지는 주소 행에 남아 있어도 됩니다. 이것이 하이브리드 주소이며 계속 유효합니다.

[Full detail, with worked examples →](/structured-address/)

## 지금 데이터를 점검하세요

모두 브라우저 안에서만 실행되는 두 가지 도구입니다. 지급 데이터는 전송되지 않습니다.

- **[Batch address scan](/live/)** — upload a CSV of party addresses and get a
  readiness score, a breakdown by party, and a downloadable remediation list of
  the records that would fail.
- **[XSD validation](/live/)** — check an existing message against the official
  schema for element order, cardinality and datatypes.

## 테스트 파일

Run these through the workbench, the CLI or the API. Each maps to the rule it
exercises, so you can confirm your pipeline reacts the way you expect.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## 이 일정뿐 아니라 모든 일정

2026년 11월이 ISO 20022 변경의 끝은 아닙니다. Swift는 그 시점부터 연간 Standards Release 주기로 전환하므로 사용 지침이 매년 바뀝니다.

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

[Dated change log and feed →](/scheme-changes/)

## 역할별 점검 사항

### 엔지니어링

- Find every place an address is concatenated into a single line before it
  reaches the message. That is usually where the problem is.
- Model town and country as separate fields end to end, not just at the
  boundary.
- Add `CBPR-ADDR-001` to `CBPR-ADDR-003` to your pre-submission validation,
  with the effective date, so failures surface before 14 November rather than
  on it.
- Add a negative test that a fully unstructured address is rejected. A rule you
  have never seen fire is a rule you cannot rely on.

### 데이터

- Measure how many records are missing a structured town or country **now**, so
  the remediation effort is a number rather than a guess. The batch scan
  produces exactly this.
- Identify the authoritative source per field. Addresses often arrive from
  several systems with different conventions.
- Country must be a two-letter ISO 3166 code. `GB`, not `United Kingdom` or
  `GBR` — `CBPR-ADDR-003` fails on the latter two.

### 테스트

- Test the day before, the day of, and the day after the effective date.
  Effective-date logic is where date-boundary bugs live.
- Test CBPR+ and CHAPS separately. They are modelled as distinct rules here for
  a reason.
- Include a hybrid address in the passing set. A test suite that only accepts
  fully structured addresses will reject valid traffic.

### 운영

- Know what a rejection for this reason will look like in your monitoring, and
  who triages it.
- Confirm your counterparties' readiness, not only your own. A compliant message
  can still fail if the receiving side is not ready.

### 경영

- The exposure is the count of records that would fail today, not the count of
  systems. Ask for the number.
- Note the 2027 obligations below. Teams that treat November 2026 as the finish
  line will repeat this work in twelve months.

## 스킴 간 차이

| | SWIFT CBPR+ | Bank of England CHAPS |
|---|---|---|
| Unstructured rejected | 14 November 2026 | 14 November 2026 |
| Minimum acceptable | Hybrid | Hybrid |
| Enforced by | CBPR+ usage guidelines | CHAPS validation library |
| Purpose codes | Not mandated by this change | Mandatory for all payments from November 2027 |
| Structured remittance | Not mandated by this change | Mandatory from November 2027 |
| Rules here | `CBPR-ADDR-001` – `006` | `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |

## 출처

Every rule on this page derives from one of these. Rules marked *announced* are
published intentions whose exact date should be re-verified before you rely on
them.

| Source | Publisher | Document | Verified |
|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2026-07-28 |

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

