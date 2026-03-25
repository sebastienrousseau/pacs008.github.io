---
title: "ISO 20022 용어집 | pacs008"
description: pacs.008 및 관련 메시지에서 사용되는 주요 ISO 20022 및 결제 메시지 용어의 정의.
lang: ko-KR
lastUpdated: true
image: /logo.svg
---

# ISO 20022 용어집

이 용어집은 ISO 20022 pacs 메시지와 이 사이트에서 사용되는 주요 용어, 약어 및 기술 개념을 정의합니다.

## A

**ACH** — Automated Clearing House (자동 청산소). 금융 기관 간 일괄 전자 결제를 처리하는 네트워크.

**AdrLine** — Address Line (주소 행). ISO 20022 우편 주소 구조의 자유 텍스트 주소 필드. 각 70자, 최대 7행. 2026년 11월까지 CBPR+를 위한 구조화 주소 요소로 대체될 예정.

**ACCP** — Accepted Customer Profile (고객 프로필 수락됨). 선행 검사(구문, 고객 프로필)가 통과되었음을 나타내는 pacs.002 상태 코드.

**ACSC** — Accepted Settlement Completed (결제 완료 수락됨). 채무자 계좌에서의 결제가 완료되었음을 확인하는 pacs.002 상태 코드.

**ACSP** — Accepted Settlement in Process (결제 처리 중 수락됨). 모든 검사가 통과되고 결제가 진행 중임을 나타내는 pacs.002 상태 코드.

## B

**BAH** — Business Application Header (head.001) (비즈니스 애플리케이션 헤더). SWIFT를 통한 전송을 위해 ISO 20022 비즈니스 메시지를 감싸는 표준화된 봉투. 라우팅 정보, 메시지 정의 식별자, 발신/수신 BIC 포함.

**BIC** — Business Identifier Code (ISO 9362) (사업자 식별 코드). 금융 기관을 고유하게 식별하는 8 또는 11자리 코드. 형식: BBBBCCLL (은행 코드 + 국가 + 지역), 선택적 BBB 지점 코드 포함.

## C

**CBPR+** — Cross-Border Payments and Reporting Plus. MT에서 ISO 20022로의 국제 결제 메시징 마이그레이션을 위한 SWIFT 프로그램. 2023년 3월 가동 시작.

**CdtTrfTxInf** — Credit Transfer Transaction Information (신용 이체 거래 정보). 결제 세부 정보, 당사자, 금액, 송금 정보를 포함하는 pacs.008의 주요 거래 수준 빌딩 블록.

**ChrgBr** — Charge Bearer (수수료 부담자). 거래 수수료를 누가 지불하는지 지정. 값: DEBT (채무자), CRED (채권자), SHAR (분담), SLEV (서비스 수준, SEPA 전용).

**CLRG** — 청산 시스템 결제. TARGET2, EURO1 또는 CHIPS와 같은 청산 시스템을 통해 자금이 이동하는 결제 방법.

**COVE** — 커버 방식 결제. 별도의 pacs.009 커버 결제가 코레스 은행 간 자금 조달을 처리하고, pacs.008이 고객 데이터를 직접 전달하는 결제 방법.

**CSM** — Clearing and Settlement Mechanism (청산 결제 메커니즘). 참여 기관 간 결제 지시를 처리하고 결제하는 인프라.

## D

**Dbtr** — Debtor (채무자). 자금을 지불하고 결제를 개시하는 당사자. pacs.008에서 Dbtr 요소는 채무자의 이름, 우편 주소, 식별 정보, 거주국을 포함.

**DbtrAgt** — Debtor Agent (채무자 에이전트). 채무자의 계좌를 관리하고 pacs.008 지시를 발송하는 금융 기관.

## E

**E2E ID** — End-to-End Identification (EndToEndId) (엔드투엔드 식별). 발신자가 할당한 참조로, 결제 체인 내 모든 에이전트를 통해 변경되지 않아야 함. 고객 수준 추적에 사용.

**EPC** — European Payments Council (유럽 결제 위원회). 신용 이체 및 자동이체를 위한 SEPA 결제 체계 규칙서를 관리하는 기관.

## F

**FI** — Financial Institution (금융 기관). 결제 청산 및 결제에 참여하는 은행 또는 기타 기관.

**FIToFI** — Financial Institution to Financial Institution (금융 기관 간). pacs 메시지가 운영되는 은행 간 도메인을 설명.

## G

**gpi** — Global Payments Innovation (글로벌 결제 혁신). 더 빠르고 투명한 국제 결제를 위한 SWIFT 이니셔티브. 클라우드 기반 Tracker를 통한 UETR 엔드투엔드 추적 사용.

**GrpHdr** — Group Header (그룹 헤더). pacs 메시지의 메시지 수준 메타데이터 블록. MsgId, CreDtTm, NbOfTxs, 결제 정보, 결제 유형 정보 포함.

## H

**하이브리드 주소** — 구조화 요소(StrtNm, TwnNm, Ctry)와 비구조화 AdrLine 요소를 결합한 우편 주소 형식. 2026년 11월 구조화 주소 마감일 이전 전환 기간 동안 허용.

## I

**IBAN** — International Bank Account Number (ISO 13616) (국제 은행 계좌 번호). 국제 및 국내 결제에 사용되는 표준화된 계좌 번호 형식. ISO 7064 Mod 97-10 체크섬으로 검증.

**INDA** — Instructed Agent settlement (피지시 에이전트 결제). 채무자 에이전트가 노스트로 계좌를 보유한 피지시 에이전트의 장부에서 자금이 결제되는 방법.

**INGA** — Instructing Agent settlement (지시 에이전트 결제). 피지시 에이전트가 노스트로 계좌를 보유한 지시 에이전트의 장부에서 자금이 결제되는 방법.

**InstrId** — Instruction Identification (지시 식별). 결제 체인 내 인접 에이전트 간 점대점 참조. 각 홉에서 변경될 수 있음.

**IntrBkSttlmAmt** — Interbank Settlement Amount (은행 간 결제 금액). 지시 에이전트와 피지시 에이전트 간 결제 통화로 결제되는 금액.

**ISO 20022** — 금융 기관 간 전자 데이터 교환을 위한 국제 표준. 결제, 증권, 무역 금융 및 기타 금융 분야를 위한 공통 데이터 모델과 XML 기반 메시지 형식을 정의.

## L

**LEI** — Legal Entity Identifier (ISO 17442) (법인 식별자). 금융 거래에 참여하는 법적 실체를 고유하게 식별하는 20자리 영숫자 코드. 당사자의 OrgId/LEI 및 에이전트의 FinInstnId/LEI에서 사용.

## M

**MsgId** — Message Identification (메시지 식별). 발송 에이전트가 할당하는 메시지 봉투의 고유 식별자. 결제 체인의 각 홉에서 변경.

**MT** — Message Type (메시지 유형). SWIFT의 레거시 메시지 형식 (예: 고객 신용 이체용 MT103, 금융 기관 간 이체용 MT202). ISO 20022 MX 메시지로 대체되는 중.

**MX** — SWIFT가 사용하는 ISO 20022 XML 메시지 형식. MX 메시지는 CBPR+ 하에서 국제 결제의 MT 메시지를 대체.

## N

**NbOfTxs** — Number of Transactions (거래 수). 메시지에 포함된 개별 거래 수를 나타내는 Group Header 요소.

## P

**pacs** — Payments Clearing and Settlement (결제 청산 및 결제). 은행 간 결제 메시지를 다루는 ISO 20022 비즈니스 도메인.

**pacs.002** — 금융 기관 간 결제 상태 보고. 이전 결제 지시의 처리 상태(수락, 거부, 대기, 결제 완료)를 보고.

**pacs.003** — 금융 기관 간 고객 자동이체. 자금 수금을 위해 은행 간 고객 자동이체 지시를 전달.

**pacs.004** — 결제 반환. 결제를 적용할 수 없을 때 결제 체인을 통해 결제된 자금을 반환.

**pacs.007** — 금융 기관 간 결제 취소. 원래 발신자로부터 체인을 통해 결제 지시를 취소.

**pacs.008** — 금융 기관 간 고객 신용 이체. 고객 신용 이체의 주요 은행 간 메시지. MT103을 대체.

**pacs.009** — 금융 기관 신용 이체. 은행 자체 명의로 은행 간 자금을 이동. 자금 조달, 커버 결제, 유동성 관리를 포함. MT202/MT202COV를 대체.

**pacs.010** — 금융 기관 자동이체. 양자 협약 하에 한 은행이 다른 은행의 자체 계좌를 차변하는 것을 허용.

**pacs.028** — 금융 기관 간 결제 상태 요청. pacs.002 업데이트가 도착하지 않은 경우 이전 결제의 상태를 능동적으로 요청.

**pain** — Payment Initiation (결제 개시). 고객에서 은행으로의 메시지를 다루는 ISO 20022 비즈니스 도메인 (예: 신용 이체 개시용 pain.001).

**PII** — Personally Identifiable Information (개인 식별 정보). 개인을 식별할 수 있는 데이터. pacs008은 구조화 로그에서 PII를 마스킹.

**PstlAdr** — Postal Address (우편 주소). pacs 메시지에서 당사자에 사용되는 주소 구조. 구조화(StrtNm, TwnNm, Ctry) 및 비구조화(AdrLine) 형식을 지원.

## R

**RJCT** — Rejected (거부됨). 결제가 거부되었음을 나타내는 pacs.002 상태 코드.

**RmtInf** — Remittance Information (송금 정보). pacs.008에서 전달되는 결제 참조 데이터. 비구조화(자유 텍스트, 최대 140자) 및 구조화(문서 참조, 금액, 채권자 참조) 형식 지원.

**RTGS** — Real-Time Gross Settlement (실시간 총액 결제). 거래가 개별적으로 실시간 결제되는 결제 시스템 (예: TARGET2, Fedwire, CHAPS).

## S

**SCT** — SEPA Credit Transfer (SEPA 신용 이체). EPC가 관리하는 pacs.008을 사용하는 유로 신용 이체 체계.

**SCT Inst** — SEPA Instant Credit Transfer (SEPA 즉시 신용 이체). SCT의 즉시 결제 변형으로, 10초 이내 결제.

**SDD** — SEPA Direct Debit (SEPA 자동이체). EPC가 관리하는 pacs.003을 사용하는 유로 자동이체 체계.

**SEPA** — Single Euro Payments Area (단일 유로 결제 지역). 36개 유럽 국가에 걸친 유로 신용 이체, 자동이체, 카드 결제를 포괄하는 결제 통합 이니셔티브.

**SLEV** — Service Level (서비스 수준). SEPA 필수 수수료 부담 코드. 수수료가 체계 규칙을 따르며 이체 금액에서 공제되지 않음을 의미.

**STP** — Straight-Through Processing (직통 처리). 수동 개입 없이 자동화된 엔드투엔드 결제 처리.

**SttlmMtd** — Settlement Method (결제 방법). 은행 간 결제 방식을 정의: CLRG (청산 시스템), INDA (피지시 에이전트), INGA (지시 에이전트) 또는 COVE (커버 결제).

## T

**TxId** — Transaction Identification (거래 식별). 첫 번째 지시 에이전트가 할당한 은행 간 참조. 후속 에이전트가 변경해서는 안 됨.

## U

**UETR** — Unique End-to-End Transaction Reference (고유 엔드투엔드 거래 참조). 채무자 에이전트가 생성하여 gpi 추적을 위해 결제의 모든 구간에서 변경 없이 전달되는 UUID v4 식별자.

## X

**XSD** — XML Schema Definition (XML 스키마 정의). ISO 20022 XML 메시지의 구조, 요소, 데이터 유형을 정의하는 공식 스키마.

**XXE** — XML External Entity (XML 외부 엔티티). XML 파싱의 보안 취약점. pacs008은 defusedxml을 사용하여 XXE 공격 방지.

## 참고 자료

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ standards programme](https://www.swift.com/standards/iso-20022)
