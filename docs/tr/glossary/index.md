---
title: "ISO 20022 terimler sözlüğü | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: tr-TR
lastUpdated: true
image: /logo.webp
---

# ISO 20022 terimler sözlüğü

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Otomatik Takas Odası. Finansal kurumlar arasında toplu elektronik ödemeleri işleyen ağ.

**AdrLine** — Adres Satırı. ISO 20022 posta adresi yapılarında serbest metin alanı. En fazla 7 satır, her biri 70 karakter. Kasım 2026'ya kadar CBPR+ için yapılandırılmış adres öğeleriyle değiştiriliyor.

**ACCP** — Kabul Edilen Müşteri Profili. Önceki kontrollerin (sözdizimi, müşteri profili) başarılı olduğunu gösteren pacs.002 durum kodu.

**ACSC** — Kabul Edilen Uzlaşma Tamamlandı. Borçlunun hesabında uzlaşmanın tamamlandığını doğrulayan pacs.002 durum kodu.

**ACSP** — Kabul Edilen Uzlaşma Devam Ediyor. Tüm kontrollerin geçtiğini ve uzlaşmanın sürdüğünü gösteren pacs.002 durum kodu.

## B

**BAH** — İş Uygulama Başlığı (head.001). ISO 20022 iş mesajlarını SWIFT aracılığıyla taşımak için sarmalayan standartlaştırılmış zarf. Yönlendirme bilgisi, mesaj tanımlama kimliği ve gönderen/alıcı BIC kodlarını içerir.

**BIC** — İş Tanımlama Kodu (ISO 9362). Bir finansal kurumu benzersiz şekilde tanımlayan 8 veya 11 karakterlik kod. Biçim: BBBBCCLL (banka kodu + ülke + konum) ile isteğe bağlı BBB şube kodu.

## C

**CBPR+** — Sınır Ötesi Ödemeler ve Raporlama Plus. SWIFT'in sınır ötesi ödeme mesajlaşmasını MT'den ISO 20022'ye taşıma programı. Mart 2023'te yayına geçti.

**CdtTrfTxInf** — Kredi Transferi İşlem Bilgisi. pacs.008'deki işlem düzeyinde ana yapı taşı; ödeme ayrıntıları, taraflar, tutarlar ve havale bilgileri içerir.

**ChrgBr** — Ücret Taşıyıcı. İşlem ücretlerini kimin ödeyeceğini belirtir. Değerler: DEBT (borçlu), CRED (alacaklı), SHAR (paylaşımlı), SLEV (hizmet düzeyi, yalnızca SEPA).

**CLRG** — Takas sistemi uzlaşması. Fonların TARGET2, EURO1 veya CHIPS gibi bir takas sistemi aracılığıyla hareket ettiği uzlaşma yöntemi.

**COVE** — Teminat yöntemi uzlaşması. Ayrı bir pacs.009 teminat ödemesinin muhabir bankalar arasındaki fonlamayı yönetirken pacs.008'in müşteri verilerini doğrudan taşıdığı uzlaşma yöntemi.

**CSM** — Takas ve Uzlaşma Mekanizması. Katılımcı kurumlar arasında ödeme talimatlarını işleyen ve uzlaştıran altyapı.

## D

**Dbtr** — Borçlu. Fonları borçlu olan ve ödemeyi başlatan taraf. pacs.008'de Dbtr öğesi borçlunun adını, posta adresini, kimliğini ve ikamet ülkesini taşır.

**DbtrAgt** — Borçlu Acentesi. Borçlunun hesabına hizmet veren ve pacs.008 talimatını gönderen finansal kurum.

## E

**E2E ID** — Uçtan Uca Tanımlama (EndToEndId). Başlatan tarafından atanan ve ödeme zincirindeki tüm acenteler boyunca değişmeden kalması gereken referans. Müşteri düzeyinde izlenebilirlik için kullanılır.

**EPC** — Avrupa Ödemeler Konseyi. Kredi transferleri ve doğrudan borçlandırmalar için SEPA ödeme şeması kurallarını yöneten kuruluş.

## F

**FI** — Finansal Kurum. Ödeme takas ve uzlaşmasına katılan banka veya diğer kurum.

**FIToFI** — Finansal Kurumdan Finansal Kuruma. pacs mesajlarının faaliyet gösterdiği bankalar arası alanı tanımlar.

## G

**gpi** — Küresel Ödemeler İnovasyonu. SWIFT'in daha hızlı, şeffaf sınır ötesi ödemeler için girişimi. Bulut tabanlı Tracker aracılığıyla uçtan uca izleme için UETR kullanır.

**GrpHdr** — Grup Başlığı. pacs mesajlarındaki mesaj düzeyinde meta veri bloğu. MsgId, CreDtTm, NbOfTxs, uzlaşma bilgisi ve ödeme türü bilgisi içerir.

## H

**Hybrid address** — Karma adres. Yapılandırılmış öğeleri (StrtNm, TwnNm, Ctry) yapılandırılmamış AdrLine öğeleriyle birleştiren posta adresi biçimi. Kasım 2026 yapılandırılmış adres son tarihinden önceki geçiş döneminde izin verilir.

## I

**IBAN** — Uluslararası Banka Hesap Numarası (ISO 13616). Sınır ötesi ve yurt içi ödemeler için kullanılan standartlaştırılmış hesap numarası biçimi. ISO 7064 Mod 97-10 sağlama toplamı ile doğrulanır.

**INDA** — Talimat Alan Acente uzlaşması. Fonların talimat alan acentenin defterlerinde uzlaştırıldığı yöntem; borçlu acentesinin nostro hesabı bulunur.

**INGA** — Talimat Veren Acente uzlaşması. Fonların talimat veren acentenin defterlerinde uzlaştırıldığı yöntem; talimat alan acentenin nostro hesabı bulunur.

**InstrId** — Talimat Tanımlama. Ödeme zincirinde bitişik acenteler arasındaki noktadan noktaya referans. Her adımda değişebilir.

**IntrBkSttlmAmt** — Bankalararası Uzlaşma Tutarı. Talimat veren ve talimat alan acente arasında uzlaşma para birimi cinsinden uzlaştırılan tutar.

**ISO 20022** — Finansal kurumlar arasında elektronik veri değişimi için uluslararası standart. Ödemeler, menkul kıymetler, ticaret finansmanı ve diğer finansal alanlar için ortak veri modeli ve XML tabanlı mesaj biçimleri tanımlar.

## L

**LEI** — Tüzel Kişi Tanımlayıcı (ISO 17442). Finansal işlemlere katılan tüzel kişileri benzersiz şekilde tanımlayan 20 karakterlik alfanümerik kod. Taraflar için OrgId/LEI'de ve acenteler için FinInstnId/LEI'de kullanılır.

## M

**MsgId** — Mesaj Tanımlama. Gönderen acente tarafından atanan mesaj zarfı için benzersiz tanımlayıcı. Ödeme zincirinin her adımında değişir.

**MT** — Mesaj Türü. SWIFT'in eski mesaj biçimi (örneğin müşteri kredi transferleri için MT103, finansal kurum transferleri için MT202). ISO 20022 MX mesajlarıyla değiştiriliyor.

**MX** — SWIFT tarafından kullanılan ISO 20022 XML mesaj biçimi. MX mesajları, CBPR+ kapsamında sınır ötesi ödemeler için MT mesajlarının yerini alır.

## N

**NbOfTxs** — İşlem Sayısı. Mesajda kaç bireysel işlem bulunduğunu gösteren Grup Başlığı öğesi.

## P

**pacs** — Ödeme Takas ve Uzlaşması. Bankalararası ödeme mesajlarını kapsayan ISO 20022 iş alanı.

**pacs.002** — FI'den FI'ye Ödeme Durum Raporu. Önceki bir ödeme talimatının işleme durumunu (kabul edildi, reddedildi, beklemede, uzlaştırıldı) bildirir.

**pacs.003** — FI'den FI'ye Müşteri Doğrudan Borçlandırma. Fon tahsili için bankalar arasında müşteri doğrudan borçlandırma talimatını taşır.

**pacs.004** — Ödeme İadesi. Ödeme uygulanamadığında uzlaştırılmış fonları ödeme zinciri boyunca iade eder.

**pacs.007** — FI'den FI'ye Ödeme Tersine Çevirme. Ödeme talimatını asıl gönderenden zincir boyunca tersine çevirir.

**pacs.008** — FI'den FI'ye Müşteri Kredi Transferi. Müşteri kredi transferleri için birincil bankalararası mesaj. MT103'ün yerini alır.

**pacs.009** — Finansal Kurum Kredi Transferi. Bankalar arasında kendi hesapları adına fon aktarır. Fonlama, teminat ödemeleri ve likidite yönetimini kapsar. MT202/MT202COV'un yerini alır.

**pacs.010** — Finansal Kurum Doğrudan Borçlandırma. Bir bankanın ikili anlaşma kapsamında diğer bankanın kendi hesabını borçlandırmasına olanak tanır.

**pacs.028** — FI'den FI'ye Ödeme Durum Talebi. pacs.002 güncellemesi gelmediğinde önceki bir ödemenin durumunu etkin şekilde talep eder.

**pain** — Ödeme Başlatma. Müşteriden bankaya mesajları kapsayan ISO 20022 iş alanı (örneğin kredi transferi başlatma için pain.001).

**PII** — Kişisel Tanımlayıcı Bilgi. Bir bireyi tanımlayabilecek veriler. pacs008 yapılandırılmış günlüklerde PII'yi maskeler.

**PstlAdr** — Posta Adresi. pacs mesajlarında taraflar için kullanılan adres yapısı. Yapılandırılmış (StrtNm, TwnNm, Ctry) ve yapılandırılmamış (AdrLine) biçimleri destekler.

## R

**RJCT** — Reddedildi. Ödemenin reddedildiğini gösteren pacs.002 durum kodu.

**RmtInf** — Havale Bilgisi. pacs.008'de taşınan ödeme referans verileri. Yapılandırılmamış (serbest metin, maks 140 karakter) ve yapılandırılmış (belge referansları, tutarlar, alacaklı referansları) biçimleri destekler.

**RTGS** — Gerçek Zamanlı Brüt Uzlaşma. İşlemlerin bireysel olarak ve gerçek zamanlı uzlaştırıldığı ödeme sistemi (örneğin TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Kredi Transferi. pacs.008 kullanan, EPC tarafından yönetilen avro kredi transferi şeması.

**SCT Inst** — SEPA Anlık Kredi Transferi. SCT'nin anlık ödeme çeşidi, 10 saniyenin altında uzlaştırılır.

**SDD** — SEPA Doğrudan Borçlandırma. pacs.003 kullanan, EPC tarafından yönetilen avro doğrudan borçlandırma şeması.

**SEPA** — Tek Avro Ödeme Alanı. 36 Avrupa ülkesinde avro cinsinden kredi transferleri, doğrudan borçlandırmalar ve kart ödemelerini kapsayan ödeme entegrasyonu girişimi.

**SLEV** — Hizmet Düzeyi. SEPA için zorunlu ücret taşıyıcı kodu. Ücretlerin transfer tutarından kesinti yapılmadan şema kurallarına uyduğu anlamına gelir.

**STP** — Doğrudan İşleme. Manuel müdahale olmaksızın uçtan uca otomatik ödeme işleme.

**SttlmMtd** — Uzlaşma Yöntemi. Bankalararası uzlaşmanın nasıl gerçekleştiğini tanımlar: CLRG (takas sistemi), INDA (talimat alan acente), INGA (talimat veren acente) veya COVE (teminat ödemesi).

## T

**TxId** — İşlem Tanımlama. İlk talimat veren acente tarafından atanan bankalararası referans. Sonraki acenteler tarafından değiştirilmemelidir.

## U

**UETR** — Benzersiz Uçtan Uca İşlem Referansı. Borçlu acentesi tarafından oluşturulan ve gpi izleme için ödemenin tüm aşamalarında değişmeden taşınan UUID v4 tanımlayıcısı.

## X

**XSD** — XML Şema Tanımı. Bir ISO 20022 XML mesajının yapısını, öğelerini ve veri türlerini tanımlayan biçimsel şema.

**XXE** — XML Dış Varlık. XML ayrıştırmasındaki güvenlik açığı. pacs008 defusedxml kullanarak XXE saldırılarını önler.

## Referanslar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

