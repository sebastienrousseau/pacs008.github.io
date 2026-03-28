---
title: "Yapılandırılmış adres son tarihi Kasım 2026 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: tr-TR
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "Borçlu, alacaklı ve acente kayıtlarında mevcut adres veri kalitesini denetleyin."
  - name: "Step 2"
    text: "Mevcut yapılandırılmamış adres alanlarını yapılandırılmış formata eşleyin (sokak, bina, posta kodu, şehir, ülke)."
  - name: "Step 3"
    text: "pacs008 kullanarak ön oluşturma hattına adres doğrulaması ekleyin."
  - name: "Step 4"
    text: "Son tarihten önce temsili ödeme verileriyle test edin."
---

# Yapılandırılmış adres son tarihi Kasım 2026

SWIFT, Kasım 2026'dan itibaren sınır ötesi ödeme mesajlarında yapılandırılmış posta adresleri gerektirmektedir. Ne değişiyor, hangi mesajlar etkileniyor ve pacs008 ekiplerin hazırlanmasına nasıl yardımcı oluyor.

## Ne değişiyor

SWIFT CBPR+ sınır ötesi ödeme mesajlarında yapılandırılmamış posta adreslerinden yapılandırılmış adres alanlarına geçiş yapmaktadır. Kasım 2026 son tarihinden sonra, kilit taraf adres alanları sokak adı, bina numarası, posta kodu, şehir ve ülke için ayrı öğelerle yapılandırılmış formatı kullanmalıdır.

## Neden önemli

- Yapılandırılmamış adresler manuel onarım oranlarını artırır ve doğrudan işlemeyi geciktirir.
- Yapılandırılmış adresler, taraf adını konum verilerinden ayırarak yaptırım tarama doğruluğunu artırır.
- Düzenleyici ve şema gereksinimleri, uyumluluk ve raporlama için yapılandırılmış verileri giderek daha fazla zorunlu kılmaktadır.
- Adres kalitesi karşı taraf beklentilerini karşılamadığında sınır ötesi ödeme red oranları yükselir.

## Hangi mesajlar etkileniyor

- **pacs.008** — müşteri kredi transferlerinde borçlu ve alacaklı posta adresleri.
- **pacs.009** — finansal kuruluşlar arası kredi transferleri ve teminat ödemelerinde kurum adresleri.
- **pacs.004** — ödeme iadelerinde taraf adresleri.
- **pacs.003** — müşteri doğrudan borçlandırmalarında alacaklı ve borçlu adresleri.

## pacs008 nasıl yardımcı olur

- XML oluşturmadan önce yapılandırılmış ve hibrit posta adresi alanlarını doğrular.
- Son tarihten sonra başarısız olacak yapılandırılmamış adres verilerini işaretler.
- Hem son tarih öncesi hibrit formatları hem de son tarih sonrası yalnızca yapılandırılmış formatları destekler.
- Adres kalite kontrollerini CI hatlarına ve toplu doğrulama iş akışlarına entegre eder.

## Zaman çizelgesi

- **Mart 2023** — SWIFT CBPR+ sınır ötesi ödemeler için ISO 20022 ile kullanıma açıldı.
- **Kasım 2025** — MT ve MX ödeme talimatları için birlikte var olma dönemi sona eriyor.
- **Kasım 2026** — yapılandırılmış posta adresi gerekliliği CBPR+ mesajları için yürürlüğe giriyor.

## Şimdi ne yapmalı

- Borçlu, alacaklı ve acente kayıtlarında mevcut adres veri kalitesini denetleyin.
- Mevcut yapılandırılmamış adres alanlarını yapılandırılmış formata eşleyin (sokak, bina, posta kodu, şehir, ülke).
- pacs008 kullanarak ön oluşturma hattına adres doğrulaması ekleyin.
- Son tarihten önce temsili ödeme verileriyle test edin.

## Kaynaklar

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

