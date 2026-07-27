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

  const isHome = filePath.endsWith("index.md") && (filePath === path.join(docsDir, "index.md") || filePath.split(path.sep).length <= docsDir.split(path.sep).length + 2);
  const layout = isHome ? "index" : "page";

  const fieldsToAdd = {
    layout: layout,
    date: '"2026-07-27"',
    name: "pacs008",
    short_name: "pacs008",
    start_url: "/",
    display: "standalone",
    background_color: '"#ffffff"',
    theme_color: '"#084a53"'
  };

  for (const [key, value] of Object.entries(fieldsToAdd)) {
    if (!new RegExp(`^${key}:`, "m").test(frontmatter)) {
      frontmatter += `\n${key}: ${value}`;
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
console.log(`Patched all docs in ${targetArg} with ssg frontmatter fields.`);
