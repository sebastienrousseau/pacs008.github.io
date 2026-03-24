export const SITE_URL = "https://pacs008.com";
export const SITE_NAME = "pacs008";
export const DEFAULT_AUTHOR = "Sebastien Rousseau";
export const DEFAULT_OG_IMAGE = "/images/og-image.png";

export const LOCALE_META: Record<string, { lang: string; home: string }> = {
  en: { lang: "en-GB", home: "Home" },
  ar: { lang: "ar-SA", home: "الرئيسية" },
  de: { lang: "de-DE", home: "Start" },
  es: { lang: "es-ES", home: "Inicio" },
  fr: { lang: "fr-FR", home: "Accueil" },
  he: { lang: "he-IL", home: "בית" },
  hi: { lang: "hi-IN", home: "होम" },
  id: { lang: "id-ID", home: "Beranda" },
  it: { lang: "it-IT", home: "Home" },
  ja: { lang: "ja-JP", home: "ホーム" },
  ko: { lang: "ko-KR", home: "홈" },
  nl: { lang: "nl-NL", home: "Home" },
  pl: { lang: "pl-PL", home: "Strona główna" },
  pt: { lang: "pt-BR", home: "Início" },
  ro: { lang: "ro-RO", home: "Acasă" },
  ru: { lang: "ru-RU", home: "Главная" },
  th: { lang: "th-TH", home: "หน้าแรก" },
  tr: { lang: "tr-TR", home: "Ana sayfa" },
  uk: { lang: "uk-UA", home: "Головна" },
  vi: { lang: "vi-VN", home: "Trang chủ" },
  zh: { lang: "zh-CN", home: "首页" },
  "zh-tw": { lang: "zh-TW", home: "首頁" }
};

export const LOCALE_KEYS = new Set(Object.keys(LOCALE_META));
export const LOCALE_HOME_LABELS = Object.fromEntries(
  Object.entries(LOCALE_META).map(([key, value]) => [key, value.home])
) as Record<string, string>;

export function slugToTitle(value: string): string {
  const map: Record<string, string> = {
    "message-types": "Message Types",
    api: "API",
    pacs008: "pacs008",
    "pacs.002.001.12": "pacs.002.001.12",
    "pacs.003.001.09": "pacs.003.001.09",
    "pacs.004.001.11": "pacs.004.001.11",
    "pacs.007.001.11": "pacs.007.001.11",
    "pacs.008.001.13": "pacs.008.001.13",
    "pacs.009.001.10": "pacs.009.001.10",
    "pacs.010.001.05": "pacs.010.001.05",
    "pacs.028.001.05": "pacs.028.001.05"
  };
  const lower = value.toLowerCase();
  if (map[lower]) return map[lower];
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

export function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function routeFromRelativePath(relativePath: string): string {
  const clean = relativePath
    .replace(/index\.md$/i, "")
    .replace(/\.md$/i, "")
    .replace(/\/+$/g, "");
  return clean ? `/${clean}/` : "/";
}

export function buildHreflangTags(routePath: string): Array<[string, Record<string, string>]> {
  const segments = routePath.split("/").filter(Boolean);
  const first = segments[0];
  const suffix = first && LOCALE_KEYS.has(first)
    ? `/${segments.slice(1).join("/")}/`.replace(/\/+/g, "/")
    : routePath;
  const localizedHref = (key: string) => key === "en"
    ? toAbsoluteUrl(suffix)
    : toAbsoluteUrl(`/${key}${suffix}`);

  const tags: Array<[string, Record<string, string>]> = [];
  for (const key of Object.keys(LOCALE_META)) {
    const href = localizedHref(key);
    tags.push(["link", { rel: "alternate", hreflang: key === "zh-tw" ? "zh-Hant" : key, href }]);
  }
  const xDefaultHref = localizedHref("en");
  tags.push(["link", { rel: "alternate", hreflang: "x-default", href: xDefaultHref }]);
  return tags;
}

export function resolvePageMeta(pageData: { title?: string; description?: string; relativePath: string; frontmatter: Record<string, unknown> }) {
  const routePath = routeFromRelativePath(pageData.relativePath);
  const localeKey = routePath.split("/").filter(Boolean)[0] || "en";
  const locale = LOCALE_META[localeKey]?.lang || LOCALE_META.en.lang;
  const title = (typeof pageData.frontmatter.title === "string" && pageData.frontmatter.title) || pageData.title || slugToTitle(routePath.split("/").filter(Boolean).at(-1) || SITE_NAME);
  const description =
    (typeof pageData.frontmatter.description === "string" && pageData.frontmatter.description) ||
    pageData.description ||
    "pacs008 is a Python toolkit for ISO 20022 FI-to-FI credit transfer generation, validation, and automation.";

  return {
    title: title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`,
    description,
    canonical: toAbsoluteUrl(routePath === "/" || routePath === "/en/" ? "/" : routePath),
    locale,
    localeOg: locale.replace("-", "_"),
    routePath,
    ogImage: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    ogImageAlt: title
  };
}
