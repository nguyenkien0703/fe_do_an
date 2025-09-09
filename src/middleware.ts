import createMiddleware from 'next-intl/middleware'
// import useCurrentChainInformation from './hooks/useCurrentChainInformation';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'vi'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  // defaultLocale: `en/${chainData.name.replace(/\s+/g, '')}`
  defaultLocale: 'en',
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
