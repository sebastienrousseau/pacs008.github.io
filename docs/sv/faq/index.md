---
title: "Vanliga frågor om ISO 20022 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: sv-SE
lastUpdated: true
image: /logo.webp
---

# Vanliga frågor om ISO 20022

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## Allmänt

### Vad är ISO 20022?

ISO 20022 är en internationell standard för finansiella meddelanden. Den definierar ett gemensamt språk och en gemensam modell för betalningsmeddelanden som utbyts mellan finansiella institutioner. Till skillnad från äldre format som SWIFT MT använder ISO 20022 XML och stöder rikare, mer strukturerad data för parter, belopp och referenser.

### Vad är pacs-meddelanden?

Meddelandefamiljen pacs (payments clearing and settlement) omfattar instruktioner för interbankbetalningar, statusrapporter, returer, reverseringar och förfrågningar. Den inkluderar pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010 och pacs.028. Varje meddelande fyller en specifik funktion i betalningslivscykeln.

### Hur skiljer sig pacs-meddelanden från SWIFT MT-meddelanden?

SWIFT MT-meddelanden använder ett platt fälttaggsformat (t.ex. MT103 för kundkreditöverföringar). pacs-meddelanden använder hierarkisk XML med rikare datastrukturer. Viktiga skillnader inkluderar stöd för flera transaktioner per meddelande, strukturerad partsidentifiering (LEI, flera ID:n), strukturerade postadresser och strukturerad remitteringsinformation. MT103 motsvarar pacs.008, MT202 motsvarar pacs.009 och MT199-statustext ersätts av pacs.002.

### Vad är förhållandet mellan pain- och pacs-meddelanden?

Pain-meddelanden (payment initiation) färdas mellan kunden och dennes bank. pacs-meddelanden färdas mellan banker. En pain.001-initiering av kundkreditöverföring från gäldenärens bank blir en pacs.008 interbanksinstruktion. De två domänerna delar gemensamma dataelement men betjänar olika delar av betalningskedjan.

## Meddelandeval

### När ska pacs.008 användas

Använd pacs.008 för instruktioner om kundkreditöverföringar mellan banker. Det bär data om gäldenärs- och borgenärsparter, belopp, remitteringsinformation och avvecklingsdetaljer. Det är huvudmeddelandet för att skicka kundbetalningar över interbanksnätverket, oavsett om det gäller inrikes (SEPA) eller gränsöverskridande (CBPR+).

### När ska pacs.009 användas istället för pacs.008

Använd pacs.009 för institutionens egna kontoöverföringar, finansieringsben och täckningsbetalningar. Till skillnad från pacs.008, som bär en kundbetalning för en gäldenärs räkning, flyttar pacs.009 medel mellan banker för deras egen räkning. I täckningsmetodflöden bär pacs.009 finansieringen medan pacs.008 bär kundinstruktionen på en separat väg.

### Vad är skillnaden mellan pacs.004 och pacs.007?

pacs.004 returnerar avvecklade medel från den mottagande sidan tillbaka genom kedjan. pacs.007 reverserar en betalning från den ursprungliga instruerande sidan framåt genom kedjan. Använd pacs.004 när mottagarbanken inte kan tillämpa krediteringen efter avveckling. Använd pacs.007 när avsändaren upptäcker ett fel, en dubblett eller bedrägeri.

### När ska pacs.028 användas istället för att vänta på pacs.002

Använd pacs.028 när du aktivt behöver begära status för en betalning som inte har fått en pacs.002-uppdatering i tid. pacs.002 är händelsestyrt (den mottagande agenten skickar det proaktivt), medan pacs.028 är undantagsstyrt (den instruerande agenten begär det). Använd pacs.028 för försenade, oklara eller saknade betalningsuppdateringar, inte som rutintrafik.

### Vad används pacs.003 till?

pacs.003 bär instruktioner för kundautogiro mellan banker. Borgenärsagenten skickar det till gäldenärsagenten för att inkassera medel. Det kräver en giltig mandatreferens och stöder SEPA Core- och B2B-autogiroscheman. Det används inte för kreditöverföringar eller institutionens egna kontodebiteringar.

### Vad används pacs.010 till?

pacs.010 hanterar autogireringar mellan finansiella institutioner på deras egna konton. Det används för bank-till-bank-inkasso såsom avgifter, marginalanrop och liknande skyldigheter under bilaterala avtal. Det används inte för kundautogireringar eller kreditöverföringar.

## Meddelandestruktur

### Vad är grupphuvudet (GrpHdr)?

Grupphuvudet förekommer exakt en gång per pacs-meddelande. Det innehåller meddelandeidentifieraren (MsgId), tidsstämpel för skapande (CreDtTm), antal transaktioner (NbOfTxs), avvecklingsinformation (SttlmInf) och valfritt det totala interbankavvecklingsbeloppet och betalningstypsinformation. Det identifierar meddelandets kuvert, inte de enskilda affärstransaktionerna.

### Vilka betalningsidentifierare finns i pacs.008?

pacs.008 använder fyra huvudidentifierare. MsgId identifierar meddelandekuvertet och ändras vid varje hopp. InstrId är en punkt-till-punkt-referens mellan angränsande agenter och kan ändras per hopp. EndToEndId sätts av avsändaren och får inte ändras av någon agent i kedjan. TxId tilldelas av den första instruerande agenten och förblir konstant i interbanksutrymmet. UETR är en UUID som förblir oförändrad genom alla ben för spårning från ände till ände.

### Vilka avvecklingsmetoder finns tillgängliga?

Fyra avvecklingsmetoder är definierade. CLRG avvecklar genom ett clearingsystem såsom TARGET2, EURO1 eller CHIPS. INDA avvecklar i den instruerade agentens böcker där gäldenärsagenten har ett konto. INGA avvecklar i den instruerande agentens böcker där den instruerade agenten har ett konto. COVE avvecklar genom en separat täckningsbetalning som bärs av pacs.009.

### Vad betyder koderna för avgiftsbärare?

DEBT innebär att alla avgifter bärs av gäldenären (motsvarar MT103 OUR). CRED innebär att alla avgifter bärs av borgenären (motsvarar BEN). SHAR innebär att avgifterna delas mellan gäldenärs- och borgenärsagenter (motsvarar SHA). SLEV innebär att avgifterna följer tjänstenivåreglerna och är obligatoriskt för SEPA-kreditöverföringar.

## CBPR+ och migrering

### Vad är CBPR+?

CBPR+ (Cross-Border Payments and Reporting Plus) är SWIFT:s program för att införa ISO 20022 i gränsöverskridande betalningsmeddelanden. Det gick i drift i mars 2023 och ersätter MT-meddelanden med pacs-motsvarigheter. CBPR+ kräver pacs.002 för all statuskommunikation, stöder rikare partsdata och strukturerade adresser samt använder UETR-baserad spårning genom gpi.

### Vad hände med MT/MX-samexistensperioden?

Samexistensperioden för gränsöverskridande betalningsinstruktioner avslutades i november 2025. Sedan dess måste CBPR+-meddelanden använda ISO 20022 (MX)-formatet. Översättningstjänster som konverterade mellan MT och MX under övergången är inte längre tillgängliga för nya flöden. Banker måste nu skicka och ta emot nativa pacs-meddelanden.

### Vad innebär tidsfristen för strukturerade adresser i november 2026?

Från november 2026 kräver SWIFT CBPR+ strukturerade postadresser i gränsöverskridande betalningsmeddelanden. Ostrukturerade adressrader (enbart AdrLine) kommer inte längre att accepteras för viktiga partsfält. Som minimum krävs TwnNm och Ctry, med StrtNm och BldgNb eller PstBx rekommenderade. Detta förbättrar sanktionsgranskning och minskar manuell reparation.

### Hur ersätter pacs.008 MT103?

pacs.008 ersätter MT103 och MT103+ för kundkreditöverföringar. Viktig mappning: MT103 fält 20 motsvarar MsgId eller InstrId; fält 32A delas i IntrBkSttlmDt och IntrBkSttlmAmt; fält 50a motsvarar Dbtr och DbtrAcct; fält 59a motsvarar Cdtr och CdtrAcct; fält 70 motsvarar RmtInf; fält 71A motsvarar ChrgBr. pacs.008 lägger till UETR, strukturerad remittering, LEI-identifiering och stöder flera transaktioner per meddelande.

### Hur ersätter pacs.009 MT202?

pacs.009 ersätter MT202 och MT202COV för institution-till-institution-överföringar. I täckningsmetodflöden delas MT202COV (som bar både finansiering och underliggande kunddata) rent: pacs.009 bär finansieringsben medan pacs.008 bär kundinstruktionen direkt. Denna uppdelning förbättrar datakvaliteten och minskar avstämningsproblem.

## Tekniska detaljer

### Vad är strukturerade kontra ostrukturerade adresser?

Strukturerade adresser använder separata XML-element för varje komponent: StrtNm (gata), BldgNb (husnummer), PstCd (postnummer), TwnNm (ort), Ctry (land) och valfria element som Flr, Room och DstrctNm. Ostrukturerade adresser använder upp till sju AdrLine-element med fritext. Hybridadresser kombinerar båda under övergångsperioden. Efter november 2026 kräver CBPR+ det strukturerade formatet.

### Vad är UETR och hur fungerar gpi-spårning?

UETR (Unique End-to-End Transaction Reference) är en UUID v4-identifierare som genereras av gäldenärsagenten och bärs oförändrad genom alla ben av en betalning. Den förekommer i pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 och pacs.028. SWIFT gpi använder UETR för att spåra betalningar genom en molnbaserad Tracker-databas. Varje agent bekräftar mottagande och bearbetning, vilket möjliggör synlighet från ände till ände och SLA-övervakning.

### Vilka är vanliga pacs.002-statuskoder?

ACCP betyder accepterad efter kundprofilkontroller. ACSP betyder accepterad och avveckling pågår. ACSC betyder att avveckling på gäldenärskontot är slutförd. RJCT betyder avvisad (med en orsakskod i StsRsnInf). PDNG betyder väntande på vidare bearbetning. RCVD betyder mottagen men ännu inte bearbetad. Varje status kan inkludera en strukturerad orsakskod såsom AC01 (felaktigt konto), AM04 (otillräckliga medel) eller RC01 (felaktig BIC).

### Vilka är vanliga returorsakskoder i pacs.004?

Vanliga returorsakskoder inkluderar AC01 (felaktigt kontonummer), AC04 (stängt konto), AC06 (blockerat konto), AM04 (otillräckliga medel), BE04 (saknad borgenärsadress), CUST (begärd av kund), DUPL (dubblettbetalning), FOCR (efter annulleringsförfrågan) och FR01 (bedrägeri). Den fullständiga listan definieras i ISO 20022 External Code Sets.

### Vad är strukturerad remitteringsinformation?

Strukturerad remittering i pacs.008 använder elementet RmtInf/Strd för att bära dokumentreferenser (fakturanummer, kreditnotor), belopp (förfallna, remitterade, skatt, rabatt) och borgenärsreferenser (ISO 11649 RF-referenser). Detta möjliggör automatisk fakturamatchning och avstämning. Vanliga dokumenttypskoder inkluderar CINV (kommersiell faktura), CREN (kreditnota) och SOAC (kontoutdrag).

### Vad är LEI och när används det?

LEI (Legal Entity Identifier) är en 20-teckens alfanumerisk kod enligt ISO 17442. Den identifierar unikt juridiska personer som deltar i finansiella transaktioner. I pacs-meddelanden förekommer LEI i OrgId/LEI för parter och FinInstnId/LEI för agenter. CBPR+ uppmuntrar i allt högre grad LEI för parts- och agentidentifiering. Det förbättrar entitetsdisambiguering och stöder regulatoriska rapporteringskrav.

## Om pacs008-verktygslådan

### Vad gör pacs008?

pacs008 är en Python-verktygslåda som genererar, validerar och levererar ISO 20022-betalningsmeddelanden. Den läser betalningsdata från CSV, JSON, JSONL, SQLite och Parquet-källor, validerar mot JSON Schema och XSD, kontrollerar IBAN- och BIC-identifierare, rensar data för SWIFT-teckenkomplians och producerar XML-filer. Den tillhandahåller ett REST API, CLI och Python-bibliotek.

### Vilka meddelandetyper stöder pacs008?

pacs008 stöder åtta meddelandetyper: pacs.002.001.12 (statusrapport), pacs.003.001.09 (kundautogiro), pacs.004.001.11 (betalningsretur), pacs.007.001.11 (betalningsreversering), pacs.008.001.13 (kundkreditöverföring), pacs.009.001.10 (kreditöverföring mellan finansiella institutioner), pacs.010.001.05 (autogiro mellan finansiella institutioner) och pacs.028.001.05 (begäran om betalningsstatus).

### Hur hjälper pacs008 med tidsfristen för strukturerade adresser 2026?

pacs008 validerar strukturerade och hybrida postadressfält före XML-generering. Det flaggar ostrukturerad adressdata som skulle misslyckas efter tidsfristen i november 2026, stöder både format med hybrid före tidsfristen och enbart strukturerat efter tidsfristen, och integrerar adresskvalitetskontroller i CI-pipelines och batchvalideringsarbetsflöden.

### Kan pacs008 validera data utan att generera XML?

Ja. Använd CLI-flaggan `--dry-run` eller API-slutpunkten `POST /validate` för att validera betalningsdata utan att generera XML. Valideringspipelinen kontrollerar JSON Schema-överensstämmelse, IBAN-format och kontrollsumma, BIC-struktur och SWIFT-teckenkomplians. Exitkoden eller API-svaret anger om valideringen lyckades eller misslyckades.

## Referenser

- [ISO 20022 meddelandedefinitionskatalog](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 externa koduppsättningar](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 användningsriktlinjer](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migreringsplan](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA kreditöverföringsregelbok](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA snabbkreditöverföringsregelbok](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

