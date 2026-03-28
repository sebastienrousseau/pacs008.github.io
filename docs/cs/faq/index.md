---
title: "Často kladené dotazy o ISO 20022 | pacs008"
description: Běžné dotazy o zprávách ISO 20022 pacs, migraci CBPR+, výběru zpráv, implementaci a sadě nástrojů pacs008.
lang: cs-CZ
lastUpdated: true
image: /logo.webp
---

# Často kladené dotazy o ISO 20022

Běžné dotazy o zprávách ISO 20022 pacs, jak spolupracují a jak pacs008 pomáhá týmům s implementací.

## Obecné

### Co je ISO 20022?

ISO 20022 je mezinárodní standard pro finanční zprávy. Definuje společný jazyk a model pro platební zprávy vyměňované mezi finančními institucemi. Na rozdíl od starších formátů, jako je SWIFT MT, používá ISO 20022 XML a podporuje bohatší, strukturovanější data pro strany, částky a reference.

### Co jsou pacs zprávy?

Rodina zpráv pacs (payments clearing and settlement) pokrývá mezibankovní platební instrukce, stavové zprávy, vrácení, reverze a dotazy. Zahrnuje pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 a pacs.028. Každá zpráva plní specifickou roli v životním cyklu platby.

### Jak se pacs zprávy liší od SWIFT MT zpráv?

SWIFT MT zprávy používají plochý formát s tagy polí (např. MT103 pro zákaznické kreditní převody). pacs zprávy používají hierarchické XML s bohatšími datovými strukturami. Klíčové rozdíly zahrnují podporu více transakcí v jedné zprávě, strukturovanou identifikaci stran (LEI, více ID), strukturované poštovní adresy a strukturované informace o úhradě. MT103 odpovídá pacs.008, MT202 odpovídá pacs.009 a stavový text MT199 je nahrazen pacs.002.

### Jaký je vztah mezi pain a pacs zprávami?

Pain (payment initiation) zprávy putují mezi zákazníkem a jeho bankou. pacs zprávy putují mezi bankami. Iniciace zákaznického kreditního převodu pain.001 z banky dlužníka se stává mezibankovní instrukcí pacs.008. Obě domény sdílejí společné datové prvky, ale obsluhují různé části platebního řetězce.

## Výběr zprávy

### Kdy použít pacs.008

Použijte pacs.008 pro instrukce zákaznických kreditních převodů mezi bankami. Nese data o stranách dlužníka a věřitele, částky, informace o úhradě a detaily vypořádání. Je to hlavní zpráva pro odesílání zákaznických plateb přes mezibankovní síť, ať už tuzemsky (SEPA) nebo přeshraničně (CBPR+).

### Kdy použít pacs.009 místo pacs.008

Použijte pacs.009 pro převody z vlastních účtů institucí, financující větve a krycí platby. Na rozdíl od pacs.008, která nese zákaznickou platbu jménem dlužníka, pacs.009 přesouvá prostředky mezi bankami na jejich vlastní účet. V tocích krycí metody nese pacs.009 financování, zatímco pacs.008 nese zákaznickou instrukci na oddělené cestě.

### Jaký je rozdíl mezi pacs.004 a pacs.007?

pacs.004 vrací vypořádané prostředky z přijímající strany zpět řetězcem. pacs.007 reverzuje platbu z původní instruující strany vpřed řetězcem. Použijte pacs.004, když banka příjemce nemůže uplatnit kredit po vypořádání. Použijte pacs.007, když původce objeví chybu, duplikát nebo podvod.

### Kdy použít pacs.028 místo čekání na pacs.002

Použijte pacs.028, když potřebujete aktivně požádat o stav platby, která neobdržela včasnou aktualizaci pacs.002. pacs.002 je řízena událostmi (přijímající agent ji posílá proaktivně), zatímco pacs.028 je řízena výjimkami (instruující agent o ni žádá). Použijte pacs.028 pro zpožděné, nejasné nebo chybějící platební aktualizace, ne jako rutinní provoz.

### K čemu se používá pacs.003?

pacs.003 nese instrukce zákaznického inkasa mezi bankami. Agent věřitele ji posílá agentu dlužníka k inkasu prostředků. Vyžaduje platný odkaz na mandát a podporuje schémata SEPA Core a B2B inkasa. Nepoužívá se pro kreditní převody nebo inkaso z vlastních účtů institucí.

### K čemu se používá pacs.010?

pacs.010 zpracovává inkasa mezi finančními institucemi na jejich vlastních účtech. Používá se pro mezibankovní inkaso, jako jsou poplatky, výzvy k dodatkové úhradě a podobné závazky na základě bilaterálních dohod. Nepoužívá se pro zákaznické inkaso nebo kreditní převody.

## Struktura zprávy

### Co je záhlaví skupiny (GrpHdr)?

Záhlaví skupiny se v každé pacs zprávě vyskytuje přesně jednou. Obsahuje identifikátor zprávy (MsgId), časové razítko vytvoření (CreDtTm), počet transakcí (NbOfTxs), informace o vypořádání (SttlmInf) a volitelně celkovou mezibankovní částku vypořádání a informace o typu platby. Identifikuje obálku zprávy, nikoli jednotlivé obchodní transakce.

### Jaké jsou platební identifikátory v pacs.008?

pacs.008 používá čtyři hlavní identifikátory. MsgId identifikuje obálku zprávy a mění se při každém skoku. InstrId je reference bod-bod mezi sousedními agenty a může se měnit při každém skoku. EndToEndId je nastaven původcem a nesmí být změněn žádným agentem v řetězci. TxId je přidělen prvním instruujícím agentem a zůstává konstantní v mezibankovním prostoru. UETR je UUID, které zůstává nezměněné napříč všemi větvemi pro sledování od konce ke konci.

### Jaké metody vypořádání jsou k dispozici?

Jsou definovány čtyři metody vypořádání. CLRG vypořádává prostřednictvím clearingového systému, jako je TARGET2, EURO1 nebo CHIPS. INDA vypořádává v knihách instruovaného agenta, kde agent dlužníka drží účet. INGA vypořádává v knihách instruujícího agenta, kde instruovaný agent drží účet. COVE vypořádává prostřednictvím samostatné krycí platby nesené pacs.009.

### Co znamenají kódy nositele poplatků?

DEBT znamená, že všechny poplatky nese dlužník (ekvivalent MT103 OUR). CRED znamená, že všechny poplatky nese věřitel (ekvivalent BEN). SHAR znamená, že poplatky jsou sdíleny mezi agenty dlužníka a věřitele (ekvivalent SHA). SLEV znamená, že poplatky se řídí pravidly úrovně služby a je povinný pro SEPA kreditní převody.

## CBPR+ a migrace

### Co je CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) je program SWIFT pro přijetí ISO 20022 v přeshraničních platebních zprávách. Spuštěn byl v březnu 2023 a nahrazuje MT zprávy ekvivalenty pacs. CBPR+ vyžaduje pacs.002 pro veškerou stavovou komunikaci, podporuje bohatší data o stranách a strukturované adresy a používá sledování založené na UETR prostřednictvím gpi.

### Co se stalo s obdobím koexistence MT/MX?

Období koexistence pro přeshraniční platební instrukce skončilo v listopadu 2025. Od té doby musí zprávy CBPR+ používat formát ISO 20022 (MX). Překladové služby, které konvertovaly mezi MT a MX během přechodu, již nejsou k dispozici pro nové toky. Banky nyní musí odesílat a přijímat nativní pacs zprávy.

### Jaký je termín pro strukturované adresy v listopadu 2026?

Od listopadu 2026 vyžaduje SWIFT CBPR+ strukturované poštovní adresy v přeshraničních platebních zprávách. Nestrukturované řádky adres (pouze AdrLine) nebudou nadále akceptovány pro klíčová pole stran. Minimálně jsou vyžadovány TwnNm a Ctry, s doporučenými StrtNm a BldgNb nebo PstBx. To zlepšuje prověřování sankcí a snižuje manuální opravy.

### Jak pacs.008 nahrazuje MT103?

pacs.008 nahrazuje MT103 a MT103+ pro zákaznické kreditní převody. Klíčové mapování: pole 20 MT103 odpovídá MsgId nebo InstrId; pole 32A se rozděluje na IntrBkSttlmDt a IntrBkSttlmAmt; pole 50a odpovídá Dbtr a DbtrAcct; pole 59a odpovídá Cdtr a CdtrAcct; pole 70 odpovídá RmtInf; pole 71A odpovídá ChrgBr. pacs.008 přidává UETR, strukturovanou úhradu, identifikaci LEI a podporuje více transakcí v jedné zprávě.

### Jak pacs.009 nahrazuje MT202?

pacs.009 nahrazuje MT202 a MT202COV pro převody mezi institucemi. V tocích krycí metody se MT202COV (který nesl jak financování, tak podkladová zákaznická data) čistě rozděluje: pacs.009 nese financující větev, zatímco pacs.008 nese zákaznickou instrukci přímo. Toto oddělení zlepšuje kvalitu dat a snižuje problémy s rekonciliací.

## Technické detaily

### Co jsou strukturované vs. nestrukturované adresy?

Strukturované adresy používají samostatné XML elementy pro každou složku: StrtNm (ulice), BldgNb (číslo budovy), PstCd (PSČ), TwnNm (město), Ctry (země) a volitelné elementy jako Flr, Room a DstrctNm. Nestrukturované adresy používají až sedm elementů AdrLine s volným textem. Hybridní adresy kombinují obojí během přechodného období. Po listopadu 2026 vyžaduje CBPR+ strukturovaný formát.

### Co je UETR a jak funguje sledování gpi?

UETR (Unique End-to-End Transaction Reference) je identifikátor UUID v4 generovaný agentem dlužníka a nesený beze změny napříč všemi větvemi platby. Vyskytuje se v pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 a pacs.028. SWIFT gpi používá UETR ke sledování plateb prostřednictvím cloudové databáze Tracker. Každý agent potvrzuje příjem a zpracování, což umožňuje viditelnost od konce ke konci a monitorování SLA.

### Jaké jsou běžné stavové kódy pacs.002?

ACCP znamená přijato po kontrolách zákaznického profilu. ACSP znamená přijato a vypořádání probíhá. ACSC znamená, že vypořádání na účtu dlužníka je dokončeno. RJCT znamená zamítnuto (s kódem důvodu v StsRsnInf). PDNG znamená čekající na další zpracování. RCVD znamená přijato, ale dosud nezpracováno. Každý stav může zahrnovat strukturovaný kód důvodu, jako je AC01 (nesprávný účet), AM04 (nedostatečné prostředky) nebo RC01 (nesprávný BIC).

### Jaké jsou běžné kódy důvodů vrácení v pacs.004?

Časté kódy důvodů vrácení zahrnují AC01 (nesprávné číslo účtu), AC04 (uzavřený účet), AC06 (blokovaný účet), AM04 (nedostatečné prostředky), BE04 (chybějící adresa věřitele), CUST (požadováno zákazníkem), DUPL (duplicitní platba), FOCR (na základě žádosti o zrušení) a FR01 (podvod). Úplný seznam je definován v ISO 20022 External Code Sets.

### Co jsou strukturované informace o úhradě?

Strukturovaná úhrada v pacs.008 používá element RmtInf/Strd k nesení odkazů na dokumenty (čísla faktur, dobropisy), částek (splatné, uhrazené, daň, sleva) a referencí věřitele (ISO 11649 RF reference). To umožňuje automatizované párování faktur a rekonciliaci. Běžné kódy typů dokumentů zahrnují CINV (obchodní faktura), CREN (dobropis) a SOAC (výpis z účtu).

### Co je LEI a kdy se používá?

LEI (Legal Entity Identifier) je 20znakový alfanumerický kód podle ISO 17442. Jednoznačně identifikuje právnické osoby účastnící se finančních transakcí. Ve zprávách pacs se LEI vyskytuje v OrgId/LEI pro strany a FinInstnId/LEI pro agenty. CBPR+ stále více podporuje LEI pro identifikaci stran a agentů. Zlepšuje disambiguaci entit a podporuje požadavky na regulatorní hlášení.

## O nástroji pacs008

### Co dělá pacs008?

pacs008 je Python nástroj, který generuje, validuje a odesílá platební zprávy ISO 20022. Čte platební data z CSV, JSON, JSONL, SQLite a Parquet zdrojů, validuje proti JSON Schema a XSD, kontroluje identifikátory IBAN a BIC, čistí data pro soulad se znaky SWIFT a produkuje XML soubory. Poskytuje REST API, CLI a Python knihovnu.

### Jaké typy zpráv pacs008 podporuje?

pacs008 podporuje osm typů zpráv: pacs.002.001.12 (stavová zpráva), pacs.003.001.09 (zákaznické inkaso), pacs.004.001.11 (vrácení platby), pacs.007.001.11 (reverze platby), pacs.008.001.13 (zákaznický kreditní převod), pacs.009.001.10 (kreditní převod finanční instituce), pacs.010.001.05 (inkaso finanční instituce) a pacs.028.001.05 (žádost o stav platby).

### Jak pacs008 pomáhá s termínem strukturovaných adres 2026?

pacs008 validuje strukturovaná a hybridní pole poštovních adres před generováním XML. Označuje nestrukturovaná adresní data, která by selhala po termínu v listopadu 2026, podporuje formáty hybridní před termínem i pouze strukturované po termínu a integruje kontroly kvality adres do CI pipeline a pracovních postupů dávkové validace.

### Může pacs008 validovat data bez generování XML?

Ano. Použijte CLI příznak `--dry-run` nebo API endpoint `POST /validate` k validaci platebních dat bez generování XML. Validační pipeline kontroluje shodu s JSON Schema, formát a kontrolní součet IBAN, strukturu BIC a soulad se znaky SWIFT. Návratový kód nebo odpověď API indikuje, zda validace prošla nebo selhala.

## Reference

- [Katalog definic zpráv ISO 20022](https://www.iso20022.org/iso-20022-message-definitions)
- [Externí sady kódů ISO 20022](https://www.iso20022.org/external_code_list.page)
- [Pokyny pro použití SWIFT CBPR+ ISO 20022](https://www.swift.com/standards/iso-20022)
- [Plán migrace SWIFT CBPR+](https://www.swift.com/swift-resource/252463/download)
- [Pravidla EPC SEPA kreditních převodů](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [Pravidla EPC SEPA okamžitých kreditních převodů](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

