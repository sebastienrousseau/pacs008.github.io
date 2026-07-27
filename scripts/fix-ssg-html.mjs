import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");

function repairHtml(content) {
  // 1. Repair escaped head tags
  let headEnd = content.indexOf("</head>");
  if (headEnd === -1) headEnd = content.indexOf("</HEAD>");

  if (headEnd !== -1) {
    let head = content.slice(0, headEnd);
    let body = content.slice(headEnd);

    // Unescape &lt;meta ...&gt; and &lt;link ...&gt; in head
    head = head.replace(/&lt;(meta|link)\b[^&]*?&gt;/gi, (match) => {
      return match
        .replace(/^&lt;/, "<")
        .replace(/&gt;$/, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");
    });

    // Also unescape any unclosed &lt;meta ... >
    head = head.replace(/&lt;(meta|link)\b[^>]*?>/gi, (match) => {
      return match
        .replace(/^&lt;/, "<")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");
    });

    // Deduplicate author & description metas in head if duplicated
    const seenMetas = new Set();
    head = head.replace(/<meta\s+name=["'](author|description|keywords|viewport)["']\s+content=["'][^"']*["']\s*\/?>/gi, (match, name) => {
      const lowerName = name.toLowerCase();
      if (seenMetas.has(lowerName)) {
        return "";
      }
      seenMetas.add(lowerName);
      return match;
    });

    content = head + body;
  }

  // 2. Repair escaped body wrappers like &lt;div lang="en"&gt;&lt;/div&gt;
  content = content.replace(/&lt;div\b[^&]*?&gt;&lt;\/div&gt;/gi, (match) => {
    return "";
  });

  content = content.replace(/&lt;div\b[^&]*?&gt;/gi, (match) => {
    return match
      .replace(/^&lt;/, "<")
      .replace(/&gt;$/, ">")
      .replace(/&quot;/g, '"');
  });

  content = content.replace(/&lt;\/div&gt;/gi, "</div>");

  return content;
}

function processDir(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processDir(fullPath);
    } else if (entry.name.endsWith(".html")) {
      const raw = fs.readFileSync(fullPath, "utf8");
      const fixed = repairHtml(raw);
      if (fixed !== raw) {
        fs.writeFileSync(fullPath, fixed, "utf8");
        count++;
      }
    }
  }
  return count;
}

if (fs.existsSync(publicDir)) {
  const count = processDir(publicDir);
  console.log(`Repaired ${count} HTML files in public/`);
}
