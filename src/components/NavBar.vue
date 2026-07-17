<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../i18n'
import LangToggle from './LangToggle.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

function scrollTo(id: string) {
  isMenuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner container">
      <a class="navbar__logo" href="#" @click.prevent="scrollTo('hero')">
        <svg width="32" height="32" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="navLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#667eea"/>
              <stop offset="100%" stop-color="#764ba2"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#navLogo)"/>
          <path d="M24 8 C27 14 36 22 36 30 C36 36 31 40 24 40 C17 40 12 36 12 30 C12 22 21 14 24 8 Z" fill="#fff"/>
        </svg>
        <span class="navbar__brand">IntDorSys</span>
      </a>

      <div class="navbar__toggler" @click="isMenuOpen = !isMenuOpen">
        <span></span><span></span><span></span>
      </div>

      <div class="navbar__menu" :class="{ 'navbar__menu--open': isMenuOpen }">
        <a class="navbar__link" href="#features" @click.prevent="scrollTo('features')">{{ t('nav.features') }}</a>
        <a class="navbar__link" href="#how-it-works" @click.prevent="scrollTo('how-it-works')">{{ t('nav.how') }}</a>
        <a class="navbar__link" href="#bot" @click.prevent="scrollTo('bot')">{{ t('nav.bot') }}</a>
        <a class="navbar__link" href="#tech" @click.prevent="scrollTo('tech')">{{ t('nav.tech') }}</a>
        <div class="navbar__actions">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 0.3s;
  background: transparent;
}
.navbar--scrolled {
  background: var(--bg-nav);
  backdrop-filter: blur(12px);
  padding: 10px 0;
  box-shadow: var(--shadow);
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.navbar__brand {
  font-size: 1.25rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.navbar__menu {
  display: flex;
  align-items: center;
  gap: 32px;
}
.navbar__link {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  cursor: pointer;
  text-decoration: none;
}
.navbar__link:hover {
  color: var(--primary);
}
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
}
.navbar__toggler {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
}
.navbar__toggler span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: 0.3s;
}
@media (max-width: 768px) {
  .navbar__toggler { display: flex; }
  .navbar__menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-nav);
    backdrop-filter: blur(12px);
    padding: 20px;
    gap: 20px;
    box-shadow: var(--shadow-lg);
  }
  .navbar__menu--open { display: flex; }
  .navbar__actions { margin-left: 0; }
}
</style>
