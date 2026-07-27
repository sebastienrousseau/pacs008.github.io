import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");

function flattenNestedIndexes(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "index" && dir !== publicDir) {
        // Move contents of nested 'index' dir up to parent
        for (const file of fs.readdirSync(fullPath)) {
          const src = path.join(fullPath, file);
          const dest = path.join(dir, file);
          fs.copyFileSync(src, dest);
          fs.unlinkSync(src);
        }
        fs.rmdirSync(fullPath);
        count++;
      } else {
        count += flattenNestedIndexes(fullPath);
      }
    }
  }
  return count;
}

function unescapeHtmlString(str) {
  return str
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function repairHtml(content) {
  // 1. Split head and body
  let headEnd = content.indexOf("</head>");
  if (headEnd === -1) headEnd = content.indexOf("</HEAD>");

  let head = content;
  let body = "";

  if (headEnd !== -1) {
    head = content.slice(0, headEnd);
    body = content.slice(headEnd);

    // Unescape &lt;meta ...&gt; and &lt;link ...&gt; in head
    head = head.replace(/&lt;(meta|link)\b[^&]*?&gt;/gi, (match) => {
      return unescapeHtmlString(match);
    });

    head = head.replace(/&lt;(meta|link)\b[^>]*?>/gi, (match) => {
      return unescapeHtmlString(match);
    });

    // Deduplicate author & description metas in head if duplicated
    const seenMetas = new Set();
    head = head.replace(/<meta\s+name=["'](author|description|keywords|viewport)["']\s+content=["'][^"']*["']\s*\/?>/gi, (match, name) => {
      const lowerName = name.toLowerCase();
      if (seenMetas.has(lowerName)) return "";
      seenMetas.add(lowerName);
      return match;
    });
  } else {
    body = content;
  }

  // Ensure <html lang="..."> has a valid lang attribute
  head = head.replace(/<html\s+lang=["']\s*["']/gi, '<html lang="en"');

  // 2. Unescape entity-escaped HTML elements across <body>
  body = unescapeHtmlString(body);

  return head + body;
}

function processHtmlFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processHtmlFiles(fullPath);
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
  const flattened = flattenNestedIndexes(publicDir);
  console.log(`Flattened ${flattened} nested index directories in public/`);

  const repaired = processHtmlFiles(publicDir);
  console.log(`Repaired HTML in ${repaired} files in public/`);
}
