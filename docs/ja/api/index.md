---
title: "API | pacs008"
description: pacs008 の REST および CLI ワークフローサポート。 金融機関間の顧客クレジット移転ワークフロー向けの生成、検証、API オーケストレーション、コンプライアンス対応。
lang: ja-JP
lastUpdated: true
image: /logo.webp
---

# API

本プロジェクトは運用決済メッセージワークフロー向けに REST API と CLI の両方を提供します。

## 実装メモ

- 呼び出し元が即座に XML を必要とする場合の運用確認や小規模バッチでは同期生成を使います。
- 入力ファイルが大きい場合、再試行が必要な場合、または大きなオーケストレーションの一部である場合は非同期生成を使います。
- 障害時に XML 出力を再現できるよう、入力ペイロードと検証レポートの両方を保存します。
- サイレントアップグレードを防ぐため、テンプレートと XSD のパスはデプロイ設定で固定します。

## インストール

PyPI からパッケージをインストールします。Python 3.9.2 以上が必要です。

```bash
python -m pip install pacs008
```

---

## REST API

組み込みの FastAPI サーバーを起動して、検証と生成用の HTTP エンドポイントを公開します。

### サーバーを起動する

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### エンドポイント

<div class="api-endpoints-table" tabindex="0" aria-label="エンドポイント">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>説明</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">ヘルスチェック — サービスのステータスを返す</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">XML を生成せずにスキーマに対して支払いデータを検証する</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">XML を同期的に生成してファイルを返す</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">非同期生成ジョブを送信する</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ID でジョブのステータスをポーリングする</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ジョブの完了後に生成された XML をダウンロードする</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">保留中または実行中のジョブをキャンセル</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">すべてのエンドポイントを探索・テストするためのインタラクティブな Swagger UI</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/ja/pacs.002.001.12/) — 金融機関間支払ステータス報告
- [`pacs.003.001.09`](/ja/pacs.003.001.09/) — 金融機関間顧客口座振替
- [`pacs.004.001.11`](/ja/pacs.004.001.11/) — 支払返却
- [`pacs.007.001.11`](/ja/pacs.007.001.11/) — 金融機関間支払取消
- [`pacs.008.001.13`](/ja/pacs.008.001.13/) — 金融機関間顧客信用振替
- [`pacs.009.001.10`](/ja/pacs.009.001.10/) — 金融機関間信用振替
- [`pacs.010.001.05`](/ja/pacs.010.001.05/) — 金融機関間口座振替
- [`pacs.028.001.05`](/ja/pacs.028.001.05/) — 金融機関間支払ステータス照会

### 検証の例

XML を生成する前に、支払いデータを検証のために送信します。

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

### 同期生成の例

JSON ペイロードから pacs.008.001.13 XML ファイルを生成します。

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

### 非同期生成

大きなファイルやパイプライン用途では、非同期ジョブを送信して完了をポーリングします。

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

コマンドラインインターフェースは、データファイル、メッセージバージョン、テンプレート、およびスキーマを受け付けます。入力を検証し、生成された XML を出力ディレクトリに書き込みます。

### 基本的な使い方

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### 例

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### ドライランモード

`--dry-run` を使用すると、XML を生成せずに入力データを検証します。終了コードは検証の合格（`0`）または失敗（`1`）を示します。

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

生成中に詳細な出力を得るには `--verbose` を追加します。

---

## Python API

Python スクリプトやサービスで直接ライブラリを使用します。

### 支払いレコードのリストから XML を生成する

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

### SWIFT 準拠チェック

生成前に SWIFT の文字セットおよびフィールド長ルールに対してデータを検証・クレンジングします。

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

同梱のDockerfileを使用してコンテナでAPIを実行します。

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBANおよびBIC検証

XML生成とは独立して金融識別子を検証します。

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## ストリーミング

メモリ使用量を制限するために設定可能なチャンクで大規模データセットを読み込みます。

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

## 検証サービス

生成前の完全な検証パイプラインをプログラム的に実行します。

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

## 必須データフィールド

すべての支払いレコードに以下のフィールドが必要です。バージョン固有のフィールドは該当箇所に記載されています。

<div class="api-fields-table" tabindex="0" aria-label="必須データフィールド">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>フィールド</th>
        <th>説明</th>
        <th>制約</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">メッセージ識別子</td>
          <td class="api-fields-table__constraint">最大 35 文字</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">作成タイムスタンプ</td>
          <td class="api-fields-table__constraint">ISO 8601 形式</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">取引件数</td>
          <td class="api-fields-table__constraint">正の整数</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">決済方法</td>
          <td class="api-fields-table__constraint">CLRG、INDA、COVE、または INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">エンドツーエンド識別子</td>
          <td class="api-fields-table__constraint">最大 35 文字</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">銀行間決済金額</td>
          <td class="api-fields-table__constraint">小数、例: `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">決済通貨</td>
          <td class="api-fields-table__constraint">ISO 4217 コード</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">手数料負担者</td>
          <td class="api-fields-table__constraint">DEBT、CRED、SHAR、または SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">債務者名</td>
          <td class="api-fields-table__constraint">最大 140 文字</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">債務者エージェント BIC</td>
          <td class="api-fields-table__constraint">8 または 11 文字</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">債権者エージェント BIC</td>
          <td class="api-fields-table__constraint">8 または 11 文字</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">債権者名</td>
          <td class="api-fields-table__constraint">最大 140 文字</td>
        </tr>
    </tbody>
  </table>
</div>

### バージョン固有のフィールド

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="バージョン固有のフィールド">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>フィールド</th>
        <th>説明</th>
        <th>制約</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">ユニークなエンドツーエンド取引参照</td>
          <td class="api-fields-table__constraint">UUID 形式 — v08 以降で利用可能</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">マンデート識別子</td>
          <td class="api-fields-table__constraint">v10 以降で利用可能</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">メッセージ有効期限タイムスタンプ</td>
          <td class="api-fields-table__constraint">v13 で利用可能</td>
        </tr>
    </tbody>
  </table>
</div>

