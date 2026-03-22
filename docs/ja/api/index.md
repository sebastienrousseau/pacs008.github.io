---
title: API | 日本語
description: pacs008 の REST および CLI ワークフローサポート。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# API

本プロジェクトは運用決済メッセージワークフロー向けに REST API と CLI の両方を提供します。

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

| Endpoint | 説明 |
|---|---|
| `GET /health` | ヘルスチェック — サービスのステータスを返す |
| `POST /validate` | XML を生成せずにスキーマに対して支払いデータを検証する |
| `POST /generate` | XML を同期的に生成してファイルを返す |
| `POST /generate/async` | 非同期生成ジョブを送信する |
| `GET /status/{job_id}` | ID でジョブのステータスをポーリングする |
| `GET /download/{job_id}` | ジョブの完了後に生成された XML をダウンロードする |
| `GET /docs` | すべてのエンドポイントを探索・テストするためのインタラクティブな Swagger UI |

### 検証の例

XML を生成する前に、支払いデータを検証のために送信します。

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

### 同期生成の例

JSON ペイロードから pacs.008.001.13 XML ファイルを生成します。

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

### 非同期生成

大きなファイルやパイプライン用途では、非同期ジョブを送信して完了をポーリングします。

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

## 必須データフィールド

すべての支払いレコードに以下のフィールドが必要です。バージョン固有のフィールドは該当箇所に記載されています。

| フィールド | 説明 | 制約 |
|---|---|---|
| `msg_id` | メッセージ識別子 | 最大 35 文字 |
| `creation_date_time` | 作成タイムスタンプ | ISO 8601 形式 |
| `nb_of_txs` | 取引件数 | 正の整数 |
| `settlement_method` | 決済方法 | CLRG、INDA、COVE、または INGA |
| `end_to_end_id` | エンドツーエンド識別子 | 最大 35 文字 |
| `interbank_settlement_amount` | 銀行間決済金額 | 小数、例: `25000.00` |
| `interbank_settlement_currency` | 決済通貨 | ISO 4217 コード |
| `charge_bearer` | 手数料負担者 | DEBT、CRED、SHAR、または SLEV |
| `debtor_name` | 債務者名 | 最大 140 文字 |
| `debtor_agent_bic` | 債務者エージェント BIC | 8 または 11 文字 |
| `creditor_agent_bic` | 債権者エージェント BIC | 8 または 11 文字 |
| `creditor_name` | 債権者名 | 最大 140 文字 |

### バージョン固有のフィールド

| フィールド | 説明 | 制約 |
|---|---|---|
| `uetr` | ユニークなエンドツーエンド取引参照 | UUID 形式 — v08 以降で利用可能 |
| `mandate_id` | マンデート識別子 | v10 以降で利用可能 |
| `expiry_date_time` | メッセージ有効期限タイムスタンプ | v13 で利用可能 |

