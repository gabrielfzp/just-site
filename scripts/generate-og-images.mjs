import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "@vercel/og";
import { distDir, loadContentArticles, publicOgDir } from "./load-content.mjs";

const articles = await loadContentArticles();
await mkdir(publicOgDir, { recursive: true });
await mkdir(join(distDir, "og"), { recursive: true }).catch(() => {});

function ogElement(article) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: "linear-gradient(135deg, #06080F 0%, #0F112B 56%, #2D1E4F 100%)",
        color: "#F2F4F8",
        fontFamily: "Inter, Arial, sans-serif",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#F45546",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "0.08em",
            },
            children: ["JUST", article.category.name.toUpperCase()],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: 24 },
            children: [
              {
                type: "div",
                props: {
                  style: { fontSize: 66, lineHeight: 1.03, fontWeight: 800, letterSpacing: "-0.03em", maxWidth: 950 },
                  children: article.title,
                },
              },
              {
                type: "div",
                props: {
                  style: { fontSize: 26, lineHeight: 1.35, color: "rgba(242,244,248,0.72)", maxWidth: 860 },
                  children: article.description,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", color: "rgba(242,244,248,0.55)", fontSize: 24 },
            children: [article.author.name, "wearejust.it/conteudos"],
          },
        },
      ],
    },
  };
}

let generated = 0;
for (const article of articles) {
  const fileName = `${article.slug}.png`;
  const publicTarget = join(publicOgDir, fileName);
  const distTarget = join(distDir, "og", fileName);

  if (!existsSync(publicTarget)) {
    const response = new ImageResponse(ogElement(article), { width: 1200, height: 630 });
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(publicTarget, buffer);
    generated += 1;
  }

  if (existsSync(publicTarget)) {
    const response = new ImageResponse(ogElement(article), { width: 1200, height: 630 });
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(distTarget, buffer).catch(() => {});
  }
}

console.log(`Generated ${generated} new OG image(s).`);
