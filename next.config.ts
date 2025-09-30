import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  /* config options here */
  // 确保静态文件可以被正确访问
  // trailingSlash: false,
  // // 修复 Watchpack 错误
  // webpack: (config) => {
  //   config.watchOptions = {
  //     ...config.watchOptions,
  //     ignored: [
  //       '**/node_modules',
  //       '**/.git',
  //       '**/System Volume Information',
  //       '**/$RECYCLE.BIN',
  //     ],
  //   }
  //   return config
  // },
}

export default withNextIntl(nextConfig)
