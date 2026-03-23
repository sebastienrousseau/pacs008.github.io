---
title: pacs.010.001.05 | Financial Institution Direct Debit | pacs008
description: pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO adı** | FinancialInstitutionDirectDebitV05 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 5 |

## Genel bakış

pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 27 February 2025; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **DrctDbtTxInf** — Tahsilat tutarı içeren Doğrudan Borçlandırma İşlem Bilgisi
- **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri
- **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri
- **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı

## İş bağlamı

- Finans kuruluşları arasında bankalar arası doğrudan borçlandırma tahsilatını destekler
- Ücret tahsilatı, teminat tamamlama çağrıları ve kurumsal takas yükümlülükleri için kullanılır
- Katılımcı kuruluşlar arasında önceden üzerinde anlaşılmış ikili düzenlemeler gerektirir
- Kurumsal nakit yönetimi ve bankalar arası takas döngüleri için kritik öneme sahiptir

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı | Finans kuruluşları arasında bankalar arası doğrudan borçlandırma tahsilatını destekler |
| **DrctDbtTxInf** — Tahsilat tutarı içeren Doğrudan Borçlandırma İşlem Bilgisi | Ücret tahsilatı, teminat tamamlama çağrıları ve kurumsal takas yükümlülükleri için kullanılır |
| **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri | Katılımcı kuruluşlar arasında önceden üzerinde anlaşılmış ikili düzenlemeler gerektirir |
| **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri | Kurumsal nakit yönetimi ve bankalar arası takas döngüleri için kritik öneme sahiptir |
| **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı | Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder. |

## CBPR+ ve şema bağlamı

- Bankalar arası doğrudan borçlandırma işleme için MT204'ün bazı unsurlarının yerine geçer
- Yapılandırılmış taraf tanımlama, diğer pacs mesajlarıyla aynı gereksinimlere uyar
- Kurumsal tanımlayıcıların (BIC, LEI) doğrulanması zorunludur
- Piyasa altyapıları genelinde tam ISO 20022 benimseme yol haritalarına dahildir

## Mesaj akışı

Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.003.001.09`](/tr/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar. |

