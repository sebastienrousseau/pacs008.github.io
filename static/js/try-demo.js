/* pacs008 browser demo — core logic.
 * Adapted 1-to-1 from pain001 try-demo.js benchmark.
 */

export const REQUIRED_COLUMNS = [
  "id", "payment_id", "requested_execution_date", "payment_amount",
  "currency", "debtor_name", "debtor_account_IBAN", "debtor_agent_BIC",
  "creditor_name", "creditor_account_IBAN", "creditor_agent_BIC",
];

export const IBAN_LENGTHS = {
  AT: 20, BE: 16, CH: 21, CZ: 24, DE: 22, DK: 18, EE: 20, ES: 24,
  FI: 18, FR: 27, GB: 22, GR: 27, HR: 21, HU: 28, IE: 22, IT: 27,
  LT: 20, LU: 20, LV: 21, NL: 18, NO: 15, PL: 28, PT: 25, RO: 24,
  SE: 24, SI: 19, SK: 24,
};

export function ibanChecksumValid(iban) {
  const s = String(iban).replace(/\s+/g, "").toUpperCase();
  if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/.test(s)) return false;
  const r = s.slice(4) + s.slice(0, 4);
  let expanded = "";
  for (let i = 0; i < r.length; i++) {
    const c = r.charCodeAt(i);
    expanded += c >= 65 ? String(c - 55) : r[i];
  }
  let mod = 0;
  for (let j = 0; j < expanded.length; j += 7) {
    mod = parseInt(String(mod) + expanded.slice(j, j + 7), 10) % 97;
  }
  return mod === 1;
}

export function bicValid(bic) {
  return /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(String(bic).trim().toUpperCase());
}

export function splitCsvLine(line, delimiter) {
  const cells = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; }
        else inQuotes = false;
      } else cur += ch;
    } else if (ch === '"' && cur === "") {
      inQuotes = true;
    } else if (ch === delimiter) {
      cells.push(cur); cur = "";
    } else {
      cur += ch;
    }
  }
  cells.push(cur);
  return cells;
}

export function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length === 0) return { headers: [], rows: [] };
  const delimiter = lines[0].includes(";") ? ";" : lines[0].includes("\t") ? "\t" : ",";
  const headers = splitCsvLine(lines[0], delimiter).map((h) => h.trim());
  const rows = lines.slice(1).map((line) => {
    const cells = splitCsvLine(line, delimiter);
    const obj = {};
    headers.forEach((h, idx) => { obj[h] = cells[idx] ? cells[idx].trim() : ""; });
    return obj;
  });
  return { headers, rows };
}

export function xmlEscape(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function toXml(rows, msgId = "MSG-PACS008-2026", creDtTm = new Date().toISOString()) {
  const first = rows[0] || {
    id: "PMT-001", payment_id: "TXN-001", payment_amount: "25000.00", currency: "EUR",
    debtor_name: "Acme Corp GmbH", debtor_account_IBAN: "DE89370400440532013000", debtor_agent_BIC: "DEUTDEFFXXX",
    creditor_name: "Widget Industries SA", creditor_account_IBAN: "FR1420041010050500013M02606", creditor_agent_BIC: "BNPAFRPPXXX",
    requested_execution_date: new Date().toISOString().split("T")[0]
  };

  const txs = rows.map((r) => `      <CdtTrfTxInf>
        <PmtId><EndToEndId>${xmlEscape(r.payment_id || "TXN-001")}</EndToEndId></PmtId>
        <IntrBkSttlmAmt Ccy="${xmlEscape(r.currency || "EUR")}">${xmlEscape(r.payment_amount || "25000.00")}</IntrBkSttlmAmt>
        <Dbtr><Nm>${xmlEscape(r.debtor_name || "Acme Corp GmbH")}</Nm></Dbtr>
        <DbtrAcct><Id><IBAN>${xmlEscape(r.debtor_account_IBAN || "DE89370400440532013000")}</IBAN></Id></DbtrAcct>
        <DbtrAgt><FinInstnId><BICFI>${xmlEscape(r.debtor_agent_BIC || "DEUTDEFFXXX")}</BICFI></FinInstnId></DbtrAgt>
        <CdtrAgt><FinInstnId><BICFI>${xmlEscape(r.creditor_agent_BIC || "BNPAFRPPXXX")}</BICFI></FinInstnId></CdtrAgt>
        <Cdtr><Nm>${xmlEscape(r.creditor_name || "Widget Industries SA")}</Nm></Cdtr>
        <CdtrAcct><Id><IBAN>${xmlEscape(r.creditor_account_IBAN || "FR1420041010050500013M02606")}</IBAN></Id></CdtrAcct>
        <Purp><Cd>SALA</Cd></Purp>
      </CdtTrfTxInf>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.13">
  <FIToFICstmrCdtTrf>
    <GrpHdr>
      <MsgId>${xmlEscape(msgId)}</MsgId>
      <CreDtTm>${xmlEscape(creDtTm)}</CreDtTm>
      <NbOfTxs>${rows.length || 1}</NbOfTxs>
      <SttlmInf><SttlmMtd>CLRG</SttlmMtd></SttlmInf>
    </GrpHdr>
${txs}
  </FIToFICstmrCdtTrf>
</Document>`;
}

export const SAMPLES = {
  "sepa-sct": {
    csv: `id,payment_id,requested_execution_date,payment_amount,currency,debtor_name,debtor_account_IBAN,debtor_agent_BIC,creditor_name,creditor_account_IBAN,creditor_agent_BIC
1,TXN-001,2026-08-03,1250.00,EUR,Acme Global Corp,DE89370400440532013000,DEUTDEFFXXX,Supplier SARL,FR1420041010050500013M02606,BNPAFRPPXXX
2,TXN-002,2026-08-03,890.50,EUR,Acme Global Corp,DE89370400440532013000,DEUTDEFFXXX,Northwind Ltd,GB29NWBK60161331926819,NWBKGB2LXXX`
  },
  "cross-border": {
    csv: `id,payment_id,requested_execution_date,payment_amount,currency,debtor_name,debtor_account_IBAN,debtor_agent_BIC,creditor_name,creditor_account_IBAN,creditor_agent_BIC
1,XB-001,2026-08-05,4500.00,GBP,Acme Global Corp,DE89370400440532013000,DEUTDEFFXXX,Smith & Sons Ltd,GB29NWBK60161331926819,NWBKGB2LXXX`
  },
  "batch-20": {
    csv: Array.from({length: 20}, (_, i) => `${i+1},BATCH-${String(i+1).padStart(3,"0")},2026-08-07,1500.00,EUR,Acme Corp,DE89370400440532013000,DEUTDEFFXXX,Payee ${i+1},FR1420041010050500013M02606,BNPAFRPPXXX`).join("\n")
  }
};
