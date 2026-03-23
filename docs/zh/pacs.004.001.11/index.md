---
title: pacs.004.001.11 | 支付退回 | pacs008
description: pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.004.001.11 — 支付退回

| | |
|---|---|
| **ISO 名称** | PaymentReturnV11 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.004 消息用于退回先前已结算的支付交易。当支付无法入账、被错误发送或发起机构请求召回时，它将逆转资金流向。

> 已于 2026 年 3 月 23 日依据主要来源完成复核。ISO 20022 目录参考日期：2025-02-27；来源链接如下。

## 关键数据要素

- **GrpHdr** — 包含消息标识和创建时间戳的组头
- **TxInf** — 包含退回金额和当事方信息的交易信息
- **OrgnlGrpInf** — 关联到源消息的原始组信息
- **RtrRsnInf** — 包含结构化原因代码的退回原因信息
- **OrgnlTxRef** — 用于匹配和对账的原始交易参考

## 业务背景

- 处理收款人账户无法入账时的结算后退回
- 支持发起人请求退回资金的召回场景
- 携带结构化退回原因代码以确保监管和运营透明度
- 同时适用于信用转账退回（pacs.008）和直接借记退回（pacs.003）

| 关键数据要素 | 业务背景 |
|---|---|
| **GrpHdr** — 包含消息标识和创建时间戳的组头 | 处理收款人账户无法入账时的结算后退回 |
| **TxInf** — 包含退回金额和当事方信息的交易信息 | 支持发起人请求退回资金的召回场景 |
| **OrgnlGrpInf** — 关联到源消息的原始组信息 | 携带结构化退回原因代码以确保监管和运营透明度 |
| **RtrRsnInf** — 包含结构化原因代码的退回原因信息 | 同时适用于信用转账退回（pacs.008）和直接借记退回（pacs.003） |
| **OrgnlTxRef** — 用于匹配和对账的原始交易参考 | 被指示代理通过支付链返回 pacs.004 以退回先前已结算的资金。链中的每个代理处理退回并将资金退还至相关账户。 |

## CBPR+ 与方案背景

- 替代 MT103 RETURN 和覆盖方式退回消息传递
- 退回原因代码在 ISO 20022 下实现标准化和机器可读
- CBPR+ 要求完整的原始交易参考数据以进行匹配
- SWIFT gpi 追踪扩展至退回交易以实现端到端可视性

## 报文流程

被指示代理通过支付链返回 pacs.004 以退回先前已结算的资金。链中的每个代理处理退回并将资金退还至相关账户。

## 版本差异表

| 版本范围 | 重要原因 | 实施要点 |
|---|---|---|
| pacs.004.001.11 | pacs008 中的当前实现 | 与当前的支付退回模板保持一致。 |
| pacs.004.001.12-14 | 后续目录版本 | 当范围包含方案升级或新增交易对手时，请审查后续的退回报文版本。 |

## 带注释的 XML 示例

```xml
<PmtRtr>
  <GrpHdr>
    <MsgId>RTRN-2026-0003</MsgId>
  </GrpHdr>
  <TxInf>
    <OrgnlInstrId>PAY-2026-8841</OrgnlInstrId>
    <RtrdIntrBkSttlmAmt Ccy="EUR">25000.00</RtrdIntrBkSttlmAmt>
    <RtrRsnInf>
      <Rsn><Cd>AC04</Cd></Rsn>
    </RtrRsnInf>
  </TxInf>
</PmtRtr>
```

### 字段说明

- `OrgnlInstrId`: This must point back to the settled transaction being returned.
- `RtrdIntrBkSttlmAmt`: Return amount should reflect the actual returned value, not a reconstructed business amount.
- `RtrRsnInf`: 原因代码的质量对于后续客户沟通和运营路由至关重要。

## 比较 pacs.004 vs pacs.007

| 比较维度 | pacs.004.001.11 | 对比报文 |
|---|---|---|
| 主要用途 | Return settled funds | Reverse a previously instructed payment |
| Initiated by | Receiving / beneficiary side | Original instructing side |
| Direction of flow | Back through the chain | Forward through the chain |
| 最适合用于 | 处理清算后的退回 | 处理因召回、错误或欺诈引发的撤销 |

## 主要参考来源

- [ISO 20022 message definitions catalogue for `pacs.004.001.11`](https://www.iso20022.org/iso-20022-message-definitions?search=Pacs.004.001.11)
- [Swift CBPR+ ISO 20022 usage-guidelines announcement](https://www.swift.com/news-events/news/updated-iso-20022-usage-guidelines-cross-border-payments-released)
- [Swift CBPR+ migration roadmap PDF](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)


## 相关报文
| 报文类型 | 描述 | 概述 |
|---|---|---|
| [`pacs.008.001.13`](/zh/pacs.008.001.13/) | 金融机构间客户信用转账 | pacs.008 消息是金融机构之间交换的核心支付指令，用于代表客户转移资金。它为一笔或多笔信用转账交易携带债务人、债权人、金额和汇款信息。 |
| [`pacs.003.001.09`](/zh/pacs.003.001.09/) | 金融机构间客户直接借记 | pacs.003 消息在金融机构之间交换，用于执行客户直接借记指令。它使债权人的银行能够代表债权人从债务人的银行收取资金。 |
| [`pacs.002.001.12`](/zh/pacs.002.001.12/) | 金融机构间支付状态报告 | pacs.002 消息由金融机构发送，用于报告先前发送的支付指令的状态。它为支付消息中的各笔交易提供确认、拒绝或待处理状态信息。 |

