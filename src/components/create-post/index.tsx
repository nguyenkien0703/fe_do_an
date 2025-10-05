'use client'
import { Avatar, Input, Button, Modal, notification } from 'antd'
import {
  PictureOutlined,
  VideoCameraOutlined,
  SmileOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  CloseOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'
import postApi, { CreatePostBody } from '@/api/helper/post/index'

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [postContent, setPostContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setPostContent('')
  }

  const handlePost = async () => {
    if (!postContent.trim()) return

    setIsLoading(true)
    try {
      const postData: CreatePostBody = {
        userId: 'current-user-id', // TODO: Lấy từ auth store
        content: postContent.trim(),
        visibility: 'PUBLIC'
      }

      const response = await postApi.create(postData)
      
      if (response.success) {
        notification.success({
          message: 'Thành công',
          description: 'Bài viết đã được đăng thành công!',
          placement: 'topRight'
        })
        
        // Đóng modal và reset form
        setIsModalOpen(false)
        setPostContent('')
        
        // TODO: Có thể thêm logic để refresh danh sách posts ở đây
        // window.location.reload() // Tạm thời reload trang
      } else {
        throw new Error(response.message || 'Có lỗi xảy ra khi đăng bài')
      }
    } catch (error: any) {
      console.error('Error creating post:', error)
      notification.error({
        message: 'Lỗi',
        description: error.message || 'Có lỗi xảy ra khi đăng bài. Vui lòng thử lại.',
        placement: 'topRight'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
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
              className="resize-none rounded-full border-0 bg-gray-100 px-4 cursor-pointer"
              style={{ borderRadius: '24px' }}
              onClick={showModal}
              readOnly
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
            onClick={showModal}
          >
            Đăng bài
          </Button>
        </div>
      </div>

      {/* Modal Create Post */}
      <Modal
        title={null}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={600}
        centered
        className="create-post-modal"
        closable={false}
        styles={{
          body: { padding: 0 },
          content: { borderRadius: '12px' }
        }}
      >
        <div className="p-6">
          {/* Header Section */}
          <div className="mb-6 border-b-2 border-gray-200 pb-4">
            <div className="relative flex items-center justify-center">
              <h2 className="text-2xl font-bold text-gray-800">Tạo bài viết</h2>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={handleCancel}
                className="absolute right-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full"
              />
            </div>
          </div>

          {/* User Info Section */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <Avatar
                size={56}
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ban"
              />
              <div>
                <div className="font-semibold text-lg text-gray-800">Hoàng Thái</div>
                <div className="flex items-center space-x-1 text-base text-gray-500">
                  <GlobalOutlined />
                  <span>Công khai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Input Section */}
          <div className="mb-6">
            <Input.TextArea
              placeholder="Chia sẻ điều gì đó với mọi người"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              autoSize={{ minRows: 4, maxRows: 8 }}
              className="border-0 text-lg resize-none focus:shadow-none"
              style={{ fontSize: '18px', boxShadow: 'none' }}
            />
          </div>

          {/* Action Icons Section */}
          <div className="mb-6 border-t-2 border-gray-200 pt-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  type="text"
                  icon={<PictureOutlined style={{ fontSize: '24px' }} />}
                  className="flex items-center justify-center w-20 h-20 text-green-500 hover:bg-green-100 rounded-lg"
                  title="Thêm ảnh"
                />
                <Button
                  type="text"
                  className="flex items-center justify-center w-20 h-20 text-blue-500 hover:bg-blue-100 rounded-lg"
                  title="Thêm GIF"
                >
                  <span className="text-xl font-bold">GIF</span>
                </Button>
                <Button
                  type="text"
                  icon={<SmileOutlined style={{ fontSize: '24px' }} />}
                  className="flex items-center justify-center w-20 h-20 text-yellow-500 hover:bg-yellow-100 rounded-lg"
                  title="Thêm cảm xúc"
                />
                <Button
                  type="text"
                  icon={<EnvironmentOutlined style={{ fontSize: '24px' }} />}
                  className="flex items-center justify-center w-20 h-20 text-pink-500 hover:bg-pink-100 rounded-lg"
                  title="Thêm vị trí"
                />
                <Button
                  type="text"
                  icon={<FileTextOutlined style={{ fontSize: '24px' }} />}
                  className="flex items-center justify-center w-20 h-20 text-blue-400 hover:bg-blue-100 rounded-lg"
                  title="Thêm file"
                />
              </div>
            </div>
          </div>

          {/* Post Button Section */}
          <div className="flex justify-center">
            <Button
              type="primary"
              size="large"
              onClick={handlePost}
              disabled={!postContent.trim() || isLoading}
              loading={isLoading}
              className="border-0 px-8 py-2 h-auto text-base font-medium rounded-lg"
              style={{
                backgroundColor: postContent.trim() ? '#0089ED' : '#F3F4F6',
                borderColor: postContent.trim() ? '#0089ED' : '#F3F4F6',
                color: postContent.trim() ? '#FFFFFF' : '#9CA3AF'
              }}
            >
              {isLoading ? 'Đang đăng...' : 'Đăng bài'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CreatePost
