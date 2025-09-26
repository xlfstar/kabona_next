'use client'

import { motion } from 'framer-motion'
import { Globe, Users, Award, TrendingUp } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Globe, label: '服务国家', value: '50+', color: 'text-blue-600' },
    {
      icon: Users,
      label: '满意客户',
      value: '10,000+',
      color: 'text-green-600',
    },
    { icon: Award, label: '品质认证', value: '20+', color: 'text-purple-600' },
    {
      icon: TrendingUp,
      label: '年增长率',
      value: '35%',
      color: 'text-orange-600',
    },
  ]

  const values = [
    {
      title: '品质至上',
      description:
        '我们坚持最高的品质标准，每一份海鲜都经过严格的质量检验，确保客户获得最优质的产品。',
      icon: '🏆',
    },
    {
      title: '可持续发展',
      description:
        '我们致力于可持续的海洋资源利用，与渔业伙伴合作，保护海洋生态环境。',
      icon: '🌊',
    },
    {
      title: '创新技术',
      description:
        '采用最先进的冷链技术和智能物流系统，确保海鲜从捕捞到餐桌的每个环节都保持最佳状态。',
      icon: '🔬',
    },
    {
      title: '客户服务',
      description:
        '以客户为中心，提供24/7专业服务，确保每位客户都能获得满意的购买体验。',
      icon: '💝',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-white"
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
            关于 Kabona
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            专业的全球海鲜供应商，致力于为客户提供最优质的海鲜产品和服务
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
              我们的使命
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Kabona成立于海鲜贸易的黄金时代，我们始终坚持一个简单而重要的使命：
                <strong className="text-blue-600">
                  以最低成本提供来自全球各地最高品质的海鲜
                </strong>
                。
              </p>
              <p>
                我们深知海鲜的新鲜度对于味道和营养的重要性，因此我们建立了完善的全球供应链网络，
                与世界各地的优质渔业合作伙伴建立了长期稳定的合作关系。
              </p>
              <p>
                通过先进的保鲜技术和高效的物流系统，我们确保每一份海鲜都能在最短时间内从海洋到达客户的餐桌，
                保持最佳的新鲜度和口感。
              </p>
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
                <p className="text-blue-800 font-semibold">全球海鲜供应网络</p>
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
            我们的核心价值
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
                whileHover={{ y: -5 }}
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
          <h3 className="text-3xl font-bold mb-4">加入我们的合作伙伴网络</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            无论您是餐厅、批发商还是零售商，我们都有适合您的海鲜供应解决方案
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            开始合作
          </a>
        </motion.div>
      </div>
    </section>
  )
}
