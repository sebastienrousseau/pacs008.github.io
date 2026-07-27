import fs from "fs";

const newNav = `<nav aria-label="Primary navigation" id="ap-primary-nav">
          <ul class="ap-menu">
            <li class="has-sub"><a href="/about/">Overview</a>
              <button type="button" class="ap-sub-toggle" aria-expanded="false" aria-controls="sub-overview" aria-label="Toggle Overview submenu"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg></button>
              <ul id="sub-overview" class="ap-sub">
                <li><a href="/about/">About pacs008</a></li>
                <li><a href="/message-types/">Message Types</a></li>
                <li><a href="/message-selection/">Message Selection Guide</a></li>
              </ul>
            </li>
            <li class="has-sub"><a href="/pacs.008.001.13/">Message Specs</a>
              <button type="button" class="ap-sub-toggle" aria-expanded="false" aria-controls="sub-specs" aria-label="Toggle Message Specs submenu"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg></button>
              <ul id="sub-specs" class="ap-sub">
                <li><a href="/pacs.008.001.13/">pacs.008 Credit Transfer</a></li>
                <li><a href="/pacs.002.001.12/">pacs.002 Status Report</a></li>
                <li><a href="/pacs.003.001.09/">pacs.003 Direct Debit</a></li>
                <li><a href="/pacs.004.001.11/">pacs.004 Payment Return</a></li>
                <li><a href="/pacs.009.001.10/">pacs.009 Financial Institution</a></li>
              </ul>
            </li>
            <li class="has-sub"><a href="/api/">Technical Guides</a>
              <button type="button" class="ap-sub-toggle" aria-expanded="false" aria-controls="sub-tech" aria-label="Toggle Technical Guides submenu"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg></button>
              <ul id="sub-tech" class="ap-sub">
                <li><a href="/api/">API &amp; CLI Reference</a></li>
                <li><a href="/pacs-explained/">pacs Messages Explained</a></li>
                <li><a href="/structured-address/">Structured Address (2026)</a></li>
              </ul>
            </li>
            <li class="has-sub"><a href="/faq/">Resources</a>
              <button type="button" class="ap-sub-toggle" aria-expanded="false" aria-controls="sub-resources" aria-label="Toggle Resources submenu"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 9l6 6 6-6"/></svg></button>
              <ul id="sub-resources" class="ap-sub">
                <li><a href="/glossary/">Glossary</a></li>
                <li><a href="/faq/">Frequently Asked Questions</a></li>
                <li><a href="/changelog/">Changelog</a></li>
                <li><a href="/editorial/">Editorial Policy</a></li>
                <li><a href="/contact/">Contact Us</a></li>
              </ul>
            </li>
          </ul>
        </nav>`;

const newFooter = `<footer class="footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <p class="footer-brand">pacs008</p>
            <p class="footer-tagline">Open-source ISO 20022 payment initiation. Validated files, local processing, no lock-in.</p>
          </div>
          <div>
            <h2 class="footer-heading">Overview</h2>
            <ul class="footer-links">
              <li><a href="/about/">About pacs008</a></li>
              <li><a href="/message-types/">Message Types</a></li>
              <li><a href="/message-selection/">Selection Guide</a></li>
              <li><a href="/contact/">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 class="footer-heading">Message Specs</h2>
            <ul class="footer-links">
              <li><a href="/pacs.008.001.13/">pacs.008 Credit Transfer</a></li>
              <li><a href="/pacs.002.001.12/">pacs.002 Status Report</a></li>
              <li><a href="/pacs.003.001.09/">pacs.003 Direct Debit</a></li>
              <li><a href="/pacs.004.001.11/">pacs.004 Payment Return</a></li>
              <li><a href="/pacs.009.001.10/">pacs.009 Financial Institution</a></li>
            </ul>
          </div>
          <div>
            <h2 class="footer-heading">Technical &amp; Help</h2>
            <ul class="footer-links">
              <li><a href="/api/">API &amp; CLI Reference</a></li>
              <li><a href="/pacs-explained/">pacs Messages Explained</a></li>
              <li><a href="/structured-address/">Structured Address (2026)</a></li>
              <li><a href="/glossary/">Glossary</a></li>
              <li><a href="/faq/">FAQs</a></li>
              <li><a href="/changelog/">Changelog</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-legal">
          <p>&copy; 2023&ndash;2026 Sebastien Rousseau. Core dual-licensed Apache-2.0 / MIT; companion packages Apache-2.0.</p>
          <ul>
            <li><a href="/editorial/">Editorial Policy</a></li>
            <li><a href="/privacy/">Privacy Policy</a></li>
            <li><a href="/terms/">Terms of Use</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>`;

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Replace nav
  content = content.replace(/<nav aria-label="Primary navigation" id="ap-primary-nav">[\s\S]*?<\/nav>/, newNav);

  // Replace footer
  content = content.replace(/<footer class="footer">[\s\S]*?<\/footer>/, newFooter);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated navigation & footer in ${filePath}`);
}

updateFile("_layouts/index.html");
updateFile("_layouts/page.html");
