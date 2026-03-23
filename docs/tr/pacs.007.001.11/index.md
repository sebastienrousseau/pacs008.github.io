---
title: pacs.007.001.11 | FI'dan FI'ya ödeme geri alma mesajı | pacs008
description: pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI'dan FI'ya ödeme geri alma mesajı

| | |
|---|---|
| **ISO adı** | FIToFIPaymentReversalV11 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 11 |

## Genel bakış

pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

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

## Sürüm fark tablosu

| Sürüm aralığı | Neden önemli | Uygulama çıkarımı |
|---|---|---|
| pacs.007.001.11 | pacs008 içindeki mevcut uygulama | Geri çevirme iş akışı modellemesi için iyi bir başlangıç noktasıdır. |
| pacs.007.001.12-13 | Daha sonraki katalog sürümleri | Mevcut piyasa altyapısına uyum için sonraki sürümleri inceleyin. |

## Açıklamalı XML örneği

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### Alan açıklamaları

- `MsgId`: Geri çevirme mesajının kendisinin denetime uygun ayrı bir tanımlayıcıya ihtiyacı vardır.
- `OrgnlInstrId`: Mutabakat kırılmalarını önlemek için orijinal ödeme referansını koruyun.
- `RvslRsnInf`: Dolandırıcılık, hata ve mükerrer ödeme vakalarının farklı yönlendirilebilmesi için yapılandırılmış geri çevirme nedenleri kullanın.

## Karşılaştır pacs.007 vs pacs.004

| Boyut | pacs.007.001.11 | Karşılaştırma mesajı |
|---|---|---|
| Temel amaç | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| En uygun olduğu durum | Geri çağırma, hata veya dolandırıcılık kaynaklı geri çevirme işleme | Mutabakattan sonra iade işleme |

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI'dan FI'ya müşteri kredi transferi | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.004.001.11`](/tr/pacs.004.001.11/) | Ödeme iadesi | pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI'dan FI'ya ödeme durumu raporu | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |

