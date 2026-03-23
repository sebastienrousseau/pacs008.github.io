<script setup lang="ts">
import { onMounted } from "vue";
import DefaultTheme from "vitepress/theme";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import PacsFooter from "./components/PacsFooter.vue";
import NotFound from "./components/NotFound.vue";

const { Layout } = DefaultTheme;

function labelCopyButtons() {
  document.querySelectorAll(".vp-copy").forEach((btn) => {
    if (!btn.getAttribute("aria-label")) {
      btn.setAttribute("aria-label", "Copy code to clipboard");
    }
  });
}

function labelThemeToggle() {
  document.querySelectorAll(".VPSwitchAppearance").forEach((btn) => {
    if (!btn.getAttribute("aria-label")) {
      btn.setAttribute("aria-label", "Toggle dark mode");
    }
  });
}

onMounted(() => {
  const el = document.getElementById("VPContent");
  if (el) el.setAttribute("role", "main");

  labelCopyButtons();
  labelThemeToggle();

  const observer = new MutationObserver(() => {
    labelCopyButtons();
    labelThemeToggle();
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
