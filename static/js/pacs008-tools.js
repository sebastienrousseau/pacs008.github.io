/**
 * pacs008 Interactive Tooling & 2026 Compliance Inspector
 * Zero-dependency client-side ISO 20022 generator & address validator
 */

(function () {
  // ISO 20022 XML Generator Logic
  window.pacs008Tools = {
    generateXml: function (params) {
      const msgType = params.msgType || "pacs.008.001.13";
      const debtorIban = params.debtorIban || "GB82WEST12345698765432";
      const creditorBic = params.creditorBic || "BOFAUS3NXXX";
      const currency = params.currency || "EUR";
      const amount = parseFloat(params.amount || 1250.0).toFixed(2);
      const endToEndId = params.endToEndId || "E2E-2026-0727-8891";
      const town = params.town || "London";
      const country = params.country || "GB";
      const street = params.street || "10 Gresham Street";

      const now = new Date().toISOString().split(".")[0];
      const dateOnly = now.split("T")[0];

      if (msgType === "pacs.002.001.12") {
        return `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.002.001.12">
  <FIToFIPmtStsRpt>
    <GrpHdr>
      <MsgId>RPT-${dateOnly}-001</MsgId>
      <CreDtTm>${now}</CreDtTm>
    </GrpHdr>
    <TxInfAndSts>
      <OrgnlEndToEndId>${endToEndId}</OrgnlEndToEndId>
      <TxSts>ACCP</TxSts>
      <StsRsnInf>
        <Rsn>
          <Cd>G000</Cd>
        </Rsn>
        <AddtlInf>Payment accepted and processed by clearing gateway</AddtlInf>
      </StsRsnInf>
    </TxInfAndSts>
  </FIToFIPmtStsRpt>
</Document>`.trim();
      }

      if (msgType === "pacs.009.001.10") {
        return `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.009.001.10">
  <FICreditTrf>
    <GrpHdr>
      <MsgId>FIN-${dateOnly}-991</MsgId>
      <CreDtTm>${now}</CreDtTm>
      <NbOfTxs>1</NbOfTxs>
      <SttlmInf>
        <SttlmMtd>CLRG</SttlmMtd>
      </SttlmInf>
    </GrpHdr>
    <CdtTrfTxInf>
      <PmtId>
        <EndToEndId>${endToEndId}</EndToEndId>
      </PmtId>
      <IntrBkSttlmAmt Ccy="${currency}">${amount}</IntrBkSttlmAmt>
      <Dbtr>
        <FinInstnId>
          <BICFI>UKRBP22XXXX</BICFI>
        </FinInstnId>
      </Dbtr>
      <Cdtr>
        <FinInstnId>
          <BICFI>${creditorBic}</BICFI>
        </FinInstnId>
      </Cdtr>
    </CdtTrfTxInf>
  </FICreditTrf>
</Document>`.trim();
      }

      // Default: pacs.008.001.13
      return `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.13">
  <FIToFICstmrCdtTrf>
    <GrpHdr>
      <MsgId>MSG-${dateOnly}-0881</MsgId>
      <CreDtTm>${now}</CreDtTm>
      <NbOfTxs>1</NbOfTxs>
      <SttlmInf>
        <SttlmMtd>CLRG</SttlmMtd>
      </SttlmInf>
    </GrpHdr>
    <CdtTrfTxInf>
      <PmtId>
        <EndToEndId>${endToEndId}</EndToEndId>
      </PmtId>
      <IntrBkSttlmAmt Ccy="${currency}">${amount}</IntrBkSttlmAmt>
      <ChrgBr>SLEV</ChrgBr>
      <Dbtr>
        <Nm>Treasury Services Ltd</Nm>
        <PstlAdr>
          <StrtNm>${street}</StrtNm>
          <TwnNm>${town}</TwnNm>
          <Ctry>${country}</Ctry>
        </PstlAdr>
      </Dbtr>
      <DbtrAcct>
        <Id>
          <IBAN>${debtorIban}</IBAN>
        </Id>
      </DbtrAcct>
      <CdtrAgt>
        <FinInstnId>
          <BICFI>${creditorBic}</BICFI>
        </FinInstnId>
      </CdtrAgt>
      <Cdtr>
        <Nm>Global Liquidity Corp</Nm>
      </Cdtr>
    </CdtTrfTxInf>
  </FIToFICstmrCdtTrf>
</Document>`.trim();
    },

    validateAddress: function (street, buildingNo, town, country, line1, line2) {
      const hasTown = Boolean(town && town.trim());
      const hasCountry = Boolean(country && country.trim() && country.trim().length === 2);
      const hasStreet = Boolean(street && street.trim());
      const hasLine1 = Boolean(line1 && line1.trim());

      if (hasStreet && hasTown && hasCountry && !hasLine1) {
        return {
          status: "FULLY_STRUCTURED",
          badgeClass: "badge-success",
          label: "Fully Structured (CBPR+ 2026 Gold Standard)",
          detail: "Complies 100% with SWIFT CBPR+ and Bank of England CHAPS November 2026 mandates. All elements are in dedicated ISO 20022 XML fields."
        };
      }

      if (hasTown && hasCountry) {
        return {
          status: "HYBRID",
          badgeClass: "badge-warning",
          label: "Hybrid Address (CBPR+ 2026 Minimum Compliant)",
          detail: "Passes SWIFT CBPR+ 2026 minimum requirements. Mandatory Town Name and Country are populated in structured fields."
        };
      }

      return {
        status: "UNSTRUCTURED",
        badgeClass: "badge-danger",
        label: "Unstructured (Fails Post-Nov 2026)",
        detail: "NON-COMPLIANT: Missing mandatory structured Town Name (<TwnNm>) or Country (<Ctry>). Payment will be rejected at network layer starting 14 November 2026."
      };
    }
  };
})();
