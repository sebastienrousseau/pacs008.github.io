---
title: pacs.028.001.05 | 金融机构间支付状态请求 | pacs008
description: pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — 金融机构间支付状态请求

| | |
|---|---|
| **ISO 名称** | FIToFIPaymentStatusRequestV05 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **TxInf** — 标识待查询支付的交易信息
- **OrgnlGrpInf** — 引用源消息的原始组信息
- **OrgnlInstrId** — 来自源支付的原始指令标识
- **OrgnlEndToEndId** — 用于可追溯性的原始端到端标识

## 业务背景

- 支持对在途支付指令进行主动状态查询
- 帮助运营团队调查延迟或丢失的支付
- 通过主动发起状态通信而非被动等待来补充 pacs.002
- 用于异常处理和 SLA 监控工作流

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和创建时间戳的组头 | 支持对在途支付指令进行主动状态查询 |
| **TxInf** — 标识待查询支付的交易信息 | 帮助运营团队调查延迟或丢失的支付 |
| **OrgnlGrpInf** — 引用源消息的原始组信息 | 通过主动发起状态通信而非被动等待来补充 pacs.002 |
| **OrgnlInstrId** — 来自源支付的原始指令标识 | 用于异常处理和 SLA 监控工作流 |
| **OrgnlEndToEndId** — 用于可追溯性的原始端到端标识 | 指示代理向被指示代理发送 pacs.028 以请求特定支付的状态。被指示代理以包含当前处理状态的 pacs.002 进行响应。 |

## CBPR+ 与方案背景

- 替代 MT199 状态查询模式和手动 SWIFT 消息查询
- CBPR+ 支持与原始消息标识符关联的结构化状态请求
- 基于 UETR 的 gpi 追踪减少了手动查询的需求
- 日益集成到自动化支付运营仪表板中

## 报文流程

指示代理向被指示代理发送 pacs.028 以请求特定支付的状态。被指示代理以包含当前处理状态的 pacs.002 进行响应。

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.028.001.05 | pacs008 中的当前实现 | 适用于当前的状态查询建模。 |
| pacs.028.001.06 | 后续目录版本 | 请检查更新的目录版本，以支持未来的互操作规划。 |

## 带注释的 XML 示例

```xml
<FIToFIPmtStsReq>
  <GrpHdr>
    <MsgId>REQ-2026-0009</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <OrgnlEndToEndId>E2E-INV-2026-001</OrgnlEndToEndId>
  </TxInf>
</FIToFIPmtStsReq>
```

### 字段说明

- `MsgId`: 查询请求本身需要一个与底层付款区分开的、可审计的标识。
- `OrgnlInstrId`: 请使用原始指令中的精确源标识，以最大化匹配准确性。
- `OrgnlEndToEndId`: 加入面向客户的可追踪性有助于运营团队更快完成查询对账。

## 比较 pacs.028 vs pacs.002

| 比较维度 | pacs.028.001.05 | 对比报文 |
|---|---|---|
| 主要用途 | 请求状态 | 报告状态 |
| 由谁发起交互 | 请求状态的机构 | 发送状态的机构 |
| 运营姿态 | 异常驱动型查询 | 事件驱动型报告 |
| 应避免的错误假设 | 认为每笔付款都应例行发送此报文 | 认为它可以免除主动案例管理的需要 |

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.028.001.05`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.028.001.05)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | 金融机构间支付状态报告 | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |
| [`pacs.008.001.13`](/zh/pacs.008.001.13/) | 金融机构间客户信用转账 | pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。 |
| [`pacs.009.001.10`](/zh/pacs.009.001.10/) | 金融机构信用转账 | pacs.009 消息用于金融机构自身账户间的信用转账，而非代表客户进行。它支持银行间资金调拨、覆盖支付和流动性管理。 |

