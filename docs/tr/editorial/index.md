---
title: "Yayın politikası | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: tr-TR
lastUpdated: true
image: /logo.webp
---

# Yayın politikası

This page explains how content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 mesaj tanımları kataloğu](https://www.iso20022.org/iso-20022-message-definitions) mesaj spesifikasyonları ve sürüm geçmişi için.
- [SWIFT CBPR+ kullanım kılavuzları](https://www.swift.com/standards/iso-20022) sınır ötesi ödeme bağlamı için.
- [EPC SEPA kredi transferi kural kitabı](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) euro kredi transferi kuralları için.
- [EPC SEPA anlık kredi transferi kural kitabı](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) anlık ödeme kuralları için.

## İçerik inceleme süreci

pacs008.com üzerindeki her sayfa yayınlanmadan önce yapılandırılmış bir inceleme sürecinden geçer. Yeni içerik, birincil kaynak materyale dayalı bir taslakla başlar. Taslak, ISO 20022 mesaj kataloğu ve ilgili şema dokümantasyonuna göre teknik doğruluğu açısından kontrol edilir. Sürüm numaraları, kayıt tanımlayıcıları ve alan tanımları resmi katalog kayıtlarına göre doğrulanır.

İlk incelemeden sonra içerik, mevcut sayfalarla tutarlılığı sağlamak için yapısal bir kontrolden geçer. Navigasyon, çapraz referanslar ve terminoloji site genelinde standartlaştırılır. Her mesaj sayfasında gösterilen inceleme tarihi, birincil kaynaklara karşı en son doğrulamayı yansıtır.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Teknik doğruluk

Teknik içerik, resmi katalogda yayımlanan ISO 20022 mesaj tanımlarını takip eder. Alan adları, veri türleri ve kardinalite kuralları her mesaj sürümünün XSD şemalarıyla eşleşir. Şemaya özgü kullanım temel standarttan farklı olduğunda, ilgili şema dokümantasyonu doğrudan alıntılanır.

API dokümantasyonundaki kod örnekleri, pacs008 araç takımının güncel sürümüne karşı test edilir. CLI komutları, API uç noktaları ve Python kütüphane yöntemleri PyPI'de yayımlanan paketi yansıtır. Örnekler, araç takımıyla senkronizasyonu korumak için her yeni sürümle güncellenir.

## Çeviri metodolojisi

pacs008.com 22 dilde mevcuttur. Tüm içerik İngilizce olarak oluşturulur. Çevrilmiş sayfalar, tüm yerel ayarlarda sayfa yapısını, başlık hiyerarşisini ve bağlantı hedeflerini koruyan bir derleme betiği kullanılarak incelenmiş İngilizce kaynak materyalden üretilir.

Teknik terimler, ISO tanımlayıcıları ve standart kodlar belirsizliği önlemek için çevrilmez. pacs.008.001.13, BIC, IBAN ve CBPR+ gibi terimler her dilde standart biçimleriyle görünür. Teknik olmayan içerik, her hedef dilde doğal okunacak şekilde çevrilir. Çeviriler yapısal tutarlılık açısından gözden geçirilir ve İngilizce kaynak materyal değiştiğinde yeniden üretilir.

## Güncelleme sıklığı

İçerik üç tetikleyiciye yanıt olarak güncellenir. Birincisi, ISO 20022 pacs mesaj tanımlarını etkileyen yeni bir mesaj kataloğu sürümü yayımladığında. İkincisi, SWIFT güncellenmiş CBPR+ kullanım kılavuzları veya geçiş son tarihleri yayınladığında. Üçüncüsü, EPC SEPA kredi transferi veya anlık kredi transferi kural kitaplarını güncellediğinde.

pacs008 araç takımı semantik sürümlemeyi takip eder. Her yeni sürüm API dokümantasyonu ve değişiklik günlüğüne yansıtılır. Site, her içerik veya araç takımı güncellemesiyle yeniden derlenir ve yeniden dağıtılır.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
