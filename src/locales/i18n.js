/* eslint-disable import/no-named-as-default-member */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './translations/en';
import { kr } from './translations/kr';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    
    kr: { translation: kr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
