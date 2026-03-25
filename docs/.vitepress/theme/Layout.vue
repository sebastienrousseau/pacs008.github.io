<script setup lang="ts">
import { onMounted } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import PacsFooter from "./components/PacsFooter.vue";
import NotFound from "./components/NotFound.vue";

const { Layout } = DefaultTheme;
const { lang } = useData();

const COPY_CODE_LABELS: Record<string, string> = {
  en: "Copy code",
  ar: "نسخ الكود",
  de: "Code kopieren",
  es: "Copiar código",
  fr: "Copier le code",
  he: "העתק קוד",
  hi: "कोड कॉपी करें",
  id: "Salin kode",
  it: "Copia il codice",
  ja: "コードをコピー",
  ko: "코드 복사",
  nl: "Code kopiëren",
  pl: "Kopiuj kod",
  pt: "Copiar código",
  ro: "Copiază codul",
  ru: "Копировать код",
  th: "คัดลอกโค้ด",
  tr: "Kodu kopyala",
  uk: "Копіювати код",
  vi: "Sao chép mã",
  zh: "复制代码",
  "zh-tw": "複製程式碼"
};

function currentLocaleKey() {
  const htmlLang = document.documentElement.lang.toLowerCase();
  if (htmlLang.startsWith("zh-tw")) return "zh-tw";
  return htmlLang.split("-")[0] || lang.value.split("-")[0] || "en";
}

function labelCopyButtons() {
  const label = COPY_CODE_LABELS[currentLocaleKey()] ?? COPY_CODE_LABELS.en;
  document.querySelectorAll(".vp-copy, .copy").forEach((btn) => {
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  });
}

function labelThemeToggle() {
  document.querySelectorAll(".VPSwitchAppearance").forEach((btn) => {
    if (!btn.getAttribute("aria-label")) {
      btn.setAttribute("aria-label", "Toggle dark mode");
    }
  });
}

function initFaqAccordion() {
  const isFaq = window.location.pathname.replace(/\/$/, "").endsWith("/faq");
  if (!isFaq) return;

  const doc = document.querySelector(".vp-doc");
  if (!doc || doc.classList.contains("faq-accordion-init")) return;
  doc.classList.add("faq-accordion-init");

  const h3s = doc.querySelectorAll("h3");
  h3s.forEach((h3) => {
    const details = document.createElement("details");
    details.className = "faq-item";
    const summary = document.createElement("summary");
    summary.className = "faq-question";
    summary.innerHTML = h3.innerHTML;

    const answer = document.createElement("div");
    answer.className = "faq-answer";

    let sibling = h3.nextElementSibling;
    const collected: Element[] = [];
    while (sibling && sibling.tagName !== "H3" && sibling.tagName !== "H2") {
      collected.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    h3.parentNode!.insertBefore(details, h3);
    details.appendChild(summary);
    details.appendChild(answer);
    h3.remove();
    collected.forEach((el) => answer.appendChild(el));
  });
}

onMounted(() => {
  const el = document.getElementById("VPContent");
  if (el) el.setAttribute("role", "main");

  labelCopyButtons();
  labelThemeToggle();
  initFaqAccordion();

  const observer = new MutationObserver(() => {
    labelCopyButtons();
    labelThemeToggle();
    initFaqAccordion();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumbs />
    </template>
    <template #not-found>
      <NotFound />
    </template>
    <template #layout-bottom>
      <PacsFooter />
    </template>
  </Layout>
</template>
