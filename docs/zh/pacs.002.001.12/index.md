---
title: pacs.002.001.12 | 金融机构间支付状态报告 | pacs008
description: pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.002.001.12 — 金融机构间支付状态报告

| | |
|---|---|
| **ISO 名称** | FIToFIPaymentStatusReportV12 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 12 |

## 概述

pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **OrgnlGrpInfAndSts** — 用于批量级别报告的原始组信息和状态
- **TxInfAndSts** — 用于各笔交易结果的交易信息和状态
- **StsRsnInf** — 包含结构化原因代码的状态原因信息
- **OrgnlTxRef** — 关联回原始指令的原始交易参考

## 业务背景

- 用于确认信用转账、直接借记和支付退回的结算，或报告拒绝
- 实现指示代理和被指示代理之间的对账
- 在 CBPR+ 流程中，确认 pacs.008 和 pacs.009 消息的处理是必需的
- 支持批量组级别和单笔交易级别的状态报告

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和创建时间戳的组头 | 用于确认信用转账、直接借记和支付退回的结算，或报告拒绝 |
| **OrgnlGrpInfAndSts** — 用于批量级别报告的原始组信息和状态 | 实现指示代理和被指示代理之间的对账 |
| **TxInfAndSts** — 用于各笔交易结果的交易信息和状态 | 在 CBPR+ 流程中，确认 pacs.008 和 pacs.009 消息的处理是必需的 |
| **StsRsnInf** — 包含结构化原因代码的状态原因信息 | 支持批量组级别和单笔交易级别的状态报告 |
| **OrgnlTxRef** — 关联回原始指令的原始交易参考 | 被指示代理（接收方）向指示代理（发送方）返回 pacs.002，以确认对所收到支付指令（如 pacs.008 或 pacs.009）的接受、结算或拒绝。 |

## CBPR+ 与方案背景

- 替代 MT199 和 MT 消息中字段 79 的状态叙述
- CBPR+ 要求所有支付状态通信使用 pacs.002
- 结构化原因代码取代自由文本的拒绝说明
- SWIFT gpi 追踪集成要求 pacs.002 以实现端到端透明度

## 报文流程

被指示代理（接收方）向指示代理（发送方）返回 pacs.002，以确认对所收到支付指令（如 pacs.008 或 pacs.009）的接受、结算或拒绝。

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.002.001.12 | pacs008 中的当前实现 | 当需要匹配当前项目模板和校验资产时使用此版本。 |
| pacs.002.001.13-15 | 后续目录版本 | 在开始新的互操作工作或接入新基础设施之前，请审查后续 ISO 版本。 |

## 带注释的 XML 示例

```xml
<FIToFIPmtStsRpt>
  <GrpHdr>
    <MsgId>STS-2026-0001</MsgId>
    <CreDtTm>2026-03-01T09:15:00Z</CreDtTm>
  </GrpHdr>
  <TxInfAndSts>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <TxSts>RJCT</TxSts>
    <StsRsnInf>
      <Rsn><Cd>AC01</Cd></Rsn>
    </StsRsnInf>
  </TxInfAndSts>
</FIToFIPmtStsRpt>
```

### 字段说明

- `MsgId`: 请为状态报告本身使用新的标识，而不是沿用原始支付指令标识。
- `OrgnlInstrId`: 请保持原始指令标识不变，以便系统自动匹配状态。
- `TxSts`: 这是业务处理状态；应谨慎映射到内部工作流状态，而不要假定存在一一对应关系。
- `StsRsnInf`: 对于修复处理和分析，结构化原因代码远比自由文本更有价值。

## 比较 pacs.002 vs pacs.028

| 比较维度 | pacs.002.001.12 | 对比报文 |
|---|---|---|
| 主要用途 | 报告状态 | 请求状态 |
| 由谁发起交互 | 发送状态的机构 | 请求状态的机构 |
| 运营姿态 | 事件驱动型报告 | 异常驱动型查询 |
| 应避免的错误假设 | 认为状态报告可以取代调查处理流程 | 认为每笔付款都需要显式状态请求 |

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.002.001.12`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.002.001.12)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh/pacs.008.001.13/) | 金融机构间客户信用转账 | pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。 |
| [`pacs.009.001.10`](/zh/pacs.009.001.10/) | 金融机构信用转账 | pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。 |
| [`pacs.028.001.05`](/zh/pacs.028.001.05/) | 金融机构间支付状态请求 | pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。 |

