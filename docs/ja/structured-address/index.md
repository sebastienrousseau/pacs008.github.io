---
title: "2026年11月 構造化住所の期限 | pacs008"
description: How the SWIFT CBPR+ November 2026 structured postal address deadline affects pacs.008 and related payment messages, and how pacs008 helps teams comply.
lang: ja-JP
layout: page
date: "2026-07-27"
name: pacs008
short_name: pacs008
start_url: /
display: standalone
background_color: "#ffffff"
theme_color: "#084a53"
lastUpdated: true
image: /logo.webp
howtoName: "How to prepare for the November 2026 structured postal address deadline"
howtoDescription: "Steps to audit, map, validate, and test postal address data before the SWIFT CBPR+ November 2026 deadline."
howto:
  - name: "Step 1"
    text: "債務者、債権者、エージェントの記録全体で現在の住所データ品質を監査する。"
  - name: "Step 2"
    text: "既存の非構造化住所フィールドを構造化フォーマット（通り、建物、郵便番号、都市、国）にマッピングする。"
  - name: "Step 3"
    text: "pacs008を使用してプリジェネレーションパイプラインに住所検証を追加する。"
  - name: "Step 4"
    text: "期限前に代表的な決済データでテストする。"
---

# 2026年11月 構造化住所の期限

SWIFTは2026年11月よりクロスボーダー決済メッセージに構造化郵便住所を義務付けます。何が変わるのか、どのメッセージが影響を受けるのか、pacs008がチームの準備をどのように支援するのかを説明します。

## 何が変わるのか

SWIFT CBPR+はクロスボーダー決済メッセージにおいて、非構造化郵便住所から構造化住所フィールドへ移行しています。2026年11月の期限以降、主要当事者の住所フィールドは、通り名、建物番号、郵便番号、都市名、国名の個別要素を持つ構造化フォーマットを使用する必要があります。

## なぜ重要なのか

- 非構造化住所は手動修正率を高め、ストレートスルー処理を遅延させます。
- 構造化住所は当事者名と所在地データを分離することで制裁審査の精度を向上させます。
- 規制およびスキーム要件がコンプライアンスと報告のために構造化データをますます義務付けています。
- 住所の品質が取引先の期待を満たさない場合、クロスボーダー決済の拒否率が上昇します。

## 影響を受けるメッセージ

- **pacs.008** — 顧客クレジット移転における債務者と債権者の郵便住所。
- **pacs.009** — 金融機関間クレジット移転およびカバー決済における機関住所。
- **pacs.004** — 支払い返還における当事者住所。
- **pacs.003** — 顧客口座振替における債権者と債務者の住所。

## pacs008の支援方法

- XML生成前に構造化およびハイブリッド郵便住所フィールドを検証します。
- 期限後に失敗する非構造化住所データにフラグを立てます。
- 期限前のハイブリッドフォーマットと期限後の構造化専用フォーマットの両方をサポートします。
- 住所品質チェックをCIパイプラインおよびバッチ検証ワークフローに統合します。

## Normative rules

Generated from the pacs008 rule registry (ruleset `2026.11.0`).
Each rule has a stable identifier, an effective date, an authoritative source and
both a passing and a failing test fixture.

| Rule | Profile | Effective | Severity | Requirement | Source |
|---|---|---|---|---|---|
| `CBPR-ADDR-001` | cbpr-plus | 2026-11-14 | Error | Fully unstructured postal address is not accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-002` | cbpr-plus | 2026-11-14 | Error | Town Name is mandatory in a structured element | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-003` | cbpr-plus | 2026-11-14 | Error | Country is mandatory as a two-letter ISO 3166 code | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-004` | cbpr-plus | 2025-11-22 | Info | Hybrid postal address is accepted | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-005` | cbpr-plus | 2026-11-14 | Info | Agent identified by BIC only is exempt | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CBPR-ADDR-006` | cbpr-plus | 2026-11-14 | Info | Message types excepted from the address requirement | [SWIFT-ADDR-2026](https://www.swift.com/standards/iso-20022/removal-unstructured-address) |
| `CHAPS-ADDR-001` | chaps-uk | 2026-11-14 | Error | CHAPS validation library rejects fully unstructured addresses | [BOE-CHAPS-2026](https://www.bankofengland.co.uk/paper/2024/policy-statement/mandating-iso-20022-enhanced-data-in-chaps) |

### Address formats compared

| Format | `TwnNm` | `Ctry` | `AdrLine` | Before 14 Nov 2026 | On or after |
|---|---|---|---|---|---|
| Fully structured | Present | Present | Absent | Accepted | Accepted |
| Hybrid | Present | Present | Present | Accepted | Accepted |
| Fully unstructured | Absent | Absent | Present | Accepted | **Rejected** |

### Exceptions

The requirement does not apply to these message types: `admi.024`, `camt.025`, `camt.052`, `camt.053`, `camt.054`, `camt.060`.

Agents identified by BIC alone remain valid without a postal address
(`CBPR-ADDR-005`). Do not add a partial address solely to satisfy the rule.

### Test fixtures

Download and run these through the [workbench](/live/), the CLI or the API.
Each maps to the rule it exercises.

- [`structured-valid.csv`](/fixtures/cbpr/address/structured-valid.csv) — passes `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/cbpr/address/unstructured-invalid.csv) — fails `CBPR-ADDR-001`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-002`
- [`missing-town-invalid.csv`](/fixtures/cbpr/address/missing-town-invalid.csv) — fails `CBPR-ADDR-002`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-003`
- [`missing-country-invalid.csv`](/fixtures/cbpr/address/missing-country-invalid.csv) — fails `CBPR-ADDR-003`
- [`hybrid-valid.csv`](/fixtures/cbpr/address/hybrid-valid.csv) — passes `CBPR-ADDR-004`
- [`agent-bic-only-valid.csv`](/fixtures/cbpr/address/agent-bic-only-valid.csv) — passes `CBPR-ADDR-005`
- [`hybrid-valid.csv`](/fixtures/chaps/address/hybrid-valid.csv) — passes `CHAPS-ADDR-001`
- [`unstructured-invalid.csv`](/fixtures/chaps/address/unstructured-invalid.csv) — fails `CHAPS-ADDR-001`

## タイムライン

- **2023年3月** — SWIFT CBPR+がISO 20022によるクロスボーダー決済で稼働開始。
- **2025年11月** — MTおよびMX決済指示の共存期間が終了。
- **2026年11月** — CBPR+メッセージに対する構造化郵便住所要件が発効。
- **November 2027** — the Bank of England has announced that purpose codes and structured remittance information become mandatory for all CHAPS payments, and camt.110/camt.111 become mandatory across Swift.

## 今すべきこと

- 債務者、債権者、エージェントの記録全体で現在の住所データ品質を監査する。
- 既存の非構造化住所フィールドを構造化フォーマット（通り、建物、郵便番号、都市、国）にマッピングする。
- pacs008を使用してプリジェネレーションパイプラインに住所検証を追加する。
- 期限前に代表的な決済データでテストする。

## 参考文献

- [SWIFT CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)
- [SWIFT CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [SWIFT CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)

