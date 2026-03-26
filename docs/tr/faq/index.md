---
title: "Frequently asked questions | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Frequently asked questions

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Genel

### ISO 20022 nedir?

ISO 20022, finansal mesajlaşma için uluslararası bir standarttır. Finansal kurumlar arasında takas edilen ödeme mesajları için ortak bir dil ve model tanımlar. SWIFT MT gibi eski biçimlerin aksine, ISO 20022 XML kullanır ve taraflar, tutarlar ve referanslar için daha zengin, yapılandırılmış veriler destekler.

### pacs mesajları nedir?

pacs (payments clearing and settlement) mesaj ailesi bankalararası ödeme talimatlarını, durum raporlarını, iadeleri, tersine çevirmeleri ve sorgulamaları kapsar. pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 ve pacs.028'i içerir.

### pacs mesajları SWIFT MT mesajlarından nasıl farklıdır?

SWIFT MT düz alan etiketi biçimi kullanır. pacs hiyerarşik XML ve daha zengin veri yapıları kullanır. MT103 pacs.008'e, MT202 pacs.009'a eşlenir.

### pain ve pacs mesajları arasındaki ilişki nedir?

pain mesajları müşteri ile banka arasında, pacs mesajları bankalar arasında iletilir.

## Mesaj seçimi

### pacs.008'i ne zaman kullanmalıyım?

Bankalar arasında müşteri kredi transferi talimatları için pacs.008 kullanın.

### pacs.008 yerine pacs.009'u ne zaman kullanmalıyım?

Kurum kendi hesap transferleri, fonlama ve teminat ödemeleri için pacs.009 kullanın.

### pacs.004 ile pacs.007 arasındaki fark nedir?

pacs.004 alıcı taraftan fonları iade eder. pacs.007 gönderen taraftan ödemeyi tersine çevirir.

### pacs.002'yi beklemek yerine pacs.028'i ne zaman kullanmalıyım?

Zamanında pacs.002 güncellemesi almamış bir ödemenin durumunu aktif olarak sorgulamanız gerektiğinde pacs.028 kullanın.

### pacs.003 ne için kullanılır?

pacs.003 bankalar arasında müşteri doğrudan borçlandırma talimatları taşır.

### pacs.010 ne için kullanılır?

pacs.010 finansal kurumlar arasında kendi hesaplarında doğrudan borçlandırmaları yönetir.

## Mesaj yapısı

### Group Header (GrpHdr) nedir?

Group Header her pacs mesajında tam olarak bir kez görünür. MsgId, CreDtTm, NbOfTxs, SttlmInf içerir.

### pacs.008'deki ödeme tanımlayıcıları nelerdir?

MsgId, InstrId, EndToEndId, TxId, UETR.

### Hangi uzlaşma yöntemleri mevcuttur?

CLRG, INDA, INGA, COVE.

### Ücret taşıyıcı kodları ne anlama gelir?

DEBT (borçlu), CRED (alacaklı), SHAR (paylaşımlı), SLEV (hizmet düzeyi, SEPA zorunlu).

## CBPR+ ve göç

### CBPR+ nedir?

CBPR+, SWIFT'in sınır ötesi ödeme mesajlaşmasında ISO 20022'yi benimseme programıdır. Mart 2023'te yayına geçti.

### MT/MX birlikte var olma dönemi ne oldu?

Kasım 2025'te sona erdi. Bankalar artık yerel pacs mesajları gönderip almalıdır.

### Kasım 2026 yapılandırılmış adres son tarihi nedir?

Kasım 2026'dan itibaren SWIFT CBPR+ yapılandırılmış posta adresleri gerektirir. En az TwnNm ve Ctry zorunludur.

### pacs.008 MT103'ün yerini nasıl alır?

pacs.008, MT103 ve MT103+'ın yerini alır. UETR, yapılandırılmış havale, LEI tanımlama ekler.

### pacs.009 MT202'nin yerini nasıl alır?

pacs.009, MT202 ve MT202COV'un yerini alır. Fonlama ve müşteri verilerini temiz şekilde ayırır.

## Teknik ayrıntılar

### Yapılandırılmış ve yapılandırılmamış adresler nedir?

Yapılandırılmış: StrtNm, BldgNb, PstCd, TwnNm, Ctry. Yapılandırılmamış: AdrLine.

### UETR nedir ve gpi izleme nasıl çalışır?

UETR, borçlu acente tarafından oluşturulan ve tüm aşamalarda değişmeyen UUID v4 tanımlayıcıdır.

### Yaygın pacs.002 durum kodları nelerdir?

ACCP, ACSP, ACSC, RJCT, PDNG, RCVD.

### Yaygın pacs.004 iade neden kodları nelerdir?

AC01, AC04, AC06, AM04, BE04, CUST, DUPL, FOCR, FR01.

### Yapılandırılmış havale bilgisi nedir?

RmtInf/Strd belge referansları, tutarlar ve alacaklı referansları taşır.

### LEI nedir ve ne zaman kullanılır?

ISO 17442'ye göre 20 karakterli alfanümerik kod. OrgId/LEI ve FinInstnId/LEI'de kullanılır.

## pacs008 araç seti hakkında

### pacs008 ne yapar?

pacs008, ISO 20022 ödeme mesajları oluşturan, doğrulayan ve gönderen bir Python araç setidir.

### pacs008 hangi mesaj türlerini destekler?

pacs.002.001.12, pacs.003.001.09, pacs.004.001.11, pacs.007.001.11, pacs.008.001.13, pacs.009.001.10, pacs.010.001.05, pacs.028.001.05.

### pacs008 2026 yapılandırılmış adres son tarihine nasıl yardımcı olur?

XML oluşturmadan önce yapılandırılmış ve hibrit adres alanlarını doğrular.

### pacs008 XML oluşturmadan veri doğrulayabilir mi?

Evet. `--dry-run` CLI bayrağını veya `POST /validate` API uç noktasını kullanın.

## Referanslar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

