/* pacs008 browser demo — page wiring.
 * Connects validation engine, error findings table, and XML generator.
 */

import { parseCsv, validateRecords, toXml, errorReportCsv, SAMPLES } from "./try-demo.js";

document.addEventListener("DOMContentLoaded", () => {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-input");
  const sampleSelect = document.getElementById("sample-select");
  const pasteBtn = document.getElementById("paste-btn");
  const editorBlock = document.getElementById("editor-block");
  const csvInput = document.getElementById("csv-input");
  const runBtn = document.getElementById("run-btn");
  const statusEl = document.getElementById("status");
  const tableWrap = document.getElementById("error-table-wrap");
  const tbody = document.getElementById("error-tbody");
  const overflow = document.getElementById("error-overflow");
  const xmlOut = document.getElementById("xml-out");
  const copyBtn = document.getElementById("copy-btn");
  const downloadBtn = document.getElementById("download-btn");
  const reportBtn = document.getElementById("report-btn");

  let currentXml = "";
  let currentFindings = [];

  function showFindings(findings) {
    if (!tbody || !tableWrap) return;
    tbody.innerHTML = "";
    if (findings.length === 0) {
      tableWrap.hidden = true;
      if (overflow) overflow.hidden = true;
      return;
    }
    findings.slice(0, 50).forEach((f) => {
      const tr = document.createElement("tr");
      const cells = [f.row, f.column, f.rule, f.value, f.message];
      cells.forEach((val) => {
        const td = document.createElement("td");
        td.textContent = val === undefined || val === "" ? "—" : String(val);
        td.style.padding = "0.4rem 0.6rem";
        td.style.borderBottom = "1px solid var(--rule)";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tableWrap.hidden = false;
    if (overflow) {
      const rest = findings.length - 50;
      overflow.hidden = rest <= 0;
      if (rest > 0) overflow.textContent = `…and ${rest} more — download the full error report below.`;
    }
  }

  function processCsvText(text) {
    if (csvInput) csvInput.value = text;
    if (editorBlock) editorBlock.hidden = false;

    const { headers, rows } = parseCsv(text);
    if (rows.length === 0) {
      if (xmlOut) xmlOut.textContent = "No valid records found in CSV input.";
      if (statusEl) {
        statusEl.textContent = "❌ Error: CSV contains no records.";
        statusEl.style.color = "var(--bad)";
      }
      if (copyBtn) copyBtn.disabled = true;
      if (downloadBtn) downloadBtn.disabled = true;
      if (reportBtn) reportBtn.hidden = true;
      showFindings([{ row: 0, column: "file", rule: "empty-file", value: "", message: "File is empty or contains no records" }]);
      return;
    }

    const findings = validateRecords(headers, rows);
    currentFindings = findings;
    showFindings(findings);

    if (findings.length > 0) {
      currentXml = "";
      if (xmlOut) xmlOut.textContent = "Validation failed. Please resolve the findings above to generate pacs.008.001.13 XML.";
      if (statusEl) {
        statusEl.textContent = `❌ Validation Failed: ${findings.length} issue(s) detected across ${rows.length} record(s).`;
        statusEl.style.color = "var(--bad)";
      }
      if (copyBtn) copyBtn.disabled = true;
      if (downloadBtn) downloadBtn.disabled = true;
      if (reportBtn) reportBtn.hidden = false;
    } else {
      currentXml = toXml(rows);
      if (xmlOut) xmlOut.textContent = currentXml;
      if (statusEl) {
        statusEl.textContent = `✅ Successfully validated ${rows.length} transaction(s) against IBAN, BIC, date, amount, and structural rules.`;
        statusEl.style.color = "var(--ok)";
      }
      if (copyBtn) copyBtn.disabled = false;
      if (downloadBtn) downloadBtn.disabled = false;
      if (reportBtn) reportBtn.hidden = true;
    }
  }

  if (dropzone) {
    dropzone.addEventListener("click", () => fileInput && fileInput.click());
    dropzone.addEventListener("dragover", (e) => { e.preventDefault(); dropzone.style.borderColor = "var(--link)"; });
    dropzone.addEventListener("dragleave", () => { dropzone.style.borderColor = "var(--rule-strong)"; });
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--rule-strong)";
      const file = e.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => processCsvText(evt.target.result);
        reader.readAsText(file);
      }
    });
  }

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => processCsvText(evt.target.result);
        reader.readAsText(file);
      }
    });
  }

  if (sampleSelect) {
    sampleSelect.addEventListener("change", () => {
      const val = sampleSelect.value;
      if (SAMPLES[val]) {
        processCsvText(SAMPLES[val].csv);
      }
    });
  }

  if (pasteBtn) {
    pasteBtn.addEventListener("click", () => {
      if (editorBlock) editorBlock.hidden = false;
      if (csvInput) csvInput.focus();
    });
  }

  if (runBtn) {
    runBtn.addEventListener("click", () => {
      if (csvInput) processCsvText(csvInput.value);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (currentXml) {
        navigator.clipboard.writeText(currentXml).then(() => {
          const orig = copyBtn.textContent;
          copyBtn.textContent = "Copied!";
          setTimeout(() => { copyBtn.textContent = orig; }, 2000);
        });
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      if (currentXml) {
        const blob = new Blob([currentXml], { type: "application/xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "pacs.008.001.13-payment.xml";
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }

  if (reportBtn) {
    reportBtn.addEventListener("click", () => {
      if (currentFindings.length > 0) {
        const csv = errorReportCsv(currentFindings);
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "pacs008-validation-report.csv";
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  }
});
