'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Fish, Waves, Star, MapPin } from 'lucide-react'

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: '全部产品', icon: Fish },
    { id: 'fish', name: '深海鱼类', icon: Fish },
    { id: 'shellfish', name: '贝类海鲜', icon: Waves },
    { id: 'crustacean', name: '甲壳类', icon: Fish },
  ]

  const products = [
    {
      id: 1,
      name: '挪威三文鱼',
      category: 'fish',
      image: '/api/placeholder/400/300',
      origin: '挪威',
      rating: 4.9,
      description: '来自挪威冰冷海域的优质三文鱼，肉质鲜美，富含Omega-3',
      features: ['野生捕捞', '冰鲜保存', '当日配送'],
    },
    {
      id: 2,
      name: '澳洲龙虾',
      category: 'crustacean',
      image: '/api/placeholder/400/300',
      origin: '澳大利亚',
      rating: 4.8,
      description: '澳洲深海龙虾，肉质紧实甘甜，是高端餐厅的首选',
      features: ['活体运输', '当季新鲜', '规格多样'],
    },
    {
      id: 3,
      name: '法国生蚝',
      category: 'shellfish',
      image: '/api/placeholder/400/300',
      origin: '法国',
      rating: 4.7,
      description: '法国布列塔尼海域的精品生蚝，口感鲜甜，层次丰富',
      features: ['人工养殖', '净化处理', '开壳即食'],
    },
    {
      id: 4,
      name: '阿拉斯加帝王蟹',
      category: 'crustacean',
      image: '/api/placeholder/400/300',
      origin: '阿拉斯加',
      rating: 5.0,
      description: '阿拉斯加深海帝王蟹，蟹肉饱满，味道鲜美',
      features: ['深海捕捞', '急冻保鲜', '蟹肉饱满'],
    },
    {
      id: 5,
      name: '地中海鲈鱼',
      category: 'fish',
      image: '/api/placeholder/400/300',
      origin: '地中海',
      rating: 4.6,
      description: '地中海养殖鲈鱼，肉质细嫩，适合多种烹饪方式',
      features: ['海水养殖', '无抗生素', '环保包装'],
    },
    {
      id: 6,
      name: '新西兰青贝',
      category: 'shellfish',
      image: '/api/placeholder/400/300',
      origin: '新西兰',
      rating: 4.8,
      description: '新西兰清澈海域的青贝，肉质鲜甜，营养丰富',
      features: ['纯净海域', '自然生长', '营养丰富'],
    },
  ]

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <section
      id="products"
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
            优质海鲜产品
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            精选来自全球各大海域的优质海鲜，严格品控，新鲜直达
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.name}
              </motion.button>
            )
          })}
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
              whileHover={{ y: -5 }}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Fish className="w-16 h-16 text-blue-400" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    热销
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
              <div className="p-6">
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
                  了解详情
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">想了解更多产品信息？</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            联系我们获取完整产品目录
          </a>
        </motion.div>
      </div>
    </section>
  )
}
