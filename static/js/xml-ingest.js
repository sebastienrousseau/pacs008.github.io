/**
 * Inspect an existing ISO 20022 XML file in the browser.
 *
 * This closes the gap where the workbench could only generate XML, never read
 * it. It runs three layers and is explicit that it runs no more than three:
 *
 *   Layer 3  XML syntax and namespace  — evaluated here
 *   Layer 6  Scheme address rules      — evaluated here, via pacs008Tools
 *   Layer 4  XSD structure             — NOT evaluated, no schema validator
 *   Layer 5  ISO semantic consistency  — NOT evaluated
 *
 * Parsing uses DOMParser, which does not resolve external entities, so XXE and
 * entity-expansion classes of attack do not apply. Nothing leaves the page.
 */
(function () {
  "use strict";

  var MAX_FILE_BYTES = 2 * 1024 * 1024;
  var ISO_NS_PREFIX = "urn:iso:std:iso:20022:tech:xsd:";

  var LAYERS = [
    { id: "xml", label: "XML syntax and namespace", run: true },
    { id: "scheme", label: "Scheme address rules (CBPR+ / CHAPS)", run: true },
    { id: "xsd", label: "XSD structure and cardinality", run: false },
    { id: "iso", label: "ISO semantic consistency", run: false },
    { id: "ident", label: "IBAN / BIC checksums", run: false }
  ];

  /** Local name lookup that works regardless of namespace prefix. */
  function byLocal(node, name) {
    var out = [];
    var all = node.getElementsByTagName("*");
    for (var i = 0; i < all.length; i++) {
      if (all[i].localName === name) out.push(all[i]);
    }
    return out;
  }

  function textOf(node, name) {
    var found = byLocal(node, name);
    return found.length ? String(found[0].textContent || "").trim() : "";
  }

  /**
   * Parse and inspect. Returns a layered result; never a bare "valid".
   */
  function inspect(xmlText) {
    var findings = [];
    var doc;

    try {
      doc = new DOMParser().parseFromString(xmlText, "application/xml");
    } catch (e) {
      return { parsed: false, findings: [{ layer: "xml", severity: "error", rule: "XML-PARSE", message: "The file could not be parsed as XML." }] };
    }

    var parseError = doc.getElementsByTagName("parsererror");
    if (parseError.length > 0) {
      return {
        parsed: false,
        findings: [{
          layer: "xml", severity: "error", rule: "XML-PARSE",
          message: "Not well-formed XML: " + String(parseError[0].textContent || "").trim().split("\n")[0]
        }]
      };
    }

    var root = doc.documentElement;
    if (!root || root.localName !== "Document") {
      findings.push({
        layer: "xml", severity: "error", rule: "XML-ROOT",
        message: "Expected a <Document> root element, found <" + (root ? root.localName : "nothing") + ">."
      });
    }

    var ns = root ? root.namespaceURI || "" : "";
    var messageType = null;
    if (ns.indexOf(ISO_NS_PREFIX) === 0) {
      messageType = ns.slice(ISO_NS_PREFIX.length);
    } else {
      findings.push({
        layer: "xml", severity: "error", rule: "XML-NS",
        message: "Namespace is not an ISO 20022 message namespace. Found: " + (ns || "(none)")
      });
    }

    // Layer 6 — address rules, delegated to the shared classifier so results
    // agree with the single-record checker and the batch scanner.
    var parties = [];
    ["Dbtr", "Cdtr", "UltmtDbtr", "UltmtCdtr"].forEach(function (tag) {
      byLocal(doc, tag).forEach(function (party) {
        var addr = byLocal(party, "PstlAdr")[0];
        var name = textOf(party, "Nm");
        if (!addr) return;
        var result = window.pacs008Tools.validateAddress(
          textOf(addr, "StrtNm"),
          textOf(addr, "BldgNb"),
          textOf(addr, "TwnNm"),
          textOf(addr, "Ctry"),
          byLocal(addr, "AdrLine").length ? byLocal(addr, "AdrLine")[0].textContent : "",
          ""
        );
        parties.push({ tag: tag, name: name, status: result.status });
        if (result.status === "UNSTRUCTURED") {
          findings.push({
            layer: "scheme",
            severity: "error",
            rule: !textOf(addr, "TwnNm") ? "CBPR-ADDR-002" : "CBPR-ADDR-003",
            message: (name || tag) + ": address is fully unstructured and will be rejected from 14 November 2026.",
            path: "/Document//" + tag + "/PstlAdr"
          });
        }
      });
    });

    return {
      parsed: true,
      messageType: messageType,
      namespace: ns,
      parties: parties,
      findings: findings,
      txCount: byLocal(doc, "CdtTrfTxInf").length,
      declaredCount: textOf(doc, "NbOfTxs")
    };
  }

  window.pacs008XmlIngest = { inspect: inspect, LAYERS: LAYERS, MAX_FILE_BYTES: MAX_FILE_BYTES };

  // ---- DOM wiring -------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("xml-file");
    var paste = document.getElementById("xml-paste");
    var runBtn = document.getElementById("xml-run");
    var clearBtn = document.getElementById("xml-clear");
    var status = document.getElementById("xml-status");
    var results = document.getElementById("xml-results");
    if (!results || (!input && !paste)) return;

    function esc(s) {
      return String(s === null || s === undefined ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
    function say(m) { if (status) status.textContent = m; }

    function render(report) {
      if (!report.parsed) {
        results.innerHTML =
          '<h3>XML syntax: failed</h3><ul>' +
          report.findings.map(function (f) {
            return "<li><strong>" + esc(f.rule) + "</strong> — " + esc(f.message) + "</li>";
          }).join("") + "</ul>";
        return;
      }

      var errors = report.findings.filter(function (f) { return f.severity === "error"; });
      var layerList = LAYERS.map(function (l) {
        return "<li>" + esc(l.label) + ": " +
          (l.run ? "evaluated" : "<strong>not evaluated</strong>") + "</li>";
      }).join("");

      var partyRows = report.parties.map(function (p) {
        return "<tr><th scope=\"row\">" + esc(p.name || p.tag) + "</th><td>" +
          esc(p.tag) + "</td><td>" + esc(p.status) + "</td></tr>";
      }).join("");

      results.innerHTML =
        "<h3>" + (errors.length === 0 ? "No errors in the layers that ran" : errors.length + " error(s)") + "</h3>" +
        "<p>Message type: <code>" + esc(report.messageType || "unknown") + "</code>" +
        " · Transactions found: " + report.txCount +
        (report.declaredCount ? " · <code>NbOfTxs</code> declares " + esc(report.declaredCount) : "") +
        "</p>" +
        (report.declaredCount && String(report.txCount) !== String(report.declaredCount)
          ? '<p><strong>Note:</strong> the declared transaction count does not match the number found. ' +
            'This is an ISO semantic check, which is <strong>not evaluated</strong> here — confirm with the Python library or CLI.</p>'
          : "") +
        (errors.length
          ? "<ul>" + errors.map(function (f) {
              return "<li><strong>" + esc(f.rule) + "</strong> — " + esc(f.message) +
                (f.path ? ' <code>' + esc(f.path) + "</code>" : "") + "</li>";
            }).join("") + "</ul>"
          : "") +
        (partyRows
          ? '<table><caption>Parties</caption><thead><tr><th scope="col">Party</th>' +
            '<th scope="col">Element</th><th scope="col">Address</th></tr></thead><tbody>' +
            partyRows + "</tbody></table>"
          : "") +
        "<h4>Layers evaluated</h4><ul>" + layerList + "</ul>" +
        "<p>A clean result here says nothing about XSD structure or ISO semantic " +
        "consistency. Use the Python library, CLI or REST service for those.</p>";
    }

    function run(text) {
      if (!text || !text.trim()) { say("Nothing to inspect."); return; }
      try {
        render(inspect(text));
        say("Inspected in the browser. Nothing was uploaded.");
      } catch (e) {
        say("Could not inspect that file.");
      }
    }

    if (input) {
      input.addEventListener("change", function () {
        var file = input.files && input.files[0];
        if (!file) return;
        if (file.size > MAX_FILE_BYTES) {
          say("File is " + (file.size / 1048576).toFixed(1) + " MB. The limit is 2 MB — nothing was read.");
          input.value = "";
          return;
        }
        var reader = new FileReader();
        reader.onerror = function () { say("Could not read that file."); };
        reader.onload = function (e) { run(String(e.target.result)); };
        reader.readAsText(file);
      });
    }

    if (runBtn && paste) {
      runBtn.addEventListener("click", function () { run(paste.value); });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (input) input.value = "";
        if (paste) paste.value = "";
        results.innerHTML = "";
        say("Cleared. No data from this session remains in the page.");
      });
    }
  });
})();
