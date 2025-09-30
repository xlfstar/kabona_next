'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Fish, Waves, Star, MapPin } from 'lucide-react'

export default function Products() {
  const t = useTranslations()
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: t('productsPage.categories.all'), icon: Fish },
    { id: 'fish', name: t('productsPage.categories.fish'), icon: Fish },
    {
      id: 'shellfish',
      name: t('productsPage.categories.shellfish'),
      icon: Waves,
    },
    {
      id: 'crustacean',
      name: t('productsPage.categories.crustaceans'),
      icon: Fish,
    },
  ]

  const products = [
    {
      id: 1,
      name: t('productsPage.items.salmon.name'),
      category: 'fish',
      image: '/api/placeholder/400/300',
      origin: t('productsPage.items.salmon.origin'),
      rating: 4.9,
      description: t('productsPage.items.salmon.description'),
      features: [
        t('productsPage.items.salmon.features.0'),
        t('productsPage.items.salmon.features.1'),
        t('productsPage.items.salmon.features.2'),
      ],
    },
    {
      id: 2,
      name: t('productsPage.items.lobster.name'),
      category: 'crustacean',
      image: '/api/placeholder/400/300',
      origin: t('productsPage.items.lobster.origin'),
      rating: 4.8,
      description: t('productsPage.items.lobster.description'),
      features: [
        t('productsPage.items.lobster.features.0'),
        t('productsPage.items.lobster.features.1'),
        t('productsPage.items.lobster.features.2'),
      ],
    },
    {
      id: 3,
      name: t('productsPage.items.oyster.name'),
      category: 'shellfish',
      image: '/api/placeholder/400/300',
      origin: t('productsPage.items.oyster.origin'),
      rating: 4.7,
      description: t('productsPage.items.oyster.description'),
      features: [
        t('productsPage.items.oyster.features.0'),
        t('productsPage.items.oyster.features.1'),
        t('productsPage.items.oyster.features.2'),
      ],
    },
    {
      id: 4,
      name: t('productsPage.items.kingCrab.name'),
      category: 'crustacean',
      image: '/api/placeholder/400/300',
      origin: t('productsPage.items.kingCrab.origin'),
      rating: 5.0,
      description: t('productsPage.items.kingCrab.description'),
      features: [
        t('productsPage.items.kingCrab.features.0'),
        t('productsPage.items.kingCrab.features.1'),
        t('productsPage.items.kingCrab.features.2'),
      ],
    },
    {
      id: 5,
      name: t('productsPage.items.seaBass.name'),
      category: 'fish',
      image: '/api/placeholder/400/300',
      origin: t('productsPage.items.seaBass.origin'),
      rating: 4.6,
      description: t('productsPage.items.seaBass.description'),
      features: [
        t('productsPage.items.seaBass.features.0'),
        t('productsPage.items.seaBass.features.1'),
        t('productsPage.items.seaBass.features.2'),
      ],
    },
    {
      id: 6,
      name: t('productsPage.items.greenMussels.name'),
      category: 'shellfish',
      image: '/api/placeholder/400/300',
      origin: t('productsPage.items.greenMussels.origin'),
      rating: 4.8,
      description: t('productsPage.items.greenMussels.description'),
      features: [
        t('productsPage.items.greenMussels.features.0'),
        t('productsPage.items.greenMussels.features.1'),
        t('productsPage.items.greenMussels.features.2'),
      ],
    },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <section
      id="products"
      className="py-20 bg-gray-50 overflow-hidden"
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
            {t('productsPage.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('productsPage.description')}
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-hidden">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </motion.button>
            )
          })}
        </div>

        {/* Products Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden pb-12">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Fish className="w-16 h-16 text-blue-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {t('productsPage.hotSale')}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white/90 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium ml-1">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{product.origin}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  {t('productsPage.details')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            {t('productsPage.cta.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {t('productsPage.cta.button')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
