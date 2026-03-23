---
title: pacs.008.001.13 | 金融机构间客户信用转账 | pacs008
description: pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.008.001.13 — 金融机构间客户信用转账

| | |
|---|---|
| **ISO 名称** | FIToFICustomerCreditTransferV13 |
| **注册状态** | Registered |
| **年份** | 2023 |
| **版本** | 13 |

## 概述

pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

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

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.008.001.01-07 | 早期版本 | 主要适用于遗留迁移分析和版本历史背景说明。 |
| pacs.008.001.08-12 | 当前版本之前的较新版本 | 这些版本最有可能出现在近期迁移或共存项目中。 |
| pacs.008.001.13 | 当前目录版本 | 可用于当前版本规划，但仍需验证方案使用规则和交易对手准备情况。 |

## 带注释的 XML 示例

```xml
<FIToFICstmrCdtTrf>
  <GrpHdr>
    <MsgId>MSG-2026-001</MsgId>
    <CreDtTm>2026-01-15T10:30:00Z</CreDtTm>
  </GrpHdr>
  <CdtTrfTxInf>
    <PmtId>
      <EndToEndId>E2E-INV-2026-001</EndToEndId>
      <UETR>123e4567-e89b-12d3-a456-426614174000</UETR>
    </PmtId>
    <IntrBkSttlmAmt Ccy="EUR">25000.00</IntrBkSttlmAmt>
    <Dbtr><Nm>Acme Corp GmbH</Nm></Dbtr>
    <Cdtr><Nm>Widget Industries SA</Nm></Cdtr>
  </CdtTrfTxInf>
</FIToFICstmrCdtTrf>
```

### 字段说明

- `MsgId`: 这里应标识消息封装本身，而不是终端客户的付款参考。
- `EndToEndId`: 如有可能，应在下游系统之间保持面向客户的可追踪性稳定一致。
- `UETR`: 在跨境和高跟踪要求环境中应始终如一地使用该字段，不要在后续流程阶段临时生成。
- `IntrBkSttlmAmt`: 在进行模式校验之前，应先按业务规则校验金额和币种。
- `Dbtr` / `Cdtr`: 参与方数据质量、地址结构和标识符通常是决定修复率的主要因素。

## 比较 pacs.008 vs pacs.009

| 比较维度 | pacs.008.001.13 | 对比报文 |
|---|---|---|
| 主要用途 | 客户信用转账 | 机构自有账户信用转账或覆盖清算环节 |
| 业务负责人 | 客户支付运营 | 资金 / 代理行 / 融资运营 |
| 典型搭配 | pacs.002, pacs.004, pacs.007, pacs.028 | pacs.002、pacs.004，以及有时相关联的 pacs.008 流程 |
| 应避免的错误假设 | 认为所有银行间转账都应归入这里 | 认为它可以替代客户信用转账指令 |

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

| 版本 | |
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
| `pacs.008.001.13` | **当前** |

## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | 金融机构间支付状态报告 | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |
| [`pacs.004.001.11`](/zh/pacs.004.001.11/) | 支付退回 | pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。 |
| [`pacs.009.001.10`](/zh/pacs.009.001.10/) | 金融机构信用转账 | pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。 |

