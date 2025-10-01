// src/app/[locale]/layout.tsx
import '../globals.css'
import { Metadata } from 'next'
import { NextIntlClientProvider, useTranslations } from 'next-intl' // 用于在Server Component中获取locale
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
// import { GeistSans } from 'geist/font/sans'
import { Inter } from 'next/font/google'
import type { LocalesType } from '@/i18n/request'
// const { t } = useTranslations()
const inter = Inter({
  subsets: ['latin'],
})

// 从数据库获取 SEO 元数据
async function getMetadataFromDB(locale: string): Promise<Metadata> {
  // 示例：调用后端 API 或 ORM 查询
  // const res = await fetch(`${process.env.API_URL}/seo/${locale}`);
  // return res.json();
  return {
    title: {
      default: 'Kabona',
      template: '%s | Kabona',
    },
    description:
      'Professional global seafood supplier committed to providing customers with the highest quality seafood products and services',
    keywords: ['Kabona', '创新', '全球化', '技术服务', '解决方案'],
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return await getMetadataFromDB(locale)
}
interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // 可选：再次验证语言，尽管中间件已经处理过
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LocalesType)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={inter.className}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
