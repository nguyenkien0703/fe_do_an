/* eslint-disable */
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

import { Metadata } from 'next';
import { siteConfig } from '@/constant/siteConfig';
import GlobalProvider from '@/global-provider';
import WorkspaceLayout from '@/components/workspace-layout';
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icon,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.landing]
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
        alt: 'Landing Meta Image'
      }
    ]
  },
  robots: 'index, follow'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0
};

export default async function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  const locale = 'vi'; // Default to VietNamese
  
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className="scroll-smooth"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://ai-cms.alex-defikit.workers.dev/styling.css"
        />
        <script src="https://ai-cms.alex-defikit.workers.dev/widget.js"></script>
      </head>

      <body className={roboto.className}>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>

        <noscript>You need to enable JavaScript to run this app.</noscript>
        <GlobalProvider
          locale={locale}
          messages={messages}
        >
          <WorkspaceLayout>{children}</WorkspaceLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
