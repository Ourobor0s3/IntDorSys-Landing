<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg">
      <div class="hero__circle hero__circle--1"></div>
      <div class="hero__circle hero__circle--2"></div>
      <div class="hero__circle hero__circle--3"></div>
    </div>

    <div class="hero__content container">
      <div class="hero__logo">
        <svg width="80" height="80" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="heroLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#667eea"/>
              <stop offset="100%" stop-color="#764ba2"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#heroLogo)"/>
          <path d="M24 8 C27 14 36 22 36 30 C36 36 31 40 24 40 C17 40 12 36 12 30 C12 22 21 14 24 8 Z" fill="#fff"/>
        </svg>
      </div>

      <h1 class="hero__title">IntDorSys</h1>
      <p class="hero__subtitle">{{ t('hero.subtitle') }}</p>
      <p class="hero__desc">{{ t('hero.desc') }}</p>

      <div class="hero__actions">
        <a class="btn btn-primary" href="/">{{ t('hero.cta_panel') }}</a>
      </div>

      <div class="hero__scroll" @click="$emit('scroll')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default { emits: ['scroll'] }
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
}
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.hero__circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
}
.hero__circle--1 {
  width: 600px; height: 600px;
  background: var(--gradient);
  top: -200px; right: -100px;
}
.hero__circle--2 {
  width: 400px; height: 400px;
  background: var(--gradient);
  bottom: -100px; left: -100px;
}
.hero__circle--3 {
  width: 300px; height: 300px;
  background: var(--gradient);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 720px;
}
.hero__logo {
  margin-bottom: 24px;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  line-height: 1.1;
}
.hero__subtitle {
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 16px;
}
.hero__desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 40px;
}
.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero__scroll {
  margin-top: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--border);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.3s;
  animation: bounce 2s infinite;
}
.hero__scroll:hover {
  border-color: var(--primary);
  color: var(--primary);
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
@media (max-width: 768px) {
  .hero__title { font-size: 2.25rem; }
  .hero__subtitle { font-size: 1.1rem; }
  .hero__desc { font-size: 1rem; }
}
</style>
