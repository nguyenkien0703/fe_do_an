'use client'
import '@rainbow-me/rainbowkit/styles.css'
import { ConfigProvider, notification } from 'antd'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import React, { FC, ReactNode, useState } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useStore } from './stores'
import theme from './theme/antdThemeConfig'

import { AntdRegistry } from '@ant-design/nextjs-registry'
// import GlobalConnectWalletProvider from './components/connect-wallet/config';
interface ProvidersProps {
  locale: string
  messages: AbstractIntlMessages
  children: ReactNode
}

const GlobalProvider: FC<ProvidersProps> = ({ locale, messages, children }) => {
  // init state
  const store = useStore(undefined)
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  )

  // Configure notification globally
  React.useEffect(() => {
    notification.config({
      placement: 'topRight',
      duration: 3,
      showProgress: true,
      maxCount: 3,
      getContainer: () => document.body,
    })
    
    // Ensure notification container has proper z-index
    const style = document.createElement('style')
    style.innerHTML = `
      .ant-notification {
        z-index: 9999 !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="UTC"
        >
          <ConfigProvider theme={theme}>
            <AntdRegistry>
              {/* <GlobalConnectWalletProvider> */}
              {children}
              {/* </GlobalConnectWalletProvider> */}
            </AntdRegistry>
          </ConfigProvider>
        </NextIntlClientProvider>
      </QueryClientProvider>
    </ReduxProvider>
  )
}

export default GlobalProvider
