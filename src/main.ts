import { createApp } from 'vue'
import App from './App.vue'
import { useI18n } from './i18n'
import './style.css'

const { locale } = useI18n()
document.documentElement.lang = locale.value

const theme = localStorage.getItem('app-theme') || 'light'
document.documentElement.setAttribute('data-bs-theme', theme)

createApp(App).mount('#app')
