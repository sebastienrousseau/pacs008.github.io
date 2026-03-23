---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO adı** | FIToFICustomerCreditTransferV13 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2023 |
| **Sürüm** | 13 |

## Genel bakış

pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 27 February 2025; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj kimliği, oluşturma tarihi, işlem sayısı ve takas bilgisi içeren Grup Başlığı
- **CdtTrfTxInf** — Tutar, masraflar ve amaç içeren Kredi Transferi İşlem Bilgisi
- **Dbtr / DbtrAgt** — Borçlu ve Borçlu Aracısı kimlik bilgileri ve hesap detayları
- **Cdtr / CdtrAgt** — Alacaklı ve Alacaklı Aracısı kimlik bilgileri ve hesap detayları
- **RmtInf** — Yapılandırılmış veya yapılandırılmamış ödeme referansları için Havale Bilgisi

## İş bağlamı

- Müşteri tarafından başlatılan sınır ötesi ve yurt içi kredi transferleri için birincil mesajdır
- SEPA SCT, SEPA Instant, CBPR+ ve ulusal takas sistemlerinde kullanılır
- Doğrudan mutabakatı desteklemek için yapılandırılmış havale bilgisi taşır
- Çok bacaklı ödeme zincirleri için sıralı, teminat ve doğrudan takas yöntemlerini destekler

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj kimliği, oluşturma tarihi, işlem sayısı ve takas bilgisi içeren Grup Başlığı | Müşteri tarafından başlatılan sınır ötesi ve yurt içi kredi transferleri için birincil mesajdır |
| **CdtTrfTxInf** — Tutar, masraflar ve amaç içeren Kredi Transferi İşlem Bilgisi | SEPA SCT, SEPA Instant, CBPR+ ve ulusal takas sistemlerinde kullanılır |
| **Dbtr / DbtrAgt** — Borçlu ve Borçlu Aracısı kimlik bilgileri ve hesap detayları | Doğrudan mutabakatı desteklemek için yapılandırılmış havale bilgisi taşır |
| **Cdtr / CdtrAgt** — Alacaklı ve Alacaklı Aracısı kimlik bilgileri ve hesap detayları | Çok bacaklı ödeme zincirleri için sıralı, teminat ve doğrudan takas yöntemlerini destekler |
| **RmtInf** — Yapılandırılmış veya yapılandırılmamış ödeme referansları için Havale Bilgisi | Borçlu aracı bir pacs.008 oluşturur ve alacaklı aracıya gönderir (doğrudan veya aracılar üzerinden). Zincirdeki her aracı talimatı doğrular, zenginleştirir ve iletir; alacaklı aracı lehdarın hesabına alacak kaydedene kadar süreç devam eder. |

## CBPR+ ve şema bağlamı

- Sınır ötesi müşteri kredi transferleri için MT103 ve MT103+'ın yerine geçer
- Kasım 2026 yapılandırılmış adres son tarihi tüm taraf posta adresleri için geçerlidir
- SWIFT gpi, UETR tabanlı uçtan uca takip için pacs.008 gerektirir
- 13 revizyon, piyasa altyapılarındaki devam eden şema evrimini yansıtır

## Mesaj akışı

Borçlu aracı bir pacs.008 oluşturur ve alacaklı aracıya gönderir (doğrudan veya aracılar üzerinden). Zincirdeki her aracı talimatı doğrular, zenginleştirir ve iletir; alacaklı aracı lehdarın hesabına alacak kaydedene kadar süreç devam eder.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## Desteklenen sürümler

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.004.001.11`](/tr/pacs.004.001.11/) | Payment Return | pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |

