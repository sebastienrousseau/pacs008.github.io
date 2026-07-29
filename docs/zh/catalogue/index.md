---
title: "报文与规则目录 | pacs008"
description: "覆盖范围反映软件包内附的模板，因此不会声称超出软件实际能力。"
lang: zh-CN
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /zh/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# 报文与规则目录

由 pacs008 登记册生成，规则集 `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
覆盖范围反映软件包内附的模板，因此不会声称超出软件实际能力。

## 报文族

| 族 | 名称 | 版本 | 数量 | 适用规则 |
|---|---|---|---|---|
| [`pacs.008`](/zh/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/zh/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/zh/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/zh/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/zh/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/zh/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/zh/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/zh/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### 未实现

我们列出它们，因为其缺失很容易被想当然。

| 族 | 状态 | 备注 |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## 方案配置

| 配置 | 名称 | 状态 | 生效 |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## 规则

每条规则都有在小版本间保持不变的稳定标识。若通过与否发生变化，须发布新的规则集版本。

*规则摘要与整改说明以英文显示：它们是规则的规范性内容，各接口均以标识引用。*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| 配置 | cbpr-plus |
| 层 | scheme |
| 严重程度 | error |
| 生效日 | 2026-11-14 |
| 报文 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路径 | `{party}/PstlAdr` |
| 来源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核实 2026-07-28 |
| 测试文件 | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (通过) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通过) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (不通过) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**整改.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| 配置 | cbpr-plus |
| 层 | scheme |
| 严重程度 | error |
| 生效日 | 2026-11-14 |
| 报文 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路径 | `{party}/PstlAdr/TwnNm` |
| 来源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核实 2026-07-28 |
| 测试文件 | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通过) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (不通过) |

Town Name must be carried in TwnNm, not in an address line.

**整改.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| 配置 | cbpr-plus |
| 层 | scheme |
| 严重程度 | error |
| 生效日 | 2026-11-14 |
| 报文 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路径 | `{party}/PstlAdr/Ctry` |
| 来源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核实 2026-07-28 |
| 测试文件 | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通过) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (不通过) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**整改.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| 配置 | cbpr-plus |
| 层 | scheme |
| 严重程度 | info |
| 生效日 | 2025-11-22 |
| 报文 | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| 路径 | `{party}/PstlAdr` |
| 来源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核实 2026-07-28 |
| 测试文件 | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (通过) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**整改.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| 配置 | cbpr-plus |
| 层 | scheme |
| 严重程度 | info |
| 生效日 | 2026-11-14 |
| 报文 | `pacs.008`, `pacs.009` |
| 路径 | `{agent}/FinInstnId/BICFI` |
| 来源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核实 2026-07-28 |
| 测试文件 | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (通过) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**整改.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| 配置 | cbpr-plus |
| 层 | scheme |
| 严重程度 | info |
| 生效日 | 2026-11-14 |
| 报文 | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| 路径 | — |
| 来源 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 核实 2026-07-28 |
| 测试文件 | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**整改.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| 配置 | chaps-uk |
| 层 | scheme |
| 严重程度 | error |
| 生效日 | 2026-11-14 |
| 报文 | `pacs.008`, `pacs.009` |
| 路径 | `{party}/PstlAdr` |
| 来源 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 核实 2026-07-28 |
| 测试文件 | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (通过) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (不通过) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**整改.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **已公布，尚未强制**

| | |
|---|---|
| 配置 | chaps-uk |
| 层 | scheme |
| 严重程度 | error |
| 生效日 | 2027-11-01 |
| 报文 | `pacs.008`, `pacs.009` |
| 路径 | `CdtTrfTxInf/Purp/Cd` |
| 来源 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 核实 2026-07-28 |
| 测试文件 | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**整改.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **已公布，尚未强制**

| | |
|---|---|
| 配置 | chaps-uk |
| 层 | scheme |
| 严重程度 | error |
| 生效日 | 2027-11-01 |
| 报文 | `pacs.008` |
| 路径 | `CdtTrfTxInf/RmtInf/Strd` |
| 来源 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 核实 2026-07-28 |
| 测试文件 | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**整改.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## 来源

| 来源 | 发布方 | 文件 | 生效 | 核实 |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022 归属声明

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

本页的报文定义与标识源自 ISO 20022 材料，依据以下条款使用： [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
