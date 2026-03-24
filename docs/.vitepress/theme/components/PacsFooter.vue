<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";
import { LOCALE_KEYS } from "../../config/seo";
import { getUiStrings } from "../../config/i18n";

const route = useRoute();
const currentYear = new Date().getFullYear();

const locale = computed(() => {
  const segments = route.path.split("/").filter(Boolean);
  const first = segments[0];
  return first && LOCALE_KEYS.has(first) ? first : "en";
});

const t = computed(() => getUiStrings(locale.value));

function localLink(path: string): string {
  if (locale.value === "en") {
    return path;
  }
  return `/${locale.value}${path}`;
}
</script>

<template>
  <footer class="dot-footer" role="contentinfo">
    <div class="dot-footer-inner">
      <nav class="dot-footer-nav" :aria-label="t.footerNavLabel">
        <div class="dot-footer-column">
          <h2 class="dot-footer-title">{{ t.documentation }}</h2>
          <ul>
            <li><a :href="localLink('/about/')">{{ t.about }}</a></li>
            <li><a :href="localLink('/message-types/')">{{ t.messageTypes }}</a></li>
            <li><a :href="localLink('/message-selection/')">{{ t.selectionGuide }}</a></li>
            <li><a :href="localLink('/api/')">{{ t.api }}</a></li>
            <li><a :href="localLink('/pacs-explained/')">{{ t.pacsExplained }}</a></li>
            <li><a :href="localLink('/structured-address/')">{{ t.structuredAddress }}</a></li>
            <li><a :href="localLink('/faq/')">{{ t.faq }}</a></li>
            <li><a :href="localLink('/glossary/')">{{ t.glossary }}</a></li>
            <li><a :href="localLink('/contact/')">{{ t.contact }}</a></li>
            <li><a :href="localLink('/editorial/')">{{ t.editorial }}</a></li>
          </ul>
        </div>
        <div class="dot-footer-column">
          <h2 class="dot-footer-title">{{ t.resources }}</h2>
          <ul>
            <li><a :href="localLink('/changelog/')">{{ t.changelog }}</a></li>
            <li>
              <a href="https://github.com/sebastienrousseau/pacs008" target="_blank" rel="noopener noreferrer">{{ t.github }}<span class="visually-hidden"> {{ t.opensInNewTab }}</span></a>
            </li>
            <li>
              <a href="https://pypi.org/project/pacs008/" target="_blank" rel="noopener noreferrer">{{ t.pypi }}<span class="visually-hidden"> {{ t.opensInNewTab }}</span></a>
            </li>
            <li>
              <a href="https://github.com/sebastienrousseau/pacs008/releases" target="_blank" rel="noopener noreferrer">{{ t.releases }}<span class="visually-hidden"> {{ t.opensInNewTab }}</span></a>
            </li>
          </ul>
        </div>
        <div class="dot-footer-column">
          <h2 class="dot-footer-title">{{ t.legal }}</h2>
          <ul>
            <li><a :href="localLink('/privacy/')">{{ t.privacy }}</a></li>
            <li><a :href="localLink('/terms/')">{{ t.terms }}</a></li>
          </ul>
        </div>
      </nav>
      <div class="dot-footer-divider" aria-hidden="true"></div>
      <div class="dot-footer-bottom">
        <p class="dot-footer-copyright">
          {{ t.copyright }} &copy; pacs008 2023&ndash;{{ currentYear }}.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.dot-footer {
  background: var(--pacs-footer-bg);
  color: var(--pacs-footer-text);
  font-size: 16px;
  font-weight: 300;
  line-height: 1.618;
  padding: 1.5rem 0 1rem;
}

.dot-footer-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
}

.dot-footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-bottom: 1rem;
}

.dot-footer-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dot-footer-title {
  font-size: 16px;
  font-weight: 400;
  color: var(--pacs-footer-title);
  margin: 0 0 0.5rem;
  letter-spacing: 0;
}

.dot-footer-column li {
  margin: 0;
}

.dot-footer-column a {
  color: var(--pacs-footer-link);
  text-decoration: none;
  display: inline-block;
  line-height: 2.75;
  min-height: 44px;
}

.dot-footer-column a:hover {
  color: var(--pacs-text-primary);
  text-decoration: underline;
}

.dot-footer-divider {
  height: 1px;
  background: var(--pacs-divider);
  margin: 0.5rem 0 1rem;
}

.dot-footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
}

.dot-footer-copyright {
  margin: 0;
  color: var(--pacs-footer-text);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 1068px) {
  .dot-footer-inner {
    max-width: 692px;
  }
}

@media (max-width: 768px) {
  .dot-footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .dot-footer-inner {
    width: 87.5%;
    padding: 0;
  }

  .dot-footer-bottom {
    flex-direction: column;
  }
}
</style>
