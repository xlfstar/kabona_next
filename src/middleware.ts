// src/middleware.ts
import createMiddleware from 'next-intl/middleware'

// 在 middleware 中定义支持的语言和默认语言
export default createMiddleware({
  locales: ['en', 'zh', 'ja'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // 可选配置：对于默认语言，是否在URL中显示语言前缀
})

// 配置中间件应用的路径
export const config = {
  matcher: ['/', '/(zh|en|ja)/:path*'], // 匹配所有路径，排除API路由等
}
