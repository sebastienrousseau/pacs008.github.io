---
title: "訊息與規則目錄 | pacs008"
description: "涵蓋範圍反映套件內附的範本，因此不會宣稱超出軟體實際能力。"
lang: zh-TW
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /zh-tw/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# 訊息與規則目錄

由 pacs008 登錄檔產生，規則集 `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
涵蓋範圍反映套件內附的範本，因此不會宣稱超出軟體實際能力。

## 訊息族

| 族 | 名稱 | 版本 | 數量 | 適用規則 |
|---|---|---|---|---|
| [`pacs.008`](/zh-tw/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/zh-tw/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/zh-tw/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/zh-tw/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/zh-tw/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/zh-tw/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/zh-tw/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/zh-tw/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### 未實作

我們列出它們，因為其缺漏很容易被想當然爾。

| 族 | 狀態 | 備註 |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## 方案設定

| 設定 | 名稱 | 狀態 | 生效 |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## 規則

每條規則都有在小版本間維持不變的穩定識別碼。若通過與否改變，須發布新的規則集版本。

*規則摘要與整改說明以英文顯示：它們是規則的規範性內容，各介面均以識別碼引用。*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| 設定 | cbpr-plus |
| 層 | scheme |
| 嚴重程度 | error |
| 生效日 | 2026-11-14 |
| 訊息 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路徑 | `{party}/PstlAdr` |
| 來源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核實 2026-07-28 |
| 測試檔案 | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (通過) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通過) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (未通過) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**整改.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| 設定 | cbpr-plus |
| 層 | scheme |
| 嚴重程度 | error |
| 生效日 | 2026-11-14 |
| 訊息 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路徑 | `{party}/PstlAdr/TwnNm` |
| 來源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核實 2026-07-28 |
| 測試檔案 | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通過) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (未通過) |

Town Name must be carried in TwnNm, not in an address line.

**整改.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| 設定 | cbpr-plus |
| 層 | scheme |
| 嚴重程度 | error |
| 生效日 | 2026-11-14 |
| 訊息 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路徑 | `{party}/PstlAdr/Ctry` |
| 來源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核實 2026-07-28 |
| 測試檔案 | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通過) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (未通過) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**整改.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| 設定 | cbpr-plus |
| 層 | scheme |
| 嚴重程度 | info |
| 生效日 | 2025-11-22 |
| 訊息 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路徑 | `{party}/PstlAdr` |
| 來源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核實 2026-07-28 |
| 測試檔案 | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通過) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**整改.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| 設定 | cbpr-plus |
| 層 | scheme |
| 嚴重程度 | info |
| 生效日 | 2026-11-14 |
| 訊息 | `pacs.008`, `pacs.009` |
| 路徑 | `{agent}/FinInstnId/BICFI` |
| 來源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核實 2026-07-28 |
| 測試檔案 | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (通過) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**整改.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| 設定 | cbpr-plus |
| 層 | scheme |
| 嚴重程度 | info |
| 生效日 | 2026-11-14 |
| 訊息 | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| 路徑 | — |
| 來源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核實 2026-07-28 |
| 測試檔案 | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**整改.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| 設定 | chaps-uk |
| 層 | scheme |
| 嚴重程度 | error |
| 生效日 | 2026-11-14 |
| 訊息 | `pacs.008`, `pacs.009` |
| 路徑 | `{party}/PstlAdr` |
| 來源 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 核實 2026-07-28 |
| 測試檔案 | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (通過) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (未通過) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**整改.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **已公布，尚未強制**

| | |
|---|---|
| 設定 | chaps-uk |
| 層 | scheme |
| 嚴重程度 | error |
| 生效日 | 2027-11-01 |
| 訊息 | `pacs.008`, `pacs.009` |
| 路徑 | `CdtTrfTxInf/Purp/Cd` |
| 來源 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 核實 2026-07-28 |
| 測試檔案 | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**整改.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **已公布，尚未強制**

| | |
|---|---|
| 設定 | chaps-uk |
| 層 | scheme |
| 嚴重程度 | error |
| 生效日 | 2027-11-01 |
| 訊息 | `pacs.008` |
| 路徑 | `CdtTrfTxInf/RmtInf/Strd` |
| 來源 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 核實 2026-07-28 |
| 測試檔案 | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**整改.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## 來源

| 來源 | 發布方 | 文件 | 生效 | 核實 |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022 歸屬聲明

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

本頁的訊息定義與識別碼源自 ISO 20022 材料，依下列條款使用： [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
