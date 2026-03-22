---
title: pacs.004.001.11 — Payment Return | Türkçe
description: pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Payment Return

| | |
|---|---|
| **ISO adı** | PaymentReturnV11 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 11 |

## Genel bakış

pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı
- **TxInf** — İade tutarı ve tarafları içeren İşlem Bilgisi
- **OrgnlGrpInf** — Kaynak mesaja bağlayan Orijinal Grup Bilgisi
- **RtrRsnInf** — Yapılandırılmış neden kodları içeren İade Nedeni Bilgisi
- **OrgnlTxRef** — Eşleştirme ve mutabakat için Orijinal İşlem Referansı

## İş bağlamı

- Lehdarın hesabına alacak kaydedilemediğinde takas sonrası iadeleri işler
- Göndericinin fon iadesi talep ettiği geri çağırma senaryolarını destekler
- Düzenleyici ve operasyonel şeffaflık için yapılandırılmış iade neden kodları taşır
- Hem kredi transferi iadelerine (pacs.008) hem de doğrudan borçlandırma iadelerine (pacs.003) uygulanır

## CBPR+ ve şema bağlamı

- MT103 RETURN ve teminat yöntemi iade mesajlarının yerine geçer
- İade neden kodları ISO 20022 kapsamında standartlaştırılmış ve makine tarafından okunabilirdir
- CBPR+, eşleştirme için tam orijinal işlem referans verisi gerektirir
- SWIFT gpi takibi, uçtan uca görünürlük için iade işlemlerine genişletilmiştir

## Mesaj akışı

Talimat alan aracı, daha önce takas edilmiş fonları iade etmek üzere ödeme zinciri boyunca geriye pacs.004 gönderir. Zincirdeki her aracı iadeyi işler ve ilgili hesapları geri alacaklandırır.

## İlgili mesajlar

- [`pacs.008.001.13`](/tr/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report

