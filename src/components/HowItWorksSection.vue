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
      <h2 class="section-title reveal">{{ t('how.title') }}</h2>
      <p class="section-subtitle reveal reveal--delay-1">{{ t('how.subtitle') }}</p>

      <div class="how__steps">
        <div v-for="(step, i) in steps" :key="i" class="how__step reveal" :class="`reveal--delay-${i}`">
          <div class="how__step-header">
            <div class="how__step-num">{{ step.num }}</div>
            <div class="how__step-line-wrap" v-if="i < steps.length - 1">
              <div class="how__step-line"></div>
            </div>
          </div>
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
  max-width: 380px;
  position: relative;
}
.how__step-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
}
.how__step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--gradient);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
  flex-shrink: 0;
  position: relative;
  box-shadow: 0 4px 15px var(--primary-glow);
}
.how__step-num::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 19px;
  background: var(--gradient);
  opacity: 0.3;
  z-index: -1;
  filter: blur(6px);
}
.how__step-line-wrap {
  flex: 1;
  height: 2px;
  margin-left: 24px;
  overflow: hidden;
}
.how__step-line {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--gradient-start), transparent);
  border-radius: 2px;
}
.how__step-content {
  text-align: left;
  position: relative;
  overflow: hidden;
}
.how__step-content::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px;
  height: 100%;
  background: var(--gradient);
  border-radius: 0 2px 2px 0;
}
.how__step-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 4px;
}
.how__step-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
@media (max-width: 768px) {
  .how__steps { flex-direction: column; align-items: center; gap: 32px; }
  .how__step { max-width: 100%; width: 100%; }
  .how__step-line-wrap { display: none; }
  .how__step-header { justify-content: center; }
}
</style>
