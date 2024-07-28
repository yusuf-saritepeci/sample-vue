import { createI18n } from 'vue-i18n';
import en from './en';
import tr from './tr';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
    tr: tr
  }
});

export function setLocale(locale) {
  i18n.global.locale.value = locale;
}

export default i18n;
