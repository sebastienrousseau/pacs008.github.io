---
title: pacs.003.001.09 — FI to FI Customer Direct Debit | Türkçe
description: pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar.
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

## CBPR+ ve şema bağlamı

- Yapılandırılmış adres ve taraf tanımlama gereksinimleri doğrudan borçlandırmalara eşit şekilde uygulanır
- Yetkiyle ilgili veriler Kasım 2026'dan itibaren tamamen yapılandırılmış olmalıdır
- Sınır ötesi akışlarda eski MT104 tarzı doğrudan borçlandırma formatlarının yerine geçer
- Alacaklı şema tanımlama doğrulaması giderek daha fazla uygulanmaktadır

## Mesaj akışı

Alacaklı aracı, fon tahsil etmek üzere borçlu aracıya pacs.003 başlatır. Borçlu aracı yetkiyi doğrular, hesap bakiyesini kontrol eder ve işlemi takas eder veya iade eder.

## İlgili mesajlar

- [`pacs.004.001.11`](/tr/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/tr/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report

