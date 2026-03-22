---
title: API | Türkçe
description: pacs008'de REST ve CLI iş akışı desteği.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# API

Proje, operasyonel ödeme mesajı iş akışları için hem REST API hem de CLI sağlar.

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
| `GET /docs` | Tüm uç noktaları keşfetmek ve test etmek için etkileşimli Swagger UI |

### Doğrulama örneği

XML oluşturmadan önce ödeme verilerini doğrulama için gönderin.

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

### Eşzamanlı oluşturma örneği

JSON yükünden pacs.008.001.13 XML dosyası oluşturun.

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

### Eşzamansız oluşturma

Daha büyük dosyalar veya ardışık düzen kullanımı için eşzamansız bir iş gönderin ve tamamlanana kadar durumu sorgulayın.

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

