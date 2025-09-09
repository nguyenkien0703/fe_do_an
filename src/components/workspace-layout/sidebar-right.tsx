'use client';
import { Avatar, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const SidebarRight = () => {
  const contacts = [
    {
      id: 1,
      name: 'Roger Korsgaard',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roger',
      online: true
    },
    {
      id: 2,
      name: 'Tery Tor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tery',
      online: true
    },
    {
      id: 3,
      name: 'Angel Bergson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Angel',
      online: false
    },
    {
      id: 4,
      name: 'Emerson Gouse',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emerson',
      online: true
    },
    {
      id: 5,
      name: 'Corey Baptista',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Corey',
      online: false
    },
    {
      id: 6,
      name: 'Zain Culhane',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zain',
      online: true
    },
    {
      id: 7,
      name: 'Randy Lipshutz',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Randy',
      online: false
    },
    {
      id: 8,
      name: 'Craig Botosh',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Craig',
      online: true
    }
  ];

  return (
    <div className="sticky top-16 h-[calc(100vh-64px)] w-80 overflow-y-auto bg-white shadow-sm">
      <div className="p-4">
        {/* Messages Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Tin nhắn</h2>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-700">⋯</button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <Input
            placeholder="Tìm kiếm"
            prefix={<SearchOutlined className="text-gray-400" />}
            className="rounded-full border-0 bg-gray-100"
          />
        </div>

        {/* Online Status */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-600">Chính</span>
        </div>

        {/* Contact List */}
        <div className="space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-50"
            >
              <div className="relative">
                <Avatar
                  size={40}
                  src={contact.avatar}
                />
                {contact.online && (
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">
                  {contact.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More */}
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:underline">
            Xem tất cả
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
