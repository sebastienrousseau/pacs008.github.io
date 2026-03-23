---
title: pacs.003.001.09 | FI to FI Customer Direct Debit | pacs008
description: pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — FI to FI Customer Direct Debit

| | |
|---|---|
| **ISO adı** | FIToFICustomerDirectDebitV09 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 9 |

## Genel bakış

pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 27 February 2025; kaynak bağlantıları aşağıda listelenmiştir.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **DrctDbtTxInf** — Tutar ve tarafları içeren Doğrudan Borçlandırma İşlem Bilgisi
- **Cdtr** — Alacaklı kimlik bilgileri ve hesap detayları
- **CdtrAgt** — Alacaklı Aracısı (tahsilat kuruluşu) kimlik bilgileri
- **DbtrAgt** — Borçlu Aracısı (ödeme kuruluşu) kimlik bilgileri

## İş bağlamı

- SEPA Core ve B2B doğrudan borçlandırma şemalarını destekler
- Abonelikler, fatura ödemeleri ve kredi geri ödemeleri gibi tekrarlayan ödeme tahsilatı için kullanılır
- Borçlu ile alacaklı arasında geçerli bir yetki referansı gerektirir
- Tek bir mesajda birden fazla doğrudan borçlandırma talimatının toplu tahsilatını sağlar

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı | SEPA Core ve B2B doğrudan borçlandırma şemalarını destekler |
| **DrctDbtTxInf** — Tutar ve tarafları içeren Doğrudan Borçlandırma İşlem Bilgisi | Abonelikler, fatura ödemeleri ve kredi geri ödemeleri gibi tekrarlayan ödeme tahsilatı için kullanılır |
| **Cdtr** — Alacaklı kimlik bilgileri ve hesap detayları | Borçlu ile alacaklı arasında geçerli bir yetki referansı gerektirir |
| **CdtrAgt** — Alacaklı Aracısı (tahsilat kuruluşu) kimlik bilgileri | Tek bir mesajda birden fazla doğrudan borçlandırma talimatının toplu tahsilatını sağlar |
| **DbtrAgt** — Borçlu Aracısı (ödeme kuruluşu) kimlik bilgileri | Alacaklı aracı, fon tahsil etmek üzere borçlu aracıya pacs.003 başlatır. Borçlu aracı yetkiyi doğrular, hesap bakiyesini kontrol eder ve işlemi takas eder veya iade eder. |

## CBPR+ ve şema bağlamı

- Yapılandırılmış adres ve taraf tanımlama gereksinimleri doğrudan borçlandırmalara eşit şekilde uygulanır
- Yetkiyle ilgili veriler Kasım 2026'dan itibaren tamamen yapılandırılmış olmalıdır
- Sınır ötesi akışlarda eski MT104 tarzı doğrudan borçlandırma formatlarının yerine geçer
- Alacaklı şema tanımlama doğrulaması giderek daha fazla uygulanmaktadır

## Mesaj akışı

Alacaklı aracı, fon tahsil etmek üzere borçlu aracıya pacs.003 başlatır. Borçlu aracı yetkiyi doğrular, hesap bakiyesini kontrol eder ve işlemi takas eder veya iade eder.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.004.001.11`](/tr/pacs.004.001.11/) | Payment Return | pacs.004 mesajı, daha önce takas edilmiş bir ödeme işlemini iade etmek için kullanılır. Bir ödeme uygulanamadığında, hatalı gönderildiğinde veya kaynak kuruluş tarafından geri çağrıldığında fon akışını tersine çevirir. |
| [`pacs.007.001.11`](/tr/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007 mesajı, henüz takas edilmemiş daha önce gönderilmiş bir ödeme talimatını tersine çevirmek veya takas edilmiş bir ödemenin tersine çevrilmesini talep etmek için kullanılır. pacs.004'ten (iade) farklı olarak, orijinal talimat veren aracı tarafından başlatılır. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |

