/* eslint-disable */
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import './globals.css'

import { Metadata } from 'next'
import { siteConfig } from '@/constant/siteConfig'
import GlobalProvider from '@/global-provider'
import WorkspaceLayout from '@/components/workspace-layout'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icon,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.landing],
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.landing,
        width: 1200,
        height: 630,
        alt: 'Landing Meta Image',
      },
    ],
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export function generateStaticParams() {
  return [{ locale: 'vi' }, { locale: 'en' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{
    locale: string
  }>
}) {
  const { locale } = await params

  let messages
  try {
    messages = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={roboto.className}>
        <GlobalProvider locale={locale} messages={messages}>
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
