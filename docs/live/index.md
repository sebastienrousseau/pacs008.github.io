---
title: "Try pacs008 Live in Your Browser"
description: "Generate, validate, and convert ISO 20022 pacs.008 payment messages in real time. 100% in-browser, zero data transmitted."
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

Generate, validate, and convert ISO 20022 pacs.008 payment messages in real time directly in your browser. No registration or server upload required — 100% local processing.

---

<div class="workbench-card" style="background:var(--bg-alt); border:1px solid var(--rule); border-radius:12px; padding:1.75rem; margin:1.5rem 0;">
  <h2 style="margin-top:0; font-family:var(--type-display); font-size:1.35rem; color:var(--ink);">1. Generate pacs.008.001.13 Payment XML</h2>
  <p style="font-size:0.9rem; color:var(--ink-soft); margin-bottom:1.25rem;">Draft compliant FI-to-FI customer credit transfer messages with instant client-side schema validation.</p>

  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; align-items:start;">
    <!-- Left Column: Controls -->
    <div style="display:flex; flex-direction:column; gap:0.85rem;">
      <div>
        <label for="live-dbtr-name" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute); display:block; margin-bottom:0.35rem;">Debtor Name:</label>
        <input type="text" id="live-dbtr-name" value="Acme Corp GmbH" style="width:100%; padding:0.6rem 0.75rem; border:1px solid var(--rule-strong); border-radius:6px; font-size:0.9rem; background:var(--bg-page); color:var(--ink);" />
      </div>
      <div>
        <label for="live-cdtr-name" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute); display:block; margin-bottom:0.35rem;">Creditor Name:</label>
        <input type="text" id="live-cdtr-name" value="Widget Industries SA" style="width:100%; padding:0.6rem 0.75rem; border:1px solid var(--rule-strong); border-radius:6px; font-size:0.9rem; background:var(--bg-page); color:var(--ink);" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
        <div>
          <label for="live-amt" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute); display:block; margin-bottom:0.35rem;">Amount:</label>
          <input type="text" id="live-amt" value="25000.00" style="width:100%; padding:0.6rem 0.75rem; border:1px solid var(--rule-strong); border-radius:6px; font-size:0.9rem; background:var(--bg-page); color:var(--ink);" />
        </div>
        <div>
          <label for="live-ccy" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute); display:block; margin-bottom:0.35rem;">Currency:</label>
          <select id="live-ccy" style="width:100%; padding:0.6rem 0.75rem; border:1px solid var(--rule-strong); border-radius:6px; font-size:0.9rem; background:var(--bg-page); color:var(--ink);">
            <option value="EUR" selected>EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
      </div>
      <div>
        <label for="live-purpose" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute); display:block; margin-bottom:0.35rem;">Purpose Code:</label>
        <select id="live-purpose" style="width:100%; padding:0.6rem 0.75rem; border:1px solid var(--rule-strong); border-radius:6px; font-size:0.9rem; background:var(--bg-page); color:var(--ink);">
          <option value="SALA" selected>SALA — Salary Payment</option>
          <option value="SUPP">SUPP — Supplier Payment</option>
          <option value="TRAD">TRAD — Trade Settlement</option>
          <option value="INTC">INTC — Intra-Company</option>
        </select>
      </div>
      <div style="margin-top:0.5rem;">
        <button id="generate-live-xml-btn" type="button" class="pill pill-primary" style="width:100%;">Generate pacs.008 XML &rsaquo;</button>
      </div>
    </div>

    <!-- Right Column: Code Preview & Copy -->
    <div style="background:var(--code-bg, #14161c); border-radius:8px; border:1px solid var(--rule); padding:1rem; color:var(--code-text, #f2f3f5); position:relative;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem;">
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#38bdf8;">XML Preview Output</span>
        <button id="xml-copy-btn" type="button" style="padding:0.25rem 0.65rem; font-size:0.75rem; font-weight:600; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; border-radius:4px; cursor:pointer;">Copy XML</button>
      </div>
      <pre id="xml-output" style="font-family:var(--type-mono); font-size:0.8rem; line-height:1.45; white-space:pre-wrap; word-break:break-all; max-height:380px; overflow:auto; margin:0; color:#e2e8f0;"></pre>
    </div>
  </div>
</div>

---

<div class="workbench-card" style="background:var(--bg-alt); border:1px solid var(--rule); border-radius:12px; padding:1.75rem; margin:1.5rem 0;">
  <h2 style="margin-top:0; font-family:var(--type-display); font-size:1.35rem; color:var(--ink);">2. Convert Legacy SWIFT MT103 to pacs.008 XML</h2>
  <p style="font-size:0.9rem; color:var(--ink-soft); margin-bottom:1.25rem;">Transform FIN MT103 text blocks into ISO 20022 pacs.008 XML structures with 100% data fidelity.</p>

  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem; align-items:start;">
    <!-- Left Column: Input MT103 -->
    <div style="display:flex; flex-direction:column; gap:0.85rem;">
      <label for="mt103-input" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute);">SWIFT MT103 Text Block:</label>
      <textarea id="mt103-input" rows="9" style="width:100%; font-family:var(--type-mono); font-size:0.85rem; padding:0.75rem; border:1px solid var(--rule-strong); border-radius:6px; background:var(--bg-page); color:var(--ink); font-weight:500;" placeholder=":20:MSG-2026-001&#10;:32A:260727EUR25000,00&#10;:50K:/12345678&#10;Acme Corp GmbH&#10;:59:/98765432&#10;Widget Industries SA&#10;:71A:SHA">:20:MSG-2026-001
:32A:260727EUR25000,00
:50K:/12345678
Acme Corp GmbH
:59:/98765432
Widget Industries SA
:71A:SHA</textarea>
      <button id="convert-mt103-btn" type="button" class="pill pill-primary" style="width:100%;">Convert MT103 &rsaquo;</button>
    </div>

    <!-- Right Column: Converted XML Output -->
    <div style="background:var(--code-bg, #14161c); border-radius:8px; border:1px solid var(--rule); padding:1rem; color:var(--code-text, #f2f3f5); position:relative;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem;">
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#38bdf8;">Converted pacs.008 XML</span>
        <button id="mt103-copy-btn" type="button" style="padding:0.25rem 0.65rem; font-size:0.75rem; font-weight:600; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; border-radius:4px; cursor:pointer;">Copy XML</button>
      </div>
      <pre id="mt103-output" style="font-family:var(--type-mono); font-size:0.8rem; line-height:1.45; white-space:pre-wrap; word-break:break-all; max-height:380px; overflow:auto; margin:0; color:#e2e8f0;"></pre>
    </div>
  </div>
</div>

---

<div class="workbench-card" style="background:var(--bg-alt); border:1px solid var(--rule); border-radius:12px; padding:1.75rem; margin:1.5rem 0;">
  <h2 style="margin-top:0; font-family:var(--type-display); font-size:1.35rem; color:var(--ink);">3. LEI (ISO 17442) Compliance Verifier</h2>
  <p style="font-size:0.9rem; color:var(--ink-soft); margin-bottom:1.25rem;">Verify Legal Entity Identifier structure and MOD-97 checksums instantly.</p>

  <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1rem; align-items:end;">
    <div>
      <label for="lei-input" style="font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:var(--ink-mute); display:block; margin-bottom:0.35rem;">LEI Identifier (20 Alphanumeric):</label>
      <input type="text" id="lei-input" value="5493001KJ957BDB55111" style="width:100%; padding:0.6rem 0.75rem; border:1px solid var(--rule-strong); border-radius:6px; font-size:0.9rem; background:var(--bg-page); color:var(--ink);" />
    </div>
    <div>
      <button id="validate-lei-btn" type="button" class="pill pill-primary" style="width:100%;">Verify LEI &rsaquo;</button>
    </div>
  </div>
  <div id="lei-result" style="margin-top:1rem; font-size:0.85rem; font-weight:600; padding:0.75rem; border-radius:6px; background:var(--bg-page); border:1px solid var(--rule); color:var(--ink);">LEI Status: Click button to verify</div>
</div>

---

## Technical Security Guarantee

- **Client-Side Storage Only**: No network requests or telemetry are sent to external web servers.
- **2026 Readiness**: Generates structured addresses and mandatory Purpose Codes required by SWIFT CBPR+ and Bank of England CHAPS.
