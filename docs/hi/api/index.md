---
title: API | pacs008
description: pacs008 में REST और CLI वर्कफ़्लो समर्थन।
lang: hi-IN
lastUpdated: true
image: /logo.svg
---

# API

परियोजना परिचालन भुगतान संदेश वर्कफ़्लो के लिए REST API और CLI दोनों प्रदान करती है।

## कार्यान्वयन टिप्पणियाँ

- जब कॉलर को तुरंत XML चाहिए, तब परिचालन जाँच और छोटे बैचों के लिए समकालिक निर्माण का उपयोग करें।
- जब इनपुट फ़ाइलें बड़ी हों, कार्यों को पुनः प्रयास की ज़रूरत हो, या निर्माण किसी बड़े समन्वय इंजन का हिस्सा हो, तब असमकालिक निर्माण का उपयोग करें।
- स्रोत इनपुट डेटा और सत्यापन रिपोर्ट दोनों को सुरक्षित रखें ताकि सहायता टीमें घटना के समय XML आउटपुट को दोहरा सकें।
- मौन उन्नयन से बचने के लिए परिनियोजन विन्यास में टेम्पलेट और XSD पथों को स्थिर रखें।

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

<div class="api-endpoints-table" tabindex="0" aria-label="एंडपॉइंट">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>विवरण</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">हेल्थ चेक — सेवा की स्थिति लौटाता है</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">XML जनरेट किए बिना स्कीमा के विरुद्ध भुगतान डेटा को वैलिडेट करें</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">XML को समकालिक रूप से जनरेट करें और फ़ाइल लौटाएँ</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">एक असमकालिक जनरेशन जॉब सबमिट करें</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">ID द्वारा जॉब की स्थिति पोल करें</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">जॉब पूरी होने के बाद जनरेट किया गया XML डाउनलोड करें</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">लंबित या चल रही नौकरी को रद्द करें</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">सभी एंडपॉइंट एक्सप्लोर और टेस्ट करने के लिए इंटरएक्टिव Swagger UI</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/hi/pacs.002.001.12/) — FI-से-FI भुगतान स्थिति रिपोर्ट
- [`pacs.003.001.09`](/hi/pacs.003.001.09/) — FI-से-FI ग्राहक प्रत्यक्ष डेबिट
- [`pacs.004.001.11`](/hi/pacs.004.001.11/) — भुगतान वापसी
- [`pacs.007.001.11`](/hi/pacs.007.001.11/) — FI-से-FI भुगतान रिवर्सल
- [`pacs.008.001.13`](/hi/pacs.008.001.13/) — FI-से-FI ग्राहक क्रेडिट ट्रांसफर
- [`pacs.009.001.10`](/hi/pacs.009.001.10/) — वित्तीय संस्थानों के बीच क्रेडिट ट्रांसफर
- [`pacs.010.001.05`](/hi/pacs.010.001.05/) — वित्तीय संस्थानों के बीच प्रत्यक्ष डेबिट
- [`pacs.028.001.05`](/hi/pacs.028.001.05/) — FI-से-FI भुगतान स्थिति अनुरोध

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

```json
{
  "valid": true,
  "message_type": "pacs.008.001.13",
  "errors": [],
  "warnings": []
}
```

### समकालिक जनरेशन उदाहरण

JSON डेटा से pacs.008.001.13 XML फ़ाइल जनरेट करें।

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

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
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

```python
from pacs008.validation import validate_batch

for chunk in load_payment_data_streaming("large_payments.csv", chunk_size=500):
    report = validate_batch(chunk, "pacs.008.001.13")
    print(report.summary())
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

<div class="api-fields-table" tabindex="0" aria-label="आवश्यक डेटा फ़ील्ड">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>फ़ील्ड</th>
        <th>विवरण</th>
        <th>बाधा</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">संदेश पहचानकर्ता</td>
          <td class="api-fields-table__constraint">अधिकतम 35 वर्ण</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">निर्माण टाइमस्टैम्प</td>
          <td class="api-fields-table__constraint">ISO 8601 फ़ॉर्मेट</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">लेनदेन की संख्या</td>
          <td class="api-fields-table__constraint">धनात्मक पूर्णांक</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">निपटान विधि</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE, या INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">एंड-टू-एंड पहचानकर्ता</td>
          <td class="api-fields-table__constraint">अधिकतम 35 वर्ण</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">इंटरबैंक निपटान राशि</td>
          <td class="api-fields-table__constraint">दशमलव, जैसे `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">निपटान मुद्रा</td>
          <td class="api-fields-table__constraint">ISO 4217 कोड</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">शुल्क वाहक</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR, या SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">देनदार का नाम</td>
          <td class="api-fields-table__constraint">अधिकतम 140 वर्ण</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">देनदार एजेंट BIC</td>
          <td class="api-fields-table__constraint">8 या 11 वर्ण</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">लेनदार एजेंट BIC</td>
          <td class="api-fields-table__constraint">8 या 11 वर्ण</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">लेनदार का नाम</td>
          <td class="api-fields-table__constraint">अधिकतम 140 वर्ण</td>
        </tr>
    </tbody>
  </table>
</div>

### संस्करण-विशिष्ट फ़ील्ड

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="संस्करण-विशिष्ट फ़ील्ड">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>फ़ील्ड</th>
        <th>विवरण</th>
        <th>बाधा</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">अद्वितीय एंड-टू-एंड लेनदेन संदर्भ</td>
          <td class="api-fields-table__constraint">UUID फ़ॉर्मेट — v08 से उपलब्ध</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">जनादेश पहचानकर्ता</td>
          <td class="api-fields-table__constraint">v10 से उपलब्ध</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">संदेश समाप्ति टाइमस्टैम्प</td>
          <td class="api-fields-table__constraint">v13 में उपलब्ध</td>
        </tr>
    </tbody>
  </table>
</div>

