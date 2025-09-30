'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Globe, Users, Award, TrendingUp } from 'lucide-react'

export default function About() {
  const t = useTranslations()
  const stats = [
    {
      icon: Globe,
      label: t('aboutPage.stats.countries'),
      value: '50+',
      color: 'text-blue-600',
    },
    {
      icon: Users,
      label: t('aboutPage.stats.customers'),
      value: '10,000+',
      color: 'text-green-600',
    },
    {
      icon: Award,
      label: t('aboutPage.stats.certifications'),
      value: '20+',
      color: 'text-purple-600',
    },
    {
      icon: TrendingUp,
      label: t('aboutPage.stats.growth'),
      value: '35%',
      color: 'text-orange-600',
    },
  ]

  const values = [
    {
      title: t('aboutPage.values.quality.title'),
      description: t('aboutPage.values.quality.description'),
      icon: '🏆',
    },
    {
      title: t('aboutPage.values.sustainability.title'),
      description: t('aboutPage.values.sustainability.description'),
      icon: '🌊',
    },
    {
      title: t('aboutPage.values.innovation.title'),
      description: t('aboutPage.values.innovation.description'),
      icon: '🔬',
    },
    {
      title: t('aboutPage.values.service.title'),
      description: t('aboutPage.values.service.description'),
      icon: '💝',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('aboutPage.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('aboutPage.description')}
          </motion.p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t('aboutPage.mission.title')}
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                {t('aboutPage.mission.paragraph1')}
                <strong className="text-blue-600">
                  {t('aboutPage.mission.highlight')}
                </strong>
                。
              </p>
              <p>{t('aboutPage.mission.paragraph2')}</p>
              <p>{t('aboutPage.mission.paragraph3')}</p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🐟</div>
                <p className="text-blue-800 font-semibold">
                  {t('aboutPage.networkTitle')}
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}
                >
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Core Values */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('aboutPage.valuesTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            {t('aboutPage.cta.title')}
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            {t('aboutPage.cta.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {t('aboutPage.cta.button')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
