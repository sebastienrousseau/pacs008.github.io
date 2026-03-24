---
title: "API | pacs008"
description: pacs008의 REST 및 CLI 워크플로 지원. 금융기관 간 고객 신용 이체 워크플로를 위한 생성, 검증, API 오케스트레이션, 규정 준수 지원.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# API

이 프로젝트는 운영 결제 메시지 워크플로를 위한 REST API와 CLI를 모두 제공합니다.

## 구현 메모

- 호출자가 즉시 XML 을 기대하는 운영 점검과 소규모 배치에는 동기 생성을 사용합니다.
- 입력 파일이 크거나, 재시도가 필요하거나, 더 큰 오케스트레이션 엔진의 일부인 경우 비동기 생성을 사용합니다.
- 장애 시 XML 출력을 재현할 수 있도록 원본 페이로드와 검증 보고서를 모두 보관합니다.
- 무음 업그레이드를 막기 위해 템플릿과 XSD 경로를 배포 설정에서 고정합니다.

## 설치

PyPI에서 패키지를 설치합니다. Python 3.9.2 이상이 필요합니다.

```bash
python -m pip install pacs008
```

---

## REST API

내장된 FastAPI 서버를 시작하여 유효성 검사 및 생성을 위한 HTTP 엔드포인트를 노출합니다.

### 서버 시작

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### 엔드포인트

<div class="api-endpoints-table" tabindex="0" aria-label="엔드포인트">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">헬스 체크 — 서비스 상태를 반환합니다</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">XML을 생성하지 않고 스키마에 대해 결제 데이터를 유효성 검사합니다</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">XML을 동기적으로 생성하고 파일을 반환합니다</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">비동기 생성 작업을 제출합니다</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ID로 작업 상태를 폴링합니다</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">작업이 완료되면 생성된 XML을 다운로드합니다</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">대기 중이거나 실행 중인 작업 취소</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">모든 엔드포인트를 탐색하고 테스트하기 위한 인터랙티브 Swagger UI</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/ko/pacs.002.001.12/) — 금융기관 간 지급 상태 보고
- [`pacs.003.001.09`](/ko/pacs.003.001.09/) — 금융기관 간 고객 직접출금
- [`pacs.004.001.11`](/ko/pacs.004.001.11/) — 지급 반환
- [`pacs.007.001.11`](/ko/pacs.007.001.11/) — 금융기관 간 지급 취소
- [`pacs.008.001.13`](/ko/pacs.008.001.13/) — 금융기관 간 고객 신용이체
- [`pacs.009.001.10`](/ko/pacs.009.001.10/) — 금융기관 간 신용이체
- [`pacs.010.001.05`](/ko/pacs.010.001.05/) — 금융기관 간 직접출금
- [`pacs.028.001.05`](/ko/pacs.028.001.05/) — 금융기관 간 지급 상태 요청

### 유효성 검사 예제

XML을 생성하기 전에 유효성 검사를 위해 결제 데이터를 제출합니다.

```bash
curl -X POST http://localhost:8000/api/validate \
  -H "Content-Type: application/json" \
  -d '{
    "message_type": "pacs.008.001.13",
    "data": [{
      "msg_id": "MSG-2026-001",
      "creation_date_time": "2026-01-15T10:30:00",
      "nb_of_txs": "1",
      "settlement_method": "CLRG",
      "interbank_settlement_date": "2026-01-15",
      "end_to_end_id": "E2E-INV-2026-001",
      "interbank_settlement_amount": "25000.00",
      "interbank_settlement_currency": "EUR",
      "charge_bearer": "SHAR",
      "debtor_name": "Acme Corp GmbH",
      "debtor_agent_bic": "DEUTDEFF",
      "creditor_agent_bic": "COBADEFF",
      "creditor_name": "Widget Industries SA"
    }]
  }'
```

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
```

### 동기 생성 예제

JSON 페이로드에서 pacs.008.001.13 XML 파일을 생성합니다.

```bash
curl -X POST http://localhost:8000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "message_type": "pacs.008.001.13",
    "template": "pacs008/templates/pacs.008.001.13/template.xml",
    "schema": "pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
    "data": [{
      "msg_id": "MSG-2026-001",
      "creation_date_time": "2026-01-15T10:30:00",
      "nb_of_txs": "1",
      "settlement_method": "CLRG",
      "interbank_settlement_date": "2026-01-15",
      "end_to_end_id": "E2E-INV-2026-001",
      "tx_id": "TX-001",
      "interbank_settlement_amount": "25000.00",
      "interbank_settlement_currency": "EUR",
      "charge_bearer": "SHAR",
      "debtor_name": "Acme Corp GmbH",
      "debtor_agent_bic": "DEUTDEFF",
      "creditor_agent_bic": "COBADEFF",
      "creditor_name": "Widget Industries SA"
    }]
  }' --output pacs008_output.xml
```

### 비동기 생성

대용량 파일이나 파이프라인 사용의 경우, 비동기 작업을 제출하고 완료를 폴링합니다.

```bash
# Submit the job
JOB=$(curl -s -X POST http://localhost:8000/api/generate/async \
  -H "Content-Type: application/json" \
  -d '{"message_type":"pacs.008.001.13","data":[...]}')

JOB_ID=$(echo $JOB | jq -r '.job_id')

# Poll for completion
curl http://localhost:8000/api/status/$JOB_ID

# Download the result
curl http://localhost:8000/api/download/$JOB_ID --output result.xml
```

```json
{
  "job_id": "8f7f0d4b-7df9-4d1a-8d47-19f4f28b6d38",
  "status": "completed",
  "message_type": "pacs.008.001.13",
  "download_url": "/api/download/8f7f0d4b-7df9-4d1a-8d47-19f4f28b6d38"
}
```

---

## CLI

커맨드라인 인터페이스는 데이터 파일, 메시지 버전, 템플릿, 스키마를 인수로 받습니다. 입력을 유효성 검사하고 생성된 XML을 출력 디렉토리에 저장합니다.

### 기본 사용법

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### 예제

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### 드라이런 모드

`--dry-run`을 사용하면 XML을 생성하지 않고 입력 데이터를 유효성 검사합니다. 종료 코드는 유효성 검사 통과(`0`) 또는 실패(`1`)를 나타냅니다.

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

생성 중 상세 출력을 보려면 `--verbose`를 추가하세요.

---

## Python API

Python 스크립트나 서비스에서 직접 라이브러리를 사용합니다.

### 결제 레코드 목록에서 XML 생성

```python
from pacs008 import generate_xml_string

payments = [{
    "msg_id": "MSG-2026-001",
    "creation_date_time": "2026-01-15T10:30:00",
    "nb_of_txs": "1",
    "settlement_method": "CLRG",
    "interbank_settlement_date": "2026-01-15",
    "end_to_end_id": "E2E-INV-2026-001",
    "tx_id": "TX-001",
    "interbank_settlement_amount": "25000.00",
    "interbank_settlement_currency": "EUR",
    "charge_bearer": "SHAR",
    "debtor_name": "Acme Corp GmbH",
    "debtor_agent_bic": "DEUTDEFF",
    "creditor_agent_bic": "COBADEFF",
    "creditor_name": "Widget Industries SA",
}]

xml = generate_xml_string(
    payments,
    "pacs.008.001.13",
    "pacs008/templates/pacs.008.001.13/template.xml",
    "pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
)
print(xml)
```

### SWIFT 준수 검사

생성 전에 SWIFT 문자 집합 및 필드 길이 규칙에 대해 데이터를 유효성 검사하고 정제합니다.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

포함된 Dockerfile을 사용하여 컨테이너에서 API를 실행합니다.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN 및 BIC 검증

XML 생성과 독립적으로 금융 식별자를 검증합니다.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## 스트리밍

메모리 사용량을 제한하기 위해 설정 가능한 청크로 대규모 데이터셋을 로드합니다.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
```

---

## 검증 서비스

생성 전 전체 검증 파이프라인을 프로그래밍 방식으로 실행합니다.

```python
from pacs008.validation import ValidationService, ValidationConfig

service = ValidationService()
report = service.validate_all(ValidationConfig(
    xml_message_type="pacs.008.001.13",
    xml_template_file_path="pacs008/templates/pacs.008.001.13/template.xml",
    xsd_schema_file_path="pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd",
    data_file_path="payments.csv",
))
print(report.is_valid, report.errors)
```

---

## 필수 데이터 필드

모든 결제 레코드는 다음 필드를 포함해야 합니다. 버전별 필드는 해당 위치에 명시되어 있습니다.

<div class="api-fields-table" tabindex="0" aria-label="필수 데이터 필드">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>필드</th>
        <th>설명</th>
        <th>제약</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">메시지 식별자</td>
          <td class="api-fields-table__constraint">최대 35자</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">생성 타임스탬프</td>
          <td class="api-fields-table__constraint">ISO 8601 형식</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">거래 건수</td>
          <td class="api-fields-table__constraint">양의 정수</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">결제 방법</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE 또는 INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">종단 간 식별자</td>
          <td class="api-fields-table__constraint">최대 35자</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">은행 간 결제 금액</td>
          <td class="api-fields-table__constraint">소수점, 예: `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">결제 통화</td>
          <td class="api-fields-table__constraint">ISO 4217 코드</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">수수료 부담자</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR 또는 SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">채무자 이름</td>
          <td class="api-fields-table__constraint">최대 140자</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">채무자 에이전트 BIC</td>
          <td class="api-fields-table__constraint">8 또는 11자</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">채권자 에이전트 BIC</td>
          <td class="api-fields-table__constraint">8 또는 11자</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">채권자 이름</td>
          <td class="api-fields-table__constraint">최대 140자</td>
        </tr>
    </tbody>
  </table>
</div>

### 버전별 필드

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="버전별 필드">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>필드</th>
        <th>설명</th>
        <th>제약</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">고유 종단 간 거래 참조</td>
          <td class="api-fields-table__constraint">UUID 형식 — v08부터 사용 가능</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">위임 식별자</td>
          <td class="api-fields-table__constraint">v10부터 사용 가능</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">메시지 만료 타임스탬프</td>
          <td class="api-fields-table__constraint">v13에서 사용 가능</td>
        </tr>
    </tbody>
  </table>
</div>

