// src/app/[locale]/layout.tsx
import '../globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl' // 用于在Server Component中获取locale
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
// 在布局的元数据中支持多语言
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locale: string }>
// }) {
//   const { locale } = await params
//   return {
//     title: 'My Internationalized App',
//   }
// }

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
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
