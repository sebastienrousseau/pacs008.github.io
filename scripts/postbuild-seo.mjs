import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "docs", ".vitepress", "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

const UI = {
  en: { mainNavigation: "Main Navigation", extraNavigation: "extra navigation", mobileNavigation: "mobile navigation", toggleDarkMode: "Toggle dark mode", permalinkTo: "Permalink to", breadcrumb: "Breadcrumb" },
  ar: { mainNavigation: "التنقل الرئيسي", extraNavigation: "تنقل إضافي", mobileNavigation: "تنقل الهاتف", toggleDarkMode: "تبديل الوضع الداكن", permalinkTo: "رابط دائم إلى", breadcrumb: "مسار التنقل" },
  de: { mainNavigation: "Hauptnavigation", extraNavigation: "zusätzliche Navigation", mobileNavigation: "mobile Navigation", toggleDarkMode: "Dunkelmodus umschalten", permalinkTo: "Permalink zu", breadcrumb: "Breadcrumb-Navigation" },
  es: { mainNavigation: "Navegación principal", extraNavigation: "navegación adicional", mobileNavigation: "navegación móvil", toggleDarkMode: "Alternar modo oscuro", permalinkTo: "Enlace permanente a", breadcrumb: "Ruta de navegación" },
  fr: { mainNavigation: "Navigation principale", extraNavigation: "navigation supplémentaire", mobileNavigation: "navigation mobile", toggleDarkMode: "Basculer le mode sombre", permalinkTo: "Lien permanent vers", breadcrumb: "Fil d’Ariane" },
  he: { mainNavigation: "ניווט ראשי", extraNavigation: "ניווט נוסף", mobileNavigation: "ניווט לנייד", toggleDarkMode: "החלפת מצב כהה", permalinkTo: "קישור קבוע אל", breadcrumb: "נתיב ניווט" },
  hi: { mainNavigation: "मुख्य नेविगेशन", extraNavigation: "अतिरिक्त नेविगेशन", mobileNavigation: "मोबाइल नेविगेशन", toggleDarkMode: "डार्क मोड बदलें", permalinkTo: "स्थायी लिंक", breadcrumb: "ब्रेडक्रंब नेविगेशन" },
  id: { mainNavigation: "Navigasi utama", extraNavigation: "navigasi tambahan", mobileNavigation: "navigasi seluler", toggleDarkMode: "Alihkan mode gelap", permalinkTo: "Tautan permanen ke", breadcrumb: "Navigasi remah roti" },
  it: { mainNavigation: "Navigazione principale", extraNavigation: "navigazione aggiuntiva", mobileNavigation: "navigazione mobile", toggleDarkMode: "Attiva/disattiva modalità scura", permalinkTo: "Link permanente a", breadcrumb: "Percorso di navigazione" },
  ja: { mainNavigation: "メインナビゲーション", extraNavigation: "追加ナビゲーション", mobileNavigation: "モバイルナビゲーション", toggleDarkMode: "ダークモードを切り替え", permalinkTo: "固定リンク先", breadcrumb: "パンくずリスト" },
  ko: { mainNavigation: "기본 탐색", extraNavigation: "추가 탐색", mobileNavigation: "모바일 탐색", toggleDarkMode: "다크 모드 전환", permalinkTo: "고정 링크", breadcrumb: "이동 경로" },
  nl: { mainNavigation: "Hoofdnavigatie", extraNavigation: "extra navigatie", mobileNavigation: "mobiele navigatie", toggleDarkMode: "Donkere modus wisselen", permalinkTo: "Permanente link naar", breadcrumb: "Broodkruimelnavigatie" },
  pl: { mainNavigation: "Nawigacja główna", extraNavigation: "dodatkowa nawigacja", mobileNavigation: "nawigacja mobilna", toggleDarkMode: "Przełącz tryb ciemny", permalinkTo: "Stały odnośnik do", breadcrumb: "Okruszki nawigacyjne" },
  pt: { mainNavigation: "Navegação principal", extraNavigation: "navegação extra", mobileNavigation: "navegação móvel", toggleDarkMode: "Alternar modo escuro", permalinkTo: "Link permanente para", breadcrumb: "Trilha de navegação" },
  ro: { mainNavigation: "Navigare principală", extraNavigation: "navigare suplimentară", mobileNavigation: "navigare mobilă", toggleDarkMode: "Comută modul întunecat", permalinkTo: "Legătură permanentă către", breadcrumb: "Traseu de navigare" },
  ru: { mainNavigation: "Основная навигация", extraNavigation: "дополнительная навигация", mobileNavigation: "мобильная навигация", toggleDarkMode: "Переключить тёмный режим", permalinkTo: "Постоянная ссылка на", breadcrumb: "Хлебные крошки" },
  th: { mainNavigation: "การนำทางหลัก", extraNavigation: "การนำทางเพิ่มเติม", mobileNavigation: "การนำทางบนมือถือ", toggleDarkMode: "สลับโหมดมืด", permalinkTo: "ลิงก์ถาวรไปยัง", breadcrumb: "เส้นทางนำทาง" },
  tr: { mainNavigation: "Ana gezinme", extraNavigation: "ek gezinme", mobileNavigation: "mobil gezinme", toggleDarkMode: "Karanlık modu değiştir", permalinkTo: "Kalıcı bağlantı", breadcrumb: "Gezinti yolu" },
  uk: { mainNavigation: "Основна навігація", extraNavigation: "додаткова навігація", mobileNavigation: "мобільна навігація", toggleDarkMode: "Перемкнути темний режим", permalinkTo: "Постійне посилання на", breadcrumb: "Хлібні крихти" },
  vi: { mainNavigation: "Điều hướng chính", extraNavigation: "điều hướng bổ sung", mobileNavigation: "điều hướng di động", toggleDarkMode: "Chuyển chế độ tối", permalinkTo: "Liên kết cố định tới", breadcrumb: "Đường dẫn điều hướng" },
  zh: { mainNavigation: "主导航", extraNavigation: "附加导航", mobileNavigation: "移动导航", toggleDarkMode: "切换深色模式", permalinkTo: "固定链接到", breadcrumb: "面包屑导航" },
  "zh-tw": { mainNavigation: "主導覽", extraNavigation: "額外導覽", mobileNavigation: "行動導覽", toggleDarkMode: "切換深色模式", permalinkTo: "固定連結到", breadcrumb: "麵包屑導覽" }
};

async function walkHtml(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkHtml(full)));
    } else if (entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

function localeFromFile(file) {
  const rel = path.relative(distDir, file).split(path.sep).filter(Boolean);
  const first = rel[0];
  return UI[first] ? first : "en";
}

function localizeShell(html, locale) {
  const t = UI[locale] ?? UI.en;
  return html
    .replace(/>\s*Main Navigation\s*</g, `> ${t.mainNavigation} <`)
    .replace(/aria-label="extra navigation"/g, `aria-label="${t.extraNavigation}"`)
    .replace(/aria-label="mobile navigation"/g, `aria-label="${t.mobileNavigation}"`)
    .replace(/aria-label="Toggle dark mode"/g, `aria-label="${t.toggleDarkMode}"`)
    .replace(/aria-label="Breadcrumb"/g, `aria-label="${t.breadcrumb}"`)
    .replace(/aria-label="Permalink to &quot;([^"]+?)&quot;"/g, (_m, title) => `aria-label="${t.permalinkTo} &quot;${title}&quot;"`);
}

try {
  const sitemap = await fs.readFile(sitemapPath, "utf8");
  const cleaned = sitemap.replace(/<url><loc>https:\/\/pacs008\.com\/en\/<\/loc>.*?<\/url>/, "");
  if (cleaned !== sitemap) {
    await fs.writeFile(sitemapPath, cleaned, "utf8");
  }

  const htmlFiles = await walkHtml(distDir);
  await Promise.all(
    htmlFiles.map(async (file) => {
      const html = await fs.readFile(file, "utf8");
      const localized = localizeShell(html, localeFromFile(file));
      if (localized !== html) {
        await fs.writeFile(file, localized, "utf8");
      }
    })
  );
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    process.exit(0);
  }
  throw error;
}
