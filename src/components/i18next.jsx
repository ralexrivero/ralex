import i18next from 'i18next';

import global_es from '../translations/es/global.json';
import global_en from '../translations/en/global.json';
import main_es from '../translations/es/main.json';
import main_en from '../translations/en/main.json';

i18next.init({
  interpolation: { escapeValue: false},
  lng: "es",
  resources: {
    es: {
      global: global_es,
      main: main_es,
    },
    en: {
      global: global_en,
      main: main_en,
    }
  }
});

export default i18next;
