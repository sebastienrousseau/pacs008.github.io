---
title: "ISO 20022 常见问题 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: zh-CN
lastUpdated: true
image: /logo.webp
---

# ISO 20022 常见问题

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## 概述

### 什么是 ISO 20022？

ISO 20022 是金融报文的国际标准。它为金融机构之间交换的支付报文定义了通用语言和模型。与 SWIFT MT 等旧格式不同，ISO 20022 采用 XML，支持更丰富、更结构化的参与方、金额和参考信息数据。

### 什么是 pacs 报文？

pacs（payments clearing and settlement）报文系列涵盖银行间支付指令、状态报告、退回、撤销和查询。包括：

- pacs.002 — 状态报告
- pacs.003 — 客户直接借记
- pacs.004 — 支付退回
- pacs.007 — 支付撤销
- pacs.008 — 客户贷记转账
- pacs.009 — 金融机构间贷记转账
- pacs.010 — 金融机构间直接借记
- pacs.028 — 支付状态请求

每种报文在支付生命周期中承担特定角色。

### pacs 报文与 SWIFT MT 报文有什么区别？

SWIFT MT 报文采用平面字段标签格式（例如 MT103 用于客户贷记转账）。pacs 报文采用分层 XML，具有更丰富的数据结构。主要区别包括：

- 支持单条报文包含多笔交易
- 结构化的参与方标识（LEI、多重标识）
- 结构化邮政地址
- 结构化汇款信息

对应关系：MT103 对应 pacs.008，MT202 对应 pacs.009，MT199 状态文本由 pacs.002 取代。

### pain 报文与 pacs 报文之间的关系是什么？

pain（payment initiation）报文在客户与其银行之间传输。pacs 报文在银行之间传输。来自付款人银行的 pain.001 客户贷记转账发起指令会转化为 pacs.008 银行间指令。两个域共享通用数据元素，但服务于支付链的不同环节。

## 报文选择

### 什么时候应使用 pacs.008？

pacs.008 用于银行间客户贷记转账指令。它承载付款方和收款方数据、金额和货币、汇款信息以及结算详情。它是在银行间网络上发送客户支付的主要报文，无论是境内（SEPA）还是跨境（CBPR+）。

### 什么时候应使用 pacs.009 而不是 pacs.008？

pacs.009 用于机构自有账户转账、融资环节和备付款。与 pacs.008 代表付款方承载客户支付不同，pacs.009 是银行为自身账户之间转移资金。在备付方式流程中，pacs.009 承载融资环节，而 pacs.008 通过独立路径承载客户指令。

### pacs.004 和 pacs.007 有什么区别？

pacs.004 将已结算的资金从接收方沿支付链返回。pacs.007 从原始发起方沿支付链正向撤销支付。当收款行在结算后无法将资金入账给收款人时使用 pacs.004。当发起方发现错误、重复或欺诈时使用 pacs.007。

### 什么时候应使用 pacs.028 而不是等待 pacs.002？

当支付未能及时收到 pacs.002 状态更新时，使用 pacs.028 主动请求支付状态。pacs.002 是事件驱动的（接收方代理主动发送），而 pacs.028 是异常驱动的（指令发起方请求查询）。pacs.028 用于延迟、不明或缺失的支付状态更新，而非常规通信。

### pacs.003 用于什么场景？

pacs.003 承载银行间客户直接借记指令。收款方代理将其发送给付款方代理以收取资金。它必须包含有效的授权委托参考，支持 SEPA Core 和 B2B 直接借记方案。不用于贷记转账或机构间自有账户直接借记。

### pacs.010 用于什么场景？

pacs.010 处理金融机构之间在各自账户上的直接借记。用于银行间费用收取、保证金追缴以及双边协议下的类似义务。不用于客户直接借记或贷记转账。

## 报文结构

### 什么是 Group Header（GrpHdr）？

Group Header 在每条 pacs 报文中恰好出现一次。它包含报文标识（MsgId）、创建时间戳（CreDtTm）、交易笔数（NbOfTxs）、结算信息（SttlmInf），以及可选的银行间结算总金额和支付类型信息。它标识报文信封，而不是单笔业务交易。

### pacs.008 中有哪些支付标识？

pacs.008 使用五个标识。MsgId 标识报文信封，在每一跳更新。InstrId 是相邻代理间的点对点参考，每一跳可能更新。EndToEndId 由发起方设定，链条中任何代理均不得修改。TxId 由第一个指令代理分配，在银行间空间保持不变。UETR 是 UUID，在所有环节中保持不变，用于端到端追踪。

### 有哪些结算方式？

定义了四种结算方式。CLRG 通过清算系统结算（如 TARGET2、EURO1、CHIPS）。INDA 在被指令代理的账簿上结算，付款方代理在该代理处持有账户。INGA 在指令代理的账簿上结算，被指令代理在该代理处持有账户。COVE 通过由 pacs.009 承载的独立备付款进行结算。

### 费用承担代码的含义是什么？

DEBT 意为所有费用由付款方承担（等同 MT103 OUR）。CRED 意为所有费用由收款方承担（等同 BEN）。SHAR 意为费用在付款方和收款方代理间分摊（等同 SHA）。SLEV 意为费用遵循服务级别规则，SEPA 贷记转账强制使用。

## CBPR+ 与迁移

### 什么是 CBPR+？

CBPR+（Cross-Border Payments and Reporting Plus）是 SWIFT 在跨境支付报文中采用 ISO 20022 的计划。它于 2023 年 3 月上线，用 pacs 报文替代 MT 报文。CBPR+ 强制要求所有状态通信使用 pacs.002，支持更丰富的参与方数据和结构化地址，并通过 gpi 使用基于 UETR 的追踪。

### MT/MX 共存期发生了什么？

跨境支付指令的共存期已于 2025 年 11 月结束。此后，CBPR+ 报文必须使用 ISO 20022（MX）格式。过渡期间的 MT/MX 转换服务不再适用于新业务流。银行必须原生发送和接收 pacs 报文。

### 2026 年 11 月结构化地址截止日期是什么？

自 2026 年 11 月起，SWIFT CBPR+ 要求跨境支付报文中使用结构化邮政地址。非结构化地址行（仅 AdrLine）将不再被关键参与方字段接受。最低要求 TwnNm 和 Ctry 为必填项，推荐填写 StrtNm 和 BldgNb 或 PstBx。这将改善制裁筛查并减少人工修补。

### pacs.008 如何替代 MT103？

pacs.008 替代 MT103 和 MT103+，用于客户贷记转账。主要映射：MT103 字段 20 对应 MsgId 或 InstrId；字段 32A 拆分为 IntrBkSttlmDt 和 IntrBkSttlmAmt；字段 50a 对应 Dbtr 和 DbtrAcct；字段 59a 对应 Cdtr 和 CdtrAcct；字段 70 对应 RmtInf；字段 71A 对应 ChrgBr。pacs.008 新增了 UETR、结构化汇款信息、LEI 标识，并支持单条报文包含多笔交易。

### pacs.009 如何替代 MT202？

pacs.009 替代 MT202 和 MT202COV，用于机构间转账。在备付方式流程中，MT202COV（同时承载融资和底层客户数据）被明确拆分：pacs.009 承载融资环节，pacs.008 直接承载客户指令。这种拆分提高了数据质量并减少了对账问题。

## 技术细节

### 什么是结构化地址和非结构化地址？

结构化地址为每个组成部分使用独立的 XML 元素：StrtNm（街道）、BldgNb（门牌号）、PstCd（邮政编码）、TwnNm（城市）、Ctry（国家），以及 Flr、Room、DstrctNm 等可选元素。非结构化地址使用最多七个 AdrLine 元素的自由文本。混合地址在过渡期内同时使用两者。2026 年 11 月之后，CBPR+ 要求使用结构化格式。

### 什么是 UETR？gpi 追踪如何工作？

UETR（Unique End-to-End Transaction Reference）是由付款方代理生成的 UUID v4 标识符，在支付的所有环节中保持不变。它出现在 pacs.008、pacs.009、pacs.002、pacs.004、pacs.007 和 pacs.028 中。SWIFT gpi 利用 UETR 通过云端 Tracker 数据库追踪支付。每个代理确认接收和处理状态，实现端到端可视化和 SLA 监控。

### 常见的 pacs.002 状态码有哪些？

ACCP 意为通过客户档案检查后已接受。ACSP 意为已接受且结算进行中。ACSC 意为付款方账户结算已完成。RJCT 意为已拒绝（附 StsRsnInf 中的原因代码）。PDNG 意为等待进一步处理。RCVD 意为已接收但尚未处理。每个状态可附带结构化原因代码，如 AC01（账号错误）、AM04（余额不足）或 RC01（BIC 错误）。

### pacs.004 中常见的退回原因代码有哪些？

常见退回原因代码包括 AC01（账号错误）、AC04（账户已关闭）、AC06（账户已冻结）、AM04（余额不足）、BE04（收款方地址缺失）、CUST（客户要求）、DUPL（重复支付）、FOCR（根据撤销请求）和 FR01（欺诈）。完整列表在 ISO 20022 External Code Sets 中定义。

### 什么是结构化汇款信息？

pacs.008 中的结构化汇款信息使用 RmtInf/Strd 元素承载单据参考（发票号、贷记通知单）、金额（应付、已付、税额、折扣）以及收款方参考（ISO 11649 RF 参考号）。这实现了自动化发票匹配和对账。常用单据类型代码包括 CINV（商业发票）、CREN（贷记通知单）和 SOAC（对账单）。

### 什么是 LEI？何时使用？

LEI（Legal Entity Identifier）是依据 ISO 17442 制定的 20 位字母数字代码。它唯一标识参与金融交易的法人实体。在 pacs 报文中，LEI 出现在参与方的 OrgId/LEI 和代理的 FinInstnId/LEI 中。CBPR+ 日益鼓励使用 LEI 进行参与方和代理标识。LEI 改善了实体消歧并满足监管报告要求。

## 关于 pacs008 工具包

### pacs008 做什么？

pacs008 是一个 Python 工具包，用于生成、验证和发送 ISO 20022 支付报文。它从 CSV、JSON、JSONL、SQLite 和 Parquet 数据源读取支付数据，根据 JSON Schema 和 XSD 进行验证，检查 IBAN 和 BIC 标识符，清理数据以符合 SWIFT 字符规范，并输出 XML 文件。提供 REST API、CLI 和 Python 库三种接口。

### pacs008 支持哪些报文类型？

pacs008 支持八种报文类型：pacs.002.001.12（状态报告）、pacs.003.001.09（客户直接借记）、pacs.004.001.11（支付退回）、pacs.007.001.11（支付撤销）、pacs.008.001.13（客户贷记转账）、pacs.009.001.10（金融机构贷记转账）、pacs.010.001.05（金融机构直接借记）和 pacs.028.001.05（支付状态请求）。

### pacs008 如何应对 2026 年结构化地址截止日期？

pacs008 在生成 XML 前验证结构化和混合邮政地址字段。它标记在 2026 年 11 月截止日期后将失败的非结构化地址数据，支持截止日期前的混合格式和截止日期后的纯结构化格式，并将地址质量检查集成到 CI 流水线和批量验证工作流中。

### pacs008 能否在不生成 XML 的情况下验证数据？

可以。使用 CLI 参数 `--dry-run` 或 API 端点 `POST /validate` 即可在不生成 XML 的前提下验证支付数据。验证流水线检查 JSON Schema 合规性、IBAN 格式和校验和、BIC 结构以及 SWIFT 字符合规性。退出代码或 API 响应指示验证是通过还是失败。

## 参考资料

- [ISO 20022 报文定义目录](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 外部代码集](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 使用指南](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ 迁移路线图](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA 贷记转账规则手册](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA 即时贷记转账规则手册](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

