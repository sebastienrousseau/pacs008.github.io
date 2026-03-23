---
title: pacs.009.001.10 | Finansal kuruluşlar arası kredi transferi | pacs008
description: pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Finansal kuruluşlar arası kredi transferi

| | |
|---|---|
| **ISO adı** | FinancialInstitutionCreditTransferV10 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 10 |

## Genel bakış

pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

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

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı | Bankaların kendi hesapları arasındaki transferler ve teminat ödemeleri için kullanılır |
| **CdtTrfTxInf** — Bankalar arası takas tutarı içeren Kredi Transferi İşlem Bilgisi | Muhabir bankacılık ortakları arasında likidite yönetimini destekler |
| **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri | Teminat yöntemiyle takas edilen müşteri kredi transferlerinin teminat bacağını taşır |
| **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri | Finans kuruluşları arasında hazine ve fonlama operasyonlarını mümkün kılar |
| **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı | Borçlu kuruluş, kendi fonlarını transfer etmek üzere alacaklı kuruluşa pacs.009 gönderir. Teminat yöntemi ödemelerinde pacs.009 fonlama bacağını sağlarken, pacs.008 müşteri talimatını ayrı bir yoldan taşır. |

## CBPR+ ve şema bağlamı

- Kuruluşlar arası transferler için MT202 ve MT202COV'nin yerine geçer
- Teminat yöntemi akışları, pacs.009'u temel pacs.008 müşteri talimatıyla eşleştirir
- Yapılandırılmış taraf verileri ve LEI tanımlama gereksinimleri giderek artmaktadır
- SWIFT gpi, muhabir bankacılık şeffaflığı için pacs.009'u kapsar

## Mesaj akışı

Borçlu kuruluş, kendi fonlarını transfer etmek üzere alacaklı kuruluşa pacs.009 gönderir. Teminat yöntemi ödemelerinde pacs.009 fonlama bacağını sağlarken, pacs.008 müşteri talimatını ayrı bir yoldan taşır.

## Sürüm fark tablosu

| Sürüm aralığı | Neden önemli | Uygulama çıkarımı |
|---|---|---|
| pacs.009.001.10 | pacs008 içindeki mevcut uygulama | FI kredi transfer akışları için mevcut proje desteğiyle uyumludur. |
| pacs.009.001.11-12 | Daha sonraki katalog sürümleri | Muhabirlik ve karşılama ödemesi ortamlarında yol haritası planlaması için önemlidir. |

## Açıklamalı XML örneği

```xml
<FICdtTrf>
  <GrpHdr>
    <MsgId>FICT-2026-0005</MsgId>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId><InstrId>COVER-8841</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="USD">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Originating Bank</Nm></Dbtr>
    <Cdtr><Nm>Cover Bank</Nm></Cdtr>
  </CdtTrfTxInf>
</FICdtTrf>
```

### Alan açıklamaları

- `InstrId`: Alttaki müşteri akışıyla hâlâ ilişkilendirilebilen bir finansman aşaması tanımlayıcısı kullanın.
- `IntrBkSttlmAmt`: Kendi hesap ve karşılama akışları çoğu zaman takas tutarları ve tarihleri üzerinde daha sıkı hazine kontrolleri gerektirir.
- `Dbtr` / `Cdtr`: Bunlar perakende müşteri rolleri değil, kurum taraflarıdır; buna göre modelleyin.

## Karşılaştır pacs.009 vs pacs.008

| Boyut | pacs.009.001.10 | Karşılaştırma mesajı |
|---|---|---|
| Temel amaç | Kurumun kendi hesabına kredi transferi veya karşılama ayağı | Müşteri kredi transferi |
| İş sahibi | Hazine / muhabirlik / fonlama operasyonları | Müşteri ödeme operasyonları |
| Tipik eşleşmeler | pacs.002, pacs.004 ve bağlantılı pacs.008 akışları | pacs.002, pacs.004, pacs.007, pacs.028 |
| Kaçınılması gereken yanlış varsayım | Bunun yalnızca daha teknik bir pacs.008 olduğu | Kurum fonlama akışlarını sorunsuz taşıyabildiği |

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI'dan FI'ya müşteri kredi transferi | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI'dan FI'ya ödeme durumu raporu | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.010.001.05`](/tr/pacs.010.001.05/) | Finansal kuruluşlar arası doğrudan borçlandırma | pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar. |

