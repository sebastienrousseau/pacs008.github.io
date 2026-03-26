---
title: "PACS mesajlarının açıklaması | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: tr-TR
lastUpdated: true
image: /logo.webp
---

# PACS mesajlarının açıklaması

This page provides a detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Ödeme yaşam döngüsü

Tam pacs ödeme yaşam döngüsü altı aşama ve birlikte çalışan birden fazla mesaj türünü içerir.

**Aşama 1 — Başlatma.** Ödeme müşteri-banka alanında (pain.001) başlar.

**Aşama 2 — Bankalararası talimat.** Borçlu acente pacs.008 oluşturur ve zincirdeki sonraki acenteye gönderir. Seri akışta pacs.008 aracılar üzerinden ilerler. Teminat akışında pacs.008 doğrudan alacaklı acenteye giderken ayrı bir pacs.009 fonlama ayağını taşır.

**Aşama 3 — Durum raporlama.** Her adımda alıcı acente pacs.002 gönderebilir. CBPR+'da pacs.002 zorunludur.

**Aşama 4 — Uzlaşma.** CLRG, INDA/INGA veya COVE aracılığıyla.

**Aşama 5 — Lehdar kredilendirme.**

**Aşama 6 — İstisna yönetimi.** pacs.004 iade, pacs.007 tersine çevirme, pacs.028 durum sorgusu.

### Seri yöntem akışı

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Teminat yöntemi akışı

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## pacs.008 XML yapısı

### Grup Başlığı (GrpHdr)

- **MsgId** — Benzersiz mesaj tanımlayıcı. Maks 35 karakter.
- **CreDtTm** — ISO 8601 biçiminde oluşturma zaman damgası.
- **NbOfTxs** — İşlem sayısı.
- **SttlmInf** — Uzlaşma bilgisi.
- **IntrBkSttlmDt** — Bankalararası uzlaşma tarihi.

### Kredi Transferi İşlem Bilgisi (CdtTrfTxInf)

- **PmtId** — InstrId, EndToEndId, TxId, UETR.
- **IntrBkSttlmAmt** — Bankalararası uzlaşma tutarı.
- **ChrgBr** — Ücret taşıyıcı kodu.
- **Dbtr / DbtrAcct / DbtrAgt** — Borçlu bilgileri.
- **Cdtr / CdtrAcct / CdtrAgt** — Alacaklı bilgileri.
- **RmtInf** — Havale bilgisi.

## Uzlaşma yöntemleri

- **CLRG** — Takas sistemi aracılığıyla.
- **INDA** — Talimat alan acentenin defterlerinde.
- **INGA** — Talimat veren acentenin defterlerinde.
- **COVE** — Ayrı teminat ödemesi aracılığıyla.

## Ücret taşıyıcı kodları

- **DEBT** — Borçlu tüm ücretleri karşılar (MT103: OUR).
- **CRED** — Alacaklı tüm ücretleri karşılar (MT103: BEN).
- **SHAR** — Ücretler paylaşılır (MT103: SHA).
- **SLEV** — Hizmet düzeyi. SEPA için zorunlu.

## Posta adresi biçimi

### Yapılandırılmış adres

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

## UETR ve gpi izleme

UETR, borçlu acente tarafından oluşturulan UUID v4 tanımlayıcıdır. Tüm ödeme zinciri boyunca değiştirilmemelidir. SWIFT gpi, bulut tabanlı Tracker veritabanı aracılığıyla ödemeleri izlemek için UETR kullanır.

## Referanslar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

