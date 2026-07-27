import fs from "fs";

const linkMap = {
  'href="/why/"': 'href="/about/"',
  'href="/solutions/"': 'href="/message-types/"',
  'href="/executive-brief/"': 'href="/editorial/"',
  'href="/competitors-comparison/"': 'href="/message-selection/"',
  'href="/try/"': 'href="/api/"',
  'href="/documentation/"': 'href="/api/"',
  'href="/installation/"': 'href="/api/"',
  'href="/faqs/"': 'href="/faq/"',
  'href="/pacs008-mcp/"': 'href="/api/"',
  'href="/pacs008-lsp/"': 'href="/api/"',
  'href="/pacs008-loader-mt101/"': 'href="/pacs-explained/"',
  'href="/pacs008-loader-xlsx/"': 'href="/pacs-explained/"',
  'href="/architecture-and-patents/"': 'href="/about/"',
  'href="/2026-iso20022-migration-trends/"': 'href="/structured-address/"',
  'href="/iso20022-roadmap/"': 'href="/changelog/"',
  'href="/iso-20022-payment-initiation-for-cross-border-payments/"': 'href="/structured-address/"',
  'href="/languages/"': 'href="/about/"',
  'href="/accessibility/"': 'href="/about/"',
  'href="/compatibility/"': 'href="/about/"',
  'href="/payments/"': 'href="/about/"',
  'href="/trust/"': 'href="/editorial/"',
  'href="/pacs.008.001.09/"': 'href="/pacs.008.001.13/"'
};

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  for (const [from, to] of Object.entries(linkMap)) {
    content = content.replaceAll(from, to);
  }
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Repaired broken links in ${filePath}`);
}

fixFile("_layouts/index.html");
fixFile("_layouts/page.html");
