---
title: 报文类型 | 简体中文
description: 支持的 ISO 20022 pacs 报文定义和版本。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# 报文类型

Pacs008 涵盖核心 pacs.008 报文定义和编排及对账流程中使用的相关报文。

## 包含的支持

- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/zh/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/zh/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/zh/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.01`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.02`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.03`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.04`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.05`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.06`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.07`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.08`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.09`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.10`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.11`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.12`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.008.001.13`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/zh/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/zh/pacs.028.001.05/) — FI to FI Payment Status Request

## 交付模型

每种支持的报文类型都配备模板资源和验证逻辑，以便团队能够在多个下游渠道中标准化生成和回归测试。

## 2026 市场背景

- **SEPA SCT / SCT Inst**：pacs.008 仍然是信贷转账交换和即时支付处理的核心。
- **CBPR+**：pacs.008 继续用更丰富的结构化数据替代 MT103 风格的跨境载荷。
- **结构化地址**：当前市场指引指向 2026 年 11 月从完全非结构化邮政地址的切换。
- **串行方法和 STP**：多环节银行间链仍然重要，直通处理变体对运营效率仍然至关重要。

## 运营能力

Pacs008 在支持的报文定义修订版本中提供基于模板的生成和验证：

- 比较版本
- 对方案更新进行回归测试
- 在发布前加固出站支付报文数据
- 从单一代码库支持产品、运营和迁移团队

