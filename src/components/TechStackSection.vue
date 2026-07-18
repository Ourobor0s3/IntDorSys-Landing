<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()

interface Tech {
  name: string
  color: string
}

const techs: Tech[] = [
  { name: '.NET 8', color: '#512bd4' },
  { name: 'Angular 17', color: '#dd0031' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Telegram API', color: '#0088cc' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Entity Framework', color: '#512bd4' },
  { name: 'Quartz Scheduler', color: '#2c3e50' },
  { name: 'Nginx', color: '#009639' },
]
</script>

<template>
  <section id="tech" class="section">
    <div class="container">
      <h2 class="section-title reveal">{{ t('tech.title') }}</h2>
      <p class="section-subtitle reveal reveal--delay-1">{{ t('tech.subtitle') }}</p>

      <div class="tech__grid">
        <div v-for="(tch, i) in techs" :key="i" class="tech__badge reveal" :class="`reveal--delay-${Math.min(i, 3)}`">
          <span class="tech__glow" :style="{ '--tech-color': tch.color }"></span>
          <span class="tech__dot" :style="{ background: tch.color }"></span>
          {{ tch.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.tech__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 500;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}
.tech__badge:hover {
  border-color: var(--primary);
  transform: translateY(-3px) scale(1.04);
  box-shadow: var(--shadow);
}
.tech__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--tech-color), transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-normal);
  pointer-events: none;
}
.tech__badge:hover .tech__glow {
  opacity: 0.08;
}
.tech__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
</style>
