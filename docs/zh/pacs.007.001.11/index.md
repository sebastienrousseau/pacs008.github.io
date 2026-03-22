---
title: pacs.007.001.11 — FI to FI Payment Reversal | 简体中文
description: pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.007.001.11 — FI to FI Payment Reversal

| | |
|---|---|
| **ISO 名称** | FIToFIPaymentReversalV11 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 11 |

## 概述

pacs.007 消息用于撤销先前发送但尚未结算的支付指令，或请求撤销已结算的支付。与 pacs.004（退回）不同，它由原始指示代理发起。

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

## CBPR+ 与方案背景

- 与 pacs.004 通过方向区分 — 撤销从发起方向前流动，退回从收款方向后流动
- CBPR+ 要求与原始消息标识符配对以实现自动匹配
- 结构化原因代码取代旧版 MT 消息中的自由文本叙述
- 在即时支付召回和欺诈防范工作流中的使用日益增加

## 报文流程

指示代理（原始发送方）通过支付链向前发送 pacs.007 以撤销先前指示的支付。每个代理处理撤销指令并相应调整结算。

## 相关报文

- [`pacs.008.001.13`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.004.001.11`](/zh/pacs.004.001.11/) — Payment Return
- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report

