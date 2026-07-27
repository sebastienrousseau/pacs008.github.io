---
title: "pacs008 | ISO 20022 Payment Message Toolkit and API"
description: "面向金融機構間客戶信貸轉帳工作流程的產生、驗證、API 編排與合規支援。"
lang: "zh-TW"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/zh-tw/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "自動化 ISO 20022 pacs.008 訊息處理。"
home: true
metaTitle: "pacs008"
subtitle: "面向金融機構間客戶信貸轉帳工作流程的產生、驗證、API 編排與合規支援。"
tagline: "面向金融機構間客戶信貸轉帳工作流程的產生、驗證、API 編排與合規支援。"
actionText: "了解 pacs008"
actionLink: "/zh-tw/about/"
date: "2026-07-27"
news_publication_date: "2026-07-27"
item_pub_date: "2026-07-27"
last_build_date: "2026-07-27"
name: "pacs008"
short_name: "pacs008"
start_url: "/"
display: "standalone"
background_color: "#ffffff"
theme_color: "#084a53"
---

# 自動化 ISO 20022 pacs.008 訊息處理。

面向金融機構間客戶信貸轉帳工作流程的產生、驗證、API 編排與合規支援。

## 功能

- **功能**: 為 `pacs.008` 及相關 pacs 訊息定義產生 XML; 根據綱要驗證資料和 XML; 提供 FastAPI 服務用於自動化工作流程.
- **驗證**: 針對 20 個訊息類型專用結構描述的 JSON Schema 驗證; 涵蓋 75 個國家的 IBAN 格式和檢驗和驗證; 針對 ISO 20022 官方結構描述的產生 XML XSD 驗證.
- **安全**: 透過 defusedxml 對所有 XML 剖析操作進行 XXE 防護; 使用嚴格的目錄白名單進行路徑遍歷防護; 在結構化 JSON 日誌中進行 PII 遮蔽，支援 GDPR 和 PCI DSS 合規.
- **2026 準備**: 為 CBPR+ 和方案遷移處理結構化和混合郵政地址; 加強債務人、債權人和代理資料品質驗證; 跨舊版和目前 pacs.008 修訂版本的版本感知產生.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/zh-tw/api/) and [Selection Guide](/zh-tw/message-selection/).
