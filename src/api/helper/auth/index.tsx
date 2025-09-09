import instance, { clientNoneAuth } from '@/api/instances'

interface AuthParams {
  address: string
  signature: string
}

export interface CreateRegisterBody {}

const authApi = {
  async signIn(params: AuthParams) {
    return instance.post(`/auth/login`, params).then((res: any) => res.data)
  },
  async refresh(headers: any) {
    return clientNoneAuth
      .post(`/auth/refresh`, null, {
        headers,
      })
      .then((res: any) => res.data)
  },

  async register(body: CreateRegisterBody): Promise<any> {
    return instance.post(`/auth/register`, body).then((res) => res.data)
  },
}

export default authApi
