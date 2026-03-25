---
title: "ISO 20022 用語集 | pacs008"
description: pacs.008および関連メッセージで使用される主要なISO 20022および決済メッセージ用語の定義。
lang: ja-JP
lastUpdated: true
image: /logo.svg
---

# ISO 20022 用語集

この用語集では、ISO 20022 pacsメッセージおよびこのサイトで使用される主要な用語、略語、技術概念を定義しています。

## A

**ACH** — Automated Clearing House（自動清算機関）。金融機関間のバッチ電子決済を処理するネットワーク。

**AdrLine** — Address Line（アドレス行）。ISO 20022の郵便住所構造におけるフリーテキストのアドレスフィールド。各70文字で最大7行。2026年11月までにCBPR+向けの構造化アドレス要素に置き換えられる予定。

**ACCP** — Accepted Customer Profile（顧客プロファイル承認済み）。先行する検証（構文、顧客プロファイル）が通過したことを示すpacs.002ステータスコード。

**ACSC** — Accepted Settlement Completed（決済完了承認済み）。債務者口座での決済が完了したことを確認するpacs.002ステータスコード。

**ACSP** — Accepted Settlement in Process（決済処理中承認済み）。すべての検証が通過し、決済が進行中であることを示すpacs.002ステータスコード。

## B

**BAH** — Business Application Header（head.001）。SWIFTを介した輸送のためにISO 20022ビジネスメッセージをラップする標準化されたエンベロープ。ルーティング情報、メッセージ定義識別子、送受信BICを含む。

**BIC** — Business Identifier Code（ISO 9362）。金融機関を一意に識別する8または11文字のコード。形式：BBBBCCLL（銀行コード+国+所在地）、オプションのBBB支店コード付き。

## C

**CBPR+** — Cross-Border Payments and Reporting Plus。MTからISO 20022への国際決済メッセージングの移行に関するSWIFTのプログラム。2023年3月に稼働開始。

**CdtTrfTxInf** — Credit Transfer Transaction Information（クレジットトランスファー取引情報）。pacs.008における主要な取引レベルのビルディングブロックで、支払い詳細、当事者、金額、送金情報を含む。

**ChrgBr** — Charge Bearer（手数料負担者）。取引手数料を誰が支払うかを指定。値：DEBT（債務者）、CRED（債権者）、SHAR（分担）、SLEV（サービスレベル、SEPAのみ）。

**CLRG** — クリアリングシステム決済。TARGET2、EURO1、CHIPSなどのクリアリングシステムを通じて資金が移動する決済方法。

**COVE** — カバー方式決済。pacs.009のカバー決済がコルレス銀行間の資金調達を処理し、pacs.008が顧客データを直接運ぶ決済方法。

**CSM** — Clearing and Settlement Mechanism（清算決済メカニズム）。参加機関間の支払い指図を処理し決済するインフラストラクチャ。

## D

**Dbtr** — Debtor（債務者）。資金を支払い、支払いを開始する当事者。pacs.008では、Dbtr要素に債務者の名前、郵便住所、識別情報、居住国が含まれる。

**DbtrAgt** — Debtor Agent（債務者エージェント）。債務者の口座を管理し、pacs.008指図を送信する金融機関。

## E

**E2E ID** — End-to-End Identification（EndToEndId）（エンドツーエンド識別）。発信者が割り当て、支払いチェーン内のすべてのエージェントを通じて変更されないままでなければならない参照。顧客レベルのトレーサビリティに使用。

**EPC** — European Payments Council（欧州決済評議会）。クレジットトランスファーおよびダイレクトデビットのSEPA支払いスキーム規則書を管理する機関。

## F

**FI** — Financial Institution（金融機関）。決済の清算と決済に参加する銀行またはその他の機関。

**FIToFI** — Financial Institution to Financial Institution（金融機関間）。pacsメッセージが運用される銀行間ドメインを記述。

## G

**gpi** — Global Payments Innovation。より速く透明な国際決済のためのSWIFTのイニシアチブ。クラウドベースのTrackerを介したUETRによるエンドツーエンド追跡を使用。

**GrpHdr** — Group Header（グループヘッダー）。pacsメッセージのメッセージレベルのメタデータブロック。MsgId、CreDtTm、NbOfTxs、決済情報、支払いタイプ情報を含む。

## H

**ハイブリッドアドレス** — 構造化要素（StrtNm、TwnNm、Ctry）と非構造化AdrLine要素を組み合わせた郵便住所形式。2026年11月の構造化アドレス期限前の移行期間中に許可。

## I

**IBAN** — International Bank Account Number（ISO 13616）（国際銀行口座番号）。国際決済および国内決済に使用される標準化された口座番号形式。ISO 7064 Mod 97-10チェックサムを使用して検証。

**INDA** — Instructed Agent settlement（被指図エージェント決済）。債務者エージェントがノストロ口座を保有する被指図エージェントの帳簿上で資金が決済される決済方法。

**INGA** — Instructing Agent settlement（指図エージェント決済）。被指図エージェントがノストロ口座を保有する指図エージェントの帳簿上で資金が決済される決済方法。

**InstrId** — Instruction Identification（指図識別）。支払いチェーン内の隣接エージェント間のポイントツーポイント参照。各ホップで変更される場合がある。

**IntrBkSttlmAmt** — Interbank Settlement Amount（銀行間決済金額）。指図エージェントと被指図エージェントの間で決済される金額（決済通貨建て）。

**ISO 20022** — 金融機関間の電子データ交換のための国際標準。決済、証券、貿易金融、その他の金融分野向けの共通データモデルとXMLベースのメッセージ形式を定義。

## L

**LEI** — Legal Entity Identifier（ISO 17442）（法人識別子）。金融取引に参加する法人を一意に識別する20文字の英数字コード。当事者のOrgId/LEIおよびエージェントのFinInstnId/LEIで使用。

## M

**MsgId** — Message Identification（メッセージ識別）。送信エージェントが割り当てるメッセージエンベロープの一意の識別子。支払いチェーンの各ホップで変更。

**MT** — Message Type（メッセージタイプ）。SWIFTのレガシーメッセージ形式（例：顧客送金用MT103、金融機関間送金用MT202）。ISO 20022 MXメッセージに置き換えられつつある。

**MX** — SWIFTが使用するISO 20022 XMLメッセージ形式。MXメッセージはCBPR+のもとで国際決済のMTメッセージを置き換える。

## N

**NbOfTxs** — Number of Transactions（取引件数）。メッセージに含まれる個別取引の数を示すGroup Header要素。

## P

**pacs** — Payments Clearing and Settlement（決済清算・決済）。銀行間決済メッセージをカバーするISO 20022ビジネスドメイン。

**pacs.002** — FI間決済ステータスレポート。以前の支払い指図の処理ステータス（承認、拒否、保留、決済完了）を報告。

**pacs.003** — FI間顧客口座振替。資金回収のための銀行間顧客口座振替指図を運ぶ。

**pacs.004** — 支払い返金。支払いが適用できない場合に、決済済み資金を支払いチェーンを通じて返金。

**pacs.007** — FI間支払い取消。元の送信者から前方にチェーンを通じて支払い指図を取り消す。

**pacs.008** — FI間顧客クレジットトランスファー。顧客クレジットトランスファーの主要な銀行間メッセージ。MT103を置き換え。

**pacs.009** — 金融機関クレジットトランスファー。銀行自身の名義で銀行間の資金を移動。資金調達、カバー決済、流動性管理をカバー。MT202/MT202COVを置き換え。

**pacs.010** — 金融機関口座振替。二者間協定のもとで、一方の銀行が他方の銀行の自己口座を引き落とすことを可能にする。

**pacs.028** — FI間決済ステータス照会。pacs.002の更新が届いていない場合に、以前の支払いのステータスを能動的に照会。

**pain** — Payment Initiation（支払い開始）。顧客から銀行へのメッセージをカバーするISO 20022ビジネスドメイン（例：クレジットトランスファー開始用pain.001）。

**PII** — Personally Identifiable Information（個人を特定できる情報）。個人を識別できるデータ。pacs008は構造化ログでPIIをマスク。

**PstlAdr** — Postal Address（郵便住所）。pacsメッセージの当事者に使用される住所構造。構造化（StrtNm、TwnNm、Ctry）および非構造化（AdrLine）形式をサポート。

## R

**RJCT** — Rejected（拒否）。支払いが拒否されたことを示すpacs.002ステータスコード。

**RmtInf** — Remittance Information（送金情報）。pacs.008で運ばれる支払い参照データ。非構造化（フリーテキスト、最大140文字）および構造化（文書参照、金額、債権者参照）形式をサポート。

**RTGS** — Real-Time Gross Settlement（即時グロス決済）。取引が個別にリアルタイムで決済される決済システム（例：TARGET2、Fedwire、CHAPS）。

## S

**SCT** — SEPA Credit Transfer。EPCが管理するpacs.008を使用するユーロ建てクレジットトランスファースキーム。

**SCT Inst** — SEPA Instant Credit Transfer。SCTの即時決済バリアント。10秒未満で決済。

**SDD** — SEPA Direct Debit。EPCが管理するpacs.003を使用するユーロ建て口座振替スキーム。

**SEPA** — Single Euro Payments Area（単一ユーロ決済圏）。欧州36カ国にわたるユーロ建てクレジットトランスファー、口座振替、カード決済をカバーする決済統合イニシアチブ。

**SLEV** — Service Level（サービスレベル）。SEPAで必須の手数料負担コード。手数料がスキーム規則に従い、送金額からの控除がないことを意味。

**STP** — Straight-Through Processing（ストレートスループロセシング）。手動介入なしの自動化されたエンドツーエンド決済処理。

**SttlmMtd** — Settlement Method（決済方法）。銀行間決済の方法を定義：CLRG（クリアリングシステム）、INDA（被指図エージェント）、INGA（指図エージェント）、COVE（カバー決済）。

## T

**TxId** — Transaction Identification（取引識別）。最初の指図エージェントが割り当てる銀行間参照。後続のエージェントによる変更不可。

## U

**UETR** — Unique End-to-End Transaction Reference（一意のエンドツーエンド取引参照）。債務者エージェントが生成し、gpi追跡のために支払いのすべてのレグを通じて変更されずに運ばれるUUID v4識別子。

## X

**XSD** — XML Schema Definition（XMLスキーマ定義）。ISO 20022 XMLメッセージの構造、要素、データ型を定義する正式なスキーマ。

**XXE** — XML External Entity（XML外部エンティティ）。XML解析におけるセキュリティ脆弱性。pacs008はdefusedxmlを使用してXXE攻撃を防止。

## 参考資料

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
