---
title: "ISO 20022 용어집 | pacs008"
description: Definitions of key ISO 20022 and payment messaging terms used in pacs.008 and related messages. Covers SWIFT, CBPR+, IBAN, BIC, settlement methods, and...
lang: ko-KR
lastUpdated: true
image: /logo.webp
---

# ISO 20022 용어집

Key terms, abbreviations, and technical concepts used across ISO 20022 pacs messages and this site.

## A

**ACH** — Automated Clearing House. 금융기관 간 배치 전자 결제를 처리하는 네트워크입니다.

**AdrLine** — Address Line. ISO 20022 우편 주소 구조의 자유 텍스트 주소 필드입니다. 각 70자까지 최대 7개 라인을 지원합니다. 2026년 11월까지 CBPR+용 구조화 주소 요소로 대체되고 있습니다.

**ACCP** — Accepted Customer Profile. 사전 검사(구문, 고객 프로필)를 통과했음을 나타내는 pacs.002 상태 코드입니다.

**ACSC** — Accepted Settlement Completed. 채무자 계좌에서 결제가 완료되었음을 확인하는 pacs.002 상태 코드입니다.

**ACSP** — Accepted Settlement in Process. 모든 검사를 통과했으며 결제가 진행 중임을 나타내는 pacs.002 상태 코드입니다.

## B

**BAH** — Business Application Header(head.001). SWIFT를 통한 전송을 위해 ISO 20022 비즈니스 메시지를 감싸는 표준화된 봉투입니다. 라우팅 정보, 메시지 정의 식별자, 송수신 BIC를 포함합니다.

**BIC** — Business Identifier Code(ISO 9362). 금융기관을 고유하게 식별하는 8자 또는 11자 코드입니다. 형식: BBBBCCLL(은행 코드 + 국가 + 지역), 선택적으로 BBB 지점 코드를 포함합니다.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. 국경 간 결제 메시징을 MT에서 ISO 20022로 전환하기 위한 SWIFT의 프로그램입니다. 2023년 3월에 가동되었습니다.

**CdtTrfTxInf** — Credit Transfer Transaction Information. pacs.008의 주요 거래 수준 구성 요소로, 결제 세부 사항, 당사자, 금액, 송금 정보를 포함합니다.

**ChrgBr** — Charge Bearer. 거래 수수료의 부담 주체를 지정합니다. 값: DEBT(채무자), CRED(채권자), SHAR(분담), SLEV(서비스 수준, SEPA 전용).

**CLRG** — Clearing system settlement. TARGET2, EURO1, CHIPS와 같은 청산 시스템을 통해 자금이 이동하는 결제 방법입니다.

**COVE** — Cover method settlement. 별도의 pacs.009 커버 결제가 환거래 간 자금 조달을 처리하고, pacs.008이 고객 데이터를 직접 전달하는 결제 방법입니다.

**CSM** — Clearing and Settlement Mechanism. 참여 기관 간 결제 지시를 처리하고 결제하는 인프라입니다.

## D

**Dbtr** — Debtor. 자금을 지급해야 하며 결제를 개시하는 당사자입니다. pacs.008에서 Dbtr 요소는 채무자의 이름, 우편 주소, 식별, 거주 국가를 전달합니다.

**DbtrAgt** — Debtor Agent. 채무자의 계좌를 관리하며 pacs.008 지시를 전송하는 금융기관입니다.

## E

**E2E ID** — End-to-End Identification(EndToEndId). 송금인이 할당한 참조로 결제 체인의 모든 에이전트에 걸쳐 변경 없이 유지되어야 합니다. 고객 수준 추적에 사용됩니다.

**EPC** — European Payments Council. 신용 이체 및 자동이체를 위한 SEPA 결제 제도 규칙서를 관리하는 기관입니다.

## F

**FI** — Financial Institution. 결제 청산 및 결제에 참여하는 은행 또는 기타 기관입니다.

**FIToFI** — Financial Institution to Financial Institution. pacs 메시지가 운용되는 은행 간 영역을 나타냅니다.

## G

**gpi** — Global Payments Innovation. 더 빠르고 투명한 국경 간 결제를 위한 SWIFT의 이니셔티브입니다. 클라우드 기반 Tracker를 통해 UETR로 종단 간 추적을 수행합니다.

**GrpHdr** — Group Header. pacs 메시지의 메시지 수준 메타데이터 블록입니다. MsgId, CreDtTm, NbOfTxs, 결제 정보, 결제 유형 정보를 포함합니다.

## H

**Hybrid address** — 하이브리드 주소. 구조화 요소(StrtNm, TwnNm, Ctry)와 비구조화 AdrLine 요소를 결합한 우편 주소 형식입니다. 2026년 11월 구조화 주소 마감일 전 전환 기간에 허용됩니다.

## I

**IBAN** — International Bank Account Number(ISO 13616). 국경 간 및 국내 결제에 사용되는 표준화된 계좌 번호 형식입니다. ISO 7064 Mod 97-10 체크섬으로 검증됩니다.

**INDA** — Instructed Agent settlement. 채무자 에이전트가 nostro 계좌를 보유한 피지시 에이전트의 장부에서 자금이 결제되는 방법입니다.

**INGA** — Instructing Agent settlement. 피지시 에이전트가 nostro 계좌를 보유한 지시 에이전트의 장부에서 자금이 결제되는 방법입니다.

**InstrId** — Instruction Identification. 결제 체인의 인접 에이전트 간 점대점 참조입니다. 각 홉에서 변경될 수 있습니다.

**IntrBkSttlmAmt** — Interbank Settlement Amount. 결제 통화로 지시 에이전트와 피지시 에이전트 간에 결제되는 금액입니다.

**ISO 20022** — 금융기관 간 전자 데이터 교환을 위한 국제 표준입니다. 결제, 증권, 무역 금융 및 기타 금융 영역을 위한 공통 데이터 모델과 XML 기반 메시지 형식을 정의합니다.

## L

**LEI** — Legal Entity Identifier(ISO 17442). 금융 거래에 참여하는 법인을 고유하게 식별하는 영숫자 20자 코드입니다. 당사자의 OrgId/LEI와 에이전트의 FinInstnId/LEI에 사용됩니다.

## M

**MsgId** — Message Identification. 송신 에이전트가 할당하는 메시지 봉투의 고유 식별자입니다. 결제 체인의 각 홉에서 변경됩니다.

**MT** — Message Type. SWIFT의 레거시 메시지 형식입니다(예: 고객 신용 이체를 위한 MT103, 금융기관 이체를 위한 MT202). ISO 20022 MX 메시지로 대체되고 있습니다.

**MX** — SWIFT가 사용하는 ISO 20022 XML 메시지 형식입니다. CBPR+ 하에서 국경 간 결제를 위한 MT 메시지를 대체합니다.

## N

**NbOfTxs** — Number of Transactions. 메시지에 포함된 개별 거래 수를 나타내는 Group Header 요소입니다.

## P

**pacs** — Payments Clearing and Settlement. 은행 간 결제 메시지를 다루는 ISO 20022 비즈니스 영역입니다.

**pacs.002** — FI to FI Payment Status Report. 이전 결제 지시의 처리 상태(수락, 거부, 대기, 결제 완료)를 보고합니다.

**pacs.003** — FI to FI Customer Direct Debit. 자금 회수를 위한 은행 간 고객 자동이체 지시를 전달합니다.

**pacs.004** — Payment Return. 결제를 적용할 수 없을 때 결제 체인을 통해 결제 완료된 자금을 되돌려 보냅니다.

**pacs.007** — FI to FI Payment Reversal. 원래 송신자로부터 체인을 따라 결제 지시를 취소합니다.

**pacs.008** — FI to FI Customer Credit Transfer. 고객 신용 이체를 위한 주요 은행 간 메시지입니다. MT103을 대체합니다.

**pacs.009** — Financial Institution Credit Transfer. 은행 자체 명의로 은행 간 자금을 이동합니다. 자금 조달, 커버 결제, 유동성 관리를 다룹니다. MT202/MT202COV를 대체합니다.

**pacs.010** — Financial Institution Direct Debit. 양자 협정에 따라 한 은행이 다른 은행의 자체 계좌에서 출금할 수 있게 합니다.

**pacs.028** — FI to FI Payment Status Request. pacs.002 업데이트가 도착하지 않은 이전 결제의 상태를 능동적으로 요청합니다.

**pain** — Payment Initiation. 고객-은행 메시지를 다루는 ISO 20022 비즈니스 영역입니다(예: 신용 이체 개시를 위한 pain.001).

**PII** — Personally Identifiable Information. 개인을 식별할 수 있는 데이터입니다. pacs008은 구조화 로그에서 PII를 마스킹합니다.

**PstlAdr** — Postal Address. pacs 메시지의 당사자에 사용되는 주소 구조입니다. 구조화(StrtNm, TwnNm, Ctry) 및 비구조화(AdrLine) 형식을 지원합니다.

## R

**RJCT** — Rejected. 결제가 거부되었음을 나타내는 pacs.002 상태 코드입니다.

**RmtInf** — Remittance Information. pacs.008에 포함되는 결제 참조 데이터입니다. 비구조화(자유 텍스트, 최대 140자) 및 구조화(문서 참조, 금액, 채권자 참조) 형식을 지원합니다.

**RTGS** — Real-Time Gross Settlement. 거래가 개별적으로 실시간 결제되는 결제 시스템입니다(예: TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer. EPC가 관리하며 pacs.008을 사용하는 유로 신용 이체 제도입니다.

**SCT Inst** — SEPA Instant Credit Transfer. SCT의 즉시 결제 변형으로, 10초 이내에 결제됩니다.

**SDD** — SEPA Direct Debit. EPC가 관리하며 pacs.003을 사용하는 유로 자동이체 제도입니다.

**SEPA** — Single Euro Payments Area. 36개 유럽 국가에서 유로 표시 신용 이체, 자동이체, 카드 결제를 아우르는 결제 통합 이니셔티브입니다.

**SLEV** — Service Level. SEPA에 필수인 수수료 부담 코드입니다. 이체 금액에서 공제 없이 제도 규칙에 따라 수수료를 적용함을 의미합니다.

**STP** — Straight-Through Processing. 수동 개입 없이 자동으로 처리되는 종단 간 결제 처리입니다.

**SttlmMtd** — Settlement Method. 은행 간 결제 방식을 정의합니다: CLRG(청산 시스템), INDA(피지시 에이전트), INGA(지시 에이전트), COVE(커버 결제).

## T

**TxId** — Transaction Identification. 최초 지시 에이전트가 할당하는 은행 간 참조입니다. 후속 에이전트가 변경해서는 안 됩니다.

## U

**UETR** — Unique End-to-End Transaction Reference. 채무자 에이전트가 생성하고 gpi 추적을 위해 결제의 모든 구간에서 변경 없이 전달되는 UUID v4 식별자입니다.

## X

**XSD** — XML Schema Definition. ISO 20022 XML 메시지의 구조, 요소, 데이터 유형을 정의하는 공식 스키마입니다.

**XXE** — XML External Entity. XML 파싱의 보안 취약점입니다. pacs008은 defusedxml을 사용하여 XXE 공격을 방지합니다.

## 참고 자료

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)

