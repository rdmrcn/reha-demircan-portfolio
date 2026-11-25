import { useEffect, useState, type ReactNode } from 'react'
import { LocaleContext, type Locale, type LocaleContextValue } from './locale-context'

const STORAGE_KEY = 'reha-portfolio-locale'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'tr') return stored
  } catch {
    // Ignore storage failures in restricted browsing contexts.
  }
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Ignore storage write errors.
    }
  }, [locale])

  const value: LocaleContextValue = {
    locale,
    setLocale: setLocaleState,
    t: (text) => text[locale],
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
