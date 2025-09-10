'use client'
import { Input, Avatar, Dropdown, Space } from 'antd'
import {
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  DownOutlined,
  UserOutlined,
  DesktopOutlined,
} from '@ant-design/icons'
import { Button, Layout } from 'antd'
import LanguageSwitcher from '@/components/language-switcher'
import authApi from '@/api/helper/auth'
import { notification } from 'antd'

import type { MenuProps } from 'antd'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthLogin } from '@/stores/auth/hooks'
import AccountInfo from '../account-info'

const Header = () => {
  const router = useRouter()
  const { authState, logoutAction } = useAuthLogin()
  const [mounted, setMounted] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      
      // Call API logout
      await authApi.logout()
      
      // Update Redux state
      logoutAction()
      
      // Clear session storage
      sessionStorage.removeItem('login_form_state')
      sessionStorage.removeItem('login_user_email')
      
      // Redirect to login
      router.push('/')
      
      // Show success notification
      notification.success({
        message: 'Đăng xuất thành công',
        description: 'Hẹn gặp lại bạn lần sau!',
        duration: 3,
        placement: 'topRight',
        showProgress: true,
      })
    } catch (error: any) {
      console.error('Logout error:', error)
      
      // Even if API fails, still logout locally
      logoutAction()
      sessionStorage.removeItem('login_form_state')
      sessionStorage.removeItem('login_user_email')
      router.push('/')
      
      notification.warning({
        message: 'Đã đăng xuất',
        description: 'Phiên đăng nhập đã kết thúc.',
        duration: 3,
        placement: 'topRight',
        showProgress: true,
      })
    } finally {
      setIsLoggingOut(false)
    }
  }

  const handleMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case '1':
        router.push('/profile')
        break
      case '2':
        router.push('/settings')
        break
      case '3':
        handleLogout()
        break
    }
  }

  const userMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: 'Settings',
      icon: <DesktopOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: isLoggingOut ? 'Đang đăng xuất...' : 'Logout',
      icon: <BellOutlined />,
      disabled: isLoggingOut,
    },
  ]

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
