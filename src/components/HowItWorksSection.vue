<script setup lang="ts">
import { useI18n } from '../i18n'
const { t } = useI18n()

interface Step {
  num: string
  titleKey: string
  descKey: string
}

const steps: Step[] = [
  { num: '01', titleKey: 'how.step1_title', descKey: 'how.step1_desc' },
  { num: '02', titleKey: 'how.step2_title', descKey: 'how.step2_desc' },
  { num: '03', titleKey: 'how.step3_title', descKey: 'how.step3_desc' },
]
</script>

<template>
  <section id="how-it-works" class="section how">
    <div class="container">
      <h2 class="section-title">{{ t('how.title') }}</h2>
      <p class="section-subtitle">{{ t('how.subtitle') }}</p>

      <div class="how__steps">
        <div v-for="(step, i) in steps" :key="i" class="how__step">
          <div class="how__step-num">{{ step.num }}</div>
          <div class="how__step-line" v-if="i < steps.length - 1"></div>
          <div class="how__step-content card">
            <h3 class="how__step-title">{{ t(step.titleKey) }}</h3>
            <p class="how__step-desc">{{ t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how__steps {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}
.how__step {
  flex: 1;
  max-width: 360px;
  text-align: center;
  position: relative;
}
.how__step-num {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  line-height: 1;
}
.how__step-line {
  position: absolute;
  top: 28px;
  right: -16px;
  width: calc(100% - 80px);
  height: 2px;
  background: linear-gradient(90deg, var(--gradient-start), transparent);
  z-index: 0;
}
.how__step-content { text-align: left; }
.how__step-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.how__step-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
@media (max-width: 768px) {
  .how__steps { flex-direction: column; align-items: center; gap: 24px; }
  .how__step { max-width: 100%; width: 100%; }
  .how__step-line { display: none; }
}
</style>
