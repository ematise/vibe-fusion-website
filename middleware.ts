import { NextRequest, NextResponse } from 'next/server'

const locales = ['ro', 'en']
const defaultLocale = 'ro'

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest): string {
  // Check for saved preference in cookie first
  const localeCookie = request.cookies.get('preferred-language')?.value
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Try to get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  
  // Simple locale detection from Accept-Language - prioritize Romanian first
  if (acceptLanguage) {
    if (acceptLanguage.includes('ro')) {
      return 'ro'
    } else if (acceptLanguage.includes('en')) {
      return 'en'
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for certain paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already has a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If pathname already has a locale, just set the cookie and continue
  if (pathnameHasLocale) {
    const currentLocale = pathname.split('/')[1]
    if (locales.includes(currentLocale)) {
      const response = NextResponse.next()
      response.cookies.set('preferred-language', currentLocale, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      })
      return response
    }
  }

  // If no locale in pathname, redirect to the appropriate locale
  const locale = getLocale(request)
  const redirectPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  
  return NextResponse.redirect(new URL(redirectPath, request.url))
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)']
}
