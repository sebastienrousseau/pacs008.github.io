import { defineConfig } from "vitepress";
import { sharedHead } from "./config/head";
import { LOCALE_META, buildHreflangTags, resolvePageMeta } from "./config/seo";
import { getUiStrings } from "./config/i18n";

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

function sidebarFor(locale: string) {
  const t = getUiStrings(locale);
  const prefix = `/${locale}`;
  return [
    {
      text: SITE_NAME,
      items: [
        { text: t.home, link: `${prefix}/` },
        { text: t.about, link: `${prefix}/about/` },
        {
          text: t.messageTypes,
          link: `${prefix}/message-types/`,
          collapsed: true,
          items: [
            { text: "pacs.002.001.12", link: `${prefix}/pacs.002.001.12/` },
            { text: "pacs.003.001.09", link: `${prefix}/pacs.003.001.09/` },
            { text: "pacs.004.001.11", link: `${prefix}/pacs.004.001.11/` },
            { text: "pacs.007.001.11", link: `${prefix}/pacs.007.001.11/` },
            { text: "pacs.008.001.13", link: `${prefix}/pacs.008.001.13/` },
            { text: "pacs.009.001.10", link: `${prefix}/pacs.009.001.10/` },
            { text: "pacs.010.001.05", link: `${prefix}/pacs.010.001.05/` },
            { text: "pacs.028.001.05", link: `${prefix}/pacs.028.001.05/` }
          ]
        },
        { text: t.api, link: `${prefix}/api/` },
        { text: t.contact, link: `${prefix}/contact/` },
        { text: t.privacy, link: `${prefix}/privacy/` },
        { text: t.terms, link: `${prefix}/terms/` }
      ]
    }
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
      link: `/${key}/`,
      themeConfig: {
        nav: navFor(key),
        sidebar: sidebarFor(key)
      }
    }
  ])
);

const SITE_NAME = "Pacs008";

export default defineConfig({
  title: SITE_NAME,
  description: "Automate ISO 20022 pacs.008 message generation, validation, and delivery workflows.",
  cleanUrls: true,
  lastUpdated: true,
  head: sharedHead,
  srcExclude: ["public/**"],
  sitemap: {
    hostname: "https://pacs008.com"
  },
  locales,
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
      const actionText = typeof fm.actionText === "string" ? fm.actionText : "Read more";
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
    return [
      ["meta", { name: "description", content: meta.description }],
      ["link", { rel: "canonical", href: meta.canonical }],
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
  },
  themeConfig: {
    siteTitle: "Pacs008",
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
