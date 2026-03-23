---
title: API | Português
description: Suporte a fluxos REST e CLI no pacs008.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# API

O projeto fornece tanto uma API REST quanto uma CLI para fluxos operacionais de mensagens de pagamento.

## Instalação

Instale o pacote a partir do PyPI. É necessário Python 3.9.2 ou superior.

```bash
python -m pip install pacs008
```

---

## REST API

Inicie o servidor FastAPI integrado para expor endpoints HTTP de validação e geração.

### Iniciar o servidor

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Endpoints

| Endpoint | Descrição |
|---|---|
| `GET /health` | Health check — retorna o status do serviço |
| `POST /validate` | Valida dados de pagamento contra o esquema sem gerar XML |
| `POST /generate` | Gera XML de forma síncrona e retorna o arquivo |
| `POST /generate/async` | Envia um job de geração assíncrono |
| `GET /status/{job_id}` | Consulta o status do job por ID |
| `GET /download/{job_id}` | Faz download do XML gerado após a conclusão do job |
| `DELETE /jobs/{job_id}` | Cancelar um trabalho pendente ou em execução |
| `GET /docs` | Swagger UI interativo para explorar e testar todos os endpoints |

### Exemplo de validação

Envie dados de pagamento para validação antes de gerar XML.

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

### Exemplo de geração síncrona

Gera um arquivo XML pacs.008.001.13 a partir de um payload JSON.

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

### Geração assíncrona

Para arquivos maiores ou uso em pipelines, envie um job assíncrono e consulte a conclusão.

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

---

## CLI

A interface de linha de comando aceita um arquivo de dados, uma versão de mensagem, um template e um esquema. Valida a entrada e grava o XML gerado no diretório de saída.

### Uso básico

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Exemplo

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Modo dry-run

Use `--dry-run` para validar dados de entrada sem gerar XML. O código de saída indica se a validação passou (`0`) ou falhou (`1`).

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Adicione `--verbose` para saída detalhada durante a geração.

---

## Python API

Use a biblioteca diretamente em scripts ou serviços Python.

### Gerar XML a partir de uma lista de registros de pagamento

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

### Verificação de conformidade SWIFT

Valide e higienize os dados de acordo com as regras de conjunto de caracteres e comprimento de campo do SWIFT antes da geração.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Execute a API em um contêiner utilizando o Dockerfile incluído.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

---

## Validação IBAN e BIC

Valide identificadores financeiros independentemente da geração XML.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Streaming

Carregue grandes conjuntos de dados em lotes configuráveis para limitar o uso de memória.

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

---

## Serviço de validação

Execute o pipeline completo de validação pré-geração de forma programática.

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

## Campos de dados obrigatórios

Cada registro de pagamento deve incluir os seguintes campos. Campos específicos de versão são indicados onde aplicável.

| Campo | Descrição | Restrição |
|---|---|---|
| `msg_id` | Identificador de mensagem | Máx. 35 caracteres |
| `creation_date_time` | Carimbo de data e hora de criação | Formato ISO 8601 |
| `nb_of_txs` | Número de transações | Número inteiro positivo |
| `settlement_method` | Método de liquidação | CLRG, INDA, COVE ou INGA |
| `end_to_end_id` | Identificador end-to-end | Máx. 35 caracteres |
| `interbank_settlement_amount` | Valor de liquidação interbancária | Decimal, ex.: `25000.00` |
| `interbank_settlement_currency` | Moeda de liquidação | Código ISO 4217 |
| `charge_bearer` | Portador de encargos | DEBT, CRED, SHAR ou SLEV |
| `debtor_name` | Nome do devedor | Máx. 140 caracteres |
| `debtor_agent_bic` | BIC do agente do devedor | 8 ou 11 caracteres |
| `creditor_agent_bic` | BIC do agente do credor | 8 ou 11 caracteres |
| `creditor_name` | Nome do credor | Máx. 140 caracteres |

### Campos específicos de versão

| Campo | Descrição | Restrição |
|---|---|---|
| `uetr` | Referência única de transação end-to-end | Formato UUID — disponível a partir da v08 |
| `mandate_id` | Identificador de mandato | Disponível a partir da v10 |
| `expiry_date_time` | Carimbo de data e hora de expiração da mensagem | Disponível na v13 |

