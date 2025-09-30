'use client'

import {
  Fish,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: t('footer.links.product.fish'), href: '#products' },
      { name: t('footer.links.product.shellfish'), href: '#products' },
      { name: t('footer.links.product.crustaceans'), href: '#products' },
      { name: t('footer.links.product.specialty'), href: '#products' },
    ],
    company: [
      { name: t('footer.links.company.about'), href: '#about' },
      { name: t('footer.links.company.quality'), href: '#quality' },
      { name: t('footer.links.company.news'), href: '#' },
      { name: t('footer.links.company.careers'), href: '#' },
    ],
    service: [
      { name: t('footer.links.service.wholesale'), href: '#' },
      { name: t('footer.links.service.retail'), href: '#' },
      { name: t('footer.links.service.custom'), href: '#' },
      { name: t('footer.links.service.support'), href: '#' },
    ],
    support: [
      { name: t('footer.links.support.contact'), href: '#contact' },
      { name: t('footer.links.support.chat'), href: '#' },
      { name: t('footer.links.support.faq'), href: '#' },
      { name: t('footer.links.support.shipping'), href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                  <Fish className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">Kabona</div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('footer.company.description')}
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">info@kabonaus.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+86 400-123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">
                    {t('footer.company.address')}
                  </span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('footer.sections.products')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('footer.sections.company')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('footer.sections.services')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.service.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">
                {t('footer.sections.support')}
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                {t('footer.newsletter.title')}
              </h4>
              <p className="text-gray-300">
                {t('footer.newsletter.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                {t('footer.newsletter.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Kabona. {t('footer.copyright')} |
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200 ml-2"
              >
                {t('footer.privacy')}
              </a>{' '}
              |
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200 ml-2"
              >
                {t('footer.terms')}
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Website Link */}
            <div className="text-gray-400 text-sm">
              {t('footer.website')}：
              <a
                href="http://kabonaus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 ml-1"
              >
                kabonaus.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
