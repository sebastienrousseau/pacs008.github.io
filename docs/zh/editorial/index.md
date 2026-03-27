---
title: "编辑政策 | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule. 面向金融机构间客户信贷转账工作流的生成、校验、API 编排与合规支持。
lang: zh-CN
lastUpdated: true
image: /logo.webp
---

# 编辑政策

本页说明 pacs008.com 上的内容是如何创建、审查和保持更新的。

## 来源

所有报文文档均基于权威原始资料：

- [ISO 20022 报文定义目录](https://www.iso20022.org/iso-20022-message-definitions)，提供报文规范和版本历史。
- [SWIFT CBPR+ 使用指南](https://www.swift.com/standards/iso-20022)，提供跨境支付背景。
- [EPC SEPA 信贷转账规则手册](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)，提供欧元信贷转账规则。
- [EPC SEPA 即时信贷转账规则手册](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)，提供即时支付规则。

## 内容审查流程

pacs008.com 上的每个页面在发布前都经过结构化审查。新内容首先基于原始资料撰写草稿。草稿会对照 ISO 20022 报文目录和相关方案文档进行技术准确性检查。版本号、注册标识符和字段定义均根据官方目录条目进行核实。

初步审查后，内容会经过结构检查以确保与现有页面的一致性。导航、交叉引用和术语在整个站点中保持标准化。每个报文页面上显示的审查日期反映了最近一次针对原始资料的核实时间。

## 审查流程

每个报文页面都显示审查日期。审查确认版本号、注册状态和方案背景仍然与上述原始资料一致。

当 ISO 20022 发布新的目录版本、SWIFT 发布更新的使用指南或方案规则变更时，内容会相应更新。

## 技术准确性

技术内容遵循官方目录中发布的 ISO 20022 报文定义。字段名称、数据类型和基数规则与每个报文版本的 XSD 模式匹配。当方案特定用法与基础标准不同时，直接引用相关方案文档。

API 文档中的代码示例均针对 pacs008 工具包的当前发行版进行测试。CLI 命令、API 端点和 Python 库方法反映了 PyPI 上已发布的软件包。每次新发布都会更新示例以与工具包保持同步。

## 翻译方法

pacs008.com 提供 22 种语言版本。所有内容均以英语为源语言。翻译页面使用构建脚本从经过审查的英语源材料生成，该脚本在所有区域设置中保留页面结构、标题层级和链接目标。

技术术语、ISO 标识符和标准代码保持不翻译以避免歧义。pacs.008.001.13、BIC、IBAN 和 CBPR+ 等术语在每种语言中均以其标准形式出现。非技术内容被翻译为在每种目标语言中自然流畅的表达。翻译会检查结构一致性，并在英语源材料变更时重新生成。

## 更新频率

内容根据三个触发条件进行更新。第一，当 ISO 20022 发布影响 pacs 报文定义的新报文目录版本时。第二，当 SWIFT 发布更新的 CBPR+ 使用指南或迁移截止日期时。第三，当 EPC 更新 SEPA 信贷转账或即时信贷转账规则手册时。

pacs008 工具包遵循语义化版本控制。每次新发布都会反映在 API 文档和更新日志中。每次内容或工具包更新时，站点都会重新构建和重新部署。

## 内容生成

页面结构和翻译内容使用构建脚本从经过审查的英语源材料生成。这确保了 22 种语言之间的结构一致性，同时保持技术术语和 ISO 标识符的标准形式。

## 准确性与限制

pacs008.com 力求准确和及时，但不能替代方案规则手册、对手方协议或法律建议。请始终根据原始资料以及您所运营的市场或方案的具体规则确认实施细节。

## 联系方式

如果您发现错误或有更正建议，请在 [pacs008 仓库](https://github.com/sebastienrousseau/pacs008/issues)中提交问题。
