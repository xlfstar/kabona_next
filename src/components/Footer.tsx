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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: '深海鱼类', href: '#products' },
      { name: '贝类海鲜', href: '#products' },
      { name: '甲壳类', href: '#products' },
      { name: '特色海鲜', href: '#products' },
    ],
    company: [
      { name: '关于我们', href: '#about' },
      { name: '品质保证', href: '#quality' },
      { name: '新闻资讯', href: '#' },
      { name: '招聘信息', href: '#' },
    ],
    service: [
      { name: '批发服务', href: '#' },
      { name: '零售服务', href: '#' },
      { name: '定制服务', href: '#' },
      { name: '售后支持', href: '#' },
    ],
    support: [
      { name: '联系我们', href: '#contact' },
      { name: '在线客服', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '配送政策', href: '#' },
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
                致力于以最低成本提供来自全球各地最高品质海鲜，以最高标准加工和管理产品，确保新鲜度。
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
                    上海市浦东新区海鲜大道123号
                  </span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">产品分类</h4>
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
              <h4 className="text-lg font-semibold mb-6">公司信息</h4>
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
              <h4 className="text-lg font-semibold mb-6">服务项目</h4>
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
              <h4 className="text-lg font-semibold mb-6">客户支持</h4>
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
              <h4 className="text-xl font-semibold mb-2">订阅我们的新闻通讯</h4>
              <p className="text-gray-300">获取最新的产品信息和行业动态</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="请输入您的邮箱地址"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                立即订阅
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Kabona. 保留所有权利. |
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200 ml-2"
              >
                隐私政策
              </a>{' '}
              |
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200 ml-2"
              >
                服务条款
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
              官网：
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
