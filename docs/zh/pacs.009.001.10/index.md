---
title: pacs.009.001.10 | Financial Institution Credit Transfer | pacs008
description: pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.009.001.10 — Financial Institution Credit Transfer

| | |
|---|---|
| **ISO 名称** | FinancialInstitutionCreditTransferV10 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 10 |

## 概述

pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：27 February 2025；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和结算信息的组头
- **CdtTrfTxInf** — 包含银行间结算金额的信用转账交易信息
- **Dbtr / DbtrAgt** — 债务人机构及其代理的标识
- **Cdtr / CdtrAgt** — 债权人机构及其代理的标识
- **IntrBkSttlmAmt** — 以结算货币表示的银行间结算金额

## 业务背景

- 用于银行间自有账户转账和覆盖支付
- 支持代理行合作伙伴之间的流动性管理
- 携带通过覆盖方式结算的客户信用转账的覆盖段
- 支持金融机构之间的资金运营和融资操作

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和结算信息的组头 | 用于银行间自有账户转账和覆盖支付 |
| **CdtTrfTxInf** — 包含银行间结算金额的信用转账交易信息 | 支持代理行合作伙伴之间的流动性管理 |
| **Dbtr / DbtrAgt** — 债务人机构及其代理的标识 | 携带通过覆盖方式结算的客户信用转账的覆盖段 |
| **Cdtr / CdtrAgt** — 债权人机构及其代理的标识 | 支持金融机构之间的资金运营和融资操作 |
| **IntrBkSttlmAmt** — 以结算货币表示的银行间结算金额 | 债务人机构向债权人机构发送 pacs.009 以转移自有资金。对于覆盖方式的支付，pacs.009 提供资金调拨段，而 pacs.008 通过另一路径携带客户指令。 |

## CBPR+ 与方案背景

- 在机构间转账中替代 MT202 和 MT202COV
- 覆盖方式流程将 pacs.009 与基础 pacs.008 客户指令配对
- 结构化当事方数据和 LEI 标识的要求日益增加
- SWIFT gpi 涵盖 pacs.009 以实现代理行透明度

## 报文流程

债务人机构向债权人机构发送 pacs.009 以转移自有资金。对于覆盖方式的支付，pacs.009 提供资金调拨段，而 pacs.008 通过另一路径携带客户指令。

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.009.001.10`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.009.001.10)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [Swift CBPR+ pacs.009 overview](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/cbpr-payment-instructions-pacs009)
- [Swift CBPR+ cover-method pacs.008/pacs.009 guidance](https://www.swift.com/myswift/services/training/swift-training-catalogue/browse-swift-training-catalogue/fi-fi-customer-credit-transfer-cover-method-pacs008-pacs009)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh/pacs.008.001.13/) | FI to FI Customer Credit Transfer | pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。 |
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | FI to FI Payment Status Report | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |
| [`pacs.010.001.05`](/zh/pacs.010.001.05/) | Financial Institution Direct Debit | pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。 |

