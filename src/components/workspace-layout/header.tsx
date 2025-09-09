'use client';
import { Input, Avatar, Dropdown, Space } from 'antd';
import {
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Button, Layout } from 'antd';

import type { MenuProps } from 'antd';

const Header = () => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Profile'
    },
    {
      key: '2',
      label: 'Settings'
    },
    {
      key: '3',
      label: 'Logout'
    }
  ];

  return (
    <div className="fixed top-0 z-[100] w-full  flex bg-white px-6 py-3 shadow-sm max-[470px]:px-2">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-2xl font-bold text-blue-600">Zono</div>
      </div>

      {/* Right Side - User Menu */}
      <div className="flex items-center space-x-4">
        {/* User Profile */}
        <Dropdown
          menu={{ items: userMenuItems }}
          trigger={['click']}
        >
          <Space className="cursor-pointer">
            <Avatar
              size={40}
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            />
            <DownOutlined className="text-gray-600" />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
