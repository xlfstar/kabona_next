import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
const LOCALES = ['zh', 'en', 'ja'] as const
export type LocalesType = (typeof LOCALES)[number]
export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !LOCALES.includes(locale as LocalesType)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
