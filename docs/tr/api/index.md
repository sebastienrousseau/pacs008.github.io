---
title: API | Türkçe
description: Pacs008'de REST ve CLI iş akışı desteği.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# API

Proje, operasyonel ödeme mesajı iş akışları için hem REST API hem de CLI sağlar.

## API yetenekleri

- sağlık ve hazırlık uç noktaları
- XML oluşturmadan önce veri doğrulama
- doğrudan iş akışları için senkron oluşturma
- daha uzun süren ardışık düzenler için asenkron görev yürütme
- görev tamamlama akışları aracılığıyla indirilebilir oluşturulan dosyalar

## CLI yetenekleri

- kaynak dosya ve mesaj sürümünü belirtme
- teslimattan önce XSD'ye göre doğrulama
- ardışık düzen dostu çıktı dizinlerine XML oluşturma
- CI işlerine, toplu zamanlamalara ve yerel operatör araçlarına uyum

## Uygulama odağı

Pacs008, ödeme işleme ekipleri tarafından operasyonel kullanım için tasarlanmıştır:

- mesaj oluşturmadan önce ön doğrulama
- çalışma zamanında şema ve sürüm seçimi
- dahili hizmetler için asenkron oluşturma akışları
- test ve denetim izleri için deterministik çıktılar

## 2026 için veri kalitesi gereksinimleri

Mesaj kalitesi gereksinimleri sektör genelinde sıkılaşmaktadır, özellikle şu konularda:

- taraf ve aracı kimlik tespiti
- yapılandırılmış veya hibrit adres hazırlığı
- daha zengin havale ve referans işleme
- seri ödeme zincirleri boyunca şeffaflık

API ve CLI, bu kontrolleri manuel bir inceleme adımı yerine iş akışının bir parçası haline getirmek için tasarlanmıştır.

