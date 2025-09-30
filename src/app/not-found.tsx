import { redirect } from 'next/navigation'
import { routing } from '@/i18n/routing'

// This page renders when a route is requested that doesn't exist
export default function NotFound() {
  redirect(`/${routing.defaultLocale}`)
}
