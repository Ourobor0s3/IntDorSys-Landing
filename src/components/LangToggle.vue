<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../i18n'

const { locale, setLocale } = useI18n()

const label = computed(() => locale.value === 'ru' ? 'EN' : 'RU')

function toggle() {
  setLocale(locale.value === 'ru' ? 'en' : 'ru')
}
</script>

<template>
  <button class="lang-toggle" @click="toggle" :aria-label="`Switch to ${label}`">{{ label }}</button>
</template>

<style scoped>
.lang-toggle {
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}
.lang-toggle:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: scale(1.08);
  box-shadow: 0 0 12px var(--primary-glow);
}
</style>
