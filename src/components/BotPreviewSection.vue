<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../i18n'
const { locale, t } = useI18n()

const commands = [
  { cmd: '/start', descRu: 'Начало работы', descEn: 'Start the bot' },
  { cmd: '/rules', descRu: 'Правила прачечной', descEn: 'Laundry rules' },
  { cmd: '/menu', descRu: 'Главное меню', descEn: 'Main menu' },
  { cmd: '/send', descRu: 'Отправить фото', descEn: 'Send photo report' },
  { cmd: '/crlaund', descRu: 'Создать слоты (админ)', descEn: 'Create slots (admin)' },
  { cmd: '/rmlaund', descRu: 'Удалить слоты (админ)', descEn: 'Delete slots (admin)' },
]

const activeTab = ref<'user' | 'admin'>('user')
type AdminView = 'menu' | 'free-dates' | 'my-bookings' | 'all-records' | 'active-users' | 'blocked-users'
const adminView = ref<AdminView>('menu')

function show(v: AdminView) { adminView.value = v }
</script>

<template>
  <section id="bot" class="section bot-section">
    <div class="container">
      <h2 class="section-title reveal">{{ t('bot.section_title') }}</h2>
      <p class="section-subtitle reveal reveal--delay-1">{{ t('bot.section_subtitle') }}</p>

      <div class="bot-section__grid">
        <div class="bot-section__info reveal">

          <div class="bot-section__card card">
            <h3 class="bot-section__card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              {{ t('bot.commands_title') }}
            </h3>
            <div class="bot-section__commands">
              <div v-for="(c, i) in commands" :key="i" class="bot-section__cmd">
                <span class="bot-section__cmd-slash">/</span>
                <code class="bot-section__cmd-code">{{ c.cmd.slice(1) }}</code>
                <span class="bot-section__cmd-desc">{{ locale === 'ru' ? c.descRu : c.descEn }}</span>
              </div>
            </div>
          </div>

          <div class="bot-section__card card" style="margin-top: 24px;">
            <h3 class="bot-section__card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              {{ t('bot.menu_title') }}
            </h3>
            <div class="bot-section__menu-layout">
              <div class="bot-section__menu-group">
                <div class="bot-section__menu-group-title">
                  <span class="bot-section__menu-group-icon">👤</span>
                  {{ t('bot.tab_user') }}
                </div>
                <div class="bot-section__menu-buttons">
                  <span class="bot-section__menu-btn">{{ t('bot.btn_book') }}</span>
                  <span class="bot-section__menu-btn">{{ t('bot.btn_my') }}</span>
                </div>
              </div>
              <div class="bot-section__menu-divider"></div>
              <div class="bot-section__menu-group">
                <div class="bot-section__menu-group-title">
                  <span class="bot-section__menu-group-icon">🛡️</span>
                  {{ t('bot.tab_admin') }}
                </div>
                <div class="bot-section__menu-buttons">
                  <span class="bot-section__menu-btn">{{ t('bot.btn_book') }}</span>
                  <span class="bot-section__menu-btn">{{ t('bot.btn_my') }}</span>
                  <span class="bot-section__menu-btn">{{ t('bot.btn_all') }}</span>
                  <span class="bot-section__menu-btn">{{ t('bot.btn_access') }}</span>
                  <span class="bot-section__menu-btn bot-section__menu-btn--danger">{{ t('bot.btn_no_access') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bot-section__phone-wrapper reveal reveal--delay-2">
          <div class="phone-tabs">
            <button
              class="phone-tab"
              :class="{ 'phone-tab--active': activeTab === 'user' }"
              @click="activeTab = 'user'"
            >{{ t('bot.tab_user') }}</button>
            <button
              class="phone-tab"
              :class="{ 'phone-tab--active': activeTab === 'admin' }"
              @click="activeTab = 'admin'; adminView = 'menu'"
            >{{ t('bot.tab_admin') }}</button>
          </div>

          <div class="phone">
            <div class="phone__top">
              <div class="phone__top-inner">
                <span class="phone__time">22:45</span>
                <div class="phone__icons">
                  <svg width="16" height="12" viewBox="0 0 18 12"><rect x="11" y="1" width="7" height="10" rx="1" fill="currentColor"/><rect x="13" y="3" width="3" height="6" rx="0.5" fill="currentColor" opacity="0.4"/><path d="M1 5l3 3 3-3M7 5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
                </div>
              </div>
            </div>

            <div class="phone__chat-header">
              <svg class="phone__back" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
              <div class="phone__chat-avatar">
                <svg width="26" height="26" viewBox="0 0 48 48">
                  <defs><linearGradient id="bav4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#a855f7"/></linearGradient></defs>
                  <circle cx="24" cy="24" r="24" fill="url(#bav4)"/>
                  <path d="M24 8 C27 14 36 22 36 30 C36 36 31 40 24 40 C17 40 12 36 12 30 C12 22 21 14 24 8 Z" fill="#fff"/>
                </svg>
              </div>
              <div class="phone__chat-info">
                <div class="phone__chat-name">IntDorSys Bot</div>
                <div class="phone__chat-status">online</div>
              </div>
              <svg class="phone__dots" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
            </div>

            <div class="phone__chat-bg">

              <!-- =========== USER =========== -->
              <template v-if="activeTab === 'user'">
                <div class="phone__date-badge">17 июля</div>

                <div class="phone__bubble phone__bubble--bot">
                  <div class="phone__bubble-text">
                    Привет, пользователь!
                    <span class="phone__bubble-time">22:40</span>
                  </div>
                </div>

                <div class="phone__bubble phone__bubble--bot">
                  <div class="phone__bubble-text">
                    Чтобы получить доступ, ответьте на это сообщение введя свои ФИО, номер группы, номер комнаты<br><br>
                    Пример: Иванов Иван Иванович, 3114, 1511
                    <span class="phone__bubble-time">22:40</span>
                  </div>
                </div>

                <div class="phone__bubble phone__bubble--user">
                  <div class="phone__bubble-text">
                    <div class="phone__bubble-reply">
                      <div class="phone__bubble-reply-bar"></div>
                      <div class="phone__bubble-reply-content">
                        <div class="phone__bubble-reply-name">IntDorSys Bot</div>
                        <div class="phone__bubble-reply-snippet">Чтобы получить доступ, ответьте на это сообщение введя свои...</div>
                      </div>
                    </div>
                    Иванов Иван Иванович, 3114, 1511
                    <span class="phone__bubble-time">22:41</span>
                  </div>
                </div>

                <div class="phone__bubble phone__bubble--bot">
                  <div class="phone__bubble-text">
                    Отправлен запрос на подтверждение
                    <span class="phone__bubble-time">22:41</span>
                  </div>
                </div>

                <div class="phone__date-badge">18 июля</div>

                <div class="phone__bubble phone__bubble--bot">
                  <div class="phone__bubble-text">
                    Телеграм подтвержден
                    <span class="phone__bubble-time">10:15</span>
                  </div>
                </div>

                <div class="phone__msg">
                  <div class="phone__msg-body">Меню прачечной:</div>
                  <div class="phone__msg-keys">
                    <span class="phone__msg-key phone__msg-key--off">{{ t('bot.btn_book') }}</span>
                    <span class="phone__msg-key phone__msg-key--off">{{ t('bot.btn_my') }}</span>
                  </div>
                </div>
              </template>

              <!-- =========== ADMIN =========== -->
              <template v-else>
                <div class="phone__date-badge">18 июля</div>

                <div class="phone__msg phone__msg--interactive">

                  <template v-if="adminView === 'menu'">
                    <div class="phone__msg-body">Меню прачечной:</div>
                    <div class="phone__msg-keys">
                      <span class="phone__msg-key" @click="show('free-dates')">{{ t('bot.btn_book') }}</span>
                      <span class="phone__msg-key" @click="show('my-bookings')">{{ t('bot.btn_my') }}</span>
                      <span class="phone__msg-key" @click="show('all-records')">{{ t('bot.btn_all') }}</span>
                      <span class="phone__msg-key" @click="show('active-users')">{{ t('bot.btn_access') }}</span>
                      <span class="phone__msg-key" @click="show('blocked-users')">{{ t('bot.btn_no_access') }}</span>
                    </div>
                  </template>

                  <template v-if="adminView === 'free-dates'">
                    <div class="phone__msg-body">Свободные для записи даты:</div>
                    <div class="phone__msg-keys">
                      <span class="phone__msg-key phone__msg-key--off">18.07.2026</span>
                      <span class="phone__msg-key phone__msg-key--off">19.07.2026</span>
                      <span class="phone__msg-key phone__msg-key--off">20.07.2026</span>
                      <span class="phone__msg-key phone__msg-key--back" @click="show('menu')">← Назад</span>
                    </div>
                  </template>

                  <template v-if="adminView === 'my-bookings'">
                    <div class="phone__msg-body">Ваши записи (нажмите на дату, если хотите отменить):</div>
                    <div class="phone__msg-keys">
                      <span class="phone__msg-key phone__msg-key--off">18.07.2026 14:00</span>
                      <span class="phone__msg-key phone__msg-key--off">19.07.2026 10:00</span>
                      <span class="phone__msg-key phone__msg-key--back" @click="show('menu')">← Назад</span>
                    </div>
                  </template>

                  <template v-if="adminView === 'all-records'">
                    <div class="phone__msg-body">
                      ----- Все записи -----<br>
                      &lt;&lt; 18.07.2026 &gt;&gt;<br>
                      &nbsp;* 14:00 — Иванов И.<br>
                      &nbsp;* 16:00 — Петров П.<br>
                      &lt;&lt; 19.07.2026 &gt;&gt;<br>
                      &nbsp;* 10:00 — Сидорова А.
                    </div>
                    <div class="phone__msg-keys">
                      <span class="phone__msg-key phone__msg-key--back" @click="show('menu')">← Назад</span>
                    </div>
                  </template>

                  <template v-if="adminView === 'active-users'">
                    <div class="phone__msg-body">
                      Пользователи с доступом (нажмите на пользователя, если хотите заблокировать):
                    </div>
                    <div class="phone__msg-keys">
                      <span class="phone__msg-key phone__msg-key--off">Иван И.</span>
                      <span class="phone__msg-key phone__msg-key--off">Пётр П.</span>
                      <span class="phone__msg-key phone__msg-key--off">Анна С.</span>
                      <span class="phone__msg-key phone__msg-key--back" @click="show('menu')">← Назад</span>
                    </div>
                  </template>

                  <template v-if="adminView === 'blocked-users'">
                    <div class="phone__msg-body">
                      Заблокированные пользователи (нажмите на пользователя, если хотите разблокировать):
                    </div>
                    <div class="phone__msg-keys">
                      <span class="phone__msg-key phone__msg-key--off">Олег К.</span>
                      <span class="phone__msg-key phone__msg-key--off">Мария В.</span>
                      <span class="phone__msg-key phone__msg-key--back" @click="show('menu')">← Назад</span>
                    </div>
                  </template>
                </div>
              </template>
            </div>

            <div class="phone__input-row">
              <div class="phone__input-field">Сообщение...</div>
              <div class="phone__input-send">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </div>
            </div>

            <div class="phone__home-bar"></div>
          </div>

          <div class="phone__hint" v-if="activeTab === 'admin'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Нажимайте на кнопки в чате
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bot-section {
  background: var(--bg-card);
}
.bot-section__grid {
  display: flex;
  gap: 60px;
  align-items: center;
}
.bot-section__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.bot-section__card {
  padding: 28px;
}
.bot-section__card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
}
.bot-section__card-title svg {
  color: var(--primary);
  opacity: 0.8;
}

/* Commands */
.bot-section__commands {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.bot-section__cmd {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
}
.bot-section__cmd-slash {
  color: var(--primary);
  font-weight: 700;
  font-size: 0.9rem;
  font-family: 'SF Mono', 'Roboto Mono', monospace;
  opacity: 0.7;
  min-width: 10px;
  text-align: right;
}
.bot-section__cmd-code {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  min-width: 80px;
  text-align: center;
  font-family: 'SF Mono', 'Roboto Mono', monospace;
  border: 1px solid rgba(99, 102, 241, 0.15);
}
.bot-section__cmd-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

/* Menu buttons */
.bot-section__menu-layout {
  display: flex;
  gap: 0;
  align-items: stretch;
}
.bot-section__menu-group {
  flex: 1;
  padding: 0 8px;
}
.bot-section__menu-group-title {
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bot-section__menu-group-icon {
  font-size: 1rem;
}
.bot-section__menu-divider {
  width: 1px;
  background: var(--border);
  margin: 0 8px;
  align-self: stretch;
}
.bot-section__menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bot-section__menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-primary);
  cursor: default;
}
.bot-section__menu-btn--danger {
  color: var(--danger);
}


/* Phone wrapper */
.bot-section__phone-wrapper {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.phone__hint {
  margin-top: 10px;
  font-size: 0.78rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Tabs */
.phone-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 3px;
}
.phone-tab {
  padding: 5px 16px;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.phone-tab--active { background: var(--gradient); color: #fff; }

/* Phone frame */
.phone {
  width: 310px;
  background: var(--bg-body);
  border-radius: 44px;
  box-shadow:
    0 0 0 1px var(--border),
    0 12px 50px rgba(0, 0, 0, 0.12),
    0 4px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  position: relative;
}
.phone__top {
  padding: 14px 20px 4px;
}
.phone__top-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.phone__time {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-primary);
}
.phone__icons { color: var(--text-primary); opacity: 0.7; }
.phone__chat-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px 10px;
  border-bottom: 1px solid var(--border);
  color: var(--text-primary);
}
.phone__back { flex-shrink: 0; opacity: 0.7; }
.phone__chat-avatar {
  width: 30px; height: 30px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.phone__chat-info { flex: 1; min-width: 0; }
.phone__chat-name { font-size: 0.82rem; font-weight: 600; line-height: 1.2; }
.phone__chat-status { font-size: 0.62rem; color: var(--success); }
.phone__dots { flex-shrink: 0; opacity: 0.7; }

/* Chat background */
.phone__chat-bg {
  padding: 8px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 340px;
  max-height: 420px;
  overflow-y: auto;
  background-color: var(--bg-phone);
  background-image: repeating-linear-gradient(
    45deg, transparent, transparent 20px,
    rgba(128, 128, 128, 0.015) 20px, rgba(128, 128, 128, 0.015) 40px
  );
}

/* Date badge */
.phone__date-badge {
  align-self: center;
  font-size: 0.62rem;
  color: var(--text-muted);
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding: 4px 14px;
  border-radius: 10px;
  margin: 2px 0;
}

/* Bubble */
.phone__bubble {
  position: relative;
  max-width: 85%;
}
.phone__bubble-text {
  padding: 8px 11px;
  font-size: 0.8rem;
  line-height: 1.5;
  word-break: break-word;
  position: relative;
}
.phone__bubble-time {
  display: inline-block;
  font-size: 0.6rem;
  opacity: 0.5;
  margin-left: 6px;
  white-space: nowrap;
  vertical-align: bottom;
}
.phone__bubble--bot { align-self: flex-start; }
.phone__bubble--bot .phone__bubble-text {
  background: var(--bg-body);
  color: var(--text-primary);
  border-radius: 15px 15px 15px 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
}
[data-bs-theme="dark"] .phone__bubble--bot .phone__bubble-text {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.phone__bubble--user {
  align-self: flex-end;
  max-width: 88%;
}
.phone__bubble--user .phone__bubble-text {
  background: linear-gradient(135deg, #6366f1, #7c3aed);
  color: #fff;
  border-radius: 15px 15px 4px 15px;
}

.phone__bubble-reply {
  display: flex;
  gap: 6px;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  margin-bottom: 4px;
}
.phone__bubble-reply-bar {
  width: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.6);
  flex-shrink: 0;
}
.phone__bubble-reply-content {
  flex: 1;
  min-width: 0;
}
.phone__bubble-reply-name {
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.9;
  line-height: 1.3;
}
.phone__bubble-reply-snippet {
  font-size: 0.65rem;
  opacity: 0.65;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
}

/* Unified message + separate inline keys */
.phone__msg {
  position: relative;
  max-width: 88%;
  align-self: flex-start;
}
.phone__msg-body {
  padding: 8px 11px;
  background: var(--bg-body);
  color: var(--text-primary);
  border-radius: 15px 15px 15px 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
  font-size: 0.8rem;
  line-height: 1.5;
  word-break: break-word;
}
[data-bs-theme="dark"] .phone__msg-body {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.phone__msg-keys {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  margin-top: 6px;
}
.phone__msg-key {
  display: block;
  background: var(--glass-bg);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 7px 12px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--primary);
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
}
.phone__msg-key:hover {
  border-color: var(--primary);
  background: rgba(99, 102, 241, 0.08);
}
.phone__msg-key--off {
  cursor: default;
  opacity: 0.85;
}
.phone__msg-key--off:hover {
  border-color: var(--border);
  background: var(--glass-bg);
}
.phone__msg-key--back {
  font-size: 0.78rem;
}

/* Input row */
.phone__input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px 6px;
  border-top: 1px solid var(--border);
}
.phone__input-field {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 8px 14px;
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.phone__input-send {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

/* Home bar */
.phone__home-bar {
  width: 130px;
  height: 5px;
  background: var(--text-muted);
  border-radius: 5px;
  margin: 6px auto 8px;
  opacity: 0.35;
}

@media (max-width: 768px) {
  .bot-section__grid { flex-direction: column; gap: 40px; }
  .phone { width: 100%; max-width: 320px; }
  .bot-section__menu-layout { flex-direction: column; gap: 16px; }
  .bot-section__menu-divider { width: auto; height: 1px; margin: 8px 0; }
}
</style>
