---
title: "pacs 메시지 설명 | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ko-KR
lastUpdated: true
image: /logo.webp
---

# pacs 메시지 설명

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## 결제 수명주기

pacs 결제의 전체 수명주기는 6단계로 구성되며, 여러 메시지 유형이 함께 작동합니다.

**1단계 — 개시.** 결제는 고객-은행 영역(pain.001)에서 시작됩니다. 채무자의 은행이 지시를 수신하고 은행 간 영역으로 매핑합니다.

**2단계 — 은행 간 지시.** 채무자 에이전트가 pacs.008을 생성하여 체인의 다음 에이전트에게 전송합니다. 직렬 흐름에서 pacs.008은 중개기관을 통해 홉별로 이동합니다. 커버 흐름에서 pacs.008은 채무자 에이전트에서 채권자 에이전트로 직접 전달되고, 별도의 pacs.009가 환거래 체인을 통해 자금 조달 구간을 전달합니다.

**3단계 — 상태 보고.** 각 홉에서 수취 에이전트는 수락(ACCP/ACSP/ACSC), 거부(RJCT), 대기 상태(PDNG)를 확인하는 pacs.002를 반환할 수 있습니다. CBPR+에서는 모든 결제 상태 통신에 pacs.002가 필수입니다.

**4단계 — 결제.** 결제는 청산 시스템(CLRG), 환거래 계좌(INDA/INGA), 커버 결제(COVE)를 통해 이루어집니다. 은행 간 결제 날짜와 금액이 결제 시기와 규모를 결정합니다.

**5단계 — 수취인 입금.** 채권자 에이전트가 수취인에게 입금하고 고객 통지를 발송할 수 있습니다.

**6단계 — 예외 처리.** 결제 완료 후 수취인에게 입금할 수 없는 경우, pacs.004가 체인을 통해 자금을 되돌려 보냅니다. 송금인이 오류 또는 사기를 발견한 경우, pacs.007이 체인을 따라 앞으로 전송됩니다. 상태를 알 수 없는 경우, pacs.028이 다음 에이전트에게 조회하고 응답은 pacs.002를 통해 돌아옵니다.

### 직렬 방식 흐름

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### 커버 방식 흐름

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## pacs.008의 XML 구조

pacs.008은 두 가지 주요 구성 요소로 이루어집니다: Group Header(GrpHdr)와 Credit Transfer Transaction Information(CdtTrfTxInf).

### Group Header(GrpHdr)

Group Header는 메시지당 정확히 한 번 나타나며 다음을 포함합니다:

- **MsgId** — 송신 에이전트가 할당하는 고유 메시지 식별자. 최대 35자, 송신자별로 고유해야 합니다.
- **CreDtTm** — ISO 8601 형식의 생성 타임스탬프.
- **NbOfTxs** — 메시지 내 개별 거래 수.
- **SttlmInf** — 결제 방법(SttlmMtd)과 선택적으로 청산 시스템 및 결제 계좌를 포함하는 결제 정보.
- **IntrBkSttlmDt** — 은행 간 결제가 이루어지는 날짜.
- **PmtTpInf** — 우선순위, 서비스 수준, 현지 수단, 분류 목적을 포함하는 결제 유형 정보.

### Credit Transfer Transaction Information(CdtTrfTxInf)

각 거래는 다음을 포함합니다:

- **PmtId** — 결제 식별자: InstrId, EndToEndId, TxId, UETR.
- **IntrBkSttlmAmt** — 통화 코드가 포함된 은행 간 결제 금액.
- **InstdAmt** — 원래 지시 금액(환율로 인해 결제 금액과 다를 수 있음).
- **ChrgBr** — 수수료 부담 코드(DEBT, CRED, SHAR 또는 SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — 채무자 이름, 주소, 식별, 계좌 및 에이전트.
- **Cdtr / CdtrAcct / CdtrAgt** — 채권자 이름, 주소, 식별, 계좌 및 에이전트.
- **IntrmyAgt1 / 2 / 3** — 체인 내 최대 3개의 중개 에이전트.
- **RmtInf** — 송금 정보. 비구조화(자유 텍스트) 또는 구조화(문서 참조, 금액, 날짜).
- **Purp** — 구조화된 목적 코드.
- **RgltryRptg** — 규제 보고 세부 사항.

## 결제 식별자

pacs 메시지는 결제 체인에서 서로 다른 역할을 수행하는 여러 식별자를 사용합니다.

<div class="api-fields-table" tabindex="0" aria-label="Payment identifiers">
  <table>
    <caption>결제 식별자와 역할</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">식별자</th>
        <th scope="col">설정 주체</th>
        <th scope="col">체인에서 변경 여부</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">각 송신 에이전트</td>
          <td class="api-fields-table__constraint">예 — 메시지마다 신규 생성</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">각 지시 에이전트</td>
          <td class="api-fields-table__constraint">예 — 홉마다 변경 가능</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">송금인(채무자)</td>
          <td class="api-fields-table__constraint">아니오 — 변경 불가</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">최초 지시 에이전트</td>
          <td class="api-fields-table__constraint">아니오 — 변경 불가</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">채무자 에이전트</td>
          <td class="api-fields-table__constraint">아니오 — 범용 추적</td>
        </tr>
    </tbody>
  </table>
</div>

## 결제 방법

SttlmMtd 요소는 은행 간 결제 방식을 정의합니다.

- **CLRG** — TARGET2, EURO1, CHIPS와 같은 청산 시스템을 통한 결제. 국내 및 지역 청산에 가장 일반적입니다.
- **INDA** — 피지시 에이전트의 장부에서 결제. 채무자 에이전트가 다음 에이전트에 nostro 계좌를 보유합니다. 양자 환거래에 일반적입니다.
- **INGA** — 지시 에이전트의 장부에서 결제. 피지시 에이전트가 송신 에이전트에 nostro 계좌를 보유합니다. INDA보다 덜 일반적입니다.
- **COVE** — 별도의 커버 결제를 통한 결제. pacs.009가 자금 조달 구간을 담당하고 pacs.008이 고객 데이터를 직접 전달합니다. 국경 간 환거래에 사용됩니다.

## 수수료 부담 코드

ChrgBr 요소는 결제 수수료의 부담 주체를 지정합니다.

- **DEBT** — 채무자가 모든 수수료를 부담합니다(MT103 해당: OUR). 채권자가 전액을 수령합니다.
- **CRED** — 채권자가 모든 수수료를 부담합니다(MT103 해당: BEN). 수수료가 이체 금액에서 공제됩니다.
- **SHAR** — 수수료를 분담합니다(MT103 해당: SHA). 각 당사자가 자기 에이전트의 수수료를 부담합니다. 국경 간 결제에 가장 일반적입니다.
- **SLEV** — 수수료는 서비스 수준을 따릅니다. SEPA에 필수입니다. 이체 금액에서 공제가 없습니다.

## MT103에서 pacs.008로의 필드 매핑

<div class="api-fields-table" tabindex="0" aria-label="MT103 to pacs.008 field mapping">
  <table>
    <caption>MT103에서 pacs.008로의 주요 필드 매핑</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">MT103 필드</th>
        <th scope="col">MT103 명칭</th>
        <th scope="col">pacs.008 XML 경로</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Sender's Reference</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Bank Operation Code</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Value Date / Amount</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Instructed Amount</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Ordering Customer</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Ordering Institution</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Account With Institution</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Beneficiary Customer</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Remittance Information</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Details of Charges</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Sender to Receiver Info</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## 상태 및 사유 코드

### pacs.002 상태 코드

<div class="api-fields-table" tabindex="0" aria-label="pacs.002 status codes">
  <table>
    <caption>pacs.002의 거래 상태 코드</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">코드</th>
        <th scope="col">의미</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">수락 — 사전 검사 통과</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">수락 — 결제 진행 중</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">수락 — 결제 완료</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">수신 — 아직 처리되지 않음</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">대기 — 추가 처리 필요</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">거부 — 사유 코드 포함</td></tr>
    </tbody>
  </table>
</div>

### 일반적인 거부 및 반환 사유 코드

<div class="api-fields-table" tabindex="0" aria-label="Common reason codes">
  <table>
    <caption>자주 사용되는 거부 및 반환 사유 코드</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">코드</th>
        <th scope="col">명칭</th>
        <th scope="col">설명</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">잘못된 계좌 번호</td><td class="api-fields-table__constraint">계좌 번호가 유효하지 않거나 존재하지 않음</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">해지 계좌</td><td class="api-fields-table__constraint">계좌가 해지됨</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">차단 계좌</td><td class="api-fields-table__constraint">거래가 차단된 계좌</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">잔액 부족</td><td class="api-fields-table__constraint">채무자 계좌의 잔액 부족</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">중복</td><td class="api-fields-table__constraint">중복 결제 감지</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">채권자 주소 누락</td><td class="api-fields-table__constraint">채권자 주소가 누락되었거나 불완전함</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">고객 요청</td><td class="api-fields-table__constraint">고객이 요청한 반환 또는 거부</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">중복 결제</td><td class="api-fields-table__constraint">중복 결제 확인</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">취소 요청에 따른 처리</td><td class="api-fields-table__constraint">취소 요청에 따른 후속 처리</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">사기</td><td class="api-fields-table__constraint">사기 의심</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">잘못된 BIC</td><td class="api-fields-table__constraint">BIC가 잘못되었거나 알 수 없음</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">채권자 이름/주소 누락</td><td class="api-fields-table__constraint">채권자 이름 또는 주소 데이터 누락</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">마감 시간</td><td class="api-fields-table__constraint">마감 시간이 경과함</td></tr>
    </tbody>
  </table>
</div>

## 우편 주소 형식

### 구조화 주소

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### 비구조화 주소(2026년 11월 이후 CBPR+에서 사용 중단)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

주요 제약 사항: StrtNm 최대 70자(CBPR+), TwnNm 최대 35자(CBPR+), Ctry는 ISO 3166-1 alpha-2, AdrLine은 라인당 최대 70자, 최대 7개 라인.

## 당사자 식별

pacs.008의 당사자는 여러 식별 방법을 지원합니다:

- **BIC** — ISO 9362에 따른 Business Identifier Code. 8자 또는 11자(BBBBCCLL 또는 BBBBCCLLBBB). 에이전트의 FinInstnId/BICFI와 당사자의 OrgId/AnyBIC에 사용됩니다.
- **LEI** — ISO 17442에 따른 Legal Entity Identifier. 영숫자 20자. 당사자의 OrgId/LEI와 에이전트의 FinInstnId/LEI에 나타납니다. 규제 보고를 위한 엔티티 구분을 개선합니다.
- **IBAN** — ISO 13616에 따른 International Bank Account Number. DbtrAcct/Id/IBAN 및 CdtrAcct/Id/IBAN에 사용됩니다.
- **조직 ID** — 기타 체계 기반 식별자(세금 ID, DUNS, 고객 번호)로 OrgId/Othr에 체계명 코드와 함께 사용됩니다.
- **개인 ID** — 자연인의 경우: 생년월일 및 출생지, 여권(CCPT), 주민등록번호(NIDN), 운전면허증(DRLC)으로 PrvtId에 사용됩니다.

## 송금 정보

pacs.008의 송금 데이터는 RmtInf 요소를 사용하며 두 가지 형태가 있습니다:

**비구조화** — 발생당 최대 140자의 자유 텍스트. 간단하지만 자동 대사에 한계가 있습니다.

**구조화** — 유형 코드, 번호, 날짜, 금액이 포함된 문서 참조. 일반적인 문서 유형: CINV(상업 송장), CREN(대변 메모), SOAC(계정 명세서). CdtrRefInf를 통한 ISO 11649 채권자 참조(RF + 검사 숫자 + 참조)를 지원합니다. 자동 송장 매칭과 다중 송장 결제가 가능합니다.

## UETR 및 gpi 추적

UETR(Unique End-to-End Transaction Reference)는 채무자 에이전트가 생성하는 UUID v4입니다. pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, pacs.028에 걸쳐 PmtId/UETR에 나타납니다. 전체 결제 체인에서 변경 없이 유지되어야 합니다.

SWIFT gpi는 UETR을 사용하여 클라우드 기반 Tracker 데이터베이스를 통해 결제를 추적합니다. 각 에이전트가 수신 및 처리를 확인하여 종단 간 가시성이 확보됩니다. 국경 간 결제에 대한 gpi SLA는 채권자 계좌에 당일 입금을 목표로 합니다.

## 참고 자료

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

