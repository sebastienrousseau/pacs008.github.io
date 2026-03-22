---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | Türkçe
description: pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır.
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

## CBPR+ ve şema bağlamı

- Sınır ötesi müşteri kredi transferleri için MT103 ve MT103+'ın yerine geçer
- Kasım 2026 yapılandırılmış adres son tarihi tüm taraf posta adresleri için geçerlidir
- SWIFT gpi, UETR tabanlı uçtan uca takip için pacs.008 gerektirir
- 13 revizyon, piyasa altyapılarındaki devam eden şema evrimini yansıtır

## Mesaj akışı

Borçlu aracı bir pacs.008 oluşturur ve alacaklı aracıya gönderir (doğrudan veya aracılar üzerinden). Zincirdeki her aracı talimatı doğrular, zenginleştirir ve iletir; alacaklı aracı lehdarın hesabına alacak kaydedene kadar süreç devam eder.

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

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Financial Institution Credit Transfer

