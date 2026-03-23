import { defineConfig } from "vitepress";
import { writeFileSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { sharedHead } from "./config/head";
import { LOCALE_META, SITE_URL, buildHreflangTags, resolvePageMeta } from "./config/seo";
import { getUiStrings } from "./config/i18n";

const RTL_LOCALES = new Set(["ar", "he"]);

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function navFor(locale: string) {
  const t = getUiStrings(locale);
  const prefix = `/${locale}`;
  return [
    { text: t.home, link: `${prefix}/` },
    { text: t.about, link: `${prefix}/about/` },
    { text: t.messageTypes, link: `${prefix}/message-types/` },
    { text: t.api, link: `${prefix}/api/` },
    { text: t.contact, link: `${prefix}/contact/` }
  ];
}

const locales = Object.fromEntries(
  Object.entries(LOCALE_META).map(([key, value]) => [
    key === "en" ? "root" : key,
    {
      label: {
        en: "English",
        ar: "العربية",
        de: "Deutsch",
        es: "Español",
        fr: "Français",
        he: "עברית",
        hi: "हिन्दी",
        id: "Bahasa Indonesia",
        it: "Italiano",
        ja: "日本語",
        ko: "한국어",
        nl: "Nederlands",
        pl: "Polski",
        pt: "Português",
        ro: "Română",
        ru: "Русский",
        th: "ไทย",
        tr: "Türkçe",
        uk: "Українська",
        vi: "Tiếng Việt",
        zh: "简体中文",
        "zh-tw": "繁體中文"
      }[key],
      lang: value.lang,
      dir: RTL_LOCALES.has(key) ? "rtl" : "ltr",
      link: `/${key}/`,
      themeConfig: {
        nav: navFor(key)
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
  sitemap: {
    hostname: "https://pacs008.com",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("404"));
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
      const html = readFileSync(file, "utf8");
      const titleMatch = html.match(/<title>([^<]*)<\/title>/);
      const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
      const title = titleMatch?.[1] || "";
      const description = descMatch?.[1] || "";
      if (!title || title.includes("Page not found")) continue;
      const rel = file.slice(outDir.length).replace(/index\.html$/, "").replace(/\\/g, "/");
      const link = `${SITE_URL}${rel}`;
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
      const actionLink = typeof fm.actionLink === "string" ? fm.actionLink : "/en/about/";
      fm.hero = {
        name: typeof fm.heroText === "string" ? fm.heroText : fm.title || SITE_NAME,
        text: "",
        tagline: typeof fm.tagline === "string" ? fm.tagline : fm.subtitle || fm.description || "",
        actions: [
          {
            theme: "brand",
            text: actionText,
            link: actionLink
          }
        ]
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
    if (pageData.relativePath === "index.md") {
      return [
        ["meta", { "http-equiv": "refresh", content: "0;url=/en/" }],
        ["link", { rel: "canonical", href: "https://pacs008.com/en/" }]
      ];
    }

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
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:title", content: meta.title }],
      ["meta", { name: "twitter:description", content: meta.description }],
      ["meta", { name: "twitter:image", content: meta.ogImage }],
      ...buildHreflangTags(meta.routePath)
    ];

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
      const breadcrumbItems = segments.map((seg, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
        "item": `${SITE_URL}/${segments.slice(0, i + 1).join("/")}/`
      }));

      head.push(["script", { type: "application/ld+json" }, JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      })] as unknown as [string, Record<string, string>]);
    }

    // JSON-LD: WebPage on every page
    head.push(["script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "author": { "@type": "Person", "@id": "Sebastien Rousseau" },
      "copyrightHolder": { "@type": "Person", "@id": "Sebastien Rousseau" },
      "copyrightYear": "© 2025 pacs008. All rights reserved.",
      "creator": { "@type": "Person", "@id": "Sebastien Rousseau" },
      "dateModified": new Date().toISOString(),
      "datePublished": "2025-01-01T00:00:00.000Z",
      "description": meta.description,
      "headline": meta.title,
      "image": { "@type": "ImageObject", "url": meta.ogImage },
      "inLanguage": meta.locale,
      "mainEntityOfPage": meta.canonical,
      "name": SITE_NAME,
      "publisher": { "@type": "Person", "@id": "Sebastien Rousseau" }
    })] as unknown as [string, Record<string, string>]);

    return head;
  },
  themeConfig: {
    outline: { level: [2, 3] },
    siteTitle: "pacs008",
    logo: "/logo.svg",
    langMenuLabel: "Languages",
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/sebastienrousseau/pacs008" }
    ],
    footer: {
      message: "Open-source ISO 20022 tooling for financial teams and engineers.",
      copyright: "Copyright © Sebastien Rousseau 2026"
    }
  }
});
