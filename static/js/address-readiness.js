/**
 * Batch postal-address readiness scanner for the 14 November 2026 deadline.
 *
 * Runs entirely in the page: the file is read with FileReader, classified in
 * memory, and never sent anywhere. There is no fetch/XHR in this module by
 * design, and the site's Content-Security-Policy restricts connect-src to
 * 'self' as a second line of defence.
 *
 * Classification is delegated to window.pacs008Tools.validateAddress so that a
 * batch result can never disagree with the single-record checker on the same
 * page.
 */
(function () {
  "use strict";

  // Enforced, not merely advertised — the UI states this limit and this is
  // where it is applied.
  var MAX_FILE_BYTES = 2 * 1024 * 1024;

  // Layers this scanner actually evaluates. Anything absent here is reported
  // as "Not evaluated" rather than folded into a pass.
  var LAYERS_RUN = ["Input parsing", "Address structure (CBPR+ / CHAPS)"];
  var LAYERS_NOT_RUN = ["XSD", "ISO semantic", "IBAN/BIC", "Effective-date selection"];

  /** Column name candidates, lowercased and stripped of separators. */
  var FIELDS = {
    street: ["street", "streetname", "strtnm", "addressstreet"],
    buildingNo: ["buildingno", "bldgnb", "housenumber", "buildingnumber"],
    town: ["town", "townname", "twnnm", "city"],
    country: ["country", "ctry", "countrycode"],
    line1: ["addressline1", "adrline1", "adrline", "addressline", "address1"],
    line2: ["addressline2", "adrline2", "address2"],
    party: ["party", "partytype", "role"],
    name: ["name", "partyname", "nm", "debtorname", "creditorname"]
  };

  function norm(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  /** Detect the delimiter by counting candidates outside quoted spans. */
  function detectDelimiter(line) {
    var best = ",";
    var bestCount = -1;
    [",", ";", "\t", "|"].forEach(function (d) {
      var count = 0;
      var inQuotes = false;
      for (var i = 0; i < line.length; i++) {
        if (line[i] === '"') inQuotes = !inQuotes;
        else if (line[i] === d && !inQuotes) count++;
      }
      if (count > bestCount) {
        bestCount = count;
        best = d;
      }
    });
    return best;
  }

  /** RFC 4180-ish parser: handles quoted fields, embedded delimiters, "" escapes. */
  function parseCsv(text) {
    text = text.replace(/^﻿/, "").replace(/\r\n?/g, "\n");
    var firstLine = text.slice(0, text.indexOf("\n") === -1 ? text.length : text.indexOf("\n"));
    var delim = detectDelimiter(firstLine);

    var rows = [];
    var row = [];
    var field = "";
    var inQuotes = false;

    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (inQuotes) {
        if (ch === '"') {
          if (text[i + 1] === '"') {
            field += '"';
            i++;
          } else inQuotes = false;
        } else field += ch;
      } else if (ch === '"') inQuotes = true;
      else if (ch === delim) {
        row.push(field);
        field = "";
      } else if (ch === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else field += ch;
    }
    if (field.length > 0 || row.length > 0) {
      row.push(field);
      rows.push(row);
    }
    return rows.filter(function (r) {
      return r.some(function (c) {
        return String(c).trim() !== "";
      });
    });
  }

  /** Map header names to the address fields we understand. */
  function mapColumns(headers) {
    var map = {};
    headers.forEach(function (h, idx) {
      var n = norm(h);
      Object.keys(FIELDS).forEach(function (key) {
        if (map[key] === undefined && FIELDS[key].indexOf(n) !== -1) map[key] = idx;
      });
    });
    return map;
  }

  /**
   * Neutralise spreadsheet formula injection.
   * A value beginning =, +, -, @, tab or CR is executable in Excel/Sheets.
   */
  function csvSafe(value) {
    var s = value === null || value === undefined ? "" : String(value);
    if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
    return '"' + s.replace(/"/g, '""') + '"';
  }

  function scan(rows) {
    var headers = rows[0] || [];
    var map = mapColumns(headers);
    var body = rows.slice(1);

    var counts = { FULLY_STRUCTURED: 0, HYBRID: 0, UNSTRUCTURED: 0 };
    var byParty = {};
    var findings = [];

    body.forEach(function (r, i) {
      var get = function (key) {
        return map[key] === undefined ? "" : r[map[key]];
      };
      var result = window.pacs008Tools.validateAddress(
        get("street"),
        get("buildingNo"),
        get("town"),
        get("country"),
        get("line1"),
        get("line2")
      );

      counts[result.status] = (counts[result.status] || 0) + 1;

      var party = String(get("party") || "Unspecified").trim() || "Unspecified";
      if (!byParty[party]) {
        byParty[party] = { FULLY_STRUCTURED: 0, HYBRID: 0, UNSTRUCTURED: 0 };
      }
      byParty[party][result.status]++;

      if (result.status === "UNSTRUCTURED") {
        var missing = [];
        if (!String(get("town") || "").trim()) missing.push("TwnNm (town)");
        var ctry = String(get("country") || "").trim();
        if (!ctry) missing.push("Ctry (country)");
        else if (ctry.length !== 2) missing.push("Ctry must be a 2-letter ISO 3166 code");
        findings.push({
          row: i + 2, // 1-based, plus header
          party: party,
          name: get("name"),
          missing: missing.join("; ") || "Address is not in a compliant structured or hybrid form",
          status: result.status
        });
      }
    });

    var total = body.length;
    var compliant = counts.FULLY_STRUCTURED + counts.HYBRID;
    return {
      total: total,
      counts: counts,
      byParty: byParty,
      findings: findings,
      score: total === 0 ? 0 : Math.round((compliant / total) * 1000) / 10,
      unmappedColumns: Object.keys(FIELDS).filter(function (k) {
        return map[k] === undefined;
      })
    };
  }

  function buildRemediationCsv(report) {
    var lines = ["Row,Party,Name,Issue,Classification"];
    report.findings.forEach(function (f) {
      lines.push(
        [f.row, f.party, f.name, f.missing, f.status].map(csvSafe).join(",")
      );
    });
    return lines.join("\n");
  }

  window.pacs008Readiness = {
    MAX_FILE_BYTES: MAX_FILE_BYTES,
    LAYERS_RUN: LAYERS_RUN,
    LAYERS_NOT_RUN: LAYERS_NOT_RUN,
    parseCsv: parseCsv,
    mapColumns: mapColumns,
    csvSafe: csvSafe,
    scan: scan,
    buildRemediationCsv: buildRemediationCsv
  };

  // ---- DOM wiring -------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("readiness-file");
    var status = document.getElementById("readiness-status");
    var results = document.getElementById("readiness-results");
    var clearBtn = document.getElementById("readiness-clear");
    var downloadBtn = document.getElementById("readiness-download");
    if (!input || !results) return;

    var lastReport = null;

    function say(msg) {
      if (status) status.textContent = msg;
    }

    function pct(n, total) {
      return total === 0 ? "0%" : Math.round((n / total) * 1000) / 10 + "%";
    }

    function render(report) {
      var c = report.counts;
      var partyRows = Object.keys(report.byParty)
        .map(function (p) {
          var b = report.byParty[p];
          return (
            "<tr><th scope=\"row\">" + esc(p) + "</th><td>" + b.FULLY_STRUCTURED +
            "</td><td>" + b.HYBRID + "</td><td>" + b.UNSTRUCTURED + "</td></tr>"
          );
        })
        .join("");

      results.innerHTML =
        '<h3>Readiness score: ' + report.score + '%</h3>' +
        "<p>" + (c.FULLY_STRUCTURED + c.HYBRID) + " of " + report.total +
        " records would be accepted after 14 November 2026.</p>" +
        '<table><caption>Classification</caption><thead><tr><th scope="col">Classification</th>' +
        '<th scope="col">Records</th><th scope="col">Share</th></tr></thead><tbody>' +
        '<tr><th scope="row">Fully structured</th><td>' + c.FULLY_STRUCTURED + "</td><td>" + pct(c.FULLY_STRUCTURED, report.total) + "</td></tr>" +
        '<tr><th scope="row">Hybrid (compliant)</th><td>' + c.HYBRID + "</td><td>" + pct(c.HYBRID, report.total) + "</td></tr>" +
        '<tr><th scope="row">Unstructured (fails)</th><td>' + c.UNSTRUCTURED + "</td><td>" + pct(c.UNSTRUCTURED, report.total) + "</td></tr>" +
        "</tbody></table>" +
        (partyRows
          ? '<table><caption>By party</caption><thead><tr><th scope="col">Party</th>' +
            '<th scope="col">Structured</th><th scope="col">Hybrid</th><th scope="col">Unstructured</th>' +
            "</tr></thead><tbody>" + partyRows + "</tbody></table>"
          : "") +
        "<h4>Layers evaluated</h4><ul>" +
        LAYERS_RUN.map(function (l) { return "<li>" + esc(l) + ": evaluated</li>"; }).join("") +
        LAYERS_NOT_RUN.map(function (l) { return "<li>" + esc(l) + ": <strong>not evaluated</strong></li>"; }).join("") +
        "</ul><p>This scan checks postal-address structure only. A high score is not a statement about the layers marked not evaluated.</p>";

      if (downloadBtn) downloadBtn.hidden = report.findings.length === 0;
    }

    function esc(s) {
      return String(s === null || s === undefined ? "" : s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    input.addEventListener("change", function () {
      var file = input.files && input.files[0];
      if (!file) return;

      if (file.size > MAX_FILE_BYTES) {
        say("File is " + (file.size / 1048576).toFixed(1) + " MB. The limit is 2 MB — nothing was read.");
        input.value = "";
        return;
      }

      say("Reading " + file.name + " locally…");
      var reader = new FileReader();
      reader.onerror = function () {
        say("Could not read that file.");
      };
      reader.onload = function (e) {
        try {
          var rows = parseCsv(String(e.target.result));
          if (rows.length < 2) {
            say("No data rows found. Expected a header row plus at least one record.");
            return;
          }
          lastReport = scan(rows);
          render(lastReport);
          var warn = lastReport.unmappedColumns.length
            ? " Columns not found: " + lastReport.unmappedColumns.join(", ") + "."
            : "";
          say("Scanned " + lastReport.total + " records in the browser." + warn);
        } catch (err) {
          say("Could not parse that file as CSV.");
        }
      };
      reader.readAsText(file);
    });

    if (downloadBtn) {
      downloadBtn.addEventListener("click", function () {
        if (!lastReport) return;
        var blob = new Blob([buildRemediationCsv(lastReport)], {
          type: "text/csv;charset=utf-8"
        });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "pacs008-address-remediation.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        lastReport = null;
        input.value = "";
        results.innerHTML = "";
        if (downloadBtn) downloadBtn.hidden = true;
        say("Cleared. No data from this session remains in the page.");
      });
    }
  });
})();
