import fs from "fs";
import path from "path";

const targetArg = process.argv[2] || "docs";
const docsDir = path.resolve(targetArg);

function patchFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  if (!content.startsWith("---")) return;

  const parts = content.split("---");
  if (parts.length < 3) return;

  let frontmatter = parts[1];
  const body = parts.slice(2).join("---");

  const isHome = filePath === path.join(docsDir, "index.md");
  const layout = isHome ? "index" : "page";

  const fields = {
    layout: layout,
    language: "en",
    date: '"2026-07-27"',
    news_publication_date: '"2026-07-27"',
    item_pub_date: '"2026-07-27"',
    last_build_date: '"2026-07-27"',
    name: "pacs008",
    short_name: "pacs008",
    start_url: "/",
    display: "standalone",
    background_color: '"#ffffff"',
    theme_color: '"#084a53"'
  };

  // Replace or append fields
  for (const [key, value] of Object.entries(fields)) {
    const reg = new RegExp(`^${key}:.*$`, "m");
    if (reg.test(frontmatter)) {
      frontmatter = frontmatter.replace(reg, `${key}: ${value}`);
    } else {
      frontmatter += `\n${key}: ${value}`;
    }
  }

  // Ensure title is present and non-empty
  const titleMatch = frontmatter.match(/^title:\s*(.*)$/m);
  if (!titleMatch || !titleMatch[1].trim()) {
    const h1Match = body.match(/^#\s+(.*)$/m);
    const fallbackTitle = h1Match ? h1Match[1].trim() : "pacs008";
    if (titleMatch) {
      frontmatter = frontmatter.replace(/^title:.*$/m, `title: "${fallbackTitle}"`);
    } else {
      frontmatter += `\ntitle: "${fallbackTitle}"`;
    }
  }

  const newContent = `---${frontmatter}\n---${body}`;
  fs.writeFileSync(filePath, newContent, "utf8");
}

function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== ".vitepress" && entry.name !== "public") {
        processDir(fullPath);
      }
    } else if (entry.name.endsWith(".md")) {
      patchFile(fullPath);
    }
  }
}

processDir(docsDir);
console.log(`Patched all docs in ${targetArg} with complete ssg frontmatter.`);
