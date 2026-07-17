<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import BotPreviewSection from './components/BotPreviewSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import FooterSection from './components/FooterSection.vue'

function scrollToFeatures() {
  const el = document.getElementById('features')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <NavBar />
  <HeroSection @scroll="scrollToFeatures" />
  <FeaturesSection />
  <HowItWorksSection />
  <BotPreviewSection />
  <TechStackSection />
  <FooterSection />
</template>
