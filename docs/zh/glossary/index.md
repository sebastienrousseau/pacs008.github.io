---
title: "ISO 20022 术语表 | pacs008"
description: pacs.008及相关消息中使用的关键ISO 20022和支付消息术语的定义。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# ISO 20022 术语表

本术语表定义了ISO 20022 pacs消息和本站中使用的关键术语、缩写和技术概念。

## A

**ACH** — 自动清算所（Automated Clearing House）。处理金融机构间批量电子支付的网络。

**AdrLine** — 地址行（Address Line）。ISO 20022邮政地址结构中的自由文本地址字段。每行最多70个字符，最多7行。将于2026年11月前被CBPR+的结构化地址元素取代。

**ACCP** — 客户资料已接受（Accepted Customer Profile）。pacs.002状态代码，表示先前的检查（语法、客户资料）已通过。

**ACSC** — 结算完成已接受（Accepted Settlement Completed）。pacs.002状态代码，确认付款人账户上的结算已完成。

**ACSP** — 结算处理中已接受（Accepted Settlement in Process）。pacs.002状态代码，表示所有检查均已通过，结算正在进行中。

## B

**BAH** — 业务应用头（Business Application Header，head.001）。通过SWIFT传输ISO 20022业务消息的标准化信封。包含路由信息、消息定义标识符和发送方/接收方BIC。

**BIC** — 业务标识代码（Business Identifier Code，ISO 9362）。唯一标识金融机构的8或11位字符代码。格式：BBBBCCLL（银行代码+国家+地区），可选BBB分支代码。

## C

**CBPR+** — 跨境支付与报告增强版（Cross-Border Payments and Reporting Plus）。SWIFT将跨境支付消息从MT迁移到ISO 20022的项目。2023年3月上线。

**CdtTrfTxInf** — 贷记转账交易信息（Credit Transfer Transaction Information）。pacs.008中主要的交易级构建块，包含支付详情、当事方、金额和汇款信息。

**ChrgBr** — 费用承担方（Charge Bearer）。指定谁支付交易费用。值：DEBT（付款人）、CRED（收款人）、SHAR（分担）、SLEV（服务级别，仅SEPA）。

**CLRG** — 清算系统结算。通过TARGET2、EURO1或CHIPS等清算系统转移资金的结算方法。

**COVE** — 备付方式结算。由单独的pacs.009备付支付处理代理行间的资金调拨，而pacs.008直接传输客户数据的结算方法。

**CSM** — 清算和结算机制（Clearing and Settlement Mechanism）。处理和结算参与机构间支付指令的基础设施。

## D

**Dbtr** — 付款人（Debtor）。欠款并发起付款的一方。在pacs.008中，Dbtr元素包含付款人的姓名、邮政地址、身份识别和居住国。

**DbtrAgt** — 付款人代理（Debtor Agent）。管理付款人账户并发送pacs.008指令的金融机构。

## E

**E2E ID** — 端到端标识（End-to-End Identification，EndToEndId）。由发起人分配的参考，必须在支付链中所有代理间保持不变。用于客户级可追溯性。

**EPC** — 欧洲支付委员会（European Payments Council）。管理贷记转账和直接借记的SEPA支付方案规则手册的机构。

## F

**FI** — 金融机构（Financial Institution）。参与支付清算和结算的银行或其他机构。

**FIToFI** — 金融机构对金融机构（Financial Institution to Financial Institution）。描述pacs消息运作的银行间领域。

## G

**gpi** — 全球支付创新（Global Payments Innovation）。SWIFT推动更快、更透明跨境支付的倡议。使用UETR通过基于云的Tracker进行端到端跟踪。

**GrpHdr** — 组头（Group Header）。pacs消息中的消息级元数据块。包含MsgId、CreDtTm、NbOfTxs、结算信息和支付类型信息。

## H

**混合地址** — 将结构化元素（StrtNm、TwnNm、Ctry）与非结构化AdrLine元素相结合的邮政地址格式。在2026年11月结构化地址截止日期前的过渡期内允许使用。

## I

**IBAN** — 国际银行账号（International Bank Account Number，ISO 13616）。用于跨境和国内支付的标准化账号格式。使用ISO 7064 Mod 97-10校验和进行验证。

**INDA** — 被指令代理结算（Instructed Agent settlement）。在被指令代理的账簿上结算资金的方法，付款方代理在该处持有往来账户。

**INGA** — 指令代理结算（Instructing Agent settlement）。在指令代理的账簿上结算资金的方法，被指令代理在该处持有往来账户。

**InstrId** — 指令标识（Instruction Identification）。支付链中相邻代理间的点对点参考。可在每个跳转处更改。

**IntrBkSttlmAmt** — 银行间结算金额（Interbank Settlement Amount）。指令代理与被指令代理之间以结算货币结算的金额。

**ISO 20022** — 金融机构间电子数据交换的国际标准。定义了支付、证券、贸易融资及其他金融领域的通用数据模型和基于XML的消息格式。

## L

**LEI** — 法人实体标识（Legal Entity Identifier，ISO 17442）。唯一标识参与金融交易的法律实体的20位字母数字代码。用于当事方的OrgId/LEI和代理的FinInstnId/LEI。

## M

**MsgId** — 消息标识（Message Identification）。由发送代理分配的消息信封唯一标识符。在支付链的每个跳转处更改。

**MT** — 消息类型（Message Type）。SWIFT的传统消息格式（如客户汇款用MT103，金融机构间转账用MT202）。正被ISO 20022 MX消息取代。

**MX** — SWIFT使用的ISO 20022 XML消息格式。MX消息在CBPR+框架下取代MT消息用于跨境支付。

## N

**NbOfTxs** — 交易数量（Number of Transactions）。组头元素，指示消息中包含的单个交易数量。

## P

**pacs** — 支付清算与结算（Payments Clearing and Settlement）。涵盖银行间支付消息的ISO 20022业务领域。

**pacs.002** — 金融机构间支付状态报告。报告先前支付指令的处理状态（已接受、已拒绝、待处理、已结算）。

**pacs.003** — 金融机构间客户直接借记。在银行间传输客户直接借记指令以收取资金。

**pacs.004** — 支付退回。当支付无法应用时，通过支付链退回已结算资金。

**pacs.007** — 金融机构间支付撤销。从原始发送方向前通过链条撤销支付指令。

**pacs.008** — 金融机构间客户贷记转账。客户贷记转账的主要银行间消息。取代MT103。

**pacs.009** — 金融机构贷记转账。以银行自身名义在银行间转移资金。涵盖资金调拨、备付支付和流动性管理。取代MT202/MT202COV。

**pacs.010** — 金融机构直接借记。允许一家银行在双边协议下从另一家银行的自有账户扣款。

**pacs.028** — 金融机构间支付状态请求。当未收到pacs.002更新时，主动请求先前支付的状态。

**pain** — 支付发起（Payment Initiation）。涵盖客户到银行消息的ISO 20022业务领域（如贷记转账发起用pain.001）。

**PII** — 个人可识别信息（Personally Identifiable Information）。可识别个人身份的数据。pacs008在结构化日志中遮蔽PII。

**PstlAdr** — 邮政地址（Postal Address）。pacs消息中用于当事方的地址结构。支持结构化（StrtNm、TwnNm、Ctry）和非结构化（AdrLine）格式。

## R

**RJCT** — 已拒绝（Rejected）。表示支付已被拒绝的pacs.002状态代码。

**RmtInf** — 汇款信息（Remittance Information）。pacs.008中携带的支付参考数据。支持非结构化（自由文本，最多140字符）和结构化（文档参考、金额、收款人参考）格式。

**RTGS** — 实时全额结算（Real-Time Gross Settlement）。交易逐笔实时结算的支付系统（如TARGET2、Fedwire、CHAPS）。

## S

**SCT** — SEPA贷记转账（SEPA Credit Transfer）。EPC管理的使用pacs.008的欧元贷记转账方案。

**SCT Inst** — SEPA即时贷记转账（SEPA Instant Credit Transfer）。SCT的即时支付变体，10秒内完成结算。

**SDD** — SEPA直接借记（SEPA Direct Debit）。EPC管理的使用pacs.003的欧元直接借记方案。

**SEPA** — 单一欧元支付区（Single Euro Payments Area）。覆盖36个欧洲国家的欧元贷记转账、直接借记和卡支付的支付一体化倡议。

**SLEV** — 服务级别（Service Level）。SEPA必需的费用承担代码。表示费用遵循方案规则，不从转账金额中扣除。

**STP** — 直通处理（Straight-Through Processing）。无需人工干预的自动化端到端支付处理。

**SttlmMtd** — 结算方法（Settlement Method）。定义银行间结算方式：CLRG（清算系统）、INDA（被指令代理）、INGA（指令代理）或COVE（备付支付）。

## T

**TxId** — 交易标识（Transaction Identification）。由第一个指令代理分配的银行间参考。后续代理不得更改。

## U

**UETR** — 唯一端到端交易参考（Unique End-to-End Transaction Reference）。由付款方代理生成的UUID v4标识符，在支付的所有环节中不变地传输，用于gpi跟踪。

## X

**XSD** — XML模式定义（XML Schema Definition）。定义ISO 20022 XML消息的结构、元素和数据类型的正式模式。

**XXE** — XML外部实体（XML External Entity）。XML解析中的安全漏洞。pacs008使用defusedxml防止XXE攻击。

## 参考资料

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
