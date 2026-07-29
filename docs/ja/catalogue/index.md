---
title: "メッセージ・ルール一覧 | pacs008"
description: "対象範囲はパッケージ同梱のテンプレートに準拠しており、ソフトウェアの実装以上を主張することはありません。"
lang: ja-JP
layout: page
date: "2026-07-28"
lastUpdated: true
image: /logo.webp
canonical: /ja/catalogue/
robots: "index, follow"
draft: false
noindex: false
---

# メッセージ・ルール一覧

pacs008 レジストリから生成、ルールセット `2026.11.0` (hash `sha256:a27fe2e7a04f36e9645310984e7142e58d2d5467490207479e689dd6fbbb668f`).
対象範囲はパッケージ同梱のテンプレートに準拠しており、ソフトウェアの実装以上を主張することはありません。

## メッセージファミリー

| ファミリー | 名称 | バージョン | 件数 | 適用ルール |
|---|---|---|---|---|
| [`pacs.008`](/ja/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008.001.01 - .13 | 13 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001`, `CHAPS-RMT-001` |
| [`pacs.002`](/ja/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002.001.12 | 1 | — |
| [`pacs.003`](/ja/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003.001.09 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.004`](/ja/pacs.004.001.11/) | Payment Return | pacs.004.001.11 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004` |
| [`pacs.007`](/ja/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007.001.11 | 1 | — |
| [`pacs.009`](/ja/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009.001.10 | 1 | `CBPR-ADDR-001`, `CBPR-ADDR-002`, `CBPR-ADDR-003`, `CBPR-ADDR-004`, `CBPR-ADDR-005`, `CHAPS-ADDR-001`, `CHAPS-PURP-001` |
| [`pacs.010`](/ja/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010.001.05 | 1 | — |
| [`pacs.028`](/ja/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028.001.05 | 1 | — |

### 未実装

欠落は見落とされやすいため、あえて列挙しています。

| ファミリー | 状態 | 備考 |
|---|---|---|
| `pain.*` | Not implemented | The package cannot generate or parse pain messages. The browser workbench can now validate pain.001, pain.002, pain.007 and pain.008 against their XSDs. Structural validation only. Scoped in sebastienrousseau/pacs008#13. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/13) |
| `camt.*` | Not implemented | The package cannot generate or parse camt messages. The browser workbench can now validate camt.110 and camt.111 against their XSDs, which covers the November 2026 receive-and-consume obligation for reading an incoming camt.110 — but structural validation is not the same as support. Scoped in sebastienrousseau/pacs008#12. [Tracked](https://github.com/sebastienrousseau/pacs008/issues/12) |
| `head.001` | Not implemented | Business Application Header not shipped as a standalone template. |

## スキームプロファイル

| プロファイル | 名称 | 状態 | 発効 |
|---|---|---|---|
| `cbpr-plus` | SWIFT CBPR+ | stable | 2026-11-14 |
| `chaps-uk` | Bank of England CHAPS | stable | 2026-11-14 |
| `t2-rtgs` | Eurosystem T2 RTGS | stable | 2026-11-14 |
| `fedwire` | US Federal Reserve Fedwire | stable | 2025-03-10 |
| `hvps-plus` | HVPS+ High-Value Payments | stable | 2026-11-14 |
| `sct-inst` | SEPA Instant Credit Transfer | stable | 2025-01-01 |

## ルール

各ルールにはマイナーリリース間で変わらない安定した識別子があります。合否が変わる場合は新しいルールセット版が必要です。

*ルールの要約と是正文は英語で表示します。これらはルールの規範的内容であり、各インターフェースから識別子で参照されます。*

#### `CBPR-ADDR-001` — Fully unstructured postal address is not accepted

| | |
|---|---|
| プロファイル | cbpr-plus |
| レイヤー | scheme |
| 重大度 | error |
| 発効日 | 2026-11-14 |
| メッセージ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| パス | `{party}/PstlAdr` |
| 出典 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 検証日 2026-07-28 |
| テストデータ | [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) (合格) · [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (合格) · [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) (不合格) |

From 14 November 2026 a fully unstructured postal address is rejected in CBPR+ payment messages.

**是正.** Supply Town Name and Country in their structured elements. A compliant hybrid address is sufficient; a fully structured address is preferred.

#### `CBPR-ADDR-002` — Town Name is mandatory in a structured element

| | |
|---|---|
| プロファイル | cbpr-plus |
| レイヤー | scheme |
| 重大度 | error |
| 発効日 | 2026-11-14 |
| メッセージ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| パス | `{party}/PstlAdr/TwnNm` |
| 出典 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 検証日 2026-07-28 |
| テストデータ | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (合格) · [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) (不合格) |

Town Name must be carried in TwnNm, not in an address line.

**是正.** Move the town into <TwnNm>. Leaving it inside <AdrLine> does not satisfy the requirement.

#### `CBPR-ADDR-003` — Country is mandatory as a two-letter ISO 3166 code

| | |
|---|---|
| プロファイル | cbpr-plus |
| レイヤー | scheme |
| 重大度 | error |
| 発効日 | 2026-11-14 |
| メッセージ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| パス | `{party}/PstlAdr/Ctry` |
| 出典 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 検証日 2026-07-28 |
| テストデータ | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (合格) · [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) (不合格) |

Country must be carried in Ctry as a two-letter ISO 3166 alpha-2 code.

**是正.** Use the alpha-2 code, for example GB rather than United Kingdom or GBR.

#### `CBPR-ADDR-004` — Hybrid postal address is accepted

| | |
|---|---|
| プロファイル | cbpr-plus |
| レイヤー | scheme |
| 重大度 | info |
| 発効日 | 2025-11-22 |
| メッセージ | `pacs.008`, `pacs.009`, `pacs.004`, `pacs.003` |
| パス | `{party}/PstlAdr` |
| 出典 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 検証日 2026-07-28 |
| テストデータ | [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) (合格) |

A hybrid address — structured Town Name and Country alongside address lines — is accepted, both before and after the November 2026 change.

**是正.** No action required. Note that a fully structured address remains preferable for downstream data quality.

#### `CBPR-ADDR-005` — Agent identified by BIC only is exempt

| | |
|---|---|
| プロファイル | cbpr-plus |
| レイヤー | scheme |
| 重大度 | info |
| 発効日 | 2026-11-14 |
| メッセージ | `pacs.008`, `pacs.009` |
| パス | `{agent}/FinInstnId/BICFI` |
| 出典 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 検証日 2026-07-28 |
| テストデータ | [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) (合格) |

For agent fields, BIC-only identification remains valid; no postal address is required.

**是正.** No action required. Do not add a partial address purely to satisfy the address rule.

#### `CBPR-ADDR-006` — Message types excepted from the address requirement

| | |
|---|---|
| プロファイル | cbpr-plus |
| レイヤー | scheme |
| 重大度 | info |
| 発効日 | 2026-11-14 |
| メッセージ | `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060` |
| パス | — |
| 出典 | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address), 検証日 2026-07-28 |
| テストデータ | — |

The structured address requirement does not apply to admi.024, camt.025, camt.052, camt.053, camt.054 and camt.060.

**是正.** No action required for these message types.

#### `CHAPS-ADDR-001` — CHAPS validation library rejects fully unstructured addresses

| | |
|---|---|
| プロファイル | chaps-uk |
| レイヤー | scheme |
| 重大度 | error |
| 発効日 | 2026-11-14 |
| メッセージ | `pacs.008`, `pacs.009` |
| パス | `{party}/PstlAdr` |
| 出典 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 検証日 2026-07-28 |
| テストデータ | [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) (合格) · [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) (不合格) |

From November 2026 the CHAPS validation library rejects payments carrying a fully unstructured address. Hybrid is the minimum acceptable form.

**是正.** Structure the address to at least hybrid form before submission to CHAPS.

#### `CHAPS-PURP-001` — Purpose codes become mandatory on all CHAPS payments — **公表済み・未適用**

| | |
|---|---|
| プロファイル | chaps-uk |
| レイヤー | scheme |
| 重大度 | error |
| 発効日 | 2027-11-01 |
| メッセージ | `pacs.008`, `pacs.009` |
| パス | `CdtTrfTxInf/Purp/Cd` |
| 出典 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 検証日 2026-07-28 |
| テストデータ | — |

From November 2027 the Bank of England requires a purpose code on all CHAPS payments, extending the earlier property and FI-to-FI requirement.

**是正.** Populate <Purp><Cd> with an appropriate ISO 20022 external purpose code.

*Effective date is the announced month; the exact day should be re-verified against the Bank of England policy statement before this rule is enforced.*

#### `CHAPS-RMT-001` — Structured remittance information becomes mandatory for CHAPS — **公表済み・未適用**

| | |
|---|---|
| プロファイル | chaps-uk |
| レイヤー | scheme |
| 重大度 | error |
| 発効日 | 2027-11-01 |
| メッセージ | `pacs.008` |
| パス | `CdtTrfTxInf/RmtInf/Strd` |
| 出典 | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps), 検証日 2026-07-28 |
| テストデータ | — |

From November 2027 remittance information carried in CHAPS payments must be structured.

**是正.** Carry remittance data in <RmtInf><Strd> rather than <RmtInf><Ustrd>.

*Announced in the Bank of England consultation; re-verify scope and exact date before enforcement.*


## 出典

| 出典 | 発行者 | 文書 | 発効 | 検証日 |
|---|---|---|---|---|
| `SWIFT-ADDR-2026` | S.W.I.F.T. SC | [SWIFT CBPR+ Removal of Unstructured Address Guidelines](https://www.swift.com/standards/iso-20022/removal-unstructured-address) | 2026-11-14 | 2026-07-28 |
| `BOE-CHAPS-2026` | Bank of England | [Policy Statement — Mandating ISO 20022 Enhanced Data in CHAPS](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) | 2026-11-14 | 2026-07-28 |
| `ISO-20022-PACS008-13` | ISO 20022 Registration Authority | [Financial Innovation & Transfer — pacs.008.001.13 Message Definition](https://www.iso20022.org/iso-20022-message-definitions) | 2025-01-01 | 2026-07-28 |

## ISO 20022 の帰属表示

pacs008.com is not the official ISO 20022 website. The sole source of up-to-date materials and information on ISO 20022 message standards and the Repository is https://www.iso20022.org/.

本ページのメッセージ定義および識別子は ISO 20022 の資料に由来し、次に基づいて利用しています: [ISO 20022 Intellectual Property Right Policy](https://www.iso20022.org/terms-use).
