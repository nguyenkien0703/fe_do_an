import instance from '@/api/instances'

export interface PostMediaDto {
  type: 'IMAGE' | 'VIDEO'
  url: string
}

export interface PostDto {
  id: string
  userId: string
  content: string
  media?: PostMediaDto | null
  groupId?: string
  sharedPostId?: string | null
  isAnonymous?: boolean
  approvalStatus?: string
  createdAt: string
  updatedAt: string
  deletedAt?: string | null
  deletedBy?: string | null
}

export interface PostListParams {
  size?: number
  timeCursor?: string
}

export interface PostListResponse {
  responseList: PostDto[]
  nextCursor?: string
}

export interface ApiResponse<T> {
  success: boolean
  errorCode: string | null
  message: string | null
  data: T
  timestamp: string
}

export interface CreatePostBody {
  userId: string
  content: string
  media?: PostMediaDto | null
  groupId?: string
  sharedPostId?: string | null
  isAnonymous?: boolean
  visibility: 'PUBLIC' | 'PRIVATE'
}

const postApi = {
  async list(params?: PostListParams): Promise<PostListResponse & { hasMore: boolean }> {
    return instance.get('/post', { params }).then((res) => {
      const response: ApiResponse<PostListResponse> = res.data
      if (response.success && response.data) {
        return {
          responseList: response.data.responseList,
          nextCursor: response.data.nextCursor,
          hasMore: !!response.data.nextCursor // hasMore = true nếu có nextCursor
        }
      }
      return { responseList: [], hasMore: false }
    })
  },
  
  async listAll(params?: Record<string, any>): Promise<PostDto[]> {
    return instance.get('/post', { params }).then((res) => {
      const response: ApiResponse<PostListResponse> = res.data
      return response.success && response.data ? response.data.responseList : []
    })
  },

  async create(body: CreatePostBody) {
    return instance.post('/post', body).then((res) => res.data)
  },
}

export default postApi
