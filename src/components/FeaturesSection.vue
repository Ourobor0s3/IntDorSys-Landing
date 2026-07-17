<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()

interface Feature {
  icon: string
  titleKey: string
  descKey: string
}

const features: Feature[] = [
  { icon: 'calendar', titleKey: 'features.booking_title', descKey: 'features.booking_desc' },
  { icon: 'bot', titleKey: 'features.bot_title', descKey: 'features.bot_desc' },
  { icon: 'users', titleKey: 'features.admin_title', descKey: 'features.admin_desc' },
  { icon: 'camera', titleKey: 'features.reports_title', descKey: 'features.reports_desc' },
  { icon: 'chart', titleKey: 'features.analytics_title', descKey: 'features.analytics_desc' },
  { icon: 'bell', titleKey: 'features.notifications_title', descKey: 'features.notifications_desc' },
]

function iconSvg(name: string): string {
  const icons: Record<string, string> = {
    calendar: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    bot: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    users: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    camera: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    chart: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    bell: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  }
  return icons[name] || ''
}
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <h2 class="section-title">{{ t('features.title') }}</h2>
      <p class="section-subtitle">{{ t('features.subtitle') }}</p>

      <div class="features__grid">
        <div v-for="(f, i) in features" :key="i" class="card feature-card">
          <div class="feature-card__icon" v-html="iconSvg(f.icon)"></div>
          <h3 class="feature-card__title">{{ t(f.titleKey) }}</h3>
          <p class="feature-card__desc">{{ t(f.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature-card { text-align: center; }
.feature-card__icon {
  width: 60px; height: 60px;
  border-radius: 16px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0 auto 20px;
}
.feature-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.feature-card__desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
@media (max-width: 992px) {
  .features__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 576px) {
  .features__grid { grid-template-columns: 1fr; }
}
</style>
