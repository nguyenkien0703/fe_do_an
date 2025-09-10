import instance, { clientNoneAuth } from '@/api/instances'
import { VerificationType } from '@/constant/verifycation-type'
import { getAccessToken, getRefreshToken } from '@/utils/tokenCookies'

export interface CreateRegisterBody {
  username: string
  email: string
  password: string
}

export interface CreateLoginBody {
  usernameOrEmail: string
  password: string
  visitorId: string // FingerprintJS unique ID
  browser: string // Chrome, Firefox, Safari, Edge
  os: string // Windows, macOS, Linux, Android, iOS
  ip: string // Public IP address
  remember: boolean
}

export interface VerifyEmailBody {
  code: string
  type: VerificationType.EMAIL_VERIFICATION
}
const authApi = {
  async signIn(body: CreateLoginBody) {
    return instance.post(`/auth/login`, body).then((res) => res.data)
  },
  async refresh(headers: Record<string, string>) {
    return clientNoneAuth
      .post(`/auth/refresh`, null, {
        headers,
      })
      .then((res) => res.data)
  },

  async register(body: CreateRegisterBody) {
    return instance.post(`/auth/register`, body).then((res) => res.data)
  },

  async verifyEmail(body: VerifyEmailBody) {
    return instance.post(`/auth/verify-email`, body).then((res) => res.data)
  },
  async logout() {
    const refreshToken = getRefreshToken()
    const accessToken = getAccessToken()
    const logoutBody = {
      refreshToken: refreshToken,
    }
    return instance
      .post(`/auth/logout`, logoutBody, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
  },
}

export default authApi
