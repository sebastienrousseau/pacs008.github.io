---
title: "常见问题 | pacs008"
description: 关于ISO 20022 pacs消息、CBPR+迁移、消息选择、实施和pacs008工具包的常见问题。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# 常见问题

本页面解答关于ISO 20022 pacs消息、它们如何协同工作以及pacs008如何帮助团队实施它们的常见问题。

## 一般问题

### 什么是ISO 20022？

ISO 20022是金融消息传递的国际标准。它定义了金融机构之间交换支付消息的通用语言和模型。与SWIFT MT等旧格式不同，ISO 20022使用XML，支持当事方、金额和参考信息的更丰富、更结构化的数据。

### 什么是pacs消息？

pacs（payments clearing and settlement，支付清算与结算）消息家族涵盖银行间支付指令、状态报告、退回、撤销和查询。包括pacs.002、pacs.003、pacs.004、pacs.007、pacs.008、pacs.009、pacs.010和pacs.028。每种消息在支付生命周期中扮演特定角色。

### pacs消息与SWIFT MT消息有何不同？

SWIFT MT消息使用扁平的字段标签格式（如MT103用于客户汇款）。Pacs消息使用具有更丰富数据结构的分层XML。主要区别包括支持每条消息包含多笔交易、结构化的当事方识别（LEI、多个ID）、结构化的邮政地址和结构化的汇款信息。MT103对应pacs.008，MT202对应pacs.009，MT199状态文本被pacs.002取代。

### pain消息和pacs消息之间的关系是什么？

pain（payment initiation，支付发起）消息在客户与其银行之间传输。pacs消息在银行之间传输。来自付款人银行的pain.001客户贷记转账发起变为pacs.008银行间指令。两个领域共享公共数据元素，但服务于支付链的不同部分。

## 消息选择

### 何时应使用pacs.008？

银行间的客户贷记转账指令应使用pacs.008。它承载付款人和收款人的当事方数据、金额、汇款信息和结算详情。它是通过银行间网络发送客户付款的主要消息，无论是国内（SEPA）还是跨境（CBPR+）。

### 何时应使用pacs.009而非pacs.008？

机构自有账户转账、融资环节和备付支付应使用pacs.009。与代表付款人承载客户付款的pacs.008不同，pacs.009以银行自己的名义在银行间转移资金。在备付方式流程中，pacs.009承载融资，而pacs.008在单独的路径上承载客户指令。

### pacs.004和pacs.007之间的区别是什么？

pacs.004从收款方通过链条退回已结算资金。pacs.007从原始指令方向前通过链条撤销付款。当受益银行在结算后无法贷记时使用pacs.004。当发起方发现错误、重复或欺诈时使用pacs.007。

### 何时应使用pacs.028而非等待pacs.002？

当需要主动请求未及时收到pacs.002更新的付款状态时使用pacs.028。pacs.002是事件驱动的（接收代理主动发送），而pacs.028是异常驱动的（指令代理请求）。pacs.028用于延迟、不明确或缺失的付款更新，不作为常规流量使用。

### pacs.003用于什么？

pacs.003承载银行间的客户直接借记指令。收款方代理向付款方代理发送以收取资金。它需要有效的委托参考，并支持SEPA Core和B2B直接借记方案。不用于贷记转账或机构自有账户借记。

### pacs.010用于什么？

pacs.010处理金融机构之间在自有账户上的直接借记。用于银行间收款，如费用、追加保证金和双边协议下的类似义务。不用于客户直接借记或贷记转账。

## 消息结构

### 什么是Group Header（GrpHdr）？

Group Header在每条pacs消息中恰好出现一次。包含消息标识符（MsgId）、创建时间戳（CreDtTm）、交易数量（NbOfTxs）、结算信息（SttlmInf），以及可选的银行间结算总金额和支付类型信息。它标识消息信封，而非单个业务交易。

### pacs.008中的支付标识符有哪些？

pacs.008使用四个主要标识符。MsgId标识消息信封，在每个跳转处更改。InstrId是相邻代理之间的点对点参考，每个跳转可能更改。EndToEndId由发起人设置，链中的任何代理都不得更改。TxId由第一个指令代理分配，在银行间空间中保持不变。UETR是在所有环节中保持不变的UUID，用于端到端跟踪。

### 有哪些结算方法？

定义了四种结算方法。CLRG通过TARGET2、EURO1或CHIPS等清算系统结算。INDA在被指令代理的账簿上结算，付款方代理在该处持有账户。INGA在指令代理的账簿上结算，被指令代理在该处持有账户。COVE通过pacs.009承载的单独备付支付结算。

### 费用承担代码是什么意思？

DEBT表示所有费用由付款人承担（相当于MT103 OUR）。CRED表示所有费用由收款人承担（相当于BEN）。SHAR表示费用由付款人和收款人的代理之间分担（相当于SHA）。SLEV表示费用遵循服务级别规则，SEPA贷记转账中为必填。

## CBPR+和迁移

### 什么是CBPR+？

CBPR+（Cross-Border Payments and Reporting Plus）是SWIFT在跨境支付消息传递中采用ISO 20022的项目。2023年3月上线，用pacs等价物替代MT消息。CBPR+要求所有状态通信使用pacs.002，支持更丰富的当事方数据和结构化地址，并通过gpi使用基于UETR的跟踪。

### MT/MX共存期发生了什么？

跨境支付指令的共存期于2025年11月结束。此后，CBPR+消息必须使用ISO 20022（MX）格式。过渡期间在MT和MX之间转换的翻译服务不再适用于新流程。银行现在必须发送和接收原生pacs消息。

### 2026年11月的结构化地址截止日期是什么？

从2026年11月起，SWIFT CBPR+要求跨境支付消息中使用结构化邮政地址。非结构化地址行（仅AdrLine）将不再被关键当事方字段接受。至少需要TwnNm和Ctry，建议使用StrtNm和BldgNb或PstBx。这改善了制裁筛查并减少了手动修复。

### pacs.008如何取代MT103？

pacs.008取代MT103和MT103+用于客户贷记转账。主要映射：MT103字段20对应MsgId或InstrId；字段32A拆分为IntrBkSttlmDt和IntrBkSttlmAmt；字段50a对应Dbtr和DbtrAcct；字段59a对应Cdtr和CdtrAcct；字段70对应RmtInf；字段71A对应ChrgBr。pacs.008增加了UETR、结构化汇款、LEI识别，并支持每条消息包含多笔交易。

### pacs.009如何取代MT202？

pacs.009取代MT202和MT202COV用于机构间转账。在备付方式流程中，MT202COV（同时承载融资和底层客户数据）被清晰拆分：pacs.009承载融资环节，而pacs.008直接承载客户指令。这种分离提高了数据质量并减少了对账问题。

## 技术细节

### 结构化地址与非结构化地址是什么？

结构化地址为每个组成部分使用单独的XML元素：StrtNm（街道）、BldgNb（门牌号）、PstCd（邮编）、TwnNm（城镇）、Ctry（国家）以及Flr、Room和DstrctNm等可选元素。非结构化地址使用最多七个AdrLine元素和自由文本。混合地址在过渡期间结合两者。2026年11月后，CBPR+要求结构化格式。

### 什么是UETR，gpi跟踪如何工作？

UETR（Unique End-to-End Transaction Reference，唯一端到端交易参考）是由付款方代理生成的UUID v4标识符，在支付的所有环节中保持不变。出现在pacs.008、pacs.009、pacs.002、pacs.004、pacs.007和pacs.028中。SWIFT gpi使用UETR通过基于云的Tracker数据库跟踪支付。每个代理确认接收和处理，实现端到端的可见性和SLA监控。

### pacs.002的常见状态代码有哪些？

ACCP表示客户资料检查后已接受。ACSP表示已接受且结算正在进行中。ACSC表示付款人账户上的结算已完成。RJCT表示已拒绝（在StsRsnInf中包含原因代码）。PDNG表示等待进一步处理。RCVD表示已接收但尚未处理。每个状态可能包含结构化原因代码，如AC01（账户不正确）、AM04（资金不足）或RC01（BIC不正确）。

### pacs.004中的常见退回原因代码有哪些？

常见退回原因代码包括AC01（账号不正确）、AC04（已关闭账户）、AC06（冻结账户）、AM04（资金不足）、BE04（收款人地址缺失）、CUST（客户要求）、DUPL（重复付款）、FOCR（取消请求后续）和FR01（欺诈）。完整列表在ISO 20022外部代码集中定义。

### 什么是结构化汇款信息？

pacs.008中的结构化汇款使用RmtInf/Strd元素承载文档参考（发票号、贷项通知单）、金额（到期、已汇、税款、折扣）和收款人参考（ISO 11649 RF参考）。这实现了自动化发票匹配和对账。常见的文档类型代码包括CINV（商业发票）、CREN（贷项通知单）和SOAC（账户对账单）。

### 什么是LEI，何时使用？

LEI（Legal Entity Identifier，法律实体标识符）是根据ISO 17442的20个字符的字母数字代码。它唯一标识参与金融交易的法律实体。在pacs消息中，LEI出现在当事方的OrgId/LEI和代理的FinInstnId/LEI中。CBPR+越来越鼓励使用LEI进行当事方和代理识别。它改善了实体消歧并支持监管报告要求。

## 关于pacs008工具包

### pacs008做什么？

pacs008是一个Python工具包，用于生成、验证和发送ISO 20022支付消息。它从CSV、JSON、JSONL、SQLite和Parquet数据源读取支付数据，根据JSON Schema和XSD进行验证，检查IBAN和BIC标识符，清理数据以符合SWIFT字符合规性，并输出XML文件。它提供REST API、CLI和Python库。

### pacs008支持哪些消息类型？

pacs008支持八种消息类型：pacs.002.001.12（状态报告）、pacs.003.001.09（客户直接借记）、pacs.004.001.11（支付退回）、pacs.007.001.11（支付撤销）、pacs.008.001.13（客户贷记转账）、pacs.009.001.10（金融机构贷记转账）、pacs.010.001.05（金融机构直接借记）和pacs.028.001.05（支付状态请求）。

### pacs008如何帮助应对2026年结构化地址截止日期？

pacs008在XML生成前验证结构化和混合邮政地址字段。它标记在2026年11月截止日期后会失败的非结构化地址数据，支持截止日期前的混合格式和截止日期后的仅结构化格式，并将地址质量检查集成到CI管道和批量验证工作流中。

### pacs008能否在不生成XML的情况下验证数据？

可以。使用`--dry-run` CLI标志或`POST /validate` API端点来验证支付数据而不生成XML。验证管道检查JSON Schema一致性、IBAN格式和校验和、BIC结构以及SWIFT字符合规性。退出代码或API响应指示验证是否通过。

## 参考资料

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)
