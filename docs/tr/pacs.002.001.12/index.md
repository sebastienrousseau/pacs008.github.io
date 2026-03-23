---
title: pacs.002.001.12 | FI to FI Payment Status Report | pacs008
description: pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — FI to FI Payment Status Report

| | |
|---|---|
| **ISO adı** | FIToFIPaymentStatusReportV12 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 12 |

## Genel bakış

pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 27 February 2025; kaynak bağlantıları aşağıda listelenmiştir.

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

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |
| [`pacs.028.001.05`](/tr/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu talep etmek üzere bir finans kuruluşu tarafından gönderilir. İstenmeyen bir durum raporu beklemeden ödeme işleme sürecinin proaktif takibini sağlar. |

