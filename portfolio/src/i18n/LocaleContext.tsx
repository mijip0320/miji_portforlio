import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { contentEn } from './content.en'
import { contentKo } from './content.ko'
import type { ContentBundle, Locale } from './types'

/** Set only when the user explicitly picks KO/EN */
const PREFERENCE_KEY = 'miji-portfolio-locale-preference'
/** Legacy key from earlier builds */
const LEGACY_KEY = 'miji-portfolio-locale'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  content: ContentBundle
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readManualPreference(): Locale | null {
  if (typeof window === 'undefined') return null
  const pref = window.localStorage.getItem(PREFERENCE_KEY)
  if (pref === 'en' || pref === 'ko') return pref

  const legacy = window.localStorage.getItem(LEGACY_KEY)
  if (legacy === 'en' || legacy === 'ko') {
    window.localStorage.setItem(PREFERENCE_KEY, legacy)
    return legacy
  }
  return null
}

/** Sync heuristic before IP lookup: Korean UI language or Korea timezone → ko */
function detectLocaleSync(): Locale {
  if (typeof window === 'undefined') return 'en'

  const languages = (
    window.navigator.languages?.length
      ? window.navigator.languages
      : [window.navigator.language]
  ).map((lang) => lang.toLowerCase())

  const isKoreanLanguage = languages.some((lang) => lang === 'ko' || lang.startsWith('ko-'))

  let isKoreaTimezone = false
  try {
    isKoreaTimezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Seoul'
  } catch {
    isKoreaTimezone = false
  }

  if (isKoreanLanguage || isKoreaTimezone) return 'ko'
  return 'en'
}

async function detectLocaleByCountry(): Promise<Locale | null> {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), 2500)

  try {
    const response = await fetch('https://api.country.is/', {
      signal: controller.signal,
      cache: 'no-store',
    })
    if (!response.ok) return null

    const data = (await response.json()) as { country?: string }
    const code = data.country?.toUpperCase()
    if (code === 'KR') return 'ko'
    if (code && /^[A-Z]{2}$/.test(code)) return 'en'
    return null
  } catch {
    return null
  } finally {
    window.clearTimeout(timer)
  }
}

function readInitialLocale(): Locale {
  return readManualPreference() ?? detectLocaleSync()
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readInitialLocale())

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(PREFERENCE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ko' ? 'en' : 'ko')
  }, [locale, setLocale])

  // First visit: refine with IP country when the user hasn't chosen manually
  useEffect(() => {
    if (readManualPreference()) return

    let cancelled = false
    detectLocaleByCountry().then((detected) => {
      if (cancelled || !detected) return
      if (readManualPreference()) return
      setLocaleState(detected)
    })

    return () => {
      cancelled = true
    }
  }, [])

  const content = locale === 'en' ? contentEn : contentKo

  useEffect(() => {
    document.documentElement.lang = locale
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.ui.metaDescription)
    }
  }, [locale, content.ui.metaDescription])

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, content }),
    [locale, setLocale, toggleLocale, content],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useContent() {
  return useLocale().content
}
