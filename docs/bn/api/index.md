---
title: "pacs008 API রেফারেন্স | pacs008"
description: pacs008-এ REST এবং CLI ওয়ার্কফ্লো সহায়তা।
lang: bn-BD
lastUpdated: true
image: /logo.webp
---

# pacs008 API রেফারেন্স

প্রকল্পটি অপারেশনাল পেমেন্ট বার্তা প্রক্রিয়াকরণ ওয়ার্কফ্লোর জন্য REST API এবং CLI উভয়ই প্রদান করে।

## ইনস্টলেশন

PyPI থেকে প্যাকেজ ইনস্টল করুন। Python 3.9.2 বা পরবর্তী সংস্করণ প্রয়োজন।

```bash
python -m pip install pacs008
```

---

## REST API

যাচাইকরণ এবং জেনারেশনের জন্য HTTP এন্ডপয়েন্ট পরিবেশন করতে বিল্ট-ইন FastAPI সার্ভার শুরু করুন।

### সার্ভার শুরু করুন

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### এন্ডপয়েন্ট

<div class="api-endpoints-table" tabindex="0" aria-label="এন্ডপয়েন্ট">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>বিবরণ</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">হেলথ চেক — পরিষেবার অবস্থা ফেরত দেয়</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">XML তৈরি না করে স্কিমার বিপরীতে পেমেন্ট ডেটা যাচাই করুন</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">সিঙ্ক্রোনাসভাবে XML তৈরি করুন এবং ফাইল ফেরত দিন</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">একটি অ্যাসিঙ্ক্রোনাস জেনারেশন কাজ জমা দিন</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ID দ্বারা কাজের অবস্থা পোল করুন</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">কাজ সম্পন্ন হলে তৈরি XML ডাউনলোড করুন</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">মুলতুবি বা চলমান কাজ বাতিল করুন</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">সমস্ত এন্ডপয়েন্ট অন্বেষণ এবং পরীক্ষা করার জন্য ইন্টারেক্টিভ Swagger UI</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/bn/pacs.002.001.12/) — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস রিপোর্ট
- [`pacs.003.001.09`](/bn/pacs.003.001.09/) — আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ডাইরেক্ট ডেবিট
- [`pacs.004.001.11`](/bn/pacs.004.001.11/) — পেমেন্ট রিটার্ন
- [`pacs.007.001.11`](/bn/pacs.007.001.11/) — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট রিভার্সাল
- [`pacs.008.001.13`](/bn/pacs.008.001.13/) — আর্থিক প্রতিষ্ঠানের মধ্যে গ্রাহক ক্রেডিট ট্রান্সফার
- [`pacs.009.001.10`](/bn/pacs.009.001.10/) — আর্থিক প্রতিষ্ঠানের মধ্যে ক্রেডিট ট্রান্সফার
- [`pacs.010.001.05`](/bn/pacs.010.001.05/) — আর্থিক প্রতিষ্ঠানের মধ্যে ডাইরেক্ট ডেবিট
- [`pacs.028.001.05`](/bn/pacs.028.001.05/) — আর্থিক প্রতিষ্ঠানের মধ্যে পেমেন্ট স্ট্যাটাস অনুরোধ

### যাচাইকরণ উদাহরণ

XML তৈরির আগে যাচাইয়ের জন্য পেমেন্ট ডেটা জমা দিন।

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

### সিঙ্ক্রোনাস জেনারেশন উদাহরণ

JSON পেলোড থেকে একটি pacs.008.001.13 XML ফাইল তৈরি করুন।

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

### অ্যাসিঙ্ক্রোনাস জেনারেশন

বড় ফাইল বা পাইপলাইন ব্যবহারের জন্য, একটি অ্যাসিঙ্ক্রোনাস কাজ জমা দিন এবং সম্পন্ন হওয়া পর্যন্ত পোল করুন।

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

কমান্ড-লাইন ইন্টারফেস একটি ডেটা ফাইল, বার্তা সংস্করণ, টেমপ্লেট এবং স্কিমা নেয়। এটি ইনপুট যাচাই করে এবং আউটপুট ডিরেক্টরিতে তৈরি XML লেখে।

### মৌলিক ব্যবহার

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### উদাহরণ

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### ড্রাই-রান মোড

XML তৈরি না করে ইনপুট ডেটা যাচাই করতে `--dry-run` ব্যবহার করুন। এক্সিট কোড নির্দেশ করে যাচাই পাস হয়েছে (`0`) বা ব্যর্থ হয়েছে (`1`)।

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

জেনারেশনের সময় বিস্তারিত আউটপুটের জন্য `--verbose` যোগ করুন।

---

## Python API

Python স্ক্রিপ্ট বা পরিষেবাগুলিতে সরাসরি লাইব্রেরি ব্যবহার করুন।

### পেমেন্ট রেকর্ড থেকে XML তৈরি করুন

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

### SWIFT কমপ্লায়েন্স চেক

জেনারেশনের আগে SWIFT ক্যারেক্টার এবং ফিল্ড-দৈর্ঘ্য নিয়মের বিপরীতে ডেটা যাচাই এবং পরিষ্কার করুন।

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

বান্ডেলড Dockerfile ব্যবহার করে একটি কন্টেইনারে API চালান।

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN এবং BIC যাচাইকরণ

XML জেনারেশন থেকে স্বাধীনভাবে আর্থিক শনাক্তকারী যাচাই করুন।

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## স্ট্রিমিং

মেমরি ব্যবহার সীমিত করতে কনফিগারযোগ্য চাঙ্কে বড় ডেটাসেট লোড করুন।

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

## যাচাইকরণ পরিষেবা

প্রোগ্রাম্যাটিকভাবে সম্পূর্ণ প্রি-জেনারেশন যাচাইকরণ পাইপলাইন চালান।

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

## প্রয়োজনীয় ডেটা ফিল্ড

প্রতিটি পেমেন্ট রেকর্ডে এই ফিল্ডগুলি অন্তর্ভুক্ত থাকতে হবে। সংস্করণ-নির্দিষ্ট ফিল্ডগুলি প্রযোজ্য হলে উল্লেখ করা হয়েছে।

<div class="api-fields-table" tabindex="0" aria-label="প্রয়োজনীয় ডেটা ফিল্ড">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>ফিল্ড</th>
        <th>বিবরণ</th>
        <th>সীমাবদ্ধতা</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">বার্তা শনাক্তকারী</td>
          <td class="api-fields-table__constraint">সর্বোচ্চ 35 অক্ষর</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">সৃষ্টি টাইমস্ট্যাম্প</td>
          <td class="api-fields-table__constraint">ISO 8601 ফরম্যাট</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">লেনদেনের সংখ্যা</td>
          <td class="api-fields-table__constraint">ধনাত্মক পূর্ণসংখ্যা</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">নিষ্পত্তি পদ্ধতি</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE, বা INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">এন্ড-টু-এন্ড শনাক্তকারী</td>
          <td class="api-fields-table__constraint">সর্বোচ্চ 35 অক্ষর</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">আন্তঃব্যাংক নিষ্পত্তি পরিমাণ</td>
          <td class="api-fields-table__constraint">দশমিক, যেমন `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">নিষ্পত্তি মুদ্রা</td>
          <td class="api-fields-table__constraint">ISO 4217 কোড</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">চার্জ বহনকারী</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR, বা SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">ডেবিটরের নাম</td>
          <td class="api-fields-table__constraint">সর্বোচ্চ 140 অক্ষর</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">ডেবিটর এজেন্ট BIC</td>
          <td class="api-fields-table__constraint">8 বা 11 অক্ষর</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">ক্রেডিটর এজেন্ট BIC</td>
          <td class="api-fields-table__constraint">8 বা 11 অক্ষর</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">ক্রেডিটরের নাম</td>
          <td class="api-fields-table__constraint">সর্বোচ্চ 140 অক্ষর</td>
        </tr>
    </tbody>
  </table>
</div>

### সংস্করণ-নির্দিষ্ট ফিল্ড

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="সংস্করণ-নির্দিষ্ট ফিল্ড">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>ফিল্ড</th>
        <th>বিবরণ</th>
        <th>সীমাবদ্ধতা</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">অনন্য এন্ড-টু-এন্ড লেনদেন রেফারেন্স</td>
          <td class="api-fields-table__constraint">UUID ফরম্যাট — v08 থেকে উপলব্ধ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">ম্যান্ডেট শনাক্তকারী</td>
          <td class="api-fields-table__constraint">v10 থেকে উপলব্ধ</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">বার্তা মেয়াদ শেষের টাইমস্ট্যাম্প</td>
          <td class="api-fields-table__constraint">v13-তে উপলব্ধ</td>
        </tr>
    </tbody>
  </table>
</div>

