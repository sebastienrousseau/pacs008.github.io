<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { getUiStrings } from "../../config/i18n";

const route = useRoute();
const year = new Date().getFullYear();

const locale = computed(() => {
  const first = route.path.split("/").filter(Boolean)[0];
  return first || "en";
});

const t = computed(() => getUiStrings(locale.value));
const prefix = computed(() => `/${locale.value}`);
</script>

<template>
  <footer class="pacs-footer">
    <div class="pacs-footer-inner">
      <div class="pacs-footer-grid">
        <div>
          <p class="pacs-footer-title">Pacs008</p>
          <p class="pacs-footer-copy">
            ISO 20022 FI-to-FI automation for engineering teams, operations, and compliance.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul class="pacs-footer-links">
            <li><a :href="`${prefix}/about/`">{{ t.about }}</a></li>
            <li><a :href="`${prefix}/message-types/`">{{ t.messageTypes }}</a></li>
            <li><a :href="`${prefix}/api/`">{{ t.api }}</a></li>
            <li><a :href="`${prefix}/privacy/`">{{ t.privacy }}</a></li>
            <li><a :href="`${prefix}/terms/`">{{ t.terms }}</a></li>
            <li><a :href="`${prefix}/contact/`">{{ t.contact }}</a></li>
          </ul>
        </nav>
        <div class="pacs-footer-external">
          <a href="https://github.com/sebastienrousseau/pacs008" target="_blank" rel="noreferrer">{{ t.github }}</a>
          <a href="https://pypi.org/project/pacs008/" target="_blank" rel="noreferrer">{{ t.pypi }}</a>
        </div>
      </div>
      <p class="pacs-footer-meta">{{ t.copyright }} © Sebastien Rousseau 2023-{{ year }}</p>
    </div>
  </footer>
</template>

<style scoped>
.pacs-footer {
  background: #10211d;
  color: #d9e3db;
  margin-top: 3rem;
}

.pacs-footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.2rem 1.5rem 1.4rem;
}

.pacs-footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 0.7fr;
  gap: 2rem;
}

.pacs-footer-title {
  font-family: var(--pacs-display);
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
}

.pacs-footer-copy,
.pacs-footer-meta {
  margin: 0;
  color: #a9b8ad;
}

.pacs-footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.55rem;
}

.pacs-footer a {
  color: #f5ead9;
}

.pacs-footer-external {
  display: grid;
  gap: 0.55rem;
  align-content: start;
}

.pacs-footer-meta {
  border-top: 1px solid rgba(245, 234, 217, 0.14);
  margin-top: 1.4rem;
  padding-top: 1rem;
  font-size: 0.92rem;
}

@media (max-width: 768px) {
  .pacs-footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
