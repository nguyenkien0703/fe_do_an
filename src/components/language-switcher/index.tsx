'use client'

import { Dropdown, Space } from 'antd'
import { GlobalOutlined, DownOutlined } from '@ant-design/icons'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import type { MenuProps } from 'antd'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (selectedLocale: string) => {
    // Remove current locale from pathname and add new locale
    const segments = pathname.split('/')
    segments[1] = selectedLocale // Replace locale segment
    const newPath = segments.join('/')
    router.push(newPath)
  }

  const languageMenuItems: MenuProps['items'] = [
    {
      key: 'vi',
      label: (
        <div className="flex items-center space-x-2">
          <span>🇻🇳</span>
          <span>Tiếng Việt</span>
        </div>
      ),
      onClick: () => handleLanguageChange('vi'),
    },
    {
      key: 'en',
      label: (
        <div className="flex items-center space-x-2">
          <span>🇺🇸</span>
          <span>English</span>
        </div>
      ),
      onClick: () => handleLanguageChange('en'),
    },
  ]

  const getCurrentLanguageLabel = () => {
    switch (locale) {
      case 'vi':
        return (
          <div className="flex items-center space-x-2">
            <span>🇻🇳</span>
            <span>VI</span>
          </div>
        )
      case 'en':
        return (
          <div className="flex items-center space-x-2">
            <span>🇺🇸</span>
            <span>EN</span>
          </div>
        )
      default:
        return (
          <div className="flex items-center space-x-2">
            <GlobalOutlined />
            <span>Lang</span>
          </div>
        )
    }
  }

  return (
    <Dropdown
      menu={{ items: languageMenuItems }}
      trigger={['click']}
      placement="bottomRight"
    >
      <Space className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded">
        {getCurrentLanguageLabel()}
        <DownOutlined className="text-gray-600 text-xs" />
      </Space>
    </Dropdown>
  )
}

export default LanguageSwitcher