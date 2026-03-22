---
title: pacs.010.001.05 — Financial Institution Direct Debit | 简体中文
description: pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.010.001.05 — Financial Institution Direct Debit

| | |
|---|---|
| **ISO 名称** | FinancialInstitutionDirectDebitV05 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.010 消息用于金融机构自身账户的直接借记交易。它使一个机构能够直接从另一个机构的账户中收取资金。

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

## CBPR+ 与方案背景

- 在银行间直接借记处理中替代 MT204 的部分功能
- 结构化当事方标识遵循与其他 pacs 消息相同的要求
- 机构标识符（BIC、LEI）的验证是强制性的
- 包含在市场基础设施全面采用 ISO 20022 的路线图中

## 报文流程

债权人机构根据预先达成的安排向债务人机构发送 pacs.010 以收取资金。债务人机构验证请求并结算或拒绝该直接借记。

## 相关报文

- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — Financial Institution Credit Transfer
- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.003.001.09`](/zh/pacs.003.001.09/) — FI to FI Customer Direct Debit

