---
title: pacs.028.001.05 — FI to FI Payment Status Request | Türkçe
description: pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO adı** | FIToFIPaymentStatusRequestV05 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 5 |

## Genel bakış

pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar.

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

## CBPR+ ve şema bağlamı

- MT199 durum sorgusu kalıplarının ve manuel SWIFT mesaj sorgularının yerine geçer
- CBPR+, orijinal mesaj tanımlayıcılarına bağlı yapılandırılmış durum taleplerini destekler
- gpi üzerinden UETR tabanlı takip, manuel sorgu ihtiyacını azaltır
- Otomatik ödeme operasyonları panolarına giderek daha fazla entegre edilmektedir

## Mesaj akışı

Talimat veren aracı, belirli bir ödemenin durumunu talep etmek üzere talimat alan aracıya pacs.028 gönderir. Talimat alan aracı, mevcut işleme durumunu içeren bir pacs.002 ile yanıt verir.

## İlgili mesajlar

- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Financial Institution Credit Transfer

