---
title: API | pacs008
description: pacs008'de REST ve CLI iş akışı desteği. FI-to-FI müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu ve uyumluluk desteği.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# API

Proje, operasyonel ödeme mesajı iş akışları için hem REST API hem de CLI sağlar.

> Bu sayfada referans verilen ISO 20022, EPC ve Swift herkese açık materyalleri kullanılarak birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi.

## Kurulum

Paketi PyPI'dan yükleyin. Python 3.9.2 veya üzeri gereklidir.

```bash
python -m pip install pacs008
```

---

## REST API

Doğrulama ve oluşturma için HTTP uç noktaları sunmak amacıyla yerleşik FastAPI sunucusunu başlatın.

### Sunucuyu başlat

```bash
uvicorn pacs008.api.app:app --reload --host 0.0.0.0 --port 8000
```

### Uç Noktalar

| Endpoint | Açıklama |
|---|---|
| `GET /health` | Sağlık kontrolü — servis durumunu döndürür |
| `POST /validate` | XML oluşturmadan ödeme verilerini şemaya göre doğrula |
| `POST /generate` | XML'i eşzamanlı olarak oluştur ve dosyayı döndür |
| `POST /generate/async` | Eşzamansız oluşturma işi gönder |
| `GET /status/{job_id}` | İş durumunu ID'ye göre sorgula |
| `GET /download/{job_id}` | İş tamamlandığında oluşturulan XML'i indir |
| `DELETE /jobs/{job_id}` | Bekleyen veya çalışan bir işi iptal et |
| `GET /docs` | Tüm uç noktaları keşfetmek ve test etmek için etkileşimli Swagger UI |

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/tr/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/tr/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/tr/pacs.028.001.05/) — FI to FI Payment Status Request

### Doğrulama örneği

XML oluşturmadan önce ödeme verilerini doğrulama için gönderin.

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

### Eşzamanlı oluşturma örneği

JSON yükünden pacs.008.001.13 XML dosyası oluşturun.

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

### Eşzamansız oluşturma

Daha büyük dosyalar veya ardışık düzen kullanımı için eşzamansız bir iş gönderin ve tamamlanana kadar durumu sorgulayın.

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

Komut satırı arayüzü bir veri dosyası, mesaj sürümü, şablon ve şema kabul eder. Girdiyi doğrular ve oluşturulan XML'i çıktı dizinine yazar.

### Temel kullanım

```bash
pacs008 -t <message_type> \
  -m <template_file> \
  -s <schema_file> \
  -d <data_file>
```

### Örnek

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv
```

### Kuru çalıştırma modu

XML oluşturmadan giriş verilerini doğrulamak için `--dry-run` kullanın. Çıkış kodu doğrulamanın geçip geçmediğini (`0`) veya başarısız olduğunu (`1`) gösterir.

```bash
pacs008 -t pacs.008.001.13 \
  -m pacs008/templates/pacs.008.001.13/template.xml \
  -s pacs008/templates/pacs.008.001.13/pacs.008.001.13.xsd \
  -d payments.csv \
  --dry-run
```

Oluşturma sırasında ayrıntılı çıktı için `--verbose` ekleyin.

---

## Python API

Kütüphaneyi doğrudan Python betiklerinde veya servislerinde kullanın.

### Ödeme kayıtları listesinden XML oluştur

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

### SWIFT uyumluluk kontrolü

Oluşturmadan önce verileri SWIFT karakter seti ve alan uzunluğu kurallarına göre doğrulayın ve temizleyin.

```python
from pacs008.compliance import cleanse_data_with_report

raw = [{"debtor_name": "Müller & Söhne™", "msg_id": "X" * 50}]
clean, report = cleanse_data_with_report(raw)
print(report.summary())
```

---

## Docker

Dahil edilen Dockerfile'ı kullanarak API'yi bir konteynerde çalıştırın.

```bash
docker build -t pacs008:latest .
docker run -p 8000:8000 pacs008:latest
```

```bash
docker run --rm   -e PACS008_LOG_LEVEL=INFO   -v $PWD/examples:/data   -p 8000:8000 pacs008:latest
```

---

## IBAN ve BIC doğrulaması

Finansal tanımlayıcıları XML üretiminden bağımsız olarak doğrulayın.

```python
from pacs008.validation import validate_iban, validate_bic

is_valid, error = validate_iban("DE89370400440532013000", strict=False)
is_valid, error = validate_bic("DEUTDEFF", strict=False)
```

---

## Akış işleme

Bellek kullanımını sınırlamak için büyük veri kümelerini yapılandırılabilir parçalarda yükleyin.

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

## Doğrulama servisi

Üretim öncesi tam doğrulama hattını programatik olarak çalıştırın.

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

## Gerekli veri alanları

Her ödeme kaydı aşağıdaki alanları içermelidir. Sürüme özgü alanlar geçerli olduğu yerlerde belirtilmiştir.

| Alan | Açıklama | Kısıtlama |
|---|---|---|
| `msg_id` | Mesaj tanımlayıcısı | En fazla 35 karakter |
| `creation_date_time` | Oluşturma zaman damgası | ISO 8601 formatı |
| `nb_of_txs` | İşlem sayısı | Pozitif tamsayı |
| `settlement_method` | Uzlaşım yöntemi | CLRG, INDA, COVE veya INGA |
| `end_to_end_id` | Uçtan uca tanımlayıcı | En fazla 35 karakter |
| `interbank_settlement_amount` | Bankalararası uzlaşım tutarı | Ondalık, örn. `25000.00` |
| `interbank_settlement_currency` | Uzlaşım para birimi | ISO 4217 kodu |
| `charge_bearer` | Masraf taşıyıcısı | DEBT, CRED, SHAR veya SLEV |
| `debtor_name` | Borçlu adı | En fazla 140 karakter |
| `debtor_agent_bic` | Borçlu acente BIC'i | 8 veya 11 karakter |
| `creditor_agent_bic` | Alacaklı acente BIC'i | 8 veya 11 karakter |
| `creditor_name` | Alacaklı adı | En fazla 140 karakter |

### Sürüme özgü alanlar

| Alan | Açıklama | Kısıtlama |
|---|---|---|
| `uetr` | Benzersiz uçtan uca işlem referansı | UUID formatı — v08'den itibaren kullanılabilir |
| `mandate_id` | Yetki tanımlayıcısı | v10'dan itibaren kullanılabilir |
| `expiry_date_time` | Mesaj son kullanma zaman damgası | v13'te kullanılabilir |

