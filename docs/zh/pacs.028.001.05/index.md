---
title: pacs.028.001.05 — FI to FI Payment Status Request | 简体中文
description: pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。
lang: zh-CN
lastUpdated: true
image: /logo.svg
---

# pacs.028.001.05 — FI to FI Payment Status Request

| | |
|---|---|
| **ISO 名称** | FIToFIPaymentStatusRequestV05 |
| **注册状态** | Registered |
| **年份** | 2019 |
| **版本** | 5 |

## 概述

pacs.028 消息由金融机构发送，用于查询先前发送的支付指令的状态。它无需等待主动推送的状态报告，即可实现对支付处理的主动追踪。

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

## CBPR+ 与方案背景

- 替代 MT199 状态查询模式和手动 SWIFT 消息查询
- CBPR+ 支持与原始消息标识符关联的结构化状态请求
- 基于 UETR 的 gpi 追踪减少了手动查询的需求
- 日益集成到自动化支付运营仪表板中

## 报文流程

指示代理向被指示代理发送 pacs.028 以请求特定支付的状态。被指示代理以包含当前处理状态的 pacs.002 进行响应。

## 相关报文

- [`pacs.002.001.12`](/zh/pacs.002.001.12/) — FI to FI Payment Status Report
- [`pacs.008.001.13`](/zh/pacs.008.001.13/) — FI to FI Customer Credit Transfer
- [`pacs.009.001.10`](/zh/pacs.009.001.10/) — Financial Institution Credit Transfer

