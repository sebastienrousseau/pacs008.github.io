---
title: 메시지 선택 가이드 | pacs008
description: 생성, 상태 보고, 반환, 취소, 조회에 적합한 ISO 20022 pacs 메시지를 선택합니다.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# 메시지 선택 가이드

먼저 업무 이벤트를 기준으로 pacs 계열을 고른 뒤, 스킴과 운영 모델에 따라 선택하십시오.



## 빠른 결정 매트릭스

<div class="decision-matrix-table" tabindex="0" aria-label="빠른 결정 매트릭스">
  <table>
    <colgroup>
      <col class="decision-matrix-table__col-id">
      <col class="decision-matrix-table__col-name">
      <col class="decision-matrix-table__col-overview">
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
          <td class="decision-matrix-table__id"><a href="/ko/pacs.002.001.12/"><code>pacs.002.001.12</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 지급 상태 보고</td>
          <td class="decision-matrix-table__overview">pacs.002 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 보고하기 위해 발송합니다. 결제 메시지 내 개별 거래에 대한 확인, 거절 또는 보류 상태 정보를 제공합니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.003.001.09/"><code>pacs.003.001.09</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 고객 직접출금</td>
          <td class="decision-matrix-table__overview">pacs.003 메시지는 고객 자동이체 지시를 실행하기 위해 금융기관 간에 교환됩니다. 채권자의 은행이 채권자를 대신하여 채무자의 은행에서 자금을 회수할 수 있게 합니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.004.001.11/"><code>pacs.004.001.11</code></a></td>
          <td class="decision-matrix-table__name">지급 반환</td>
          <td class="decision-matrix-table__overview">pacs.004 메시지는 이전에 결제된 결제 거래를 반환하는 데 사용됩니다. 결제가 적용될 수 없었거나, 오류로 전송되었거나, 발신 기관이 회수를 요청하는 경우 자금 흐름을 역전시킵니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.007.001.11/"><code>pacs.007.001.11</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 지급 취소</td>
          <td class="decision-matrix-table__overview">pacs.007 메시지는 아직 결제되지 않은 이전에 전송된 결제 지시를 취소하거나 결제된 결제의 취소를 요청하는 데 사용됩니다. pacs.004(반환)와 달리 원래의 지시 에이전트가 개시합니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.008.001.13/"><code>pacs.008.001.13</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 고객 신용이체</td>
          <td class="decision-matrix-table__overview">pacs.008 메시지는 고객을 대신하여 자금을 이체하기 위해 금융기관 간에 교환되는 핵심 결제 지시입니다. 하나 이상의 신용이체 거래에 대해 채무자, 채권자, 금액 및 송금 정보를 포함합니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.009.001.10/"><code>pacs.009.001.10</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 신용이체</td>
          <td class="decision-matrix-table__overview">pacs.009 메시지는 고객을 대신하는 것이 아닌 금융기관 자체 계정의 신용이체에 사용됩니다. 은행 간 자금 이동, 커버 결제 및 유동성 관리를 지원합니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.010.001.05/"><code>pacs.010.001.05</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 직접출금</td>
          <td class="decision-matrix-table__overview">pacs.010 메시지는 금융기관 자체 계정의 자동이체 거래를 위해 금융기관 간에 사용됩니다. 한 기관이 다른 기관의 계좌에서 직접 자금을 추심할 수 있게 합니다.</td>
        </tr>
        <tr>
          <td class="decision-matrix-table__id"><a href="/ko/pacs.028.001.05/"><code>pacs.028.001.05</code></a></td>
          <td class="decision-matrix-table__name">금융기관 간 지급 상태 요청</td>
          <td class="decision-matrix-table__overview">pacs.028 메시지는 금융기관이 이전에 전송한 결제 지시의 상태를 조회하기 위해 발송합니다. 비요청 상태 보고를 기다리지 않고 결제 처리의 능동적 추적을 가능하게 합니다.</td>
        </tr>
    </tbody>
  </table>
</div>

## 주요 비교 포인트

<div class="comparison-points-table" tabindex="0" aria-label="주요 비교 포인트">
  <table>
    <colgroup>
      <col class="comparison-points-table__col-compare">
      <col class="comparison-points-table__col-key">
    </colgroup>
    <thead>
      <tr>
        <th>비교</th>
        <th>핵심 차이</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.008</code> vs <code>pacs.009</code></td>
          <td class="comparison-points-table__key">고객 결제와 기관/커버 자금 이동의 차이</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.004</code> vs <code>pacs.007</code></td>
          <td class="comparison-points-table__key">수취 측 반환과 지시 측 취소의 차이</td>
        </tr>
        <tr>
          <td class="comparison-points-table__compare"><code>pacs.002</code> vs <code>pacs.028</code></td>
          <td class="comparison-points-table__key">상태 보고와 상태 요청의 차이</td>
        </tr>
    </tbody>
  </table>
</div>

## 지원되는 메시지 페이지

- [`pacs.002.001.12`](/ko/pacs.002.001.12/) — 금융기관 간 지급 상태 보고
- [`pacs.003.001.09`](/ko/pacs.003.001.09/) — 금융기관 간 고객 직접출금
- [`pacs.004.001.11`](/ko/pacs.004.001.11/) — 지급 반환
- [`pacs.007.001.11`](/ko/pacs.007.001.11/) — 금융기관 간 지급 취소
- [`pacs.008.001.13`](/ko/pacs.008.001.13/) — 금융기관 간 고객 신용이체
- [`pacs.009.001.10`](/ko/pacs.009.001.10/) — 금융기관 간 신용이체
- [`pacs.010.001.05`](/ko/pacs.010.001.05/) — 금융기관 간 직접출금
- [`pacs.028.001.05`](/ko/pacs.028.001.05/) — 금융기관 간 지급 상태 요청

