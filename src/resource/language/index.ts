import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  bn_bd: {
    translations: require('./bn_bd.json')
  },
  de_de: {
    translations: require('./de_de.json')
  },
  en_us: {
    translations: require('./en_us.json')
  },
  es: {
    translations: require('./es.json')
  },
  fr: {
    translations: require('./fr.json')
  },
  ha: {
    translations: require('./ha.json')
  },
  hi: {
    translations: require('./hi.json')
  },
  hu_hu: {
    translations: require('./hu_hu.json')
  },
  id: {
    translations: require('./id.json')
  },
  it_it: {
    translations: require('./it_it.json')
  },
  ja: {
    translations: require('./ja.json')
  },
  ko: {
    translations: require('./ko.json')
  },
  ms_my: {
    translations: require('./ms_my.json')
  },
  pt_br: {
    translations: require('./pt_br.json')
  },
  pt_pt: {
    translations: require('./pt_pt.json')
  },
  so: {
    translations: require('./so.json')
  },
  th: {
    translations: require('./th.json')
  },
  tl_ph: {
    translations: require('./tl_ph.json')
  },
  tw: {
    translations: require('./tw.json')
  },
  zh: {
    translations: require('./zh.json')
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources,
    fallbackLng: 'en_us',
    // debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: '.', // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;