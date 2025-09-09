import instance, { clientNoneAuth } from '@/api/instances'
import { VerificationType } from '@/constant/verifycation-type'

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

export interface VerifyEmailBody {
  code: string
  type: VerificationType.EMAIL_VERIFICATION

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

  async verifyEmail(body: VerifyEmailBody): Promise<any> {
    return instance.post(`/auth/verify-email`, body).then((res) => res.data)
  },
}

export default authApi
