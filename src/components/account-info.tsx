'use client'
import React from 'react'
import { Dropdown, MenuProps, Typography } from 'antd'
import { useTranslations } from 'next-intl'
import { useAuthLogin } from '@/stores/auth/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import authApi from '@/api/helper/auth'
import { useRouter } from 'next/navigation'
import { notification } from 'antd'
import { useState } from 'react'
const { Text } = Typography

export const AccountInfo = ({ avatar }: { name: string; avatar: string }) => {
  const t = useTranslations()
  const { authState, logoutAction } = useAuthLogin()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

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
        placement: 'topRight',
        showProgress: true,
        description: 'Hẹn gặp lại bạn lần sau!',
        duration: 3,
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

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Link
          className="py-[5px] text-sm leading-[22px]"
          rel="noopener noreferrer"
          href="/dashboard"
        >
          {t('DASHBOARD')}
        </Link>
      ),
    },
    {
      key: '1',
      label: (
        <Link
          className="py-[5px] text-sm  leading-[22px]"
          rel="noopener noreferrer"
          href="/profile"
        >
          {t('MY_PROFILE')}
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link
          className="py-[5px] text-sm  leading-[22px]"
          rel="noopener noreferrer"
          href="/change-user-password"
        >
          {t('CHANGE_PASSWORD')}
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <div
          className="py-[5px] text-sm leading-[22px]"
          onClick={handleLogout}
          style={{ opacity: isLoggingOut ? 0.6 : 1 }}
        >
          {isLoggingOut ? 'Đang đăng xuất...' : t('LOGOUT')}
        </div>
      ),
    },
  ]

  return (
    <Dropdown
      arrow={true}
      menu={{ items }}
      placement="bottomLeft"
      overlayStyle={{ borderRadius: '2px' }}
      className="cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image
            loader={() => authState.userData?.avatar || avatar}
            src={authState.userData?.avatar || avatar}
            alt={'avatar'}
            width={24}
            height={24}
            className="h-8 w-8 rounded-full"
          />
          <Text className="line-clamp-1 max-w-[87px] text-sm leading-[22px] text-black">
            {authState.userData?.username ?? 'Unknow'}
          </Text>
        </div>
        <DownOutlined className="h-[10px] w-[10px] text-gray-600" />
      </div>
    </Dropdown>
  )
}

export default AccountInfo
