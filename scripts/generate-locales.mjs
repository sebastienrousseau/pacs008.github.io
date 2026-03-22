import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
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

const pageCopy = {
  en: {
    aboutTitle: "About Pacs008",
    aboutDescription: "What Pacs008 does and who it is for.",
    aboutIntro: "Pacs008 is a Python toolkit for automating ISO 20022 FI-to-FI customer credit transfer workflows.",
    whatItDoes: "What it does",
    whoItIsFor: "Who it is for",
    messageTitle: "Message Types",
    messageDescription: "Supported ISO 20022 pacs message families and versions.",
    messageIntro: "Pacs008 covers both the core pacs.008 family and related messages used in adjacent orchestration and reconciliation flows.",
    includedSupport: "Included support",
    deliveryModel: "Delivery model",
    deliveryText: "Each supported message type is backed by template assets and validation logic so teams can standardise generation and regression testing across multiple downstream channels.",
    apiTitle: "API",
    apiDescription: "REST and CLI workflow support in Pacs008.",
    apiIntro: "The project ships with both a REST API and a CLI for operational payment workflows.",
    apiCapabilities: "API capabilities",
    cliCapabilities: "CLI capabilities",
    contactTitle: "Contact",
    contactDescription: "How to reach the Pacs008 project.",
    contactIntro: "For repository issues, feature requests, and implementation questions, use the project links below.",
    privacyTitle: "Privacy",
    privacyDescription: "Privacy information for the Pacs008 website.",
    termsTitle: "Terms",
    termsDescription: "Terms information for the Pacs008 website.",
    legalIntro: "This page is part of the public website shell for Pacs008. Replace this placeholder with your final legal copy before production launch if you need jurisdiction-specific wording.",
    currentScope: "Current scope",
    practicalNote: "Practical note",
    practicalText: "For operational or regulated deployments, have your legal and compliance teams review any final privacy, retention, or terms language before publishing."
  },
  fr: {
    aboutTitle: "A propos de Pacs008",
    aboutDescription: "Ce que fait Pacs008 et a qui il s'adresse.",
    aboutIntro: "Pacs008 est une boite a outils Python pour automatiser les flux ISO 20022 de virement client FI-to-FI.",
    whatItDoes: "Ce qu'il fait",
    whoItIsFor: "Pour qui",
    messageTitle: "Types de messages",
    messageDescription: "Familles et versions pacs ISO 20022 prises en charge.",
    messageIntro: "Pacs008 couvre le coeur de la famille pacs.008 ainsi que les messages lies utilises dans les flux d'orchestration et de rapprochement.",
    includedSupport: "Prise en charge incluse",
    deliveryModel: "Mode de livraison",
    deliveryText: "Chaque type de message pris en charge repose sur des modeles et une logique de validation afin de normaliser la generation et les tests de regression.",
    apiTitle: "API",
    apiDescription: "Prise en charge REST et CLI dans Pacs008.",
    apiIntro: "Le projet fournit a la fois une API REST et une CLI pour les flux de paiement operationnels.",
    apiCapabilities: "Capacites API",
    cliCapabilities: "Capacites CLI",
    contactTitle: "Contact",
    contactDescription: "Comment contacter le projet Pacs008.",
    contactIntro: "Pour les problemes de depot, les demandes de fonctionnalites et les questions d'implementation, utilisez les liens ci-dessous.",
    privacyTitle: "Confidentialite",
    privacyDescription: "Informations de confidentialite pour le site Pacs008.",
    termsTitle: "Conditions",
    termsDescription: "Informations sur les conditions du site Pacs008.",
    legalIntro: "Cette page fait partie de l'enveloppe publique du site Pacs008. Remplacez ce texte par votre version juridique finale avant la mise en production si vous avez besoin d'un libelle specifique.",
    currentScope: "Portee actuelle",
    practicalNote: "Note pratique",
    practicalText: "Pour les deploiements operationnels ou reglementes, faites relire les formulations finales par vos equipes juridiques et conformite."
  },
  de: {
    aboutTitle: "Uber Pacs008",
    aboutDescription: "Was Pacs008 leistet und fur wen es gedacht ist.",
    aboutIntro: "Pacs008 ist ein Python-Toolkit zur Automatisierung von ISO 20022 FI-to-FI-Kundenzahlungsablaufen.",
    whatItDoes: "Funktionen",
    whoItIsFor: "Zielgruppen",
    messageTitle: "Nachrichtentypen",
    messageDescription: "Unterstutzte ISO 20022 pacs-Familien und Versionen.",
    messageIntro: "Pacs008 deckt sowohl die zentrale pacs.008-Familie als auch verwandte Nachrichten fur Orchestrierung und Abstimmung ab.",
    includedSupport: "Enthaltene Unterstutzung",
    deliveryModel: "Bereitstellungsmodell",
    deliveryText: "Jeder unterstutzte Nachrichtentyp basiert auf Vorlagen und Validierungslogik, damit Teams Generierung und Regressionstests standardisieren konnen.",
    apiTitle: "API",
    apiDescription: "REST- und CLI-Unterstutzung in Pacs008.",
    apiIntro: "Das Projekt liefert sowohl eine REST-API als auch eine CLI fur operative Zahlungsablaufe.",
    apiCapabilities: "API-Fahigkeiten",
    cliCapabilities: "CLI-Fahigkeiten",
    contactTitle: "Kontakt",
    contactDescription: "So erreichen Sie das Pacs008-Projekt.",
    contactIntro: "Fur Repository-Probleme, Funktionsanfragen und Implementierungsfragen verwenden Sie bitte die folgenden Links.",
    privacyTitle: "Datenschutz",
    privacyDescription: "Datenschutzinformationen fur die Pacs008-Website.",
    termsTitle: "Bedingungen",
    termsDescription: "Informationen zu den Nutzungsbedingungen der Pacs008-Website.",
    legalIntro: "Diese Seite ist Teil der offentlichen Pacs008-Website. Ersetzen Sie diesen Platzhalter vor dem Produktivstart durch Ihren finalen Rechtstext, falls Sie landerspezifische Formulierungen benotigen.",
    currentScope: "Aktueller Umfang",
    practicalNote: "Praktischer Hinweis",
    practicalText: "Bei operativen oder regulierten Einsatzen sollten Ihre Rechts- und Compliance-Teams die endgultigen Texte vor der Veroffentlichung prufen."
  }
};

function copyFor(localeKey) {
  return pageCopy[localeKey] ?? pageCopy.en;
}

function pageTemplate({ title, description, lang, body }) {
  return `---\ntitle: ${title}\ndescription: ${description}\nlang: ${lang}\nlastUpdated: true\nimage: /logo.svg\n---\n\n${body}\n`;
}

function homeFrontmatter(locale) {
  return `---
title: Pacs008 | ${locale.label}
description: ${locale.tagline}
lang: ${locale.lang}
author: Sebastien Rousseau
lastUpdated: true
image: /logo.svg
imageAlt: Pacs008
canonical: /${locale.key}/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Pacs008
pageType: home
schemaType: WebSite
heroText: ${locale.hero}
home: true
metaTitle: Pacs008
subtitle: ${locale.tagline}
tagline: ${locale.tagline}
actionLink: /${locale.key}/about/
---
`;
}

function aboutBody(localeKey) {
  const t = copyFor(localeKey);
  return `# ${t.aboutTitle}

${t.aboutIntro}

## ${t.whatItDoes}

- Generates XML for \`pacs.008\` and adjacent pacs message families
- Validates data and XML against schemas
- Exposes a FastAPI service for automated workflows
- Provides a CLI for local execution and CI pipelines
- Supports structured data sources including CSV, JSON, JSONL, SQLite, and Parquet

## ${t.whoItIsFor}

- payment operations teams
- platform engineers building internal banking rails
- migration programmes moving toward ISO 20022
- compliance and QA teams validating outbound payment messages

## 2026 readiness

Pacs008 is designed around the operational deadlines and data-quality pressures that matter in 2026:

- structured and hybrid postal address handling for CBPR+ and scheme migrations
- stronger validation around debtor, creditor, and agent data quality
- version-aware generation across legacy and current pacs.008 revisions
- automation paths that fit CI, batch operations, and internal payment services

## Why this site is different

Many public pacs.008 pages explain the message at a glossary or advisory level. Pacs008 focuses on execution:

- generate XML from real source data
- validate before delivery
- model payment chains and downstream formats
- make scheme-specific changes testable in code
`;
}

function messageTypesBody(localeKey) {
  const t = copyFor(localeKey);
  return `# ${t.messageTitle}

${t.messageIntro}

## ${t.includedSupport}

${versions.map((version) => `- \`${version}\``).join("\n")}

## ${t.deliveryModel}

${t.deliveryText}

## 2026 market context

- **SEPA SCT / SCT Inst**: pacs.008 remains central for credit transfer exchange and instant-payment processing.
- **CBPR+**: pacs.008 continues to replace MT103-style cross-border payloads with richer structured data.
- **Structured addresses**: current market guidance and bank readiness material point to the November 2026 cutover away from fully unstructured postal addresses.
- **Serial method and STP**: multi-leg bank-to-bank chains still matter, and straight-through variants remain important for operational efficiency.

## What Pacs008 adds

Instead of stopping at definitions, Pacs008 gives you template-backed generation and validation across supported revisions so you can:

- compare versions
- regression-test scheme updates
- harden outbound payment data before release
- support product, operations, and migration teams from one codebase
`;
}

function apiBody(localeKey) {
  const t = copyFor(localeKey);
  return `# ${t.apiTitle}

${t.apiIntro}

## ${t.apiCapabilities}

- health and readiness endpoints
- data validation before XML generation
- synchronous generation for direct workflows
- asynchronous job execution for longer-running pipelines
- downloadable generated files through job completion flows

## ${t.cliCapabilities}

- point to a source file and message version
- validate against XSD before delivery
- generate XML into pipeline-friendly output directories
- fit into CI jobs, batch schedules, and local operator tooling

## Implementation focus

Competitor content often explains pacs.008 structure, but rarely shows how teams should operationalise it. Pacs008 is built for:

- pre-flight validation before message creation
- scheme and version selection at runtime
- asynchronous generation flows for internal services
- deterministic outputs for testing and audit trails

## Data-quality pressure in 2026

Operational teams are under increasing pressure to improve message quality, especially around:

- party and agent identification
- structured or hybrid address readiness
- richer remittance and reference handling
- transparency across serial payment chains

The API and CLI are designed to make those checks part of the workflow instead of a manual review step.
`;
}

function legalBody(localeKey, title) {
  const t = copyFor(localeKey);
  return `# ${title}

${t.legalIntro}

## ${t.currentScope}

- project website information
- repository and package distribution links
- contact route for questions or support requests

## ${t.practicalNote}

${t.practicalText}
`;
}

function contactBody(localeKey) {
  const t = copyFor(localeKey);
  return `# ${t.contactTitle}

${t.contactIntro}

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
  const t = copyFor(locale.key);
  await write(path.join(base, "index.md"), homeFrontmatter(locale));
  await write(path.join(base, "about", "index.md"), pageTemplate({
    title: `${t.aboutTitle} | ${locale.label}`,
    description: t.aboutDescription,
    lang: locale.lang,
    body: aboutBody(locale.key)
  }));
  await write(path.join(base, "message-types", "index.md"), pageTemplate({
    title: `${t.messageTitle} | ${locale.label}`,
    description: t.messageDescription,
    lang: locale.lang,
    body: messageTypesBody(locale.key)
  }));
  await write(path.join(base, "api", "index.md"), pageTemplate({
    title: `${t.apiTitle} | ${locale.label}`,
    description: t.apiDescription,
    lang: locale.lang,
    body: apiBody(locale.key)
  }));
  await write(path.join(base, "contact", "index.md"), pageTemplate({
    title: `${t.contactTitle} | ${locale.label}`,
    description: t.contactDescription,
    lang: locale.lang,
    body: contactBody(locale.key)
  }));
  await write(path.join(base, "privacy", "index.md"), pageTemplate({
    title: `${t.privacyTitle} | ${locale.label}`,
    description: t.privacyDescription,
    lang: locale.lang,
    body: legalBody(locale.key, t.privacyTitle)
  }));
  await write(path.join(base, "terms", "index.md"), pageTemplate({
    title: `${t.termsTitle} | ${locale.label}`,
    description: t.termsDescription,
    lang: locale.lang,
    body: legalBody(locale.key, t.termsTitle)
  }));
}

console.log(`Generated ${locales.length} locale trees for Pacs008.`);
