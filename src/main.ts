import { createApp } from 'vue'
import App from './App.vue'
import { useI18n } from './i18n'
import './style.css'

const { locale } = useI18n()
document.documentElement.lang = locale.value

const theme = localStorage.getItem('app-theme') || 'light'
document.documentElement.setAttribute('data-bs-theme', theme)

createApp(App).mount('#app')

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

// deferred <script> guarantees DOM is already parsed
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
