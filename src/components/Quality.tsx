'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import {
  CheckCircle,
  Thermometer,
  Truck,
  Clock,
  Shield,
  Award,
} from 'lucide-react'

export default function Quality() {
  const t = useTranslations()
  const qualitySteps = [
    {
      icon: CheckCircle,
      title: t('qualityPage.steps.selection.title'),
      description: t('qualityPage.steps.selection.description'),
      color: 'bg-green-500',
    },
    {
      icon: Thermometer,
      title: t('qualityPage.steps.temperature.title'),
      description: t('qualityPage.steps.temperature.description'),
      color: 'bg-blue-500',
    },
    {
      icon: Truck,
      title: t('qualityPage.steps.coldChain.title'),
      description: t('qualityPage.steps.coldChain.description'),
      color: 'bg-purple-500',
    },
    {
      icon: Clock,
      title: t('qualityPage.steps.delivery.title'),
      description: t('qualityPage.steps.delivery.description'),
      color: 'bg-orange-500',
    },
  ]

  const certifications = [
    {
      name: t('qualityPage.certifications.haccp.name'),
      description: t('qualityPage.certifications.haccp.description'),
      badge: '🏅',
    },
    {
      name: t('qualityPage.certifications.iso9001.name'),
      description: t('qualityPage.certifications.iso9001.description'),
      badge: '🌟',
    },
    {
      name: t('qualityPage.certifications.msc.name'),
      description: t('qualityPage.certifications.msc.description'),
      badge: '🌊',
    },
    {
      name: t('qualityPage.certifications.brc.name'),
      description: t('qualityPage.certifications.brc.description'),
      badge: '🛡️',
    },
    {
      name: t('qualityPage.certifications.fda.name'),
      description: t('qualityPage.certifications.fda.description'),
      badge: '✅',
    },
    {
      name: t('qualityPage.certifications.eu.name'),
      description: t('qualityPage.certifications.eu.description'),
      badge: '🇪🇺',
    },
  ]

  const features = [
    {
      icon: Shield,
      title: t('qualityPage.features.traceability.title'),
      description: t('qualityPage.features.traceability.description'),
    },
    {
      icon: Award,
      title: t('qualityPage.features.assurance.title'),
      description: t('qualityPage.features.assurance.description'),
    },
    {
      icon: Thermometer,
      title: t('qualityPage.features.monitoring.title'),
      description: t('qualityPage.features.monitoring.description'),
    },
  ]

  return (
    <section
      id="quality"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('qualityPage.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('qualityPage.description')}
          </motion.p>
        </div>

        {/* Quality Process */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('qualityPage.processTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualitySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="relative flex"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (hidden on mobile) */}
                  {index < qualitySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('qualityPage.certificationsTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{cert.badge}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Quality Promise */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            {t('qualityPage.promise.title')}
          </h3>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('qualityPage.promise.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {t('qualityPage.promise.learnMore')}
            </a>
            <a
              href="#products"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              {t('qualityPage.promise.viewProducts')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
