'use client';
import { Menu, Avatar } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  BellOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import React from 'react';

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
  ];

  const recentActivities = [
    { id: 1, name: 'Roger Korsgaard', time: 'recent' },
    { id: 2, name: 'Tìm kiếm ABC', time: 'recent' },
    { id: 3, name: 'Tham gia nhóm ABC', time: 'recent' },
    { id: 4, name: 'NoName', time: 'recent' },
  ];

  return (
    <div className="w-64 h-[calc(100vh-64px)] bg-white shadow-sm overflow-y-auto sticky top-16">
      <div className="p-4">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3 mb-6 p-3 rounded-lg hover:bg-gray-50">
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Hoạt động gần đây</h3>
          <div className="space-y-2">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
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
  );
};

export default SidebarLeft;