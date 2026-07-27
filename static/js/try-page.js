/* pacs008 browser demo — page wiring.
 * Adapted 1-to-1 from pain001 try-page.js benchmark.
 */

import { parseCsv, toXml, SAMPLES } from "./try-demo.js";

document.addEventListener("DOMContentLoaded", () => {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-input");
  const sampleSelect = document.getElementById("sample-select");
  const pasteBtn = document.getElementById("paste-btn");
  const editorBlock = document.getElementById("editor-block");
  const csvInput = document.getElementById("csv-input");
  const runBtn = document.getElementById("run-btn");
  const statusEl = document.getElementById("status");
  const xmlOut = document.getElementById("xml-out");
  const copyBtn = document.getElementById("copy-btn");
  const downloadBtn = document.getElementById("download-btn");

  let currentXml = "";

  function processCsvText(text) {
    csvInput.value = text;
    editorBlock.hidden = false;
    const { rows } = parseCsv(text);
    if (rows.length > 0) {
      currentXml = toXml(rows);
      xmlOut.textContent = currentXml;
      statusEl.textContent = `✅ Successfully validated ${rows.length} transaction(s) and generated pacs.008.001.13 XML.`;
      statusEl.style.color = "var(--ok)";
      copyBtn.disabled = false;
      downloadBtn.disabled = false;
    } else {
      xmlOut.textContent = "No valid records found in CSV input.";
      statusEl.textContent = "⚠️ Please provide valid CSV data.";
      statusEl.style.color = "var(--bad)";
      copyBtn.disabled = true;
      downloadBtn.disabled = true;
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
      editorBlock.hidden = false;
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
});
