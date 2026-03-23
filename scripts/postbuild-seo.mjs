import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "..", "docs", ".vitepress", "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

try {
  const sitemap = await fs.readFile(sitemapPath, "utf8");
  const cleaned = sitemap.replace(/<url><loc>https:\/\/pacs008\.com\/en\/<\/loc>.*?<\/url>/, "");
  if (cleaned !== sitemap) {
    await fs.writeFile(sitemapPath, cleaned, "utf8");
  }
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    process.exit(0);
  }
  throw error;
}
