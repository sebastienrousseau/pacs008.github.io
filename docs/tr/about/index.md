---
title: pacs008 Hakkında | Türkçe
description: pacs008 ne yapar ve kimler için tasarlanmıştır.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs008 Hakkında

pacs008, ISO 20022 FI-to-FI müşteri kredi transferi iş akışlarını otomatikleştirmek için bir Python araç setidir.

## Ne yapar

- `pacs.008` ve ilgili pacs mesaj tanımları için XML oluşturur
- Verileri ve XML'i şemalara göre doğrular
- Otomatik iş akışları için FastAPI hizmeti sunar
- Yerel yürütme ve CI ardışık düzenleri için CLI sağlar
- CSV, JSON, JSONL, SQLite ve Parquet dahil yapılandırılmış veri kaynaklarını destekler

## Kimler için

- ödeme operasyon ekipleri
- dahili ödeme işleme altyapısı oluşturan platform mühendisleri
- ISO 20022'ye yönelik geçiş programları
- giden ödeme mesajlarını doğrulayan uyumluluk ve QA ekipleri

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

