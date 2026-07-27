import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");

function getValidRoutes(dir, base = "") {
  let routes = new Set();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const routePath = base + "/" + entry.name;
    if (entry.isDirectory()) {
      routes.add(routePath + "/");
      routes.add(routePath);
      for (const sub of getValidRoutes(path.join(dir, entry.name), routePath)) {
        routes.add(sub);
      }
    } else if (entry.name === "index.html") {
      routes.add(base + "/");
      routes.add(base);
    }
  }
  return routes;
}

const validRoutes = getValidRoutes(publicDir);
validRoutes.add("/");
validRoutes.add("");

function checkLinks(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /href=["'](\/[^"']*)["']/g;
  let match;
  console.log(`Auditing links in ${filePath}:`);
  const broken = new Set();
  while ((match = regex.exec(content)) !== null) {
    const href = match[1].split("#")[0].split("?")[0];
    if (href.startsWith("http") || href.startsWith("//") || href.includes(".xml") || href.includes(".json") || href.includes(".ico") || href.includes(".svg") || href.includes(".png") || href.includes(".webp") || href.includes(".css") || href.includes(".js")) continue;
    const normalized = href.endsWith("/") ? href : href + "/";
    if (!validRoutes.has(href) && !validRoutes.has(normalized)) {
      broken.add(href);
    }
  }
  for (const link of broken) {
    console.log(`  Broken link: ${link}`);
  }
  return broken;
}

checkLinks("_layouts/index.html");
checkLinks("_layouts/page.html");
