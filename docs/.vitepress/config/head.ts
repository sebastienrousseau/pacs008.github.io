import type { HeadConfig } from "vitepress";

export const sharedHead: HeadConfig[] = [
  ["meta", { charset: "utf-8" }],
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
  ["meta", { name: "theme-color", media: "(prefers-color-scheme: light)", content: "#f5f5f7" }],
  ["meta", { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "#1d1d1f" }],
  ["meta", { name: "application-name", content: "Pacs008" }],
  ["meta", { name: "apple-mobile-web-app-title", content: "Pacs008" }],
  ["meta", { name: "mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "author", content: "Sebastien Rousseau" }],
  ["meta", { name: "format-detection", content: "telephone=no" }],
  ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
  ["link", { rel: "manifest", href: "/manifest.json" }],
  ["link", { rel: "preload", href: "https://cloudcdn.pro/stock/images/banners/meiying-ng-OrwkD-iWgqg.webp", as: "image", type: "image/webp", fetchpriority: "high" }]
];
