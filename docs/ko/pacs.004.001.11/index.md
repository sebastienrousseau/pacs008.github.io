---
title: "pacs.004.001.11 | 지급 반환 | pacs008"
description: pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
faq:
  - question: "What is the difference between pacs.004 and pacs.007?"
    answer: "pacs.004 returns settled funds from the receiving side, while pacs.007 requests reversal from the original instructing side."
  - question: "Should every failed beneficiary credit become pacs.004?"
    answer: "Not automatically. The right path depends on scheme rules, settlement stage, and counterparty handling."
---

# pacs.004.001.11 — 지급 반환

<div class="message-metadata-table" tabindex="0" aria-label="pacs.004.001.11 metadata">
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
          <td class="message-metadata-table__value">PaymentReturnV11</td>
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

pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 식별자 및 생성 타임스탬프가 포함된 그룹 헤더
- **TxInf** — 반환 금액 및 당사자 정보가 포함된 거래 정보
- **OrgnlGrpInf** — 원본 메시지에 연결되는 원본 그룹 정보
- **RtrRsnInf** — 구조화된 사유 코드가 포함된 반환 사유 정보
- **OrgnlTxRef** — 매칭 및 대사를 위한 원본 거래 참조

## 비즈니스 컨텍스트

- 수취인 계좌에 입금이 불가능한 경우 결제 후 반환 처리
- 발신자가 자금 반환을 요청하는 회수 시나리오 지원
- 규제 및 운영 투명성을 위한 구조화된 반환 사유 코드 포함
- 신용이체 반환(pacs.008) 및 자동이체 반환(pacs.003) 모두에 적용

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
          <td class="operational-matrix-table__right">수취인 계좌에 입금이 불가능한 경우 결제 후 반환 처리</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>TxInf</strong> — 반환 금액 및 당사자 정보가 포함된 거래 정보</td>
          <td class="operational-matrix-table__right">발신자가 자금 반환을 요청하는 회수 시나리오 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlGrpInf</strong> — 원본 메시지에 연결되는 원본 그룹 정보</td>
          <td class="operational-matrix-table__right">규제 및 운영 투명성을 위한 구조화된 반환 사유 코드 포함</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RtrRsnInf</strong> — 구조화된 사유 코드가 포함된 반환 사유 정보</td>
          <td class="operational-matrix-table__right">신용이체 반환(pacs.008) 및 자동이체 반환(pacs.003) 모두에 적용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>OrgnlTxRef</strong> — 매칭 및 대사를 위한 원본 거래 참조</td>
          <td class="operational-matrix-table__right">피지시 에이전트는 이전에 결제된 자금을 반환하기 위해 결제 체인을 통해 pacs.004를 반송합니다. 체인 내 각 에이전트가 반환을 처리하고 관련 계좌에 자금을 환원합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- MT103 RETURN 및 커버 방식 반환 메시징을 대체
- 반환 사유 코드가 ISO 20022에 따라 표준화되고 기계 판독 가능
- CBPR+는 매칭을 위해 완전한 원본 거래 참조 데이터를 요구
- SWIFT gpi 추적이 엔드투엔드 가시성을 위해 반환 거래로 확장

## 메시지 흐름

피지시 에이전트는 이전에 결제된 자금을 반환하기 위해 결제 체인을 통해 pacs.004를 반송합니다. 체인 내 각 에이전트가 반환을 처리하고 관련 계좌에 자금을 환원합니다.

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
          <td class="version-diff-table__range">pacs.004.001.11</td>
          <td class="version-diff-table__why">pacs008의 현재 구현</td>
          <td class="version-diff-table__takeaway">현재 지급 반환 템플릿과 정렬됩니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.004.001.12-14</td>
          <td class="version-diff-table__why">이후 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">스킴 업그레이드나 신규 상대 기관이 범위에 포함된다면 이후 반환 메시지 개정판을 검토하세요.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### 필드 해설

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 사유 코드의 품질은 후속 고객 커뮤니케이션과 운영 경로 지정에 매우 중요합니다.

## 비교 pacs.004 vs pacs.007

<div class="message-comparison-table" tabindex="0" aria-label="비교 pacs.004 vs pacs.007">
  <table>
    <caption>비교 pacs.004 vs pacs.007</caption>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>비교 기준</th>
        <th>pacs.004.001.11</th>
        <th>비교 메시지</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">주요 목적</td>
          <td class="message-comparison-table__current">Return settled funds</td>
          <td class="message-comparison-table__other">Reverse a previously instructed payment</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Initiated by</td>
          <td class="message-comparison-table__current">Receiving / beneficiary side</td>
          <td class="message-comparison-table__other">Original instructing side</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">Direction of flow</td>
          <td class="message-comparison-table__current">Back through the chain</td>
          <td class="message-comparison-table__other">Forward through the chain</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">가장 적합한 용도</td>
          <td class="message-comparison-table__current">결제 후 반환 처리</td>
          <td class="message-comparison-table__other">리콜, 오류 또는 사기 유발 리버설 처리</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
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
          <td class="related-messages-table__id"><a href="/ko/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="related-messages-table__name">금융기관 간 고객 직접출금</td>
          <td class="related-messages-table__overview">pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="related-messages-table__name">금융기관 간 지급 상태 보고</td>
          <td class="related-messages-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

