'use client'
import { Avatar } from 'antd'
import React from 'react'

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
  ]

  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      <div className="flex space-x-4 overflow-x-auto">
        {stories.map((story) => (
          <div
            key={story.id}
            className="group flex min-w-[80px] cursor-pointer flex-col items-center space-y-2"
          >
            <div
              className={`relative ${story.hasStory ? 'rounded-full ring-4 ring-blue-500' : ''}`}
            >
              <Avatar
                size={64}
                src={story.avatar}
                className="transition-transform group-hover:scale-105"
              />
              {story.isAddStory && (
                <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-blue-600">
                  <span className="text-sm font-bold text-white">+</span>
                </div>
              )}
            </div>
            <span className="w-full truncate text-center text-xs font-medium text-gray-700">
              {story.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoryBar
