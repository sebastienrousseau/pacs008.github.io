---
title: API | 한국어
description: pacs008의 REST 및 CLI 워크플로 지원.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# API

이 프로젝트는 운영 결제 메시지 워크플로를 위한 REST API와 CLI를 모두 제공합니다.

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

| Endpoint | 설명 |
|---|---|
| `GET /health` | 헬스 체크 — 서비스 상태를 반환합니다 |
| `POST /validate` | XML을 생성하지 않고 스키마에 대해 결제 데이터를 유효성 검사합니다 |
| `POST /generate` | XML을 동기적으로 생성하고 파일을 반환합니다 |
| `POST /generate/async` | 비동기 생성 작업을 제출합니다 |
| `GET /status/{job_id}` | ID로 작업 상태를 폴링합니다 |
| `GET /download/{job_id}` | 작업이 완료되면 생성된 XML을 다운로드합니다 |
| `GET /docs` | 모든 엔드포인트를 탐색하고 테스트하기 위한 인터랙티브 Swagger UI |

### 유효성 검사 예제

XML을 생성하기 전에 유효성 검사를 위해 결제 데이터를 제출합니다.

```bash
curl -X POST http://localhost:8000/validate \
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

### 동기 생성 예제

JSON 페이로드에서 pacs.008.001.13 XML 파일을 생성합니다.

```bash
curl -X POST http://localhost:8000/generate \
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
JOB=$(curl -s -X POST http://localhost:8000/generate/async \
  -H "Content-Type: application/json" \
  -d '{"message_type":"pacs.008.001.13","data":[...]}')

JOB_ID=$(echo $JOB | jq -r '.job_id')

# Poll for completion
curl http://localhost:8000/status/$JOB_ID

# Download the result
curl http://localhost:8000/download/$JOB_ID --output result.xml
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

## 필수 데이터 필드

모든 결제 레코드는 다음 필드를 포함해야 합니다. 버전별 필드는 해당 위치에 명시되어 있습니다.

| 필드 | 설명 | 제약 |
|---|---|---|
| `msg_id` | 메시지 식별자 | 최대 35자 |
| `creation_date_time` | 생성 타임스탬프 | ISO 8601 형식 |
| `nb_of_txs` | 거래 건수 | 양의 정수 |
| `settlement_method` | 결제 방법 | CLRG, INDA, COVE 또는 INGA |
| `end_to_end_id` | 종단 간 식별자 | 최대 35자 |
| `interbank_settlement_amount` | 은행 간 결제 금액 | 소수점, 예: `25000.00` |
| `interbank_settlement_currency` | 결제 통화 | ISO 4217 코드 |
| `charge_bearer` | 수수료 부담자 | DEBT, CRED, SHAR 또는 SLEV |
| `debtor_name` | 채무자 이름 | 최대 140자 |
| `debtor_agent_bic` | 채무자 에이전트 BIC | 8 또는 11자 |
| `creditor_agent_bic` | 채권자 에이전트 BIC | 8 또는 11자 |
| `creditor_name` | 채권자 이름 | 최대 140자 |

### 버전별 필드

| 필드 | 설명 | 제약 |
|---|---|---|
| `uetr` | 고유 종단 간 거래 참조 | UUID 형식 — v08부터 사용 가능 |
| `mandate_id` | 위임 식별자 | v10부터 사용 가능 |
| `expiry_date_time` | 메시지 만료 타임스탬프 | v13에서 사용 가능 |

