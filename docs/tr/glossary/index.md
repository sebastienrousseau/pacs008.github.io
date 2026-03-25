---
title: "ISO 20022 sözlüğü | pacs008"
description: pacs.008 ve ilgili mesajlarda kullanılan temel ISO 20022 ve ödeme mesajlaşma terimlerinin tanımları.
lang: tr-TR
lastUpdated: true
image: /logo.svg
---

# ISO 20022 sözlüğü

Bu sözlük, ISO 20022 pacs mesajlarında ve bu sitede kullanılan temel terimleri, kısaltmaları ve teknik kavramları tanımlar.

## A

**ACH** — Automated Clearing House (Otomatik Takas Odası). Finansal kuruluşlar arasında toplu elektronik ödemeleri işleyen ağ.

**AdrLine** — Address Line (Adres Satırı). ISO 20022 posta adresi yapılarında serbest metin adres alanı. Her biri 70 karakter olmak üzere en fazla 7 satır. Kasım 2026'ya kadar CBPR+ için yapılandırılmış adres öğeleriyle değiştiriliyor.

**ACCP** — Accepted Customer Profile (Müşteri Profili Kabul Edildi). Önceki kontrollerin (sözdizimi, müşteri profili) geçtiğini belirten pacs.002 durum kodu.

**ACSC** — Accepted Settlement Completed (Takas Tamamlandı). Borçlu hesabındaki takasın tamamlandığını onaylayan pacs.002 durum kodu.

**ACSP** — Accepted Settlement in Process (Takas İşleniyor). Tüm kontrollerin geçtiğini ve takasın devam ettiğini belirten pacs.002 durum kodu.

## B

**BAH** — Business Application Header (head.001). SWIFT aracılığıyla taşıma için ISO 20022 iş mesajlarını saran standartlaştırılmış zarf. Yönlendirme bilgisi, mesaj tanımı tanımlayıcısı ve gönderen/alıcı BIC'leri içerir.

**BIC** — Business Identifier Code (ISO 9362). Bir finansal kuruluşu benzersiz şekilde tanımlayan 8 veya 11 karakterli kod. Format: BBBBCCLL (banka kodu + ülke + konum), isteğe bağlı BBB şube kodu ile.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. SWIFT'in sınır ötesi ödeme mesajlaşmasını MT'den ISO 20022'ye taşıma programı. Mart 2023'te faaliyete geçti.

**CdtTrfTxInf** — Credit Transfer Transaction Information (Kredi Transferi İşlem Bilgisi). pacs.008'deki ana işlem düzeyi yapı taşı; ödeme ayrıntıları, taraflar, tutarlar ve havale bilgilerini içerir.

**ChrgBr** — Charge Bearer (Masraf Taşıyıcı). İşlem masraflarını kimin ödeyeceğini belirtir. Değerler: DEBT (borçlu), CRED (alacaklı), SHAR (paylaşımlı), SLEV (hizmet seviyesi, yalnızca SEPA).

**CLRG** — Takas sistemi ile takas. TARGET2, EURO1 veya CHIPS gibi bir takas sistemi aracılığıyla fonların hareket ettiği takas yöntemi.

**COVE** — Karşılama yöntemi ile takas. Ayrı bir pacs.009 karşılama ödemesinin muhabirler arasındaki fonlamayı yönetirken pacs.008'in müşteri verilerini doğrudan taşıdığı takas yöntemi.

**CSM** — Clearing and Settlement Mechanism (Takas ve Uzlaşma Mekanizması). Katılımcı kuruluşlar arasında ödeme talimatlarını işleyen ve takas eden altyapı.

## D

**Dbtr** — Debtor (Borçlu). Fon borcu olan ve ödemeyi başlatan taraf. pacs.008'de Dbtr öğesi borçlunun adını, posta adresini, kimliğini ve ikamet ülkesini taşır.

**DbtrAgt** — Debtor Agent (Borçlu Acentesi). Borçlunun hesabını yöneten ve pacs.008 talimatını gönderen finansal kuruluş.

## E

**E2E ID** — End-to-End Identification (EndToEndId) (Uçtan Uca Tanımlama). Başlatıcı tarafından atanan ve ödeme zincirindeki tüm acentelerde değişmeden kalması gereken referans. Müşteri düzeyinde izlenebilirlik için kullanılır.

**EPC** — European Payments Council (Avrupa Ödemeler Konseyi). Kredi transferleri ve doğrudan borçlandırmalar için SEPA ödeme şeması kural kitaplarını yöneten kuruluş.

## F

**FI** — Financial Institution (Finansal Kuruluş). Ödeme takası ve uzlaşmasına katılan banka veya diğer kuruluş.

**FIToFI** — Financial Institution to Financial Institution. pacs mesajlarının çalıştığı bankalar arası alanı tanımlar.

## G

**gpi** — Global Payments Innovation (Küresel Ödeme İnovasyonu). Daha hızlı, şeffaf sınır ötesi ödemeler için SWIFT girişimi. Bulut tabanlı Tracker aracılığıyla UETR ile uçtan uca izleme kullanır.

**GrpHdr** — Group Header (Grup Başlığı). pacs mesajlarındaki mesaj düzeyi meta veri bloğu. MsgId, CreDtTm, NbOfTxs, takas bilgileri ve ödeme türü bilgilerini içerir.

## H

**Hibrit adres** — Yapılandırılmış öğeleri (StrtNm, TwnNm, Ctry) yapılandırılmamış AdrLine öğeleriyle birleştiren posta adresi formatı. Kasım 2026 yapılandırılmış adres son tarihinden önceki geçiş döneminde izin verilir.

## I

**IBAN** — International Bank Account Number (ISO 13616) (Uluslararası Banka Hesap Numarası). Sınır ötesi ve yurt içi ödemeler için kullanılan standartlaştırılmış hesap numarası formatı. ISO 7064 Mod 97-10 sağlama toplamı ile doğrulanır.

**INDA** — Instructed Agent settlement (Talimat Alan Acente Takası). Borçlu acentenin nostro hesap tuttuğu talimat alan acentenin defterlerinde fonların takas edildiği yöntem.

**INGA** — Instructing Agent settlement (Talimat Veren Acente Takası). Talimat alan acentenin nostro hesap tuttuğu talimat veren acentenin defterlerinde fonların takas edildiği yöntem.

**InstrId** — Instruction Identification (Talimat Tanımlama). Ödeme zincirindeki bitişik acenteler arasında noktadan noktaya referans. Her atlama noktasında değişebilir.

**IntrBkSttlmAmt** — Interbank Settlement Amount (Bankalar Arası Takas Tutarı). Talimat veren ve talimat alan acenteler arasında takas para biriminde takas edilen tutar.

**ISO 20022** — Finansal kuruluşlar arasında elektronik veri değişimi için uluslararası standart. Ödemeler, menkul kıymetler, ticaret finansmanı ve diğer finansal alanlar için ortak veri modeli ve XML tabanlı mesaj formatları tanımlar.

## L

**LEI** — Legal Entity Identifier (ISO 17442) (Tüzel Kişilik Tanımlayıcı). Finansal işlemlere katılan tüzel kişilikleri benzersiz şekilde tanımlayan 20 karakterlik alfanümerik kod. Taraflar için OrgId/LEI ve acenteler için FinInstnId/LEI'de kullanılır.

## M

**MsgId** — Message Identification (Mesaj Tanımlama). Gönderen acente tarafından atanan mesaj zarfı için benzersiz tanımlayıcı. Ödeme zincirinin her atlama noktasında değişir.

**MT** — Message Type (Mesaj Türü). SWIFT'in eski mesaj formatı (ör. müşteri kredi transferleri için MT103, finansal kuruluş transferleri için MT202). ISO 20022 MX mesajlarıyla değiştiriliyor.

**MX** — SWIFT tarafından kullanılan ISO 20022 XML mesaj formatı. MX mesajları CBPR+ kapsamında sınır ötesi ödemeler için MT mesajlarının yerini alır.

## N

**NbOfTxs** — Number of Transactions (İşlem Sayısı). Mesajda kaç bireysel işlem bulunduğunu gösteren Group Header öğesi.

## P

**pacs** — Payments Clearing and Settlement (Ödeme Takası ve Uzlaşması). Bankalar arası ödeme mesajlarını kapsayan ISO 20022 iş alanı.

**pacs.002** — FI'den FI'ye Ödeme Durum Raporu. Önceki bir ödeme talimatının işleme durumunu (kabul edildi, reddedildi, beklemede, takas edildi) bildirir.

**pacs.003** — FI'den FI'ye Müşteri Doğrudan Borçlandırma. Fon tahsilatı için bankalar arasında müşteri doğrudan borçlandırma talimatı taşır.

**pacs.004** — Ödeme İadesi. Ödeme uygulanamadığında takas edilmiş fonları ödeme zinciri boyunca iade eder.

**pacs.007** — FI'den FI'ye Ödeme Geri Dönüşü. Ödeme talimatını orijinal gönderenden ileriye doğru zincir boyunca geri alır.

**pacs.008** — FI'den FI'ye Müşteri Kredi Transferi. Müşteri kredi transferleri için birincil bankalar arası mesaj. MT103'ün yerini alır.

**pacs.009** — Finansal Kuruluş Kredi Transferi. Bankaların kendi adına bankalar arasında fon taşır. Fonlama, karşılama ödemeleri ve likidite yönetimini kapsar. MT202/MT202COV'un yerini alır.

**pacs.010** — Finansal Kuruluş Doğrudan Borçlandırma. Bir bankanın ikili anlaşma kapsamında başka bir bankanın kendi hesabını borçlandırmasına olanak tanır.

**pacs.028** — FI'den FI'ye Ödeme Durum Talebi. pacs.002 güncellemesi gelmediğinde önceki bir ödemenin durumunu aktif olarak talep eder.

**pain** — Payment Initiation (Ödeme Başlatma). Müşteriden bankaya mesajları kapsayan ISO 20022 iş alanı (ör. kredi transferi başlatma için pain.001).

**PII** — Personally Identifiable Information (Kişisel Tanımlama Bilgisi). Bir bireyi tanımlayabilen veriler. pacs008, yapılandırılmış günlüklerde PII'yi maskeler.

**PstlAdr** — Postal Address (Posta Adresi). pacs mesajlarında taraflar için kullanılan adres yapısı. Yapılandırılmış (StrtNm, TwnNm, Ctry) ve yapılandırılmamış (AdrLine) formatları destekler.

## R

**RJCT** — Rejected (Reddedildi). Ödemenin reddedildiğini belirten pacs.002 durum kodu.

**RmtInf** — Remittance Information (Havale Bilgisi). pacs.008'de taşınan ödeme referans verileri. Yapılandırılmamış (serbest metin, maks 140 karakter) ve yapılandırılmış (belge referansları, tutarlar, alacaklı referansları) formatları destekler.

**RTGS** — Real-Time Gross Settlement (Gerçek Zamanlı Brüt Takas). İşlemlerin bireysel ve gerçek zamanlı olarak takas edildiği ödeme sistemi (ör. TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. EPC tarafından yönetilen, pacs.008 kullanan euro kredi transfer şeması.

**SCT Inst** — SEPA Instant Credit Transfer. SCT'nin anlık ödeme varyantı, 10 saniye altında takas.

**SDD** — SEPA Direct Debit. EPC tarafından yönetilen, pacs.003 kullanan euro doğrudan borçlandırma şeması.

**SEPA** — Single Euro Payments Area (Tek Euro Ödeme Alanı). 36 Avrupa ülkesinde euro cinsinden kredi transferleri, doğrudan borçlandırmalar ve kart ödemelerini kapsayan ödeme entegrasyon girişimi.

**SLEV** — Service Level (Hizmet Seviyesi). SEPA için zorunlu masraf taşıyıcı kodu. Masrafların şema kurallarına uyduğu ve transfer tutarından kesinti yapılmadığı anlamına gelir.

**STP** — Straight-Through Processing (Doğrudan İşleme). Manuel müdahale olmaksızın otomatik uçtan uca ödeme işleme.

**SttlmMtd** — Settlement Method (Takas Yöntemi). Bankalar arası takasın nasıl gerçekleştiğini tanımlar: CLRG (takas sistemi), INDA (talimat alan acente), INGA (talimat veren acente) veya COVE (karşılama ödemesi).

## T

**TxId** — Transaction Identification (İşlem Tanımlama). İlk talimat veren acente tarafından atanan bankalar arası referans. Sonraki acenteler tarafından değiştirilmemelidir.

## U

**UETR** — Unique End-to-End Transaction Reference (Benzersiz Uçtan Uca İşlem Referansı). Borçlu acente tarafından oluşturulan ve gpi takibi için bir ödemenin tüm ayakları boyunca değişmeden taşınan UUID v4 tanımlayıcısı.

## X

**XSD** — XML Schema Definition (XML Şema Tanımı). Bir ISO 20022 XML mesajının yapısını, öğelerini ve veri türlerini tanımlayan resmi şema.

**XXE** — XML External Entity (XML Harici Varlık). XML ayrıştırmada bir güvenlik açığı. pacs008, defusedxml kullanarak XXE saldırılarını önler.

## Kaynaklar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
