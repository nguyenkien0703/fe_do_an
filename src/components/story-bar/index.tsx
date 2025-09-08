'use client';
import { Avatar } from 'antd';
import React from 'react';

const StoryBar = () => {
  const stories = [
    {
      id: 1,
      name: 'Bạn',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      hasStory: false,
      isAddStory: true,
    },
    {
      id: 2,
      name: 'Anh Tài',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnhTai',
      hasStory: true,
    },
    {
      id: 3,
      name: 'Nguyễn Kiên',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenKien',
      hasStory: true,
    },
    {
      id: 4,
      name: 'Hoàng Thái',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangThai',
      hasStory: true,
    },
    {
      id: 5,
      name: 'Nguyễn B',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenB',
      hasStory: true,
    },
    {
      id: 6,
      name: 'Nguyễn A',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenA',
      hasStory: true,
    },
    {
      id: 7,
      name: 'Nguyễn Thị B',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NguyenThiB',
      hasStory: true,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center space-y-2 cursor-pointer group min-w-[80px]"
          >
            <div className={`relative ${story.hasStory ? 'ring-4 ring-blue-500 rounded-full' : ''}`}>
              <Avatar
                size={64}
                src={story.avatar}
                className="transition-transform group-hover:scale-105"
              />
              {story.isAddStory && (
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-700 text-center font-medium truncate w-full">
              {story.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBar;