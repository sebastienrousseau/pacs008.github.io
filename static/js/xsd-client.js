/**
 * Browser XSD validation, wired into the workbench.
 *
 * Loads the engine only when the user asks for it. The WebAssembly validator
 * plus schema is roughly 850 KB, which is not worth downloading for someone
 * who only wants to classify an address.
 *
 * The rule this module exists to enforce: XSD is reported as **evaluated** only
 * when a schema was actually loaded and libxml2 actually ran. Every other
 * outcome — engine missing, schema 404, worker error — reports
 * "not evaluated", never a pass.
 */
(function () {
  "use strict";

  /** Schemas served from this origin. Extend as more are vendored. */
  var SCHEMAS = {
    "pacs.008.001.13": {
      url: "/schemas/pacs.008.001.13.xsd",
      id: "pacs.008.001.13.xsd",
      namespace: "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.13",
    },
  };

  var worker = null;

  function getWorker() {
    if (!worker) worker = new Worker("/js/xsd-worker.js", { type: "module" });
    return worker;
  }

  /** Message type from the document's namespace, or null if unrecognised. */
  function detectMessageType(xml) {
    var match = xml.match(/xmlns=["']urn:iso:std:iso:20022:tech:xsd:([\w.]+)["']/);
    return match ? match[1] : null;
  }

  /**
   * Validate and resolve with a layered verdict.
   *
   * Resolves — never rejects — because a failure to run is a legitimate
   * outcome that the UI must render as "not evaluated", not as an exception
   * the caller might swallow into a pass.
   */
  function validate(xml, timeoutMs) {
    return new Promise(function (resolve) {
      var messageType = detectMessageType(xml);
      var schema = messageType ? SCHEMAS[messageType] : null;

      if (!schema) {
        resolve({
          evaluated: false,
          reason: messageType
            ? "No schema is published here for " + messageType
            : "Could not determine the message type from the document namespace",
          messageType: messageType,
        });
        return;
      }

      var w;
      try {
        w = getWorker();
      } catch (err) {
        resolve({ evaluated: false, reason: "Worker could not start", messageType: messageType });
        return;
      }

      var settled = false;
      var timer = setTimeout(function () {
        if (settled) return;
        settled = true;
        w.removeEventListener("message", onMessage);
        resolve({ evaluated: false, reason: "Validation timed out", messageType: messageType });
      }, timeoutMs || 30000);

      function onMessage(event) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        w.removeEventListener("message", onMessage);

        var data = event.data || {};
        if (data.type === "result") {
          resolve({
            evaluated: true,
            valid: data.valid,
            errors: data.errors || [],
            schemaId: data.schemaId,
            schemaHash: data.schemaHash,
            messageType: messageType,
          });
        } else {
          resolve({
            evaluated: false,
            reason: data.reason || "The XSD engine did not return a result",
            messageType: messageType,
          });
        }
      }

      w.addEventListener("message", onMessage);
      w.postMessage({ type: "validate", xml: xml, schemaUrl: schema.url, schemaId: schema.id });
    });
  }

  window.pacs008Xsd = {
    validate: validate,
    detectMessageType: detectMessageType,
    SCHEMAS: SCHEMAS,
  };

  // ---- DOM wiring -------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    var runBtn = document.getElementById("xsd-run");
    var source = document.getElementById("xml-paste");
    var fileInput = document.getElementById("xml-file");
    var status = document.getElementById("xsd-status");
    var results = document.getElementById("xsd-results");
    if (!runBtn || !results) return;

    var pendingFileText = null;
    if (fileInput) {
      fileInput.addEventListener("change", function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (e) { pendingFileText = String(e.target.result); };
        reader.readAsText(file);
      });
    }

    function esc(s) {
      return String(s == null ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    runBtn.addEventListener("click", function () {
      var xml = (source && source.value) || pendingFileText || "";
      if (!xml.trim()) {
        status.textContent = "Paste XML or choose a file first.";
        return;
      }

      status.textContent = "Loading the XSD engine and schema (about 850 KB, first run only)…";
      runBtn.disabled = true;
      results.innerHTML = "";

      window.pacs008Xsd.validate(xml).then(function (r) {
        runBtn.disabled = false;

        if (!r.evaluated) {
          status.textContent = "XSD not evaluated.";
          results.innerHTML =
            '<h3>XSD: <strong>not evaluated</strong></h3><p>' + esc(r.reason) + ".</p>" +
            "<p>This is not a pass. Nothing has been checked against the schema. " +
            "Use the Python library, CLI or REST service for a definitive result.</p>";
          return;
        }

        status.textContent = "Validated in your browser against " + r.schemaId + ".";

        if (r.valid) {
          results.innerHTML =
            "<h3>XSD: passed</h3>" +
            "<p>Valid against <code>" + esc(r.schemaId) + "</code>.</p>" +
            "<p>Schema hash <code>" + esc(r.schemaHash) + "</code></p>" +
            "<p>This confirms element order, cardinality and datatypes only. " +
            "It says nothing about scheme rules such as CBPR+ address structure, " +
            "which are checked separately above.</p>";
          return;
        }

        results.innerHTML =
          "<h3>XSD: " + r.errors.length + " error(s)</h3>" +
          "<p>Validated against <code>" + esc(r.schemaId) + "</code>, hash <code>" +
          esc(r.schemaHash) + "</code></p><ul>" +
          r.errors.map(function (e) {
            return "<li>" + esc(e.message) +
              (e.line ? ' <span class="hint">line ' + esc(e.line) + "</span>" : "") + "</li>";
          }).join("") + "</ul>";
      });
    });
  });
})();
