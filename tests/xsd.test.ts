import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, existsSync, readdirSync } from "fs";
import { resolve } from "path";
import { validateXML } from "xmllint-wasm";

/**
 * Browser XSD validation.
 *
 * The engine itself is exercised through xmllint-wasm directly, because
 * happy-dom has no Worker or WebAssembly host. That is honest about what is
 * covered: this proves the schema and the validator agree on what a valid
 * pacs.008 is, and that structural errors are caught. It does not prove the
 * worker plumbing, which was verified manually in a real browser.
 */

const SCHEMA_PATH = resolve(__dirname, "../static/schemas/pacs.008.001.13.xsd");
const NS = "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.13";

let xsd: string;
beforeAll(() => {
  xsd = readFileSync(SCHEMA_PATH, "utf-8");
});

const VALID = `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="${NS}"><FIToFICstmrCdtTrf>
<GrpHdr><MsgId>M1</MsgId><CreDtTm>2026-01-15T10:30:00</CreDtTm><NbOfTxs>1</NbOfTxs>
<SttlmInf><SttlmMtd>CLRG</SttlmMtd></SttlmInf></GrpHdr>
<CdtTrfTxInf><PmtId><EndToEndId>E2E-1</EndToEndId><TxId>TX1</TxId></PmtId>
<IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt><ChrgBr>SHAR</ChrgBr>
<Dbtr><Nm>Acme</Nm></Dbtr><DbtrAgt><FinInstnId><BICFI>DEUTDEFF</BICFI></FinInstnId></DbtrAgt>
<CdtrAgt><FinInstnId><BICFI>COBADEFF</BICFI></FinInstnId></CdtrAgt><Cdtr><Nm>Widget</Nm></Cdtr>
</CdtTrfTxInf></FIToFICstmrCdtTrf></Document>`;

async function check(xml: string) {
  return validateXML({
    xml: [{ fileName: "message.xml", contents: xml }],
    schema: [{ fileName: "pacs.008.001.13.xsd", contents: xsd }],
  });
}

const manifest = JSON.parse(
  readFileSync(resolve(__dirname, "../static/schemas/manifest.json"), "utf-8")
);

describe("XSD: schema manifest", () => {
  it("is generated from the schemas actually present, not hardcoded", () => {
    const onDisk = readdirSync(resolve(__dirname, "../static/schemas"))
      .filter((f) => f.endsWith(".xsd"))
      .map((f) => f.replace(/\.xsd$/, ""))
      .sort();
    expect(Object.keys(manifest.schemas).sort()).toEqual(onDisk);
  });

  it("every listed schema is served", () => {
    for (const entry of Object.values<any>(manifest.schemas)) {
      expect(
        existsSync(resolve(__dirname, "../public/schemas", entry.file)),
        `${entry.file} is listed but not served`
      ).toBe(true);
    }
  });

  it("every schema namespace matches its message type", () => {
    for (const [type, entry] of Object.entries<any>(manifest.schemas)) {
      expect(entry.namespace).toBe(`urn:iso:std:iso:20022:tech:xsd:${type}`);
    }
  });

  it("covers the families the November 2026 and 2027 obligations touch", () => {
    const families = new Set(Object.values<any>(manifest.schemas).map((e) => e.family));
    // camt.110 receive-mandatory Nov 2026; camt.111 mandatory Nov 2027.
    expect(families.has("camt.110")).toBe(true);
    expect(families.has("camt.111")).toBe(true);
    // pain.001 is the MT101 CBPR+ relay destination.
    expect(families.has("pain.001")).toBe(true);
    expect(families.has("pacs.008")).toBe(true);
  });

  it("records a hash and stated provenance for each schema", () => {
    for (const [type, entry] of Object.entries<any>(manifest.schemas)) {
      expect(entry.sha256, type).toMatch(/^sha256:[0-9a-f]{64}$/);
      // Not every schema states an ISO 20022 version: the 2009-era
      // SWIFTStandards Workstation output carries only a generator line.
      // Require that something is recorded, not that a version was invented.
      expect(entry.isoVersion || entry.provenance, `${type} states no provenance`).toBeTruthy();
    }
  });
});

describe("XSD: schema asset", () => {
  it("is served from this origin", () => {
    expect(existsSync(resolve(__dirname, "../public/schemas/pacs.008.001.13.xsd"))).toBe(true);
  });

  it("carries the ISO 20022 attribution required by the terms of use", () => {
    const notice = readFileSync(resolve(__dirname, "../public/schemas/README.txt"), "utf-8");
    expect(notice).toContain("not the official ISO 20022 website");
    expect(notice).toContain("iso20022.org");
  });

  it("records the ISO 20022 version it was generated from", () => {
    expect(xsd).toMatch(/ISO 20022 version\s*:/);
  });
});

describe("XSD: validation behaviour", () => {
  it("accepts a well-formed pacs.008", async () => {
    const r = await check(VALID);
    expect(r.errors.map((e: any) => e.message)).toEqual([]);
    expect(r.valid).toBe(true);
  }, 60000);

  // This is the check the browser could not previously make at all: element
  // order is an XSD sequence constraint, invisible to well-formedness parsing.
  it("rejects wrong element order", async () => {
    const r = await check(
      VALID.replace(
        '<IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt><ChrgBr>SHAR</ChrgBr>',
        '<ChrgBr>SHAR</ChrgBr><IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>'
      )
    );
    expect(r.valid).toBe(false);
    expect(r.errors[0].message).toMatch(/ChrgBr/);
  }, 60000);

  it("rejects a missing mandatory element", async () => {
    const r = await check(VALID.replace("<ChrgBr>SHAR</ChrgBr>", ""));
    expect(r.valid).toBe(false);
  }, 60000);

  it("rejects an undeclared element", async () => {
    const r = await check(VALID.replace("<Cdtr><Nm>Widget</Nm></Cdtr>", "<NotARealElement/>"));
    expect(r.valid).toBe(false);
  }, 60000);
});

describe("XSD: client contract", () => {
  const client = readFileSync(resolve(__dirname, "../static/js/xsd-client.js"), "utf-8");
  const worker = readFileSync(resolve(__dirname, "../static/js/xsd-worker.js"), "utf-8");

  it("detects the message type from the document namespace", () => {
    const m = VALID.match(/xmlns=["']urn:iso:std:iso:20022:tech:xsd:([\w.]+)["']/);
    expect(m?.[1]).toBe("pacs.008.001.13");
  });

  // The whole point of the feature: an engine or schema that fails to load
  // must never be reported as a pass.
  it("reports not-evaluated rather than passing when the engine cannot run", () => {
    expect(worker).toMatch(/type:\s*["']unavailable["']/);
    expect(client).toMatch(/evaluated:\s*false/);
    expect(client).toContain("This is not a pass");
  });

  it("surfaces the schema hash so a result names what it validated", () => {
    expect(worker).toContain("crypto.subtle.digest");
    expect(client).toContain("schemaHash");
  });

  it("makes no request to any other origin", () => {
    expect(worker).not.toMatch(/https?:\/\//);
  });
});

describe("XSD: registry reflects reality", () => {
  const capability = JSON.parse(
    readFileSync(resolve(__dirname, "../data/capability-registry.json"), "utf-8")
  );

  it("records browser XSD as beta, not stable or planned", () => {
    expect(capability.capabilities.layer_4_xsd_structural.browser).toBe("beta");
  });

  it("explains in evidence why it is only beta", () => {
    expect(capability.capabilities.layer_4_xsd_structural.evidence).toMatch(
      /only pacs\.008\.001\.13|not evaluated/i
    );
  });

  it("records XML parsing as implemented now that DOMParser is used", () => {
    expect(capability.capabilities.layer_3_xml_syntax_ns.browser).toBe("stable");
  });
});
