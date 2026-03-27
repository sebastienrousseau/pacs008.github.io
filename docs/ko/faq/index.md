---
title: "ISO 20022 자주 묻는 질문 | pacs008"
description: Common questions about ISO 20022 pacs messages, CBPR+ migration, message selection, implementation, and the pacs008 toolkit.
lang: ko-KR
lastUpdated: true
image: /logo.webp
---

# ISO 20022 자주 묻는 질문

Common questions about ISO 20022 pacs messages, how they work together, and how pacs008 helps teams implement them.

## 일반 사항

### ISO 20022란 무엇인가요?

ISO 20022는 금융 메시징을 위한 국제 표준입니다. 금융기관 간에 교환되는 결제 메시지를 위한 공통 언어와 모델을 정의합니다. SWIFT MT와 같은 기존 형식과 달리, ISO 20022는 XML을 사용하며 당사자, 금액, 참조 정보에 대해 더 풍부하고 구조화된 데이터를 지원합니다.

### pacs 메시지란 무엇인가요?

pacs(payments clearing and settlement) 메시지 패밀리는 은행 간 결제 지시, 상태 보고, 반환, 취소 및 조회를 다룹니다. pacs.002, pacs.003, pacs.004, pacs.007, pacs.008, pacs.009, pacs.010, pacs.028이 포함됩니다. 각 메시지는 결제 수명주기에서 고유한 역할을 수행합니다.

### pacs 메시지와 SWIFT MT 메시지의 차이점은 무엇인가요?

SWIFT MT 메시지는 필드 태그 기반의 평면 형식을 사용합니다(예: 고객 신용 이체를 위한 MT103). pacs 메시지는 더 풍부한 데이터 구조를 갖춘 계층형 XML을 사용합니다. 주요 차이점에는 메시지당 다중 거래 지원, 구조화된 당사자 식별(LEI, 다중 ID), 구조화된 우편 주소, 구조화된 송금 정보가 포함됩니다. MT103은 pacs.008에, MT202는 pacs.009에 대응하며, MT199 상태 텍스트는 pacs.002로 대체됩니다.

### pain 메시지와 pacs 메시지의 관계는 무엇인가요?

pain(payment initiation) 메시지는 고객과 은행 사이에서 전송됩니다. pacs 메시지는 은행 간에 전송됩니다. 채무자 은행의 pain.001 고객 신용 이체 개시는 pacs.008 은행 간 지시로 변환됩니다. 두 영역은 공통 데이터 요소를 공유하지만 결제 체인의 서로 다른 구간을 담당합니다.

## 메시지 선택

### pacs.008은 언제 사용하나요?

은행 간 고객 신용 이체 지시에 pacs.008을 사용합니다. 채무자 및 채권자 당사자 데이터, 금액, 송금 정보, 결제 세부 사항을 전달합니다. 국내(SEPA) 또는 국경 간(CBPR+) 여부와 관계없이 은행 간 네트워크를 통해 고객 결제를 전송하는 주요 메시지입니다.

### pacs.008 대신 pacs.009를 언제 사용하나요?

기관 자체 계좌 이체, 자금 조달 구간, 커버 결제에 pacs.009를 사용합니다. 채무자를 대신하여 고객 결제를 전달하는 pacs.008과 달리, pacs.009는 은행 자체 명의로 은행 간 자금을 이동합니다. 커버 방식 흐름에서 pacs.009가 자금 조달을 담당하고 pacs.008이 별도 경로로 고객 지시를 전달합니다.

### pacs.004와 pacs.007의 차이점은 무엇인가요?

pacs.004는 결제 완료된 자금을 수취 측에서 체인을 통해 되돌려 보냅니다. pacs.007은 원래 지시 측에서 체인을 따라 앞으로 결제를 취소합니다. 수취 은행이 결제 완료 후 입금할 수 없을 때 pacs.004를 사용합니다. 송금인이 오류, 중복 또는 사기를 발견했을 때 pacs.007을 사용합니다.

### pacs.002를 기다리지 않고 pacs.028을 언제 사용하나요?

적시에 pacs.002 업데이트를 수신하지 못한 결제의 상태를 능동적으로 요청해야 할 때 pacs.028을 사용합니다. pacs.002는 이벤트 기반이며(수취 에이전트가 주도적으로 전송), pacs.028은 예외 기반입니다(지시 에이전트가 요청). 지연, 불명확 또는 누락된 결제 업데이트에 pacs.028을 사용하며, 일상적인 트래픽으로 사용하지 않습니다.

### pacs.003은 무엇에 사용되나요?

pacs.003은 은행 간 고객 자동이체 지시를 전달합니다. 채권자 에이전트가 채무자 에이전트에게 전송하여 자금을 회수합니다. 유효한 위임 참조가 필요하며 SEPA Core 및 B2B 자동이체 제도를 지원합니다. 신용 이체 또는 기관 자체 계좌 자동이체에는 사용되지 않습니다.

### pacs.010은 무엇에 사용되나요?

pacs.010은 금융기관 간 자체 계좌에 대한 자동이체를 처리합니다. 수수료, 마진 콜, 양자 협정에 따른 유사 의무와 같은 은행 간 회수에 사용됩니다. 고객 자동이체 또는 신용 이체에는 사용되지 않습니다.

## 메시지 구조

### Group Header(GrpHdr)란 무엇인가요?

Group Header는 pacs 메시지당 정확히 한 번 나타납니다. 메시지 식별자(MsgId), 생성 타임스탬프(CreDtTm), 거래 수(NbOfTxs), 결제 정보(SttlmInf), 그리고 선택적으로 총 은행 간 결제 금액과 결제 유형 정보를 포함합니다. 개별 비즈니스 거래가 아닌 메시지 봉투를 식별합니다.

### pacs.008의 결제 식별자는 무엇인가요?

pacs.008은 네 가지 주요 식별자를 사용합니다. MsgId는 메시지 봉투를 식별하며 각 홉에서 변경됩니다. InstrId는 인접 에이전트 간 점대점 참조이며 홉마다 변경될 수 있습니다. EndToEndId는 송금인이 설정하며 체인의 어떤 에이전트도 변경해서는 안 됩니다. TxId는 최초 지시 에이전트가 할당하며 은행 간 공간에서 일정하게 유지됩니다. UETR은 종단 간 추적을 위해 모든 구간에서 변경 없이 유지되는 UUID입니다.

### 어떤 결제 방법이 사용 가능한가요?

네 가지 결제 방법이 정의되어 있습니다. CLRG는 TARGET2, EURO1, CHIPS와 같은 청산 시스템을 통해 결제합니다. INDA는 채무자 에이전트가 계좌를 보유한 피지시 에이전트의 장부에서 결제합니다. INGA는 피지시 에이전트가 계좌를 보유한 지시 에이전트의 장부에서 결제합니다. COVE는 pacs.009가 전달하는 별도의 커버 결제를 통해 결제합니다.

### 수수료 부담 코드는 무엇을 의미하나요?

DEBT는 모든 수수료를 채무자가 부담합니다(MT103 OUR에 해당). CRED는 모든 수수료를 채권자가 부담합니다(BEN에 해당). SHAR는 채무자와 채권자 에이전트 간에 수수료를 분담합니다(SHA에 해당). SLEV는 수수료가 서비스 수준 규칙을 따르며 SEPA 신용 이체에 필수입니다.

## CBPR+ 및 마이그레이션

### CBPR+란 무엇인가요?

CBPR+(Cross-Border Payments and Reporting Plus)는 국경 간 결제 메시징에 ISO 20022를 도입하기 위한 SWIFT의 프로그램입니다. 2023년 3월에 가동되었으며 MT 메시지를 pacs 동등물로 대체합니다. CBPR+는 모든 상태 통신에 pacs.002를 의무화하고, 더 풍부한 당사자 데이터와 구조화된 주소를 지원하며, gpi를 통한 UETR 기반 추적을 사용합니다.

### MT/MX 공존 기간에 어떤 변화가 있었나요?

국경 간 결제 지시에 대한 공존 기간은 2025년 11월에 종료되었습니다. 이후 CBPR+ 메시지는 ISO 20022(MX) 형식을 사용해야 합니다. 전환 기간 동안 MT와 MX 간 변환을 수행하던 번역 서비스는 새로운 흐름에 더 이상 제공되지 않습니다. 은행은 이제 네이티브 pacs 메시지를 직접 송수신해야 합니다.

### 2026년 11월 구조화 주소 마감일이란 무엇인가요?

2026년 11월부터 SWIFT CBPR+는 국경 간 결제 메시지에 구조화된 우편 주소를 요구합니다. 비구조화 주소 라인(AdrLine만 사용)은 주요 당사자 필드에서 더 이상 허용되지 않습니다. 최소한 TwnNm과 Ctry가 필요하며, StrtNm과 BldgNb 또는 PstBx가 권장됩니다. 이를 통해 제재 심사가 개선되고 수동 수정이 줄어듭니다.

### pacs.008은 MT103을 어떻게 대체하나요?

pacs.008은 고객 신용 이체를 위해 MT103 및 MT103+를 대체합니다. 주요 매핑: MT103 필드 20은 MsgId 또는 InstrId에, 필드 32A는 IntrBkSttlmDt와 IntrBkSttlmAmt로 분리되며, 필드 50a는 Dbtr 및 DbtrAcct에, 필드 59a는 Cdtr 및 CdtrAcct에, 필드 70은 RmtInf에, 필드 71A는 ChrgBr에 대응합니다. pacs.008은 UETR, 구조화된 송금 정보, LEI 식별을 추가하고 메시지당 다중 거래를 지원합니다.

### pacs.009는 MT202를 어떻게 대체하나요?

pacs.009는 기관 간 이체를 위해 MT202 및 MT202COV를 대체합니다. 커버 방식 흐름에서 MT202COV(자금 조달과 기본 고객 데이터를 모두 전달)가 명확하게 분리됩니다. pacs.009가 자금 조달 구간을 담당하고 pacs.008이 고객 지시를 직접 전달합니다. 이러한 분리는 데이터 품질을 개선하고 대사 문제를 줄여줍니다.

## 기술 세부 사항

### 구조화 주소와 비구조화 주소란 무엇인가요?

구조화 주소는 각 구성 요소에 별도의 XML 요소를 사용합니다. StrtNm(거리), BldgNb(건물 번호), PstCd(우편번호), TwnNm(도시), Ctry(국가), 그리고 Flr, Room, DstrctNm과 같은 선택적 요소가 있습니다. 비구조화 주소는 자유 텍스트로 최대 7개의 AdrLine 요소를 사용합니다. 하이브리드 주소는 전환 기간 동안 두 가지를 결합합니다. 2026년 11월 이후 CBPR+는 구조화 형식을 요구합니다.

### UETR란 무엇이며 gpi 추적은 어떻게 작동하나요?

UETR(Unique End-to-End Transaction Reference)는 채무자 에이전트가 생성하고 결제의 모든 구간에서 변경 없이 전달되는 UUID v4 식별자입니다. pacs.008, pacs.009, pacs.002, pacs.004, pacs.007, pacs.028에 나타납니다. SWIFT gpi는 UETR을 사용하여 클라우드 기반 Tracker 데이터베이스를 통해 결제를 추적합니다. 각 에이전트가 수신 및 처리를 확인하여 종단 간 가시성과 SLA 모니터링이 가능합니다.

### 일반적인 pacs.002 상태 코드는 무엇인가요?

ACCP는 고객 프로필 검사 후 수락을 의미합니다. ACSP는 수락되었으며 결제가 진행 중임을 의미합니다. ACSC는 채무자 계좌에서 결제가 완료되었음을 의미합니다. RJCT는 거부를 의미합니다(StsRsnInf에 사유 코드 포함). PDNG은 추가 처리 대기를 의미합니다. RCVD는 수신되었으나 아직 처리되지 않았음을 의미합니다. 각 상태에는 AC01(잘못된 계좌 번호), AM04(잔액 부족), RC01(잘못된 BIC)과 같은 구조화된 사유 코드가 포함될 수 있습니다.

### pacs.004의 일반적인 반환 사유 코드는 무엇인가요?

자주 사용되는 반환 사유 코드에는 AC01(잘못된 계좌 번호), AC04(해지 계좌), AC06(차단 계좌), AM04(잔액 부족), BE04(채권자 주소 누락), CUST(고객 요청), DUPL(중복 결제), FOCR(취소 요청에 따른 처리), FR01(사기)이 포함됩니다. 전체 목록은 ISO 20022 External Code Sets에 정의되어 있습니다.

### 구조화된 송금 정보란 무엇인가요?

pacs.008의 구조화된 송금 정보는 RmtInf/Strd 요소를 사용하여 문서 참조(송장 번호, 대변 메모), 금액(만기, 송금, 세금, 할인), 채권자 참조(ISO 11649 RF 참조)를 전달합니다. 이를 통해 자동 송장 매칭과 대사가 가능합니다. 일반적인 문서 유형 코드에는 CINV(상업 송장), CREN(대변 메모), SOAC(계정 명세서)가 포함됩니다.

### LEI란 무엇이며 언제 사용되나요?

LEI(Legal Entity Identifier)는 ISO 17442에 따른 20자 영숫자 코드입니다. 금융 거래에 참여하는 법인을 고유하게 식별합니다. pacs 메시지에서 LEI는 당사자의 OrgId/LEI와 에이전트의 FinInstnId/LEI에 나타납니다. CBPR+는 당사자 및 에이전트 식별에 LEI 사용을 점점 더 권장합니다. LEI는 엔티티 구분을 개선하고 규제 보고 요건을 지원합니다.

## pacs008 도구에 대하여

### pacs008은 무엇을 하나요?

pacs008은 ISO 20022 결제 메시지를 생성, 검증, 전송하는 Python 도구입니다. CSV, JSON, JSONL, SQLite, Parquet 소스에서 결제 데이터를 읽고, JSON Schema 및 XSD에 대해 검증하며, IBAN 및 BIC 식별자를 확인하고, SWIFT 문자 준수를 위해 데이터를 정리하며, XML 파일을 출력합니다. REST API, CLI, Python 라이브러리를 제공합니다.

### pacs008은 어떤 메시지 유형을 지원하나요?

pacs008은 8가지 메시지 유형을 지원합니다: pacs.002.001.12(상태 보고), pacs.003.001.09(고객 자동이체), pacs.004.001.11(결제 반환), pacs.007.001.11(결제 취소), pacs.008.001.13(고객 신용 이체), pacs.009.001.10(금융기관 신용 이체), pacs.010.001.05(금융기관 자동이체), pacs.028.001.05(결제 상태 요청).

### pacs008은 2026년 구조화 주소 마감일에 어떻게 도움이 되나요?

pacs008은 XML 생성 전에 구조화 및 하이브리드 우편 주소 필드를 검증합니다. 2026년 11월 마감일 이후 실패할 비구조화 주소 데이터를 표시하고, 마감일 전 하이브리드 형식과 마감일 후 구조화 전용 형식을 모두 지원하며, CI 파이프라인과 배치 검증 워크플로에 주소 품질 검사를 통합합니다.

### pacs008은 XML을 생성하지 않고 데이터를 검증할 수 있나요?

네. CLI 플래그 `--dry-run` 또는 API 엔드포인트 `POST /validate`를 사용하여 XML을 생성하지 않고 결제 데이터를 검증할 수 있습니다. 검증 파이프라인은 JSON Schema 준수, IBAN 형식 및 체크섬, BIC 구조, SWIFT 문자 준수를 확인합니다. 종료 코드 또는 API 응답으로 검증 통과 여부를 확인할 수 있습니다.

## 참고 자료

- [ISO 20022 message definitions catalogue](https://www.iso20022.org/iso-20022-message-definitions)
- [ISO 20022 external code sets](https://www.iso20022.org/external_code_list.page)
- [SWIFT CBPR+ ISO 20022 usage guidelines](https://www.swift.com/standards/iso-20022)
- [SWIFT CBPR+ migration roadmap](https://www.swift.com/swift-resource/252463/download)
- [EPC SEPA Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and)
- [EPC SEPA Instant Credit Transfer rulebook](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook)
- [SWIFT gpi](https://www.swift.com/our-solutions/swift-gpi)

