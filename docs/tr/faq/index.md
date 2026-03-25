---
title: "Sıkça sorulan sorular | pacs008"
description: ISO 20022 pacs mesajları, CBPR+ geçişi, mesaj seçimi, uygulama ve pacs008 araç seti hakkında yaygın sorular.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# Sıkça sorulan sorular

Bu sayfa, ISO 20022 pacs mesajları, birlikte nasıl çalıştıkları ve pacs008'in ekiplerin bunları uygulamasına nasıl yardımcı olduğu hakkındaki yaygın soruları yanıtlar.

## Genel

### ISO 20022 nedir?

ISO 20022, finansal mesajlaşma için uluslararası bir standarttır. Finansal kuruluşlar arasında değiştirilen ödeme mesajları için ortak bir dil ve model tanımlar. SWIFT MT gibi eski formatlardan farklı olarak ISO 20022, XML kullanır ve taraflar, tutarlar ve referanslar için daha zengin, daha yapılandırılmış verileri destekler.

### Pacs mesajları nedir?

Pacs (payments clearing and settlement) mesaj ailesi, bankalar arası ödeme talimatlarını, durum raporlarını, iadeleri, geri dönüşleri ve sorgulamaları kapsar. pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 ve pacs.028'i içerir. Her mesaj, ödeme yaşam döngüsünde belirli bir rol üstlenir.

### Pacs mesajları SWIFT MT mesajlarından nasıl farklıdır?

SWIFT MT mesajları düz, alan etiketi formatı kullanır (ör. müşteri kredi transferleri için MT103). Pacs mesajları, daha zengin veri yapılarına sahip hiyerarşik XML kullanır. Temel farklar arasında mesaj başına birden fazla işlem desteği, yapılandırılmış taraf kimliği (LEI, birden fazla kimlik), yapılandırılmış posta adresleri ve yapılandırılmış havale bilgileri yer alır. MT103 pacs.008'e, MT202 pacs.009'a karşılık gelir ve MT199 durum metni pacs.002 ile değiştirilir.

### Pain ve pacs mesajları arasındaki ilişki nedir?

Pain (payment initiation) mesajları müşteri ile bankası arasında iletilir. Pacs mesajları bankalar arasında iletilir. Borçlunun bankasından gelen pain.001 müşteri kredi transferi başlatması, pacs.008 bankalar arası talimat haline gelir. İki alan ortak veri öğelerini paylaşır ancak ödeme zincirinin farklı bölümlerini hizmet eder.

## Mesaj seçimi

### pacs.008'i ne zaman kullanmalıyım?

Bankalar arası müşteri kredi transferi talimatları için pacs.008 kullanın. Borçlu ve alacaklı taraf verilerini, tutarları, havale bilgilerini ve takas ayrıntılarını taşır. İster yurt içi (SEPA) ister sınır ötesi (CBPR+) olsun, bankalar arası ağ üzerinden müşteri ödemelerini göndermek için ana mesajdır.

### pacs.008 yerine pacs.009'u ne zaman kullanmalıyım?

Kurum kendi hesap transferleri, fonlama ayakları ve karşılama ödemeleri için pacs.009 kullanın. Borçlu adına müşteri ödemesi taşıyan pacs.008'den farklı olarak, pacs.009 kendi adına bankalar arasında fon transfer eder. Karşılama yöntemi akışlarında pacs.009 fonlamayı taşırken pacs.008 müşteri talimatını ayrı bir yolda taşır.

### pacs.004 ile pacs.007 arasındaki fark nedir?

pacs.004, takas edilmiş fonları alıcı taraftan zincir boyunca geri iade eder. pacs.007, orijinal talimat veren taraftan ileriye doğru zincir boyunca ödemeyi geri alır. Faydalanıcı banka takastan sonra krediyi uygulayamadığında pacs.004 kullanın. Başlatıcı bir hata, mükerrer veya dolandırıcılık keşfettiğinde pacs.007 kullanın.

### pacs.002'yi beklemek yerine pacs.028'i ne zaman kullanmalıyım?

Zamanında pacs.002 güncellemesi almamış bir ödemenin durumunu aktif olarak sorgulamanız gerektiğinde pacs.028 kullanın. pacs.002 olay güdümlüdür (alıcı acente proaktif olarak gönderir), pacs.028 ise istisna güdümlüdür (talimat veren acente talep eder). Gecikmiş, belirsiz veya eksik ödeme güncellemeleri için pacs.028 kullanın, rutin trafik olarak değil.

### pacs.003 ne için kullanılır?

pacs.003, bankalar arası müşteri doğrudan borçlandırma talimatlarını taşır. Alacaklı acente, fon tahsil etmek için borçlu acenteye gönderir. Geçerli bir yetki referansı gerektirir ve SEPA Core ve B2B doğrudan borçlandırma şemalarını destekler. Kredi transferleri veya kurum kendi hesap borçlandırmaları için kullanılmaz.

### pacs.010 ne için kullanılır?

pacs.010, finansal kuruluşlar arasında kendi hesaplarında doğrudan borçlandırmaları yönetir. Ücretler, teminat çağrıları ve ikili anlaşmalar kapsamındaki benzer yükümlülükler gibi bankadan bankaya tahsilatlar için kullanılır. Müşteri doğrudan borçlandırmaları veya kredi transferleri için kullanılmaz.

## Mesaj yapısı

### Group Header (GrpHdr) nedir?

Group Header, pacs mesajı başına tam olarak bir kez görünür. Mesaj tanımlayıcısını (MsgId), oluşturma zaman damgasını (CreDtTm), işlem sayısını (NbOfTxs), takas bilgilerini (SttlmInf) ve isteğe bağlı olarak toplam bankalar arası takas tutarını ve ödeme türü bilgilerini içerir. Bireysel ticari işlemleri değil, mesaj zarfını tanımlar.

### pacs.008'deki ödeme tanımlayıcıları nelerdir?

pacs.008 dört ana tanımlayıcı kullanır. MsgId mesaj zarfını tanımlar ve her atlama noktasında değişir. InstrId, bitişik acenteler arasında noktadan noktaya bir referanstır ve atlama başına değişebilir. EndToEndId, başlatıcı tarafından belirlenir ve zincirdeki hiçbir acente tarafından değiştirilmemelidir. TxId, ilk talimat veren acente tarafından atanır ve bankalar arası alanda sabit kalır. UETR, uçtan uca takip için tüm ayaklarda değişmeden kalan bir UUID'dir.

### Hangi takas yöntemleri mevcuttur?

Dört takas yöntemi tanımlanmıştır. CLRG, TARGET2, EURO1 veya CHIPS gibi bir takas sistemi aracılığıyla takas eder. INDA, borçlu acentenin hesap tuttuğu talimat alan acentenin defterlerinde takas eder. INGA, talimat alan acentenin hesap tuttuğu talimat veren acentenin defterlerinde takas eder. COVE, pacs.009 tarafından taşınan ayrı bir karşılama ödemesi aracılığıyla takas eder.

### Masraf taşıyıcı kodları ne anlama gelir?

DEBT, tüm masrafların borçlu tarafından karşılandığı anlamına gelir (MT103 OUR eşdeğeri). CRED, tüm masrafların alacaklı tarafından karşılandığı anlamına gelir (BEN eşdeğeri). SHAR, masrafların borçlu ve alacaklı acenteler arasında paylaşıldığı anlamına gelir (SHA eşdeğeri). SLEV, masrafların hizmet seviyesi kurallarına uyduğu anlamına gelir ve SEPA kredi transferleri için zorunludur.

## CBPR+ ve geçiş

### CBPR+ nedir?

CBPR+ (Cross-Border Payments and Reporting Plus), SWIFT'in sınır ötesi ödeme mesajlaşmasında ISO 20022'yi benimseme programıdır. Mart 2023'te hayata geçti ve MT mesajlarını pacs eşdeğerleriyle değiştirir. CBPR+, tüm durum iletişimi için pacs.002'yi zorunlu kılar, daha zengin taraf verilerini ve yapılandırılmış adresleri destekler ve gpi aracılığıyla UETR tabanlı takip kullanır.

### MT/MX birlikte var olma dönemine ne oldu?

Sınır ötesi ödeme talimatları için birlikte var olma dönemi Kasım 2025'te sona erdi. O zamandan beri, CBPR+ mesajları ISO 20022 (MX) formatını kullanmalıdır. Geçiş sırasında MT ve MX arasında dönüştürme yapan çeviri hizmetleri artık yeni akışlar için mevcut değildir. Bankalar artık yerel pacs mesajları gönderip almalıdır.

### Kasım 2026 yapılandırılmış adres son tarihi nedir?

Kasım 2026'dan itibaren SWIFT CBPR+, sınır ötesi ödeme mesajlarında yapılandırılmış posta adreslerini gerektirir. Yapılandırılmamış adres satırları (yalnızca AdrLine) önemli taraf alanları için artık kabul edilmeyecektir. En azından TwnNm ve Ctry gereklidir, StrtNm ve BldgNb veya PstBx önerilir. Bu, yaptırım taramasını iyileştirir ve manuel onarımı azaltır.

### pacs.008, MT103'ün yerini nasıl alır?

pacs.008, müşteri kredi transferleri için MT103 ve MT103+'ın yerini alır. Temel eşleme: MT103 alan 20, MsgId veya InstrId'ye karşılık gelir; alan 32A, IntrBkSttlmDt ve IntrBkSttlmAmt'a bölünür; alan 50a, Dbtr ve DbtrAcct'a karşılık gelir; alan 59a, Cdtr ve CdtrAcct'a karşılık gelir; alan 70, RmtInf'a karşılık gelir; alan 71A, ChrgBr'a karşılık gelir. pacs.008, UETR, yapılandırılmış havale, LEI kimliği ekler ve mesaj başına birden fazla işlemi destekler.

### pacs.009, MT202'nin yerini nasıl alır?

pacs.009, kurumlar arası transferler için MT202 ve MT202COV'un yerini alır. Karşılama yöntemi akışlarında, MT202COV (hem fonlama hem de temel müşteri verilerini taşıyan) temiz bir şekilde ayrılır: pacs.009 fonlama ayağını taşırken pacs.008 müşteri talimatını doğrudan taşır. Bu ayrım veri kalitesini artırır ve mutabakat sorunlarını azaltır.

## Teknik ayrıntılar

### Yapılandırılmış ve yapılandırılmamış adresler nedir?

Yapılandırılmış adresler, her bileşen için ayrı XML öğeleri kullanır: StrtNm (sokak), BldgNb (bina numarası), PstCd (posta kodu), TwnNm (şehir), Ctry (ülke) ve Flr, Room ve DstrctNm gibi isteğe bağlı öğeler. Yapılandırılmamış adresler, serbest metin içeren yedi adede kadar AdrLine öğesi kullanır. Hibrit adresler, geçiş döneminde her ikisini birleştirir. Kasım 2026'dan sonra CBPR+ yapılandırılmış formatı gerektirir.

### UETR nedir ve gpi takibi nasıl çalışır?

UETR (Unique End-to-End Transaction Reference), borçlu acente tarafından oluşturulan ve bir ödemenin tüm ayakları boyunca değişmeden taşınan bir UUID v4 tanımlayıcısıdır. pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 ve pacs.028'de görünür. SWIFT gpi, bulut tabanlı bir Tracker veritabanı aracılığıyla ödemeleri takip etmek için UETR'yi kullanır. Her acente alındığını ve işlenmesini onaylar, uçtan uca görünürlük ve SLA izlemesi sağlar.

### Yaygın pacs.002 durum kodları nelerdir?

ACCP, müşteri profili kontrollerinden sonra kabul edildiği anlamına gelir. ACSP, kabul edildiği ve takasın devam ettiği anlamına gelir. ACSC, borçlu hesabındaki takasın tamamlandığı anlamına gelir. RJCT, reddedildiği anlamına gelir (StsRsnInf'de neden kodu ile). PDNG, daha fazla işlem için beklemede olduğu anlamına gelir. RCVD, alındığı ancak henüz işlenmediği anlamına gelir. Her durum, AC01 (yanlış hesap), AM04 (yetersiz bakiye) veya RC01 (yanlış BIC) gibi yapılandırılmış bir neden kodu içerebilir.

### pacs.004'teki yaygın iade neden kodları nelerdir?

Sık kullanılan iade neden kodları arasında AC01 (yanlış hesap numarası), AC04 (kapalı hesap), AC06 (bloke hesap), AM04 (yetersiz bakiye), BE04 (alacaklı adresi eksik), CUST (müşteri talebi), DUPL (mükerrer ödeme), FOCR (iptal talebi sonrası) ve FR01 (dolandırıcılık) bulunur. Tam liste, ISO 20022 Harici Kod Setlerinde tanımlanmıştır.

### Yapılandırılmış havale bilgileri nedir?

pacs.008'deki yapılandırılmış havale, belge referansları (fatura numaraları, alacak notları), tutarlar (vadeli, havale edilen, vergi, indirim) ve alacaklı referansları (ISO 11649 RF referansları) taşımak için RmtInf/Strd öğesini kullanır. Bu, otomatik fatura eşleştirme ve mutabakatı sağlar. Yaygın belge türü kodları arasında CINV (ticari fatura), CREN (alacak notu) ve SOAC (hesap özeti) bulunur.

### LEI nedir ve ne zaman kullanılır?

LEI (Legal Entity Identifier), ISO 17442'ye göre 20 karakterlik alfanümerik bir koddur. Finansal işlemlere katılan tüzel kişilikleri benzersiz şekilde tanımlar. Pacs mesajlarında LEI, taraflar için OrgId/LEI'de ve acenteler için FinInstnId/LEI'de görünür. CBPR+, taraf ve acente kimliği için LEI kullanımını giderek daha fazla teşvik etmektedir. Kuruluş belirsizliğini giderir ve düzenleyici raporlama gereksinimlerini destekler.

## pacs008 araç seti hakkında

### pacs008 ne yapar?

pacs008, ISO 20022 ödeme mesajlarını oluşturan, doğrulayan ve gönderen bir Python araç setidir. CSV, JSON, JSONL, SQLite ve Parquet kaynaklarından ödeme verilerini okur, JSON Schema ve XSD'ye göre doğrular, IBAN ve BIC tanımlayıcılarını kontrol eder, SWIFT karakter uyumluluğu için verileri temizler ve XML dosyaları üretir. REST API, CLI ve Python kütüphanesi sağlar.

### pacs008 hangi mesaj türlerini destekler?

pacs008, sekiz mesaj türünü destekler: pacs.002.001.12 (durum raporu), pacs.003.001.09 (müşteri doğrudan borçlandırma), pacs.004.001.11 (ödeme iadesi), pacs.007.001.11 (ödeme geri dönüşü), pacs.008.001.13 (müşteri kredi transferi), pacs.009.001.10 (finansal kuruluş kredi transferi), pacs.010.001.05 (finansal kuruluş doğrudan borçlandırma) ve pacs.028.001.05 (ödeme durum talebi).

### pacs008, 2026 yapılandırılmış adres son tarihine nasıl yardımcı olur?

pacs008, XML oluşturmadan önce yapılandırılmış ve hibrit posta adresi alanlarını doğrular. Kasım 2026 son tarihinden sonra başarısız olacak yapılandırılmamış adres verilerini işaretler, hem son tarih öncesi hibrit hem de son tarih sonrası yalnızca yapılandırılmış formatları destekler ve adres kalite kontrollerini CI hatlarına ve toplu doğrulama iş akışlarına entegre eder.

### pacs008, XML oluşturmadan verileri doğrulayabilir mi?

Evet. XML oluşturmadan ödeme verilerini doğrulamak için `--dry-run` CLI bayrağını veya `POST /validate` API uç noktasını kullanın. Doğrulama hattı, JSON Schema uyumluluğunu, IBAN formatı ve sağlama toplamını, BIC yapısını ve SWIFT karakter uyumluluğunu kontrol eder. Çıkış kodu veya API yanıtı, doğrulamanın geçip geçmediğini gösterir.

## Kaynaklar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
