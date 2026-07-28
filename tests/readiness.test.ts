import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * The scanner is a browser script that attaches to window and wires DOM on
 * DOMContentLoaded. Load both it and the classifier it delegates to into this
 * happy-dom environment, then exercise the pure logic through window.
 */
declare const window: any;

beforeAll(() => {
  const tools = readFileSync(resolve(__dirname, "../static/js/pacs008-tools.js"), "utf-8");
  const scanner = readFileSync(resolve(__dirname, "../static/js/address-readiness.js"), "utf-8");
  // eslint-disable-next-line no-new-func
  new Function(tools)();
  new Function(scanner)();
});

const rows = (csv: string) => window.pacs008Readiness.parseCsv(csv);

describe("Readiness scanner: CSV parsing", () => {
  it("parses quoted fields containing the delimiter", () => {
    const r = rows('name,town\n"Acme, Inc",Berlin\n');
    expect(r[1][0]).toBe("Acme, Inc");
    expect(r[1][1]).toBe("Berlin");
  });

  it("handles escaped quotes", () => {
    expect(rows('a\n"say ""hi"""\n')[1][0]).toBe('say "hi"');
  });

  it("detects semicolon and tab delimiters", () => {
    expect(rows("name;town\nAcme;Berlin\n")[1]).toEqual(["Acme", "Berlin"]);
    expect(rows("name\ttown\nAcme\tBerlin\n")[1]).toEqual(["Acme", "Berlin"]);
  });

  it("strips a UTF-8 BOM", () => {
    expect(rows("﻿name,town\nAcme,Berlin\n")[0][0]).toBe("name");
  });

  it("does not silently drop malformed rows", () => {
    // Three data rows in, three out — even ragged ones.
    const r = rows("a,b\n1,2\n3\n4,5,6\n");
    expect(r.length).toBe(4);
  });
});

describe("Readiness scanner: column mapping", () => {
  it("matches ISO element names and snake_case alike", () => {
    const map = window.pacs008Readiness.mapColumns(["TwnNm", "Ctry", "street_name"]);
    expect(map.town).toBe(0);
    expect(map.country).toBe(1);
    expect(map.street).toBe(2);
  });
});

describe("Readiness scanner: classification", () => {
  const csv = [
    "name,party,street,town,country,address_line1",
    "Fully,Debtor,High St,Berlin,DE,",
    "Hybrid,Debtor,,Paris,FR,12 Rue Test",
    "NoTown,Creditor,High St,,DE,",
    "NoCountry,Creditor,High St,Berlin,,",
  ].join("\n");

  it("counts each classification", () => {
    const r = window.pacs008Readiness.scan(rows(csv));
    expect(r.total).toBe(4);
    expect(r.counts.FULLY_STRUCTURED).toBe(1);
    expect(r.counts.HYBRID).toBe(1);
    expect(r.counts.UNSTRUCTURED).toBe(2);
  });

  it("computes a readiness score from compliant records", () => {
    expect(window.pacs008Readiness.scan(rows(csv)).score).toBe(50);
  });

  it("breaks results down by party", () => {
    const r = window.pacs008Readiness.scan(rows(csv));
    expect(r.byParty.Debtor.FULLY_STRUCTURED).toBe(1);
    expect(r.byParty.Creditor.UNSTRUCTURED).toBe(2);
  });

  it("names the missing element in findings", () => {
    const r = window.pacs008Readiness.scan(rows(csv));
    expect(r.findings.find((f: any) => f.name === "NoTown").missing).toContain("TwnNm");
    expect(r.findings.find((f: any) => f.name === "NoCountry").missing).toContain("Ctry");
  });

  it("rejects a country code that is not two letters", () => {
    const r = window.pacs008Readiness.scan(
      rows("name,town,country\nBad,Berlin,DEU\n")
    );
    expect(r.counts.UNSTRUCTURED).toBe(1);
  });

  it("agrees with the single-record classifier", () => {
    const single = window.pacs008Tools.validateAddress("High St", "", "Berlin", "DE", "", "");
    const batch = window.pacs008Readiness.scan(
      rows("street,town,country\nHigh St,Berlin,DE\n")
    );
    expect(single.status).toBe("FULLY_STRUCTURED");
    expect(batch.counts.FULLY_STRUCTURED).toBe(1);
  });
});

describe("Readiness scanner: export safety", () => {
  it("neutralises spreadsheet formula injection", () => {
    for (const dangerous of ["=cmd()", "+1+1", "-1", "@SUM(A1)"]) {
      expect(window.pacs008Readiness.csvSafe(dangerous)).toMatch(/^"'/);
    }
  });

  it("leaves ordinary values unprefixed but quoted", () => {
    expect(window.pacs008Readiness.csvSafe("Berlin")).toBe('"Berlin"');
  });

  it("escapes embedded quotes", () => {
    expect(window.pacs008Readiness.csvSafe('a"b')).toBe('"a""b"');
  });

  it("produces a remediation CSV with a header and only failing rows", () => {
    const r = window.pacs008Readiness.scan(
      rows("name,town,country\nOk,Berlin,DE\nBad,,DE\n")
    );
    const out = window.pacs008Readiness.buildRemediationCsv(r).split("\n");
    expect(out[0]).toBe("Row,Party,Name,Issue,Classification");
    expect(out.length).toBe(2);
    expect(out[1]).toContain("Bad");
  });
});

describe("Readiness scanner: honesty about layers", () => {
  it("enforces a real file-size limit", () => {
    expect(window.pacs008Readiness.MAX_FILE_BYTES).toBe(2 * 1024 * 1024);
  });

  it("declares XSD and ISO semantic checks as not evaluated", () => {
    const notRun = window.pacs008Readiness.LAYERS_NOT_RUN.join(" ");
    expect(notRun).toContain("XSD");
    expect(notRun).toContain("ISO semantic");
  });

  it("makes no network calls", () => {
    const src = readFileSync(resolve(__dirname, "../static/js/address-readiness.js"), "utf-8");
    expect(src).not.toMatch(/\bfetch\s*\(|XMLHttpRequest|WebSocket|navigator\.sendBeacon/);
  });
});
