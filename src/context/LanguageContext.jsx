import React, { createContext, useContext, useMemo, useState } from 'react'
import uk from '../i18n/uk.json'
import en from '../i18n/en.json'

const LanguageContext = createContext({
  language: 'uk',
  setLanguage: () => {},
  t: (key) => key,
})

const resources = { uk, en }

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uk')

  const t = useMemo(() => {
    const dict = resources[language] || resources.uk
    return (path, vars = {}) => {
      let result = path.split('.').reduce(
          (acc, p) => (acc && acc[p] !== undefined ? acc[p] : path),
          dict
      )

      if (typeof result === 'string') {
        Object.entries(vars).forEach(([key, value]) => {
          let replacement = value

          if (value instanceof Date) {
            if (language === 'uk') {
              // український формат: 05.08.2025
              replacement = new Intl.DateTimeFormat('uk-UA', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              }).format(value)
            } else if (language === 'en') {
              // англійський формат: August 5, 2025
              replacement = new Intl.DateTimeFormat('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(value)
            }
          }

          result = result.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), replacement)
        })
      }

      return result
    }
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext)
