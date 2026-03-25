---
title: "pacs.003.001.09 | 금융기관 간 고객 직접출금 | pacs008"
description: pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
faq:
  - question: "pacs.003은 pacs.008의 자동이체 미러입니까?"
    answer: "아니요. 다른 위임, 타이밍 및 예외 규칙을 가진 고객 자동이체 흐름을 처리합니다."
  - question: "운영상 가장 중요한 것은 무엇입니까?"
    answer: "위임 품질, 채무자 계좌 규칙 및 반환 처리가 XML 생성보다 더 중요합니다."
---

# pacs.003.001.09 — 금융기관 간 고객 직접출금

<div class="message-metadata-table" tabindex="0" aria-label="pacs.003.001.09 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">필드</th>
        <th scope="col">값</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO 이름</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerDirectDebitV09</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>등록 상태</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>연도</strong></td>
          <td class="message-metadata-table__value">2019</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>버전</strong></td>
          <td class="message-metadata-table__value">9</td>
        </tr>
    </tbody>
  </table>
</div>

## 개요

pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

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

<div class="operational-matrix-table" tabindex="0" aria-label="핵심 데이터 요소 비즈니스 컨텍스트">
  <table>
    <caption>Key data elements and business context</caption>
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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 메시지 식별자 및 결제 정보가 포함된 그룹 헤더</td>
          <td class="operational-matrix-table__right">SEPA 코어 및 B2B 자동이체 스킴 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DrctDbtTxInf</strong> — 금액 및 당사자 정보가 포함된 자동이체 거래 정보</td>
          <td class="operational-matrix-table__right">구독, 공과금, 대출 상환 등 정기 결제 추심에 사용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr</strong> — 채권자 식별 및 계좌 세부정보</td>
          <td class="operational-matrix-table__right">채무자와 채권자 간 유효한 위임 참조 필요</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtrAgt</strong> — 채권자 에이전트(추심 기관) 식별</td>
          <td class="operational-matrix-table__right">단일 메시지 내 복수 자동이체 지시의 일괄 추심 가능</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>DbtrAgt</strong> — 채무자 에이전트(지급 기관) 식별</td>
          <td class="operational-matrix-table__right">채권자 에이전트는 자금을 추심하기 위해 채무자 에이전트를 향해 pacs.003을 개시합니다. 채무자 에이전트는 위임을 검증하고 계좌 잔액을 확인한 후 거래를 결제하거나 반환합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- 구조화된 주소 및 당사자 식별 요구사항이 자동이체에도 동일하게 적용
- 위임 관련 데이터는 2026년 11월까지 완전히 구조화되어야 함
- 국경 간 흐름에서 레거시 MT104 형식의 자동이체 포맷을 대체
- 채권자 스킴 식별의 유효성 검증이 점점 강화됨

## 메시지 흐름

채권자 에이전트는 자금을 추심하기 위해 채무자 에이전트를 향해 pacs.003을 개시합니다. 채무자 에이전트는 위임을 검증하고 계좌 잔액을 확인한 후 거래를 결제하거나 반환합니다.

## 버전 차이 표

<div class="version-diff-table" tabindex="0" aria-label="버전 차이 표">
  <table>
    <caption>버전 차이 표</caption>
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
          <td class="version-diff-table__range">pacs.003.001.09</td>
          <td class="version-diff-table__why">pacs008의 현재 구현</td>
          <td class="version-diff-table__takeaway">현재 프로젝트에서 자동이체 참조를 모델링할 때 유용합니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.003.001.10-11</td>
          <td class="version-diff-table__why">이후 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">신규 구축에 사용하기 전에 이후 개정판에서 위임, 상태, 상호운용성 관련 업데이트를 확인하세요.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### 필드 해설

- `EndToEndId`: Keep mandate and collection identifiers separate from invoice references.
- `IntrBkSttlmAmt`: Check amount precision and currency rules before rendering XML.
- `Dbtr` / `Cdtr`: 자동이체의 성공 여부는 XML 구조보다 계좌와 위임 정보의 품질에 더 크게 좌우되는 경우가 많습니다.

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
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
          <td class="related-messages-table__id"><a href="/ko/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">지급 반환</td>
          <td class="related-messages-table__overview">pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 취소</td>
          <td class="related-messages-table__overview">pacs.007 메시지는 아직 결제되지 않은 이전에 전송된 결제 지시를 취소하거나 결제된 결제의 취소를 요청하는 데 사용됩니다. pacs.004(반환)와 달리 원래의 지시 에이전트가 개시합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 상태 보고</td>
          <td class="related-messages-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

