---
title: API | pacs008
description: Suporte a fluxos REST e CLI no pacs008.
lang: pt-BR
lastUpdated: true
image: /logo.svg
---

# API

O projeto fornece tanto uma API REST quanto uma CLI para processos operacionais de mensagens de pagamento.

## Notas de implementação

- Use geração síncrona para verificações operacionais e lotes pequenos quando o chamador espera XML imediatamente.
- Use geração assíncrona quando os arquivos de entrada forem grandes, quando os jobs precisarem de nova tentativa ou quando a geração fizer parte de um processo de orquestração mais amplo.
- Armazene tanto a carga útil de origem quanto o relatório de validação para que equipes de suporte consigam reproduzir a saída XML durante incidentes.
- Fixe os caminhos dos modelos XML e dos arquivos XSD na configuração de implantação para evitar atualizações silenciosas.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Endpoints">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Health check — retorna o status do serviço</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">Valida dados de pagamento contra o esquema sem gerar XML</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">Gera XML de forma síncrona e retorna o arquivo</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Envia um job de geração assíncrono</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Consulta o status do job por ID</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Faz download do XML gerado após a conclusão do job</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Cancelar um trabalho pendente ou em execução</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Swagger UI interativo para explorar e testar todos os endpoints</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/pt/pacs.002.001.12/) — Relatório de status de pagamento FI a FI
- [`pacs.003.001.09`](/pt/pacs.003.001.09/) — Débito direto de cliente FI a FI
- [`pacs.004.001.11`](/pt/pacs.004.001.11/) — Retorno de pagamento
- [`pacs.007.001.11`](/pt/pacs.007.001.11/) — Reversão de pagamento FI a FI
- [`pacs.008.001.13`](/pt/pacs.008.001.13/) — Transferência de crédito de cliente FI a FI
- [`pacs.009.001.10`](/pt/pacs.009.001.10/) — Transferência de crédito entre instituições financeiras
- [`pacs.010.001.05`](/pt/pacs.010.001.05/) — Débito direto entre instituições financeiras
- [`pacs.028.001.05`](/pt/pacs.028.001.05/) — Solicitação de status de pagamento FI a FI

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

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
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

A interface de linha de comando aceita um arquivo de dados, uma versão de mensagem, um modelo XML e um esquema. Valida a entrada e grava o XML gerado no diretório de saída.

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

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
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

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
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

<div class="api-fields-table" tabindex="0" aria-label="Campos de dados obrigatórios">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Campo</th>
        <th>Descrição</th>
        <th>Restrição</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Identificador de mensagem</td>
          <td class="api-fields-table__constraint">Máx. 35 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Carimbo de data e hora de criação</td>
          <td class="api-fields-table__constraint">Formato ISO 8601</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">Número de transações</td>
          <td class="api-fields-table__constraint">Número inteiro positivo</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Método de liquidação</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE ou INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Identificador end-to-end</td>
          <td class="api-fields-table__constraint">Máx. 35 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Valor de liquidação interbancária</td>
          <td class="api-fields-table__constraint">Decimal, ex.: `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Moeda de liquidação</td>
          <td class="api-fields-table__constraint">Código ISO 4217</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Portador de encargos</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR ou SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Nome do devedor</td>
          <td class="api-fields-table__constraint">Máx. 140 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC do agente do devedor</td>
          <td class="api-fields-table__constraint">8 ou 11 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">BIC do agente do credor</td>
          <td class="api-fields-table__constraint">8 ou 11 caracteres</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Nome do credor</td>
          <td class="api-fields-table__constraint">Máx. 140 caracteres</td>
        </tr>
    </tbody>
  </table>
</div>

### Campos específicos de versão

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Campos específicos de versão">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Campo</th>
        <th>Descrição</th>
        <th>Restrição</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Referência única de transação end-to-end</td>
          <td class="api-fields-table__constraint">Formato UUID — disponível a partir da v08</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Identificador de mandato</td>
          <td class="api-fields-table__constraint">Disponível a partir da v10</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Carimbo de data e hora de expiração da mensagem</td>
          <td class="api-fields-table__constraint">Disponível na v13</td>
        </tr>
    </tbody>
  </table>
</div>

