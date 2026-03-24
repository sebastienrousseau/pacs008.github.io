---
title: pacs.007.001.11 | 금융기관 간 지급 취소 | pacs008
description: pacs.007 메시지는 아직 결제되지 않은 이전에 전송된 결제 지시를 취소하거나 결제된 결제의 취소를 요청하는 데 사용됩니다. pacs.004(반환)와 달리 원래의 지시 에이전트가 개시합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — 금융기관 간 지급 취소

<div class="message-metadata-table" tabindex="0" aria-label="pacs.007.001.11 metadata">
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
          <td class="message-metadata-table__value">FIToFIPaymentReversalV11</td>
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
          <td class="message-metadata-table__value">11</td>
        </tr>
    </tbody>
  </table>
</div>

## 개요

pacs.007 메시지는 아직 결제되지 않은 이전에 전송된 결제 지시를 취소하거나 결제된 결제의 취소를 요청하는 데 사용됩니다. pacs.004(반환)와 달리 원래의 지시 에이전트가 개시합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더
- **TxInf** — 취소 금액 및 당사자 정보가 포함된 거래 정보
- **OrgnlGrpInf** — 원본 메시지를 참조하는 원본 그룹 정보
- **RvslRsnInf** — 구조화된 사유 코드가 포함된 취소 사유 정보
- **OrgnlTxRef** — 엔드투엔드 추적성을 위한 원본 거래 참조

## 비즈니스 컨텍스트

- 원래 발신자가 결제 전 또는 결제 후 오류를 식별한 경우 개시
- 신속한 취소가 필요한 사기 시나리오에서 사용
- 원래 결제 금액의 전액 및 부분 취소 모두 지원
- 하류 처리를 위한 구조화된 취소 사유 코드 포함

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더</td>
          <td class="operational-matrix-table__right">원래 발신자가 결제 전 또는 결제 후 오류를 식별한 경우 개시</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 취소 금액 및 당사자 정보가 포함된 거래 정보</td>
          <td class="operational-matrix-table__right">신속한 취소가 필요한 사기 시나리오에서 사용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 원본 메시지를 참조하는 원본 그룹 정보</td>
          <td class="operational-matrix-table__right">원래 결제 금액의 전액 및 부분 취소 모두 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RvslRsnInf</strong> — 구조화된 사유 코드가 포함된 취소 사유 정보</td>
          <td class="operational-matrix-table__right">하류 처리를 위한 구조화된 취소 사유 코드 포함</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 엔드투엔드 추적성을 위한 원본 거래 참조</td>
          <td class="operational-matrix-table__right">지시 에이전트(원래 발신자)는 이전에 지시한 결제를 취소하기 위해 결제 체인을 통해 pacs.007을 전방으로 전송합니다. 각 에이전트가 취소 지시를 처리하고 그에 따라 결제를 조정합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- pacs.004와는 방향으로 구별됨 — 취소는 발신자에서 전방으로 흐르고 반환은 수취인에서 후방으로 흐름
- CBPR+는 자동 매칭을 위해 원본 메시지 식별자와의 페어링을 요구
- 구조화된 사유 코드가 레거시 MT 메시지의 자유 텍스트 서술을 대체
- 즉시 결제 회수 및 사기 방지 워크플로에서 사용이 증가

## 메시지 흐름

지시 에이전트(원래 발신자)는 이전에 지시한 결제를 취소하기 위해 결제 체인을 통해 pacs.007을 전방으로 전송합니다. 각 에이전트가 취소 지시를 처리하고 그에 따라 결제를 조정합니다.

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
          <td class="version-diff-table__range">pacs.007.001.11</td>
          <td class="version-diff-table__why">pacs008의 현재 구현</td>
          <td class="version-diff-table__takeaway">리버설 워크플로 모델링의 좋은 기준점입니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.007.001.12-13</td>
          <td class="version-diff-table__why">이후 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">현재 시장 인프라 요구사항과의 정합성을 위해 이후 개정판을 확인하세요.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### 필드 해설

- `MsgId`: The reversal needs its own identifier.
- `OrgnlInstrId`: 대사 단절을 방지하려면 원래 지급 참조를 유지하세요.
- `RvslRsnInf`: Use structured reversal reasons so cases can be routed correctly.

## 비교 pacs.007 vs pacs.004

<div class="message-comparison-table" tabindex="0" aria-label="비교 pacs.007 vs pacs.004">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>비교 기준</th>
        <th>pacs.007.001.11</th>
        <th>비교 메시지</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">주요 목적</td>
          <td class="message-comparison-table__current">Reverse a previously instructed payment</td>
          <td class="message-comparison-table__other">Return settled funds</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Original instructing side</td>
          <td class="message-comparison-table__other">Receiving / beneficiary side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Forward through the chain</td>
          <td class="message-comparison-table__other">Back through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">가장 적합한 용도</td>
          <td class="message-comparison-table__current">리콜, 오류 또는 사기 유발 리버설 처리</td>
          <td class="message-comparison-table__other">결제 후 반환 처리</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
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
          <td class="related-messages-table__id"><a href="/ko/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="related-messages-table__name">금융기관 간 고객 신용이체</td>
          <td class="related-messages-table__overview">pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">지급 반환</td>
          <td class="related-messages-table__overview">pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 상태 보고</td>
          <td class="related-messages-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

