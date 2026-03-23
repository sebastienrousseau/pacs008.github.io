---
title: pacs.028.001.05 | FI to FI Payment Status Request | pacs008
description: pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum...
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

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 27 February 2025; kaynak bağlantıları aşağıda listelenmiştir.

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

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |

