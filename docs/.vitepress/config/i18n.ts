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
  breadcrumb: string;
  about: string;
  messageTypes: string;
  selectionGuide: string;
  api: string;
  contact: string;
  privacy: string;
  terms: string;
  author: string;
  editorial: string;
  structuredAddress: string;
  faq: string;
  glossary: string;
  pacsExplained: string;
  changelog: string;
  langMenuLabel: string;
  skipToContentLabel: string;
  returnToTopLabel: string;
  outlineLabel: string;
  appearanceLabel: string;
  lightModeSwitchTitle: string;
  darkModeSwitchTitle: string;
  searchButtonText: string;
  searchButtonAriaLabel: string;
  lastUpdatedText: string;
  footerMessage: string;
  footerCopyright: string;
  footerNavLabel: string;
  documentation: string;
  resources: string;
  legal: string;
  releases: string;
  opensInNewTab: string;
  mainNavigation: string;
  extraNavigation: string;
  mobileNavigation: string;
  toggleDarkMode: string;
  github: string;
  pypi: string;
  docs: string;
  copyright: string;
}

const en: UiStrings = {
  home: "Home",
  breadcrumb: "Breadcrumb",
  about: "About",
  messageTypes: "Message Types",
  selectionGuide: "Selection Guide",
  api: "API",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms",
  author: "Author",
  editorial: "Editorial policy",
  structuredAddress: "Structured address deadline",
  faq: "FAQ",
  glossary: "Glossary",
  pacsExplained: "PACS explained",
  changelog: "Changelog",
  langMenuLabel: "Change language",
  skipToContentLabel: "Skip to content",
  returnToTopLabel: "Return to top",
  outlineLabel: "On this page",
  appearanceLabel: "Appearance",
  lightModeSwitchTitle: "Switch to light theme",
  darkModeSwitchTitle: "Switch to dark theme",
  searchButtonText: "Search",
  searchButtonAriaLabel: "Search",
  lastUpdatedText: "Last updated",
  footerMessage: "Open-source ISO 20022 tooling for financial teams and engineers.",
  footerCopyright: "Copyright © Sebastien Rousseau 2026",
  footerNavLabel: "Footer navigation",
  documentation: "Documentation",
  resources: "Resources",
  legal: "Legal",
  releases: "Releases",
  opensInNewTab: "(opens in new tab)",
  mainNavigation: "Main Navigation",
  extraNavigation: "extra navigation",
  mobileNavigation: "mobile navigation",
  toggleDarkMode: "Toggle dark mode",
  github: "GitHub",
  pypi: "PyPI",
  docs: "Docs",
  copyright: "Copyright"
};

export const UI_STRINGS: Record<LocaleKey, Partial<UiStrings>> = {
  en,
  ar: { home: "الرئيسية", breadcrumb: "مسار التنقل", about: "حول", messageTypes: "أنواع الرسائل", selectionGuide: "دليل الاختيار", api: "واجهة البرمجة", contact: "اتصل", privacy: "الخصوصية", terms: "الشروط", editorial: "السياسة التحريرية", structuredAddress: "موعد العنوان المنظم", langMenuLabel: "تغيير اللغة", skipToContentLabel: "تخطي إلى المحتوى", returnToTopLabel: "العودة إلى الأعلى", outlineLabel: "في هذه الصفحة", appearanceLabel: "المظهر", lightModeSwitchTitle: "التبديل إلى السمة الفاتحة", darkModeSwitchTitle: "التبديل إلى السمة الداكنة", searchButtonText: "بحث", searchButtonAriaLabel: "بحث", lastUpdatedText: "آخر تحديث", footerMessage: "أدوات ISO 20022 مفتوحة المصدر للفرق المالية والمهندسين.", footerCopyright: "حقوق النشر © Sebastien Rousseau 2026", footerNavLabel: "تنقل التذييل", documentation: "الوثائق", resources: "الموارد", legal: "قانوني", releases: "الإصدارات", opensInNewTab: "(يفتح في علامة تبويب جديدة)", mainNavigation: "التنقل الرئيسي", extraNavigation: "تنقل إضافي", mobileNavigation: "تنقل الهاتف", toggleDarkMode: "تبديل الوضع الداكن", github: "GitHub", pypi: "PyPI", docs: "الوثائق", copyright: "حقوق النشر" },
  de: { home: "Start", breadcrumb: "Breadcrumb-Navigation", about: "Über", messageTypes: "Nachrichtentypen", selectionGuide: "Auswahlhilfe", api: "API", contact: "Kontakt", privacy: "Datenschutz", terms: "Bedingungen", editorial: "Redaktionelle Richtlinie", structuredAddress: "Frist für strukturierte Adressen", langMenuLabel: "Sprache ändern", skipToContentLabel: "Zum Inhalt springen", returnToTopLabel: "Nach oben", outlineLabel: "Auf dieser Seite", appearanceLabel: "Darstellung", lightModeSwitchTitle: "Zum hellen Design wechseln", darkModeSwitchTitle: "Zum dunklen Design wechseln", searchButtonText: "Suchen", searchButtonAriaLabel: "Suchen", lastUpdatedText: "Zuletzt aktualisiert", footerMessage: "Open-Source-ISO-20022-Werkzeuge für Finanzteams und Ingenieure.", footerCopyright: "Urheberrecht © Sebastien Rousseau 2026", footerNavLabel: "Fußzeilennavigation", documentation: "Dokumentation", resources: "Ressourcen", legal: "Rechtliches", releases: "Veröffentlichungen", opensInNewTab: "(öffnet in neuem Tab)", mainNavigation: "Hauptnavigation", extraNavigation: "zusätzliche Navigation", mobileNavigation: "mobile Navigation", toggleDarkMode: "Dunkelmodus umschalten", github: "GitHub", pypi: "PyPI", docs: "Dokumentation", copyright: "Urheberrecht" },
  es: { home: "Inicio", breadcrumb: "Ruta de navegación", about: "Acerca de", messageTypes: "Tipos de mensaje", selectionGuide: "Guía de selección", api: "API", contact: "Contacto", privacy: "Privacidad", terms: "Términos", editorial: "Política editorial", structuredAddress: "Plazo de dirección estructurada", langMenuLabel: "Cambiar idioma", skipToContentLabel: "Saltar al contenido", returnToTopLabel: "Volver arriba", outlineLabel: "En esta página", appearanceLabel: "Apariencia", lightModeSwitchTitle: "Cambiar al tema claro", darkModeSwitchTitle: "Cambiar al tema oscuro", searchButtonText: "Buscar", searchButtonAriaLabel: "Buscar", lastUpdatedText: "Última actualización", footerMessage: "Herramientas ISO 20022 de código abierto para equipos financieros e ingenieros.", footerCopyright: "Copyright © Sebastien Rousseau 2026", footerNavLabel: "Navegación del pie", documentation: "Documentación", resources: "Recursos", legal: "Aviso legal", releases: "Versiones", opensInNewTab: "(se abre en una pestaña nueva)", mainNavigation: "Navegación principal", extraNavigation: "navegación adicional", mobileNavigation: "navegación móvil", toggleDarkMode: "Alternar modo oscuro", github: "GitHub", pypi: "PyPI", docs: "Documentación", copyright: "Derechos" },
  fr: { home: "Accueil", breadcrumb: "Fil d’Ariane", about: "À propos", messageTypes: "Types de messages", selectionGuide: "Guide de sélection", api: "API", contact: "Contact", privacy: "Confidentialité", terms: "Conditions", editorial: "Politique éditoriale", structuredAddress: "Échéance adresse structurée", langMenuLabel: "Changer de langue", skipToContentLabel: "Aller au contenu", returnToTopLabel: "Retour en haut", outlineLabel: "Sur cette page", appearanceLabel: "Apparence", lightModeSwitchTitle: "Passer au thème clair", darkModeSwitchTitle: "Passer au thème sombre", searchButtonText: "Rechercher", searchButtonAriaLabel: "Rechercher", lastUpdatedText: "Dernière mise à jour", footerMessage: "Outils ISO 20022 open source pour les équipes financières et les ingénieurs.", footerCopyright: "Copyright © Sebastien Rousseau 2026", footerNavLabel: "Navigation du pied de page", documentation: "Documentation", resources: "Ressources", legal: "Mentions légales", releases: "Versions", opensInNewTab: "(s’ouvre dans un nouvel onglet)", mainNavigation: "Navigation principale", extraNavigation: "navigation supplémentaire", mobileNavigation: "navigation mobile", toggleDarkMode: "Basculer le mode sombre", github: "GitHub", pypi: "PyPI", docs: "Documentation", copyright: "Droits d'auteur" },
  he: { home: "בית", breadcrumb: "נתיב ניווט", about: "אודות", messageTypes: "סוגי הודעות", selectionGuide: "מדריך בחירה", api: "API", contact: "יצירת קשר", privacy: "פרטיות", terms: "תנאים", editorial: "מדיניות עריכה", structuredAddress: "מועד כתובת מובנית", langMenuLabel: "שינוי שפה", skipToContentLabel: "דלג לתוכן", returnToTopLabel: "חזרה למעלה", outlineLabel: "בעמוד זה", appearanceLabel: "מראה", lightModeSwitchTitle: "מעבר לערכת נושא בהירה", darkModeSwitchTitle: "מעבר לערכת נושא כהה", searchButtonText: "חיפוש", searchButtonAriaLabel: "חיפוש", lastUpdatedText: "עודכן לאחרונה", footerMessage: "כלי ISO 20022 בקוד פתוח לצוותים פיננסיים ומהנדסים.", footerCopyright: "זכויות יוצרים © Sebastien Rousseau 2026", footerNavLabel: "ניווט תחתון", documentation: "תיעוד", resources: "משאבים", legal: "משפטי", releases: "גרסאות", opensInNewTab: "(נפתח בלשונית חדשה)", mainNavigation: "ניווט ראשי", extraNavigation: "ניווט נוסף", mobileNavigation: "ניווט לנייד", toggleDarkMode: "החלפת מצב כהה", github: "GitHub", pypi: "PyPI", docs: "תיעוד", copyright: "זכויות יוצרים" },
  hi: { home: "होम", breadcrumb: "ब्रेडक्रम्ब", about: "परिचय", messageTypes: "संदेश प्रकार", selectionGuide: "चयन मार्गदर्शिका", api: "API", contact: "संपर्क", privacy: "गोपनीयता", terms: "शर्तें", editorial: "संपादकीय नीति", structuredAddress: "संरचित पता समय सीमा", langMenuLabel: "भाषा बदलें", skipToContentLabel: "सामग्री पर जाएँ", returnToTopLabel: "ऊपर लौटें", outlineLabel: "इस पेज पर", appearanceLabel: "रूप", lightModeSwitchTitle: "हल्की थीम पर जाएँ", darkModeSwitchTitle: "गहरी थीम पर जाएँ", searchButtonText: "खोजें", searchButtonAriaLabel: "खोजें", lastUpdatedText: "अंतिम अपडेट", footerMessage: "वित्तीय टीमों और इंजीनियरों के लिए ओपन-सोर्स ISO 20022 टूलिंग।", footerCopyright: "कॉपीराइट © Sebastien Rousseau 2026", footerNavLabel: "फ़ुटर नेविगेशन", documentation: "प्रलेखन", resources: "संसाधन", legal: "कानूनी", releases: "रिलीज़", opensInNewTab: "(नए टैब में खुलता है)", mainNavigation: "मुख्य नेविगेशन", extraNavigation: "अतिरिक्त नेविगेशन", mobileNavigation: "मोबाइल नेविगेशन", toggleDarkMode: "डार्क मोड बदलें", github: "GitHub", pypi: "PyPI", docs: "दस्तावेज़", copyright: "कॉपीराइट" },
  id: { home: "Beranda", about: "Tentang", messageTypes: "Jenis pesan", selectionGuide: "Panduan pemilihan", api: "API", contact: "Kontak", privacy: "Privasi", terms: "Ketentuan", editorial: "Kebijakan editorial", structuredAddress: "Tenggat alamat terstruktur", langMenuLabel: "Ganti bahasa", skipToContentLabel: "Lewati ke konten", returnToTopLabel: "Kembali ke atas", outlineLabel: "Di halaman ini", appearanceLabel: "Tampilan", lightModeSwitchTitle: "Beralih ke tema terang", darkModeSwitchTitle: "Beralih ke tema gelap", searchButtonText: "Cari", searchButtonAriaLabel: "Cari", lastUpdatedText: "Terakhir diperbarui", footerMessage: "Perkakas ISO 20022 sumber terbuka untuk tim keuangan dan insinyur.", footerCopyright: "Hak cipta © Sebastien Rousseau 2026", footerNavLabel: "Navigasi footer", documentation: "Dokumentasi", resources: "Sumber daya", legal: "Hukum", releases: "Rilis", opensInNewTab: "(terbuka di tab baru)", mainNavigation: "Navigasi utama", extraNavigation: "navigasi tambahan", mobileNavigation: "navigasi seluler", toggleDarkMode: "Alihkan mode gelap", github: "GitHub", pypi: "PyPI", docs: "Dokumentasi", copyright: "Hak cipta" },
  it: { home: "Home", about: "Informazioni", messageTypes: "Tipi di messaggio", selectionGuide: "Guida alla selezione", api: "API", contact: "Contatti", privacy: "Privacy", terms: "Termini", editorial: "Politica editoriale", structuredAddress: "Scadenza indirizzo strutturato", langMenuLabel: "Cambia lingua", skipToContentLabel: "Vai al contenuto", returnToTopLabel: "Torna in alto", outlineLabel: "In questa pagina", appearanceLabel: "Aspetto", lightModeSwitchTitle: "Passa al tema chiaro", darkModeSwitchTitle: "Passa al tema scuro", searchButtonText: "Cerca", searchButtonAriaLabel: "Cerca", lastUpdatedText: "Ultimo aggiornamento", footerMessage: "Strumenti ISO 20022 open source per team finanziari e ingegneri.", footerCopyright: "Copyright © Sebastien Rousseau 2026", footerNavLabel: "Navigazione del piè di pagina", documentation: "Documentazione", resources: "Risorse", legal: "Legale", releases: "Versioni", opensInNewTab: "(si apre in una nuova scheda)", mainNavigation: "Navigazione principale", extraNavigation: "navigazione aggiuntiva", mobileNavigation: "navigazione mobile", toggleDarkMode: "Attiva/disattiva modalità scura", github: "GitHub", pypi: "PyPI", docs: "Documentazione", copyright: "Copyright" },
  ja: { home: "ホーム", about: "概要", messageTypes: "メッセージ種別", selectionGuide: "選択ガイド", api: "API", contact: "お問い合わせ", privacy: "プライバシー", terms: "利用規約", editorial: "編集ポリシー", structuredAddress: "構造化住所の期限", langMenuLabel: "言語を変更", skipToContentLabel: "コンテンツへ移動", returnToTopLabel: "上に戻る", outlineLabel: "このページ", appearanceLabel: "表示", lightModeSwitchTitle: "ライトテーマに切り替え", darkModeSwitchTitle: "ダークテーマに切り替え", searchButtonText: "検索", searchButtonAriaLabel: "検索", lastUpdatedText: "最終更新", footerMessage: "金融チームとエンジニア向けのオープンソース ISO 20022 ツール。", footerCopyright: "著作権 © Sebastien Rousseau 2026", footerNavLabel: "フッターナビゲーション", documentation: "ドキュメント", resources: "リソース", legal: "法的情報", releases: "リリース", opensInNewTab: "（新しいタブで開きます）", mainNavigation: "メインナビゲーション", extraNavigation: "追加ナビゲーション", mobileNavigation: "モバイルナビゲーション", toggleDarkMode: "ダークモードを切り替え", github: "GitHub", pypi: "PyPI", docs: "ドキュメント", copyright: "著作権" },
  ko: { home: "홈", about: "소개", messageTypes: "메시지 유형", selectionGuide: "선택 가이드", api: "API", contact: "문의", privacy: "개인정보", terms: "약관", editorial: "편집 정책", structuredAddress: "구조화 주소 기한", langMenuLabel: "언어 변경", skipToContentLabel: "본문으로 건너뛰기", returnToTopLabel: "맨 위로", outlineLabel: "이 페이지", appearanceLabel: "표시", lightModeSwitchTitle: "라이트 테마로 전환", darkModeSwitchTitle: "다크 테마로 전환", searchButtonText: "검색", searchButtonAriaLabel: "검색", lastUpdatedText: "마지막 업데이트", footerMessage: "금융 팀과 엔지니어를 위한 오픈소스 ISO 20022 도구.", footerCopyright: "저작권 © Sebastien Rousseau 2026", footerNavLabel: "바닥글 탐색", documentation: "문서", resources: "리소스", legal: "법적 고지", releases: "릴리스", opensInNewTab: "(새 탭에서 열림)", mainNavigation: "기본 탐색", extraNavigation: "추가 탐색", mobileNavigation: "모바일 탐색", toggleDarkMode: "다크 모드 전환", github: "GitHub", pypi: "PyPI", docs: "문서", copyright: "저작권" },
  nl: { home: "Home", about: "Over", messageTypes: "Berichttypen", selectionGuide: "Keuzegids", api: "API", contact: "Contact", privacy: "Privacy", terms: "Voorwaarden", editorial: "Redactioneel beleid", structuredAddress: "Deadline gestructureerd adres", langMenuLabel: "Taal wijzigen", skipToContentLabel: "Ga naar inhoud", returnToTopLabel: "Terug naar boven", outlineLabel: "Op deze pagina", appearanceLabel: "Weergave", lightModeSwitchTitle: "Schakel naar licht thema", darkModeSwitchTitle: "Schakel naar donker thema", searchButtonText: "Zoeken", searchButtonAriaLabel: "Zoeken", lastUpdatedText: "Laatst bijgewerkt", footerMessage: "Open-source ISO 20022-hulpmiddelen voor financiële teams en engineers.", footerCopyright: "Auteursrecht © Sebastien Rousseau 2026", footerNavLabel: "Voettekstnavigatie", documentation: "Documentatie", resources: "Bronnen", legal: "Juridisch", releases: "Releases", opensInNewTab: "(opent in nieuw tabblad)", mainNavigation: "Hoofdnavigatie", extraNavigation: "extra navigatie", mobileNavigation: "mobiele navigatie", toggleDarkMode: "Donkere modus wisselen", github: "GitHub", pypi: "PyPI", docs: "Documentatie", copyright: "Auteursrecht" },
  pl: { home: "Strona główna", about: "O projekcie", messageTypes: "Typy wiadomości", selectionGuide: "Przewodnik wyboru", api: "API", contact: "Kontakt", privacy: "Prywatność", terms: "Warunki", editorial: "Polityka redakcyjna", structuredAddress: "Termin adresu strukturalnego", langMenuLabel: "Zmień język", skipToContentLabel: "Przejdź do treści", returnToTopLabel: "Wróć do góry", outlineLabel: "Na tej stronie", appearanceLabel: "Wygląd", lightModeSwitchTitle: "Przełącz na jasny motyw", darkModeSwitchTitle: "Przełącz na ciemny motyw", searchButtonText: "Szukaj", searchButtonAriaLabel: "Szukaj", lastUpdatedText: "Ostatnia aktualizacja", footerMessage: "Otwarte narzędzia ISO 20022 dla zespołów finansowych i inżynierów.", footerCopyright: "Prawa autorskie © Sebastien Rousseau 2026", footerNavLabel: "Nawigacja stopki", documentation: "Dokumentacja", resources: "Zasoby", legal: "Informacje prawne", releases: "Wydania", opensInNewTab: "(otwiera się w nowej karcie)", mainNavigation: "Nawigacja główna", extraNavigation: "dodatkowa nawigacja", mobileNavigation: "nawigacja mobilna", toggleDarkMode: "Przełącz tryb ciemny", github: "GitHub", pypi: "PyPI", docs: "Dokumentacja", copyright: "Prawa autorskie" },
  pt: { home: "Início", about: "Sobre", messageTypes: "Tipos de mensagem", selectionGuide: "Guia de seleção", api: "API", contact: "Contato", privacy: "Privacidade", terms: "Termos", editorial: "Política editorial", structuredAddress: "Prazo de endereço estruturado", langMenuLabel: "Mudar idioma", skipToContentLabel: "Ir para o conteúdo", returnToTopLabel: "Voltar ao topo", outlineLabel: "Nesta página", appearanceLabel: "Aparência", lightModeSwitchTitle: "Mudar para o tema claro", darkModeSwitchTitle: "Mudar para o tema escuro", searchButtonText: "Pesquisar", searchButtonAriaLabel: "Pesquisar", lastUpdatedText: "Última atualização", footerMessage: "Ferramentas ISO 20022 de código aberto para equipes financeiras e engenheiros.", footerCopyright: "Copyright © Sebastien Rousseau 2026", footerNavLabel: "Navegação do rodapé", documentation: "Documentação", resources: "Recursos", legal: "Informações legais", releases: "Lançamentos", opensInNewTab: "(abre em uma nova guia)", mainNavigation: "Navegação principal", extraNavigation: "navegação extra", mobileNavigation: "navegação móvel", toggleDarkMode: "Alternar modo escuro", github: "GitHub", pypi: "PyPI", docs: "Documentação", copyright: "Direitos autorais" },
  ro: { home: "Acasă", about: "Despre", messageTypes: "Tipuri de mesaje", selectionGuide: "Ghid de selecție", api: "API", contact: "Contact", privacy: "Confidențialitate", terms: "Termeni", editorial: "Politică editorială", structuredAddress: "Termen adresă structurată", langMenuLabel: "Schimbă limba", skipToContentLabel: "Mergi la conținut", returnToTopLabel: "Înapoi sus", outlineLabel: "Pe această pagină", appearanceLabel: "Aspect", lightModeSwitchTitle: "Comută la tema luminoasă", darkModeSwitchTitle: "Comută la tema întunecată", searchButtonText: "Caută", searchButtonAriaLabel: "Caută", lastUpdatedText: "Ultima actualizare", footerMessage: "Instrumente ISO 20022 open-source pentru echipe financiare și ingineri.", footerCopyright: "Drepturi de autor © Sebastien Rousseau 2026", footerNavLabel: "Navigare în subsol", documentation: "Documentație", resources: "Resurse", legal: "Aspecte legale", releases: "Lansări", opensInNewTab: "(se deschide într-o filă nouă)", mainNavigation: "Navigare principală", extraNavigation: "navigare suplimentară", mobileNavigation: "navigare mobilă", toggleDarkMode: "Comută modul întunecat", github: "GitHub", pypi: "PyPI", docs: "Documentație", copyright: "Drepturi de autor" },
  ru: { home: "Главная", about: "О проекте", messageTypes: "Типы сообщений", selectionGuide: "Руководство по выбору", api: "API", contact: "Контакты", privacy: "Конфиденциальность", terms: "Условия", editorial: "Редакционная политика", structuredAddress: "Срок структурированного адреса", langMenuLabel: "Сменить язык", skipToContentLabel: "Перейти к содержимому", returnToTopLabel: "Наверх", outlineLabel: "На этой странице", appearanceLabel: "Оформление", lightModeSwitchTitle: "Переключить на светлую тему", darkModeSwitchTitle: "Переключить на тёмную тему", searchButtonText: "Поиск", searchButtonAriaLabel: "Поиск", lastUpdatedText: "Последнее обновление", footerMessage: "Инструменты ISO 20022 с открытым исходным кодом для финансовых команд и инженеров.", footerCopyright: "Авторские права © Sebastien Rousseau 2026", footerNavLabel: "Навигация в подвале", documentation: "Документация", resources: "Ресурсы", legal: "Правовая информация", releases: "Релизы", opensInNewTab: "(открывается в новой вкладке)", mainNavigation: "Основная навигация", extraNavigation: "дополнительная навигация", mobileNavigation: "мобильная навигация", toggleDarkMode: "Переключить тёмный режим", github: "GitHub", pypi: "PyPI", docs: "Документация", copyright: "Авторские права" },
  th: { home: "หน้าแรก", about: "เกี่ยวกับ", messageTypes: "ประเภทข้อความ", selectionGuide: "คู่มือการเลือก", api: "API", contact: "ติดต่อ", privacy: "ความเป็นส่วนตัว", terms: "ข้อกำหนด", editorial: "นโยบายบรรณาธิการ", structuredAddress: "กำหนดเวลาที่อยู่แบบมีโครงสร้าง", langMenuLabel: "เปลี่ยนภาษา", skipToContentLabel: "ข้ามไปยังเนื้อหา", returnToTopLabel: "กลับไปด้านบน", outlineLabel: "ในหน้านี้", appearanceLabel: "การแสดงผล", lightModeSwitchTitle: "สลับเป็นธีมสว่าง", darkModeSwitchTitle: "สลับเป็นธีมมืด", searchButtonText: "ค้นหา", searchButtonAriaLabel: "ค้นหา", lastUpdatedText: "อัปเดตล่าสุด", footerMessage: "เครื่องมือ ISO 20022 แบบโอเพนซอร์สสำหรับทีมการเงินและวิศวกร", footerCopyright: "ลิขสิทธิ์ © Sebastien Rousseau 2026", footerNavLabel: "การนำทางส่วนท้าย", documentation: "เอกสาร", resources: "ทรัพยากร", legal: "กฎหมาย", releases: "รีลีส", opensInNewTab: "(เปิดในแท็บใหม่)", mainNavigation: "การนำทางหลัก", extraNavigation: "การนำทางเพิ่มเติม", mobileNavigation: "การนำทางบนมือถือ", toggleDarkMode: "สลับโหมดมืด", github: "GitHub", pypi: "PyPI", docs: "เอกสาร", copyright: "ลิขสิทธิ์" },
  tr: { home: "Ana sayfa", about: "Hakkında", messageTypes: "Mesaj türleri", selectionGuide: "Seçim rehberi", api: "API", contact: "İletişim", privacy: "Gizlilik", terms: "Koşullar", editorial: "Yayın politikası", structuredAddress: "Yapılandırılmış adres son tarihi", langMenuLabel: "Dili değiştir", skipToContentLabel: "İçeriğe geç", returnToTopLabel: "Yukarı dön", outlineLabel: "Bu sayfada", appearanceLabel: "Görünüm", lightModeSwitchTitle: "Açık temaya geç", darkModeSwitchTitle: "Koyu temaya geç", searchButtonText: "Ara", searchButtonAriaLabel: "Ara", lastUpdatedText: "Son güncelleme", footerMessage: "Finans ekipleri ve mühendisler için açık kaynaklı ISO 20022 araçları.", footerCopyright: "Telif hakkı © Sebastien Rousseau 2026", footerNavLabel: "Alt bilgi gezintisi", documentation: "Dokümantasyon", resources: "Kaynaklar", legal: "Yasal", releases: "Sürümler", opensInNewTab: "(yeni sekmede açılır)", mainNavigation: "Ana gezinme", extraNavigation: "ek gezinme", mobileNavigation: "mobil gezinme", toggleDarkMode: "Karanlık modu değiştir", github: "GitHub", pypi: "PyPI", docs: "Dokümantasyon", copyright: "Telif hakkı" },
  uk: { home: "Головна", about: "Про проєкт", messageTypes: "Типи повідомлень", selectionGuide: "Посібник з вибору", api: "API", contact: "Контакти", privacy: "Конфіденційність", terms: "Умови", editorial: "Редакційна політика", structuredAddress: "Термін структурованої адреси", langMenuLabel: "Змінити мову", skipToContentLabel: "Перейти до вмісту", returnToTopLabel: "Повернутися вгору", outlineLabel: "На цій сторінці", appearanceLabel: "Вигляд", lightModeSwitchTitle: "Перемкнути на світлу тему", darkModeSwitchTitle: "Перемкнути на темну тему", searchButtonText: "Пошук", searchButtonAriaLabel: "Пошук", lastUpdatedText: "Останнє оновлення", footerMessage: "Відкриті інструменти ISO 20022 для фінансових команд та інженерів.", footerCopyright: "Авторське право © Sebastien Rousseau 2026", footerNavLabel: "Навігація в нижньому колонтитулі", documentation: "Документація", resources: "Ресурси", legal: "Правова інформація", releases: "Релізи", opensInNewTab: "(відкривається в новій вкладці)", mainNavigation: "Основна навігація", extraNavigation: "додаткова навігація", mobileNavigation: "мобільна навігація", toggleDarkMode: "Перемкнути темний режим", github: "GitHub", pypi: "PyPI", docs: "Документація", copyright: "Авторське право" },
  vi: { home: "Trang chủ", about: "Giới thiệu", messageTypes: "Loại thông điệp", selectionGuide: "Hướng dẫn lựa chọn", api: "API", contact: "Liên hệ", privacy: "Quyền riêng tư", terms: "Điều khoản", editorial: "Chính sách biên tập", structuredAddress: "Hạn chót địa chỉ có cấu trúc", langMenuLabel: "Đổi ngôn ngữ", skipToContentLabel: "Chuyển đến nội dung", returnToTopLabel: "Quay lại đầu trang", outlineLabel: "Trên trang này", appearanceLabel: "Giao diện", lightModeSwitchTitle: "Chuyển sang giao diện sáng", darkModeSwitchTitle: "Chuyển sang giao diện tối", searchButtonText: "Tìm kiếm", searchButtonAriaLabel: "Tìm kiếm", lastUpdatedText: "Cập nhật lần cuối", footerMessage: "Công cụ ISO 20022 mã nguồn mở cho đội ngũ tài chính và kỹ sư.", footerCopyright: "Bản quyền © Sebastien Rousseau 2026", footerNavLabel: "Điều hướng chân trang", documentation: "Tài liệu", resources: "Tài nguyên", legal: "Pháp lý", releases: "Bản phát hành", opensInNewTab: "(mở trong tab mới)", mainNavigation: "Điều hướng chính", extraNavigation: "điều hướng bổ sung", mobileNavigation: "điều hướng di động", toggleDarkMode: "Chuyển chế độ tối", github: "GitHub", pypi: "PyPI", docs: "Tài liệu", copyright: "Bản quyền" },
  zh: { home: "首页", about: "关于", messageTypes: "报文类型", selectionGuide: "选择指南", api: "API", contact: "联系", privacy: "隐私", terms: "条款", editorial: "编辑政策", structuredAddress: "结构化地址截止日期", langMenuLabel: "切换语言", skipToContentLabel: "跳到内容", returnToTopLabel: "返回顶部", outlineLabel: "本页内容", appearanceLabel: "外观", lightModeSwitchTitle: "切换到浅色主题", darkModeSwitchTitle: "切换到深色主题", searchButtonText: "搜索", searchButtonAriaLabel: "搜索", lastUpdatedText: "最后更新", footerMessage: "面向金融团队和工程师的开源 ISO 20022 工具。", footerCopyright: "版权 © Sebastien Rousseau 2026", footerNavLabel: "页脚导航", documentation: "文档", resources: "资源", legal: "法律", releases: "发布", opensInNewTab: "（在新标签页打开）", mainNavigation: "主导航", extraNavigation: "附加导航", mobileNavigation: "移动导航", toggleDarkMode: "切换深色模式", github: "GitHub", pypi: "PyPI", docs: "文档", copyright: "版权" },
  "zh-tw": { home: "首頁", about: "關於", messageTypes: "訊息類型", selectionGuide: "選擇指南", api: "API", contact: "聯絡", privacy: "隱私", terms: "條款", editorial: "編輯政策", structuredAddress: "結構化地址截止日期", langMenuLabel: "切換語言", skipToContentLabel: "跳至內容", returnToTopLabel: "返回頂部", outlineLabel: "本頁內容", appearanceLabel: "外觀", lightModeSwitchTitle: "切換至淺色主題", darkModeSwitchTitle: "切換至深色主題", searchButtonText: "搜尋", searchButtonAriaLabel: "搜尋", lastUpdatedText: "最後更新", footerMessage: "面向金融團隊與工程師的開源 ISO 20022 工具。", footerCopyright: "版權 © Sebastien Rousseau 2026", footerNavLabel: "頁尾導覽", documentation: "文件", resources: "資源", legal: "法律", releases: "發行版本", opensInNewTab: "（在新分頁開啟）", mainNavigation: "主導覽", extraNavigation: "額外導覽", mobileNavigation: "行動導覽", toggleDarkMode: "切換深色模式", github: "GitHub", pypi: "PyPI", docs: "文件", copyright: "版權" }
};

export function getUiStrings(locale: string): UiStrings {
  const key = (LOCALES.includes(locale as LocaleKey) ? locale : "en") as LocaleKey;
  return { ...en, ...UI_STRINGS[key] };
}
