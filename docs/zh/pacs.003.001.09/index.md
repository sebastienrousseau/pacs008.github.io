---
title: pacs.003.001.09 | 金融机构间客户直接借记 | pacs008
description: pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.003.001.09 — 金融机构间客户直接借记

| | |
|---|---|
| **ISO 名称** | FIToFICustomerDirectDebitV09 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 9 |

## 概述

pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和结算信息的组头
- **DrctDbtTxInf** — 包含金额和当事方信息的直接借记交易信息
- **Cdtr** — 债权人标识和账户详细信息
- **CdtrAgt** — 债权人代理（收款机构）标识
- **DbtrAgt** — 债务人代理（付款机构）标识

## 业务背景

- 支持 SEPA 核心方案和 B2B 直接借记方案
- 用于订阅、公共事业费和贷款偿还等经常性支付收款
- 需要债务人和债权人之间的有效授权引用
- 支持在单条消息中批量收取多笔直接借记指令

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和结算信息的组头 | 支持 SEPA 核心方案和 B2B 直接借记方案 |
| **DrctDbtTxInf** — 包含金额和当事方信息的直接借记交易信息 | 用于订阅、公共事业费和贷款偿还等经常性支付收款 |
| **Cdtr** — 债权人标识和账户详细信息 | 需要债务人和债权人之间的有效授权引用 |
| **CdtrAgt** — 债权人代理（收款机构）标识 | 支持在单条消息中批量收取多笔直接借记指令 |
| **DbtrAgt** — 债务人代理（付款机构）标识 | 债权人代理向债务人代理发起 pacs.003 以收取资金。债务人代理验证授权、检查账户余额，并结算或退回交易。 |

## CBPR+ 与方案背景

- 结构化地址和当事方标识要求同样适用于直接借记
- 授权相关数据须在2026年11月前实现完全结构化
- 在跨境流程中替代旧版 MT104 格式的直接借记格式
- 债权人方案标识的验证执行日益加强

## 报文流程

债权人代理向债务人代理发起 pacs.003 以收取资金。债务人代理验证授权、检查账户余额，并结算或退回交易。

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.003.001.09 | pacs008 中的当前实现 | 适用于当前项目中的直接借记参考建模。 |
| pacs.003.001.10-11 | 后续目录版本 | 在用于全新建设前，请检查后续版本中关于授权、状态和互操作性的更新。 |

## 带注释的 XML 示例

```xml
<FIToFICstmrDrctDbt>
  <GrpHdr>
    <MsgId>DD-2026-1001</MsgId>
  </GrpHdr>
  <DrctDbtTxInf>
    <PmtId><EndToEndId>MANDATE-7741</EndToEndId></PmtId>
    <IntrBkSttlmAmt Ccy="EUR">250.00</IntrBkSttlmAmt>
    <Dbtr><Nm>DBTR PARTY 01</Nm></Dbtr>
    <Cdtr><Nm>CDTR PARTY 01</Nm></Cdtr>
  </DrctDbtTxInf>
</FIToFICstmrDrctDbt>
```

### 字段说明

- `EndToEndId`: 请将授权标识和托收标识与业务发票参考分开管理。
- `IntrBkSttlmAmt`: 在生成 XML 之前，请先验证借记金额精度和币种规则。
- `Dbtr` / `Cdtr`: 直接借记能否顺利处理，往往更取决于账户和授权质量，而不是 XML 结构。

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.003.001.09`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.003.001.09)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.004.001.11`](/zh/pacs.004.001.11/) | 支付退回 | pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。 |
| [`pacs.007.001.11`](/zh/pacs.007.001.11/) | 金融机构间支付撤销 | pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。 |
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | 金融机构间支付状态报告 | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |

