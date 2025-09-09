import { UserStatus } from '@/constant/user-status'
import { EActionStatus } from '../type'

export interface IAuthState {
  status: EActionStatus
  isAuthenticated: boolean | null
  userData: IAccount | null
  errorMessage: string
  errorCode: string
}

// export interface ILoginRequest {
//     walletAddress: string
//     signature: string
// }

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  userData: IAccount
}

export interface IAccount {
  id: number
  username: string
  email: string
  phoneNumber: string
  status: UserStatus
  lastLoginAt: string
}

export interface ILoginEmailRequest {
  taxOfCompany: string
  usernameOrEmail: string
  password: string
  deviceInfo: string
}
