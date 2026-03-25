---
title: "pacs008 Hakkında | pacs008"
description: pacs008 ne yapar ve kimler için tasarlanmıştır.
lang: tr-TR
lastUpdated: true
image: /logo.svg
howtoName: "ISO 20022 pacs.008 ödeme mesajları nasıl uygulanır"
howtoDescription: "ISO 20022 pacs.008 mesaj üretimi ve doğrulamasını hayata geçirmek için adım adım kontrol listesi."
howto:
  - name: "Adım 1"
    text: "Şablon yazmadan önce iş olayı için doğru mesaj ailesini seçin."
  - name: "Adım 2"
    text: "Şema hatalarının ilk sinyal olmaması için XML üretiminden önce iş verilerini doğrulayın."
  - name: "Adım 3"
    text: "BIC, IBAN, havale ve posta adresi kalitesini sonraki temizlik olarak değil, sürüm kriteri olarak değerlendirin."
  - name: "Adım 4"
    text: "Her şema veya banka kuralı değişikliğini temsili ödeme verileriyle regresyon testi yapın."
---

# pacs008 Hakkında

pacs008, finansal kuruluşlar arasındaki ISO 20022 müşteri kredi transferi iş akışlarını otomatikleştirmek için bir Python araç setidir.

## Ne yapar

- `pacs.008` ve ilgili pacs mesaj tanımları için XML oluşturur
- Verileri ve XML'i şemalara göre doğrular
- Otomatik iş akışları için FastAPI hizmeti sunar
- Yerel yürütme ve CI ardışık düzenleri için CLI sağlar
- CSV, JSON, JSONL, SQLite ve Parquet dahil yapılandırılmış veri kaynaklarını destekler
- IBAN (75 ülke, ISO 7064 kontrol toplamı) ve BIC (ISO 9362) tanımlayıcılarını doğrular
- Transliterasyon ve alan uzunluğu denetimi ile SWIFT uyumluluğu için ödeme verilerini temizler
- Bellek verimli işleme için büyük veri kümelerini yapılandırılabilir parçalarda işler
- Konteynerleştirilmiş API dağıtımı için Docker imajı sağlar

## Kimler için

- ödeme operasyon ekipleri
- dahili ödeme işleme altyapısı oluşturan platform mühendisleri
- ISO 20022'ye yönelik geçiş programları
- giden ödeme mesajlarını doğrulayan uyumluluk ve QA ekipleri

## Doğrulama

Herhangi bir XML yazılmadan önce birden fazla doğrulama katmanı çalışır:

- 20 mesaj tipine özgü şemaya karşı JSON Schema doğrulaması
- 75 ülkeyi kapsayan IBAN format ve kontrol toplamı doğrulaması
- ISO 9362'ye göre BIC yapısı ve ülke kodu doğrulaması
- Üretilen XML'in resmi ISO 20022 şemalarına karşı XSD doğrulaması

## Güvenlik

pacs008, işleme hattının her katmanında derinlemesine savunma uygular:

- Tüm XML ayrıştırma işlemleri için defusedxml aracılığıyla XXE önleme
- Katı dizin izin listesi ile yol geçişi koruması
- KVKK ve PCI DSS uyumluluğunu desteklemek için yapılandırılmış JSON günlüklerinde PII maskeleme
- SQLite kaynakları için katı tablo adı temizleme ile SQL enjeksiyon önleme

## 2026 hazırlığı

pacs008, 2026'da geçerli operasyonel son tarihler ve veri kalitesi gereksinimleri etrafında tasarlanmıştır:

- CBPR+ ve şema geçişleri için yapılandırılmış ve hibrit posta adresi işleme
- borçlu, alacaklı ve aracı veri kalitesinde daha güçlü doğrulama
- eski ve güncel pacs.008 revizyonları arasında sürüm farkındalıklı oluşturma
- CI, toplu işlemler ve dahili ödeme hizmetlerine uyan otomasyon yolları

## Operasyonel odak

pacs008, mesaj tanımı referansının ötesine geçerek operasyonel uygulamayı destekler:

- gerçek kaynak verilerinden XML oluşturma
- teslimattan önce doğrulama
- ödeme zincirlerini ve alt akış formatlarını modelleme
- şemaya özgü değişiklikleri kodda test edilebilir hale getirme

## Uygulama kontrol listesi

- Şablon yazmaya başlamadan önce iş olayı için doğru mesaj ailesini seçin.
- Şema hatalarının ilk sinyal olmaması için XML üretiminden önce iş verilerini doğrulayın.
- BIC, IBAN, remittance ve posta adresi kalitesini sonradan temizlenecek bir konu değil, yayınlama kriteri olarak ele alın.
- Her şema veya banka kuralı değişikliğinde temsilî ödeme verileriyle regresyon testleri çalıştırın.

