import { createI18n } from 'vue-i18n'
import fr from '../locales/fr.json'
import en from '../locales/en.json'

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'fr',
    fallbackocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
    messages: {
        en,
        fr
    }
})

export default i18n
