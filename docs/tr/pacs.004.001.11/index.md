---
title: pacs.004.001.11 | Ödeme iadesi | pacs008
description: pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — Ödeme iadesi

| | |
|---|---|
| **ISO adı** | PaymentReturnV11 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 11 |

## Genel bakış

pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

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

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve oluşturma zaman damgası içeren Grup Başlığı | Lehdarın hesabına alacak kaydedilemediğinde takas sonrası iadeleri işler |
| **TxInf** — İade tutarı ve tarafları içeren İşlem Bilgisi | Göndericinin fon iadesi talep ettiği geri çağırma senaryolarını destekler |
| **OrgnlGrpInf** — Kaynak mesaja bağlayan Orijinal Grup Bilgisi | Düzenleyici ve operasyonel şeffaflık için yapılandırılmış iade neden kodları taşır |
| **RtrRsnInf** — Yapılandırılmış neden kodları içeren İade Nedeni Bilgisi | Hem kredi transferi iadelerine (pacs.008) hem de doğrudan borçlandırma iadelerine (pacs.003) uygulanır |
| **OrgnlTxRef** — Eşleştirme ve mutabakat için Orijinal İşlem Referansı | Talimat alan aracı, daha önce takas edilmiş fonları iade etmek üzere ödeme zinciri boyunca geriye pacs.004 gönderir. Zincirdeki her aracı iadeyi işler ve ilgili hesapları geri alacaklandırır. |

## CBPR+ ve şema bağlamı

- MT103 RETURN ve teminat yöntemi iade mesajlarının yerine geçer
- İade neden kodları ISO 20022 kapsamında standartlaştırılmış ve makine tarafından okunabilirdir
- CBPR+, eşleştirme için tam orijinal işlem referans verisi gerektirir
- SWIFT gpi takibi, uçtan uca görünürlük için iade işlemlerine genişletilmiştir

## Mesaj akışı

Talimat alan aracı, daha önce takas edilmiş fonları iade etmek üzere ödeme zinciri boyunca geriye pacs.004 gönderir. Zincirdeki her aracı iadeyi işler ve ilgili hesapları geri alacaklandırır.

## Sürüm fark tablosu

| Sürüm aralığı | Neden önemli | Uygulama çıkarımı |
|---|---|---|
| pacs.004.001.11 | pacs008 içindeki mevcut uygulama | Ödeme iade mesajları için mevcut şablonlarla uyumludur. |
| pacs.004.001.12-14 | Daha sonraki katalog sürümleri | Kapsamda şema yükseltmeleri veya yeni karşı taraflar varsa, daha sonraki iade mesajı sürümlerini inceleyin. |

## Açıklamalı XML örneği

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### Alan açıklamaları

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: Sebep kodlarının kalitesi, sonraki müşteri iletişimi ve operasyonel yönlendirme için kritiktir.

## Karşılaştır pacs.004 vs pacs.007

| Boyut | pacs.004.001.11 | Karşılaştırma mesajı |
|---|---|---|
| Temel amaç | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| En uygun olduğu durum | Mutabakattan sonra iade işleme | Geri çağırma, hata veya dolandırıcılık kaynaklı geri çevirme işleme |

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.008.001.13`](/tr/pacs.008.001.13/) | FI'dan FI'ya müşteri kredi transferi | pacs.008 mesajı, bir müşteri adına fon transfer etmek üzere finans kuruluşları arasında iletilen temel ödeme talimatıdır. Bir veya daha fazla kredi transferi işlemi için borçlu, alacaklı, tutar ve havale bilgilerini taşır. |
| [`pacs.003.001.09`](/tr/pacs.003.001.09/) | FI'dan FI'ya müşteri doğrudan borçlandırması | pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI'dan FI'ya ödeme durumu raporu | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |

