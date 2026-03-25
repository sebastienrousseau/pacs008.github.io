---
title: "pacs.002.001.12 | 금융기관 간 지급 상태 보고 | pacs008"
description: pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
faq:
  - question: "pacs.002는 결제 메시지입니까?"
    answer: "아니요. 가치를 이동하는 것이 아니라 이전 지시의 상태를 보고합니다."
  - question: "pacs.002가 내부 워크플로 상태를 대체해야 합니까?"
    answer: "아니요. 정보를 제공해야 하지만, 내부 케이스 상태는 여전히 자체적인 운영 로직이 필요합니다."
---

# pacs.002.001.12 — 금융기관 간 지급 상태 보고

<div class="message-metadata-table" tabindex="0" aria-label="pacs.002.001.12 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentStatusReportV12</td>
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
          <td class="message-metadata-table__value">12</td>
        </tr>
    </tbody>
  </table>
</div>

## 개요

pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더
- **OrgnlGrpInfAndSts** — 일괄 수준 보고를 위한 원본 그룹 정보 및 상태
- **TxInfAndSts** — 개별 거래 결과에 대한 거래 정보 및 상태
- **StsRsnInf** — 구조화된 사유 코드가 포함된 상태 사유 정보
- **OrgnlTxRef** — 원본 지시에 연결되는 원본 거래 참조

## 비즈니스 컨텍스트

- 신용이체, 자동이체 및 결제 반환의 결제 확인 또는 거절 보고에 사용
- 지시 에이전트와 피지시 에이전트 간의 대사를 가능하게 함
- CBPR+ 흐름에서 pacs.008 및 pacs.009 메시지의 처리 확인에 필수
- 일괄 그룹 수준 및 개별 거래 수준 상태 보고를 모두 지원

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더</td>
          <td class="operational-matrix-table__right">신용이체, 자동이체 및 결제 반환의 결제 확인 또는 거절 보고에 사용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInfAndSts</strong> — 일괄 수준 보고를 위한 원본 그룹 정보 및 상태</td>
          <td class="operational-matrix-table__right">지시 에이전트와 피지시 에이전트 간의 대사를 가능하게 함</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInfAndSts</strong> — 개별 거래 결과에 대한 거래 정보 및 상태</td>
          <td class="operational-matrix-table__right">CBPR+ 흐름에서 pacs.008 및 pacs.009 메시지의 처리 확인에 필수</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>StsRsnInf</strong> — 구조화된 사유 코드가 포함된 상태 사유 정보</td>
          <td class="operational-matrix-table__right">일괄 그룹 수준 및 개별 거래 수준 상태 보고를 모두 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 원본 지시에 연결되는 원본 거래 참조</td>
          <td class="operational-matrix-table__right">피지시 에이전트(수신자)는 pacs.008 또는 pacs.009 등 수신된 결제 지시의 수락, 결제 또는 거절을 확인하기 위해 지시 에이전트(발신자)에게 pacs.002를 반송합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- MT199 및 MT 메시지의 필드 79 상태 서술을 대체
- CBPR+는 모든 결제 상태 통신에 pacs.002를 의무화
- 구조화된 사유 코드가 자유 텍스트 거절 설명을 대체
- SWIFT gpi 추적 통합으로 엔드투엔드 투명성을 위해 pacs.002 필요

## 메시지 흐름

피지시 에이전트(수신자)는 pacs.008 또는 pacs.009 등 수신된 결제 지시의 수락, 결제 또는 거절을 확인하기 위해 지시 에이전트(발신자)에게 pacs.002를 반송합니다.

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
          <td class="version-diff-table__range">pacs.002.001.12</td>
          <td class="version-diff-table__why">pacs008의 현재 구현</td>
          <td class="version-diff-table__takeaway">현재 프로젝트 템플릿과 검증 자산에 맞출 때 사용합니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.002.001.13-15</td>
          <td class="version-diff-table__why">이후 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">Review later ISO revisions before new interoperability work.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### 필드 해설

- `MsgId`: Use a new identifier for the status report itself.
- `OrgnlInstrId`: Keep the original instruction identifier intact.
- `TxSts`: Map this carefully to internal workflow states.
- `StsRsnInf`: Structured reason codes are more useful than free text.

## 비교 pacs.002 vs pacs.028

<div class="message-comparison-table" tabindex="0" aria-label="비교 pacs.002 vs pacs.028">
  <table>
    <caption>비교 pacs.002 vs pacs.028</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>비교 기준</th>
        <th>pacs.002.001.12</th>
        <th>비교 메시지</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">주요 목적</td>
          <td class="message-comparison-table__current">상태 보고</td>
          <td class="message-comparison-table__other">상태 요청</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">상호작용을 시작하는 주체</td>
          <td class="message-comparison-table__current">상태를 보내는 기관</td>
          <td class="message-comparison-table__other">상태를 요청하는 기관</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">운영 관점</td>
          <td class="message-comparison-table__current">이벤트 기반 보고</td>
          <td class="message-comparison-table__other">예외 중심 조회</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">피해야 할 잘못된 가정</td>
          <td class="message-comparison-table__current">상태 보고가 조사 워크플로를 대체한다는 가정</td>
          <td class="message-comparison-table__other">모든 결제에 명시적 상태 요청이 필요하다는 가정</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)

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
          <td class="related-messages-table__id"><a href="/ko/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">금융기관 간 신용이체</td>
          <td class="related-messages-table__overview">pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 상태 요청</td>
          <td class="related-messages-table__overview">pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

