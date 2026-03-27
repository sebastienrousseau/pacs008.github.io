---
title: "Chính sách biên tập | pacs008"
description: How pacs008.com content is created, reviewed, and maintained. Sources, review process, and update schedule.
lang: vi-VN
lastUpdated: true
image: /logo.webp
---

# Chính sách biên tập

How content on pacs008.com is created, reviewed, and kept current.

## Sources

All message documentation is based on primary sources:

- [ISO 20022 danh mục định nghĩa thông điệp](https://www.iso20022.org/iso-20022-message-definitions) cho thông số kỹ thuật và lịch sử phiên bản.
- [SWIFT CBPR+ hướng dẫn sử dụng](https://www.swift.com/standards/iso-20022) cho bối cảnh thanh toán xuyên biên giới.
- [EPC SEPA sổ tay quy tắc chuyển khoản tín dụng](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-credit-transfer/sepa-credit-transfer-rulebook-and) cho các quy tắc chuyển khoản tín dụng đồng euro.
- [EPC SEPA sổ tay quy tắc chuyển khoản tín dụng tức thì](https://www.europeanpaymentscouncil.eu/what-we-do/epc-payment-schemes/sepa-instant-credit-transfer/sepa-instant-credit-transfer-rulebook) cho các quy tắc thanh toán tức thì.

## Quy trình rà soát nội dung

Mỗi trang trên pacs008.com đều trải qua quy trình rà soát có cấu trúc trước khi xuất bản. Nội dung mới bắt đầu từ bản nháp dựa trên tài liệu nguồn chính. Bản nháp được kiểm tra tính chính xác kỹ thuật so với danh mục thông điệp ISO 20022 và tài liệu hệ thống liên quan. Số phiên bản, mã định danh đăng ký và định nghĩa trường được xác minh với các mục trong danh mục chính thức.

Sau rà soát ban đầu, nội dung trải qua kiểm tra cấu trúc để đảm bảo tính nhất quán với các trang hiện có. Điều hướng, tham chiếu chéo và thuật ngữ được chuẩn hóa trên toàn bộ trang web. Ngày rà soát hiển thị trên mỗi trang thông điệp phản ánh lần xác minh gần nhất với nguồn chính.

## Review process

Each message page shows a review date. Reviews check that version numbers, registration status, and scheme context still match the primary sources listed above.

Content is updated when ISO 20022 publishes new catalogue versions, when SWIFT releases updated usage guidelines, or when scheme rules change.

## Độ chính xác kỹ thuật

Nội dung kỹ thuật tuân theo các định nghĩa thông điệp ISO 20022 được công bố trong danh mục chính thức. Tên trường, kiểu dữ liệu và quy tắc lực lượng khớp với các lược đồ XSD cho mỗi phiên bản thông điệp. Khi cách sử dụng cụ thể của hệ thống khác với tiêu chuẩn cơ sở, tài liệu hệ thống liên quan được trích dẫn trực tiếp.

Các ví dụ mã trong tài liệu API được kiểm tra với phiên bản hiện tại của bộ công cụ pacs008. Các lệnh CLI, điểm cuối API và phương thức thư viện Python phản ánh gói đã xuất bản trên PyPI. Các ví dụ được cập nhật với mỗi bản phát hành mới để duy trì đồng bộ với bộ công cụ.

## Phương pháp dịch thuật

pacs008.com có sẵn trong 22 ngôn ngữ. Toàn bộ nội dung được tạo bằng tiếng Anh. Các trang đã dịch được tạo từ tài liệu nguồn tiếng Anh đã rà soát bằng tập lệnh xây dựng giữ nguyên cấu trúc trang, phân cấp tiêu đề và đích liên kết trên tất cả các ngôn ngữ.

Các thuật ngữ kỹ thuật, mã định danh ISO và mã tiêu chuẩn không được dịch để tránh mơ hồ. Các thuật ngữ như pacs.008.001.13, BIC, IBAN và CBPR+ xuất hiện ở dạng tiêu chuẩn trong mọi ngôn ngữ. Nội dung phi kỹ thuật được dịch để đọc tự nhiên trong mỗi ngôn ngữ đích. Bản dịch được rà soát tính nhất quán cấu trúc và tái tạo khi tài liệu nguồn tiếng Anh thay đổi.

## Tần suất cập nhật

Nội dung được cập nhật để phản hồi ba yếu tố kích hoạt. Thứ nhất, khi ISO 20022 xuất bản phiên bản danh mục thông điệp mới ảnh hưởng đến định nghĩa thông điệp pacs. Thứ hai, khi SWIFT phát hành hướng dẫn sử dụng CBPR+ cập nhật hoặc thời hạn chuyển đổi. Thứ ba, khi EPC cập nhật sổ tay quy tắc chuyển khoản tín dụng SEPA hoặc chuyển khoản tín dụng tức thì SEPA.

Bộ công cụ pacs008 tuân theo phiên bản ngữ nghĩa. Mỗi bản phát hành mới được phản ánh trong tài liệu API và nhật ký thay đổi. Trang web được xây dựng lại và triển khai lại với mỗi lần cập nhật nội dung hoặc bộ công cụ.

## Content generation

Page structure and translated content are generated from reviewed English source material using a build script. This ensures structural consistency across all 22 languages while keeping technical terms and ISO identifiers in their standard form.

## Accuracy and limits

pacs008.com aims to be accurate and current, but it is not a substitute for scheme rulebooks, counterparty agreements, or legal advice. Always confirm implementation details against the primary sources and the specific rules of the market or scheme you operate in.

## Contact

If you find an error or have a correction, please open an issue in the [pacs008 repository](https://github.com/sebastienrousseau/pacs008/issues).
