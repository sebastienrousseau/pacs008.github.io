---
title: 报文选择指南 | pacs008
description: 为生成、状态报告、退回、撤销和查询选择合适的 ISO 20022 pacs 报文。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# 报文选择指南

先按业务事件选择 pacs 家族，再按方案规则和运行模式细化选择。

> 已于 2026 年 3 月 23 日依据本页引用的 ISO 20022、EPC 和 Swift 公共资料完成主要来源复核。

## 快速决策矩阵

| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |
| [`pacs.003.001.09`](/zh/pacs.003.001.09/) | FI to FI Customer Direct Debit | pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。 |
| [`pacs.004.001.11`](/zh/pacs.004.001.11/) | Payment Return | pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。 |
| [`pacs.007.001.11`](/zh/pacs.007.001.11/) | FI to FI Payment Reversal | pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。 |
| [`pacs.008.001.13`](/zh/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。 |
| [`pacs.009.001.10`](/zh/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。 |
| [`pacs.010.001.05`](/zh/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。 |
| [`pacs.028.001.05`](/zh/pacs.028.001.05/) | FI to FI Payment Status Request | pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。 |

## 常见对比点

| 比较项 | 关键区别 |
|---|---|
| `pacs.008` vs `pacs.009` | 客户支付与机构/cover 资金划转的区别 |
| `pacs.004` vs `pacs.007` | 接收方退回与发起方撤销的区别 |
| `pacs.002` vs `pacs.028` | 状态报告与状态查询的区别 |

## 支持的报文页面

- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/zh/pacs.003.001.09/) — FI to FI Customer Direct Debit
- [`pacs.004.001.11`](/zh/pacs.004.001.11/) — Payment Return
- [`pacs.007.001.11`](/zh/pacs.007.001.11/) — FI to FI Payment Reversal
- [`pacs.008.001.13`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.010.001.05`](/zh/pacs.010.001.05/) — Financial Institution Direct Debit
- [`pacs.028.001.05`](/zh/pacs.028.001.05/) — FI to FI Payment Status Request

