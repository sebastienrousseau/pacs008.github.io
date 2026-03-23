---
title: pacs.007.001.11 | 金融机构间支付撤销 | pacs008
description: pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — 金融机构间支付撤销

| | |
|---|---|
| **ISO 名称** | FIToFIPaymentReversalV11 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **TxInf** — 包含撤销金额和当事方信息的交易信息
- **OrgnlGrpInf** — 引用源消息的原始组信息
- **RvslRsnInf** — 包含结构化原因代码的撤销原因信息
- **OrgnlTxRef** — 用于端到端可追溯性的原始交易参考

## 业务背景

- 当原始发送方在结算前或结算后发现错误时发起
- 用于需要快速撤销的欺诈场景
- 支持对原始支付金额的全额和部分撤销
- 携带结构化撤销原因代码以供下游处理

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和创建时间戳的组头 | 当原始发送方在结算前或结算后发现错误时发起 |
| **TxInf** — 包含撤销金额和当事方信息的交易信息 | 用于需要快速撤销的欺诈场景 |
| **OrgnlGrpInf** — 引用源消息的原始组信息 | 支持对原始支付金额的全额和部分撤销 |
| **RvslRsnInf** — 包含结构化原因代码的撤销原因信息 | 携带结构化撤销原因代码以供下游处理 |
| **OrgnlTxRef** — 用于端到端可追溯性的原始交易参考 | 指示代理（原始发送方）通过支付链向前发送 pacs.007 以撤销先前指示的支付。每个代理处理撤销指令并相应调整结算。 |

## CBPR+ 与方案背景

- 与 pacs.004 通过方向区分 — 撤销从发起方向前流动，退回从收款方向后流动
- CBPR+ 要求与原始消息标识符配对以实现自动匹配
- 结构化原因代码取代旧版 MT 消息中的自由文本叙述
- 在即时支付召回和欺诈防范工作流中的使用日益增加

## 报文流程

指示代理（原始发送方）通过支付链向前发送 pacs.007 以撤销先前指示的支付。每个代理处理撤销指令并相应调整结算。

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.007.001.11 | pacs008 中的当前实现 | 是构建撤销处理流程模型的良好基线。 |
| pacs.007.001.12-13 | 后续目录版本 | 请检查后续版本，以确认是否符合当前市场基础设施要求。 |

## 带注释的 XML 示例

```xml
<FIToFIPmtRvsl>
  <GrpHdr>
    <MsgId>RVSL-2026-0007</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RvslRsnInf>
      <Rsn><Cd>DUPL</Cd></Rsn>
    </RvslRsnInf>
  </TxInf>
</FIToFIPmtRvsl>
```

### 字段说明

- `MsgId`: 撤销报文本身需要独立且可审计的安全标识符。
- `OrgnlInstrId`: 请保留原始付款参考，以避免对账链路中断。
- `RvslRsnInf`: 请使用结构化撤销原因，以便对欺诈、错误和重复付款场景采用不同路由。

## 比较 pacs.007 vs pacs.004

| 比较维度 | pacs.007.001.11 | 对比报文 |
|---|---|---|
| 主要用途 | Reverse a previously instructed payment | Return settled funds |
| Initiated by | Original instructing side | Receiving / beneficiary side |
| Direction of flow | Forward through the chain | Back through the chain |
| 最适合用于 | 处理因召回、错误或欺诈引发的撤销 | 处理清算后的退回 |

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.007.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.007.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh/pacs.008.001.13/) | 金融机构间客户信用转账 | pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。 |
| [`pacs.004.001.11`](/zh/pacs.004.001.11/) | 支付退回 | pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。 |
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | 金融机构间支付状态报告 | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |

