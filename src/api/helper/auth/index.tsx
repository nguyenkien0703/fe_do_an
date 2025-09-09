import instance, { clientNoneAuth } from '@/api/instances'

interface AuthParams {
  address: string
  signature: string
}

export interface CreateRegisterBody {
    username: string
    email: string
    password: string
}

export interface CreateLoginBody {
    usernameOrEmail: string
    password: string
    visitorId: string    // FingerprintJS unique ID
      browser: string      // Chrome, Firefox, Safari, Edge
      os: string          // Windows, macOS, Linux, Android, iOS
      ip: string          // Public IP address
    remember: boolean
}
const authApi = {
  async signIn(body: CreateLoginBody) {
    return instance.post(`/auth/login`, body).then((res: any) => res.data)
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
