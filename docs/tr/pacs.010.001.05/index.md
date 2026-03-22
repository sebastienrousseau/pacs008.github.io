---
title: pacs.010.001.05 — Financial Institution Direct Debit | Türkçe
description: pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO adı** | FinancialInstitutionDirectDebitV05 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 5 |

## Genel bakış

pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.

## Temel veri öğeleri

- **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı
- **DrctDbtTxInf** — Tahsilat tutarı içeren Doğrudan Borçlandırma İşlem Bilgisi
- **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri
- **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri
- **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı

## İş bağlamı

- Finans kuruluşları arasında bankalar arası doğrudan borçlandırma tahsilatını destekler
- Ücret tahsilatı, teminat tamamlama çağrıları ve kurumsal takas yükümlülükleri için kullanılır
- Katılımcı kuruluşlar arasında önceden üzerinde anlaşılmış ikili düzenlemeler gerektirir
- Kurumsal nakit yönetimi ve bankalar arası takas döngüleri için kritik öneme sahiptir

## CBPR+ ve şema bağlamı

- Bankalar arası doğrudan borçlandırma işleme için MT204'ün bazı unsurlarının yerine geçer
- Yapılandırılmış taraf tanımlama, diğer pacs mesajlarıyla aynı gereksinimlere uyar
- Kurumsal tanımlayıcıların (BIC, LEI) doğrulanması zorunludur
- Piyasa altyapıları genelinde tam ISO 20022 benimseme yol haritalarına dahildir

## Mesaj akışı

Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder.

## İlgili mesajlar

- [`pacs.009.001.10`](/tr/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/tr/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/tr/pacs.003.001.09/) — FI to FI Customer Direct Debit

