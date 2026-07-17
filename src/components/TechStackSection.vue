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
      <h2 class="section-title">{{ t('tech.title') }}</h2>
      <p class="section-subtitle">{{ t('tech.subtitle') }}</p>

      <div class="tech__grid">
        <div v-for="(tch, i) in techs" :key="i" class="tech__badge">
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
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s;
}
.tech__badge:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
.tech__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
