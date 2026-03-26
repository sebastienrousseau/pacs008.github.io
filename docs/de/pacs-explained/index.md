---
title: "PACS-Nachrichten erklärt | pacs008"
description: "Detaillierte technische Referenz für ISO 20022 pacs-Nachrichten: Lebenszyklus, XML-Struktur, Abwicklungsmethoden, Begründungscodes, Adresstypen..."
lang: de-DE
lastUpdated: true
image: /logo.webp
---

# PACS-Nachrichten erklärt

Diese Seite bietet eine detaillierte technische Referenz für die ISO 20022 pacs-Nachrichtenfamilie. Sie behandelt den vollständigen Zahlungslebenszyklus, die XML-Struktur, Abwicklungsmethoden, Begründungscodes, Parteiidentifikation, Überweisungsinformationen und End-to-End-Tracking.

## Lebenszyklus einer Zahlung

Der vollständige pacs-Zahlungslebenszyklus umfasst sechs Phasen und mehrere Nachrichtentypen, die zusammenwirken.

**Phase 1 — Initiierung.** Die Zahlung entsteht im Kunde-Bank-Bereich (pain.001). Die Bank des Schuldners empfängt die Anweisung und überführt sie in den Interbankenbereich.

**Phase 2 — Interbanken-Anweisung.** Der Schuldner-Agent erstellt einen pacs.008 und sendet ihn an den nächsten Agenten in der Kette. Bei einem seriellen Ablauf wird der pacs.008 schrittweise über Intermediäre weitergeleitet. Bei einem Deckungsverfahren geht der pacs.008 direkt vom Schuldner-Agenten zum Gläubiger-Agenten, während ein separater pacs.009 die Finanzierungsseite über die Korrespondentenkette abwickelt.

**Phase 3 — Statusberichte.** Bei jedem Schritt kann der empfangende Agent einen pacs.002 zurücksenden, der die Annahme (ACCP/ACSP/ACSC), Ablehnung (RJCT) oder einen ausstehenden Status (PDNG) bestätigt. Bei CBPR+ ist der pacs.002 für jede Zahlungsstatuskommunikation obligatorisch.

**Phase 4 — Verrechnung.** Die Verrechnung erfolgt über ein Clearingsystem (CLRG), auf Korrespondenzkonten (INDA/INGA) oder über eine Deckungszahlung (COVE). Das Interbanken-Verrechnungsdatum und der Betrag bestimmen, wann und wie viel verrechnet wird.

**Phase 5 — Gutschrift an den Begünstigten.** Der Gläubiger-Agent schreibt dem Begünstigten den Betrag gut und kann eine Kundenbenachrichtigung senden.

**Phase 6 — Ausnahmebehandlung.** Wenn der Begünstigte nach der Verrechnung nicht gutgeschrieben werden kann, werden die Mittel über pacs.004 durch die Kette zurückgeführt. Wenn der Auftraggeber einen Fehler oder Betrug feststellt, wird pacs.007 durch die Kette weitergeleitet. Wenn der Status unbekannt ist, fragt pacs.028 den nächsten Agenten ab und die Antwort kommt über pacs.002 zurück.

### Serielles Verfahren

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### Deckungsverfahren

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## XML-Struktur von pacs.008

pacs.008 besteht aus zwei Hauptbausteinen: dem Gruppenkopf (GrpHdr) und den Überweisungstransaktionsinformationen (CdtTrfTxInf).

### Gruppenkopf (GrpHdr)

Der Gruppenkopf erscheint genau einmal pro Nachricht und enthält:

- **MsgId** — Eindeutige Nachrichtenkennung, vergeben vom sendenden Agenten. Maximal 35 Zeichen, muss pro Absender eindeutig sein.
- **CreDtTm** — Erstellungszeitstempel im ISO-8601-Format.
- **NbOfTxs** — Anzahl der einzelnen Transaktionen in der Nachricht.
- **SttlmInf** — Verrechnungsinformationen einschließlich der Verrechnungsmethode (SttlmMtd) und optional des Clearingsystems und des Verrechnungskontos.
- **IntrBkSttlmDt** — Datum, an dem die Interbankenverrechnung stattfindet.
- **PmtTpInf** — Zahlungsartinformationen einschließlich Priorität, Servicelevel, lokales Instrument und Kategorie-Verwendungszweck.

### Überweisungstransaktionsinformationen (CdtTrfTxInf)

Jede Transaktion enthält:

- **PmtId** — Zahlungskennungen: InstrId, EndToEndId, TxId und UETR.
- **IntrBkSttlmAmt** — Interbanken-Verrechnungsbetrag mit Währungscode.
- **InstdAmt** — Ursprünglich angewiesener Betrag (kann aufgrund von Devisenkursen vom Verrechnungsbetrag abweichen).
- **ChrgBr** — Gebührenträgercode (DEBT, CRED, SHAR oder SLEV).
- **Dbtr / DbtrAcct / DbtrAgt** — Name, Adresse, Identifikation, Konto und Agent des Schuldners.
- **Cdtr / CdtrAcct / CdtrAgt** — Name, Adresse, Identifikation, Konto und Agent des Gläubigers.
- **IntrmyAgt1 / 2 / 3** — Bis zu drei Intermediär-Agenten in der Kette.
- **RmtInf** — Überweisungsinformationen, entweder unstrukturiert (Freitext) oder strukturiert (Dokumentreferenzen, Beträge, Daten).
- **Purp** — Strukturierter Verwendungszweckcode.
- **RgltryRptg** — Details der aufsichtsrechtlichen Meldung.

## Zahlungskennungen

pacs-Nachrichten verwenden mehrere Kennungen, die verschiedene Rollen in der Zahlungskette erfüllen.

<div class="api-fields-table" tabindex="0" aria-label="Zahlungskennungen">
  <table>
    <caption>Zahlungskennungen und ihre Rollen</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Kennung</th>
        <th scope="col">Gesetzt von</th>
        <th scope="col">Ändert sich in der Kette?</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">Jedem sendenden Agenten</td>
          <td class="api-fields-table__constraint">Ja — neu pro Nachricht</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">Jedem anweisenden Agenten</td>
          <td class="api-fields-table__constraint">Ja — kann sich pro Schritt ändern</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">Auftraggeber (Schuldner)</td>
          <td class="api-fields-table__constraint">Nein — darf nicht geändert werden</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">Erster anweisender Agent</td>
          <td class="api-fields-table__constraint">Nein — darf nicht geändert werden</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">Schuldner-Agent</td>
          <td class="api-fields-table__constraint">Nein — universelle Nachverfolgung</td>
        </tr>
    </tbody>
  </table>
</div>

## Verrechnungsmethoden

Das Element SttlmMtd definiert, wie die Interbankenverrechnung erfolgt.

- **CLRG** — Verrechnung über ein Clearingsystem wie TARGET2, EURO1 oder CHIPS. Am häufigsten für nationales und regionales Clearing.
- **INDA** — Verrechnung in den Büchern des beauftragten Agenten. Der Schuldner-Agent unterhält ein Nostro-Konto beim nächsten Agenten. Typisch für bilaterales Korrespondenzbanking.
- **INGA** — Verrechnung in den Büchern des anweisenden Agenten. Der beauftragte Agent unterhält ein Nostro-Konto beim sendenden Agenten. Seltener als INDA.
- **COVE** — Verrechnung über eine separate Deckungszahlung. Ein pacs.009 übernimmt die Finanzierungsseite, während der pacs.008 die Kundendaten direkt überträgt. Wird im grenzüberschreitenden Korrespondenzbanking eingesetzt.

## Gebührenträgercodes

Das Element ChrgBr legt fest, wer die Zahlungsgebühren trägt.

- **DEBT** — Schuldner trägt alle Gebühren (MT103-Äquivalent: OUR). Der Gläubiger erhält den vollen Betrag.
- **CRED** — Gläubiger trägt alle Gebühren (MT103-Äquivalent: BEN). Die Gebühren werden vom Überweisungsbetrag abgezogen.
- **SHAR** — Gebühren werden geteilt (MT103-Äquivalent: SHA). Jede Partei zahlt die Gebühren ihres eigenen Agenten. Am häufigsten bei grenzüberschreitenden Zahlungen.
- **SLEV** — Gebühren folgen dem Servicelevel. Obligatorisch für SEPA. Keine Abzüge vom Überweisungsbetrag.

## Feldzuordnung MT103 zu pacs.008

<div class="api-fields-table" tabindex="0" aria-label="Feldzuordnung MT103 zu pacs.008">
  <table>
    <caption>Wichtige Feldzuordnungen von MT103 zu pacs.008</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">MT103-Feld</th>
        <th scope="col">MT103-Bezeichnung</th>
        <th scope="col">pacs.008 XML-Pfad</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">Referenz des Absenders</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">Bankoperationscode</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">Valutadatum / Betrag</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">Angewiesener Betrag</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">Auftraggeber</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">Auftraggeberinstitut</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">Kontoinstitut</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">Begünstigter Kunde</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">Überweisungsinformationen</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">Gebührendetails</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">Absender-an-Empfänger-Info</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## Status- und Grundcodes

### pacs.002-Statuscodes

<div class="api-fields-table" tabindex="0" aria-label="pacs.002-Statuscodes">
  <table>
    <caption>Transaktionsstatuscodes in pacs.002</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Bedeutung</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">Akzeptiert — vorhergehende Prüfungen bestanden</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">Akzeptiert — Verrechnung läuft</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">Akzeptiert — Verrechnung abgeschlossen</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">Empfangen — noch nicht verarbeitet</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">Ausstehend — weitere Verarbeitung erforderlich</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">Abgelehnt — mit Grundcode</td></tr>
    </tbody>
  </table>
</div>

### Häufige Ablehnungs- und Rückgabegrundcodes

<div class="api-fields-table" tabindex="0" aria-label="Häufige Grundcodes">
  <table>
    <caption>Häufig verwendete Ablehnungs- und Rückgabegrundcodes</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Beschreibung</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">Falsche Kontonummer</td><td class="api-fields-table__constraint">Die Kontonummer ist ungültig oder existiert nicht</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">Geschlossenes Konto</td><td class="api-fields-table__constraint">Das Konto ist geschlossen</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">Gesperrtes Konto</td><td class="api-fields-table__constraint">Das Konto ist für Transaktionen gesperrt</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">Unzureichende Deckung</td><td class="api-fields-table__constraint">Unzureichende Deckung auf dem Schuldnerkonto</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">Dopplung</td><td class="api-fields-table__constraint">Doppelte Zahlung erkannt</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">Fehlende Gläubigeradresse</td><td class="api-fields-table__constraint">Die Adresse des Gläubigers fehlt oder ist unvollständig</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">Vom Kunden angefordert</td><td class="api-fields-table__constraint">Rückgabe oder Ablehnung vom Kunden angefordert</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">Doppelte Zahlung</td><td class="api-fields-table__constraint">Doppelte Zahlung identifiziert</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">Nach Stornierung</td><td class="api-fields-table__constraint">Aufgrund einer Stornierungsanforderung</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">Betrug</td><td class="api-fields-table__constraint">Betrugsverdacht</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">Falscher BIC</td><td class="api-fields-table__constraint">BIC ist falsch oder unbekannt</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">Fehlender Gläubigername/-adresse</td><td class="api-fields-table__constraint">Name oder Adressdaten des Gläubigers fehlen</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">Annahmeschluss</td><td class="api-fields-table__constraint">Die Annahmeschlusszeit ist überschritten</td></tr>
    </tbody>
  </table>
</div>

## Postadressformat

### Strukturierte Adresse

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### Unstrukturierte Adresse (ab November 2026 für CBPR+ veraltet)

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

Wichtige Einschränkungen: StrtNm maximal 70 Zeichen (CBPR+), TwnNm maximal 35 Zeichen (CBPR+), Ctry im Format ISO 3166-1 Alpha-2, AdrLine maximal 70 Zeichen pro Zeile und maximal 7 Zeilen.

## Parteienidentifikation

Parteien in pacs.008 unterstützen mehrere Identifikationsmethoden:

- **BIC** — Geschäftskennungscode gemäß ISO 9362. 8 oder 11 Zeichen (BBBBCCLL oder BBBBCCLLBBB). Verwendet in FinInstnId/BICFI für Agenten und OrgId/AnyBIC für Parteien.
- **LEI** — Kennung für juristische Personen gemäß ISO 17442. 20 alphanumerische Zeichen. Erscheint in OrgId/LEI für Parteien und FinInstnId/LEI für Agenten. Verbessert die Entitätszuordnung für aufsichtsrechtliche Meldungen.
- **IBAN** — Internationale Bankkontonummer gemäß ISO 13616. Verwendet in DbtrAcct/Id/IBAN und CdtrAcct/Id/IBAN.
- **Organisationskennungen** — Weitere schemabasierte Kennungen (Steuernummer, DUNS, Kundennummer) über OrgId/Othr mit einem Schemanamecode.
- **Private Kennungen** — Für natürliche Personen: Geburtsdatum und -ort, Reisepass (CCPT), Personalausweis (NIDN) oder Führerschein (DRLC) über PrvtId.

## Überweisungsinformationen

Überweisungsdaten in pacs.008 verwenden das Element RmtInf mit zwei Formen:

**Unstrukturiert** — Freitext bis zu 140 Zeichen pro Vorkommen. Einfach, aber begrenzt den automatisierten Abgleich.

**Strukturiert** — Dokumentreferenzen mit Typcodes, Nummern, Daten und Beträgen. Häufige Dokumenttypen: CINV (Handelsrechnung), CREN (Gutschrift), SOAC (Kontoauszug). Unterstützt ISO-11649-Gläubigerreferenzen (RF + Prüfziffern + Referenz) über CdtrRefInf. Ermöglicht automatisierten Rechnungsabgleich und Multi-Rechnungszahlungen.

## UETR und gpi-Tracking

UETR (Unique End-to-End Transaction Reference) ist eine UUID v4, die vom Schuldner-Agenten erzeugt wird. Sie erscheint in PmtId/UETR über pacs.008, pacs.009, pacs.002, pacs.004, pacs.007 und pacs.028 hinweg. Sie darf in der gesamten Zahlungskette nicht verändert werden.

SWIFT gpi nutzt die UETR zur Nachverfolgung von Zahlungen über eine cloudbasierte Tracker-Datenbank. Jeder Agent bestätigt den Empfang und die Verarbeitung, was eine durchgängige Transparenz ermöglicht. Das gpi-SLA für grenzüberschreitende Zahlungen zielt auf eine Gutschrift am selben Tag auf dem Gläubigerkonto ab.

## Referenzen

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

