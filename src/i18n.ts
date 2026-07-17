import { ref } from 'vue'

const locale = ref(localStorage.getItem('localization') || 'ru')

type Dict = Record<string, string | Dict>

const messages: Record<string, Dict> = {
  ru: {
    nav: {
      features: 'Возможности',
      how: 'Как это работает',
      bot: 'Telegram-бот',
      tech: 'Технологии',
    },
    hero: {
      subtitle: 'Система управления прачечной в общежитии',
      desc: 'Бронируйте стиральные машины через Telegram-бот. Администраторы управляют расписанием через веб-панель.',
      cta_panel: 'Панель управления',
    },
    features: {
      title: 'Возможности системы',
      subtitle: 'Всё необходимое для удобного управления прачечной в вашем общежитии',
      booking_title: 'Бронирование слотов',
      booking_desc: 'Выбирайте свободное время для стирки прямо в Telegram. Система предотвращает пересечения и ограничивает количество активных броней.',
      bot_title: 'Telegram-бот',
      bot_desc: 'Полноценное управление через Telegram: бронирование, отмена, просмотр записей — всё в удобном инлайн-меню.',
      admin_title: 'Панель администратора',
      admin_desc: 'Управление пользователями, подтверждение регистраций, массовое создание слотов, экспорт в Excel и полный аудит действий.',
      reports_title: 'Фотоотчёты',
      reports_desc: 'После использования прачечной отправьте фото через бота — администратор всегда видит, что всё в порядке.',
      analytics_title: 'Аналитика и статистика',
      analytics_desc: 'Графики загруженности и статистика использования помогают оптимизировать расписание работы прачечной.',
      notifications_title: 'Уведомления и напоминания',
      notifications_desc: 'Автоматические напоминания за день и за несколько часов до забронированного слота.',
    },
    how: {
      title: 'Как это работает',
      subtitle: 'Всё начинается с Telegram-бота',
      step1_title: 'Напишите боту',
      step1_desc: 'Найдите бота IntDorSys в Telegram и отправьте /start. Бот поприветствует вас и попросит представиться: ответьте на сообщение, указав ФИО, группу и комнату. Пример: Иванов Иван Иванович, 3114, 1511',
      step2_title: 'Дождитесь подтверждения',
      step2_desc: 'После отправки данных администратор получит уведомление и подтвердит вашу учётную запись. Вы получите сообщение «Телеграм подтвержден».',
      step3_title: 'Бронируйте и стирайте',
      step3_desc: 'Откройте меню бота (кнопка «✍️ Записаться»), выберите свободную дату и время. После стирки отправьте фотоотчёт командой /send.',
    },
    bot: {
      section_title: 'Telegram-бот',
      section_subtitle: 'Управляйте бронированием прямо в Telegram — быстро, удобно, всегда под рукой',
      commands_title: 'Команды бота',
      menu_title: 'Кнопки меню',
      tab_user: 'Пользователь',
      tab_admin: 'Администратор',
      btn_book: '✍️ Записаться',
      btn_my: '📝 Мои записи',
      btn_all: '📝 Все записи',
      btn_access: '😎 Доступ есть',
      btn_no_access: '🤬 Доступа нет',
    },
    tech: {
      title: 'Технологии',
      subtitle: 'Современный стек для надёжной и масштабируемой работы',
    },
    footer: {
      copyright: '© 2026 IntDorSys. All Rights Reserved.',
    },
  },

  en: {
    nav: {
      features: 'Features',
      how: 'How it works',
      bot: 'Telegram bot',
      tech: 'Tech stack',
    },
    hero: {
      subtitle: 'Dormitory Laundry Management System',
      desc: 'Book washing machines via a Telegram bot. Administrators manage the schedule through a web panel.',
      cta_panel: 'Admin panel',
    },
    features: {
      title: 'Features',
      subtitle: 'Everything you need to manage your dormitory laundry room',
      booking_title: 'Slot Booking',
      booking_desc: 'Pick a free time slot right in Telegram. The system prevents overlaps and limits concurrent bookings.',
      bot_title: 'Telegram Bot',
      bot_desc: 'Full control via Telegram: booking, cancellation, schedule viewing — all in a convenient inline menu.',
      admin_title: 'Admin Panel',
      admin_desc: 'User management, registration approval, bulk slot creation, Excel export, and full audit logging.',
      reports_title: 'Photo Reports',
      reports_desc: 'Send photos via the bot after use — admins can always verify everything is in order.',
      analytics_title: 'Analytics & Statistics',
      analytics_desc: 'Usage charts and statistics help optimize the laundry room schedule.',
      notifications_title: 'Notifications & Reminders',
      notifications_desc: 'Automatic reminders a day and a few hours before your booked slot.',
    },
    how: {
      title: 'How it works',
      subtitle: 'Everything starts with the Telegram bot',
      step1_title: 'Message the bot',
      step1_desc: 'Find the IntDorSys bot on Telegram and send /start. The bot will greet you and ask you to reply with your full name, group, and room number. Example: Ivanov Ivan Ivanovich, 3114, 1511',
      step2_title: 'Wait for approval',
      step2_desc: 'After you submit your info, the admin gets a notification and confirms your account. You will receive a message "Telegram confirmed".',
      step3_title: 'Book and wash',
      step3_desc: 'Open the bot menu (the "✍️ Book" button), pick a free date and time. After washing, send a photo report with the /send command.',
    },
    bot: {
      section_title: 'Telegram Bot',
      section_subtitle: 'Manage bookings right in Telegram — fast, convenient, always at hand',
      commands_title: 'Bot commands',
      menu_title: 'Menu buttons',
      tab_user: 'User',
      tab_admin: 'Admin',
      btn_book: '✍️ Записаться',
      btn_my: '📝 Мои записи',
      btn_all: '📝 Все записи',
      btn_access: '😎 Доступ есть',
      btn_no_access: '🤬 Доступа нет',
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Modern stack for reliable and scalable operation',
    },
    footer: {
      copyright: '© 2026 IntDorSys. All Rights Reserved.',
    },
  },
}

export function useI18n() {
  function t(key: string): string {
    const keys = key.split('.')
    let val: unknown = messages[locale.value] ?? messages.ru
    for (const k of keys) {
      if (val && typeof val === 'object' && k in (val as Dict)) {
        val = (val as Dict)[k]
      } else {
        return key
      }
    }
    return typeof val === 'string' ? val : key
  }

  function setLocale(lng: string) {
    locale.value = lng
    localStorage.setItem('localization', lng)
    document.documentElement.lang = lng
  }

  return { locale, t, setLocale }
}
