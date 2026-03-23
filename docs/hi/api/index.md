---
title: API | हिन्दी
description: pacs008 में REST और CLI वर्कफ़्लो समर्थन।
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# API

परियोजना परिचालन भुगतान संदेश वर्कफ़्लो के लिए REST API और CLI दोनों प्रदान करती है।

## इंस्टॉलेशन

PyPI से पैकेज इंस्टॉल करें। Python 3.9.2 या उच्चतर संस्करण आवश्यक है।

```bash
python -m pip install pacs008
```

---

## REST API

वैलिडेशन और जनरेशन के लिए HTTP एंडपॉइंट उजागर करने हेतु अंतर्निहित FastAPI सर्वर शुरू करें।

### सर्वर शुरू करें

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### एंडपॉइंट

| Endpoint | विवरण |
|---|---|
| `GET /health` | हेल्थ चेक — सेवा की स्थिति लौटाता है |
| `POST /validate` | XML जनरेट किए बिना स्कीमा के विरुद्ध भुगतान डेटा को वैलिडेट करें |
| `POST /generate` | XML को समकालिक रूप से जनरेट करें और फ़ाइल लौटाएँ |
| `POST /generate/async` | एक असमकालिक जनरेशन जॉब सबमिट करें |
| `GET /status/{job_id}` | ID द्वारा जॉब की स्थिति पोल करें |
| `GET /download/{job_id}` | जॉब पूरी होने के बाद जनरेट किया गया XML डाउनलोड करें |
| `DELETE /jobs/{job_id}` | लंबित या चल रही नौकरी को रद्द करें |
| `GET /docs` | सभी एंडपॉइंट एक्सप्लोर और टेस्ट करने के लिए इंटरएक्टिव Swagger UI |

### वैलिडेशन उदाहरण

XML जनरेट करने से पहले वैलिडेशन के लिए भुगतान डेटा सबमिट करें।

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

### समकालिक जनरेशन उदाहरण

JSON पेलोड से pacs.008.001.13 XML फ़ाइल जनरेट करें।

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

### असमकालिक जनरेशन

बड़ी फ़ाइलों या पाइपलाइन उपयोग के लिए, एक असमकालिक जॉब सबमिट करें और पूर्णता तक पोल करें।

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

कमांड-लाइन इंटरफ़ेस एक डेटा फ़ाइल, एक संदेश संस्करण, एक टेम्पलेट और एक स्कीमा स्वीकार करता है। यह इनपुट को वैलिडेट करता है और जनरेट किए गए XML को आउटपुट डायरेक्टरी में लिखता है।

### बुनियादी उपयोग

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### उदाहरण

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### ड्राई-रन मोड

XML जनरेट किए बिना इनपुट डेटा को वैलिडेट करने के लिए `--dry-run` का उपयोग करें। एग्जिट कोड इंगित करता है कि वैलिडेशन पास हुआ (`0`) या विफल रहा (`1`)।

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

जनरेशन के दौरान विस्तृत आउटपुट के लिए `--verbose` जोड़ें।

---

## Python API

Python स्क्रिप्ट या सेवाओं में सीधे लाइब्रेरी का उपयोग करें।

### भुगतान रिकॉर्ड की सूची से XML जनरेट करें

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

### SWIFT कम्प्लायंस चेक

जनरेशन से पहले SWIFT कैरेक्टर-सेट और फील्ड-लेंथ नियमों के विरुद्ध डेटा को वैलिडेट और क्लींज करें।

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

शामिल Dockerfile का उपयोग करके कंटेनर में API चलाएं।

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

---

## IBAN और BIC सत्यापन

XML उत्पादन से स्वतंत्र रूप से वित्तीय पहचानकर्ताओं को सत्यापित करें।

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## स्ट्रीमिंग

मेमोरी उपयोग सीमित करने के लिए कॉन्फ़िगर करने योग्य खंडों में बड़े डेटासेट लोड करें।

```python
from pacs008.data.loader import load_payment_data_streaming

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    print(f"Processing {len(chunk)} records")
```

---

## सत्यापन सेवा

पूर्ण पूर्व-उत्पादन सत्यापन पाइपलाइन को प्रोग्रामेटिक रूप से चलाएं।

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

## आवश्यक डेटा फ़ील्ड

हर भुगतान रिकॉर्ड में निम्नलिखित फ़ील्ड शामिल होने चाहिए। संस्करण-विशिष्ट फ़ील्ड जहाँ लागू हों वहाँ नोट किए गए हैं।

| फ़ील्ड | विवरण | बाधा |
|---|---|---|
| `msg_id` | संदेश पहचानकर्ता | अधिकतम 35 वर्ण |
| `creation_date_time` | निर्माण टाइमस्टैम्प | ISO 8601 फ़ॉर्मेट |
| `nb_of_txs` | लेनदेन की संख्या | धनात्मक पूर्णांक |
| `settlement_method` | निपटान विधि | CLRG, INDA, COVE, या INGA |
| `end_to_end_id` | एंड-टू-एंड पहचानकर्ता | अधिकतम 35 वर्ण |
| `interbank_settlement_amount` | इंटरबैंक निपटान राशि | दशमलव, जैसे `25000.00` |
| `interbank_settlement_currency` | निपटान मुद्रा | ISO 4217 कोड |
| `charge_bearer` | शुल्क वाहक | DEBT, CRED, SHAR, या SLEV |
| `debtor_name` | देनदार का नाम | अधिकतम 140 वर्ण |
| `debtor_agent_bic` | देनदार एजेंट BIC | 8 या 11 वर्ण |
| `creditor_agent_bic` | लेनदार एजेंट BIC | 8 या 11 वर्ण |
| `creditor_name` | लेनदार का नाम | अधिकतम 140 वर्ण |

### संस्करण-विशिष्ट फ़ील्ड

| फ़ील्ड | विवरण | बाधा |
|---|---|---|
| `uetr` | अद्वितीय एंड-टू-एंड लेनदेन संदर्भ | UUID फ़ॉर्मेट — v08 से उपलब्ध |
| `mandate_id` | जनादेश पहचानकर्ता | v10 से उपलब्ध |
| `expiry_date_time` | संदेश समाप्ति टाइमस्टैम्प | v13 में उपलब्ध |

