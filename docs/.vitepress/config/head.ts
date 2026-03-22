import type { HeadConfig } from "vitepress";

export const sharedHead: HeadConfig[] = [
  ["meta", { charset: "utf-8" }],
  [
    "meta",
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  [
    "meta",
    {
      name: "theme-color",
      media: "(prefers-color-scheme: light)",
      content: "#efe6d7",
    },
  ],
  [
    "meta",
    {
      name: "theme-color",
      media: "(prefers-color-scheme: dark)",
      content: "#14221e",
    },
  ],
  ["meta", { name: "application-name", content: "Pacs008" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "Pacs008" }],
  ["meta", { name: "author", content: "Sebastien Rousseau" }],
  ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
  ["link", { rel: "manifest", href: "/manifest.json" }]
];
