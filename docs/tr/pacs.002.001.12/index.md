---
title: pacs.002.001.12 — FI to FI Payment Status Report | Türkçe
description: pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar.
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

## CBPR+ ve şema bağlamı

- MT mesajlarındaki MT199 ve alan 79 durum açıklamalarının yerine geçer
- CBPR+, tüm ödeme durumu iletişimi için pacs.002 kullanımını zorunlu kılar
- Yapılandırılmış neden kodları, serbest metin ret açıklamalarının yerine geçer
- SWIFT gpi takip entegrasyonu, uçtan uca şeffaflık için pacs.002 gerektirir

## Mesaj akışı

Talimat alan aracı (alıcı), pacs.008 veya pacs.009 gibi alınan bir ödeme talimatının kabulünü, takasını veya reddini onaylamak üzere talimat veren aracıya (gönderici) pacs.002 gönderir.

## İlgili mesajlar

- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.028.001.05`](/tr/pacs.028.001.05/) — FI to FI Payment Status Request

