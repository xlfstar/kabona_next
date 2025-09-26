'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Thermometer,
  Truck,
  Clock,
  Shield,
  Award,
} from 'lucide-react'

export default function Quality() {
  const qualitySteps = [
    {
      icon: CheckCircle,
      title: '严格筛选',
      description: '只选择来自最优质产区的海鲜，每个供应商都经过严格的资质认证',
      color: 'bg-green-500',
    },
    {
      icon: Thermometer,
      title: '温控管理',
      description: '采用先进的温控系统，确保海鲜在整个供应链中保持最佳温度',
      color: 'bg-blue-500',
    },
    {
      icon: Truck,
      title: '冷链运输',
      description: '专业的冷链物流网络，确保海鲜在运输过程中的新鲜度',
      color: 'bg-purple-500',
    },
    {
      icon: Clock,
      title: '快速配送',
      description: '高效的配送体系，最大程度缩短从海洋到餐桌的时间',
      color: 'bg-orange-500',
    },
  ]

  const certifications = [
    {
      name: 'HACCP认证',
      description: '危害分析与关键控制点认证',
      badge: '🏅',
    },
    {
      name: 'ISO 9001',
      description: '国际质量管理体系认证',
      badge: '🌟',
    },
    {
      name: 'MSC认证',
      description: '海洋管理委员会可持续渔业认证',
      badge: '🌊',
    },
    {
      name: 'BRC认证',
      description: '英国零售商协会全球食品安全标准',
      badge: '🛡️',
    },
    {
      name: 'FDA认证',
      description: '美国食品药品监督管理局认证',
      badge: '✅',
    },
    {
      name: 'EU认证',
      description: '欧盟食品安全标准认证',
      badge: '🇪🇺',
    },
  ]

  const features = [
    {
      icon: Shield,
      title: '全程可追溯',
      description:
        '从捕捞源头到最终交付，每个环节都有详细记录，确保产品来源透明可靠',
    },
    {
      icon: Award,
      title: '品质保证',
      description:
        '专业品控团队，严格的检验流程，确保每份产品都符合最高质量标准',
    },
    {
      icon: Thermometer,
      title: '智能监控',
      description: '物联网技术实时监控温度、湿度等关键指标，确保最佳保存条件',
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
            品质保证体系
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            严格的品质控制流程，多重认证保障，确保每一份海鲜都达到最高标准
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
            品质控制流程
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualitySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
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
            权威认证
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
          <h3 className="text-3xl font-bold mb-4">我们的品质承诺</h3>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            我们承诺提供的每一份海鲜都经过严格的品质检验，如果您对我们的产品不满意，
            我们将无条件退换货并承担所有相关费用。您的满意是我们最大的追求。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              了解更多详情
            </a>
            <a
              href="#products"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              查看认证产品
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
