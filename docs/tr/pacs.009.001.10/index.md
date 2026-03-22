---
title: pacs.009.001.10 — Financial Institution Credit Transfer | Türkçe
description: pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO adı** | FinancialInstitutionCreditTransferV10 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 10 |

## Genel bakış

pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **CdtTrfTxInf** — Bankalar arası takas tutarı içeren Kredi Transferi İşlem Bilgisi
- **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri
- **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri
- **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı

## İş bağlamı

- Bankaların kendi hesapları arasındaki transferler ve teminat ödemeleri için kullanılır
- Muhabir bankacılık ortakları arasında likidite yönetimini destekler
- Teminat yöntemiyle takas edilen müşteri kredi transferlerinin teminat bacağını taşır
- Finans kuruluşları arasında hazine ve fonlama operasyonlarını mümkün kılar

## CBPR+ ve şema bağlamı

- Kuruluşlar arası transferler için MT202 ve MT202COV'nin yerine geçer
- Teminat yöntemi akışları, pacs.009'u temel pacs.008 müşteri talimatıyla eşleştirir
- Yapılandırılmış taraf verileri ve LEI tanımlama gereksinimleri giderek artmaktadır
- SWIFT gpi, muhabir bankacılık şeffaflığı için pacs.009'u kapsar

## Mesaj akışı

Borçlu kuruluş, kendi fonlarını transfer etmek üzere alacaklı kuruluşa pacs.009 gönderir. Teminat yöntemi ödemelerinde pacs.009 fonlama bacağını sağlarken, pacs.008 müşteri talimatını ayrı bir yoldan taşır.

## İlgili mesajlar

- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.010.001.05`](/tr/pacs.010.001.05/) — Financial Institution Direct Debit

