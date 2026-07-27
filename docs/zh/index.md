---
title: "pacs008 | ISO 20022 Payment Message Toolkit and API"
description: "面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。"
lang: "zh-CN"
author: "Sebastien Rousseau"
lastUpdated: true
image: "/logo.webp"
imageAlt: "pacs008"
canonical: "/zh/"
robots: "index, follow"
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "pacs008"
pageType: "home"
schemaType: "WebSite"
heroText: "自动化 ISO 20022 pacs.008 报文处理。"
home: true
metaTitle: "pacs008"
subtitle: "面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。"
tagline: "面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。"
actionText: "了解 pacs008"
actionLink: "/zh/about/"
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

# 自动化 ISO 20022 pacs.008 报文处理。

面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。

## 功能

- **功能**: 为 `pacs.008` 及相关 pacs 报文定义生成 XML; 根据模式验证数据和 XML; 提供 FastAPI 服务用于自动化工作流.
- **验证**: 针对 20 个消息类型专用架构的 JSON Schema 验证; 覆盖 75 个国家的 IBAN 格式和校验和验证; 针对 ISO 20022 官方架构的生成 XML XSD 验证.
- **安全**: 通过 defusedxml 对所有 XML 解析操作进行 XXE 防护; 使用严格的目录白名单进行路径遍历防护; 在结构化 JSON 日志中进行 PII 脱敏，支持 GDPR 和 PCI DSS 合规.
- **2026 准备**: 为 CBPR+ 和方案迁移处理结构化和混合邮政地址; 加强债务人、债权人和代理数据质量验证; 跨旧版和当前 pacs.008 修订版本的版本感知生成.

## Installation & Quickstart

```bash
pip install pacs008
```

Read the full [API & CLI Reference](/zh/api/) and [Selection Guide](/zh/message-selection/).
