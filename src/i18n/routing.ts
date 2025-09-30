import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['zh', 'en', 'ja'],

  // Used when no locale matches
  defaultLocale: 'zh',

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be provided for all locales
    '/': '/',
    '/products': '/products',
    '/services': '/services',
    '/about': '/about',
    '/contact': '/contact',
    '/careers': '/careers',
    '/warehouse': '/warehouse',
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
