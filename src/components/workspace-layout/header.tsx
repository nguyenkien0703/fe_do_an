'use client'
import { Input, Avatar, Dropdown, Space } from 'antd'
import {
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Button, Layout } from 'antd'
import LanguageSwitcher from '@/components/language-switcher'

import type { MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthLogin } from '@/stores/auth/hooks'
import AccountInfo from '../account-info'

const Header = () => {
  const router = useRouter()
  const userMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Profile',
    },
    {
      key: '2',
      label: 'Settings',
    },
    {
      key: '3',
      label: 'Logout',
    },
  ]

  const { authState } = useAuthLogin()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClickZono = () => {
    router.push('/home')
  }

  return (
    <Layout.Header className="fixed top-0 z-[100] w-full border-b border-gray-200 bg-white px-6 py-3 shadow-sm max-[470px]:px-2">
      <div className="flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <div
            className="text-2xl font-bold text-blue-600"
            onClick={handleClickZono}
          >
            Zono
          </div>
        </div>

        {/* Right Side - Language Switcher & User Menu */}
        <div className="flex gap-3 sm:gap-7">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* User Profile */}
          
          {mounted &&  authState.userData && (
            <AccountInfo name="Stan Lee" avatar="/images/default-avatar.png" />
          )}
        </div>
      </div>
    </Layout.Header>
  )
}

export default Header
