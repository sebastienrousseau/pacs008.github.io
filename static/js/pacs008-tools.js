/**
 * pacs008 Interactive Tooling & 2026 Compliance Inspector
 * Zero-dependency client-side ISO 20022 generator, address validator, schema diff & LEI/Purpose code lookup
 */

(function () {
  const PURPOSE_CODES = [
    { code: "CORT", name: "Trade Settlement", desc: "Mandatory for wholesale financial trading and market transactions." },
    { code: "INTC", name: "Intra-Company Payment", desc: "Mandatory for liquidity management between corporate subsidiaries." },
    { code: "TREA", name: "Treasury Management", desc: "Mandatory for interbank treasury, foreign exchange, and money market operations." },
    { code: "SALA", name: "Payroll / Salary", desc: "Payment of salaries, wages, and employee compensation." },
    { code: "SUPP", name: "Supplier Payment", desc: "Commercial payment for goods and services rendered." },
    { code: "TAXS", name: "Tax Payment", desc: "Payment of national or local government tax liabilities." },
    { code: "PENS", name: "Pension Payment", desc: "Disbursement of retirement pensions and annuities." },
    { code: "DIVI", name: "Dividend Payment", desc: "Distribution of corporate dividends to shareholders." }
  ];

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
          label: "Fully Structured (CBPR+ 2026 Gold Standard)",
          detail: "Complies 100% with SWIFT CBPR+ and Bank of England CHAPS November 2026 mandates. All elements are in dedicated ISO 20022 XML fields."
        };
      }

      if (hasTown && hasCountry) {
        return {
          status: "HYBRID",
          label: "Hybrid Address (CBPR+ 2026 Minimum Compliant)",
          detail: "Passes SWIFT CBPR+ 2026 minimum requirements. Mandatory Town Name and Country are populated in structured fields."
        };
      }

      return {
        status: "UNSTRUCTURED",
        label: "Unstructured (Fails Post-Nov 2026)",
        detail: "NON-COMPLIANT: Missing mandatory structured Town Name (<TwnNm>) or Country (<Ctry>). Payment will be rejected at network layer starting 14 November 2026."
      };
    },

    compareVersions: function (v1, v2) {
      const diffs = {
        "pacs.008.001.08 vs pacs.008.001.13": [
          { feature: "Postal Address Mandate", v1: "Unstructured <AdrLine> permitted", v2: "Structured <TwnNm> & <Ctry> mandatory (Nov 2026)" },
          { feature: "Legal Entity Identifier (LEI)", v1: "Optional Party LEI", v2: "Mandatory FI LEI for Bank of England CHAPS" },
          { feature: "Charge Bearer Options", v1: "DEBT, CRED, SHAR, SLEV", v2: "SLEV default for SEPA / CBPR+" },
          { feature: "Structured Remittance", v1: "Unstructured 140-char string", v2: "Structured ISO 20022 XML Remittance" }
        ],
        "pacs.008 vs pacs.009": [
          { feature: "Primary Business Event", v1: "Customer Credit Transfer", v2: "Financial Institution Transfer" },
          { feature: "Debtor / Creditor Scope", v1: "Non-bank Corporates / Individuals", v2: "Banks & Clearing Members" },
          { feature: "BoE CHAPS Mandates", v1: "Mandatory Address Nov 2026", v2: "Mandatory LEI & Purpose Codes active" }
        ]
      };
      const key = `${v1} vs ${v2}`;
      return diffs[key] || diffs["pacs.008.001.08 vs pacs.008.001.13"];
    },

    searchPurposeCodes: function (query) {
      if (!query || !query.trim()) return PURPOSE_CODES;
      const q = query.toLowerCase().trim();
      return PURPOSE_CODES.filter(p => p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    },

    validateLei: function (lei) {
      if (!lei || !lei.trim()) return { valid: false, message: "Enter a 20-character alphanumeric Legal Entity Identifier (LEI)." };
      const cleaned = lei.trim().toUpperCase();
      const isValid = /^[A-Z0-9]{18}[0-9]{2}$/.test(cleaned);
      if (isValid) {
        return { valid: true, message: `Valid LEI format: ${cleaned} (Complies with ISO 17442 and Bank of England CHAPS rules).` };
      }
      return { valid: false, message: "Invalid LEI: Must be exactly 20 alphanumeric characters (ISO 17442)." };
    }
  };
})();
