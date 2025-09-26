import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Kabona - 全球优质海鲜供应商',
    template: '%s | Kabona',
  },
  description:
    'Kabona致力于以最低成本提供来自全球各地最高品质海鲜，以最高标准加工和管理产品，确保新鲜度。',
  keywords: ['海鲜', 'seafood', '全球供应', '高品质', '新鲜', 'Kabona'],
  authors: [{ name: 'Kabona Team' }],
  openGraph: {
    title: 'Kabona - 全球优质海鲜供应商',
    description: '以最低成本提供来自全球各地最高品质海鲜',
    url: 'http://kabonaus.com',
    siteName: 'Kabona',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
