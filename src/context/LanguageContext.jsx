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
    return (path) => path.split('.').reduce((acc, p) => (acc && acc[p] !== undefined ? acc[p] : path), dict)
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
