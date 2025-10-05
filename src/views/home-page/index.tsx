'use client'

import React, { useState, useEffect, useCallback } from 'react'
import StoryBar from '@/components/story-bar'
import CreatePost from '@/components/create-post'
import Post from '@/components/post'
import { useQuery } from '@tanstack/react-query'
import postApi, { PostDto, PostListResponse } from '@/api/helper/post/index'

export const HomePage = () => {
  const [posts, setPosts] = useState<PostDto[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [nextCursor, setNextCursor] = useState<string | undefined>()
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const { data: initialData, isLoading, isError } = useQuery<PostListResponse & { hasMore: boolean }>({
    queryKey: ['posts', 'initial'],
    queryFn: () => postApi.list({ size: 10 }),
  })

  /* 
    Call lại hàm khi hasMore, isLoadingMore hoặc nextCursor thay đổi.
    Điều kiện dừng:
      !hasMore: đã hết dữ liệu (server báo không còn post mới).
      isLoadingMore: đang trong quá trình gọi API rồi -> không gọi thêm nữa để tránh trùng lặp.
      !nextCursor: chưa có con trỏ phân trang -> không thể gọi API tiếp
   */
  const loadMorePosts = useCallback(async () => {
    if (!hasMore || isLoadingMore || !nextCursor) return

    setIsLoadingMore(true)
    try {
      const response = await postApi.list({ 
        size: 10, 
        timeCursor: nextCursor 
      })
      
      setPosts(prev => [...prev, ...response.responseList])
      setHasMore(response.hasMore)
      setNextCursor(response.nextCursor)
    } catch (error) {
      console.error('Error loading more posts:', error)
    } finally {
      setIsLoadingMore(false)
    }
  }, [hasMore, isLoadingMore, nextCursor])

  // Đồng bộ state từ initialData
  useEffect(() => {
    if (initialData) {
      setPosts(initialData.responseList)
      setHasMore(initialData.hasMore)
      setNextCursor(initialData.nextCursor)
    }
  }, [initialData])

  // Infinite scroll handler -> Nếu người dùng cách cuối trang 1000px thì gọi hàm loadMorePosts
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        loadMorePosts()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMorePosts])

  return (
    <div className="mx-auto max-w-3xl">
      <StoryBar />
      <CreatePost />

      {isLoading && <div className="p-4 text-center text-gray-500">Đang tải bài viết...</div>}
      {isError && <div className="p-4 text-center text-red-500">Không tải được bài viết.</div>}

      {posts.length === 0 && !isLoading && !isError && (
        <div className="p-4 text-center text-gray-500">Chưa có bài viết nào</div>
      )}

      {posts.map((p) => (
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

      {/* Load more indicator */}
      {isLoadingMore && (
        <div className="p-4 text-center text-gray-500">
          <div className="inline-flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500 mr-2"></div>
            Đang tải thêm bài viết...
          </div>
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div className="p-4 text-center text-gray-500">
          Đã hiển thị tất cả bài viết
        </div>
      )}
    </div>
  )
}

export default HomePage
