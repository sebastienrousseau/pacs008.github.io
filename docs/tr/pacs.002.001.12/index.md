---
title: pacs.002.001.12 | FI'dan FI'ya ödeme durumu raporu | pacs008
description: pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI'dan FI'ya ödeme durumu raporu

| | |
|---|---|
| **ISO adı** | FIToFIPaymentStatusReportV12 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 12 |

## Genel bakış

pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **OrgnlGrpInfAndSts** — Toplu düzeyde raporlama için Orijinal Grup Bilgisi ve Durumu
- **TxInfAndSts** — Bireysel işlem sonuçları için İşlem Bilgisi ve Durumu
- **StsRsnInf** — Yapılandırılmış neden kodları içeren Durum Nedeni Bilgisi
- **OrgnlTxRef** — Kaynak talimata geri bağlayan Orijinal İşlem Referansı

## İş bağlamı

- Kredi transferlerinin, doğrudan borçlandırmaların ve ödeme iadelerinin takas onayı veya ret bildirimi için kullanılır
- Talimat veren ve talimat alan aracılar arasında mutabakatı sağlar
- pacs.008 ve pacs.009 mesajlarının işlendiğini onaylamak için CBPR+ akışlarında gereklidir
- Hem toplu grup düzeyinde hem de bireysel işlem düzeyinde durum raporlamasını destekler

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı | Kredi transferlerinin, doğrudan borçlandırmaların ve ödeme iadelerinin takas onayı veya ret bildirimi için kullanılır |
| **OrgnlGrpInfAndSts** — Toplu düzeyde raporlama için Orijinal Grup Bilgisi ve Durumu | Talimat veren ve talimat alan aracılar arasında mutabakatı sağlar |
| **TxInfAndSts** — Bireysel işlem sonuçları için İşlem Bilgisi ve Durumu | pacs.008 ve pacs.009 mesajlarının işlendiğini onaylamak için CBPR+ akışlarında gereklidir |
| **StsRsnInf** — Yapılandırılmış neden kodları içeren Durum Nedeni Bilgisi | Hem toplu grup düzeyinde hem de bireysel işlem düzeyinde durum raporlamasını destekler |
| **OrgnlTxRef** — Kaynak talimata geri bağlayan Orijinal İşlem Referansı | Talimat alan aracı (alıcı), pacs.008 veya pacs.009 gibi alınan bir ödeme talimatının kabulünü, takasını veya reddini onaylamak üzere talimat veren aracıya (gönderici) pacs.002 gönderir. |

## CBPR+ ve şema bağlamı

- MT mesajlarındaki MT199 ve alan 79 durum açıklamalarının yerine geçer
- CBPR+, tüm ödeme durumu iletişimi için pacs.002 kullanımını zorunlu kılar
- Yapılandırılmış neden kodları, serbest metin ret açıklamalarının yerine geçer
- SWIFT gpi takip entegrasyonu, uçtan uca şeffaflık için pacs.002 gerektirir

## Mesaj akışı

Talimat alan aracı (alıcı), pacs.008 veya pacs.009 gibi alınan bir ödeme talimatının kabulünü, takasını veya reddini onaylamak üzere talimat veren aracıya (gönderici) pacs.002 gönderir.

## Sürüm fark tablosu

| Sürüm aralığı | Neden önemli | Uygulama çıkarımı |
|---|---|---|
| pacs.002.001.12 | pacs008 içindeki mevcut uygulama | Bunu mevcut proje şablonları ve doğrulama varlıklarıyla uyum sağlarken kullanın. |
| pacs.002.001.13-15 | Daha sonraki katalog sürümleri | Yeni birlikte çalışabilirlik çalışmaları başlamadan veya yeni altyapılar eklenmeden önce sonraki ISO sürümlerini gözden geçirin. |

## Açıklamalı XML örneği

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### Alan açıklamaları

- `MsgId`: Orijinal ödeme talimatı için değil, durum raporunun kendisi için yeni bir tanımlayıcı kullanın.
- `OrgnlInstrId`: Durumun otomatik eşleştirilebilmesi için orijinal talimat tanımlayıcısını değiştirmeden koruyun.
- `TxSts`: Bu operasyonel durumdur; bire bir eşleşme varsaymak yerine dahili süreç durumlarına dikkatle eşleyin.
- `StsRsnInf`: Yapılandırılmış neden kodları, düzeltme işlemleri ve analitik için serbest metinden çok daha kullanışlıdır.

## Karşılaştır pacs.002 vs pacs.028

| Boyut | pacs.002.001.12 | Karşılaştırma mesajı |
|---|---|---|
| Temel amaç | Durum bildir | Durum iste |
| Etkileşimi kim başlatır | Durumu gönderen kurum | Durumu soran kurum |
| Operasyonel duruş | Olay güdümlü raporlama | İstisna güdümlü sorgu |
| Kaçınılması gereken yanlış varsayım | Durum raporlamasının inceleme ve araştırma iş akışlarının yerini aldığı | Her ödemenin açık bir durum isteğine ihtiyaç duyduğu |

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI'dan FI'ya müşteri kredi transferi | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Finansal kuruluşlar arası kredi transferi | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |
| [`pacs.028.001.05`](/tr/pacs.028.001.05/) | FI'dan FI'ya ödeme durumu talebi | pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar. |

