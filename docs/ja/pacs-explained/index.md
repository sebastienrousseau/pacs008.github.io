---
title: "pacs メッセージの解説 | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: ja-JP
lastUpdated: true
image: /logo.webp
---

# pacs メッセージの解説

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## 決済ライフサイクル

完全な pacs 決済ライフサイクルは 6 つのステージと複数のメッセージタイプが連携して構成されます。

**ステージ 1 — 開始。** 決済は顧客対銀行ドメイン（pain.001）で発生します。債務者の銀行が指図を受け取り、銀行間ドメインにマッピングします。

**ステージ 2 — 銀行間指図。** 債務者エージェントが pacs.008 を作成し、チェーン内の次のエージェントに送信します。シリアルフローでは、pacs.008 は仲介者を介してホップごとに移動します。カバーフローでは、pacs.008 は債務者エージェントから債権者エージェントに直接送られ、別個の pacs.009 がコルレス銀行チェーンを通じてファンディングレッグを運びます。

**ステージ 3 — ステータス報告。** 各ホップで、受領エージェントは受理（ACCP/ACSP/ACSC）、拒否（RJCT）、または保留ステータス（PDNG）を確認する pacs.002 を返す場合があります。CBPR+ では、すべての決済ステータス通信に pacs.002 が必須です。

**ステージ 4 — 決済。** 決済は清算システム（CLRG）、コルレス口座（INDA/INGA）、またはカバー決済（COVE）を通じて行われます。銀行間決済日と金額が、いつ、いくら決済されるかを制御します。

**ステージ 5 — 受取人への入金。** 債権者エージェントが受取人に入金し、顧客通知を送信する場合があります。

**ステージ 6 — 例外処理。** 決済後に受取人への入金ができない場合、pacs.004 がチェーンを逆方向に資金を返金します。発信者がエラーや不正を発見した場合、pacs.007 がチェーンを順方向に送られます。ステータスが不明な場合、pacs.028 が次のエージェントに照会し、回答は pacs.002 で返されます。

### シリアル方式のフロー

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### カバー方式のフロー

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## pacs.008 の XML 構造

pacs.008 は 2 つの主要な構成要素で構成されます：Group Header（GrpHdr）と Credit Transfer Transaction Information（CdtTrfTxInf）。

### Group Header（GrpHdr）

Group Header はメッセージごとに 1 回だけ出現し、以下を含みます：

- **MsgId** — 送信エージェントが割り当てる一意のメッセージ識別子。最大 35 文字、送信者ごとに一意でなければなりません。
- **CreDtTm** — ISO 8601 形式の作成タイムスタンプ。
- **NbOfTxs** — メッセージ内の個別トランザクション数。
- **SttlmInf** — 決済方法（SttlmMtd）、およびオプションで清算システムと決済口座を含む決済情報。
- **IntrBkSttlmDt** — 銀行間決済が行われる日付。
- **PmtTpInf** — 優先度、サービスレベル、ローカル手段、カテゴリー目的を含む支払種類情報。

### Credit Transfer Transaction Information（CdtTrfTxInf）

各トランザクションは以下を含みます：

- **PmtId** — 支払識別子：InstrId、EndToEndId、TxId、UETR。
- **IntrBkSttlmAmt** — 通貨コード付きの銀行間決済金額。
- **InstdAmt** — 元の指図金額（為替により決済金額と異なる場合があります）。
- **ChrgBr** — 手数料負担者コード（DEBT、CRED、SHAR、または SLEV）。
- **Dbtr / DbtrAcct / DbtrAgt** — 債務者の名前、住所、識別情報、口座、エージェント。
- **Cdtr / CdtrAcct / CdtrAgt** — 債権者の名前、住所、識別情報、口座、エージェント。
- **IntrmyAgt1 / 2 / 3** — チェーン内の最大 3 つの仲介エージェント。
- **RmtInf** — 送金情報。非構造化（フリーテキスト）または構造化（文書参照、金額、日付）。
- **Purp** — 構造化された目的コード。
- **RgltryRptg** — 規制報告の詳細。

## 支払識別子

pacs メッセージは決済チェーンで異なる役割を果たす複数の識別子を使用します。

<div class="api-fields-table" tabindex="0" aria-label="支払識別子">
  <table>
    <caption>支払識別子とその役割</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">識別子</th>
        <th scope="col">設定者</th>
        <th scope="col">チェーン内で変更？</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td class="api-fields-table__field"><strong>MsgId</strong></td>
          <td class="api-fields-table__desc">各送信エージェント</td>
          <td class="api-fields-table__constraint">はい — メッセージごとに新規</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>InstrId</strong></td>
          <td class="api-fields-table__desc">各指図エージェント</td>
          <td class="api-fields-table__constraint">はい — ホップごとに変更される場合あり</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>EndToEndId</strong></td>
          <td class="api-fields-table__desc">発信者（債務者）</td>
          <td class="api-fields-table__constraint">いいえ — 変更不可</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>TxId</strong></td>
          <td class="api-fields-table__desc">最初の指図エージェント</td>
          <td class="api-fields-table__constraint">いいえ — 変更不可</td>
        </tr>
        <tr>
          <td class="api-fields-table__field"><strong>UETR</strong></td>
          <td class="api-fields-table__desc">債務者エージェント</td>
          <td class="api-fields-table__constraint">いいえ — ユニバーサル追跡</td>
        </tr>
    </tbody>
  </table>
</div>

## 決済方法

SttlmMtd 要素は銀行間決済の方法を定義します。

- **CLRG** — TARGET2、EURO1、CHIPS などの清算システムを通じた決済。国内および地域清算で最も一般的。
- **INDA** — 被指図エージェントの帳簿上での決済。債務者エージェントが次のエージェントにノストロ口座を保有。二者間コルレス銀行業務の典型。
- **INGA** — 指図エージェントの帳簿上での決済。被指図エージェントが送信エージェントにノストロ口座を保有。INDA よりも一般的ではない。
- **COVE** — 別個のカバー決済を通じた決済。pacs.009 がコルレス間のファンディングレッグを処理し、pacs.008 が顧客データを直接運ぶ。クロスボーダーのコルレス銀行業務で使用。

## 手数料負担者コード

ChrgBr 要素は誰が決済手数料を負担するかを指定します。

- **DEBT** — 債務者がすべての手数料を負担（MT103 相当：OUR）。債権者は全額を受け取る。
- **CRED** — 債権者がすべての手数料を負担（MT103 相当：BEN）。手数料は送金額から控除される。
- **SHAR** — 手数料は分担（MT103 相当：SHA）。各当事者が自行のエージェント手数料を支払う。クロスボーダー決済で最も一般的。
- **SLEV** — サービスレベルに従う手数料。SEPA では必須。送金額からの控除なし。

## MT103 から pacs.008 へのフィールドマッピング

<div class="api-fields-table" tabindex="0" aria-label="MT103 から pacs.008 へのフィールドマッピング">
  <table>
    <caption>MT103 から pacs.008 への主要フィールドマッピング</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">MT103 フィールド</th>
        <th scope="col">MT103 名称</th>
        <th scope="col">pacs.008 XML パス</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">送信者参照番号</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">銀行オペレーションコード</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">起算日 / 金額</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">指図金額</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">依頼人</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">仕向金融機関</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">被仕向金融機関</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">受取人</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">送金情報</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">手数料の詳細</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">送信者から受信者への情報</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## ステータスコードと理由コード

### pacs.002 ステータスコード

<div class="api-fields-table" tabindex="0" aria-label="pacs.002 ステータスコード">
  <table>
    <caption>pacs.002 のトランザクションステータスコード</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">コード</th>
        <th scope="col">意味</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">受理 — 事前チェック合格</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">受理 — 決済進行中</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">受理 — 決済完了</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">受領 — 未処理</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">保留 — さらなる処理が必要</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">拒否 — 理由コード付き</td></tr>
    </tbody>
  </table>
</div>

### 一般的な拒否・返金理由コード

<div class="api-fields-table" tabindex="0" aria-label="一般的な理由コード">
  <table>
    <caption>よく使用される拒否・返金理由コード</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">コード</th>
        <th scope="col">名称</th>
        <th scope="col">説明</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">口座番号不正</td><td class="api-fields-table__constraint">口座番号が無効または存在しない</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">解約済み口座</td><td class="api-fields-table__constraint">口座が解約されている</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">凍結口座</td><td class="api-fields-table__constraint">口座が取引に対して凍結されている</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">残高不足</td><td class="api-fields-table__constraint">債務者口座の残高不足</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">重複</td><td class="api-fields-table__constraint">重複支払いを検出</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">債権者住所欠落</td><td class="api-fields-table__constraint">債権者住所が欠落または不完全</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">顧客による要求</td><td class="api-fields-table__constraint">顧客による返金または拒否の要求</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">重複支払い</td><td class="api-fields-table__constraint">重複支払いを特定</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">取消に基づく</td><td class="api-fields-table__constraint">取消要求に基づく</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">不正</td><td class="api-fields-table__constraint">不正の疑い</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC 不正</td><td class="api-fields-table__constraint">BIC が不正または不明</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">債権者名/住所欠落</td><td class="api-fields-table__constraint">債権者名または住所データが欠落</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">カットオフ時間</td><td class="api-fields-table__constraint">カットオフ時間を経過</td></tr>
    </tbody>
  </table>
</div>

## 住所形式

### 構造化住所

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### 非構造化住所（2026 年 11 月以降 CBPR+ では非推奨）

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

主な制約：StrtNm 最大 70 文字（CBPR+）、TwnNm 最大 35 文字（CBPR+）、Ctry は ISO 3166-1 alpha-2、AdrLine は 1 行最大 70 文字で最大 7 行。

## 当事者識別

pacs.008 の当事者は複数の識別方法をサポートします：

- **BIC** — ISO 9362 に基づくビジネス識別コード。8 または 11 文字（BBBBCCLL または BBBBCCLLBBB）。エージェントの FinInstnId/BICFI および当事者の OrgId/AnyBIC で使用。
- **LEI** — ISO 17442 に基づく法人識別子。20 文字の英数字。当事者の OrgId/LEI およびエージェントの FinInstnId/LEI に出現。規制報告のためのエンティティ明確化を改善。
- **IBAN** — ISO 13616 に基づく国際銀行口座番号。DbtrAcct/Id/IBAN および CdtrAcct/Id/IBAN で使用。
- **組織 ID** — スキームベースのその他の識別子（税務 ID、DUNS、顧客番号）。OrgId/Othr にスキーム名コードを付して使用。
- **個人 ID** — 自然人向け：生年月日と出生地、パスポート（CCPT）、国民 ID（NIDN）、運転免許証（DRLC）。PrvtId で使用。

## 送金情報

pacs.008 の送金データは RmtInf 要素を使用し、2 つの形式があります：

**非構造化** — 1 回あたり最大 140 文字のフリーテキスト。シンプルだが自動照合は制限される。

**構造化** — タイプコード、番号、日付、金額を含む文書参照。一般的な文書タイプ：CINV（商業請求書）、CREN（クレジットノート）、SOAC（口座明細書）。CdtrRefInf による ISO 11649 債権者参照（RF + チェックディジット + 参照番号）をサポート。自動請求書照合と複数請求書支払いを実現。

## UETR と gpi 追跡

UETR（Unique End-to-End Transaction Reference）は債務者エージェントが生成する UUID v4 です。pacs.008、pacs.009、pacs.002、pacs.004、pacs.007、pacs.028 にわたって PmtId/UETR に出現します。決済チェーン全体を通じて不変でなければなりません。

SWIFT gpi は UETR を使用してクラウドベースの Tracker データベースを通じて決済を追跡します。各エージェントが受領と処理を確認し、エンドツーエンドの可視性を実現します。クロスボーダー決済に対する gpi SLA は、債権者口座への同日入金を目標としています。

## 参考文献

- [ISO 20022 メッセージ定義カタログ](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 外部コードセット](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 利用ガイドライン](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ 移行ロードマップ PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA クレジットトランスファー規則集](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

