<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()
const emit = defineEmits<{ scroll: [] }>()
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__bg">
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="hero__orb hero__orb--3"></div>
      <div class="hero__grid"></div>
    </div>

    <div class="hero__content container">
      <div class="hero__logo reveal">
        <div class="hero__logo-glow"></div>
        <svg width="80" height="80" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="heroLogo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6366f1"/>
              <stop offset="100%" stop-color="#a855f7"/>
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

      <button class="hero__scroll" @click="$emit('scroll')" aria-label="Scroll to features">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </button>
    </div>
  </section>
</template>

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
.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
}
.hero__orb--1 {
  width: 700px; height: 700px;
  background: var(--gradient-start);
  top: -200px; right: -200px;
  animation: orb1 25s ease-in-out infinite;
}
.hero__orb--2 {
  width: 500px; height: 500px;
  background: var(--gradient-end);
  bottom: -150px; left: -150px;
  animation: orb2 30s ease-in-out infinite reverse;
}
.hero__orb--3 {
  width: 400px; height: 400px;
  background: var(--gradient-mid);
  top: 40%; left: 60%;
  animation: orb3 20s ease-in-out infinite;
}
@keyframes orb1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
@keyframes orb2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 20px) scale(1.05); }
  66% { transform: translate(20px, -15px) scale(0.95); }
}
@keyframes orb3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(10px, -15px) scale(1.08); }
}
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
  opacity: 0.3;
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
  position: relative;
}
.hero__logo-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 70%);
  border-radius: 50%;
  animation: pulseGlow 3s ease-in-out infinite;
}
@keyframes pulseGlow {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.15); opacity: 1; }
}
.hero__title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #a855f7, #6366f1);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  animation: gradientShift 4s ease-in-out infinite;
}
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition-normal);
  animation: bounce 2.5s ease-in-out infinite;
}
.hero__scroll:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(99, 102, 241, 0.08);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
@media (max-width: 768px) {
  .hero__title { font-size: 2.5rem; }
  .hero__subtitle { font-size: 1.1rem; }
  .hero__desc { font-size: 1rem; }
}
</style>
