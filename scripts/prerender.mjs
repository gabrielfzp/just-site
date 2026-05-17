import { createServer } from "node:http";
import { readFile, stat, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { PAGE_SEO, SEO_ROUTE_KEYS } from "../src/site/seo.js";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = join(rootDir, "dist");
const PORT = 4321;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

async function tryRead(filePath) {
  try {
    const s = await stat(filePath);
    if (!s.isFile()) return null;
    return await readFile(filePath);
  } catch {
    return null;
  }
}

const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const candidates = [];
  if (urlPath.endsWith("/")) {
    candidates.push(join(distDir, urlPath, "index.html"));
  } else if (!extname(urlPath)) {
    candidates.push(join(distDir, urlPath, "index.html"));
    candidates.push(join(distDir, `${urlPath}.html`));
  } else {
    candidates.push(join(distDir, urlPath));
  }
  for (const candidate of candidates) {
    const data = await tryRead(candidate);
    if (data) {
      const ext = extname(candidate);
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(data);
      return;
    }
  }
  const fallback = await tryRead(join(distDir, "index.html"));
  if (fallback) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(fallback);
    return;
  }
  res.writeHead(404);
  res.end();
});

await new Promise((resolve) => server.listen(PORT, resolve));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const routesToPrerender = SEO_ROUTE_KEYS.map((key) => ({ key, path: PAGE_SEO[key].path }));

let prerenderedCount = 0;
let skippedCount = 0;

for (const { key, path } of routesToPrerender) {
  const url = `http://127.0.0.1:${PORT}${path}`;
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));

  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    await page.waitForSelector("footer", { timeout: 15000 });
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));

    const rendered = await page.evaluate(() => {
      const root = document.getElementById("root");
      return root ? root.innerHTML : "";
    });

    if (!rendered || rendered.length < 500) {
      console.warn(`  ⚠ ${path}: rendered body too small (${rendered.length} bytes), skipping`);
      skippedCount += 1;
      continue;
    }
    if (errors.length) {
      console.warn(`  ⚠ ${path}: page errors:`, errors.slice(0, 2));
    }

    const routeFile = path === "/" ? "index.html" : `${path.replace(/^\/+/, "")}/index.html`;
    const targetFile = join(distDir, routeFile);
    const html = await readFile(targetFile, "utf8");
    if (!html.includes('<div id="root"></div>')) {
      console.warn(`  ⚠ ${path}: target HTML does not contain empty root marker, skipping`);
      skippedCount += 1;
      continue;
    }
    const updated = html.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
    await writeFile(targetFile, updated);
    prerenderedCount += 1;
    console.log(`  ✓ ${path} (${(rendered.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.warn(`  ✗ ${path}: ${err.message}`);
    skippedCount += 1;
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log(`Prerendered ${prerenderedCount} route(s); skipped ${skippedCount}.`);

if (prerenderedCount === 0) {
  process.exit(1);
}
