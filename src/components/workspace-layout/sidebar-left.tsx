'use client'
import { Menu, Avatar } from 'antd'
import {
  HomeOutlined,
  UserOutlined,
  BellOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import React from 'react'

const SidebarLeft = () => {
  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Bảng tin',
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: 'Bạn bè',
    },
    {
      key: '3',
      icon: <BellOutlined />,
      label: 'Thông báo',
    },
    {
      key: '4',
      icon: <VideoCameraOutlined />,
      label: 'Video',
    },
    {
      key: '5',
      icon: <DesktopOutlined />,
      label: 'Trực tiếp',
    },
    {
      key: '6',
      icon: <TeamOutlined />,
      label: 'Nhóm',
    },
  ]

  const recentActivities = [
    { id: 1, name: 'Roger Korsgaard', time: 'recent' },
    { id: 2, name: 'Tìm kiếm ABC', time: 'recent' },
    { id: 3, name: 'Tham gia nhóm ABC', time: 'recent' },
    { id: 4, name: 'NoName', time: 'recent' },
  ]

  return (
    <div className="sticky top-16 h-[calc(100vh-64px)] w-64 overflow-y-auto bg-white shadow-sm">
      <div className="p-4">
        {/* User Profile Section */}
        <div className="mb-6 flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-50">
          <Avatar
            size={48}
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ban"
          />
          <div>
            <div className="font-semibold text-gray-800">Ban</div>
            <div className="text-sm text-gray-500">Xem trang cá nhân</div>
          </div>
        </div>

        {/* Navigation Menu */}
        <Menu
          mode="vertical"
          items={menuItems}
          className="border-none"
          selectedKeys={['1']}
        />

        {/* Recent Activities Section */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Hoạt động gần đây
          </h3>
          <div className="space-y-2">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-50"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">{activity.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-sm text-blue-600 hover:underline">
              Xem tất cả
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarLeft
