import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

declare const window: any;

beforeAll(() => {
  const tools = readFileSync(resolve(__dirname, "../static/js/pacs008-tools.js"), "utf-8");
  const ingest = readFileSync(resolve(__dirname, "../static/js/xml-ingest.js"), "utf-8");
  new Function(tools)();
  new Function(ingest)();
});

const NS = "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.13";

function doc(parties: string, extra = "") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="${NS}">
  <FIToFICstmrCdtTrf>
    <GrpHdr><MsgId>M1</MsgId>${extra}</GrpHdr>
    <CdtTrfTxInf>${parties}</CdtTrfTxInf>
  </FIToFICstmrCdtTrf>
</Document>`;
}

const structured = `<Dbtr><Nm>Acme</Nm><PstlAdr><StrtNm>Hauptstrasse</StrtNm><TwnNm>Berlin</TwnNm><Ctry>DE</Ctry></PstlAdr></Dbtr>`;
const unstructured = `<Dbtr><Nm>Acme</Nm><PstlAdr><AdrLine>Hauptstrasse 42, 10115 Berlin, Germany</AdrLine></PstlAdr></Dbtr>`;

describe("XML ingest: parsing", () => {
  it("accepts well-formed ISO 20022 XML", () => {
    const r = window.pacs008XmlIngest.inspect(doc(structured));
    expect(r.parsed).toBe(true);
    expect(r.messageType).toBe("pacs.008.001.13");
  });

  it("reports malformed XML rather than throwing", () => {
    const r = window.pacs008XmlIngest.inspect("<Document><unclosed>");
    expect(r.parsed).toBe(false);
    expect(r.findings[0].rule).toBe("XML-PARSE");
  });

  it("rejects a non-ISO namespace", () => {
    const r = window.pacs008XmlIngest.inspect(
      '<Document xmlns="http://example.com/not-iso"><A/></Document>'
    );
    expect(r.findings.some((f: any) => f.rule === "XML-NS")).toBe(true);
  });

  it("rejects a wrong root element", () => {
    const r = window.pacs008XmlIngest.inspect(`<Envelope xmlns="${NS}"><A/></Envelope>`);
    expect(r.findings.some((f: any) => f.rule === "XML-ROOT")).toBe(true);
  });
});

describe("XML ingest: scheme address rules", () => {
  it("passes a structured address", () => {
    const r = window.pacs008XmlIngest.inspect(doc(structured));
    expect(r.findings.filter((f: any) => f.severity === "error")).toEqual([]);
    expect(r.parties[0].status).toBe("FULLY_STRUCTURED");
  });

  it("flags a fully unstructured address with a rule ID", () => {
    const r = window.pacs008XmlIngest.inspect(doc(unstructured));
    const err = r.findings.find((f: any) => f.layer === "scheme");
    expect(err).toBeTruthy();
    expect(err.rule).toMatch(/^CBPR-ADDR-00[23]$/);
    expect(err.path).toContain("PstlAdr");
  });

  it("agrees with the shared classifier", () => {
    const direct = window.pacs008Tools.validateAddress("Hauptstrasse", "", "Berlin", "DE", "", "");
    const viaXml = window.pacs008XmlIngest.inspect(doc(structured));
    expect(viaXml.parties[0].status).toBe(direct.status);
  });
});

describe("XML ingest: honesty about layers", () => {
  it("marks XSD and ISO semantic as not evaluated", () => {
    const notRun = window.pacs008XmlIngest.LAYERS.filter((l: any) => !l.run).map((l: any) => l.id);
    expect(notRun).toContain("xsd");
    expect(notRun).toContain("iso");
  });

  it("counts transactions without claiming to validate the declared count", () => {
    const r = window.pacs008XmlIngest.inspect(doc(structured, "<NbOfTxs>5</NbOfTxs>"));
    expect(r.txCount).toBe(1);
    expect(r.declaredCount).toBe("5");
    // The mismatch is surfaced, but not as a scheme/XSD error.
    expect(r.findings.some((f: any) => f.rule === "ISO-COUNT")).toBe(false);
  });

  it("enforces the 2 MB limit", () => {
    expect(window.pacs008XmlIngest.MAX_FILE_BYTES).toBe(2 * 1024 * 1024);
  });

  it("makes no network calls", () => {
    const src = readFileSync(resolve(__dirname, "../static/js/xml-ingest.js"), "utf-8");
    expect(src).not.toMatch(/\bfetch\s*\(|XMLHttpRequest|WebSocket|navigator\.sendBeacon/);
  });
});
