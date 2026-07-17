<script setup lang="ts">
import { useI18n } from '../i18n'
import LangToggle from './LangToggle.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <a class="footer__logo" href="#hero">
          <svg width="28" height="28" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="footLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#667eea"/>
                <stop offset="100%" stop-color="#764ba2"/>
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="24" fill="url(#footLogo)"/>
            <path d="M24 8 C27 14 36 22 36 30 C36 36 31 40 24 40 C17 40 12 36 12 30 C12 22 21 14 24 8 Z" fill="#fff"/>
          </svg>
          <span>IntDorSys</span>
        </a>

        <div class="footer__toggles">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>

      <div class="footer__links">
        <a href="#features">{{ t('nav.features') }}</a>
        <a href="#how-it-works">{{ t('nav.how') }}</a>
        <a href="#bot">{{ t('nav.bot') }}</a>
        <a href="#tech">{{ t('nav.tech') }}</a>
      </div>

      <div class="footer__bottom">{{ t('footer.copyright') }}</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-footer);
  border-top: 1px solid var(--border);
  padding: 48px 0 32px;
}
.footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}
.footer__toggles { display: flex; gap: 8px; }
.footer__links {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.footer__links a {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}
.footer__links a:hover { color: var(--primary); }
.footer__bottom {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}
@media (max-width: 576px) {
  .footer__top { flex-direction: column; gap: 16px; }
}
</style>
