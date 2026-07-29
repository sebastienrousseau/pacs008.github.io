---
title: "方案變更紀錄 | pacs008"
description: "每一項決定訊息是否被接受的規則變更，依生效日期分組。"
lang: zh-TW
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /zh-tw/scheme-changes/
robots: "index, follow"
draft: false
noindex: false
---

# 方案變更紀錄

每一項決定訊息是否被接受的規則變更，依生效日期分組。

由規則登錄檔產生，規則集 `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).

自 2026 年 11 月起 Swift 轉為年度 Standards Release 週期，因此本清單不會止於截止日，而會逐年增加。

訂閱: [Atom feed](/scheme-changes.xml).

## 規則集版本管理

規則識別碼在小版本之間保持穩定。若規則的通過與否改變，須發布新的規則集版本，報告才可重現。

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


## 如何鎖定規則集

驗證報告會記錄規則集版本與雜湊。反映差異時請同時引用兩者，以便精確還原產生該結論的規則集。
