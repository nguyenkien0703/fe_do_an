'use client'

import React from 'react'
import StoryBar from '@/components/story-bar'
import CreatePost from '@/components/create-post'
import Post from '@/components/post'
import { useQuery } from '@tanstack/react-query'
import postApi, { PostDto } from '@/api/helper/post/index'

export const HomePage = () => {
  const { data, isLoading, isError } = useQuery<PostDto[]>({
    queryKey: ['posts'],
    queryFn: () => postApi.list(),
  })

  return (
    <div className="mx-auto max-w-3xl">
      <StoryBar />
      <CreatePost />

      {isLoading && <div className="p-4 text-center text-gray-500">Đang tải bài viết...</div>}
      {isError && <div className="p-4 text-center text-red-500">Không tải được bài viết.</div>}

      {data?.length === 0 && !isLoading && !isError && (
        <div className="p-4 text-center text-gray-500">Chưa có bài viết nào</div>
      )}

      {data?.map((p) => (
        <Post
          key={p.id}
          id={p.id}
          userId={p.userId}
          username={p.userId || 'Người dùng'}
          avatar={''}
          createdAt={p.createdAt}
          content={p.content}
          media={p.media ? [{ type: p.media.type, url: p.media.url }] : []}
          likes={0}
          comments={0}
          shares={0}
        />
      ))}
    </div>
  )
}

export default HomePage
