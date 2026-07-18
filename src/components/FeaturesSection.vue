<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()

interface Feature {
  titleKey: string
  descKey: string
}

const features: Feature[] = [
  { titleKey: 'features.booking_title', descKey: 'features.booking_desc' },
  { titleKey: 'features.bot_title', descKey: 'features.bot_desc' },
  { titleKey: 'features.admin_title', descKey: 'features.admin_desc' },
  { titleKey: 'features.reports_title', descKey: 'features.reports_desc' },
  { titleKey: 'features.analytics_title', descKey: 'features.analytics_desc' },
  { titleKey: 'features.notifications_title', descKey: 'features.notifications_desc' },
]
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <h2 class="section-title reveal">{{ t('features.title') }}</h2>
      <p class="section-subtitle reveal reveal--delay-1">{{ t('features.subtitle') }}</p>

      <div class="features__grid">
        <div v-for="(f, i) in features" :key="i" class="card feature-card reveal" :class="`reveal--delay-${Math.min(i, 3)}`">
          <div class="feature-card__icon-wrap">
            <div class="feature-card__icon" v-if="i === 0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div class="feature-card__icon" v-else-if="i === 1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div class="feature-card__icon" v-else-if="i === 2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div class="feature-card__icon" v-else-if="i === 3">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <div class="feature-card__icon" v-else-if="i === 4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <div class="feature-card__icon" v-else>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
          </div>
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
.feature-card {
  text-align: center;
  overflow: hidden;
}
.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: var(--gradient);
  border-radius: 0 0 2px 2px;
  opacity: 0;
  transition: opacity var(--transition-normal), width var(--transition-normal);
}
.feature-card:hover::before {
  opacity: 1;
  width: 80%;
}
.feature-card:hover .feature-card__icon-wrap {
  transform: scale(1.08);
}
.feature-card:hover .feature-card__icon-wrap::after {
  opacity: 1;
}
.feature-card__icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0 auto 20px;
  transition: transform var(--transition-normal);
  position: relative;
}
.feature-card__icon-wrap::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 22px;
  background: var(--gradient);
  opacity: 0;
  z-index: -1;
  filter: blur(8px);
  transition: opacity var(--transition-normal);
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
