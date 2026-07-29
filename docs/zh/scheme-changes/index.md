---
title: "方案变更日志 | pacs008"
description: "每一项决定报文是否被接受的规则变更，按生效日期分组。"
lang: zh-CN
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /zh/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# 方案变更日志

每一项决定报文是否被接受的规则变更，按生效日期分组。

由规则登记册生成，规则集 `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

自 2026 年 11 月起 Swift 转为年度 Standards Release 周期，因此本列表不会止于截止日，而会逐年增加。

订阅: [Atom feed](/scheme-changes.xml).

## 规则集版本管理

规则标识在小版本之间保持稳定。若规则的通过与否发生变化，须发布新的规则集版本，以便报告可重现。

### 2027-11-01

- `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments (chaps-uk, error) *(announced, not yet enforced)*
- `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS (chaps-uk, error) *(announced, not yet enforced)*

### 2026-11-14

- `CBPR-ADDR-001` — Fully unstructured postal address is not accepted (cbpr-plus, error)
- `CBPR-ADDR-002` — Town Name is mandatory in a structured element (cbpr-plus, error)
- `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code (cbpr-plus, error)
- `CBPR-ADDR-005` — Agent identified by BIC only is exempt (cbpr-plus, info)
- `CBPR-ADDR-006` — Message types excepted from the address requirement (cbpr-plus, info)
- `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses (chaps-uk, error)

### 2025-11-22

- `CBPR-ADDR-004` — Hybrid postal address is accepted (cbpr-plus, info)


## 如何锁定规则集

校验报告会记录规则集版本与哈希。反映差异时请同时引用两者，以便精确还原产生该结论的规则集。
