'use client'
import React from 'react'
import { Dropdown, MenuProps, Typography } from 'antd'
import { useTranslations } from 'next-intl'
import { useAuthLogin } from '@/stores/auth/hooks'
import Link from 'next/link'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
const { Text } = Typography

export const AccountInfo = ({ avatar }: { name: string; avatar: string }) => {
  const t = useTranslations()
  const { authState, logoutAction } = useAuthLogin()
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
          onClick={async () => {
            logoutAction()
            await new Promise((resolve) => setTimeout(resolve, 500))
          }}
        >
          {t('LOGOUT')}
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
      <div className="flex gap-2 items-center">
        <div className="flex gap-2 items-center">
          <Image
            loader={() => authState.userData?.avatar || avatar}
            src={authState.userData?.avatar || avatar}
            alt={'avatar'}
            width={24}
            height={24}
            className="w-8 h-8 rounded-full"
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
