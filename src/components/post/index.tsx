'use client';
import { Avatar, Button, Image } from 'antd';
import { LikeOutlined, CommentOutlined, ShareAltOutlined, EllipsisOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

interface PostProps {
  id: string;
  author: {
    name: string;
    avatar: string;
    time: string;
  };
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  shares: number;
}

const Post: React.FC<PostProps> = ({ author, content, images, likes, comments, shares }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar size={48} src={author.avatar} />
            <div>
              <div className="font-semibold text-gray-900">{author.name}</div>
              <div className="text-sm text-gray-500">{author.time}</div>
            </div>
          </div>
          <Button
            type="text"
            icon={<EllipsisOutlined />}
            className="text-gray-500 hover:bg-gray-100"
          />
        </div>

        {/* Post Content */}
        {content && (
          <div className="mt-4 text-gray-800">
            {content}
          </div>
        )}
      </div>

      {/* Post Images */}
      {images && images.length > 0 && (
        <div className="relative">
          {images.length === 1 ? (
            <Image
              src={images[0]}
              alt="Post image"
              className="w-full max-h-96 object-cover"
              preview={false}
            />
          ) : (
            <div className="grid grid-cols-2 gap-1">
              {images.slice(0, 2).map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-48 object-cover"
                  preview={false}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👍</span>
            </div>
            <span>{likesCount}</span>
          </div>
          <div className="flex space-x-4">
            <span>{comments} bình luận</span>
            <span>{shares} chia sẻ</span>
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-around">
          <Button
            type="text"
            icon={<LikeOutlined />}
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              liked ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span>Thích</span>
          </Button>
          
          <Button
            type="text"
            icon={<CommentOutlined />}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span>Bình luận</span>
          </Button>
          
          <Button
            type="text"
            icon={<ShareAltOutlined />}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span>Chia sẻ</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;