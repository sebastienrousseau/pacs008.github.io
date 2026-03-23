---
title: pacs.010.001.05 | Finansal kuruluşlar arası doğrudan borçlandırma | pacs008
description: pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir...
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Finansal kuruluşlar arası doğrudan borçlandırma

| | |
|---|---|
| **ISO adı** | FinancialInstitutionDirectDebitV05 |
| **Kayıt durumu** | Registered |
| **Yıl** | 2019 |
| **Sürüm** | 5 |

## Genel bakış

pacs.010 mesajı, kuruluşun kendi hesabındaki doğrudan borçlandırma işlemleri için finans kuruluşları arasında kullanılır. Bir kuruluşun başka bir kuruluşun hesabından doğrudan fon tahsil etmesini sağlar.

> Birincil kaynaklara göre en son 23 Mart 2026 tarihinde gözden geçirildi. ISO 20022 katalog referans tarihi: 2025-02-27; kaynak bağlantıları aşağıda listelenmiştir.

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

| Temel veri öğeleri | İş bağlamı |
|---|---|
| **GrpHdr** — Mesaj tanımlama ve takas bilgisi içeren Grup Başlığı | Finans kuruluşları arasında bankalar arası doğrudan borçlandırma tahsilatını destekler |
| **DrctDbtTxInf** — Tahsilat tutarı içeren Doğrudan Borçlandırma İşlem Bilgisi | Ücret tahsilatı, teminat tamamlama çağrıları ve kurumsal takas yükümlülükleri için kullanılır |
| **Cdtr / CdtrAgt** — Alacaklı kuruluş ve aracısının kimlik bilgileri | Katılımcı kuruluşlar arasında önceden üzerinde anlaşılmış ikili düzenlemeler gerektirir |
| **Dbtr / DbtrAgt** — Borçlu kuruluş ve aracısının kimlik bilgileri | Kurumsal nakit yönetimi ve bankalar arası takas döngüleri için kritik öneme sahiptir |
| **IntrBkSttlmAmt** — Takas para birimi cinsinden Bankalar Arası Takas Tutarı | Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder. |

## CBPR+ ve şema bağlamı

- Bankalar arası doğrudan borçlandırma işleme için MT204'ün bazı unsurlarının yerine geçer
- Yapılandırılmış taraf tanımlama, diğer pacs mesajlarıyla aynı gereksinimlere uyar
- Kurumsal tanımlayıcıların (BIC, LEI) doğrulanması zorunludur
- Piyasa altyapıları genelinde tam ISO 20022 benimseme yol haritalarına dahildir

## Mesaj akışı

Alacaklı kuruluş, önceden üzerinde anlaşılmış bir düzenleme kapsamında fon tahsil etmek üzere borçlu kuruluşa pacs.010 gönderir. Borçlu kuruluş talebi doğrular ve doğrudan borçlandırmayı takas eder veya reddeder.

## Sürüm fark tablosu

| Sürüm aralığı | Neden önemli | Uygulama çıkarımı |
|---|---|---|
| pacs.010.001.05 | pacs008 içindeki mevcut uygulama | Mevcut projede kurumlar arası doğrudan borçlandırma desteği için referans noktasıdır. |
| pacs.010.001.06 | Daha sonraki katalog sürümü | Daha yeni altyapı gereksinimlerini benimsemeden önce gözden geçirin. |

## Açıklamalı XML örneği

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### Alan açıklamaları

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: Kurumlar arası doğrudan borçlandırma tutarları çoğu zaman açık iki taraflı tolerans kontrolleri gerektirir.
- `Cdtr` / `Dbtr`: Kurumsal rolleri açıkça belirtin; bu, perakende müşteri borçlandırma modeli değildir.

## Birincil referanslar

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## İlgili mesajlar
| Mesaj türü | Açıklama | Genel bakış |
|---|---|---|
| [`pacs.009.001.10`](/tr/pacs.009.001.10/) | Finansal kuruluşlar arası kredi transferi | pacs.009 mesajı, transferin bir müşteri adına değil kurumun kendi adına gerçekleştirildiği durumlarda finans kuruluşları arasında kredi transferleri için kullanılır. Bankalar arası fonlama, teminat ödemeleri ve likidite yönetimini destekler. |
| [`pacs.002.001.12`](/tr/pacs.002.001.12/) | FI'dan FI'ya ödeme durumu raporu | pacs.002 mesajı, daha önce gönderilmiş bir ödeme talimatının durumunu bildirmek üzere bir finans kuruluşu tarafından gönderilir. Bir ödeme mesajı içindeki bireysel işlemler için onay, ret veya bekleyen durum bilgisi sağlar. |
| [`pacs.003.001.09`](/tr/pacs.003.001.09/) | FI'dan FI'ya müşteri doğrudan borçlandırması | pacs.003 mesajı, bir müşteri doğrudan borçlandırma talimatını yürütmek üzere finans kuruluşları arasında iletilir. Alacaklının bankasının, alacaklı adına borçlunun bankasından fon tahsil etmesini sağlar. |

