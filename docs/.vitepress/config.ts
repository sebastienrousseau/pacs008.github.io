import { defineConfig } from "vitepress";
import { writeFileSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { sharedHead } from "./config/head";
import { LOCALE_HOME_LABELS, LOCALE_META, SITE_URL, buildHreflangTags, buildSitemapHreflangLinks, resolvePageMeta } from "./config/seo";
import { getUiStrings } from "./config/i18n";
import { faqAccordionPlugin } from "./config/faq-accordion";

const RTL_LOCALES = new Set(["ar", "he"]);

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function navFor(locale: string) {
  const t = getUiStrings(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const nav = [
    {
      text: t.docs,
      items: [
        { text: t.about, link: `${prefix}/about/` },
        { text: t.messageTypes, link: `${prefix}/message-types/` },
        { text: t.selectionGuide, link: `${prefix}/message-selection/` },
        { text: t.pacsExplained, link: `${prefix}/pacs-explained/` }
      ]
    },
    {
      text: t.navResources,
      items: [
        { text: t.structuredAddress, link: `${prefix}/structured-address/` },
        { text: t.api, link: `${prefix}/api/` },
        { text: t.faq, link: `${prefix}/faq/` },
        { text: t.glossary, link: `${prefix}/glossary/` },
        { text: t.changelog, link: `${prefix}/changelog/` },
        { text: t.contact, link: `${prefix}/contact/` }
      ]
    }
  ];
  return nav;
}

function localSearchOptionsFor(locale: string) {
  const t = getUiStrings(locale);
  return {
    translations: {
      button: {
        buttonText: t.searchButtonText,
        buttonAriaLabel: t.searchButtonAriaLabel
      }
    }
  };
}

function localeHomePath(locale: string): string {
  return locale === "en" ? "/" : `/${locale}/`;
}

function localeFromBuiltPath(rel: string): string {
  const segments = rel.split("/").filter(Boolean);
  return segments[0] && LOCALE_META[segments[0]] ? segments[0] : "en";
}

function postBuildLocaleReplacements(html: string, locale: string): string {
  const t = getUiStrings(locale);
  return html
    .replace(/>\s*Main Navigation\s*</g, `> ${t.mainNavigation} <`)
    .replace(/aria-label="extra navigation"/g, `aria-label="${escapeXml(t.extraNavigation)}"`)
    .replace(/aria-label="mobile navigation"/g, `aria-label="${escapeXml(t.mobileNavigation)}"`)
    .replace(/aria-label="Toggle dark mode"/g, `aria-label="${escapeXml(t.toggleDarkMode)}"`);
}

function breadcrumbNameForSegment(locale: string, segment: string): string {
  const t = getUiStrings(locale);
  const known: Record<string, string> = {
    about: t.about,
    "message-types": t.messageTypes,
    "message-selection": t.selectionGuide,
    api: t.api,
    contact: t.contact,
    privacy: t.privacy,
    terms: t.terms,
    editorial: t.editorial,
    "structured-address": t.structuredAddress,
    faq: t.faq,
    glossary: t.glossary,
    "pacs-explained": t.pacsExplained,
    changelog: t.changelog
  };
  return known[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
}

const locales = Object.fromEntries(
  Object.entries(LOCALE_META).map(([key, value]) => [
    key === "en" ? "root" : key,
    {
      label: {
        en: "\u{1F1EC}\u{1F1E7} English",
        ar: "\u{1F1F8}\u{1F1E6} العربية",
        de: "\u{1F1E9}\u{1F1EA} Deutsch",
        es: "\u{1F1EA}\u{1F1F8} Español",
        fr: "\u{1F1EB}\u{1F1F7} Français",
        he: "\u{1F1EE}\u{1F1F1} עברית",
        hi: "\u{1F1EE}\u{1F1F3} हिन्दी",
        id: "\u{1F1EE}\u{1F1E9} Bahasa Indonesia",
        it: "\u{1F1EE}\u{1F1F9} Italiano",
        ja: "\u{1F1EF}\u{1F1F5} 日本語",
        ko: "\u{1F1F0}\u{1F1F7} 한국어",
        nl: "\u{1F1F3}\u{1F1F1} Nederlands",
        pl: "\u{1F1F5}\u{1F1F1} Polski",
        pt: "\u{1F1E7}\u{1F1F7} Português",
        ro: "\u{1F1F7}\u{1F1F4} Română",
        ru: "\u{1F1F7}\u{1F1FA} Русский",
        th: "\u{1F1F9}\u{1F1ED} ไทย",
        tr: "\u{1F1F9}\u{1F1F7} Türkçe",
        uk: "\u{1F1FA}\u{1F1E6} Українська",
        vi: "\u{1F1FB}\u{1F1F3} Tiếng Việt",
        zh: "\u{1F1E8}\u{1F1F3} 简体中文",
        "zh-tw": "\u{1F1F9}\u{1F1FC} 繁體中文",
        bn: "\u{1F1E7}\u{1F1E9} বাংলা",
        cs: "\u{1F1E8}\u{1F1FF} Čeština",
        ha: "\u{1F1F3}\u{1F1EC} Hausa",
        sv: "\u{1F1F8}\u{1F1EA} Svenska",
        tl: "\u{1F1F5}\u{1F1ED} Filipino",
        yo: "\u{1F1F3}\u{1F1EC} Yorùbá"
      }[key],
      lang: value.lang,
      dir: RTL_LOCALES.has(key) ? "rtl" : "ltr",
      link: localeHomePath(key),
      themeConfig: {
        nav: navFor(key),
        outline: { label: getUiStrings(key).outlineLabel },
        darkModeSwitchLabel: getUiStrings(key).appearanceLabel,
        lightModeSwitchTitle: getUiStrings(key).lightModeSwitchTitle,
        darkModeSwitchTitle: getUiStrings(key).darkModeSwitchTitle,
        sidebarMenuLabel: getUiStrings(key).outlineLabel,
        returnToTopLabel: getUiStrings(key).returnToTopLabel,
        langMenuLabel: getUiStrings(key).langMenuLabel,
        skipToContentLabel: getUiStrings(key).skipToContentLabel,
        lastUpdated: { text: getUiStrings(key).lastUpdatedText },
        search: {
          provider: "local",
          options: localSearchOptionsFor(key)
        },
        footer: undefined as unknown as { message: string; copyright: string }
      }
    }
  ])
);

const SITE_NAME = "pacs008";

export default defineConfig({
  title: SITE_NAME,
  description: "Automate ISO 20022 pacs.008 message generation, validation, and delivery workflows.",
  cleanUrls: true,
  lastUpdated: true,
  head: sharedHead,
  srcExclude: ["public/**"],
  markdown: {
    config: (md) => {
      md.use(faqAccordionPlugin);
    }
  },
  sitemap: {
    hostname: "https://pacs008.com",
    xmlns: { xhtml: true },
    transformItems(items) {
      return items
        .filter((item) => !item.url.includes("404") && !/\/en\/$/.test(item.url))
        .map((item) => ({
          ...item,
          lastmod: item.lastmod ? new Date(item.lastmod).toISOString().split("T")[0] : undefined,
          links: buildSitemapHreflangLinks(item.url)
        }));
    }
  },
  locales,
  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir;
    const now = new Date().toUTCString();
    const items: string[] = [];

    function walkDir(dir: string): string[] {
      const files: string[] = [];
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) files.push(...walkDir(full));
        else if (entry.name === "index.html") files.push(full);
      }
      return files;
    }

    for (const file of walkDir(outDir)) {
      let html = readFileSync(file, "utf8");
      const rel = file.slice(outDir.length).replace(/\\/g, "/");
      html = postBuildLocaleReplacements(html, localeFromBuiltPath(rel));
      writeFileSync(file, html, "utf8");
      const titleMatch = html.match(/<title>([^<]*)<\/title>/);
      const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
      const title = titleMatch?.[1] || "";
      const description = descMatch?.[1] || "";
      if (!title || title.includes("Page not found")) continue;
      const itemRel = rel.replace(/index\.html$/, "");
      const link = `${SITE_URL}${itemRel}`;
      items.push(`    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <description>${escapeXml(description)}</description>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${now}</pubDate>
    </item>`);
    }

    const rss = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>pacs008</title>
    <link>${SITE_URL}</link>
    <description>Automate ISO 20022 pacs.008 message generation, validation, and delivery workflows.</description>
    <language>en-GB</language>
    <lastBuildDate>${now}</lastBuildDate>
    <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
    <ttl>60</ttl>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>`;

    writeFileSync(join(outDir, "rss.xml"), rss, "utf8");
    console.log(`RSS feed generated with ${items.length} items.`);

    // Performance: change font-display from swap to optional in CSS bundles
    for (const entry of readdirSync(join(outDir, "assets"))) {
      if (entry.endsWith(".css")) {
        const cssPath = join(outDir, "assets", entry);
        let css = readFileSync(cssPath, "utf8");
        const count = (css.match(/font-display:\s*swap/g) || []).length;
        if (count > 0) {
          css = css.replace(/font-display:\s*swap/g, "font-display:optional");
          writeFileSync(cssPath, css, "utf8");
          console.log(`Patched ${count} font-display rules in ${entry}`);
        }
      }
    }
  },
  transformPageData(pageData) {
    const meta = resolvePageMeta(pageData);
    pageData.title = meta.title;
    pageData.titleTemplate = ":title";

    const fm = pageData.frontmatter;
    if (typeof fm.metaTitle === "string" && !fm.title) {
      fm.title = fm.metaTitle;
    }

    if (fm.home === true && !fm.layout) {
      fm.layout = "home";
    }

    if (fm.layout === "home" && !fm.hero) {
      const actionText = typeof fm.actionText === "string" ? fm.actionText : "Learn about pacs008";
      const actionLink = typeof fm.actionLink === "string" ? fm.actionLink : "/about/";
      const actions: Array<{ theme: string; text: string; link: string }> = [
        { theme: "brand", text: actionText, link: actionLink }
      ];
      if (typeof fm.actionText2 === "string" && typeof fm.actionLink2 === "string") {
        actions.push({ theme: "alt", text: fm.actionText2, link: fm.actionLink2 });
      }

      fm.hero = {
        name: typeof fm.heroText === "string" ? fm.heroText : fm.title || SITE_NAME,
        text: "",
        tagline: typeof fm.tagline === "string" ? fm.tagline : fm.subtitle || fm.description || "",
        actions
      };

      if (Array.isArray(fm.features)) {
        fm.features = fm.features.map((feature: Record<string, unknown>) => ({
          title: feature.title || "",
          details: feature.details || ""
        }));
      }
    }
  },
  transformHead({ pageData }) {
    const meta = resolvePageMeta(pageData);
    const fm = pageData.frontmatter;
    const head: Array<[string, Record<string, string>]> = [
      ["meta", { name: "description", content: meta.description }],
      ["link", { rel: "canonical", href: meta.canonical }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:title", content: meta.title }],
      ["meta", { property: "og:description", content: meta.description }],
      ["meta", { property: "og:url", content: meta.canonical }],
      ["meta", { property: "og:site_name", content: SITE_NAME }],
      ["meta", { property: "og:locale", content: meta.localeOg }],
      ["meta", { property: "og:image", content: meta.ogImage }],
      ["meta", { property: "og:image:alt", content: meta.ogImageAlt }],
      ["meta", { property: "og:image:width", content: "1200" }],
      ["meta", { property: "og:image:height", content: "630" }],
      ["meta", { property: "og:image:type", content: "image/png" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:title", content: meta.title }],
      ["meta", { name: "twitter:description", content: meta.description }],
      ["meta", { name: "twitter:image", content: meta.ogImage }],
      ["meta", { name: "robots", content: typeof fm.robots === "string" ? fm.robots : "index, follow" }],
      ...buildHreflangTags(meta.routePath)
    ];

    // Hero uses CSS gradient — no image preload needed

    // JSON-LD: WebSite on homepage, BreadcrumbList on all pages
    if (fm.layout === "home") {
      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": SITE_URL,
        "description": meta.description
      })] as unknown as [string, Record<string, string>]);
    }

    const segments = pageData.relativePath
      .replace(/index\.md$/i, "")
      .replace(/\.md$/i, "")
      .split("/")
      .filter(Boolean);

    if (segments.length > 0) {
      const localeKey = LOCALE_META[segments[0]] ? segments[0] : "en";
      const contentSegments = LOCALE_META[segments[0]] ? segments.slice(1) : segments;
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": LOCALE_HOME_LABELS[localeKey],
          "item": `${SITE_URL}${localeHomePath(localeKey)}`
        },
        ...contentSegments.map((seg, i) => ({
          "@type": "ListItem",
          "position": i + 2,
          "name": breadcrumbNameForSegment(localeKey, seg),
          "item": `${SITE_URL}/${[...segments.slice(0, LOCALE_META[segments[0]] ? 1 : 0), ...contentSegments.slice(0, i + 1)].join("/")}/`
        }))
      ];

      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      })] as unknown as [string, Record<string, string>]);
    }

    // JSON-LD: TechArticle on pacs message pages
    const lastContentSegment = segments.length > 0
      ? (LOCALE_META[segments[0]] ? segments.slice(1) : segments).at(-1) || ""
      : "";
    const isPacsPage = lastContentSegment.startsWith("pacs.");

    if (isPacsPage) {
      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": meta.title,
        "description": meta.description,
        "author": { "@type": "Person", "name": "Sebastien Rousseau", "url": "https://sebastienrousseau.com/" },
        "dateModified": pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : new Date().toISOString(),
        "datePublished": "2025-01-01T00:00:00.000Z",
        "publisher": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
        "inLanguage": meta.locale,
        "mainEntityOfPage": meta.canonical,
        "about": { "@type": "Thing", "name": "ISO 20022", "url": "https://www.iso20022.org/" },
        "proficiencyLevel": "Expert"
      })] as unknown as [string, Record<string, string>]);
    }

    // JSON-LD: SoftwareApplication on API page
    const isApiPage = lastContentSegment === "api";
    if (isApiPage) {
      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "pacs008",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Cross-platform",
        "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        "url": "https://pacs008.com/api/",
        "downloadUrl": "https://pypi.org/project/pacs008/",
        "softwareRequirements": "Python 3.9.2 or later",
        "softwareVersion": "0.0.1",
        "image": "https://pacs008.com/logo.webp",
        "description": meta.description,
        "author": { "@type": "Person", "name": "Sebastien Rousseau", "url": "https://sebastienrousseau.com/" }
      })] as unknown as [string, Record<string, string>]);
    }

    // JSON-LD: FAQPage on pacs message pages with FAQ sections
    if (isPacsPage && Array.isArray(fm.faq) && fm.faq.length > 0) {
      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (fm.faq as Array<{ question: string; answer: string }>).map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      })] as unknown as [string, Record<string, string>]);
    }

    // JSON-LD: HowTo on pages with implementation checklists
    if (Array.isArray(fm.howto) && fm.howto.length > 0) {
      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": typeof fm.howtoName === "string" ? fm.howtoName : `How to implement ${meta.title}`,
        "description": typeof fm.howtoDescription === "string" ? fm.howtoDescription : meta.description,
        "step": (fm.howto as Array<{ name: string; text: string }>).map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": step.name,
          "text": step.text
        }))
      })] as unknown as [string, Record<string, string>]);
    }

    // JSON-LD: WebPage on every page
    head.push(["script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "author": { "@type": "Person", "@id": `${SITE_URL}/#sebastien-rousseau`, "name": "Sebastien Rousseau", "url": "https://sebastienrousseau.com/" },
      "copyrightHolder": { "@type": "Person", "@id": `${SITE_URL}/#sebastien-rousseau`, "name": "Sebastien Rousseau", "url": "https://sebastienrousseau.com/" },
      "copyrightYear": new Date().getFullYear(),
      "creator": { "@type": "Person", "@id": `${SITE_URL}/#sebastien-rousseau`, "name": "Sebastien Rousseau", "url": "https://sebastienrousseau.com/" },
      "dateModified": pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : new Date().toISOString(),
      "datePublished": "2025-01-01T00:00:00.000Z",
      "description": meta.description,
      "headline": meta.title,
      "image": { "@type": "ImageObject", "url": meta.ogImage },
      "inLanguage": meta.locale,
      "mainEntityOfPage": meta.canonical,
      "name": SITE_NAME,
      "publisher": {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": { "@type": "ImageObject", "url": meta.ogImage },
        "sameAs": [
          "https://github.com/sebastienrousseau/pacs008",
          "https://pypi.org/project/pacs008/"
        ]
      }
    })] as unknown as [string, Record<string, string>]);

    return head;
  },
  transformHtml(code) {
    // SSR: add aria-label and fix empty title on theme toggle buttons
    code = code.replace(
      /<button\s+([^>]*class="[^"]*VPSwitchAppearance[^"]*"[^>]*)>/g,
      (match, attrs) => {
        let result = match;
        // Remove empty title attribute
        result = result.replace(/\s+title(?=[>\s])/, '');
        // Add aria-label if missing
        if (!/aria-label=/.test(result)) {
          result = result.replace(/>$/, ' aria-label="Toggle dark mode">');
        }
        return result;
      }
    );
    // Doc pages already have <main class="main"> from VitePress.
    // Home pages get role="main" on VPContent for a11y landmark coverage.
    if (!/<main[\s>]/.test(code)) {
      code = code.replace(
        /id="VPContent"(?![^>]*role=)/g,
        'id="VPContent" role="main"'
      );
    }
    // VPDocFooter landmark is fixed client-side in Layout.vue (fixDocFooterLandmark)
    // SSR: hide search shortcut keys from accessibility tree to prevent label mismatch
    code = code.replace(
      /(<span class="DocSearch-Button-Keys")(?![^>]*aria-hidden)/g,
      '$1 aria-hidden="true"'
    );
    // SSR: wrap flag emojis in aria-hidden so screen readers only announce the language name
    code = code.replace(
      /([\u{1F1E0}-\u{1F1FF}]{2})\s/gu,
      '<span aria-hidden="true">$1</span> '
    );
    // SSR: add visible sr-only text to icon-only links for SEO (no-anchor-text fix)
    code = code.replace(
      /(<a[^>]*class="[^"]*VPSocialLink[^"]*"[^>]*>)(<span[^>]*><\/span>)/g,
      '$1<span class="sr-only">GitHub</span>$2'
    );
    // SSR: replace zero-width spaces in header anchors with sr-only permalink text
    code = code.replace(
      /(<a class="header-anchor"[^>]*aria-label="Permalink to &quot;)([^&]*)(&quot;"[^>]*>)\u200B(<\/a>)/g,
      '$1$2$3<span class="sr-only">$2</span>$4'
    );
    // SSR: add type="button" and aria-label to code-block copy buttons
    code = code.replace(
      /<button(?=[^>]*class="[^"]*\bcopy\b[^"]*")(?![^>]*\btype=)/g,
      '<button type="button"'
    );
    code = code.replace(
      /<button([^>]*class="[^"]*\bcopy\b[^"]*")(?![^>]*aria-label)/g,
      '<button$1 aria-label="Copy code"'
    );

    // --- Performance: remove modulepreload and font preload hints ---
    code = code.replace(/<link rel="modulepreload"[^>]*>\n?/g, '');
    code = code.replace(/<link rel="preload"[^>]*as="font"[^>]*>\n?/g, '');

    // Note: JS deferral via requestIdleCallback was removed because it
    // breaks VitePress client-side routing and hydration. The framework
    // module must load synchronously for nav links to work.

    return code;
  },
  themeConfig: {
    outline: { level: [2, 3] },
    siteTitle: "pacs008",
    logo: { src: "/logo.webp", alt: "pacs008 home", width: 28, height: 28 },
    langMenuLabel: "Languages",
    search: { provider: "local", options: localSearchOptionsFor("en") },
    socialLinks: [
      { icon: "github", link: "https://github.com/sebastienrousseau/pacs008" }
    ],
    footer: undefined as unknown as { message: string; copyright: string }
  }
});
