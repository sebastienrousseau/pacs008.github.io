import type { HeadConfig } from "vitepress";

export const sharedHead: HeadConfig[] = [
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
  ["meta", { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#0099AC" }],
  ["meta", { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#1d1d1f" }],
  ["meta", { name: "application-name", content: "pacs008" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "pacs008" }],
  ["meta", { name: "mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "author", content: "Sebastien Rousseau" }],
  ["meta", { name: "format-detection", content: "telephone=no" }],
  ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
  ["link", { rel: "manifest", href: "/manifest.json" }],
  ["link", { rel: "alternate", type: "application/rss+xml", title: "pacs008 RSS Feed", href: "https://pacs008.com/rss.xml" }]
];
