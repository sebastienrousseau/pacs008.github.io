export const LOCALES = [
  "en",
  "ar",
  "de",
  "es",
  "fr",
  "he",
  "hi",
  "id",
  "it",
  "ja",
  "ko",
  "nl",
  "pl",
  "pt",
  "ro",
  "ru",
  "th",
  "tr",
  "uk",
  "vi",
  "zh",
  "zh-tw"
] as const;

export type LocaleKey = (typeof LOCALES)[number];

export interface UiStrings {
  home: string;
  about: string;
  messageTypes: string;
  selectionGuide: string;
  api: string;
  contact: string;
  privacy: string;
  terms: string;
  github: string;
  pypi: string;
  docs: string;
  copyright: string;
}

const en: UiStrings = {
  home: "Home",
  about: "About",
  messageTypes: "Message Types",
  selectionGuide: "Selection Guide",
  api: "API",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms",
  github: "GitHub",
  pypi: "PyPI",
  docs: "Docs",
  copyright: "Copyright"
};

export const UI_STRINGS: Record<LocaleKey, UiStrings> = {
  en,
  ar: { home: "الرئيسية", about: "حول", messageTypes: "أنواع الرسائل", selectionGuide: "دليل الاختيار", api: "واجهة البرمجة", contact: "اتصل", privacy: "الخصوصية", terms: "الشروط", github: "GitHub", pypi: "PyPI", docs: "الوثائق", copyright: "حقوق النشر" },
  de: { home: "Start", about: "Über", messageTypes: "Nachrichtentypen", selectionGuide: "Auswahlhilfe", api: "API", contact: "Kontakt", privacy: "Datenschutz", terms: "Bedingungen", github: "GitHub", pypi: "PyPI", docs: "Dokumentation", copyright: "Urheberrecht" },
  es: { home: "Inicio", about: "Acerca de", messageTypes: "Tipos de mensaje", selectionGuide: "Guía de selección", api: "API", contact: "Contacto", privacy: "Privacidad", terms: "Términos", github: "GitHub", pypi: "PyPI", docs: "Documentación", copyright: "Derechos" },
  fr: { home: "Accueil", about: "À propos", messageTypes: "Types de messages", selectionGuide: "Guide de sélection", api: "API", contact: "Contact", privacy: "Confidentialité", terms: "Conditions", github: "GitHub", pypi: "PyPI", docs: "Documentation", copyright: "Droits d'auteur" },
  he: { home: "בית", about: "אודות", messageTypes: "סוגי הודעות", selectionGuide: "מדריך בחירה", api: "API", contact: "יצירת קשר", privacy: "פרטיות", terms: "תנאים", github: "GitHub", pypi: "PyPI", docs: "תיעוד", copyright: "זכויות יוצרים" },
  hi: { home: "होम", about: "परिचय", messageTypes: "संदेश प्रकार", selectionGuide: "चयन मार्गदर्शिका", api: "API", contact: "संपर्क", privacy: "गोपनीयता", terms: "शर्तें", github: "GitHub", pypi: "PyPI", docs: "दस्तावेज़", copyright: "कॉपीराइट" },
  id: { home: "Beranda", about: "Tentang", messageTypes: "Jenis pesan", selectionGuide: "Panduan pemilihan", api: "API", contact: "Kontak", privacy: "Privasi", terms: "Ketentuan", github: "GitHub", pypi: "PyPI", docs: "Dokumentasi", copyright: "Hak cipta" },
  it: { home: "Home", about: "Informazioni", messageTypes: "Tipi di messaggio", selectionGuide: "Guida alla selezione", api: "API", contact: "Contatti", privacy: "Privacy", terms: "Termini", github: "GitHub", pypi: "PyPI", docs: "Documentazione", copyright: "Copyright" },
  ja: { home: "ホーム", about: "概要", messageTypes: "メッセージ種別", selectionGuide: "選択ガイド", api: "API", contact: "お問い合わせ", privacy: "プライバシー", terms: "利用規約", github: "GitHub", pypi: "PyPI", docs: "ドキュメント", copyright: "著作権" },
  ko: { home: "홈", about: "소개", messageTypes: "메시지 유형", selectionGuide: "선택 가이드", api: "API", contact: "문의", privacy: "개인정보", terms: "약관", github: "GitHub", pypi: "PyPI", docs: "문서", copyright: "저작권" },
  nl: { home: "Home", about: "Over", messageTypes: "Berichttypen", selectionGuide: "Keuzegids", api: "API", contact: "Contact", privacy: "Privacy", terms: "Voorwaarden", github: "GitHub", pypi: "PyPI", docs: "Documentatie", copyright: "Auteursrecht" },
  pl: { home: "Strona główna", about: "O projekcie", messageTypes: "Typy wiadomości", selectionGuide: "Przewodnik wyboru", api: "API", contact: "Kontakt", privacy: "Prywatność", terms: "Warunki", github: "GitHub", pypi: "PyPI", docs: "Dokumentacja", copyright: "Prawa autorskie" },
  pt: { home: "Início", about: "Sobre", messageTypes: "Tipos de mensagem", selectionGuide: "Guia de seleção", api: "API", contact: "Contato", privacy: "Privacidade", terms: "Termos", github: "GitHub", pypi: "PyPI", docs: "Documentação", copyright: "Direitos autorais" },
  ro: { home: "Acasă", about: "Despre", messageTypes: "Tipuri de mesaje", selectionGuide: "Ghid de selecție", api: "API", contact: "Contact", privacy: "Confidențialitate", terms: "Termeni", github: "GitHub", pypi: "PyPI", docs: "Documentație", copyright: "Drepturi de autor" },
  ru: { home: "Главная", about: "О проекте", messageTypes: "Типы сообщений", selectionGuide: "Руководство по выбору", api: "API", contact: "Контакты", privacy: "Конфиденциальность", terms: "Условия", github: "GitHub", pypi: "PyPI", docs: "Документация", copyright: "Авторские права" },
  th: { home: "หน้าแรก", about: "เกี่ยวกับ", messageTypes: "ประเภทข้อความ", selectionGuide: "คู่มือการเลือก", api: "API", contact: "ติดต่อ", privacy: "ความเป็นส่วนตัว", terms: "ข้อกำหนด", github: "GitHub", pypi: "PyPI", docs: "เอกสาร", copyright: "ลิขสิทธิ์" },
  tr: { home: "Ana sayfa", about: "Hakkında", messageTypes: "Mesaj türleri", selectionGuide: "Seçim rehberi", api: "API", contact: "İletişim", privacy: "Gizlilik", terms: "Koşullar", github: "GitHub", pypi: "PyPI", docs: "Dokümantasyon", copyright: "Telif hakkı" },
  uk: { home: "Головна", about: "Про проєкт", messageTypes: "Типи повідомлень", selectionGuide: "Посібник з вибору", api: "API", contact: "Контакти", privacy: "Конфіденційність", terms: "Умови", github: "GitHub", pypi: "PyPI", docs: "Документація", copyright: "Авторське право" },
  vi: { home: "Trang chủ", about: "Giới thiệu", messageTypes: "Loại thông điệp", selectionGuide: "Hướng dẫn lựa chọn", api: "API", contact: "Liên hệ", privacy: "Quyền riêng tư", terms: "Điều khoản", github: "GitHub", pypi: "PyPI", docs: "Tài liệu", copyright: "Bản quyền" },
  zh: { home: "首页", about: "关于", messageTypes: "报文类型", selectionGuide: "选择指南", api: "API", contact: "联系", privacy: "隐私", terms: "条款", github: "GitHub", pypi: "PyPI", docs: "文档", copyright: "版权" },
  "zh-tw": { home: "首頁", about: "關於", messageTypes: "訊息類型", selectionGuide: "選擇指南", api: "API", contact: "聯絡", privacy: "隱私", terms: "條款", github: "GitHub", pypi: "PyPI", docs: "文件", copyright: "版權" }
};

export function getUiStrings(locale: string): UiStrings {
  return UI_STRINGS[(LOCALES.includes(locale as LocaleKey) ? locale : "en") as LocaleKey];
}
