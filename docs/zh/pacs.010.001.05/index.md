---
title: pacs.010.001.05 | 金融机构直接借记 | pacs008
description: pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — 金融机构直接借记

| | |
|---|---|
| **ISO 名称** | FinancialInstitutionDirectDebitV05 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和结算信息的组头
- **DrctDbtTxInf** — 包含收取金额的直接借记交易信息
- **Cdtr / CdtrAgt** — 债权人机构及其代理的标识
- **Dbtr / DbtrAgt** — 债务人机构及其代理的标识
- **IntrBkSttlmAmt** — 以结算货币表示的银行间结算金额

## 业务背景

- 支持金融机构之间的银行间直接借记收款
- 用于费用收取、保证金追缴和机构间结算义务
- 需要参与机构之间预先达成的双边安排
- 对机构现金管理和银行间结算周期至关重要

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和结算信息的组头 | 支持金融机构之间的银行间直接借记收款 |
| **DrctDbtTxInf** — 包含收取金额的直接借记交易信息 | 用于费用收取、保证金追缴和机构间结算义务 |
| **Cdtr / CdtrAgt** — 债权人机构及其代理的标识 | 需要参与机构之间预先达成的双边安排 |
| **Dbtr / DbtrAgt** — 债务人机构及其代理的标识 | 对机构现金管理和银行间结算周期至关重要 |
| **IntrBkSttlmAmt** — 以结算货币表示的银行间结算金额 | 债权人机构根据预先达成的安排向债务人机构发送 pacs.010 以收取资金。债务人机构验证请求并结算或拒绝该直接借记。 |

## CBPR+ 与方案背景

- 在银行间直接借记处理中替代 MT204 的部分功能
- 结构化当事方标识遵循与其他 pacs 消息相同的要求
- 机构标识符（BIC、LEI）的验证是强制性的
- 包含在市场基础设施全面采用 ISO 20022 的路线图中

## 报文流程

债权人机构根据预先达成的安排向债务人机构发送 pacs.010 以收取资金。债务人机构验证请求并结算或拒绝该直接借记。

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.010.001.05 | pacs008 中的当前实现 | 是当前项目中机构直接借记支持的参考基点。 |
| pacs.010.001.06 | 后续目录版本 | Review before adopting newer infrastructure requirements. |

## 带注释的 XML 示例

```xml
<FIDrctDbt>
  <GrpHdr>
    <MsgId>FIDD-2026-0012</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><InstrId>COLL-4500</InstrId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">1250.00</IntrBkSttlmAmt>
    <Cdtr><Nm>Collecting Institution</Nm></Cdtr>
    <Dbtr><Nm>Debited Institution</Nm></Dbtr>
  </DrctDbtTxInf>
</FIDrctDbt>
```

### 字段说明

- `InstrId`: Use an identifier that can be traced back to the bilateral collection arrangement.
- `IntrBkSttlmAmt`: 机构间直接借记金额通常需要明确的双边容差控制。
- `Cdtr` / `Dbtr`: 应明确标识机构角色；这不是零售客户借记模型。

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.010.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.010.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.009.001.10`](/zh/pacs.009.001.10/) | 金融机构信用转账 | pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。 |
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | 金融机构间支付状态报告 | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |
| [`pacs.003.001.09`](/zh/pacs.003.001.09/) | 金融机构间客户直接借记 | pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。 |

