---
title: "pacs008 | ISO 20022 Payment Message Toolkit and API"
description: "Finansal kuruluşlar arasındaki müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu ve uyumluluk desteği."
lang: "tr-TR"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/tr/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "ISO 20022 pacs.008 mesaj işlemeyi otomatikleştirin."
home: true
metaTitle: "pacs008"
subtitle: "Finansal kuruluşlar arasındaki müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu ve uyumluluk desteği."
tagline: "Finansal kuruluşlar arasındaki müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu ve uyumluluk desteği."
actionText: "pacs008 hakkında bilgi alın"
actionLink: "/tr/about/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# ISO 20022 pacs.008 mesaj işlemeyi otomatikleştirin.

Finansal kuruluşlar arasındaki müşteri kredi transferi iş akışları için oluşturma, doğrulama, API orkestrasyonu ve uyumluluk desteği.

## Ne yapar

- **Ne yapar**: `pacs.008` ve ilgili pacs mesaj tanımları için XML oluşturur; Verileri ve XML'i şemalara göre doğrular; Otomatik iş akışları için FastAPI hizmeti sunar.
- **Doğrulama**: 20 mesaj tipine özgü şemaya karşı JSON Schema doğrulaması; 75 ülkeyi kapsayan IBAN format ve kontrol toplamı doğrulaması; Üretilen XML'in resmi ISO 20022 şemalarına karşı XSD doğrulaması.
- **Güvenlik**: Tüm XML ayrıştırma işlemleri için defusedxml aracılığıyla XXE önleme; Katı dizin izin listesi ile yol geçişi koruması; KVKK ve PCI DSS uyumluluğunu desteklemek için yapılandırılmış JSON günlüklerinde PII maskeleme.
- **2026 hazırlığı**: CBPR+ ve şema geçişleri için yapılandırılmış ve hibrit posta adresi işleme; borçlu, alacaklı ve aracı veri kalitesinde daha güçlü doğrulama; eski ve güncel pacs.008 revizyonları arasında sürüm farkındalıklı oluşturma.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/tr/api/) and [Selection Guide](/tr/message-selection/).
