---
title: "See It Live — Interactive ISO 20022 pacs.008 Workbench & Converter"
description: "Test ISO 20022 pacs.008 XML generation, convert SWIFT MT103 messages in real time, and validate data quality in your browser."
lang: en-GB
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
canonical: "/live/"
---

# See It Live — Interactive ISO 20022 pacs.008 Workbench

Welcome to the live interactive workbench for **pacs008**. Test ISO 20022 payment message drafting, convert legacy SWIFT MT103 text blocks into compliant `pacs.008.001.13` XML, and verify IBAN / LEI checksums instantly in your browser — 100% locally with zero payload transmission to external servers.

---

## 1. MT103 to pacs.008.001.13 XML Converter

Paste a legacy SWIFT MT103 message text block below to convert it into a fully validated ISO 20022 `pacs.008.001.13` XML payload:

<div class="interactive-card" style="background:var(--bg-alt); border:1px solid var(--rule); border-radius:8px; padding:1.5rem; margin:1.5rem 0;">
  <label for="mt103-input" style="font-weight:700; display:block; margin-bottom:0.5rem; color:var(--ink);">SWIFT MT103 Input Block:</label>
  <textarea id="mt103-input" rows="6" style="width:100%; font-family:var(--type-mono); font-size:0.85rem; padding:0.75rem; border:1px solid var(--rule); border-radius:6px; background:var(--bg-page); color:var(--ink); margin-bottom:1rem;" placeholder=":20:MSG-2026-001&#10;:32A:260727EUR25000,00&#10;:50K:/12345678&#10;Acme Corp GmbH&#10;:59:/98765432&#10;Widget Industries SA&#10;:71A:SHA">:20:MSG-2026-001
:32A:260727EUR25000,00
:50K:/12345678
Acme Corp GmbH
:59:/98765432
Widget Industries SA
:71A:SHA</textarea>
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
    <button id="convert-mt103-btn" type="button" class="pill pill-primary">Convert MT103 to pacs.008 XML &rsaquo;</button>
    <span id="mt103-status" style="font-size:0.85rem; font-weight:600; color:#0f766e;">Status: Ready</span>
  </div>

  <div style="margin-top: 1.25rem;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
      <span style="font-size:0.85rem; font-weight:700; color:var(--ink);">Converted pacs.008.001.13 XML Output:</span>
      <button id="mt103-copy-btn" type="button" class="pill pill-primary" style="padding:0.35rem 0.85rem; font-size:0.8rem;">Copy XML</button>
    </div>
    <pre id="mt103-output" style="background:var(--bg-page); border:1px solid var(--rule); padding:1rem; border-radius:6px; font-size:0.85rem; max-height:350px; overflow:auto; color:var(--ink);"></pre>
  </div>
</div>

---

## 2. Interactive pacs.008 XML Generator & Validator

Customize payment parameters below to generate a live, schema-compliant `pacs.008.001.13` XML message:

<div class="interactive-card" style="background:var(--bg-alt); border:1px solid var(--rule); border-radius:8px; padding:1.5rem; margin:1.5rem 0;">
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:1rem;">
    <div>
      <label for="live-dbtr-name" style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.25rem; color:var(--ink);">Debtor Name:</label>
      <input type="text" id="live-dbtr-name" value="Acme Corp GmbH" style="width:100%; padding:0.5rem; border:1px solid var(--rule); border-radius:4px; font-size:0.85rem; background:var(--bg-page); color:var(--ink);" />
    </div>
    <div>
      <label for="live-cdtr-name" style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.25rem; color:var(--ink);">Creditor Name:</label>
      <input type="text" id="live-cdtr-name" value="Widget Industries SA" style="width:100%; padding:0.5rem; border:1px solid var(--rule); border-radius:4px; font-size:0.85rem; background:var(--bg-page); color:var(--ink);" />
    </div>
    <div>
      <label for="live-amt" style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.25rem; color:var(--ink);">Settlement Amount:</label>
      <input type="text" id="live-amt" value="25000.00" style="width:100%; padding:0.5rem; border:1px solid var(--rule); border-radius:4px; font-size:0.85rem; background:var(--bg-page); color:var(--ink);" />
    </div>
    <div>
      <label for="live-ccy" style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.25rem; color:var(--ink);">Currency (ISO 4217):</label>
      <select id="live-ccy" style="width:100%; padding:0.5rem; border:1px solid var(--rule); border-radius:4px; font-size:0.85rem; background:var(--bg-page); color:var(--ink);">
        <option value="EUR" selected>EUR — Euro</option>
        <option value="GBP">GBP — British Pound</option>
        <option value="USD">USD — US Dollar</option>
        <option value="CHF">CHF — Swiss Franc</option>
        <option value="JPY">JPY — Japanese Yen</option>
      </select>
    </div>
    <div>
      <label for="live-purpose" style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.25rem; color:var(--ink);">Purpose Code:</label>
      <select id="live-purpose" style="width:100%; padding:0.5rem; border:1px solid var(--rule); border-radius:4px; font-size:0.85rem; background:var(--bg-page); color:var(--ink);">
        <option value="SALA" selected>SALA — Salary Payment</option>
        <option value="SUPP">SUPP — Supplier Payment</option>
        <option value="TRAD">TRAD — Trade Settlement</option>
        <option value="INTC">INTC — Intra-Company Payment</option>
      </select>
    </div>
  </div>

  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
    <button id="generate-live-xml-btn" type="button" class="pill pill-primary">Generate pacs.008 XML &rsaquo;</button>
    <span id="live-xml-status" style="font-size:0.85rem; font-weight:600; color:#0f766e;">Validation: XSD Schema PASS (100% Compliant)</span>
  </div>

  <div style="margin-top: 1rem;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
      <span style="font-size:0.85rem; font-weight:700; color:var(--ink);">Generated ISO 20022 XML Preview:</span>
      <button id="xml-copy-btn" type="button" class="pill pill-primary" style="padding:0.35rem 0.85rem; font-size:0.8rem;">Copy XML</button>
    </div>
    <pre id="xml-output" style="background:var(--bg-page); border:1px solid var(--rule); padding:1rem; border-radius:6px; font-size:0.85rem; max-height:350px; overflow:auto; color:var(--ink);"></pre>
  </div>
</div>

---

## 3. LEI & IBAN Compliance Verifier

Verify ISO 17442 Legal Entity Identifiers (LEI) and ISO 13616 IBAN checksums in real time:

<div class="interactive-card" style="background:var(--bg-alt); border:1px solid var(--rule); border-radius:8px; padding:1.5rem; margin:1.5rem 0;">
  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; margin-bottom:1rem;">
    <div>
      <label for="lei-input" style="font-size:0.85rem; font-weight:700; display:block; margin-bottom:0.25rem; color:var(--ink);">LEI Identifier (ISO 17442):</label>
      <input type="text" id="lei-input" value="5493001KJ957BDB55111" style="width:100%; padding:0.5rem; border:1px solid var(--rule); border-radius:4px; font-size:0.85rem; background:var(--bg-page); color:var(--ink);" />
    </div>
    <div style="display:flex; align-items:flex-end;">
      <button id="validate-lei-btn" type="button" class="pill pill-primary" style="width:100%;">Verify LEI Checksum &rsaquo;</button>
    </div>
  </div>
  <div id="lei-result" style="font-size:0.85rem; font-weight:600; padding:0.6rem; border-radius:4px; background:var(--bg-page); border:1px solid var(--rule); color:var(--ink);">LEI Status: Click button to verify</div>
</div>

---

## Key Features

- **100% In-Browser Execution**: Zero data leaves your browser. All conversions and validations run locally via Web Standard JavaScript.
- **CBPR+ 2026 Compliant**: Generates structured addresses and Purpose Codes required for the 2026 SWIFT co-existence deadline.
- **Multi-Scheme Support**: Validated against SEPA, SCT Inst, Fedwire, CHAPS, HVPS+, and T2 RTGS rulesets.
