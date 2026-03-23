---
title: pacs.007.001.11 | FI to FI Payment Reversal | pacs008
description: pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO adı** | FIToFIPaymentReversalV11 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 11 |

## Genel bakış

pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 27 February 2025; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **TxInf** — Tersine çevirme tutarı ve tarafları içeren İşlem Bilgisi
- **OrgnlGrpInf** — Kaynak mesaja referans veren Orijinal Grup Bilgisi
- **RvslRsnInf** — Yapılandırılmış neden kodları içeren Tersine Çevirme Nedeni Bilgisi
- **OrgnlTxRef** — Uçtan uca izlenebilirlik için Orijinal İşlem Referansı

## İş bağlamı

- Orijinal gönderici, takas öncesinde veya sonrasında bir hata tespit ettiğinde başlatılır
- Hızlı tersine çevirme gerektiren dolandırıcılık senaryolarında kullanılır
- Orijinal ödeme tutarlarının hem tam hem de kısmi tersine çevrilmesini destekler
- Alt akış işleme için yapılandırılmış tersine çevirme neden kodları taşır

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı | Orijinal gönderici, takas öncesinde veya sonrasında bir hata tespit ettiğinde başlatılır |
| **TxInf** — Tersine çevirme tutarı ve tarafları içeren İşlem Bilgisi | Hızlı tersine çevirme gerektiren dolandırıcılık senaryolarında kullanılır |
| **OrgnlGrpInf** — Kaynak mesaja referans veren Orijinal Grup Bilgisi | Orijinal ödeme tutarlarının hem tam hem de kısmi tersine çevrilmesini destekler |
| **RvslRsnInf** — Yapılandırılmış neden kodları içeren Tersine Çevirme Nedeni Bilgisi | Alt akış işleme için yapılandırılmış tersine çevirme neden kodları taşır |
| **OrgnlTxRef** — Uçtan uca izlenebilirlik için Orijinal İşlem Referansı | Talimat veren aracı (orijinal gönderici), daha önce talimat verilmiş bir ödemeyi tersine çevirmek üzere ödeme zinciri boyunca ileriye pacs.007 gönderir. Her aracı tersine çevirme talimatını işler ve takası buna göre ayarlar. |

## CBPR+ ve şema bağlamı

- pacs.004'ten yönle ayrılır — tersine çevirme göndericiden ileriye, iade lehdarden geriye akar
- CBPR+, otomatik eşleştirme için orijinal mesaj tanımlayıcıları ile eşleştirme gerektirir
- Yapılandırılmış neden kodları, eski MT mesajlarındaki serbest metin açıklamalarının yerine geçer
- Anlık ödeme geri çağırma ve dolandırıcılık önleme iş akışlarında giderek daha fazla kullanılmaktadır

## Mesaj akışı

Talimat veren aracı (orijinal gönderici), daha önce talimat verilmiş bir ödemeyi tersine çevirmek üzere ödeme zinciri boyunca ileriye pacs.007 gönderir. Her aracı tersine çevirme talimatını işler ve takası buna göre ayarlar.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.004.001.11`](/tr/pacs.004.001.11/) | Payment Return | pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |

