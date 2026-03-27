---
title: "ISO 20022 hakkında sık sorulan sorular | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: tr-TR
lastUpdated: true
image: /logo.webp
---

# ISO 20022 hakkında sık sorulan sorular

This page answers common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Genel

### ISO 20022 nedir?

ISO 20022, finansal mesajlaşma için uluslararası bir standarttır. Finansal kurumlar arasında takas edilen ödeme mesajları için ortak bir dil ve model tanımlar. SWIFT MT gibi eski biçimlerin aksine, ISO 20022 XML kullanır ve taraflar, tutarlar ve referanslar için daha zengin, yapılandırılmış veriler destekler.

### pacs mesajları nedir?

pacs (payments clearing and settlement) mesaj ailesi bankalararası ödeme talimatlarını, durum raporlarını, iadeleri, tersine çevirmeleri ve sorgulamaları kapsar. pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 ve pacs.028'i içerir. Her mesaj, ödeme yaşam döngüsünde belirli bir rol üstlenir.

### pacs mesajları SWIFT MT mesajlarından nasıl farklıdır?

SWIFT MT mesajları düz alan etiketi biçimi kullanır (ör. müşteri kredi transferleri için MT103). pacs mesajları daha zengin veri yapılarıyla hiyerarşik XML kullanır. Temel farklar arasında mesaj başına birden fazla işlem desteği, yapılandırılmış taraf tanımlama (LEI, çoklu kimlikler), yapılandırılmış posta adresleri ve yapılandırılmış havale bilgisi yer alır. MT103 pacs.008'e, MT202 pacs.009'a eşlenir ve MT199 durum metni pacs.002 ile değiştirilir.

### pain ve pacs mesajları arasındaki ilişki nedir?

pain (payment initiation) mesajları müşteri ile bankası arasında iletilir. pacs mesajları bankalar arasında iletilir. Borçlu bankasından gelen bir pain.001 müşteri kredi transferi başlatma işlemi, pacs.008 bankalararası talimatına dönüşür. İki alan ortak veri öğelerini paylaşır ancak ödeme zincirinin farklı bölümlerine hizmet eder.

## Mesaj seçimi

### pacs.008'i ne zaman kullanmalıyım?

Bankalar arasında müşteri kredi transferi talimatları için pacs.008 kullanın. Borçlu ve alacaklı taraf verilerini, tutarları, havale bilgilerini ve uzlaşma ayrıntılarını taşır. Bankalararası ağ üzerinden müşteri ödemelerinin gönderilmesi için ana mesajdır; hem yurt içi (SEPA) hem de sınır ötesi (CBPR+) işlemlerde kullanılır.

### pacs.008 yerine pacs.009'u ne zaman kullanmalıyım?

Kurum kendi hesap transferleri, fonlama etapları ve teminat ödemeleri için pacs.009 kullanın. Bir borçlu adına müşteri ödemesi taşıyan pacs.008'in aksine, pacs.009 bankaların kendi adlarına aralarında fon aktarır. Teminat yöntemi akışlarında pacs.009 fonlamayı üstlenirken pacs.008 müşteri talimatını ayrı bir yolda taşır.

### pacs.004 ile pacs.007 arasındaki fark nedir?

pacs.004 uzlaşmış fonları alıcı taraftan zincir boyunca geri iade eder. pacs.007 ödemeyi orijinal gönderen taraftan zincir boyunca ileri tersine çevirir. Lehtar bankası uzlaşma sonrası krediyi uygulayamadığında pacs.004 kullanın. Gönderen bir hata, mükerrerlik veya dolandırıcılık keşfettiğinde pacs.007 kullanın.

### pacs.002'yi beklemek yerine pacs.028'i ne zaman kullanmalıyım?

Zamanında pacs.002 güncellemesi almamış bir ödemenin durumunu aktif olarak sorgulamanız gerektiğinde pacs.028 kullanın. pacs.002 olay güdümlüdür (alıcı acente proaktif olarak gönderir), pacs.028 ise istisna güdümlüdür (talimat veren acente talep eder). pacs.028'i gecikmiş, belirsiz veya eksik ödeme güncellemeleri için kullanın; rutin trafik olarak değil.

### pacs.003 ne için kullanılır?

pacs.003 bankalar arasında müşteri doğrudan borçlandırma talimatları taşır. Alacaklı acentesi, fon toplamak için borçlu acentesine gönderir. Geçerli bir talimat referansı gerektirir ve SEPA Core ile B2B doğrudan borçlandırma şemalarını destekler. Kredi transferleri veya kurumlar arası kendi hesap borçlandırmaları için kullanılmaz.

### pacs.010 ne için kullanılır?

pacs.010 finansal kurumlar arasında kendi hesaplarında doğrudan borçlandırmaları yönetir. Ücretler, teminat çağrıları ve ikili anlaşmalar kapsamındaki benzer yükümlülükler gibi bankalar arası tahsilatlar için kullanılır. Müşteri doğrudan borçlandırmaları veya kredi transferleri için kullanılmaz.

## Mesaj yapısı

### Group Header (GrpHdr) nedir?

Group Header her pacs mesajında tam olarak bir kez görünür. Mesaj tanımlayıcısı (MsgId), oluşturma zaman damgası (CreDtTm), işlem sayısı (NbOfTxs), uzlaşma bilgisi (SttlmInf) ve isteğe bağlı olarak toplam bankalararası uzlaşma tutarı ile ödeme türü bilgisini içerir. Mesaj zarfını tanımlar; bireysel iş işlemlerini değil.

### pacs.008'deki ödeme tanımlayıcıları nelerdir?

pacs.008 dört ana tanımlayıcı kullanır. MsgId mesaj zarfını tanımlar ve her atlamada değişir. InstrId bitişik acenteler arasında noktadan noktaya bir referanstır ve her atlamada değişebilir. EndToEndId gönderen tarafından belirlenir ve zincirdeki hiçbir acente tarafından değiştirilmemelidir. TxId ilk talimat veren acente tarafından atanır ve bankalararası alanda sabit kalır. UETR, uçtan uca izleme için tüm etaplarda değişmeden kalan bir UUID'dir.

### Hangi uzlaşma yöntemleri mevcuttur?

Dört uzlaşma yöntemi tanımlanmıştır. CLRG, TARGET2, EURO1 veya CHIPS gibi bir takas sistemi aracılığıyla uzlaşır. INDA, borçlu acentesinin hesap tuttuğu talimat edilen acentenin defterlerinde uzlaşır. INGA, talimat edilen acentenin hesap tuttuğu talimat veren acentenin defterlerinde uzlaşır. COVE, pacs.009 tarafından taşınan ayrı bir teminat ödemesi aracılığıyla uzlaşır.

### Ücret taşıyıcı kodları ne anlama gelir?

DEBT tüm ücretlerin borçlu tarafından karşılandığı anlamına gelir (MT103 OUR karşılığı). CRED tüm ücretlerin alacaklı tarafından karşılandığı anlamına gelir (BEN karşılığı). SHAR ücretlerin borçlu ve alacaklı acenteleri arasında paylaşıldığı anlamına gelir (SHA karşılığı). SLEV ücretlerin hizmet düzeyi kurallarına uyduğu anlamına gelir ve SEPA kredi transferlerinde zorunludur.

## CBPR+ ve göç

### CBPR+ nedir?

CBPR+ (Cross-Border Payments and Reporting Plus), SWIFT'in sınır ötesi ödeme mesajlaşmasında ISO 20022'yi benimseme programıdır. Mart 2023'te yayına geçti ve MT mesajlarını pacs karşılıklarıyla değiştirir. CBPR+ tüm durum iletişimi için pacs.002'yi zorunlu kılar, daha zengin taraf verilerini ve yapılandırılmış adresleri destekler ve gpi üzerinden UETR tabanlı izleme kullanır.

### MT/MX birlikte var olma dönemi ne oldu?

Sınır ötesi ödeme talimatları için birlikte var olma dönemi Kasım 2025'te sona erdi. O tarihten itibaren CBPR+ mesajları ISO 20022 (MX) biçimini kullanmalıdır. Geçiş döneminde MT ile MX arasında dönüşüm yapan çeviri hizmetleri artık yeni akışlar için mevcut değildir. Bankalar artık yerel pacs mesajları gönderip almalıdır.

### Kasım 2026 yapılandırılmış adres son tarihi nedir?

Kasım 2026'dan itibaren SWIFT CBPR+ sınır ötesi ödeme mesajlarında yapılandırılmış posta adresleri gerektirir. Yapılandırılmamış adres satırları (yalnızca AdrLine) kilit taraf alanlarında artık kabul edilmeyecektir. En az TwnNm ve Ctry zorunludur; StrtNm ve BldgNb veya PstBx önerilir. Bu, yaptırım taramasını iyileştirir ve manuel onarımı azaltır.

### pacs.008 MT103'ün yerini nasıl alır?

pacs.008, müşteri kredi transferleri için MT103 ve MT103+'ın yerini alır. Temel eşleme: MT103 alan 20 MsgId veya InstrId'ye eşlenir; alan 32A IntrBkSttlmDt ve IntrBkSttlmAmt'a bölünür; alan 50a Dbtr ve DbtrAcct'a eşlenir; alan 59a Cdtr ve CdtrAcct'a eşlenir; alan 70 RmtInf'a eşlenir; alan 71A ChrgBr'a eşlenir. pacs.008 UETR, yapılandırılmış havale, LEI tanımlama ekler ve mesaj başına birden fazla işlemi destekler.

### pacs.009 MT202'nin yerini nasıl alır?

pacs.009, kurumlar arası transferler için MT202 ve MT202COV'un yerini alır. Teminat yöntemi akışlarında MT202COV (hem fonlamayı hem de temel müşteri verilerini taşıyan) temiz bir şekilde ayrılır: pacs.009 fonlama etabını taşırken pacs.008 müşteri talimatını doğrudan taşır. Bu ayrım veri kalitesini artırır ve mutabakat sorunlarını azaltır.

## Teknik ayrıntılar

### Yapılandırılmış ve yapılandırılmamış adresler nedir?

Yapılandırılmış adresler her bileşen için ayrı XML öğeleri kullanır: StrtNm (sokak), BldgNb (bina numarası), PstCd (posta kodu), TwnNm (şehir), Ctry (ülke) ve Flr, Room ve DstrctNm gibi isteğe bağlı öğeler. Yapılandırılmamış adresler serbest metinle en fazla yedi AdrLine öğesi kullanır. Karma adresler geçiş döneminde her ikisini birleştirir. Kasım 2026'dan sonra CBPR+ yapılandırılmış biçimi gerektirir.

### UETR nedir ve gpi izleme nasıl çalışır?

UETR (Unique End-to-End Transaction Reference), borçlu acente tarafından oluşturulan ve bir ödemenin tüm etaplarında değiştirilmeden taşınan UUID v4 tanımlayıcıdır. pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 ve pacs.028'de görünür. SWIFT gpi, bulut tabanlı bir Tracker veritabanı aracılığıyla ödemeleri izlemek için UETR'yi kullanır. Her acente alındığı ve işlediğini onaylar; bu uçtan uca görünürlük ve SLA izleme sağlar.

### Yaygın pacs.002 durum kodları nelerdir?

ACCP müşteri profili kontrollerinden sonra kabul edildi anlamına gelir. ACSP kabul edildi ve uzlaşma devam ediyor anlamına gelir. ACSC borçlu hesabındaki uzlaşma tamamlandı anlamına gelir. RJCT reddedildi anlamına gelir (StsRsnInf'da neden koduyla). PDNG daha fazla işleme bekliyor anlamına gelir. RCVD alındı ancak henüz işlenmedi anlamına gelir. Her durum AC01 (yanlış hesap numarası), AM04 (yetersiz bakiye) veya RC01 (yanlış BIC) gibi yapılandırılmış bir neden kodu içerebilir.

### Yaygın pacs.004 iade neden kodları nelerdir?

Sık karşılaşılan iade neden kodları arasında AC01 (yanlış hesap numarası), AC04 (kapatılmış hesap), AC06 (bloke hesap), AM04 (yetersiz bakiye), BE04 (eksik alacaklı adresi), CUST (müşteri talebi), DUPL (mükerrer ödeme), FOCR (iptal talebinin ardından) ve FR01 (dolandırıcılık) yer alır. Tam liste ISO 20022 External Code Sets'te tanımlanmıştır.

### Yapılandırılmış havale bilgisi nedir?

pacs.008'deki yapılandırılmış havale, belge referansları (fatura numaraları, alacak dekontları), tutarlar (vadesi gelen, havale edilen, vergi, iskonto) ve alacaklı referansları (ISO 11649 RF referansları) taşımak için RmtInf/Strd öğesini kullanır. Bu, otomatik fatura eşleştirme ve mutabakatı sağlar. Yaygın belge türü kodları CINV (ticari fatura), CREN (alacak dekontu) ve SOAC (hesap özeti) içerir.

### LEI nedir ve ne zaman kullanılır?

LEI (Legal Entity Identifier), ISO 17442'ye göre 20 karakterli alfanümerik bir koddur. Finansal işlemlere katılan tüzel kişileri benzersiz şekilde tanımlar. pacs mesajlarında LEI, taraflar için OrgId/LEI'de ve acenteler için FinInstnId/LEI'de görünür. CBPR+ taraf ve acente tanımlaması için LEI kullanımını giderek daha fazla teşvik etmektedir. Kuruluş belirsizliğini giderir ve düzenleyici raporlama gereksinimlerini destekler.

## pacs008 araç seti hakkında

### pacs008 ne yapar?

pacs008, ISO 20022 ödeme mesajları oluşturan, doğrulayan ve gönderen bir Python araç setidir. CSV, JSON, JSONL, SQLite ve Parquet kaynaklarından ödeme verilerini okur, JSON Schema ve XSD'ye göre doğrular, IBAN ve BIC tanımlayıcılarını kontrol eder, SWIFT karakter uyumluluğu için verileri temizler ve XML dosyaları üretir. Bir REST API, CLI ve Python kütüphanesi sunar.

### pacs008 hangi mesaj türlerini destekler?

pacs008 sekiz mesaj türünü destekler: pacs.002.001.12 (durum raporu), pacs.003.001.09 (müşteri doğrudan borçlandırma), pacs.004.001.11 (ödeme iadesi), pacs.007.001.11 (ödeme tersine çevirme), pacs.008.001.13 (müşteri kredi transferi), pacs.009.001.10 (finansal kurum kredi transferi), pacs.010.001.05 (finansal kurum doğrudan borçlandırma) ve pacs.028.001.05 (ödeme durum talebi).

### pacs008 2026 yapılandırılmış adres son tarihine nasıl yardımcı olur?

pacs008, XML oluşturmadan önce yapılandırılmış ve karma posta adresi alanlarını doğrular. Kasım 2026 son tarihinden sonra başarısız olacak yapılandırılmamış adres verilerini işaretler, son tarih öncesi karma ve sonrası yalnızca yapılandırılmış biçimleri destekler ve adres kalitesi kontrollerini CI pipeline'larına ve toplu doğrulama iş akışlarına entegre eder.

### pacs008 XML oluşturmadan veri doğrulayabilir mi?

Evet. Ödeme verilerini XML oluşturmadan doğrulamak için `--dry-run` CLI bayrağını veya `POST /validate` API uç noktasını kullanın. Doğrulama pipeline'ı JSON Schema uyumluluğunu, IBAN biçimi ve sağlama toplamını, BIC yapısını ve SWIFT karakter uyumluluğunu kontrol eder. Çıkış kodu veya API yanıtı doğrulamanın başarılı olup olmadığını gösterir.

## Referanslar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

