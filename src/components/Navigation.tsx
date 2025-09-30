'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Fish, Globe } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
// import { useRouter, usePathname } from 'next/navigation'
import { usePathname, useRouter } from '@/i18n/routing'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('navigation.home'), href: '#home' },
    { name: t('navigation.products'), href: '#products' },
    { name: t('navigation.about'), href: '#about' },
    { name: t('navigation.quality'), href: '#quality' },
    { name: t('navigation.contact'), href: '#contact' },
  ]

  const languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ]

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale })
    setShowLanguageMenu(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-blue-600">Kabona</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>
                {languages.find((lang) => lang.code === locale)?.flag}
              </span>
            </button>

            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {t('navigation.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200 mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('navigation.contact')}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
