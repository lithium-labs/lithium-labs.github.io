import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import tr from '../locales/tr';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    resources: {
        en: { translation: en },
        tr: { translation: tr }
    },
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    supportedLngs: ['en', 'tr'],
    fallbackLng: "en",
    debug: true,
    detection: {
        order: ['querystring', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage', 'cookie'],
    }
});

export default i18n;