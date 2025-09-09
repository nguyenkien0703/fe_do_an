'use client'
import '@rainbow-me/rainbowkit/styles.css'
import { ConfigProvider } from 'antd'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { FC, ReactNode, useState } from 'react'
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
