'use client'
import { Avatar, Input, Button } from 'antd'
import {
  PictureOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import React from 'react'

const CreatePost = () => {
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
      {/* Create Post Input */}
      <div className="mb-4 flex items-center space-x-4">
        <Avatar
          size={48}
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ban"
        />
        <div className="flex-1">
          <Input.TextArea
            placeholder="Bạn đang nghĩ gì ?"
            autoSize={{ minRows: 1, maxRows: 4 }}
            className="resize-none rounded-full border-0 bg-gray-100 px-4"
            style={{ borderRadius: '24px' }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <Button
            type="text"
            icon={<PictureOutlined />}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="hidden sm:inline">Hình ảnh</span>
          </Button>

          <Button
            type="text"
            icon={<VideoCameraOutlined />}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="hidden sm:inline">Live</span>
          </Button>

          <Button
            type="text"
            icon={<SmileOutlined />}
            className="flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="hidden sm:inline">Cảm xúc</span>
          </Button>
        </div>

        <Button
          type="primary"
          className="border-0 bg-blue-600 px-6 hover:bg-blue-700"
        >
          Đăng bài
        </Button>
      </div>
    </div>
  )
}

export default CreatePost
