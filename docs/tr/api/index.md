---
title: API | pacs008
description: pacs008'de REST ve CLI iş akışı desteği. Finansal kuruluşlar arasındaki müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# API

Proje, operasyonel ödeme mesajı iş akışları için hem REST API hem de CLI sağlar.

> Bu sayfada referans verilen ISO 20022, EPC ve Swift herkese açık materyalleri kullanılarak birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi.

## Uygulama notları

- Çağıranın XML'i hemen beklediği operasyonel kontroller ve küçük batch işlemler için senkron üretim kullanın.
- Girdi dosyaları büyük olduğunda, işler yeniden deneme gerektirdiğinde veya üretim daha geniş bir orkestrasyon motorunun parçası olduğunda asenkron üretim kullanın.
- Destek ekiplerinin olay sırasında XML çıktısını yeniden üretebilmesi için hem kaynak girdi verisini hem de doğrulama raporunu saklayın.
- Sessiz yükseltmeleri önlemek için şablon ve XSD yollarını dağıtım yapılandırmasında sabitleyin.

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

<div class="api-endpoints-table" tabindex="0" aria-label="Uç Noktalar">
  <table>
    <colgroup>
      <col class="api-endpoints-table__col-endpoint">
      <col class="api-endpoints-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th>Endpoint</th>
        <th>Açıklama</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /health</code></td>
          <td class="api-endpoints-table__desc">Sağlık kontrolü — servis durumunu döndürür</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /validate</code></td>
          <td class="api-endpoints-table__desc">XML oluşturmadan ödeme verilerini şemaya göre doğrula</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate</code></td>
          <td class="api-endpoints-table__desc">XML&#39;i eşzamanlı olarak oluştur ve dosyayı döndür</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>POST /generate/async</code></td>
          <td class="api-endpoints-table__desc">Eşzamansız oluşturma işi gönder</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /status/{job_id}</code></td>
          <td class="api-endpoints-table__desc">İş durumunu ID&#39;ye göre sorgula</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /download/{job_id}</code></td>
          <td class="api-endpoints-table__desc">İş tamamlandığında oluşturulan XML&#39;i indir</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>DELETE /jobs/{job_id}</code></td>
          <td class="api-endpoints-table__desc">Bekleyen veya çalışan bir işi iptal et</td>
        </tr>
        <tr>
          <td class="api-endpoints-table__endpoint"><code>GET /docs</code></td>
          <td class="api-endpoints-table__desc">Tüm uç noktaları keşfetmek ve test etmek için etkileşimli Swagger UI</td>
        </tr>
    </tbody>
  </table>
</div>

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI'dan FI'ya ödeme durumu raporu
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI'dan FI'ya müşteri doğrudan borçlandırması
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Ödeme iadesi
- [`pacs.007.001.11`](/tr/pacs.007.001.11/) — FI'dan FI'ya ödeme geri alma mesajı
- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI'dan FI'ya müşteri kredi transferi
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Finansal kuruluşlar arası kredi transferi
- [`pacs.010.001.05`](/tr/pacs.010.001.05/) — Finansal kuruluşlar arası doğrudan borçlandırma
- [`pacs.028.001.05`](/tr/pacs.028.001.05/) — FI'dan FI'ya ödeme durumu talebi

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

<div class="api-fields-table" tabindex="0" aria-label="Gerekli veri alanları">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Alan</th>
        <th>Açıklama</th>
        <th>Kısıtlama</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>msg_id</code></td>
          <td class="api-fields-table__desc">Mesaj tanımlayıcısı</td>
          <td class="api-fields-table__constraint">En fazla 35 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creation_date_time</code></td>
          <td class="api-fields-table__desc">Oluşturma zaman damgası</td>
          <td class="api-fields-table__constraint">ISO 8601 formatı</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>nb_of_txs</code></td>
          <td class="api-fields-table__desc">İşlem sayısı</td>
          <td class="api-fields-table__constraint">Pozitif tamsayı</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>settlement_method</code></td>
          <td class="api-fields-table__desc">Uzlaşım yöntemi</td>
          <td class="api-fields-table__constraint">CLRG, INDA, COVE veya INGA</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>end_to_end_id</code></td>
          <td class="api-fields-table__desc">Uçtan uca tanımlayıcı</td>
          <td class="api-fields-table__constraint">En fazla 35 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_amount</code></td>
          <td class="api-fields-table__desc">Bankalararası uzlaşım tutarı</td>
          <td class="api-fields-table__constraint">Ondalık, örn. `25000.00`</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>interbank_settlement_currency</code></td>
          <td class="api-fields-table__desc">Uzlaşım para birimi</td>
          <td class="api-fields-table__constraint">ISO 4217 kodu</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>charge_bearer</code></td>
          <td class="api-fields-table__desc">Masraf taşıyıcısı</td>
          <td class="api-fields-table__constraint">DEBT, CRED, SHAR veya SLEV</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_name</code></td>
          <td class="api-fields-table__desc">Borçlu adı</td>
          <td class="api-fields-table__constraint">En fazla 140 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>debtor_agent_bic</code></td>
          <td class="api-fields-table__desc">Borçlu acente BIC&#39;i</td>
          <td class="api-fields-table__constraint">8 veya 11 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_agent_bic</code></td>
          <td class="api-fields-table__desc">Alacaklı acente BIC&#39;i</td>
          <td class="api-fields-table__constraint">8 veya 11 karakter</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>creditor_name</code></td>
          <td class="api-fields-table__desc">Alacaklı adı</td>
          <td class="api-fields-table__constraint">En fazla 140 karakter</td>
        </tr>
    </tbody>
  </table>
</div>

### Sürüme özgü alanlar

<div class="api-fields-table api-fields-table--versioned" tabindex="0" aria-label="Sürüme özgü alanlar">
  <table>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th>Alan</th>
        <th>Açıklama</th>
        <th>Kısıtlama</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><code>uetr</code></td>
          <td class="api-fields-table__desc">Benzersiz uçtan uca işlem referansı</td>
          <td class="api-fields-table__constraint">UUID formatı — v08&#39;den itibaren kullanılabilir</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>mandate_id</code></td>
          <td class="api-fields-table__desc">Yetki tanımlayıcısı</td>
          <td class="api-fields-table__constraint">v10&#39;dan itibaren kullanılabilir</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><code>expiry_date_time</code></td>
          <td class="api-fields-table__desc">Mesaj son kullanma zaman damgası</td>
          <td class="api-fields-table__constraint">v13&#39;te kullanılabilir</td>
        </tr>
    </tbody>
  </table>
</div>

