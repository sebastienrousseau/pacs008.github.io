---
title: pacs.028.001.05 | FI'dan FI'ya ödeme durumu talebi | pacs008
description: pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI'dan FI'ya ödeme durumu talebi

| | |
|---|---|
| **ISO adı** | FIToFIPaymentStatusRequestV05 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 5 |

## Genel bakış

pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **TxInf** — Sorgulanacak ödemeyi tanımlayan İşlem Bilgisi
- **OrgnlGrpInf** — Kaynak mesaja referans veren Orijinal Grup Bilgisi
- **OrgnlInstrId** — Kaynak ödemeden gelen Orijinal Talimat Tanımlayıcısı
- **OrgnlEndToEndId** — İzlenebilirlik için Orijinal Uçtan Uca Tanımlayıcı

## İş bağlamı

- Transit halindeki ödeme talimatları için proaktif durum sorgusunu sağlar
- Gecikmiş veya eksik ödemeleri araştıran operasyon ekiplerini destekler
- Beklemek yerine durum iletişimini başlatarak pacs.002'yi tamamlar
- İstisna işleme ve SLA izleme iş akışlarında kullanılır

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı | Transit halindeki ödeme talimatları için proaktif durum sorgusunu sağlar |
| **TxInf** — Sorgulanacak ödemeyi tanımlayan İşlem Bilgisi | Gecikmiş veya eksik ödemeleri araştıran operasyon ekiplerini destekler |
| **OrgnlGrpInf** — Kaynak mesaja referans veren Orijinal Grup Bilgisi | Beklemek yerine durum iletişimini başlatarak pacs.002'yi tamamlar |
| **OrgnlInstrId** — Kaynak ödemeden gelen Orijinal Talimat Tanımlayıcısı | İstisna işleme ve SLA izleme iş akışlarında kullanılır |
| **OrgnlEndToEndId** — İzlenebilirlik için Orijinal Uçtan Uca Tanımlayıcı | Talimat veren aracı, belirli bir ödemenin durumunu talep etmek üzere talimat alan aracıya pacs.028 gönderir. Talimat alan aracı, mevcut işleme durumunu içeren bir pacs.002 ile yanıt verir. |

## CBPR+ ve şema bağlamı

- MT199 durum sorgusu kalıplarının ve manuel SWIFT mesaj sorgularının yerine geçer
- CBPR+, orijinal mesaj tanımlayıcılarına bağlı yapılandırılmış durum taleplerini destekler
- gpi üzerinden UETR tabanlı takip, manuel sorgu ihtiyacını azaltır
- Otomatik ödeme operasyonları panolarına giderek daha fazla entegre edilmektedir

## Mesaj akışı

Talimat veren aracı, belirli bir ödemenin durumunu talep etmek üzere talimat alan aracıya pacs.028 gönderir. Talimat alan aracı, mevcut işleme durumunu içeren bir pacs.002 ile yanıt verir.

## Sürüm fark tablosu

| Sürüm aralığı | Neden önemli | Uygulama çıkarımı |
|---|---|---|
| pacs.028.001.05 | pacs008 içindeki mevcut uygulama | Mevcut durum-istek modellemesi için uygundur. |
| pacs.028.001.06 | Daha sonraki katalog sürümü | Gelecekteki birlikte çalışabilirlik planlaması için daha yeni katalog sürümünü inceleyin. |

## Açıklamalı XML örneği

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### Alan açıklamaları

- `MsgId`: İsteğin kendisi, alttaki ödemeden ayrı ve denetlenebilir bir tanımlayıcı gerektirir.
- `OrgnlInstrId`: Eşleştirme doğruluğunu en üst düzeye çıkarmak için orijinal talimattaki tam kaynak tanımlayıcıyı kullanın.
- `OrgnlEndToEndId`: Müşteri izlenebilirliğini dahil etmek, operasyon ekiplerinin sorguyu daha hızlı mutabık kılmasına yardımcı olur.

## Karşılaştır pacs.028 vs pacs.002

| Boyut | pacs.028.001.05 | Karşılaştırma mesajı |
|---|---|---|
| Temel amaç | Durum iste | Durum bildir |
| Etkileşimi kim başlatır | Durumu soran kurum | Durumu gönderen kurum |
| Operasyonel duruş | İstisna güdümlü sorgu | Olay güdümlü raporlama |
| Kaçınılması gereken yanlış varsayım | Her ödeme için rutin olarak gönderilmesi gerektiği | Proaktif vaka yönetimi ihtiyacını ortadan kaldırdığı |

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI'dan FI'ya ödeme durumu raporu | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI'dan FI'ya müşteri kredi transferi | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Finansal kuruluşlar arası kredi transferi | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |

