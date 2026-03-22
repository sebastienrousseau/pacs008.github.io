---
title: pacs.007.001.11 — FI to FI Payment Reversal | Türkçe
description: pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.
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

## CBPR+ ve şema bağlamı

- pacs.004'ten yönle ayrılır — tersine çevirme göndericiden ileriye, iade lehdarden geriye akar
- CBPR+, otomatik eşleştirme için orijinal mesaj tanımlayıcıları ile eşleştirme gerektirir
- Yapılandırılmış neden kodları, eski MT mesajlarındaki serbest metin açıklamalarının yerine geçer
- Anlık ödeme geri çağırma ve dolandırıcılık önleme iş akışlarında giderek daha fazla kullanılmaktadır

## Mesaj akışı

Talimat veren aracı (orijinal gönderici), daha önce talimat verilmiş bir ödemeyi tersine çevirmek üzere ödeme zinciri boyunca ileriye pacs.007 gönderir. Her aracı tersine çevirme talimatını işler ve takası buna göre ayarlar.

## İlgili mesajlar

- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report

