# Decision records

Short records of decisions that are expensive to revisit or easy to
misremember. Newest first.

---

## D-003 — Browser XSD validation: viable, blocked on schema redistribution

**Date:** 2026-07-28
**Status:** Blocked, awaiting a licensing decision
**Supersedes:** nothing

### Question

Can the browser workbench perform real XSD validation, closing the gap that
`capability-registry.json` records as `layer_4_xsd_structural: browser =
planned`?

### What was measured

| Factor | Finding |
|---|---|
| WASM validator size | `xmllint-wasm` 5.2.0, 873 KB unpacked. `libxml2-wasm` 0.7.1, 1.35 MB |
| Performance budget | Blueprint allows a lazy-loaded engine up to ~2 MB compressed. Both fit |
| CSP compatibility | Already satisfied: `script-src` includes `'wasm-unsafe-eval'` |
| Schema size | `pacs.008.001.13.xsd` is 61 KB in the package |
| Execution model | Web Worker, so the UI stays responsive. No new network origin needed |

The technical answer is **yes**. This is not a bundle-size or CSP problem.

### Why it is blocked

Running XSD validation in the browser requires **serving the ISO 20022 schema
files from pacs008.com** so the page can fetch them. That is redistribution of
material published by the ISO 20022 Registration Authority, and the terms have
not been confirmed.

This is the same constraint already applied to scheme rules, where the project
stores derived logic and citations rather than reproducing source documents.
Bundling the XSDs for public download is a stronger act than citing them.

### What would unblock it

1. Confirm whether the ISO 20022 schemas may be redistributed for this purpose.
2. If yes: add `xmllint-wasm` in a Web Worker, load the schema only after the
   user selects a message and version, surface the schema version and hash in
   every result, and report **XSD not evaluated** when the schema fails to load.
3. If no: the honest label stays. A self-hosted deployment can still perform
   XSD validation, because the user already holds the schemas locally.

### Decision

Do not implement until (1) is answered. The current behaviour — labelling XSD
as not evaluated in the workbench, on `/trust/` and in every result — is
correct and is not a placeholder for missing work.

---

## D-002 — HTML minification is done post-build, not by ssg

**Date:** 2026-07-28
**Status:** Accepted

ssg minifies the homepage but leaves the other 677 pages as authored, and
exposes no flag to change it (`ssg build --help` has no minify option, and the
advertised native minification covers JS and CSS).

`scripts/fix-ssg-html.mjs` therefore performs a conservative pass: `<pre>`,
`<textarea>`, `<script>` and `<style>` are lifted out first, whitespace runs
collapse to a single space rather than being removed, and attribute quoting is
untouched. Measured saving: ~3.4 MB across `public/`.

Whitespace is collapsed rather than stripped because removing it entirely joins
words across line breaks and deletes the meaningful gap between inline
elements. Attribute unquoting is where minifiers break markup, for a saving
that does not justify the risk over 678 pages.

---

## D-001 — Website coverage may never lead package capability

**Date:** 2026-07-28
**Status:** Accepted

`capability-registry.json` records the eight `pacs.*` families the package
actually ships, and explicitly marks `pain.*`, `camt.*` and `head.001` as not
implemented.

Publishing a message page, or a capability status, for something the package
cannot do recreates the class of defect this project has spent significant
effort removing: a site that claims more than the software delivers.

`camt.110` becomes receive-and-consume mandatory in November 2026 and
`camt.110`/`camt.111` both become mandatory in November 2027. Those are real
gaps. They are recorded as gaps, not implied as capabilities, and closing them
is a decision about the **package**, not the website.

**Scoped in the package repository**, which is where the decision belongs:

- [`sebastienrousseau/pacs008#12`](https://github.com/sebastienrousseau/pacs008/issues/12)
  — `camt.110` / `camt.111`, phased receive-side first against the November
  2026 obligation, then send-side before November 2027.
- [`sebastienrousseau/pacs008#13`](https://github.com/sebastienrousseau/pacs008/issues/13)
  — `pain.001`, driven indirectly by the MT101 CBPR+ retirement, recommended as
  lower priority than #12.

Both record "declare out of scope" as a legitimate outcome, and both are
blocked on the same schema-redistribution question as D-003. Until one of them
is decided, the website continues to state `camt.*` and `pain.*` as not
implemented, which is the accurate position either way.
