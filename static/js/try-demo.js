/* pacs008 browser demo — core validation and XML generation engine.
 * ES module, zero dependencies, 100% client-side local execution.
 */

export const REQUIRED_COLUMNS = [
  "id", "payment_id", "requested_execution_date", "payment_amount",
  "currency", "debtor_name", "debtor_account_IBAN", "debtor_agent_BIC",
  "creditor_name", "creditor_account_IBAN", "creditor_agent_BIC",
];

export const OPTIONAL_COLUMNS = ["purpose_code", "remittance_information"];

const BIC_RE = /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const AMOUNT_RE = /^\d+(\.\d{1,2})?$/;
const CCY_RE = /^[A-Z]{3}$/;

export const IBAN_LENGTHS = {
  AT: 20, BE: 16, CH: 21, CZ: 24, DE: 22, DK: 18, EE: 20, ES: 24,
  FI: 18, FR: 27, GB: 22, GR: 27, HR: 21, HU: 28, IE: 22, IT: 27,
  LT: 20, LU: 20, LV: 21, NL: 18, NO: 15, PL: 28, PT: 25, RO: 24,
  SE: 24, SI: 19, SK: 24,
};

export function ibanChecksumValid(iban) {
  const s = String(iban || "").replace(/\s+/g, "").toUpperCase();
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

export function ibanLengthValid(iban) {
  const s = String(iban || "").replace(/\s+/g, "").toUpperCase();
  const expected = IBAN_LENGTHS[s.slice(0, 2)];
  return expected === undefined || s.length === expected;
}

export function bicValid(bic) {
  return BIC_RE.test(String(bic || "").trim().toUpperCase());
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
  return { headers, rows, delimiter };
}

export function validateRecords(headers, rows) {
  const findings = [];
  const add = (row, column, rule, value, message) => {
    findings.push({ row, column, rule, value, message });
  };

  const missingHeaders = REQUIRED_COLUMNS.filter((col) => !headers.includes(col));
  if (missingHeaders.length > 0) {
    add(0, "header", "missing-column", missingHeaders.join(", "), `Missing required columns: ${missingHeaders.join(", ")}`);
    return findings;
  }

  rows.forEach((rec, idx) => {
    const rowNum = idx + 1;
    REQUIRED_COLUMNS.forEach((col) => {
      if (!rec[col] || rec[col].trim() === "") {
        add(rowNum, col, "required-value", rec[col] || "", `Field '${col}' is required and cannot be empty`);
      }
    });

    if (rec.payment_amount && !AMOUNT_RE.test(rec.payment_amount)) {
      add(rowNum, "payment_amount", "amount-format", rec.payment_amount, "Amount must be a valid positive decimal number (e.g. 25000.00)");
    }
    if (rec.currency && !CCY_RE.test(rec.currency.toUpperCase())) {
      add(rowNum, "currency", "currency-code", rec.currency, "Currency must be a 3-letter ISO 4217 code (e.g. EUR, GBP, USD)");
    }
    if (rec.requested_execution_date && !DATE_RE.test(rec.requested_execution_date)) {
      add(rowNum, "requested_execution_date", "date-format", rec.requested_execution_date, "Date must follow YYYY-MM-DD format");
    }

    if (rec.debtor_account_IBAN) {
      if (!ibanLengthValid(rec.debtor_account_IBAN)) {
        add(rowNum, "debtor_account_IBAN", "iban-length", rec.debtor_account_IBAN, `Debtor IBAN has incorrect length for country ${rec.debtor_account_IBAN.slice(0,2).toUpperCase()}`);
      } else if (!ibanChecksumValid(rec.debtor_account_IBAN)) {
        add(rowNum, "debtor_account_IBAN", "iban-checksum", rec.debtor_account_IBAN, "Debtor IBAN fails ISO 13616 mod-97 checksum");
      }
    }
    if (rec.creditor_account_IBAN) {
      if (!ibanLengthValid(rec.creditor_account_IBAN)) {
        add(rowNum, "creditor_account_IBAN", "iban-length", rec.creditor_account_IBAN, `Creditor IBAN has incorrect length for country ${rec.creditor_account_IBAN.slice(0,2).toUpperCase()}`);
      } else if (!ibanChecksumValid(rec.creditor_account_IBAN)) {
        add(rowNum, "creditor_account_IBAN", "iban-checksum", rec.creditor_account_IBAN, "Creditor IBAN fails ISO 13616 mod-97 checksum");
      }
    }

    if (rec.debtor_agent_BIC && !bicValid(rec.debtor_agent_BIC)) {
      add(rowNum, "debtor_agent_BIC", "bic-structure", rec.debtor_agent_BIC, "Debtor BIC is not a valid ISO 9362 BIC (8 or 11 characters)");
    }
    if (rec.creditor_agent_BIC && !bicValid(rec.creditor_agent_BIC)) {
      add(rowNum, "creditor_agent_BIC", "bic-structure", rec.creditor_agent_BIC, "Creditor BIC is not a valid ISO 9362 BIC (8 or 11 characters)");
    }
  });

  return findings;
}

export function xmlEscape(v) {
  return String(v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function toXml(rows, msgId = "MSG-PACS008-2026", creDtTm = new Date().toISOString()) {
  const txs = rows.map((r) => {
    const purposeXml = r.purpose_code ? `\n        <Purp><Cd>${xmlEscape(r.purpose_code)}</Cd></Purp>` : "";
    const rmtXml = r.remittance_information ? `\n        <RmtInf><Ustrd>${xmlEscape(r.remittance_information)}</Ustrd></RmtInf>` : "";

    return `      <CdtTrfTxInf>
        <PmtId><EndToEndId>${xmlEscape(r.payment_id)}</EndToEndId></PmtId>
        <IntrBkSttlmAmt Ccy="${xmlEscape(r.currency || "EUR")}">${xmlEscape(r.payment_amount)}</IntrBkSttlmAmt>
        <ChrgBr><Cd>SLEV</Cd></ChrgBr>
        <Dbtr><Nm>${xmlEscape(r.debtor_name)}</Nm></Dbtr>
        <DbtrAcct><Id><IBAN>${xmlEscape(r.debtor_account_IBAN)}</IBAN></Id></DbtrAcct>
        <DbtrAgt><FinInstnId><BICFI>${xmlEscape(r.debtor_agent_BIC)}</BICFI></FinInstnId></DbtrAgt>
        <CdtrAgt><FinInstnId><BICFI>${xmlEscape(r.creditor_agent_BIC)}</BICFI></FinInstnId></CdtrAgt>
        <Cdtr><Nm>${xmlEscape(r.creditor_name)}</Nm></Cdtr>
        <CdtrAcct><Id><IBAN>${xmlEscape(r.creditor_account_IBAN)}</IBAN></Id></CdtrAcct>${purposeXml}${rmtXml}
      </CdtTrfTxInf>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.13">
  <FIToFICstmrCdtTrf>
    <GrpHdr>
      <MsgId>${xmlEscape(msgId)}</MsgId>
      <CreDtTm>${xmlEscape(creDtTm)}</CreDtTm>
      <NbOfTxs>${rows.length}</NbOfTxs>
      <SttlmInf><SttlmMtd>CLRG</SttlmMtd></SttlmInf>
    </GrpHdr>
${txs}
  </FIToFICstmrCdtTrf>
</Document>`;
}

export const SAMPLES = {
  "sepa-sct": {
    label: "SEPA credit transfer (2 records, EUR)",
    csv: `id,payment_id,requested_execution_date,payment_amount,currency,debtor_name,debtor_account_IBAN,debtor_agent_BIC,creditor_name,creditor_account_IBAN,creditor_agent_BIC,purpose_code,remittance_information
1,TXN-001,2026-08-03,1250.00,EUR,Acme Global Corp,DE89370400440532013000,DEUTDEFFXXX,Supplier SARL,FR1420041010050500013M02606,BNPAFRPPXXX,SUPP,INVOICE-2026-4411
2,TXN-002,2026-08-03,890.50,EUR,Acme Global Corp,DE89370400440532013000,DEUTDEFFXXX,Northwind Ltd,GB29NWBK60161331926819,NWBKGB2LXXX,SUPP,INVOICE-2026-4412`
  },
  "cross-border": {
    label: "Cross-border (GBP)",
    csv: `id,payment_id,requested_execution_date,payment_amount,currency,debtor_name,debtor_account_IBAN,debtor_agent_BIC,creditor_name,creditor_account_IBAN,creditor_agent_BIC,purpose_code,remittance_information
1,XB-001,2026-08-05,4500.00,GBP,Acme Global Corp,DE89370400440532013000,DEUTDEFFXXX,Smith & Sons Ltd,GB29NWBK60161331926819,NWBKGB2LXXX,TRAD,PO-2026-889 R&D`
  },
  "batch-20": {
    label: "Larger batch (20 records)",
    csv: `id,payment_id,requested_execution_date,payment_amount,currency,debtor_name,debtor_account_IBAN,debtor_agent_BIC,creditor_name,creditor_account_IBAN,creditor_agent_BIC,purpose_code,remittance_information\n` +
      Array.from({length: 20}, (_, i) => `${i+1},BATCH-${String(i+1).padStart(3,"0")},2026-08-07,1500.00,EUR,Acme Corp,DE89370400440532013000,DEUTDEFFXXX,Payee ${i+1},FR1420041010050500013M02606,BNPAFRPPXXX,SALA,BATCH-INV-${i+1}`).join("\n")
  }
};

export function errorReportCsv(findings) {
  const head = "row,column,rule,value,message";
  const q = (v) => '"' + String(v || "").replace(/"/g, '""') + '"';
  return head + "\n" + findings.map((f) =>
    [f.row, q(f.column), q(f.rule), q(f.value), q(f.message)].join(",")
  ).join("\n");
}
