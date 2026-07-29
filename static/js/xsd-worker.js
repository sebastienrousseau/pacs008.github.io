/**
 * XSD validation worker.
 *
 * Runs libxml2 (compiled to WebAssembly) off the main thread, so a large
 * document cannot freeze the page. Everything stays in the browser: the schema
 * is fetched from this origin and the message never leaves the worker.
 *
 * The contract with the caller is deliberately narrow. Every reply says which
 * layer ran and whether it produced a verdict, so the UI can never report a
 * pass for a check that did not happen — the failure mode this whole feature
 * exists to avoid.
 *
 * Messages in:  { type: "validate", xml, schemaUrl, schemaId }
 * Messages out: { type: "result" | "unavailable" | "error", ... }
 */

let validateXML = null;
let loadError = null;

/** Schemas already fetched, keyed by URL. */
const schemaCache = new Map();

async function ensureEngine() {
  if (validateXML) return validateXML;
  if (loadError) throw loadError;
  try {
    const mod = await import("./vendor/index-browser.mjs");
    validateXML = mod.validateXML;
    return validateXML;
  } catch (err) {
    loadError = err;
    throw err;
  }
}

/** SHA-256 of the schema text, so a result can name exactly what it validated. */
async function digest(text) {
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return `sha256:${[...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")}`;
}

async function fetchSchema(url) {
  if (schemaCache.has(url)) return schemaCache.get(url);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`schema request returned ${response.status}`);
  }
  const contents = await response.text();
  const entry = { contents, hash: await digest(contents) };
  schemaCache.set(url, entry);
  return entry;
}

self.addEventListener("message", async (event) => {
  const { type, xml, schemaUrl, schemaId } = event.data || {};
  if (type !== "validate") return;

  let schema;
  try {
    await ensureEngine();
    schema = await fetchSchema(schemaUrl);
  } catch (err) {
    // The engine or the schema could not be loaded. Say so explicitly rather
    // than letting the caller infer a pass from an absence of errors.
    self.postMessage({
      type: "unavailable",
      layer: "xsd",
      schemaId,
      reason: String((err && err.message) || err),
    });
    return;
  }

  try {
    const result = await validateXML({
      xml: [{ fileName: "message.xml", contents: xml }],
      schema: [{ fileName: schemaId, contents: schema.contents }],
    });

    self.postMessage({
      type: "result",
      layer: "xsd",
      schemaId,
      schemaHash: schema.hash,
      valid: result.valid,
      errors: (result.errors || []).map((e) => ({
        message: String(e.message || e).replace(/^.*?Schemas validity error :\s*/, ""),
        line: e.loc ? e.loc.lineNo : null,
        raw: String(e.message || e),
      })),
    });
  } catch (err) {
    self.postMessage({
      type: "error",
      layer: "xsd",
      schemaId,
      reason: String((err && err.message) || err),
    });
  }
});
