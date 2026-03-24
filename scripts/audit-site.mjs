import fs from "node:fs";
import path from "node:path";

const repoRoot = "/home/seb/Code/Public/HTML/pacs008.github.io";
const docsRoot = path.join(repoRoot, "docs");
const distRoot = path.join(docsRoot, ".vitepress", "dist");

function walk(dir, predicate = () => true, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, predicate, out);
    } else if (predicate(full)) {
      out.push(full);
    }
  }
  return out;
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function relativeUrl(root, file) {
  const rel = path.relative(root, path.dirname(file)).replaceAll(path.sep, "/");
  return rel ? `/${rel}/` : "/";
}

function stripMarkdown(text) {
  return text
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/[#>*_|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countSyllables(word) {
  const vowels = "aeiouy";
  const clean = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!clean) return 0;
  let count = 0;
  let prevVowel = false;
  for (const ch of clean) {
    const isVowel = vowels.includes(ch);
    if (isVowel && !prevVowel) count += 1;
    prevVowel = isVowel;
  }
  if (clean.endsWith("e") && count > 1) count -= 1;
  if (clean.endsWith("le") && clean.length > 2 && !vowels.includes(clean.at(-3))) count += 1;
  return Math.max(1, count);
}

function englishPageClass(url) {
  if (url === "/" || ["/about/"].includes(url)) return "marketing";
  if (["/contact/", "/privacy/", "/terms/"].includes(url)) return "utility";
  if (["/message-types/", "/message-selection/", "/api/"].includes(url)) return "technical";
  if (/^\/pacs\.\d{3}\.\d{3}\.\d{2}\/$/.test(url)) return "technical";
  return "other";
}

function englishReadability(markdownFiles) {
  const pages = [];
  for (const file of markdownFiles) {
    const rel = path.relative(docsRoot, file).split(path.sep);
    if (rel.length > 2) continue;
    const plain = stripMarkdown(read(file));
    const words = plain.match(/[A-Za-z']+/g) ?? [];
    const sentences = plain
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter((s) => /[A-Za-z]/.test(s));

    if (!words.length || !sentences.length) continue;
    const syllables = words.reduce((sum, word) => sum + countSyllables(word), 0);
    const fre = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);
    const fk = 0.39 * (words.length / sentences.length) + 11.8 * (syllables / words.length) - 15.59;
    const url = relativeUrl(docsRoot, file);
    const pageClass = englishPageClass(url);
    const target = pageClass === "marketing"
      ? { freMin: 60, freMax: 70, fkMin: 8, fkMax: 10 }
      : pageClass === "technical"
        ? { freMin: 45, freMax: 55, fkMin: 11, fkMax: 12 }
        : null;
    pages.push({
      path: url,
      pageClass,
      words: words.length,
      sentences: sentences.length,
      fleschReadingEase: Number(fre.toFixed(1)),
      fleschKincaidGrade: Number(fk.toFixed(1)),
      target,
    });
  }

  const avg = (key) =>
    pages.length ? Number((pages.reduce((sum, page) => sum + page[key], 0) / pages.length).toFixed(1)) : null;

  return {
    note: "Flesch Reading Ease and Flesch-Kincaid Grade Level are English-language formulas. They are not valid as cross-locale quality metrics for CJK, RTL, or most non-English pages.",
    pages: pages.length,
    averageFleschReadingEase: avg("fleschReadingEase"),
    averageFleschKincaidGrade: avg("fleschKincaidGrade"),
    targetSummary: {
      marketing: pages
        .filter((page) => page.pageClass === "marketing")
        .map((page) => ({
          path: page.path,
          fleschReadingEase: page.fleschReadingEase,
          fleschKincaidGrade: page.fleschKincaidGrade,
          passes: page.fleschReadingEase >= 60 && page.fleschReadingEase <= 70 && page.fleschKincaidGrade >= 8 && page.fleschKincaidGrade <= 10,
        })),
      utility: pages
        .filter((page) => page.pageClass === "utility")
        .map((page) => ({
          path: page.path,
          fleschReadingEase: page.fleschReadingEase,
          fleschKincaidGrade: page.fleschKincaidGrade,
          passes: page.fleschReadingEase >= 45 && page.fleschKincaidGrade <= 11,
        })),
      technical: pages
        .filter((page) => page.pageClass === "technical")
        .map((page) => ({
          path: page.path,
          fleschReadingEase: page.fleschReadingEase,
          fleschKincaidGrade: page.fleschKincaidGrade,
          passes: page.fleschReadingEase >= 45 && page.fleschReadingEase <= 55 && page.fleschKincaidGrade >= 11 && page.fleschKincaidGrade <= 12,
        })),
    },
    hardestPages: [...pages].sort((a, b) => a.fleschReadingEase - b.fleschReadingEase).slice(0, 8),
  };
}

function builtHtmlAudit(htmlFiles) {
  const summary = {
    pages: htmlFiles.length,
    missingTitle: 0,
    missingDescription: 0,
    missingCanonical: 0,
    missingH1: 0,
    titleTooShort: 0,
    titleTooLong: 0,
    descriptionTooShort: 0,
    descriptionTooLong: 0,
    copyButtonEnglishOnly: 0,
    githubLabelLowercase: 0,
  };

  const samples = {
    shortTitles: [],
    longTitles: [],
    shortDescriptions: [],
    englishCopyButtons: [],
  };

  for (const file of htmlFiles) {
    const html = read(file);
    const url = relativeUrl(distRoot, file);
    const rel = path.relative(distRoot, file).split(path.sep).filter(Boolean);
    const isEnglish = !rel[0] || !["ar", "de", "es", "fr", "he", "hi", "id", "it", "ja", "ko", "nl", "pl", "pt", "ro", "ru", "th", "tr", "uk", "vi", "zh", "zh-tw"].includes(rel[0]);
    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
    const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1]?.trim() ?? "";

    if (!title) summary.missingTitle += 1;
    if (!description) summary.missingDescription += 1;
    if (!html.includes('rel="canonical"')) summary.missingCanonical += 1;
    if (!/<h1\b/i.test(html)) summary.missingH1 += 1;

    if (isEnglish && title && title.length < 30) {
      summary.titleTooShort += 1;
      if (samples.shortTitles.length < 10) samples.shortTitles.push({ path: url, length: title.length, title });
    }
    if (isEnglish && title.length > 65) {
      summary.titleTooLong += 1;
      if (samples.longTitles.length < 10) samples.longTitles.push({ path: url, length: title.length, title });
    }
    if (isEnglish && description && description.length < 110) {
      summary.descriptionTooShort += 1;
      if (samples.shortDescriptions.length < 10) {
        samples.shortDescriptions.push({ path: url, length: description.length, description });
      }
    }
    if (isEnglish && description.length > 170) summary.descriptionTooLong += 1;
    if (html.includes('title="Copy Code"')) {
      summary.copyButtonEnglishOnly += 1;
      if (samples.englishCopyButtons.length < 10) samples.englishCopyButtons.push(url);
    }
    if (html.includes('aria-label="github"')) summary.githubLabelLowercase += 1;
  }

  return { summary, samples };
}

const markdownFiles = walk(docsRoot, (file) => file.endsWith("index.md"));
const htmlFiles = walk(distRoot, (file) => file.endsWith("index.html"));

const report = {
  generatedAt: new Date().toISOString(),
  source: {
    markdownPages: markdownFiles.length,
    htmlPages: htmlFiles.length,
  },
  readability: englishReadability(markdownFiles),
  builtAudit: builtHtmlAudit(htmlFiles),
};

console.log(JSON.stringify(report, null, 2));
