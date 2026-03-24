---
title: pacs.028.001.05 | 금융기관 간 지급 상태 요청 | pacs008
description: pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — 금융기관 간 지급 상태 요청

| | |
|---|---|
| **ISO 이름** | FIToFIPaymentStatusRequestV05 |
| **등록 상태** | Registered |
| **연도** | 2019 |
| **버전** | 5 |

## 개요

pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

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

<div class="operational-matrix-table" tabindex="0" aria-label="핵심 데이터 요소 비즈니스 컨텍스트">
  <table>
    <colgroup>
      <col class="operational-matrix-table__col-left">
      <col class="operational-matrix-table__col-right">
    </colgroup>
    <thead>
      <tr>
        <th>핵심 데이터 요소</th>
        <th>비즈니스 컨텍스트</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="operational-matrix-table__left">**GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더</td>
          <td class="operational-matrix-table__right">처리 중인 결제 지시에 대한 능동적 상태 조회 가능</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**TxInf** — 조회 대상 결제를 식별하는 거래 정보</td>
          <td class="operational-matrix-table__right">지연되거나 누락된 결제를 조사하는 운영팀 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlGrpInf** — 원본 메시지를 참조하는 원본 그룹 정보</td>
          <td class="operational-matrix-table__right">대기하지 않고 상태 통신을 개시함으로써 pacs.002를 보완</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlInstrId** — 원본 결제의 원본 지시 식별자</td>
          <td class="operational-matrix-table__right">예외 처리 및 SLA 모니터링 워크플로에서 사용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left">**OrgnlEndToEndId** — 추적성을 위한 원본 엔드투엔드 식별자</td>
          <td class="operational-matrix-table__right">지시 에이전트는 특정 결제의 상태를 요청하기 위해 피지시 에이전트에게 pacs.028을 전송합니다. 피지시 에이전트는 현재 처리 상태가 포함된 pacs.002로 응답합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- MT199 상태 조회 패턴 및 수동 SWIFT 메시지 쿼리를 대체
- CBPR+는 원본 메시지 식별자에 연결된 구조화된 상태 요청 지원
- UETR 기반 gpi 추적으로 수동 조회 필요성 감소
- 자동화된 결제 운영 대시보드에 점점 통합됨

## 메시지 흐름

지시 에이전트는 특정 결제의 상태를 요청하기 위해 피지시 에이전트에게 pacs.028을 전송합니다. 피지시 에이전트는 현재 처리 상태가 포함된 pacs.002로 응답합니다.

## 버전 차이 표

<div class="version-diff-table" tabindex="0" aria-label="버전 차이 표">
  <table>
    <colgroup>
      <col class="version-diff-table__col-range">
      <col class="version-diff-table__col-why">
      <col class="version-diff-table__col-takeaway">
    </colgroup>
    <thead>
      <tr>
        <th>버전 범위</th>
        <th>중요한 이유</th>
        <th>구현 시 핵심 사항</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.05</td>
          <td class="version-diff-table__why">pacs008의 현재 구현</td>
          <td class="version-diff-table__takeaway">현재 상태 요청 모델링에 적합합니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.028.001.06</td>
          <td class="version-diff-table__why">후속 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">향후 상호운용 계획을 위해 더 새로운 카탈로그 개정판을 확인하세요.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### 필드 해설

- `MsgId`: 조회 요청 자체에도 원지급과 구분되는 감사 가능한 식별자가 필요합니다.
- `OrgnlInstrId`: 매칭 정확도를 높이려면 원래 지시에 있는 정확한 원본 식별자를 사용하세요.
- `OrgnlEndToEndId`: 고객 기준 추적 가능성을 포함하면 운영팀이 조회를 더 빠르게 대사할 수 있습니다.

## 비교 pacs.028 vs pacs.002

<div class="message-comparison-table" tabindex="0" aria-label="비교 pacs.028 vs pacs.002">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>비교 기준</th>
        <th>pacs.028.001.05</th>
        <th>비교 메시지</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">주요 목적</td>
          <td class="message-comparison-table__current">상태 요청</td>
          <td class="message-comparison-table__other">상태 보고</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">상호작용을 시작하는 주체</td>
          <td class="message-comparison-table__current">상태를 요청하는 기관</td>
          <td class="message-comparison-table__other">상태를 보내는 기관</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">운영 관점</td>
          <td class="message-comparison-table__current">예외 중심 조회</td>
          <td class="message-comparison-table__other">이벤트 기반 보고</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">피해야 할 잘못된 가정</td>
          <td class="message-comparison-table__current">모든 결제마다 정기적으로 보내야 한다는 가정</td>
          <td class="message-comparison-table__other">이것만으로 선제적 케이스 관리가 불필요해진다는 가정</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 관련 메시지
<div class="related-messages-table" tabindex="0" aria-label="관련 메시지">
  <table>
    <colgroup>
      <col class="related-messages-table__col-id">
      <col class="related-messages-table__col-name">
      <col class="related-messages-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>메시지 유형</th>
        <th>설명</th>
        <th>개요</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 상태 보고</td>
          <td class="related-messages-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">금융기관 간 고객 신용이체</td>
          <td class="related-messages-table__overview">pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">금융기관 간 신용이체</td>
          <td class="related-messages-table__overview">pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

