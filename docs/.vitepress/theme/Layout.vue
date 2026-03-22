<script setup lang="ts">
import { onMounted, watch } from "vue";
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import PacsFooter from "./components/PacsFooter.vue";
import NotFound from "./components/NotFound.vue";

const { Layout } = DefaultTheme;
const route = useRoute();
const RTL_LOCALES = new Set(["ar", "he"]);

function getLocaleFromPath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  return segments[0] || "en";
}

function updateDir(path: string) {
  const locale = getLocaleFromPath(path);
  document.documentElement.dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
}

function labelCopyButtons() {
  document.querySelectorAll(".vp-copy").forEach((btn) => {
    if (!btn.getAttribute("aria-label")) {
      btn.setAttribute("aria-label", "Copy code to clipboard");
    }
  });
}

onMounted(() => {
  const el = document.getElementById("VPContent");
  if (el) el.setAttribute("role", "main");

  updateDir(route.path);
  labelCopyButtons();

  const observer = new MutationObserver(() => labelCopyButtons());
  observer.observe(document.body, { childList: true, subtree: true });
});

watch(
  () => route.path,
  (path) => updateDir(path)
);
</script>

<template>
  <a class="skip-link" href="#VPContent">Skip to content</a>
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
