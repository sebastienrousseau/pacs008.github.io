---
title: pacs.008.001.13 | FI to FI Customer Credit Transfer | pacs008
description: pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — FI to FI Customer Credit Transfer

| | |
|---|---|
| **ISO 名称** | FIToFICustomerCreditTransferV13 |
| **注册状态** | Registered |
| **年份** | 2023 |
| **版本** | 13 |

## 概述

pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：27 February 2025；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息ID、创建日期、交易数量和结算信息的组头
- **CdtTrfTxInf** — 包含金额、费用和用途的信用转账交易信息
- **Dbtr / DbtrAgt** — 债务人和债务人代理的标识及账户详细信息
- **Cdtr / CdtrAgt** — 债权人和债权人代理的标识及账户详细信息
- **RmtInf** — 用于结构化或非结构化支付参考的汇款信息

## 业务背景

- 客户发起的跨境和国内信用转账的主要消息
- 在 SEPA SCT、SEPA Instant、CBPR+ 和国内清算系统中使用
- 携带结构化汇款信息以支持直通式对账
- 支持多段支付链中的串行、覆盖和直接结算方式

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息ID、创建日期、交易数量和结算信息的组头 | 客户发起的跨境和国内信用转账的主要消息 |
| **CdtTrfTxInf** — 包含金额、费用和用途的信用转账交易信息 | 在 SEPA SCT、SEPA Instant、CBPR+ 和国内清算系统中使用 |
| **Dbtr / DbtrAgt** — 债务人和债务人代理的标识及账户详细信息 | 携带结构化汇款信息以支持直通式对账 |
| **Cdtr / CdtrAgt** — 债权人和债权人代理的标识及账户详细信息 | 支持多段支付链中的串行、覆盖和直接结算方式 |
| **RmtInf** — 用于结构化或非结构化支付参考的汇款信息 | 债务人代理创建 pacs.008 并发送至债权人代理（直接发送或通过中介机构转发）。链中的每个代理验证、丰富并转发指令，直到债权人代理将资金入账至收款人账户。 |

## CBPR+ 与方案背景

- 在跨境客户信用转账中替代 MT103 和 MT103+
- 2026年11月结构化地址截止日期适用于所有当事方邮政地址
- SWIFT gpi 要求 pacs.008 以实现基于 UETR 的端到端追踪
- 13次修订反映了市场基础设施中模式的持续演进

## 报文流程

债务人代理创建 pacs.008 并发送至债权人代理（直接发送或通过中介机构转发）。链中的每个代理验证、丰富并转发指令，直到债权人代理将资金入账至收款人账户。

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.008.001.13`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.008.001.13)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [Swift CBPR+ pacs.008 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs008)
- [Swift CBPR+ serial-method pacs.008 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-serial-method-pacs008)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)
- [Swift CBPR+ roadmap and standards programme](https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap)


## 支持的版本

| Version | |
|---|---|
| `pacs.008.001.01` |  |
| `pacs.008.001.02` |  |
| `pacs.008.001.03` |  |
| `pacs.008.001.04` |  |
| `pacs.008.001.05` |  |
| `pacs.008.001.06` |  |
| `pacs.008.001.07` |  |
| `pacs.008.001.08` |  |
| `pacs.008.001.09` |  |
| `pacs.008.001.10` |  |
| `pacs.008.001.11` |  |
| `pacs.008.001.12` |  |
| `pacs.008.001.13` | **Current** |

## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |
| [`pacs.004.001.11`](/zh/pacs.004.001.11/) | Payment Return | pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。 |
| [`pacs.009.001.10`](/zh/pacs.009.001.10/) | Financial Institution Credit Transfer | pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。 |

