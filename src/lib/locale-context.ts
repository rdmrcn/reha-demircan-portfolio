import { createContext, useContext } from 'react'

export type Locale = 'en' | 'tr'

export type LocalizedText = {
  en: string
  tr: string
}

export type LocaleContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (text: LocalizedText) => string
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used inside LocaleProvider')
  }
  return ctx
}
