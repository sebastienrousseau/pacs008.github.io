---
title: pacs.008.001.13 | 금융기관 간 고객 신용이체 | pacs008
description: pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — 금융기관 간 고객 신용이체

<div class="message-metadata-table" tabindex="0" aria-label="pacs.008.001.13 metadata">
  <table>
    <colgroup>
      <col class="message-metadata-table__col-label">
      <col class="message-metadata-table__col-value">
    </colgroup>
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-metadata-table__label"><strong>ISO 이름</strong></td>
          <td class="message-metadata-table__value">FIToFICustomerCreditTransferV13</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>등록 상태</strong></td>
          <td class="message-metadata-table__value">Registered</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>연도</strong></td>
          <td class="message-metadata-table__value">2023</td>
        </tr>
        <tr>
          <td class="message-metadata-table__label"><strong>버전</strong></td>
          <td class="message-metadata-table__value">13</td>
        </tr>
    </tbody>
  </table>
</div>

## 개요

pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.

> 2026년 3월 23일에 1차 출처 검토를 완료했습니다. ISO 20022 카탈로그 기준일: 2025-02-27; 출처 링크는 아래에 있습니다.

## 핵심 데이터 요소

- **GrpHdr** — 메시지 ID, 생성일, 거래 수 및 결제 정보가 포함된 그룹 헤더
- **CdtTrfTxInf** — 금액, 수수료 및 목적이 포함된 신용이체 거래 정보
- **Dbtr / DbtrAgt** — 채무자 및 채무자 에이전트 식별과 계좌 세부정보
- **Cdtr / CdtrAgt** — 채권자 및 채권자 에이전트 식별과 계좌 세부정보
- **RmtInf** — 구조화 또는 비구조화 결제 참조를 위한 송금 정보

## 비즈니스 컨텍스트

- 고객 발의 국경 간 및 국내 신용이체의 주요 메시지
- SEPA SCT, SEPA Instant, CBPR+ 및 국내 청산 시스템에서 사용
- 완전 자동 대사를 지원하기 위한 구조화된 송금 정보 포함
- 다구간 결제 체인에서 직렬, 커버 및 직접 결제 방식 지원

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
          <td class="operational-matrix-table__left"><strong>GrpHdr</strong> — 메시지 ID, 생성일, 거래 수 및 결제 정보가 포함된 그룹 헤더</td>
          <td class="operational-matrix-table__right">고객 발의 국경 간 및 국내 신용이체의 주요 메시지</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>CdtTrfTxInf</strong> — 금액, 수수료 및 목적이 포함된 신용이체 거래 정보</td>
          <td class="operational-matrix-table__right">SEPA SCT, SEPA Instant, CBPR+ 및 국내 청산 시스템에서 사용</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Dbtr / DbtrAgt</strong> — 채무자 및 채무자 에이전트 식별과 계좌 세부정보</td>
          <td class="operational-matrix-table__right">완전 자동 대사를 지원하기 위한 구조화된 송금 정보 포함</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>Cdtr / CdtrAgt</strong> — 채권자 및 채권자 에이전트 식별과 계좌 세부정보</td>
          <td class="operational-matrix-table__right">다구간 결제 체인에서 직렬, 커버 및 직접 결제 방식 지원</td>
        </tr>
        <tr>
          <td class="operational-matrix-table__left"><strong>RmtInf</strong> — 구조화 또는 비구조화 결제 참조를 위한 송금 정보</td>
          <td class="operational-matrix-table__right">채무자 에이전트는 pacs.008을 생성하여 채권자 에이전트에게(직접 또는 중개기관을 통해) 전송합니다. 체인 내 각 에이전트가 지시를 검증, 보완 및 전달하여 최종적으로 채권자 에이전트가 수취인 계좌에 입금합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## CBPR+ 및 스키마 컨텍스트

- 국경 간 고객 신용이체에서 MT103 및 MT103+를 대체
- 2026년 11월 구조화 주소 기한이 모든 당사자 우편 주소에 적용
- SWIFT gpi는 UETR 기반 엔드투엔드 추적에 pacs.008을 요구
- 13번의 개정이 시장 인프라 전반에 걸친 스키마의 지속적 발전을 반영

## 메시지 흐름

채무자 에이전트는 pacs.008을 생성하여 채권자 에이전트에게(직접 또는 중개기관을 통해) 전송합니다. 체인 내 각 에이전트가 지시를 검증, 보완 및 전달하여 최종적으로 채권자 에이전트가 수취인 계좌에 입금합니다.

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
          <td class="version-diff-table__range">pacs.008.001.01-07</td>
          <td class="version-diff-table__why">초기 개정판</td>
          <td class="version-diff-table__takeaway">주로 레거시 마이그레이션 분석과 버전 이력 파악에 유용합니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.08-12</td>
          <td class="version-diff-table__why">현재판 이전의 최신 개정판</td>
          <td class="version-diff-table__takeaway">최근 마이그레이션 또는 공존 프로젝트에서 가장 자주 보게 될 개정판입니다.</td>
        </tr>
        <tr>
          <td class="version-diff-table__range">pacs.008.001.13</td>
          <td class="version-diff-table__why">현재 카탈로그 개정판</td>
          <td class="version-diff-table__takeaway">현재 버전 기준 계획에 사용할 수 있지만, 스킴 사용 지침과 상대 기관 준비 상태는 계속 확인해야 합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주석이 달린 XML 예제

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### 필드 해설

- `MsgId`: 이는 최종 고객 결제 참조가 아니라 메시지 엔벌로프 자체를 식별해야 합니다.
- `EndToEndId`: 가능한 경우 다운스트림 시스템 전반에서 고객 기준 추적 가능성을 안정적으로 유지하세요.
- `UETR`: 국경 간 및 추적이 중요한 환경에서는 이를 일관되게 사용하고, 이후 워크플로 단계에서 임의로 생성하지 마세요.
- `IntrBkSttlmAmt`: 스키마 검증 전에 업무 규칙으로 금액과 통화를 검증하세요.
- `Dbtr` / `Cdtr`: 당사자 정보 품질, 주소 구조, 식별자는 일반적으로 보정률을 좌우하는 핵심 요소입니다.

## 비교 pacs.008 vs pacs.009

<div class="message-comparison-table" tabindex="0" aria-label="비교 pacs.008 vs pacs.009">
  <table>
    <colgroup>
      <col class="message-comparison-table__col-dimension">
      <col class="message-comparison-table__col-current">
      <col class="message-comparison-table__col-other">
    </colgroup>
    <thead>
      <tr>
        <th>비교 기준</th>
        <th>pacs.008.001.13</th>
        <th>비교 메시지</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-comparison-table__dimension">주요 목적</td>
          <td class="message-comparison-table__current">고객 신용 이체</td>
          <td class="message-comparison-table__other">기관 자기계정 신용 이체 또는 커버 레그</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">업무 책임 주체</td>
          <td class="message-comparison-table__current">고객 결제 운영</td>
          <td class="message-comparison-table__other">자금부 / 코레스폰던트 / 펀딩 운영</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">일반적인 조합</td>
          <td class="message-comparison-table__current">pacs.002, pacs.004, pacs.007, pacs.028</td>
          <td class="message-comparison-table__other">pacs.002, pacs.004 및 경우에 따라 연결된 pacs.008 흐름</td>
        </tr>
        <tr>
          <td class="message-comparison-table__dimension">피해야 할 잘못된 가정</td>
          <td class="message-comparison-table__current">모든 은행 간 이체가 여기에 속한다는 가정</td>
          <td class="message-comparison-table__other">고객 신용이체 지시를 대체할 수 있다는 가정</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 참고자료

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## 지원 버전

<div class="message-versions-table" tabindex="0" aria-label="지원 버전">
  <table>
    <colgroup>
      <col class="message-versions-table__col-version">
      <col class="message-versions-table__col-status">
    </colgroup>
    <thead>
      <tr>
        <th>버전</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.01</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.02</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.03</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.04</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.05</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.06</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.07</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.08</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.09</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.10</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.11</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.12</code></td>
          <td class="message-versions-table__status"></td>
        </tr>
        <tr>
          <td class="message-versions-table__version"><code>pacs.008.001.13</code></td>
          <td class="message-versions-table__status"><strong>현재</strong></td>
        </tr>
    </tbody>
  </table>
</div>

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
          <td class="related-messages-table__id"><a href="/ko/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="related-messages-table__name">지급 반환</td>
          <td class="related-messages-table__overview">pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.</td>
        </tr>
        <tr>
          <td class="related-messages-table__id"><a href="/ko/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="related-messages-table__name">금융기관 간 신용이체</td>
          <td class="related-messages-table__overview">pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

