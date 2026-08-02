import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import uz from './locales/uz.json'
import uzCyrl from './locales/uzCyrl.json'

export type Locale = 'uz' | 'uzcyrl'

const savedLocale = (localStorage.getItem('locale') as Locale | null) || 'uz'

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    uzcyrl: { translation: uzCyrl },
  },
  lng: savedLocale,
  fallbackLng: 'uz',
  interpolation: { escapeValue: false },
})

document.documentElement.lang = savedLocale
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

export default i18n
