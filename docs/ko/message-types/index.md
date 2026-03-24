---
title: "메시지 유형 | pacs008 ISO 20022"
description: 지원되는 ISO 20022 pacs 메시지 정의 및 버전. 금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# 메시지 유형

pacs008은 핵심 pacs.008 메시지 정의와 오케스트레이션 및 조정 플로우에서 사용되는 관련 메시지를 포함합니다.

## 포함된 지원

<div class="message-coverage-table" tabindex="0" aria-label="포함된 지원">
  <table>
    <colgroup>
      <col class="message-coverage-table__col-id">
      <col class="message-coverage-table__col-name">
      <col class="message-coverage-table__col-year">
      <col class="message-coverage-table__col-overview">
    </colgroup>
    <thead>
      <tr>
        <th>메시지 유형</th>
        <th>설명</th>
        <th>연도</th>
        <th>개요</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 지급 상태 보고</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 고객 직접출금</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="message-coverage-table__name">지급 반환</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 지급 취소</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.007 메시지는 아직 결제되지 않은 이전에 전송된 결제 지시를 취소하거나 결제된 결제의 취소를 요청하는 데 사용됩니다. pacs.004(반환)와 달리 원래의 지시 에이전트가 개시합니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 고객 신용이체</td>
          <td class="message-coverage-table__year">2023</td>
          <td class="message-coverage-table__overview">pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 신용이체</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 직접출금</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.</td>
        </tr>
        <tr>
          <td class="message-coverage-table__id"><a href="/ko/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="message-coverage-table__name">금융기관 간 지급 상태 요청</td>
          <td class="message-coverage-table__year">2019</td>
          <td class="message-coverage-table__overview">pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## 제공 모델

지원되는 각 메시지 유형은 템플릿 자산과 검증 로직으로 뒷받침되어 팀이 여러 다운스트림 채널에서 생성 및 회귀 테스트를 표준화할 수 있습니다.

## 올바른 메시지 선택

메시지 카탈로그는 어떤 메시지가 처리를 시작하고, 어떤 메시지가 상태를 알리며, 어떤 메시지가 흐름을 수정하거나 되돌리는지 팀이 판단해야 할 때 특히 중요합니다.

지원되는 pacs 흐름을 한눈에 비교하려면 전용 [메시지 선택 가이드](/ko/message-selection/)를 참고하세요.

## 2026 시장 컨텍스트

- **SEPA SCT / SCT Inst**: pacs.008은 신용 이체 교환 및 즉시 결제 처리의 핵심으로 남아 있습니다.
- **CBPR+**: pacs.008은 MT103 스타일의 국경 간 페이로드를 더 풍부한 구조화 데이터로 계속 대체하고 있습니다.
- **구조화 주소**: 현재 시장 지침은 2026년 11월에 완전 비구조화 우편 주소에서 전환하는 것을 가리키고 있습니다.
- **직렬 방식 및 STP**: 다중 구간 은행 간 체인은 여전히 중요하며, 직통 처리 변형은 운영 효율성에 필수적입니다.

## 운영 기능

pacs008은 지원되는 메시지 정의 리비전에 걸쳐 템플릿 기반 생성 및 검증을 제공합니다:

- 버전 비교
- 스키마 업데이트 회귀 테스트
- 릴리스 전 아웃바운드 결제 메시지 데이터 강화
- 단일 코드베이스에서 제품, 운영 및 마이그레이션 팀 지원

