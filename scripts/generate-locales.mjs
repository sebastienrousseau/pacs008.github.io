import fs from "node:fs/promises";
import path from "node:path";

const root = "/home/seb/Code/Public/HTML/pacs008.github.io";
const docsDir = path.join(root, "docs");

const locales = [
  { key: "en", lang: "en-GB", label: "English", hero: "Automate ISO 20022 pacs.008 with confidence.", tagline: "Production-grade generation, validation, API orchestration, and compliance support for FI-to-FI credit transfer flows." },
  { key: "ar", lang: "ar-SA", label: "العربية", hero: "أتمتة رسائل pacs.008 بثقة.", tagline: "توليد والتحقق وواجهات برمجة التطبيقات والامتثال لتدفقات التحويل بين المؤسسات المالية." },
  { key: "de", lang: "de-DE", label: "Deutsch", hero: "ISO 20022 pacs.008 sicher automatisieren.", tagline: "Generierung, Validierung, API-Orchestrierung und Compliance für FI-to-FI-Kredittransfers." },
  { key: "es", lang: "es-ES", label: "Español", hero: "Automatice pacs.008 con confianza.", tagline: "Generación, validación, API y cumplimiento para flujos FI-to-FI." },
  { key: "fr", lang: "fr-FR", label: "Français", hero: "Automatisez pacs.008 avec rigueur.", tagline: "Génération, validation, API et conformité pour les flux FI-to-FI." },
  { key: "he", lang: "he-IL", label: "עברית", hero: "אוטומציה של pacs.008 בביטחון.", tagline: "יצירה, ולידציה, API ותמיכת תאימות להעברות FI-to-FI." },
  { key: "hi", lang: "hi-IN", label: "हिन्दी", hero: "pacs.008 को भरोसे के साथ स्वचालित करें।", tagline: "उत्पादन-स्तरीय जनरेशन, वैलिडेशन, API और अनुपालन समर्थन।" },
  { key: "id", lang: "id-ID", label: "Bahasa Indonesia", hero: "Otomatisasikan pacs.008 dengan percaya diri.", tagline: "Pembuatan, validasi, API, dan kepatuhan untuk alur FI-to-FI." },
  { key: "it", lang: "it-IT", label: "Italiano", hero: "Automatizza pacs.008 con disciplina.", tagline: "Generazione, validazione, API e conformità per flussi FI-to-FI." },
  { key: "ja", lang: "ja-JP", label: "日本語", hero: "pacs.008 を本番品質で自動化。", tagline: "生成、検証、API オーケストレーション、コンプライアンス対応を一つに。" },
  { key: "ko", lang: "ko-KR", label: "한국어", hero: "신뢰할 수 있는 pacs.008 자동화.", tagline: "생성, 검증, API 오케스트레이션, 규정 준수 지원." },
  { key: "nl", lang: "nl-NL", label: "Nederlands", hero: "Automatiseer pacs.008 met vertrouwen.", tagline: "Generatie, validatie, API en compliance voor FI-to-FI-stromen." },
  { key: "pl", lang: "pl-PL", label: "Polski", hero: "Automatyzuj pacs.008 bez zgadywania.", tagline: "Generowanie, walidacja, API i zgodność dla przepływów FI-to-FI." },
  { key: "pt", lang: "pt-BR", label: "Português", hero: "Automatize pacs.008 com confiança.", tagline: "Geração, validação, API e conformidade para fluxos FI-to-FI." },
  { key: "ro", lang: "ro-RO", label: "Română", hero: "Automatizați pacs.008 cu rigoare.", tagline: "Generare, validare, API și conformitate pentru fluxuri FI-to-FI." },
  { key: "ru", lang: "ru-RU", label: "Русский", hero: "Автоматизируйте pacs.008 без компромиссов.", tagline: "Генерация, валидация, API и комплаенс для потоков FI-to-FI." },
  { key: "th", lang: "th-TH", label: "ไทย", hero: "ทำงาน pacs.008 แบบอัตโนมัติอย่างมั่นใจ", tagline: "การสร้าง ตรวจสอบ API และความสอดคล้องสำหรับโฟลว์ FI-to-FI" },
  { key: "tr", lang: "tr-TR", label: "Türkçe", hero: "pacs.008 otomasyonunu güvenle yönetin.", tagline: "Üretim düzeyinde oluşturma, doğrulama, API ve uyumluluk desteği." },
  { key: "uk", lang: "uk-UA", label: "Українська", hero: "Автоматизуйте pacs.008 впевнено.", tagline: "Генерація, валідація, API та комплаєнс для потоків FI-to-FI." },
  { key: "vi", lang: "vi-VN", label: "Tiếng Việt", hero: "Tự động hóa pacs.008 một cách chắc chắn.", tagline: "Tạo, kiểm tra, API và tuân thủ cho luồng FI-to-FI." },
  { key: "zh", lang: "zh-CN", label: "简体中文", hero: "以生产级方式自动化 pacs.008。", tagline: "面向 FI-to-FI 信贷转账流程的生成、校验、API 编排与合规支持。" },
  { key: "zh-tw", lang: "zh-TW", label: "繁體中文", hero: "以正式環境標準自動化 pacs.008。", tagline: "提供 FI-to-FI 信貸轉帳流程的生成、驗證、API 編排與合規支援。" }
];

const versions = [
  "pacs.002.001.12",
  "pacs.003.001.09",
  "pacs.004.001.11",
  "pacs.007.001.11",
  "pacs.008.001.01",
  "pacs.008.001.02",
  "pacs.008.001.03",
  "pacs.008.001.04",
  "pacs.008.001.05",
  "pacs.008.001.06",
  "pacs.008.001.07",
  "pacs.008.001.08",
  "pacs.008.001.09",
  "pacs.008.001.10",
  "pacs.008.001.11",
  "pacs.008.001.12",
  "pacs.008.001.13",
  "pacs.009.001.10",
  "pacs.010.001.05",
  "pacs.028.001.05"
];

function pageTemplate({ title, description, lang, body }) {
  return `---\ntitle: ${title}\ndescription: ${description}\nlang: ${lang}\nlastUpdated: true\nimage: /logo.svg\n---\n\n${body}\n`;
}

function homeBody(locale) {
  return `# ${locale.hero}

${locale.tagline}

<div class="hero-panel">

Built for teams that need deterministic ISO 20022 file generation, version-aware templates, schema validation, and delivery tooling without building the whole stack from scratch.

- Python package for XML generation and validation
- REST API for orchestrated message workflows
- CLI for local pipelines and batch jobs
- Coverage across pacs.008 versions and adjacent message families

[Get started on GitHub](https://github.com/sebastienrousseau/pacs008){.vp-button .brand}
[Install from PyPI](https://pypi.org/project/pacs008/){.vp-button .alt}

</div>

<div class="signal-strip">
  <div><strong>20</strong><span>supported ISO 20022 message families and versions</span></div>
  <div><strong>13</strong><span>pacs.008 templates covering early and current revisions</span></div>
  <div><strong>API</strong><span>async job management and validation endpoints</span></div>
  <div><strong>CLI</strong><span>pipeline-friendly execution for local and CI workflows</span></div>
</div>

## Why Pacs008

<div class="showcase-grid">
  <article>
    <h3>Version-aware delivery</h3>
    <p>Generate and validate the exact XML flavor your bank, network, or migration programme expects.</p>
  </article>
  <article>
    <h3>Operations-first tooling</h3>
    <p>Use JSON, JSONL, CSV, SQLite, or Parquet as sources and keep message production inside existing back-office flows.</p>
  </article>
  <article>
    <h3>Compliance pressure reduced</h3>
    <p>Schema validation, SWIFT-safe sanitisation, BIC and IBAN checks, and path hardening are already built in.</p>
  </article>
</div>

## Supported message types

<ul class="type-list">
${versions.map((version) => `  <li><strong>${version}</strong><br/>Template and validation support for production and migration work.</li>`).join("\n")}
</ul>
`;
}

function aboutBody() {
  return `# About Pacs008

Pacs008 is a Python toolkit for automating ISO 20022 FI-to-FI customer credit transfer workflows. It was designed for teams that need to move from raw operational data to compliant XML quickly, with strong validation and minimal manual formatting.

## What it does

- Generates XML for \`pacs.008\` and adjacent pacs message families
- Validates data and XML against schemas
- Exposes a FastAPI service for automated workflows
- Provides a CLI for local execution and CI pipelines
- Supports structured data sources including CSV, JSON, JSONL, SQLite, and Parquet

## Who it is for

- payment operations teams
- platform engineers building internal banking rails
- migration programmes moving toward ISO 20022
- compliance and QA teams validating outbound payment messages
`;
}

function messageTypesBody() {
  return `# Message types

Pacs008 covers both the core \`pacs.008\` family and related messages that often appear in adjacent orchestration or reconciliation flows.

## Included support

${versions.map((version) => `- \`${version}\``).join("\n")}

## Delivery model

Each supported message type is backed by template assets and validation logic so teams can standardise generation and regression testing across multiple downstream channels.`;
}

function apiBody() {
  return `# API and tooling

The project ships with both a REST API and a CLI.

## API capabilities

- health and readiness endpoints
- data validation before XML generation
- synchronous generation for direct workflows
- asynchronous job execution for longer-running pipelines
- downloadable generated files through job completion flows

## CLI capabilities

- point to a source file and message version
- validate against XSD before delivery
- generate XML into pipeline-friendly output directories
- fit into CI jobs, batch schedules, and local operator tooling
`;
}

function legalBody(title) {
  return `# ${title}

This page is part of the public website shell for Pacs008. Replace this placeholder with your final legal copy before production launch if you need jurisdiction-specific wording.

## Current scope

- project website information
- repository and package distribution links
- contact route for questions or support requests

## Practical note

For operational or regulated deployments, have your legal and compliance teams review any final privacy, retention, or terms language before publishing.
`;
}

function contactBody() {
  return `# Contact

For repository issues, feature requests, and implementation questions, use the GitHub project as the primary channel.

- Repository: <https://github.com/sebastienrousseau/pacs008>
- Releases: <https://github.com/sebastienrousseau/pacs008/releases>
- Package: <https://pypi.org/project/pacs008/>

If you need a private operational discussion, add your preferred contact route here before launch.`;
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function write(filePath, content) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, "utf8");
}

await write(
  path.join(docsDir, "index.md"),
  `---\ntitle: Pacs008\ndescription: Redirecting to the English home page.\nlang: en-GB\nlayout: page\nrobots: noindex, follow\ncanonical: /en/\n---\n\nRedirecting to [English home page](/en/)…\n`
);

await write(
  path.join(docsDir, "404.md"),
  `---\ntitle: Page not found | Pacs008\ndescription: The requested Pacs008 page could not be found.\nlang: en-GB\n---\n\n# Page not found\n\nThe page you requested is not available. Head back to [the English home page](/en/).\n`
);

for (const locale of locales) {
  const base = path.join(docsDir, locale.key);
  await write(path.join(base, "index.md"), pageTemplate({
    title: `Pacs008 | ${locale.label}`,
    description: locale.tagline,
    lang: locale.lang,
    body: homeBody(locale)
  }));
  await write(path.join(base, "about", "index.md"), pageTemplate({
    title: `About Pacs008 | ${locale.label}`,
    description: "What Pacs008 does and who it is for.",
    lang: locale.lang,
    body: aboutBody()
  }));
  await write(path.join(base, "message-types", "index.md"), pageTemplate({
    title: `Message Types | ${locale.label}`,
    description: "Supported ISO 20022 pacs message families and versions.",
    lang: locale.lang,
    body: messageTypesBody()
  }));
  await write(path.join(base, "api", "index.md"), pageTemplate({
    title: `API | ${locale.label}`,
    description: "REST and CLI workflow support in Pacs008.",
    lang: locale.lang,
    body: apiBody()
  }));
  await write(path.join(base, "contact", "index.md"), pageTemplate({
    title: `Contact | ${locale.label}`,
    description: "How to reach the Pacs008 project.",
    lang: locale.lang,
    body: contactBody()
  }));
  await write(path.join(base, "privacy", "index.md"), pageTemplate({
    title: `Privacy | ${locale.label}`,
    description: "Privacy information for the Pacs008 website.",
    lang: locale.lang,
    body: legalBody("Privacy")
  }));
  await write(path.join(base, "terms", "index.md"), pageTemplate({
    title: `Terms | ${locale.label}`,
    description: "Terms information for the Pacs008 website.",
    lang: locale.lang,
    body: legalBody("Terms")
  }));
}

console.log(`Generated ${locales.length} locale trees for Pacs008.`);
