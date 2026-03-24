---
title: pacs.009.001.10 | 금융기관 간 신용이체 | pacs008
description: pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
faq:
  - question: "When should I choose pacs.009 over pacs.008?"
    answer: "Choose pacs.009 for own-account transfers and cover legs; choose pacs.008 for customer-credit-transfer instructions."
  - question: "Why is pacs.009 often harder to reconcile than expected?"
    answer: "Because banks must preserve the relationship between treasury funding, correspondent legs, and any linked customer payment."
---

# pacs.009.001.10 — 금융기관 간 신용이체

<div class="message-metadata-table" tabindex="0" aria-label="pacs.009.001.10 metadata">
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
          <td class="message-metadata-table__value">FinancialInstitutionCreditTransferV10</td>
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
          <td class="message-metadata-table__value">10</td>
        </tr>
    </tbody>
  </table>
</div>

## 개요

pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

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
          <td class="operational-matrix-table__right">은행 간 자기 계정 이체 및 커버 결제에 사용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 은행 간 결제 금액이 포함된 신용이체 거래 정보</td>
          <td class="operational-matrix-table__right">환거래 은행 파트너 간 유동성 관리 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 채무자 기관 및 에이전트 식별</td>
          <td class="operational-matrix-table__right">커버 방식으로 결제되는 고객 신용이체의 커버 레그를 포함</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 채권자 기관 및 에이전트 식별</td>
          <td class="operational-matrix-table__right">금융기관 간 자금 운용 및 조달 업무 가능</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>IntrBkSttlmAmt</strong> — 결제 통화로 표시된 은행 간 결제 금액</td>
          <td class="operational-matrix-table__right">채무자 기관은 자체 자금을 이체하기 위해 채권자 기관에 pacs.009를 전송합니다. 커버 방식 결제의 경우 pacs.009가 자금 조달 레그를 제공하고 pacs.008이 별도 경로로 고객 지시를 전달합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- 기관 간 이체에서 MT202 및 MT202COV를 대체
- 커버 방식 흐름에서 pacs.009를 기반 pacs.008 고객 지시와 페어링
- 구조화된 당사자 데이터 및 LEI 식별이 점점 더 요구됨
- SWIFT gpi가 환거래 은행 투명성을 위해 pacs.009를 포괄

## 메시지 흐름

채무자 기관은 자체 자금을 이체하기 위해 채권자 기관에 pacs.009를 전송합니다. 커버 방식 결제의 경우 pacs.009가 자금 조달 레그를 제공하고 pacs.008이 별도 경로로 고객 지시를 전달합니다.

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
          <td class="version-diff-table__range">pacs.009.001.10</td>
          <td class="version-diff-table__why">pacs008의 현재 구현</td>
          <td class="version-diff-table__takeaway">FI 신용 이체 흐름에 대한 현재 프로젝트 지원 범위와 일치합니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.009.001.11-12</td>
          <td class="version-diff-table__why">이후 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">코레스폰던트 및 커버 결제 환경의 로드맵 계획에 중요합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### 필드 해설

- `InstrId`: Use a funding-leg identifier that still links back to any customer flow.
- `IntrBkSttlmAmt`: Own-account and cover flows need strict treasury controls on amount and date.
- `Dbtr` / `Cdtr`: These are institution parties, not retail customer roles.

## 비교 pacs.009 vs pacs.008

<div class="message-comparison-table" tabindex="0" aria-label="비교 pacs.009 vs pacs.008">
  <table>
    <caption>비교 pacs.009 vs pacs.008</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>비교 기준</th>
        <th>pacs.009.001.10</th>
        <th>비교 메시지</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">주요 목적</td>
          <td class="message-comparison-table__current">기관 자기계정 신용 이체 또는 커버 레그</td>
          <td class="message-comparison-table__other">고객 신용 이체</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">업무 책임 주체</td>
          <td class="message-comparison-table__current">자금부 / 코레스폰던트 / 펀딩 운영</td>
          <td class="message-comparison-table__other">고객 결제 운영</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">일반적인 조합</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004 및 연결된 pacs.008 흐름</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004, pacs.007, pacs.028</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">피해야 할 잘못된 가정</td>
          <td class="message-comparison-table__current">그저 더 기술적인 pacs.008일 뿐이라는 가정</td>
          <td class="message-comparison-table__other">기관 펀딩 흐름을 그대로 무리 없이 담을 수 있다는 가정</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)

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
          <td class="related-messages-table__id"><a href="/ko/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">금융기관 간 고객 신용이체</td>
          <td class="related-messages-table__overview">pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 상태 보고</td>
          <td class="related-messages-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="related-messages-table__name">금융기관 간 직접출금</td>
          <td class="related-messages-table__overview">pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

