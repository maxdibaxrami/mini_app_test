import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import fa from './locales/fa.json';

export const initializeI18n = async () => {
    const storedLanguage = 'en';
    await i18next
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: en },
          ru: { translation: ru },
          ar: { translation: ar },
          fa: { translation: fa },
        },
        lng: storedLanguage,
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
      });
  };