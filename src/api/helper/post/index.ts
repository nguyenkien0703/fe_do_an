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

const postApi = {
  async list(params?: Record<string, any>): Promise<PostDto[]> {
    return instance.get('/post', { params }).then((res) => res.data?.data ?? [])
  },
}

export default postApi
