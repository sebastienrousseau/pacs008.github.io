---
title: "pacs 消息详解 | pacs008"
description: "Detailed technical reference for ISO 20022 pacs messages: lifecycle, XML structure, settlement methods, reason codes, address types, identifiers..."
lang: zh-CN
lastUpdated: true
image: /logo.webp
---

# pacs 消息详解

A detailed technical reference for the ISO 20022 pacs message family. It covers how messages work together in a complete payment lifecycle, the XML structure, settlement methods, reason codes, party identification, remittance information, and end-to-end tracking.

## 支付生命周期

完整的 pacs 支付生命周期包含六个阶段和多种报文类型协同工作。

**阶段 1 — 发起。** 支付从客户-银行域（pain.001）发起。付款方银行接收指令并将其转化为银行间域。

**阶段 2 — 银行间指令。** 付款方代理创建 pacs.008 并发送给链条中的下一个代理。在串行流中，pacs.008 逐跳通过中间代理传递。在备付流中，pacs.008 从付款方代理直接发送到收款方代理，而独立的 pacs.009 通过代理行链条承载融资环节。

**阶段 3 — 状态报告。** 在每一跳，接收代理可以返回 pacs.002 确认接受（ACCP/ACSP/ACSC）、拒绝（RJCT）或待处理状态（PDNG）。在 CBPR+ 中，所有支付状态通信均强制使用 pacs.002。

**阶段 4 — 结算。** 结算通过清算系统（CLRG）、代理行账户（INDA/INGA）或备付款（COVE）进行。银行间结算日期和金额决定了何时以及结算多少。

**阶段 5 — 收款人入账。** 收款方代理将资金入账给收款人，并可发送客户通知。

**阶段 6 — 异常处理。** 如果结算后收款人无法入账，pacs.004 沿链条返回资金。如果发起方发现错误或欺诈，pacs.007 沿链条正向传递。如果状态不明，pacs.028 向下一代理查询，答复通过 pacs.002 返回。

### 串行方式流

```text
Debtor Agent --(pacs.008)--> Intermediary Agent
Intermediary Agent --(pacs.002)--> Debtor Agent [status]
Intermediary Agent --(pacs.008)--> Creditor Agent
Creditor Agent --(pacs.002)--> Intermediary Agent [status]
Creditor Agent --> Creditor [credit notification]
```

### 备付方式流

```text
Debtor Agent --(pacs.008)--> Creditor Agent [direct, with customer data]
Debtor Agent --(pacs.009)--> Cover Bank --(pacs.009)--> Creditor Agent [funding leg]
```

## pacs.008 的 XML 结构

pacs.008 包含两个主要构建块：Group Header（GrpHdr）和贷记转账交易信息（CdtTrfTxInf）。

### Group Header（GrpHdr）

Group Header 在每条报文中恰好出现一次，包含：

- **MsgId** — 由发送代理分配的唯一报文标识。最大 35 个字符，每个发送方必须唯一。
- **CreDtTm** — ISO 8601 格式的创建时间戳。
- **NbOfTxs** — 报文中包含的单笔交易数量。
- **SttlmInf** — 结算信息，包括结算方式（SttlmMtd）以及可选的清算系统和结算账户。
- **IntrBkSttlmDt** — 银行间结算日期。
- **PmtTpInf** — 支付类型信息，包括优先级、服务级别、本地工具和类别目的。

### 贷记转账交易信息（CdtTrfTxInf）

每笔交易包含：

- **PmtId** — 支付标识：InstrId、EndToEndId、TxId 和 UETR。
- **IntrBkSttlmAmt** — 带币种代码的银行间结算金额。
- **InstdAmt** — 原始指令金额（可能因外汇而与结算金额不同）。
- **ChrgBr** — 费用承担代码（DEBT、CRED、SHAR 或 SLEV）。
- **Dbtr / DbtrAcct / DbtrAgt** — 付款方姓名、地址、标识、账户和代理。
- **Cdtr / CdtrAcct / CdtrAgt** — 收款方姓名、地址、标识、账户和代理。
- **IntrmyAgt1 / 2 / 3** — 链条中最多三个中间代理。
- **RmtInf** — 汇款信息，非结构化（自由文本）或结构化（单据参考、金额、日期）。
- **Purp** — 结构化目的代码。
- **RgltryRptg** — 监管报告详情。

## 支付标识

pacs 报文使用多个标识，在支付链中承担不同角色。

<div class="api-fields-table" tabindex="0" aria-label="支付标识">
  <table>
    <caption>支付标识及其角色</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">标识</th>
        <th scope="col">设定方</th>
        <th scope="col">在链条中是否变化？</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field"><strong>MsgId</strong></td><td class="api-fields-table__desc">每个发送代理</td><td class="api-fields-table__constraint">是 — 每条报文重新生成</td></tr>
        <tr><td class="api-fields-table__field"><strong>InstrId</strong></td><td class="api-fields-table__desc">每个指令代理</td><td class="api-fields-table__constraint">是 — 每一跳可能更新</td></tr>
        <tr><td class="api-fields-table__field"><strong>EndToEndId</strong></td><td class="api-fields-table__desc">发起方（付款方）</td><td class="api-fields-table__constraint">否 — 不得修改</td></tr>
        <tr><td class="api-fields-table__field"><strong>TxId</strong></td><td class="api-fields-table__desc">第一个指令代理</td><td class="api-fields-table__constraint">否 — 不得修改</td></tr>
        <tr><td class="api-fields-table__field"><strong>UETR</strong></td><td class="api-fields-table__desc">付款方代理</td><td class="api-fields-table__constraint">否 — 全程追踪</td></tr>
    </tbody>
  </table>
</div>

## 结算方式

SttlmMtd 元素定义银行间结算如何进行。

- **CLRG** — 通过清算系统结算，如 TARGET2、EURO1 或 CHIPS。境内和区域清算最为常见。
- **INDA** — 在被指令代理的账簿上结算。付款方代理在下一个代理处持有 nostro 账户。双边代理行典型方式。
- **INGA** — 在指令代理的账簿上结算。被指令代理在发送代理处持有 nostro 账户。不如 INDA 常见。
- **COVE** — 通过独立的备付款结算。pacs.009 承载融资环节，pacs.008 直接承载客户数据。用于跨境代理行业务。

## 费用承担代码

ChrgBr 元素指定谁承担支付费用。

- **DEBT** — 付款方承担所有费用（MT103 等同：OUR）。收款方收到全额。
- **CRED** — 收款方承担所有费用（MT103 等同：BEN）。费用从转账金额中扣除。
- **SHAR** — 费用共担（MT103 等同：SHA）。各方支付各自代理的费用。跨境支付最为常见。
- **SLEV** — 费用遵循服务级别。SEPA 强制要求。不从转账金额中扣除。

## MT103 到 pacs.008 字段映射

<div class="api-fields-table" tabindex="0" aria-label="MT103 到 pacs.008 字段映射">
  <table>
    <caption>MT103 到 pacs.008 的主要字段映射</caption>
    <colgroup>
      <col class="api-fields-table__col-field">
      <col class="api-fields-table__col-desc">
      <col class="api-fields-table__col-constraint">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">MT103 字段</th>
        <th scope="col">MT103 名称</th>
        <th scope="col">pacs.008 XML 路径</th>
      </tr>
    </thead>
    <tbody>
        <tr><td class="api-fields-table__field">20</td><td class="api-fields-table__desc">发送方参考</td><td class="api-fields-table__constraint">GrpHdr/MsgId or PmtId/InstrId</td></tr>
        <tr><td class="api-fields-table__field">23B</td><td class="api-fields-table__desc">银行操作代码</td><td class="api-fields-table__constraint">PmtTpInf/SvcLvl</td></tr>
        <tr><td class="api-fields-table__field">32A</td><td class="api-fields-table__desc">起息日/金额</td><td class="api-fields-table__constraint">IntrBkSttlmDt + IntrBkSttlmAmt</td></tr>
        <tr><td class="api-fields-table__field">33B</td><td class="api-fields-table__desc">指令金额</td><td class="api-fields-table__constraint">InstdAmt</td></tr>
        <tr><td class="api-fields-table__field">50a</td><td class="api-fields-table__desc">汇款人</td><td class="api-fields-table__constraint">Dbtr + DbtrAcct</td></tr>
        <tr><td class="api-fields-table__field">52a</td><td class="api-fields-table__desc">汇款行</td><td class="api-fields-table__constraint">DbtrAgt</td></tr>
        <tr><td class="api-fields-table__field">57a</td><td class="api-fields-table__desc">账户行</td><td class="api-fields-table__constraint">CdtrAgt</td></tr>
        <tr><td class="api-fields-table__field">59a</td><td class="api-fields-table__desc">收款人</td><td class="api-fields-table__constraint">Cdtr + CdtrAcct</td></tr>
        <tr><td class="api-fields-table__field">70</td><td class="api-fields-table__desc">汇款信息</td><td class="api-fields-table__constraint">RmtInf/Ustrd or RmtInf/Strd</td></tr>
        <tr><td class="api-fields-table__field">71A</td><td class="api-fields-table__desc">费用明细</td><td class="api-fields-table__constraint">ChrgBr (BEN→CRED, OUR→DEBT, SHA→SHAR)</td></tr>
        <tr><td class="api-fields-table__field">72</td><td class="api-fields-table__desc">发送方至接收方信息</td><td class="api-fields-table__constraint">InstrForCdtrAgt / InstrForNxtAgt</td></tr>
        <tr><td class="api-fields-table__field">N/A</td><td class="api-fields-table__desc">UETR (Block 3, field 121)</td><td class="api-fields-table__constraint">PmtId/UETR</td></tr>
    </tbody>
  </table>
</div>

## 状态码和原因代码

### pacs.002 状态码

<div class="api-fields-table" tabindex="0" aria-label="pacs.002 状态码">
  <table>
    <caption>pacs.002 中的交易状态码</caption>
    <colgroup><col class="api-fields-table__col-field"><col class="api-fields-table__col-desc"></colgroup>
    <thead><tr><th scope="col">代码</th><th scope="col">含义</th></tr></thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>ACCP</code></td><td class="api-fields-table__desc">已接受 — 前置检查通过</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSP</code></td><td class="api-fields-table__desc">已接受 — 结算进行中</td></tr>
        <tr><td class="api-fields-table__field"><code>ACSC</code></td><td class="api-fields-table__desc">已接受 — 结算完成</td></tr>
        <tr><td class="api-fields-table__field"><code>RCVD</code></td><td class="api-fields-table__desc">已接收 — 尚未处理</td></tr>
        <tr><td class="api-fields-table__field"><code>PDNG</code></td><td class="api-fields-table__desc">待处理 — 需进一步处理</td></tr>
        <tr><td class="api-fields-table__field"><code>RJCT</code></td><td class="api-fields-table__desc">已拒绝 — 附原因代码</td></tr>
    </tbody>
  </table>
</div>

### 常见拒绝和退回原因代码

<div class="api-fields-table" tabindex="0" aria-label="常见原因代码">
  <table>
    <caption>常用拒绝和退回原因代码</caption>
    <colgroup><col class="api-fields-table__col-field"><col class="api-fields-table__col-desc"><col class="api-fields-table__col-constraint"></colgroup>
    <thead><tr><th scope="col">代码</th><th scope="col">名称</th><th scope="col">说明</th></tr></thead>
    <tbody>
        <tr><td class="api-fields-table__field"><code>AC01</code></td><td class="api-fields-table__desc">账号错误</td><td class="api-fields-table__constraint">账号无效或不存在</td></tr>
        <tr><td class="api-fields-table__field"><code>AC04</code></td><td class="api-fields-table__desc">账户已关闭</td><td class="api-fields-table__constraint">账户已关闭</td></tr>
        <tr><td class="api-fields-table__field"><code>AC06</code></td><td class="api-fields-table__desc">账户已冻结</td><td class="api-fields-table__constraint">账户已冻结，无法交易</td></tr>
        <tr><td class="api-fields-table__field"><code>AM04</code></td><td class="api-fields-table__desc">余额不足</td><td class="api-fields-table__constraint">付款方账户余额不足</td></tr>
        <tr><td class="api-fields-table__field"><code>AM05</code></td><td class="api-fields-table__desc">重复</td><td class="api-fields-table__constraint">检测到重复支付</td></tr>
        <tr><td class="api-fields-table__field"><code>BE04</code></td><td class="api-fields-table__desc">收款方地址缺失</td><td class="api-fields-table__constraint">收款方地址缺失或不完整</td></tr>
        <tr><td class="api-fields-table__field"><code>CUST</code></td><td class="api-fields-table__desc">客户要求</td><td class="api-fields-table__constraint">客户要求退回或拒绝</td></tr>
        <tr><td class="api-fields-table__field"><code>DUPL</code></td><td class="api-fields-table__desc">重复支付</td><td class="api-fields-table__constraint">发现重复支付</td></tr>
        <tr><td class="api-fields-table__field"><code>FOCR</code></td><td class="api-fields-table__desc">根据撤销请求</td><td class="api-fields-table__constraint">根据撤销请求</td></tr>
        <tr><td class="api-fields-table__field"><code>FR01</code></td><td class="api-fields-table__desc">欺诈</td><td class="api-fields-table__constraint">疑似欺诈</td></tr>
        <tr><td class="api-fields-table__field"><code>RC01</code></td><td class="api-fields-table__desc">BIC 错误</td><td class="api-fields-table__constraint">BIC 不正确或未知</td></tr>
        <tr><td class="api-fields-table__field"><code>RR03</code></td><td class="api-fields-table__desc">收款方姓名/地址缺失</td><td class="api-fields-table__constraint">收款方姓名或地址数据缺失</td></tr>
        <tr><td class="api-fields-table__field"><code>TM01</code></td><td class="api-fields-table__desc">截止时间</td><td class="api-fields-table__constraint">已超过截止时间</td></tr>
    </tbody>
  </table>
</div>

## 邮政地址格式

### 结构化地址

```xml
<PstlAdr>
  <StrtNm>High Street</StrtNm>
  <BldgNb>42</BldgNb>
  <PstCd>EC2V 8BX</PstCd>
  <TwnNm>London</TwnNm>
  <Ctry>GB</Ctry>
</PstlAdr>
```

### 非结构化地址（2026 年 11 月后 CBPR+ 不再接受）

```xml
<PstlAdr>
  <AdrLine>42 High Street</AdrLine>
  <AdrLine>London EC2V 8BX</AdrLine>
  <Ctry>GB</Ctry>
</PstlAdr>
```

关键约束：StrtNm 最大 70 个字符（CBPR+），TwnNm 最大 35 个字符（CBPR+），Ctry 为 ISO 3166-1 alpha-2，AdrLine 每行最大 70 个字符且最多 7 行。

## 参与方标识

pacs.008 中的参与方支持多种标识方式：

- **BIC** — 依据 ISO 9362 的业务标识代码。8 或 11 个字符（BBBBCCLL 或 BBBBCCLLBBB）。用于代理的 FinInstnId/BICFI 和参与方的 OrgId/AnyBIC。
- **LEI** — 依据 ISO 17442 的法人实体标识。20 位字母数字字符。出现在参与方的 OrgId/LEI 和代理的 FinInstnId/LEI 中。
- **IBAN** — 依据 ISO 13616 的国际银行账号。用于 DbtrAcct/Id/IBAN 和 CdtrAcct/Id/IBAN。
- **组织标识** — 其他基于方案的标识（税号、DUNS、客户号），通过 OrgId/Othr 附带方案名称代码。
- **个人标识** — 用于自然人：出生日期和地点、护照（CCPT）、身份证（NIDN）或驾照（DRLC），通过 PrvtId。

## 汇款信息

pacs.008 中的汇款数据使用 RmtInf 元素，有两种形式：

**非结构化** — 每次最多 140 个字符的自由文本。简单但限制自动对账。

**结构化** — 带有类型代码、编号、日期和金额的单据参考。常见单据类型：CINV（商业发票）、CREN（贷记通知单）、SOAC（对账单）。通过 CdtrRefInf 支持 ISO 11649 收款方参考（RF + 校验位 + 参考号）。实现自动发票匹配和多发票支付。

## UETR 和 gpi 追踪

UETR（Unique End-to-End Transaction Reference）是由付款方代理生成的 UUID v4。它出现在 pacs.008、pacs.009、pacs.002、pacs.004、pacs.007 和 pacs.028 的 PmtId/UETR 中。在整个支付链中必须保持不变。

SWIFT gpi 利用 UETR 通过云端 Tracker 数据库追踪支付。每个代理确认接收和处理状态，实现端到端可视化。gpi 跨境支付的 SLA 目标是当天将资金入账至收款人账户。

## 参考资料

- [ISO 20022 报文定义目录](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 外部代码集](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 使用指南](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ 迁移路线图 PDF](https://www.swift.com/swift-resource/252463/download)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
- [EPC SEPA 贷记转账规则手册](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)

