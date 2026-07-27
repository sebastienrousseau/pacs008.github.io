---
title: "pacs mesajlarının açıklaması | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: tr-TR
lastUpdated: true
image: /logo.webp
---

# pacs mesajlarının açıklaması

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## Ödeme yaşam döngüsü

Tam pacs ödeme yaşam döngüsü altı aşama ve birlikte çalışan birden fazla mesaj türünü içerir.

**Aşama 1 — Başlatma.** Ödeme müşteri-banka alanında (pain.001) başlar. Borçlunun bankası talimatı alır ve bankalar arası alana eşler.

**Aşama 2 — Bankalar arası talimat.** Borçlu acente pacs.008 oluşturur ve zincirdeki sonraki acenteye gönderir. Seri akışta pacs.008 aracılar üzerinden adım adım ilerler. Teminat akışında pacs.008 doğrudan borçlu acenteden alacaklı acenteye giderken, ayrı bir pacs.009 fonlama ayağını muhabir zinciri üzerinden taşır.

**Aşama 3 — Durum raporlama.** Her adımda alıcı acente kabul (ACCP/ACSP/ACSC), ret (RJCT) veya beklemede durumu (PDNG) onaylayan bir pacs.002 döndürebilir. CBPR+'da pacs.002 tüm ödeme durum iletişimi için zorunludur.

**Aşama 4 — Uzlaşma.** Uzlaşma bir takas sistemi (CLRG), muhabir hesaplar (INDA/INGA) veya teminat ödemesi (COVE) aracılığıyla gerçekleşir. Bankalar arası uzlaşma tarihi ve tutarı ne zaman ve ne kadar uzlaşılacağını belirler.

**Aşama 5 — Lehdar kredilendirme.** Alacaklı acente lehdarı kredilendirir ve müşteriye bildirim gönderebilir.

**Aşama 6 — İstisna yönetimi.** Uzlaşma sonrası lehdar kredilendirilemezse pacs.004 fonları zincir boyunca iade eder. Gönderici hata veya dolandırıcılık tespit ederse pacs.007 zincirde ileri gider. Durum bilinmiyorsa pacs.028 sonraki acenteyi sorgular ve yanıt pacs.002 aracılığıyla döner.

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

pacs.008 iki ana bloktan oluşur: Grup Başlığı (GrpHdr) ve Kredi Transferi İşlem Bilgisi (CdtTrfTxInf).

### Grup Başlığı (GrpHdr)

Grup Başlığı her mesajda tam olarak bir kez görünür ve şunları içerir:

- **MsgId** — Gönderen acente tarafından atanan benzersiz mesaj tanımlayıcı. Maks 35 karakter, gönderici başına benzersiz olmalıdır.
- **CreDtTm** — ISO 8601 biçiminde oluşturma zaman damgası.
- **NbOfTxs** — Mesajdaki bireysel işlem sayısı.
- **SttlmInf** — Uzlaşma bilgisi; uzlaşma yöntemi (SttlmMtd) ve isteğe bağlı olarak takas sistemi ile uzlaşma hesabını içerir.
- **IntrBkSttlmDt** — Bankalar arası uzlaşma tarihi.
- **PmtTpInf** — Ödeme türü bilgisi; öncelik, hizmet düzeyi, yerel araç ve kategori amacını içerir.

### Kredi Transferi İşlem Bilgisi (CdtTrfTxInf)

Her işlem şunları içerir:

- **PmtId** — Ödeme tanımlayıcıları: InstrId, EndToEndId, TxId ve UETR.
- **IntrBkSttlmAmt** — Para birimi koduyla bankalar arası uzlaşma tutarı.
- **InstdAmt** — Orijinal talimat tutarı (döviz nedeniyle uzlaşma tutarından farklı olabilir).
- **ChrgBr** — Ücret taşıyıcı kodu (DEBT, CRED, SHAR veya SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Borçlunun adı, adresi, kimliği, hesabı ve acentesi.
- **Cdtr / CdtrAcct / CdtrAgt** — Alacaklının adı, adresi, kimliği, hesabı ve acentesi.
- **IntrmyAgt1 / 2 / 3** — Zincirde en fazla üç aracı acente.
- **RmtInf** — Havale bilgisi; yapılandırılmamış (serbest metin) veya yapılandırılmış (belge referansları, tutarlar, tarihler).
- **Purp** — Yapılandırılmış amaç kodu.
- **RgltryRptg** — Mevzuat raporlama detayları.

## Uzlaşma yöntemleri

SttlmMtd elemanı bankalar arası uzlaşmanın nasıl gerçekleştiğini tanımlar.

- **CLRG** — TARGET2, EURO1 veya CHIPS gibi takas sistemi aracılığıyla uzlaşma. Yurt içi ve bölgesel takas için en yaygın.
- **INDA** — Talimat alan acentenin defterlerinde uzlaşma. Borçlu acente sonraki acentede nostro hesap tutar. İki taraflı muhabir bankacılık için tipik.
- **INGA** — Talimat veren acentenin defterlerinde uzlaşma. Talimat alan acente gönderen acentede nostro hesap tutar. INDA'dan daha az yaygın.
- **COVE** — Ayrı teminat ödemesi aracılığıyla uzlaşma. pacs.009 fonlama ayağını taşırken pacs.008 müşteri verilerini doğrudan taşır. Sınır ötesi muhabir bankacılıkta kullanılır.

## Ücret taşıyıcı kodları

ChrgBr elemanı ödeme ücretlerini kimin üstlendiğini belirtir.

- **DEBT** — Borçlu tüm ücretleri karşılar (MT103 eşdeğeri: OUR). Alacaklı tam tutarı alır.
- **CRED** — Alacaklı tüm ücretleri karşılar (MT103 eşdeğeri: BEN). Ücretler transferden düşülür.
- **SHAR** — Ücretler paylaşılır (MT103 eşdeğeri: SHA). Her taraf kendi acentesinin ücretlerini öder. Sınır ötesi ödemeler için en yaygın.
- **SLEV** — Ücretler hizmet düzeyini izler. SEPA için zorunlu. Transfer tutarından kesinti yapılmaz.

## Ödeme tanımlayıcıları

pacs mesajları ödeme zincirinde farklı roller üstlenen birden fazla tanımlayıcı kullanır.

<div class="api-fields-table" tabindex="0" aria-label="Ödeme tanımlayıcıları">
  <table>
    <caption>Ödeme tanımlayıcıları ve rolleri</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Tanımlayıcı</th>
        <th scope="col">Belirleyen</th>
        <th scope="col">Zincirde değişir mi?</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">Her gönderen acente</td><td class="api-fields-table__constraint">Evet — mesaj başına yeni</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">Her talimat veren acente</td><td class="api-fields-table__constraint">Evet — her adımda değişebilir</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">Başlatan (borçlu)</td><td class="api-fields-table__constraint">Hayır — değiştirilmemeli</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">İlk talimat veren acente</td><td class="api-fields-table__constraint">Hayır — değiştirilmemeli</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">Borçlu acente</td><td class="api-fields-table__constraint">Hayır — evrensel izleme</td></tr>
    </tbody>
  </table>
</div>

## MT103-pacs.008 alan eşleştirmesi

<div class="api-fields-table" tabindex="0" aria-label="MT103-pacs.008 alan eşleştirmesi">
  <table>
    <caption>MT103'ten pacs.008'e temel alan eşleştirmeleri</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">MT103 alanı</th>
        <th scope="col">MT103 adı</th>
        <th scope="col">pacs.008 XML yolu</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Gönderenin referansı</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Banka işlem kodu</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Valör tarihi / Tutar</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Talimat tutarı</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Amir müşteri</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Amir kurum</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Hesap kurumu</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Lehdar müşteri</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Havale bilgisi</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Ücret detayları</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Gönderen-alıcı bilgisi</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Durum ve neden kodları

### pacs.002 durum kodları

<div class="api-fields-table" tabindex="0" aria-label="pacs.002 durum kodları">
  <table>
    <caption>pacs.002'deki işlem durum kodları</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Kod</th>
        <th scope="col">Anlam</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Kabul edildi — ön kontroller geçti</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Kabul edildi — uzlaşma devam ediyor</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Kabul edildi — uzlaşma tamamlandı</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Alındı — henüz işlenmedi</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">Beklemede — daha fazla işlem gerekli</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Reddedildi — neden koduyla</td></tr>
    </tbody>
  </table>
</div>

### Yaygın ret ve iade neden kodları

<div class="api-fields-table" tabindex="0" aria-label="Yaygın neden kodları">
  <table>
    <caption>Sık kullanılan ret ve iade neden kodları</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Kod</th>
        <th scope="col">Ad</th>
        <th scope="col">Açıklama</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Yanlış hesap numarası</td><td class="api-fields-table__constraint">Hesap numarası geçersiz veya mevcut değil</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Kapalı hesap</td><td class="api-fields-table__constraint">Hesap kapatılmış</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Bloke hesap</td><td class="api-fields-table__constraint">Hesap işlemler için bloke edilmiş</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Yetersiz bakiye</td><td class="api-fields-table__constraint">Borçlu hesabında yetersiz bakiye</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Mükerrer</td><td class="api-fields-table__constraint">Mükerrer ödeme tespit edildi</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Alacaklı adresi eksik</td><td class="api-fields-table__constraint">Alacaklı adresi eksik veya tamamlanmamış</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Müşteri talebiyle</td><td class="api-fields-table__constraint">Müşteri tarafından talep edilen iade veya ret</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Mükerrer ödeme</td><td class="api-fields-table__constraint">Mükerrer ödeme tespit edildi</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">İptal sonrası</td><td class="api-fields-table__constraint">İptal talebinin ardından</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Dolandırıcılık</td><td class="api-fields-table__constraint">Dolandırıcılık şüphesi</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">Yanlış BIC</td><td class="api-fields-table__constraint">BIC yanlış veya bilinmiyor</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Alacaklı adı/adresi eksik</td><td class="api-fields-table__constraint">Alacaklı adı veya adres verileri eksik</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Kesim saati</td><td class="api-fields-table__constraint">İşlem kesim saati geçmiş</td></tr>
    </tbody>
  </table>
</div>

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

### Yapılandırılmamış adres (Kasım 2026 sonrası CBPR+ için kullanımdan kaldırıldı)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Temel kısıtlamalar: StrtNm maks 70 karakter (CBPR+), TwnNm maks 35 karakter (CBPR+), Ctry ISO 3166-1 alpha-2, AdrLine satır başına maks 70 karakter ve maks 7 satır.

## Taraf kimliği

pacs.008'deki taraflar birden fazla kimliklendirme yöntemini destekler:

- **BIC** — ISO 9362'ye göre İş Tanımlayıcı Kodu. 8 veya 11 karakter (BBBBCCLL veya BBBBCCLLBBB). Acenteler için FinInstnId/BICFI'de ve taraflar için OrgId/AnyBIC'de kullanılır.
- **LEI** — ISO 17442'ye göre Tüzel Kişi Tanımlayıcısı. 20 alfanümerik karakter. Taraflar için OrgId/LEI'de ve acenteler için FinInstnId/LEI'de görünür.
- **IBAN** — ISO 13616'ya göre Uluslararası Banka Hesap Numarası. DbtrAcct/Id/IBAN ve CdtrAcct/Id/IBAN'da kullanılır.
- **Kurum kimlikleri** — Diğer şema tabanlı tanımlayıcılar (vergi numarası, DUNS, müşteri numarası) OrgId/Othr aracılığıyla.
- **Kişisel kimlikler** — Gerçek kişiler için: doğum tarihi ve yeri, pasaport (CCPT), kimlik kartı (NIDN) veya ehliyet (DRLC) PrvtId aracılığıyla.

## Havale bilgisi

pacs.008'deki havale verileri RmtInf elemanını iki biçimde kullanır:

**Yapılandırılmamış** — Oluşum başına 140 karaktere kadar serbest metin. Basit ancak otomatik mutabakatı sınırlar.

**Yapılandırılmış** — Tür kodları, numaralar, tarihler ve tutarlarla belge referansları. Yaygın belge türleri: CINV (ticari fatura), CREN (alacak dekontu), SOAC (hesap özeti). CdtrRefInf aracılığıyla ISO 11649 alacaklı referanslarını (RF + kontrol rakamları + referans) destekler. Otomatik fatura eşleştirme ve çoklu fatura ödemelerini mümkün kılar.

## UETR ve gpi izleme

UETR (Unique End-to-End Transaction Reference) borçlu acente tarafından oluşturulan UUID v4 tanımlayıcıdır. PmtId/UETR'de pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 ve pacs.028 boyunca görünür. Tüm ödeme zinciri boyunca değiştirilmemelidir.

SWIFT gpi, bulut tabanlı Tracker veritabanı aracılığıyla ödemeleri izlemek için UETR kullanır. Her acente alımı ve işlemeyi onaylar, uçtan uca görünürlük sağlar. Sınır ötesi ödemeler için gpi SLA'sı alacaklı hesabına aynı gün kredilendirmeyi hedefler.

## Referanslar

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

