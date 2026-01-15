import { ref, computed } from 'vue'
import enTranslations from '../../locales/en.json'
import thTranslations from '../../locales/th.json'

const currentLocale = ref<'en' | 'th'>('en')

export const useLanguage = () => {
    const translations = {
        en: enTranslations,
        th: thTranslations
    }

    const locale = computed({
        get: () => currentLocale.value,
        set: (value: 'en' | 'th') => {
        currentLocale.value = value
        // บันทึกลง localStorage
        if (import.meta.client) {
            localStorage.setItem('locale', value)
        }
        }
    })

    const t = (key: string): string => {
        const keys = key.split('.')
        let value: any = translations[currentLocale.value]
        
        for (const k of keys) {
        value = value?.[k]
        }
        
        return value || key
    }

    const setLocale = (newLocale: 'en' | 'th') => {
        locale.value = newLocale
    }

    // โหลดภาษาจาก localStorage เมื่อเริ่มต้น
    if (import.meta.client) {
        const savedLocale = localStorage.getItem('locale') as 'en' | 'th' | null
        if (savedLocale) {
        currentLocale.value = savedLocale
        }
    }

    return {
        locale,
        t,
        setLocale
    }
}
