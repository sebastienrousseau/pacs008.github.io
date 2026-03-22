---
title: pacs.008.001.13 — FI to FI Customer Credit Transfer | 简体中文
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

## CBPR+ 与方案背景

- 在跨境客户信用转账中替代 MT103 和 MT103+
- 2026年11月结构化地址截止日期适用于所有当事方邮政地址
- SWIFT gpi 要求 pacs.008 以实现基于 UETR 的端到端追踪
- 13次修订反映了市场基础设施中模式的持续演进

## 报文流程

债务人代理创建 pacs.008 并发送至债权人代理（直接发送或通过中介机构转发）。链中的每个代理验证、丰富并转发指令，直到债权人代理将资金入账至收款人账户。

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

- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.004.001.11`](/zh/pacs.004.001.11/) — Payment Return
- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — Financial Institution Credit Transfer

