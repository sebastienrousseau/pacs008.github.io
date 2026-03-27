---
title: "ISO 20022 用語集 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: ja-JP
lastUpdated: true
image: /logo.webp
---

# ISO 20022 用語集

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Automated Clearing House。金融機関間のバッチ電子決済を処理するネットワーク。

**AdrLine** — Address Line。ISO 20022 住所構造におけるフリーテキスト住所フィールド。各 70 文字で最大 7 行。2026 年 11 月までに CBPR+ 向けに構造化住所要素に置き換えられます。

**ACCP** — Accepted Customer Profile。先行するチェック（構文、顧客プロファイル）が合格したことを示す pacs.002 ステータスコード。

**ACSC** — Accepted Settlement Completed。債務者口座での決済が完了したことを確認する pacs.002 ステータスコード。

**ACSP** — Accepted Settlement in Process。すべてのチェックが合格し、決済が進行中であることを示す pacs.002 ステータスコード。

## B

**BAH** — Business Application Header（head.001）。SWIFT を介した伝送のために ISO 20022 ビジネスメッセージをラップする標準化されたエンベロープ。ルーティング情報、メッセージ定義識別子、送信者/受信者 BIC を含みます。

**BIC** — Business Identifier Code（ISO 9362）。金融機関を一意に識別する 8 または 11 文字のコード。形式：BBBBCCLL（銀行コード + 国 + 場所）にオプションの BBB 支店コード。

## C

**CBPR+** — Cross-Border Payments and Reporting Plus。クロスボーダー決済メッセージングを MT から ISO 20022 に移行する SWIFT のプログラム。2023 年 3 月に開始。

**CdtTrfTxInf** — Credit Transfer Transaction Information。pacs.008 における主要なトランザクションレベルの構成要素で、支払詳細、当事者、金額、送金情報を含みます。

**ChrgBr** — Charge Bearer。トランザクション手数料の負担者を指定。値：DEBT（債務者）、CRED（債権者）、SHAR（分担）、SLEV（サービスレベル、SEPA のみ）。

**CLRG** — 清算システム決済。TARGET2、EURO1、CHIPS などの清算システムを通じて資金が移動する決済方法。

**COVE** — カバー方式決済。別個の pacs.009 カバー決済がコルレス間のファンディングを処理し、pacs.008 が顧客データを直接運ぶ決済方法。

**CSM** — Clearing and Settlement Mechanism。参加機関間の決済指図を処理・決済するインフラストラクチャ。

## D

**Dbtr** — Debtor（債務者）。資金を支払い、決済を開始する当事者。pacs.008 では、Dbtr 要素に債務者の名前、住所、識別情報、居住国が含まれます。

**DbtrAgt** — Debtor Agent（債務者エージェント）。債務者の口座を管理し、pacs.008 指図を送信する金融機関。

## E

**E2E ID** — End-to-End Identification（EndToEndId）。発信者が割り当て、決済チェーン内のすべてのエージェントを通じて不変でなければならない参照。顧客レベルのトレーサビリティに使用。

**EPC** — European Payments Council。クレジットトランスファーとダイレクトデビットの SEPA 決済スキーム規則集を管理する組織。

## F

**FI** — Financial Institution。決済清算と決済に参加する銀行またはその他の機関。

**FIToFI** — Financial Institution to Financial Institution。pacs メッセージが動作する銀行間ドメインを表します。

## G

**gpi** — Global Payments Innovation。より迅速で透明性の高いクロスボーダー決済を目指す SWIFT のイニシアチブ。クラウドベースの Tracker を介したエンドツーエンド追跡に UETR を使用。

**GrpHdr** — Group Header。pacs メッセージにおけるメッセージレベルのメタデータブロック。MsgId、CreDtTm、NbOfTxs、決済情報、支払種類情報を含みます。

## H

**Hybrid address** — 構造化要素（StrtNm、TwnNm、Ctry）と非構造化 AdrLine 要素を組み合わせた住所形式。2026 年 11 月の構造化住所期限前の移行期間中に許容。

## I

**IBAN** — International Bank Account Number（ISO 13616）。クロスボーダーおよび国内決済に使用される標準化された口座番号形式。ISO 7064 Mod 97-10 チェックサムで検証。

**INDA** — Instructed Agent 決済。債務者エージェントがノストロ口座を保有する被指図エージェントの帳簿上で資金を決済する方法。

**INGA** — Instructing Agent 決済。被指図エージェントが指図エージェントのノストロ口座を保有する指図エージェントの帳簿上で資金を決済する方法。

**InstrId** — Instruction Identification。決済チェーン内の隣接するエージェント間のポイントツーポイント参照。各ホップで変更される場合あり。

**IntrBkSttlmAmt** — Interbank Settlement Amount。指図エージェントと被指図エージェント間で決済される金額（決済通貨建て）。

**ISO 20022** — 金融機関間の電子データ交換に関する国際標準。決済、証券、貿易金融、その他の金融分野向けの共通データモデルと XML ベースのメッセージ形式を定義。

## L

**LEI** — Legal Entity Identifier（ISO 17442）。金融取引に参加する法人を一意に識別する 20 文字の英数字コード。当事者の OrgId/LEI およびエージェントの FinInstnId/LEI で使用。

## M

**MsgId** — Message Identification。送信エージェントが割り当てるメッセージエンベロープの一意の識別子。決済チェーンの各ホップで変更。

**MT** — Message Type。SWIFT のレガシーメッセージ形式（例：顧客クレジットトランスファー向け MT103、金融機関間送金向け MT202）。ISO 20022 MX メッセージに置き換えられつつある。

**MX** — SWIFT が使用する ISO 20022 XML メッセージ形式。MX メッセージは CBPR+ のもとでクロスボーダー決済向けに MT メッセージを置き換え。

## N

**NbOfTxs** — Number of Transactions。メッセージに含まれる個別トランザクションの数を示す Group Header 要素。

## P

**pacs** — Payments Clearing and Settlement。銀行間決済メッセージをカバーする ISO 20022 ビジネスドメイン。

**pacs.002** — FI to FI Payment Status Report。以前の決済指図の処理ステータス（受理、拒否、保留、決済済み）を報告。

**pacs.003** — FI to FI Customer Direct Debit。資金回収のための顧客ダイレクトデビット指図を銀行間で運ぶ。

**pacs.004** — Payment Return。決済が適用できない場合に、決済済み資金を決済チェーンに沿って返金。

**pacs.007** — FI to FI Payment Reversal。元の送信者からチェーンを順方向に決済指図を取消。

**pacs.008** — FI to FI Customer Credit Transfer。顧客クレジットトランスファーのための主要な銀行間メッセージ。MT103 を置き換え。

**pacs.009** — Financial Institution Credit Transfer。銀行間で自行のために資金を移動。ファンディング、カバー決済、流動性管理をカバー。MT202/MT202COV を置き換え。

**pacs.010** — Financial Institution Direct Debit。二者間契約のもとで、一方の銀行が他方の銀行の自行口座をデビットすることを可能にする。

**pacs.028** — FI to FI Payment Status Request。pacs.002 の更新が届かない場合に、以前の決済のステータスを積極的にリクエスト。

**pain** — Payment Initiation。顧客対銀行のメッセージをカバーする ISO 20022 ビジネスドメイン（例：クレジットトランスファー開始向け pain.001）。

**PII** — Personally Identifiable Information。個人を識別できるデータ。pacs008 は構造化ログ内で PII をマスクします。

**PstlAdr** — Postal Address。pacs メッセージの当事者に使用される住所構造。構造化（StrtNm、TwnNm、Ctry）および非構造化（AdrLine）形式をサポート。

## R

**RJCT** — Rejected。決済が拒否されたことを示す pacs.002 ステータスコード。

**RmtInf** — Remittance Information。pacs.008 で運ばれる送金参照データ。非構造化（フリーテキスト、最大 140 文字）および構造化（文書参照、金額、債権者参照）形式をサポート。

**RTGS** — Real-Time Gross Settlement。トランザクションが個別にリアルタイムで決済される決済システム（例：TARGET2、Fedwire、CHAPS）。

## S

**SCT** — SEPA Credit Transfer。EPC が管理するユーロ建てクレジットトランスファースキーム。pacs.008 を使用。

**SCT Inst** — SEPA Instant Credit Transfer。SCT のインスタント決済バリアントで、10 秒以内に決済。

**SDD** — SEPA Direct Debit。EPC が管理するユーロ建てダイレクトデビットスキーム。pacs.003 を使用。

**SEPA** — Single Euro Payments Area。ヨーロッパ 36 か国にわたるユーロ建てクレジットトランスファー、ダイレクトデビット、カード決済をカバーする決済統合イニシアチブ。

**SLEV** — Service Level。SEPA では必須の手数料負担者コード。手数料はスキーム規則に従い、送金額からの控除なし。

**STP** — Straight-Through Processing。手動介入なしの自動化されたエンドツーエンド決済処理。

**SttlmMtd** — Settlement Method。銀行間決済の方法を定義：CLRG（清算システム）、INDA（被指図エージェント）、INGA（指図エージェント）、COVE（カバー決済）。

## T

**TxId** — Transaction Identification。最初の指図エージェントが割り当てる銀行間参照。後続のエージェントが変更してはならない。

## U

**UETR** — Unique End-to-End Transaction Reference。債務者エージェントが生成し、gpi 追跡のために決済のすべてのレッグを通じて不変で運ばれる UUID v4 識別子。

## X

**XSD** — XML Schema Definition。ISO 20022 XML メッセージの構造、要素、データ型を定義する正式なスキーマ。

**XXE** — XML External Entity。XML パースにおけるセキュリティ脆弱性。pacs008 は defusedxml を使用して XXE 攻撃を防止。

## 参考文献

- [ISO 20022 メッセージ定義カタログ](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 外部コードセット](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ 標準プログラム](https://www.swift.com/standards/iso-20022)

